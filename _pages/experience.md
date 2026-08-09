---
layout: home
permalink: /experience/
title: "Experience"
excerpt: "Interdisciplinary education and experience across AI, public health, social work, and medicine"
author_profile: false
---

<section class="experience-section section-page-section" aria-labelledby="experience-heading">
  <div class="section-shell">
    <header class="section-heading-row">
      <div>
        <p class="home-eyebrow">Experience</p>
        <h1 id="experience-heading">Connecting medicine, public health, social work, and artificial intelligence.</h1>
        <p class="section-intro">My interdisciplinary path spans academic research and teaching, clinical experience, healthcare investment, and applied AI.</p>
      </div>
    </header>

    <section class="education-block" aria-labelledby="education-heading">
      <header class="education-block__heading">
        <p class="home-eyebrow">Education</p>
        <h2 id="education-heading">Academic training across medicine, public health, and computational data science.</h2>
      </header>
      <div class="education-strip">
        {% for item in site.data.experience.education %}
        <article class="education-card">
          <div class="education-card__copy">
            <time>{{ item.period }}</time>
            <strong>{{ item.degree }}</strong>
            <em>{{ item.focus }}</em>
            <span>{{ item.institution }}</span>
          </div>
        </article>
        {% endfor %}
      </div>
    </section>

    <section class="experience-area" aria-labelledby="academic-experience-heading">
      <header class="experience-area__heading">
        <p class="home-eyebrow">Academic Experience</p>
        <h2 id="academic-experience-heading">Teaching and research at the intersection of AI, health, and social science.</h2>
      </header>

      <div class="academic-experience-layout">
        <article class="teaching-card">
          <div class="experience-card__meta"><span>Teaching</span><time>{{ site.data.experience.teaching.period }}</time></div>
          <h3>{{ site.data.experience.teaching.role }}</h3>
          <p class="experience-org">{{ site.data.experience.teaching.organization }}</p>
          <ol class="course-list">
            {% for course in site.data.experience.teaching.courses %}
            <li><time>{{ course.period }}</time><div><strong>{{ course.title }}</strong><span>{{ course.position }}</span></div></li>
            {% endfor %}
          </ol>
        </article>

        <div class="research-experience-list">
          {% for item in site.data.experience.research %}
          <article class="research-experience-card">
            <div class="experience-card__meta"><span>Research</span><time>{{ item.period }}</time></div>
            <h3>{{ item.role }}</h3>
            <p class="experience-org">{{ item.organization }}{% if item.lab_link %} · <a class="experience-inline-link" href="{{ item.lab_link }}" target="_blank" rel="noopener noreferrer">{{ item.lab_name }}</a>{% endif %}</p>
            <ul>
              {% for highlight in item.highlights %}
              <li>{% if highlight.link %}{{ highlight.text }} <a class="experience-inline-link" href="{{ highlight.link }}" target="_blank" rel="noopener noreferrer">{{ highlight.link_label }}</a>{{ highlight.suffix }}{% else %}{{ highlight }}{% endif %}</li>
              {% endfor %}
            </ul>
          </article>
          {% endfor %}
        </div>
      </div>
    </section>

    <section class="experience-area experience-area--professional" aria-labelledby="professional-experience-heading">
      <header class="experience-area__heading">
        <p class="home-eyebrow">Professional Experience</p>
        <h2 id="professional-experience-heading">Applying technical and analytical expertise across AI, healthcare investment, and clinical settings.</h2>
      </header>
      <div class="professional-experience-grid">
        {% for item in site.data.experience.professional %}
        <article class="professional-experience-card">
          <div class="experience-card__meta"><span>{{ forloop.index | prepend: '0' | slice: -2, 2 }}</span><time>{{ item.period }}</time></div>
          <h3>{{ item.role }}</h3>
          <p class="experience-org">{{ item.organization }}</p>
          <ul>{% for highlight in item.highlights %}<li>{{ highlight }}</li>{% endfor %}</ul>
        </article>
        {% endfor %}
      </div>
    </section>

  </div>
</section>
