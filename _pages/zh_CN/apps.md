---
page_id: app
layout: page
title: 应用 [页面测试]
permalink: /apps/
description: 这里展示了一些我开发的有趣项目。[页面测试]
nav: false
---

{% assign app_types = site.data.apps | map: 'type' | uniq %}
{% for t in app_types %}

## {{ t }}

<div class="app-grid">
  {% for app in site.data.apps %}
    {% if app.type == t %}
    <div class="app-card">
      <img class="app-screenshot" src="{{ app.screenshot }}" alt="{{ app.title }} 截图">
      <div class="app-info">
        <img class="app-icon" src="{{ app.icon }}" alt="{{ app.title }} 图标">
        <div class="app-title">{{ app.title }}</div>
        <div class="app-desc">{{ app.desc }}</div>
        <div class="app-actions">
          <a class="app-btn open" href="{{ app.open_url }}" target="_blank">打开</a>
          <a class="app-btn github" href="{{ app.github_url }}" target="_blank">
            <img class="github-icon" src="/assets/img/github.svg" alt="GitHub" />
            查看 GitHub
          </a>
        </div>
      </div>
    </div>
    {% endif %}
  {% endfor %}
</div>
{% endfor %}
