---
layout: home
permalink: /publications/
title: "Publications"
excerpt: "Browse and filter Yuyi Yang’s interdisciplinary publication portfolio"
author_profile: false
---

<section class="portfolio-section section-page-section" id="research-portfolio" aria-labelledby="portfolio-heading">
  <div class="section-shell">
    <header class="section-heading-row">
      <div>
        <p class="home-eyebrow">Publications</p>
        <h1 id="portfolio-heading">An interdisciplinary publication portfolio.</h1>
        <p class="section-intro">Journal articles, CS conference submissions, invited book chapters, preprints, and manuscripts spanning AI, public health, social work, health communication, and biomedical research.</p>
        <p class="publication-legend">My name appears in bold; * denotes corresponding authorship, and (co-first) denotes co-first authorship.</p>
      </div>
      <p class="section-count"><span id="portfolio-visible-count">{{ site.data.research_portfolio | size }}</span> of {{ site.data.research_portfolio | size }} works</p>
    </header>

    <div class="portfolio-controls" aria-label="Filter research portfolio">
      <div class="filter-row" data-filter-group="domain">
        <span class="filter-label">Field</span>
        <div class="filter-options">
          <button class="filter-chip is-active" type="button" data-filter="all" aria-pressed="true">All</button>
          <button class="filter-chip" type="button" data-filter="AI Methods" aria-pressed="false">AI Methods</button>
          <button class="filter-chip" type="button" data-filter="Public Health" aria-pressed="false">Public Health</button>
          <button class="filter-chip" type="button" data-filter="Social Work & Mental Health" aria-pressed="false">Social Work &amp; Mental Health</button>
          <button class="filter-chip" type="button" data-filter="Health Communication" aria-pressed="false">Health Communication</button>
          <button class="filter-chip" type="button" data-filter="Biomedical Research" aria-pressed="false">Biomedical Research</button>
          <button class="filter-chip" type="button" data-filter="Responsible AI" aria-pressed="false">Responsible AI</button>
        </div>
      </div>

      <div class="filter-row" data-filter-group="type">
        <span class="filter-label">Type</span>
        <div class="filter-options">
          <button class="filter-chip is-active" type="button" data-filter="all" aria-pressed="true">All</button>
          <button class="filter-chip" type="button" data-filter="CS Conference" aria-pressed="false">CS Conference</button>
          <button class="filter-chip" type="button" data-filter="Journal Publication" aria-pressed="false">Journal Publication</button>
          <button class="filter-chip" type="button" data-filter="Book Chapters" aria-pressed="false">Book Chapters</button>
          <button class="filter-chip" type="button" data-filter="Under Review" aria-pressed="false">Under Review</button>
        </div>
      </div>

      <div class="filter-row" data-filter-group="role">
        <span class="filter-label">Role</span>
        <div class="filter-options">
          <button class="filter-chip is-active" type="button" data-filter="all" aria-pressed="true">All</button>
          <button class="filter-chip" type="button" data-filter="First author" aria-pressed="false">First author</button>
          <button class="filter-chip" type="button" data-filter="Co-first" aria-pressed="false">Co-first</button>
          <button class="filter-chip" type="button" data-filter="Second author" aria-pressed="false">Second author</button>
          <button class="filter-chip" type="button" data-filter="Corresponding" aria-pressed="false">Corresponding</button>
          <button class="filter-chip" type="button" data-filter="Other" aria-pressed="false">Other</button>
        </div>
      </div>

      <div class="filter-row">
        <label class="filter-label" for="portfolio-sort">Sort</label>
        <select id="portfolio-sort" class="portfolio-sort">
          <option value="newest">Newest first</option>
          <option value="oldest">Oldest first</option>
        </select>
      </div>
    </div>

    {% assign dated_publications = site.data.research_portfolio | where_exp: "paper", "paper.display_group != 'Under Review & Revision'" %}
    {% assign under_review_publications = site.data.research_portfolio | where: "display_group", "Under Review & Revision" %}
    {% assign publications_by_year = dated_publications | group_by: "year" %}
    <div class="portfolio-years" id="portfolio-grid" aria-live="polite">
      {% for year_group in publications_by_year %}
      <section class="portfolio-year-group" data-year-group="{{ year_group.name }}" aria-labelledby="publications-{{ year_group.name }}">
        <h2 id="publications-{{ year_group.name }}">{{ year_group.name }}</h2>
        <div class="portfolio-grid">
          {% for paper in year_group.items %}
          <article class="portfolio-card" data-year="{{ paper.year }}" data-type="{{ paper.type }}" data-domains="{{ paper.domains | join: '|' }}" data-roles="{{ paper.roles | join: '|' }}" data-title="{{ paper.title | downcase | escape }}" data-search="{{ paper.title | escape }} {{ paper.authors | escape }} {{ paper.venue | escape }} {{ paper.domains | join: ' ' | escape }} {{ paper.type | escape }}">
            <div class="portfolio-card__meta"><span class="paper-number">{{ forloop.index | prepend: '0' | slice: -2, 2 }}</span><span class="paper-type">{{ paper.type }}</span><span>{{ paper.status }}</span></div>
            <h3>{% if paper.link %}<a href="{{ paper.link }}" target="_blank" rel="noopener noreferrer">{{ paper.title }}</a>{% else %}{{ paper.title }}{% endif %}</h3>
            {% capture highlighted_author %}<strong>Yang Y{% if paper.roles contains 'Corresponding' %}*{% endif %}</strong>{% if paper.roles contains 'Co-first' %} (co-first){% endif %}{% endcapture %}
            <p class="portfolio-authors">{{ paper.authors | replace_first: 'Yang Y', highlighted_author }}</p>
            <p class="portfolio-venue">{{ paper.venue }}</p>
            <div class="portfolio-card__footer">
              <div class="paper-tags">{% for domain in paper.domains %}<span>{{ domain }}</span>{% endfor %}</div>
            </div>
          </article>
          {% endfor %}
        </div>
      </section>
      {% endfor %}

      <section class="portfolio-year-group portfolio-status-group" data-fixed-position="last" aria-labelledby="publications-under-review">
        <h2 id="publications-under-review">Under Review &amp; Revision</h2>
        <div class="portfolio-grid">
          {% for paper in under_review_publications %}
          <article class="portfolio-card" data-year="{{ paper.year }}" data-type="{{ paper.type }}" data-domains="{{ paper.domains | join: '|' }}" data-roles="{{ paper.roles | join: '|' }}" data-title="{{ paper.title | downcase | escape }}" data-search="{{ paper.title | escape }} {{ paper.authors | escape }} {{ paper.venue | escape }} {{ paper.domains | join: ' ' | escape }} {{ paper.type | escape }}">
            <div class="portfolio-card__meta"><span class="paper-number">{{ forloop.index | prepend: '0' | slice: -2, 2 }}</span><span class="paper-type">{{ paper.type }}</span><span>{{ paper.status }}</span></div>
            <h3>{% if paper.link %}<a href="{{ paper.link }}" target="_blank" rel="noopener noreferrer">{{ paper.title }}</a>{% else %}{{ paper.title }}{% endif %}</h3>
            {% capture highlighted_author %}<strong>Yang Y{% if paper.roles contains 'Corresponding' %}*{% endif %}</strong>{% if paper.roles contains 'Co-first' %} (co-first){% endif %}{% endcapture %}
            <p class="portfolio-authors">{{ paper.authors | replace_first: 'Yang Y', highlighted_author }}</p>
            <p class="portfolio-venue">{{ paper.venue }}</p>
            <div class="portfolio-card__footer">
              <div class="paper-tags">{% for domain in paper.domains %}<span>{{ domain }}</span>{% endfor %}</div>
            </div>
          </article>
          {% endfor %}
        </div>
      </section>
    </div>
    <p class="portfolio-empty" id="portfolio-empty" hidden>No publications match these filters.</p>
  </div>
</section>
