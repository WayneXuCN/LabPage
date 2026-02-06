---
page_id: repositories
layout: page
permalink: /repositories/
title: リポジトリ
description:
nav: false
nav_order: 3
---

## GitHub

{% if site.data.repositories.github_user %}
{% assign user = site.data.repositories.github_user %}

  <div class="repositories d-flex flex-wrap flex-md-row flex-column justify-content-between align-items-center">
    {% include repository/repo_user.liquid username=user %}
    {% if site.repo_calendar.enabled %}
      {% include repository/repo_calendar.liquid username=user %}
    {% endif %}
  </div>
{% else %}
  <p>{{ site.data[site.active_lang].strings.repositories.no_github_user }}</p>
{% endif %}

---

## GitHub リポジトリ

{% if site.data.repositories.github_repos %}

<div class="repositories d-flex flex-wrap flex-md-row flex-column justify-content-between align-items-center">
  {% for repo in site.data.repositories.github_repos %}
    {% include repository/repo.liquid repository=repo %}
  {% endfor %}
</div>
{% endif %}
