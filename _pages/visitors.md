---
layout: home
permalink: /visitors/
title: "Visitors Worldwide"
excerpt: "A live map of approximate locations of visitors to Yuyi Yang’s website"
author_profile: false
---

<section class="visitors-section section-page-section visitors-page" aria-labelledby="visitors-heading">
  <div class="section-shell">
    <header class="section-heading-row">
      <div>
        <p class="home-eyebrow">Visitors worldwide</p>
        <h1 id="visitors-heading">Ideas travel across borders.</h1>
        <p class="section-intro">A live view of where visitors to this website are connecting from.</p>
      </div>
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
    <p class="visitor-map-note">Map provided by <a href="https://mapmyvisitors.com/">MapMyVisitors</a>. Locations are approximate. <a href="{{ '/terms/' | relative_url }}">Privacy information</a>.</p>
  </div>
</section>
