---
layout: home
permalink: /presentations/
title: "Conference Presentations"
excerpt: "Selected presentations and co-authored contributions at conferences, annual meetings, and research symposia"
author_profile: false
---

<section class="presentations-section section-page-section" aria-labelledby="presentations-heading">
  <div class="section-shell">
    {% assign refereed_count = site.data.academic_activity.refereed_presentations | size %}
    {% assign non_refereed_count = site.data.academic_activity.non_refereed_presentations | size %}
    {% assign total_presentations = refereed_count | plus: non_refereed_count %}
    {% assign presentation_today = site.time | date: '%Y-%m-%d' %}
    {% assign all_contributions = site.data.academic_activity.refereed_presentations | concat: site.data.academic_activity.non_refereed_presentations %}
    {% assign upcoming_count = 0 %}
    {% for contribution in all_contributions %}
      {% if contribution.status == 'Upcoming' and contribution.start_date > presentation_today %}{% assign upcoming_count = upcoming_count | plus: 1 %}{% endif %}
    {% endfor %}
    <header class="section-heading-row">
      <div>
        <p class="home-eyebrow">Conference presentations</p>
        <h1 id="presentations-heading">Research shared across scholarly communities.</h1>
        <p class="section-intro">Selected presentations and co-authored contributions at conferences, annual meetings, and research symposia.</p>
      </div>
      <p class="section-count">{{ total_presentations }} conference contributions{% if upcoming_count > 0 %} · {{ upcoming_count }} upcoming{% endif %}</p>
    </header>

    <section class="presentation-category" aria-labelledby="refereed-presentations-heading">
      <header class="presentation-category__header">
        <div>
          <p class="home-eyebrow">Refereed</p>
          <h2 id="refereed-presentations-heading">Refereed Conference Presentations</h2>
        </div>
        <span>{{ refereed_count }} contributions</span>
      </header>
      {% assign refereed_by_year = site.data.academic_activity.refereed_presentations | group_by: "year" %}
      <div class="presentation-years">
        {% for year_group in refereed_by_year %}
        <section class="presentation-year-group" aria-labelledby="refereed-presentations-{{ year_group.name }}">
          <h3 id="refereed-presentations-{{ year_group.name }}">{{ year_group.name }}</h3>
          <div class="presentation-grid">
            {% for item in year_group.items %}
            {% include presentation-card.html item=item number=forloop.index today=presentation_today %}
            {% endfor %}
          </div>
        </section>
        {% endfor %}
      </div>
    </section>

    <section class="presentation-category presentation-category--secondary" aria-labelledby="non-refereed-presentations-heading">
      <header class="presentation-category__header">
        <div>
          <p class="home-eyebrow">Additional presentations</p>
          <h2 id="non-refereed-presentations-heading">Additional Conference &amp; Symposium Presentations</h2>
        </div>
        <span>{{ non_refereed_count }} contributions</span>
      </header>
      {% assign non_refereed_by_year = site.data.academic_activity.non_refereed_presentations | group_by: "year" %}
      <div class="presentation-years">
        {% for year_group in non_refereed_by_year %}
        <section class="presentation-year-group" aria-labelledby="non-refereed-presentations-{{ year_group.name }}">
          <h3 id="non-refereed-presentations-{{ year_group.name }}">{{ year_group.name }}</h3>
          <div class="presentation-grid">
            {% for item in year_group.items %}
            {% include presentation-card.html item=item number=forloop.index today=presentation_today %}
            {% endfor %}
          </div>
        </section>
        {% endfor %}
      </div>
    </section>
  </div>
</section>
