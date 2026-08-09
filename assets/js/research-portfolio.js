(function () {
  "use strict";

  function initPortfolio() {
    var grid = document.getElementById("portfolio-grid");
    if (!grid) return;

    var cards = Array.prototype.slice.call(grid.querySelectorAll(".portfolio-card"));
    var groups = Array.prototype.slice.call(grid.querySelectorAll(".portfolio-year-group"));
    var yearGroups = Array.prototype.slice.call(grid.querySelectorAll(".portfolio-year-group[data-year-group]"));
    var fixedGroups = Array.prototype.slice.call(grid.querySelectorAll(".portfolio-year-group[data-fixed-position='last']"));
    var searchInput = document.getElementById("portfolio-search");
    var sortSelect = document.getElementById("portfolio-sort");
    var count = document.getElementById("portfolio-visible-count");
    var empty = document.getElementById("portfolio-empty");
    var active = { domain: "all", type: "all", role: "all" };

    function normalize(value) {
      return (value || "").toLowerCase().replace(/\s+/g, " ").trim();
    }

    function containsValue(serialized, value) {
      if (value === "all") return true;
      return (serialized || "").split("|").indexOf(value) !== -1;
    }

    function sortYearGroups() {
      var mode = sortSelect ? sortSelect.value : "newest";
      yearGroups.sort(function (a, b) {
        var yearA = Number(a.getAttribute("data-year-group"));
        var yearB = Number(b.getAttribute("data-year-group"));
        return mode === "oldest" ? yearA - yearB : yearB - yearA;
      });
      yearGroups.forEach(function (group) { grid.appendChild(group); });
      fixedGroups.forEach(function (group) { grid.appendChild(group); });
    }

    function applyFilters() {
      var query = normalize(searchInput ? searchInput.value : "");
      var visible = 0;

      cards.forEach(function (card) {
        var matchesSearch = !query || normalize(card.getAttribute("data-search")).indexOf(query) !== -1;
        var matchesDomain = containsValue(card.getAttribute("data-domains"), active.domain);
        var matchesType = active.type === "all" || card.getAttribute("data-type") === active.type;
        var matchesRole = containsValue(card.getAttribute("data-roles"), active.role);
        var show = matchesSearch && matchesDomain && matchesType && matchesRole;

        card.hidden = !show;
        if (show) visible += 1;
      });

      groups.forEach(function (group) {
        var hasVisibleCards = Array.prototype.some.call(group.querySelectorAll(".portfolio-card"), function (card) {
          return !card.hidden;
        });
        group.hidden = !hasVisibleCards;
      });

      if (count) count.textContent = visible;
      if (empty) empty.hidden = visible !== 0;
    }

    document.querySelectorAll("[data-filter-group]").forEach(function (group) {
      group.addEventListener("click", function (event) {
        var button = event.target.closest("button[data-filter]");
        if (!button) return;

        var key = group.getAttribute("data-filter-group");
        active[key] = button.getAttribute("data-filter");
        group.querySelectorAll("button[data-filter]").forEach(function (candidate) {
          var selected = candidate === button;
          candidate.classList.toggle("is-active", selected);
          candidate.setAttribute("aria-pressed", selected ? "true" : "false");
        });
        applyFilters();
      });
    });

    if (searchInput) searchInput.addEventListener("input", applyFilters);
    if (sortSelect) sortSelect.addEventListener("change", function () {
      sortYearGroups();
      applyFilters();
    });

    sortYearGroups();
    applyFilters();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initPortfolio);
  } else {
    initPortfolio();
  }
}());
