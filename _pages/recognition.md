---
layout: home
permalink: /recognition/
title: "Recognition"
excerpt: "Honors, invited talks, leadership, and academic service"
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
        <p class="section-intro">Selected honors, invited talks, academic leadership, and service contributions.</p>
      </div>
    </header>

    <div class="academic-grid">
      <article class="academic-panel">
        <span class="academic-panel__label">Honors &amp; awards</span>
        <ul>{% for item in site.data.academic_activity.honors %}<li><time>{{ item.year }}</time><div><strong>{% if item.title_link %}<a class="academic-title-link" href="{{ item.title_link }}" target="_blank" rel="noopener noreferrer">{{ item.title }}</a>{% else %}{{ item.title }}{% endif %}</strong><span>{% if item.organization_link and item.organization_abbreviation == nil %}<a class="academic-org-link" href="{{ item.organization_link }}" target="_blank" rel="noopener noreferrer">{{ item.organization }}</a>{% else %}{{ item.organization }}{% if item.organization_link %} (<a class="academic-org-link" href="{{ item.organization_link }}" target="_blank" rel="noopener noreferrer">{{ item.organization_abbreviation }}</a>){% endif %}{% endif %}</span></div></li>{% endfor %}</ul>
      </article>

      <div class="academic-stack">
        <article class="academic-panel">
          <span class="academic-panel__label">Invited talks</span>
          <ul>{% for item in site.data.academic_activity.guest_lectures %}<li><time>{{ item.year }}</time><div><strong>{{ item.title }}</strong><span>{{ item.organization }}{% if item.organization_link %} (<a class="academic-org-link" href="{{ item.organization_link }}" target="_blank" rel="noopener noreferrer">{{ item.organization_abbreviation }}</a>) {{ item.organization_detail }}{% endif %}</span>{% if item.invited_by_link %}<a class="academic-inline-link" href="{{ item.invited_by_link }}" target="_blank" rel="noopener noreferrer">{{ item.invited_by }}</a>{% endif %}</div></li>{% endfor %}</ul>
        </article>
        <article class="academic-panel">
          <span class="academic-panel__label">Leadership &amp; service</span>
          <ul>{% for item in site.data.academic_activity.service %}<li><time>{{ item.year }}</time><div><strong>{{ item.title }}</strong><span>{{ item.organization }}</span></div></li>{% endfor %}</ul>
        </article>
      </div>
    </div>
  </div>
</section>
