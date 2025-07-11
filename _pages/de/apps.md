---
page_id: app
layout: page
title: App [Seitentest]
permalink: /apps/
description: Hier sind einige coole Sachen, die ich gemacht habe. [Seitentest]
nav: false
---

{% assign app_types = site.data.apps | map: 'type' | uniq %}
{% for t in app_types %}

## {{ t }}

<div class="app-grid">
  {% for app in site.data.apps %}
    {% if app.type == t %}
    <div class="app-card">
      <img class="app-screenshot" src="{{ app.screenshot }}" alt="{{ app.title }} Screenshot">
      <div class="app-info">
        <img class="app-icon" src="{{ app.icon }}" alt="{{ app.title }} Icon">
        <div class="app-title">{{ app.title }}</div>
        <div class="app-desc">{{ app.desc }}</div>
        <div class="app-actions">
          <a class="app-btn open" href="{{ app.open_url }}" target="_blank">Öffnen</a>
          <a class="app-btn github" href="{{ app.github_url }}" target="_blank">
            <img class="github-icon" src="/assets/img/github.svg" alt="GitHub" />
            Auf GitHub ansehen
          </a>
        </div>
      </div>
    </div>
    {% endif %}
  {% endfor %}
</div>
{% endfor %}
