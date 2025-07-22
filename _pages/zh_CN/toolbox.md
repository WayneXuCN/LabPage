---
page_id: toolbox
layout: page
title: 工具
permalink: /toolbox/
description: 收录了我个人开发和部分开源的小程序、脚本与工具。
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
      <!-- App 卡片截图建议尺寸：宽≥640px，高约320~360px，比例接近16:9或2:1。主要内容居中，避免重要信息靠近边缘。图片会以 object-fit: cover 裁剪显示。 -->
      <img class="app-screenshot" src="{{ app.screenshot }}" alt="{{ app.title }} {{ site.data[site.active_lang].strings.toolbox.screenshot_alt }}">
      <div class="app-info">
        <img class="app-icon" src="{{ app.icon }}" alt="{{ app.title }} {{ site.data[site.active_lang].strings.toolbox.icon_alt }}">
        <div class="app-title">{{ app.title }}</div>
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
