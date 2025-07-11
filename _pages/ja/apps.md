---
page_id: app
layout: page
title: アプリ [ページテスト]
permalink: /apps/
description: ここでは私が作成したクールなものをいくつか紹介します。[ページテスト]
nav: false
---

{% assign app_types = site.data.apps | map: 'type' | uniq %}
{% for t in app_types %}

## {{ t }}

<div class="app-grid">
  {% for app in site.data.apps %}
    {% if app.type == t %}
    <div class="app-card">
      <img class="app-screenshot" src="{{ app.screenshot }}" alt="{{ app.title }} スクリーンショット">
      <div class="app-info">
        <img class="app-icon" src="{{ app.icon }}" alt="{{ app.title }} アイコン">
        <div class="app-title">{{ app.title }}</div>
        <div class="app-desc">{{ app.desc }}</div>
        <div class="app-actions">
          <a class="app-btn open" href="{{ app.open_url }}" target="_blank">開く</a>
          <a class="app-btn github" href="{{ app.github_url }}" target="_blank">
            <img class="github-icon" src="/assets/img/github.svg" alt="GitHub" />
            GitHubで見る
          </a>
        </div>
      </div>
    </div>
    {% endif %}
  {% endfor %}
</div>
{% endfor %}
