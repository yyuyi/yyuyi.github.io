---
layout: home
permalink: /recognition/
title: "Recognition"
excerpt: "Honors, invited talks, workshops, leadership, and academic service"
author_profile: false
redirect_from:
  - /highlights/
---

<section class="academic-section section-page-section" aria-labelledby="recognition-heading">
  <div class="section-shell">
    <header class="section-heading-row">
      <div>
        <p class="home-eyebrow">Recognition</p>
        <h1 id="recognition-heading">Honors, invited talks &amp; service.</h1>
        <p class="section-intro">Selected honors, invited talks, workshops, academic leadership, and service contributions.</p>
      </div>
    </header>

    <div class="academic-grid">
      <article class="academic-panel">
        <span class="academic-panel__label">Honors &amp; awards</span>
        <ul>{% for item in site.data.academic_activity.honors %}<li><time>{{ item.year }}</time><div><strong>{% if item.title_link %}<a class="academic-title-link" href="{{ item.title_link }}" target="_blank" rel="noopener noreferrer">{{ item.title }}</a>{% else %}{{ item.title }}{% endif %}</strong><span>{% if item.organization_link and item.organization_abbreviation == nil %}<a class="academic-org-link" href="{{ item.organization_link }}" target="_blank" rel="noopener noreferrer">{{ item.organization }}</a>{% else %}{{ item.organization }}{% if item.organization_link %} (<a class="academic-org-link" href="{{ item.organization_link }}" target="_blank" rel="noopener noreferrer">{{ item.organization_abbreviation }}</a>){% endif %}{% endif %}</span></div></li>{% endfor %}</ul>
      </article>

      <div class="academic-stack">
        {% assign recognition_today = site.time | date: '%Y-%m-%d' %}
        <article class="academic-panel" aria-labelledby="invited-talks-heading">
          <span class="academic-panel__label" id="invited-talks-heading">Invited Talks &amp; Lectures</span>
          <ul>
            {% for item in site.data.academic_activity.guest_lectures %}
            <li>
              <div>
                <time>{{ item.year }}</time>
                {% if item.status == 'Upcoming' and item.start_date > recognition_today %}<span class="academic-entry-status">Upcoming</span>{% endif %}
              </div>
              <div>
                <strong>{% if item.title_link %}<a class="academic-title-link" href="{{ item.title_link | escape }}" target="_blank" rel="noopener noreferrer">{{ item.title | escape }}</a>{% else %}{{ item.title | escape }}{% endif %}</strong>
                <span>{{ item.organization }}{% if item.organization_link %} (<a class="academic-org-link" href="{{ item.organization_link }}" target="_blank" rel="noopener noreferrer">{{ item.organization_abbreviation }}</a>) {{ item.organization_detail }}{% endif %}</span>
                {% if item.invited_by_link %}<a class="academic-inline-link" href="{{ item.invited_by_link }}" target="_blank" rel="noopener noreferrer">{{ item.invited_by }}</a>{% endif %}
                {% if item.start_date %}<span><time datetime="{{ item.start_date }}">{{ item.start_date | date: '%B %-d, %Y' }}</time></span>{% endif %}
              </div>
            </li>
            {% endfor %}
          </ul>
        </article>
        <article class="academic-panel">
          <span class="academic-panel__label">Leadership &amp; service</span>
          <ul>{% for item in site.data.academic_activity.service %}<li><time>{{ item.year }}</time><div><strong>{% if item.title_link %}<a class="academic-title-link" href="{{ item.title_link }}" target="_blank" rel="noopener noreferrer">{{ item.title }}</a>{% else %}{{ item.title }}{% endif %}</strong><span>{{ item.organization }}</span></div></li>{% endfor %}</ul>
        </article>
      </div>
    </div>
  </div>
</section>
