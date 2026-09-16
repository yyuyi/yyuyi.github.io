---
layout: home
title: "Sitemap"
permalink: /sitemap/
excerpt: "Find the main pages on Yuyi Yang’s personal academic website"
author_profile: false
---

<section class="section-page-section information-page" aria-labelledby="sitemap-heading">
  <div class="section-shell">
    <header class="section-heading-row">
      <div>
        <p class="home-eyebrow">Sitemap</p>
        <h1 id="sitemap-heading">Find your way around.</h1>
      </div>
    </header>
    <div class="information-page__content">
      <ul>
        <li><a href="{{ '/' | relative_url }}">Homepage</a></li>
        {% for link in site.data.navigation.main %}
        <li><a href="{{ link.url | relative_url }}">{{ link.title }}</a></li>
        {% endfor %}
        <li><a href="{{ '/terms/' | relative_url }}">Privacy</a></li>
      </ul>
      <p>An <a href="{{ '/sitemap.xml' | relative_url }}">XML sitemap</a> is also available.</p>
    </div>
  </div>
</section>
