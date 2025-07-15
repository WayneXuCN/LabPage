---
layout: post
title: Flexible und effiziente Python-Umgebungsverwaltung mit Conda und uv
date: 2024-02-09 13:08:36
last_updated: 2024-12-05 17:20:03
description: Methoden zur Verwaltung von Python-Umgebungen für unterschiedliche Anforderungen
tags: Python Ubuntu Windows
categories: Productivity
featured: false
giscus_comments: true
related_posts: true
toc:
  sidebar: right
---

## Hintergrund

Python-Projekte sind vielfältig – von Datenanalyse, maschinellem Lernen bis hin zu Webentwicklung und kleinen Toolscripts. Jede Projektart stellt unterschiedliche Anforderungen an Python-Versionen, Umgebungsisolation und Abhängigkeitsmanagement. Für einfache Projekte reicht oft pip, doch mit wachsender Komplexität treten Versionskonflikte und aufgeblähte Umgebungen auf.

Beispielsweise benötigen Data-Science-Projekte oft große ML-Bibliotheken (wie TensorFlow oder PyTorch) und stabile, isolierte Umgebungen; Webentwicklung oder leichte Skripte hingegen bevorzugen schnelle, flexible Abhängigkeitsverwaltung und Python-Versionswechsel. Das klassische conda ist zwar mächtig, aber Umgebungen werden schnell mehrere GB groß und damit zu schwergewichtig. Daher habe ich mein Management optimiert und setze nun auf die Kombination aus `Conda` und `uv` anstelle von `conda-pyenv-poetry`, um effizientere und schlankere Python-Umgebungen zu erreichen.

Meine Ziele sind：

- **`Conda`**：Bereitstellung isolierter, schwergewichtiger virtueller Umgebungen für Data-Science- und ML-Projekte, wobei ähnliche Projekte Umgebungen teilen können, um Speicherplatz zu sparen
- **`uv`**：Schnelle, unabhängige virtuelle Umgebungen für Alltagsprojekte, mit flexibler Python-Versionsverwaltung und Abhängigkeits-Locking

## Conda

`Conda` ist ein Open-Source-Paket- und Umgebungsmanager, ursprünglich für Python-Data-Science-Projekte entwickelt, unterstützt aber mittlerweile viele Sprachen (z.B. R, Node.js, Java). Entwickelt von Anaconda, ist es weit verbreitet in Data Science, Machine Learning und wissenschaftlichem Rechnen.

- **Virtuelle Umgebungsisolation**：`Conda` erstellt vollständig isolierte Umgebungen und verhindert Abhängigkeitskonflikte – ideal für komplexe wissenschaftliche Bibliotheken
- **Automatische Abhängigkeitsauflösung**：Stärker als bei `pip`
- **Mehrsprachige Unterstützung**：Nicht nur Python, sondern auch R, Julia usw.

### Installation und Konfiguration

Empfohlen wird **Miniforge**，eine leichtgewichtige Conda-Distribution für den `conda-forge`-Kanal，mit folgenden Vorteilen：

- Standardmäßig Nutzung des Community-gepflegten `conda-forge`-Repos，das mehr und aktuellere Pakete bietet als der Standardkanal。
- Enthält `mamba`，einen schnelleren Conda-Ersatz für Paketauflösung und Installation。

**Optimierte Konfiguration**：

```bash
# Automatisches Aktivieren der base-Umgebung deaktivieren，um andere Python-Umgebungen nicht zu stören
conda config --set auto_activate_base false

# Conda-Installation prüfen：
conda --version
mamba --version
```

> **Hinweis**：Unter Windows sollte der PATH von `Conda` eine niedrigere Priorität haben als der von `uv`，um Versionskonflikte zu vermeiden。Passe ggf. die Reihenfolge in den Systemeinstellungen an，sodass der `uv`-Pfad vor Conda steht。

## uv

`uv` ist ein moderner Python-Paketmanager in Rust，der Python-Versionsmanagement，virtuelle Umgebungen und Abhängigkeitsverwaltung integriert – deutlich schneller als Pyenv oder Poetry。Die wichtigsten Vorteile：

- 🚀 Ein Tool ersetzt pip，pip-tools，pipx，poetry，pyenv，twine，virtualenv und mehr
- ⚡️ 10–100x schneller als pip
- 🗂️ Umfassendes Projektmanagement mit universellen Lockfiles
- ❇️ Skriptausführung mit Inline-Abhängigkeitsmetadaten
- 🐍 Installation und Verwaltung von Python-Versionen
- 🛠️ Ausführen und Installieren von Tools，die als Python-Pakete veröffentlicht sind
- 🔩 pip-kompatibles Interface für vertraute CLI und bessere Performance
- 🏢 Cargo-ähnliche Workspaces für skalierbare Projekte
- 💾 Platzsparend durch globalen Cache und Abhängigkeits-Deduplizierung
- ⏬ Installation via curl oder pip，ohne Rust oder Python vorauszusetzen
- 🖥️ Unterstützt macOS，Linux und Windows

### Installation und Konfiguration

**UV installieren**：

- Unter Windows mit PowerShell：

  ```powershell
  Invoke-WebRequest -Uri "https://astral.sh/uv/install.ps1" -OutFile "install.ps1"; .\install.ps1
  ```

- Unter Ubuntu oder anderen Linux-Systemen：

  ```bash
  curl -LsSf https://astral.sh/uv/install.sh | sh
  ```

- Installation prüfen：

  ```bash
  uv --version
  ```

**UV konfigurieren**：

- Globale Python-Version festlegen：

  ```bash
  uv python install 3.11  # Installiert Python 3.11
  uv python pin 3.11      # Setzt globale Standardversion
  ```

- Projektspezifische Python-Version festlegen：

  ```bash
  cd my-project
  uv python pin 3.10      # Projekt nutzt Python 3.10
  ```

  Dadurch wird im Projektverzeichnis eine `.python-version`-Datei mit der Version angelegt。

- Virtuelle Umgebung erstellen und Abhängigkeiten verwalten：

  ```bash
  uv venv                    # Erstellt virtuelle Umgebung
  uv add numpy pandas        # Abhängigkeiten hinzufügen
  uv sync                    # Synchronisiert Abhängigkeiten in die Umgebung
  ```

  Die Abhängigkeiten werden in `pyproject.toml` und `uv.lock` gespeichert，was Konsistenz garantiert。

- Projektumgebung prüfen：

  ```bash
  uv run python -c "import sys; print(sys.executable)"
  ```

  Die Ausgabe sollte auf das Python der Projektumgebung zeigen，z.B. `.../my-project/.venv/Scripts/python.exe`（Windows）。

- Projekt mit UV bauen und auf PyPI veröffentlichen：

  ```bash
  uv build
  uv publish
  ```

- Eigene `uv`-Konfiguration (`uv.toml`)，z.B. für eigenen Cache-Ordner oder pip-Index-URL，durch Anlegen einer uv.toml-Datei。Diese kann global (z.B. unter Linux/Mac: ~/.config/uv/uv.toml oder Windows: %APPDATA%\uv\uv.toml) oder projektspezifisch im Projektverzeichnis liegen。

  ```tmol
  cache-dir = "/Volumes/Work/Temporary/uv_cache"

  [[index]]
  url = "https://pypi.tuna.tsinghua.edu.cn/simple"
  default = true
  ```

<footer lang="de" style="
  background-color: #f8f9fa;
  color: #6c757d;
  font-size: 0.85rem;
  line-height: 1.5;
  padding: 1rem 1.5rem;
  margin-top: 2rem;
  border-top: 1px solid #e9ecef;
  text-align: center;
">
  <p style="margin: 0; word-break: break-word;">
    Diese Seite wurde automatisch von generativer KI übersetzt und kann Ungenauigkeiten oder unvollständige Informationen enthalten.
    <a href="mailto:wenjie.xu.cn@outlook.com" style="
      color: #007bff;
      text-decoration: none;
    ">Feedback ist willkommen</a>, um uns bei der Verbesserung zu helfen.
  </p>
</footer>
