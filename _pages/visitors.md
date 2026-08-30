---
layout: home
permalink: /visitors/
title: "Visitors Worldwide"
excerpt: "A live map showing where visitors to Yuyi Yang’s website are located"
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
  </div>
</section>
