(function () {
  "use strict";

  var metricsRoot = document.querySelector("[data-scholar-metrics]");
  if (!metricsRoot || !window.fetch) return;

  var endpoint = metricsRoot.getAttribute("data-scholar-metrics");
  if (!endpoint) return;

  function updateMetric(name, value, label) {
    if (!Number.isInteger(value) || value < 0) return;
    var card = document.querySelector('[data-scholar-metric="' + name + '"]');
    if (!card) return;
    var number = card.querySelector("strong");
    if (number) number.textContent = value.toLocaleString("en-US");
    card.setAttribute("aria-label", label(value));
  }

  fetch(endpoint + "?v=" + Date.now(), { cache: "no-store" })
    .then(function (response) {
      if (!response.ok) throw new Error("Scholar metrics request failed");
      return response.json();
    })
    .then(function (metrics) {
      updateMetric("citations", metrics.citations, function (value) {
        return value.toLocaleString("en-US") + " citations on Google Scholar";
      });
      updateMetric("h-index", metrics.h_index, function (value) {
        return "h-index of " + value + " on Google Scholar";
      });
      updateMetric("i10-index", metrics.i10_index, function (value) {
        return "i10-index of " + value + " on Google Scholar";
      });
    })
    .catch(function () {
      // Keep the last successfully built values when Scholar or GitHub is unavailable.
    });
})();
