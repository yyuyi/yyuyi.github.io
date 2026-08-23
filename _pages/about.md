---
layout: home
permalink: /
title: "Yuyi Yang"
excerpt: "Agentic AI, public health, and human-centered decision-making"
author_profile: false
redirect_from:
  - /about/
  - /about.html
---

<section class="home-hero home-hero--standalone" aria-labelledby="home-name">
  <div class="home-hero__inner">
    <div class="home-hero__copy">
      <p class="home-eyebrow">PhD Student · Computational and Data Sciences</p>
      <h1 class="home-name" id="home-name">Yuyi <em>Yang</em></h1>
      <p class="home-tagline">Building <span>responsible AI</span> for public health, social science, and human decision-making.</p>
      <p class="home-intro">
        I am a PhD student in Computational and Data Sciences at Washington University in St. Louis and a McDonnell International Scholar. My research brings together agentic AI, qualitative inquiry, public health, and human-centered decision-making.
      </p>
      <p class="home-advisors">
        Advised by <a href="https://socialwork.nyu.edu/faculty-and-research/our-faculty/ruopeng-an.html">Dr. Ruopeng An</a> and <a href="https://engineering.washu.edu/faculty/Jiaxin-Huang.html">Dr. Jiaxin Huang</a>.
      </p>

      <div class="home-actions" aria-label="Profile links">
        <a class="home-button home-button--primary" href="{{ '/publications/' | relative_url }}">Explore Research</a>
        <a class="home-social" href="mailto:y.yuyi@wustl.edu">Email</a>
        <a class="home-social" href="https://scholar.google.com/citations?user=W3SVZDYAAAAJ&amp;hl=en">Google Scholar</a>
        <a class="home-social" href="https://www.linkedin.com/in/yuyi-yang">LinkedIn</a>
        <a class="home-social" href="https://orcid.org/0000-0002-7625-810X">ORCID</a>
      </div>
    </div>

    <figure class="home-portrait">
      <img src="/images/Yuyi.jpg" alt="Portrait of Yuyi Yang">
    </figure>
  </div>

  <div class="research-marquee" aria-label="Research areas">
    <div class="research-marquee__track">
      <div class="research-marquee__group">
        <span>Generative AI</span><i>✦</i>
        <span>Public Health</span><i>✦</i>
        <span>Computational Social Science</span><i>✦</i>
        <span>LLM Agents</span><i>✦</i>
        <span>Qualitative Research</span><i>✦</i>
        <span>Responsible AI</span><i>✦</i>
      </div>
      <div class="research-marquee__group" aria-hidden="true">
        <span>Generative AI</span><i>✦</i>
        <span>Public Health</span><i>✦</i>
        <span>Computational Social Science</span><i>✦</i>
        <span>LLM Agents</span><i>✦</i>
        <span>Qualitative Research</span><i>✦</i>
        <span>Responsible AI</span><i>✦</i>
      </div>
    </div>
  </div>
</section>

{% assign peer_reviewed_count = 0 %}
{% for paper in site.data.research_portfolio %}
  {% if paper.type == "Journal Publication" %}
    {% if paper.status == "Published" or paper.status == "In press" %}
      {% assign peer_reviewed_count = peer_reviewed_count | plus: 1 %}
    {% endif %}
  {% elsif paper.type == "CS Conference" %}
    {% if paper.status contains "Accepted" or paper.status == "Published" or paper.status == "In press" %}
      {% assign peer_reviewed_count = peer_reviewed_count | plus: 1 %}
    {% endif %}
  {% endif %}
{% endfor %}

<section class="home-metrics" aria-labelledby="academic-impact-heading">
  <div class="home-metrics__heading">
    <p class="home-eyebrow">Academic impact</p>
    <h2 class="sr-only" id="academic-impact-heading">Academic impact metrics</h2>
    <p>Citation metrics · Google Scholar</p>
  </div>

  <div class="home-metrics__grid" data-scholar-metrics="https://raw.githubusercontent.com/yyuyi/yyuyi.github.io/master/_data/scholar_metrics.json">
    <a class="metric-card" data-scholar-metric="citations" href="https://scholar.google.com/citations?user=W3SVZDYAAAAJ&amp;hl=en" aria-label="{{ site.data.scholar_metrics.citations }} citations on Google Scholar">
      <strong>{{ site.data.scholar_metrics.citations }}</strong>
      <span>Citations</span>
      <small>Google Scholar</small>
    </a>
    <a class="metric-card" data-scholar-metric="h-index" href="https://scholar.google.com/citations?user=W3SVZDYAAAAJ&amp;hl=en" aria-label="h-index of {{ site.data.scholar_metrics.h_index }} on Google Scholar">
      <strong>{{ site.data.scholar_metrics.h_index }}</strong>
      <span>h-index</span>
      <small>Google Scholar</small>
    </a>
    <a class="metric-card" data-scholar-metric="i10-index" href="https://scholar.google.com/citations?user=W3SVZDYAAAAJ&amp;hl=en" aria-label="i10-index of {{ site.data.scholar_metrics.i10_index }} on Google Scholar">
      <strong>{{ site.data.scholar_metrics.i10_index }}</strong>
      <span>i10-index</span>
      <small>Google Scholar</small>
    </a>
    <a class="metric-card" href="{{ '/publications/' | relative_url }}" aria-label="{{ peer_reviewed_count }} peer-reviewed publications">
      <strong>{{ peer_reviewed_count }}</strong>
      <span>Peer-reviewed publications</span>
      <small>Publication record</small>
    </a>
  </div>
</section>

<section class="home-content section-page-block" id="research" aria-labelledby="research-heading">
  <header class="home-section-heading section-page-heading">
    <p class="home-eyebrow">Research</p>
    <h2 id="research-heading">AI designed to complement rigorous human inquiry.</h2>
    <p>I develop and evaluate agentic AI systems for qualitative inquiry, public health simulation, and human-centered decision-making across social and healthcare contexts.</p>
  </header>

  <div class="research-grid">
    <article class="research-card">
      <span class="research-card__number">01</span>
      <h3>AI-Assisted Qualitative Research</h3>
      <p>I examine how large language models can support thematic analysis, grounded theory coding, and constant comparative analysis—where they approximate expert interpretation, where they diverge, and how retrieval, multi-agent workflows, audit trails, and human evaluation can make their use transparent and methodologically sound.</p>
    </article>

    <article class="research-card">
      <span class="research-card__number">02</span>
      <h3>Simulation &amp; Decision-Making</h3>
      <p>I develop LLM-based frameworks that simulate economic preferences, survey responses, policy reasoning, behavioral dynamics, information diffusion, and collective decision-making. This work evaluates both the promise and limits of AI agents as models of complex human and population-level systems.</p>
    </article>

    <article class="research-card">
      <span class="research-card__number">03</span>
      <h3>Responsible AI for Health</h3>
      <p>I develop reliable, interpretable, and culturally sensitive AI for mental health, digital health, vaccine safety surveillance, health communication, and public health education—grounded in rigorous evaluation, traceability, ethical accountability, and practical utility.</p>
    </article>
  </div>

  <div class="research-principles">
    <article><span>Method</span><strong>Evidence-grounded</strong><p>AI systems should complement established empirical and qualitative methods rather than obscure them.</p></article>
    <article><span>Design</span><strong>Human-centered</strong><p>Tools should remain interpretable, culturally sensitive, and accountable to the people affected by them.</p></article>
    <article><span>Impact</span><strong>Decision-relevant</strong><p>Research should support better health communication, policy reasoning, and real-world decisions.</p></article>
  </div>

  <div class="home-note">
    <article class="home-note__panel">
      <h3>Collaborate</h3>
      <p>I welcome interdisciplinary collaborations spanning AI, public health, and social work.</p>
    </article>
    <article class="home-note__panel">
      <h3>Beyond research</h3>
      <p>I enjoy Chinese cooking and dessert-making, making music on the piano, violin, and harmonica, and playing badminton.</p>
    </article>
  </div>
</section>
