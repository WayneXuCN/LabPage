---
page_id: repositories
layout: page
permalink: /repositories/
title: Repositorien
description:
nav: true
nav_order: 4
---

## GitHub

{% if site.data.repositories.github_user %}
{% assign user = site.data.repositories.github_user %}

  <div class="repositories d-flex flex-wrap flex-md-row flex-column justify-content-between align-items-center">
    <!-- Benutzer-Repositorien anzeigen -->
    {% include repository/repo_user.liquid username=user %}
    <!-- Wenn repo_calendar aktiviert ist, Kalender anzeigen -->
    {% if site.repo_calendar.enabled %}
      {% include repository/repo_calendar.liquid username=user %}
    {% endif %}
  </div>
{% else %}
  <p>Kein GitHub-Benutzer konfiguriert. Bitte prüfen Sie Ihre YAML-Datei.</p>
{% endif %}

---

## GitHub-Repositorien

{% if site.data.repositories.github_repos %}

<div class="repositories d-flex flex-wrap flex-md-row flex-column justify-content-between align-items-center">
  {% for repo in site.data.repositories.github_repos %}
    {% include repository/repo.liquid repository=repo %}
  {% endfor %}
</div>
{% endif %}
