---
page_id: toolbox
layout: page
title: Werkzeug
permalink: /toolbox/
description: Eine Sammlung nützlicher Apps, Skripte und Tools – teils von mir entwickelt, teils Open Source.
nav: true
nav_order: 6
---

{% assign app_types = site.data[site.active_lang].toolbox | map: 'type' | uniq %}
{% for t in app_types %}

## {{ t }}

<div class="app-grid">
  {% for app in site.data[site.active_lang].toolbox %}
    {% if app.type == t %}
    <div class="app-card">
      <div class="app-screenshot-wrapper" style="background-image: url('{{ app.screenshot }}')">
        <img class="app-screenshot" src="{{ app.screenshot }}" alt="{{ app.title }} {{ site.data[site.active_lang].strings.toolbox.screenshot_alt }}">
      </div>
      <div class="app-info">
        <div class="app-header">
          <img class="app-icon" src="{{ app.icon }}" alt="{{ app.title }} {{ site.data[site.active_lang].strings.toolbox.icon_alt }}">
          <div class="app-title">{{ app.title }}</div>
        </div>
        <div class="app-desc">{{ app.desc }}</div>
        <div class="app-actions">
          <a class="app-btn open" href="{{ app.open_url }}" target="_blank">{{ site.data[site.active_lang].strings.toolbox.open_button }}</a>
          <a class="app-btn github" href="{{ app.github_url }}" target="_blank">
            <img class="github-icon" src="/assets/img/github.svg" alt="GitHub" />
            {{ site.data[site.active_lang].strings.toolbox.github_button }}
          </a>
        </div>
      </div>
    </div>
    {% endif %}
  {% endfor %}
</div>
{% endfor %}
