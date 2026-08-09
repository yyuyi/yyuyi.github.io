---
layout: home
permalink: /visitors/
title: "Visitors Worldwide"
excerpt: "A rolling one-month map of visitors to Yuyi Yang’s website"
author_profile: false
---

<section class="visitors-section section-page-section visitors-page" aria-labelledby="visitors-heading">
  <div class="section-shell">
    <header class="section-heading-row">
      <div>
        <p class="home-eyebrow">Visitors worldwide</p>
        <h1 id="visitors-heading">Ideas travel across borders.</h1>
        <p class="section-intro">A live view of where readers are engaging with this work.</p>
      </div>
      <p class="section-count section-count--range">
        <span>Rolling one-month view</span>
        <small id="visitor-date-range" data-tracking-start="{{ site.visitor_map.tracking_since_iso }}">Aug. 09th – Aug. 09th</small>
      </p>
    </header>

    <div class="visitor-map">
      {% if site.visitor_map and site.visitor_map.script_src != "" %}
        <script type="text/javascript" id="mapmyvisitors" src="{{ site.visitor_map.script_src }}"></script>
      {% else %}
        <div class="visitor-map__placeholder" role="img" aria-label="World map placeholder awaiting live visitor map connection">
          <div class="map-dot map-dot--na"></div><div class="map-dot map-dot--eu"></div><div class="map-dot map-dot--asia"></div>
          <p>Live visitor tracking is disabled in this local preview.</p>
          <span>The published website will display the connected MapMyVisitors widget.</span>
        </div>
      {% endif %}
    </div>
  </div>
</section>

<script>
  (function () {
    var range = document.getElementById("visitor-date-range");
    if (!range) return;

    var startParts = range.dataset.trackingStart.split("-").map(Number);
    var trackingStart = new Date(startParts[0], startParts[1] - 1, startParts[2]);
    var today = new Date();
    today = new Date(today.getFullYear(), today.getMonth(), today.getDate());
    if (today < trackingStart) today = trackingStart;

    var previousMonthLastDay = new Date(today.getFullYear(), today.getMonth(), 0).getDate();
    var rollingStart = new Date(
      today.getFullYear(),
      today.getMonth() - 1,
      Math.min(today.getDate(), previousMonthLastDay)
    );
    var displayStart = rollingStart > trackingStart ? rollingStart : trackingStart;
    var monthNames = ["Jan.", "Feb.", "Mar.", "Apr.", "May", "Jun.", "Jul.", "Aug.", "Sep.", "Oct.", "Nov.", "Dec."];

    function ordinal(day) {
      var mod100 = day % 100;
      if (mod100 >= 11 && mod100 <= 13) return "th";
      if (day % 10 === 1) return "st";
      if (day % 10 === 2) return "nd";
      if (day % 10 === 3) return "rd";
      return "th";
    }

    function formatDate(date) {
      var day = String(date.getDate()).padStart(2, "0");
      return monthNames[date.getMonth()] + " " + day + ordinal(date.getDate());
    }

    range.textContent = formatDate(displayStart) + " – " + formatDate(today);
  }());
</script>
