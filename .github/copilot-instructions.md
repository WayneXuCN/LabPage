# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is Wenjie Xu's personal academic website built with Jekyll and the al-folio theme. It's configured as a multilingual site supporting Chinese (zh_CN), English (en_US), German (de_DE), and Japanese (ja_JP) content.

## Common Commands

### Development
```bash
# Serve the site locally for development
bundle exec jekyll serve

# Build the site locally
bundle exec jekyll build

# Build using the script
./bin/cibuild
```

### Deployment
```bash
# Deploy to GitHub Pages
./bin/deploy

# Deploy with custom source/deploy branches
./bin/deploy -s main -d gh-pages
```

### Docker Development
```bash
# Run with Docker Compose
docker-compose up

# The site will be available at http://localhost:8080
# Live reload is enabled on port 35729
```

### Code Quality
```bash
# Format code with Prettier
npx prettier --write .

# Use pre-commit hooks (configured in .pre-commit-config.yaml)
pre-commit run --all-files
```

## Architecture

### Directory Structure
- `_config.yml` - Main Jekyll configuration with site settings, themes, and plugins
- `_layouts/` - Jekyll templates for different page types (about, cv, post, etc.)
- `_includes/` - Reusable components (header, footer, scripts, social links)
- `_posts/` - Blog posts organized by language (zh_CN, en_US, de_DE, ja_JP)
- `_pages/` - Static pages
- `_projects/` - Project portfolio items
- `_publications/` - Academic publications
- `_bibliography/` - Bibliography data for publications
- `_data/` - Site data files
- `_sass/` - SCSS stylesheets
- `assets/` - Static assets (CSS, JS, images)
- `_plugins/` - Custom Jekyll plugins

### Multilingual Support
The site uses Jekyll Polyglot for multilingual support:
- Posts are organized in language-specific directories under `_posts/`
- Each language has its own URL structure
- Navigation and content are localized

### Key Jekyll Plugins
- `jekyll-scholar` - Academic bibliography management
- `jekyll-polyglot` - Multilingual support
- `jekyll-jupyter-notebook` - Jupyter notebook integration
- `jekyll-imagemagick` - Image processing
- `jekyll-feed` - RSS feed generation
- `jekyll-sitemap` - XML sitemap generation

### Content Types
- **Blog Posts** - Stored in `_posts/[lang]/` with front matter specifying layout and metadata
- **Publications** - Academic papers managed through jekyll-scholar
- **Projects** - Portfolio items in `_projects/`
- **Pages** - Static content in `_pages/`

### Configuration Files
- `_config.yml` - Main Jekyll configuration
- `Gemfile` - Ruby dependencies for Jekyll and plugins
- `package.json` - Node.js dev dependencies (Prettier for Liquid formatting)
- `docker-compose.yml` - Docker development environment
- `.pre-commit-config.yaml` - Git pre-commit hooks configuration

### Theme Customization
The site uses a customized version of al-folio theme:
- Extensive customization through `_config.yml`
- Custom SCSS styles in `_sass/`
- Custom layouts and includes for academic/technical content
- Support for GitHub integration, social links, and academic metrics

## Development Notes

- The site is configured for GitHub Pages deployment
- Docker-based development environment is available for consistency
- Pre-commit hooks ensure code quality
- The build process includes minification and optimization
- All content is version-controlled including assets and generated files