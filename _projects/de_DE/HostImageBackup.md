---
layout: page
title: HostImageBackup
description: Ein modulares Python-CLI-Tool zum einfachen Sichern von Bildern von verschiedenen Bild-Hosting-Diensten auf Ihren lokalen Rechner.
img: assets/img/project/HostImageBackup/HostImageBackup.png
importance: 1
category: work
giscus_comments: true
---

Ein modularer Python-CLI-Tool zum einfachen Sichern von Bildern von verschiedenen Bild-Hosting-Diensten auf Ihren lokalen Rechner.

## 🚀 Funktionen

- **🏗️ Modulare Architektur** – Einfach erweiterbar mit neuen Providern
- **🌐 Multi-Provider-Unterstützung** – Aliyun OSS, Tencent COS, SM.MS, Imgur, GitHub
- **📊 Visueller Fortschritt** – Schöne Fortschrittsbalken für Backup-Vorgänge
- **🎨 Umfangreiche CLI-Oberfläche** – Intuitive Kommandozeilen-Erfahrung
- **⚙️ Flexible Konfiguration** – YAML-basierte Konfigurationsverwaltung
- **🔄 Resume-Unterstützung** – Unterbrochene Übertragungen nahtlos fortsetzen
- **📝 Umfassendes Logging** – Detaillierte Protokolle
- **🧪 Gut getestet** – Umfassende Testabdeckung für Zuverlässigkeit

## 🎯 Warum dieses Tool?

In der heutigen digitalen Welt speichern wir Bilder auf vielen Cloud-Diensten und Plattformen. Dieses Tool löst folgende Herausforderungen:

- **Backup und Migration** von Bildern aus Cloud-Providern auf lokalen Speicher
- **Multi-Provider-Aggregation** – Konsolidierung von Bildern aus mehreren Diensten
- **Geplante Backups** via Cronjobs oder CI/CD-Pipelines
- **Archivverwaltung** – Organisierte lokale Bildarchive erstellen
- **Disaster Recovery** – Offline-Kopien für Geschäftskontinuität

## 📋 Unterstützte Provider

| Provider   | Funktionen                              | Hinweise                        |
| ---------- | --------------------------------------- | ------------------------------- |
| **OSS**    | ✅ Listen, Backup, Resume, Überspringen | Benötigt Aliyun-Zugangsdaten    |
| **COS**    | ✅ Listen, Backup, Resume, Überspringen | Benötigt Tencent-Zugangsdaten   |
| **SM.MS**  | ✅ Listen, Backup                       | Öffentliche API, Rate-Limits    |
| **Imgur**  | ✅ Listen, Backup                       | Benötigt Imgur Client ID/Secret |
| **GitHub** | ✅ Listen, Backup                       | Benötigt GitHub Token & Zugriff |

## 🛠️ Installation

### Voraussetzungen

- Python 3.10+
- Netzwerkverbindung für Backup-Vorgänge

### Methode 1: Mit pip (empfohlen)

```sh
# Installation von PyPI
pip install host-image-backup

# Installation überprüfen
host-image-backup --help
# Oder Kurzform
hib --help
```

### Methode 2: Entwicklung

```sh
# Repository klonen
git clone https://github.com/WayneXuCN/HostImageBackup.git
cd HostImageBackup

# Mit uv installieren (empfohlen)
uv lock
uv sync --all-extras

# Oder mit pip
pip install -e ".[dev]"
```

## 🚀 Schnellstart

### Grundlegende Nutzung

```sh
# 1. Konfiguration initialisieren
host-image-backup init

# 2. Konfigurationsdatei bearbeiten
# Linux/macOS: ~/.config/host-image-backup/config.yaml
# Windows: %APPDATA%/host-image-backup/config.yaml

# 3. Provider-Verbindung testen
host-image-backup test oss

# 4. Bilder von einem Provider sichern
host-image-backup backup oss --output ./my-backup

# 5. Backup von allen aktivierten Providern
host-image-backup backup-all --output ./full-backup
```

### Beispielkonfiguration

```yaml
# Globale Einstellungen
default_output_dir: "./backup"
max_concurrent_downloads: 5
timeout: 30
retry_count: 3
log_level: "INFO"

# Provider-Konfigurationen
providers:
  oss:
    enabled: true
    access_key_id: "your_access_key"
    access_key_secret: "your_secret_key"
    bucket: "your_bucket_name"
    endpoint: "oss-cn-hangzhou.aliyuncs.com"
    prefix: "images/"

  github:
    enabled: true
    token: "ghp_your_personal_access_token"
    owner: "your_username"
    repo: "your_repository"
    path: "images"
```

## 📁 Projektstruktur

```text
HostImageBackup/
├── src/host_image_backup/     # Hauptpaket
│   ├── providers/             # Provider-Implementierungen
│   ├── config.py             # Konfigurationsverwaltung
│   ├── cli.py                # Kommandozeilen-Schnittstelle
│   └── services.py           # Kern-Backup-Dienste
├── tests/                    # Test-Suite
├── pyproject.toml           # Projektmetadaten und Abhängigkeiten
└── README.md               # Dokumentation
```

## 🔧 Funktionsweise

1. **Konfiguration laden** – Liest Provider-Einstellungen aus YAML
2. **Provider-Erkennung** – Erkennt aktivierte Provider automatisch
3. **Bilder auflisten** – Holt verfügbare Bilder von jedem Provider
4. **Paralleler Download** – Lädt Bilder mit Fortschrittsanzeige herunter
5. **Fehlerbehandlung** – Wiederholt fehlgeschlagene Downloads und protokolliert Fehler
6. **Resume-Unterstützung** – Überspringt vorhandene Dateien bei unterbrochenen Übertragungen

## 📖 Erweiterte Nutzung

### CLI-Befehlsreferenz

| Befehl       | Beschreibung                             | Alias            |
| ------------ | ---------------------------------------- | ---------------- |
| `init`       | Standard-Konfigurationsdatei erstellen   | -                |
| `backup`     | Bilder von spezifischem Provider sichern | -                |
| `backup-all` | Backup von allen aktivierten Providern   | -                |
| `list`       | Alle verfügbaren Provider auflisten      | `list-providers` |
| `test`       | Provider-Verbindung testen               | -                |
| `info`       | Detaillierte Provider-Informationen      | -                |

### Anwendungsfälle

- **Persönliches Foto-Backup**: Alle Fotos von mehreren Diensten sichern
- **Migration zwischen Providern**: Export von einem Dienst und Import zu einem anderen
- **Geplante Backups**: Automatisierte Backups mit Cronjobs
- **Archivverwaltung**: Organisierte lokale Bildersammlungen erstellen

## 🔍 Detailfunktionen

Das Tool bietet Funktionen auf Enterprise-Niveau:

- ✅ **Asynchrone Operationen** für schnellere Backups
- ✅ **Intelligente Wiederholungslogik** bei Netzwerkfehlern
- ✅ **Umfassendes Logging** für Audit-Trails
- ✅ **Modulares Design** für einfache Erweiterung
- ✅ **Typsichere Konfiguration** mit Pydantic-Validierung
- ✅ **Reiche Konsolenausgabe** mit Fortschrittsanzeigen

## 🛡️ Sicherheit & Best Practices

- **Credential-Sicherheit**: Niemals Zugangsdaten ins Versionskontrollsystem einchecken
- **Umgebungsvariablen**: Unterstützung für umgebungsbasierte Konfiguration
- **Dateiberechtigungen**: Automatisch sichere Konfigurationsdateiberechtigungen
- **Netzwerksicherheit**: Nur HTTPS-Verbindungen und Timeout-Handling

## 🙏 Danksagung

Dieses Projekt nutzt moderne Python-Tools und Best Practices:

- **Typer**: Für schöne CLI-Oberflächen
- **Rich**: Für verbesserte Konsolenausgabe
- **Pydantic**: Für robuste Konfigurationsvalidierung
- **Loguru**: Für umfassendes Logging

## 🤝 Beitrag

Beiträge sind willkommen! Das Projekt folgt modernen Python-Entwicklungspraktiken:

- Typannotationen im gesamten Code
- Umfassende Testabdeckung mit pytest
- Codeformatierung mit Ruff
- Pre-Commit-Hooks für Codequalität
- CI/CD mit GitHub Actions

## 📄 Lizenz

Dieses Projekt ist unter der MIT-Lizenz lizenziert – siehe [LICENSE](https://github.com/WayneXuCN/HostImageBackup/blob/main/LICENSE) für Details.

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
    ">Feedback willkommen</a>, um uns zu verbessern.
  </p>
</footer>
