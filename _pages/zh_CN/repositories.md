---
page_id: repositories
layout: page
permalink: /repositories/
title: 仓库
description:
nav: false
nav_order: 3
---

## GitHub

{% if site.data.repositories.github_user %}
{% assign user = site.data.repositories.github_user %}

  <div class="repositories d-flex flex-wrap flex-md-row flex-column justify-content-between align-items-center">
    <!-- 用户仓库展示 -->
    {% include repository/repo_user.liquid username=user %}
    <!-- 如果启用了 repo_calendar 功能，则展示日历 -->
    {% if site.repo_calendar.enabled %}
      {% include repository/repo_calendar.liquid username=user %}
    {% endif %}
  </div>
{% else %}
  <p>未配置 GitHub 用户，请检查您的 YAML 文件。</p>
{% endif %}

---

## GitHub 仓库

{% if site.data.repositories.github_repos %}

<div class="repositories d-flex flex-wrap flex-md-row flex-column justify-content-between align-items-center">
  {% for repo in site.data.repositories.github_repos %}
    {% include repository/repo.liquid repository=repo %}
  {% endfor %}
</div>
{% endif %}
