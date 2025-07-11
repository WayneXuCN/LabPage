---
layout: page
title: Typst-ucas-thesis
description: UCAS thesis Template Based on Typst
img: assets/img/project/Typst-ucas-thesis/typstUCAS.png
importance: 1
category: work
giscus_comments: true
---

## [UCAS Thesis Typst Template](https://github.com/waynexucn/typst-ucas-thesis)

![Project Status](https://img.shields.io/badge/Status-In%20Progress-yellow)

> 🚧 **Project Status: In Progress** 🚧

![Alt](https://repobeats.axiom.co/api/embed/bcb1c161953f87781138dcbbcd30bf4ba8df2268.svg "Repobeats analytics image")

#### Paper Requirements & Page Setup

- ✅ Page size and margin adjustment.
- 🔄 Header and footer styles.

#### Cover and Spine

- ✅ Basic cover information (title, author, supervisor, etc.).
- 🔄 Cover style optimization
- 🕒 Spine generation

#### Abstract and Keywords

- ✅ Chinese and English abstract templates.
- 🕒 Abstract style optimization

#### Table of Contents

- ✅ Table of contents functionality.
- 🔄 Table of contents style optimization
- 🕒 Page number alignment optimization.

#### Main Text

- 🕒 Heading style and paragraph spacing optimization.
- 🕒 Figure and table style optimization

#### Others

- 🕒 Reference style optimization.
- 🕒 Appendix and postscript templates.
- 🕒 Author's CV and academic achievements during degree period
- 🕒 Support for multiple bibliography styles.

### Developer Guide

#### template directory

- `thesis.typ` file: Your thesis source file. You can freely change the name of this file, or even copy it multiple times in the same directory to maintain multiple versions.
- `ref.bib` file: Used for references.
- `images` directory: Used for images.

#### Internal directories

- `utils` directory: Contains various custom helper functions used by the template, with no external dependencies, and **functions that do not render pages**.
- `pages` directory: Contains **independent pages** used by the template, such as cover, declaration, abstract, etc., i.e., **functions that render independent pages without affecting others**.
- `layouts` directory: Layout directory, containing **functions that span multiple pages** and are applied via the `show` directive, such as the `preface` function for Roman numeral footers.
  - Mainly divided into `doc` (document), `preface`, `mainmatter` (main text), and `appendix` (appendix/postscript).
- `lib.typ`:
  - **Role 1**: Acts as a unified external interface, exposing internal utils functions.
  - **Role 2**: Uses **function closures** to configure global information via the `documentclass` function, then exposes internal `layouts` and `pages` functions with global configuration.

### Acknowledgements

- Thanks to [nju-lug](https://github.com/nju-lug) for developing the [modern-nju-thesis](https://github.com/nju-lug/modern-nju-thesis) template, which provided a solid foundation for this version.
- Thanks to [mohuangrui](https://github.com/mohuangrui) for developing the [ucasthesis](https://github.com/mohuangrui/ucasthesis) LaTeX template, whose documentation structure was largely referenced in this template.
- Thanks to [HUST-typst-template](https://github.com/werifu/HUST-typst-template) and [sysu-thesis-typst](https://github.com/howardlau1999/sysu-thesis-typst) and other Typst Chinese thesis templates.

### License

This project is licensed under the MIT License.
