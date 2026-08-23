#!/usr/bin/env python3
"""Update the site's Google Scholar metrics from a public author profile."""

from __future__ import annotations

import json
import os
import re
import sys
import urllib.error
import urllib.parse
import urllib.request
from html.parser import HTMLParser
from pathlib import Path


ROOT = Path(__file__).resolve().parents[1]
OUTPUT_PATH = ROOT / "_data" / "scholar_metrics.json"
DEFAULT_SCHOLAR_ID = "W3SVZDYAAAAJ"


class ScholarStatsParser(HTMLParser):
    def __init__(self) -> None:
        super().__init__()
        self._in_stat_cell = False
        self._cell_text: list[str] = []
        self.values: list[int] = []

    def handle_starttag(self, tag: str, attrs: list[tuple[str, str | None]]) -> None:
        if tag != "td":
            return
        classes = dict(attrs).get("class", "") or ""
        if "gsc_rsb_std" in classes.split():
            self._in_stat_cell = True
            self._cell_text = []

    def handle_data(self, data: str) -> None:
        if self._in_stat_cell:
            self._cell_text.append(data)

    def handle_endtag(self, tag: str) -> None:
        if tag != "td" or not self._in_stat_cell:
            return
        text = "".join(self._cell_text).strip().replace(",", "")
        if re.fullmatch(r"\d+", text):
            self.values.append(int(text))
        self._in_stat_cell = False
        self._cell_text = []


def fetch_profile(scholar_id: str) -> str:
    query = urllib.parse.urlencode({"user": scholar_id, "hl": "en"})
    request = urllib.request.Request(
        f"https://scholar.google.com/citations?{query}",
        headers={
            "User-Agent": (
                "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 "
                "(KHTML, like Gecko) Chrome/124.0 Safari/537.36"
            ),
            "Accept-Language": "en-US,en;q=0.9",
        },
    )
    with urllib.request.urlopen(request, timeout=30) as response:
        if response.status != 200:
            raise RuntimeError(f"Google Scholar returned HTTP {response.status}")
        return response.read().decode("utf-8", errors="replace")


def parse_metrics(html: str) -> dict[str, int]:
    parser = ScholarStatsParser()
    parser.feed(html)
    if len(parser.values) < 6:
        raise RuntimeError(
            "Could not find the Google Scholar metrics table; the previous values were kept."
        )

    metrics = {
        "citations": parser.values[0],
        "h_index": parser.values[2],
        "i10_index": parser.values[4],
    }
    if metrics["citations"] < metrics["h_index"] or metrics["h_index"] < 0:
        raise RuntimeError("Google Scholar returned implausible metric values.")
    return metrics


def main() -> int:
    scholar_id = os.environ.get("GOOGLE_SCHOLAR_ID", DEFAULT_SCHOLAR_ID).strip()
    if not re.fullmatch(r"[A-Za-z0-9_-]{12}", scholar_id):
        raise RuntimeError("GOOGLE_SCHOLAR_ID is not a valid 12-character profile ID.")

    metrics = parse_metrics(fetch_profile(scholar_id))
    OUTPUT_PATH.write_text(json.dumps(metrics, indent=2) + "\n", encoding="utf-8")
    print(
        "Google Scholar metrics: "
        f"{metrics['citations']} citations, h-index {metrics['h_index']}, "
        f"i10-index {metrics['i10_index']}"
    )
    return 0


if __name__ == "__main__":
    try:
        raise SystemExit(main())
    except (RuntimeError, urllib.error.URLError) as error:
        print(f"Scholar update failed: {error}", file=sys.stderr)
        raise SystemExit(1)
