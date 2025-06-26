---
layout: post
title: 使用 Conda 和 uv 实现灵活高效的 Python 环境管理
date: 2024-02-09 13:08:36
last_updated: 2024-12-05 17:20:03
description: 不同需求下的 Python 环境管理方法
tags: Python Ubuntu Windows
categories: Productivity
featured: false
giscus_comments: true
related_posts: true
toc:
  sidebar: right
---

## 背景

Python 项目种类繁多，从数据分析、机器学习到 Web 开发和小型工具脚本，每类项目对 Python 版本、环境隔离和依赖管理的需求各异。简单的项目可能仅需 pip 管理依赖，但随着项目规模扩大或复杂度增加，版本冲突和环境膨胀问题逐渐显现。

例如，数据科学项目常依赖庞大的机器学习库（如 TensorFlow 或 PyTorch），需要稳定的环境隔离；而 Web 开发或轻量级脚本项目则更注重轻便、快速的依赖管理和灵活的 Python 版本切换。传统的 conda 虽然功能强大，但其环境体积动辄数 GB，显得过于臃肿。基于此，我优化了环境管理方案，采用 `Conda` 和 `uv` 组合，取代了原有的 `conda-pyenv-poetry` 组合，以实现更高效、轻量的 Python 环境管理。

我的目标是：

- **`Conda`**：为数据科学和机器学习项目提供隔离良好的重量级虚拟环境，允许多个相似项目共享环境以节省空间
- **`uv`**：为常规项目提供快速、独立的虚拟环境，并支持灵活的 Python 版本管理和依赖锁定

## Conda

`Conda` 是一个开源的包管理和环境管理系统，最初是为 Python 数据科学项目设计的，但现在已经支持多种编程语言（如 R、Node.js、Java 等）。它由 Anaconda 公司开发，广泛用于数据科学、机器学习和科学计算领域。

- **虚拟环境隔离**：`Conda` 创建完全隔离的虚拟环境，避免依赖冲突，适合管理复杂的科学计算库
- **依赖自动解析**：相比 `pip`，`Conda` 的依赖解析更加强大
- **多语言支持**：不仅限于 Python，还可管理 R、Julia 等语言的依赖

### 安装与配置

推荐使用 **Miniforge**，这是针对 `conda-forge` 频道的轻量级 `Conda` 发行版，预设以下功能：

- 默认使用 `conda-forge` 由社区维护的开源软件仓库，提供了比默认 `Conda` 渠道更丰富、更新更频繁的包。
- 提供 `mamba`，一个更快的 `Conda` 替代品，加速包解析和安装。

**配置优化**：

```bash
# 禁用 base 环境自动激活，避免干扰其他 Python 环境
conda config --set auto_activate_base false

# 验证 Conda 安装：
conda --version
mamba --version
```

> **注意**：在 Windows 上，确保 `Conda` 的 PATH 优先级低于 `uv` 提供的 Python 路径，以避免版本冲突。可以在系统 PATH 中调整顺序，将 `uv` 的路径置于 Conda 之前。

## uv

`uv` 是一个用 Rust 编写的现代 Python 包管理器，集成了 Python 版本管理、虚拟环境创建和依赖管理的功能，性能远超 `Pyenv` 和 `Poetry` 等其他工具。其核心优势包括：

- 🚀 一个工具即可替代 pip、pip-tools、pipx、poetry、pyenv、twine、virtualenv 及更多。
- ⚡️ 比 pip 快 10-100 倍
- 🗂️ 提供全面的项目管理，并配备通用锁文件
- ❇️ 运行脚本，支持内联依赖元数据
- 🐍 安装和管理 Python 版本
- 🛠️ 运行和安装作为 Python 包发布的工具
- 🔩 包含一个与 pip 兼容的接口，通过熟悉的 CLI 提升性能
- 🏢 支持 Cargo 风格的工场，适用于可扩展项目
- 💾 磁盘空间高效，具有全局缓存用于依赖项去重
- ⏬ 可通过 curl 或 pip 无 Rust 或 Python 进行安装
- 🖥️ 支持 macOS、Linux 和 Windows

### 安装与配置

**安装 UV**：

- 在 Windows 上，使用 PowerShell 安装：

  ```powershell
  Invoke-WebRequest -Uri "https://astral.sh/uv/install.ps1" -OutFile "install.ps1"; .\install.ps1
  ```

- 在 Ubuntu 或其他 Linux 系统上：

  ```bash
  curl -LsSf https://astral.sh/uv/install.sh | sh
  ```

- 验证安装：

  ```bash
  uv --version
  ```

**配置 UV**：

- 设置全局 Python 版本：

  ```bash
  uv python install 3.11  # 安装 Python 3.11
  uv python pin 3.11      # 设置全局默认版本
  ```

- 为项目指定 Python 版本：

  ```bash
  cd my-project
  uv python pin 3.10      # 项目使用 Python 3.10
  ```

  这会在项目目录下生成 `.python-version` 文件，记录版本设置。

- 创建虚拟环境并管理依赖：

  ```bash
  uv venv                    # 创建虚拟环境
  uv add numpy pandas        # 添加依赖
  uv sync                    # 同步依赖到虚拟环境
  ```

  依赖信息记录在 `pyproject.toml` 和 `uv.lock` 中，确保一致性。

- 验证项目环境：

  ```bash
  uv run python -c "import sys; print(sys.executable)"
  ```

  输出应为项目虚拟环境的 Python 路径，例如 `.../my-project/.venv/Scripts/python.exe`（Windows）。

- 使用 UV 打包项目并发布到 PyPI：

  ```bash
  uv build
  uv publish
  ```

- 自定义 `uv` 配置（uv.toml），例如设置自定义缓存目录或配置 pip 索引 URL，创建一个 uv.toml 文件。此文件可以放在全局位置（例如 Linux/Mac 上的~/.config/uv/uv.toml 或 Windows 上的%APPDATA%\uv\uv.toml），或放在项目目录中以进行项目特定的设置。

  ```tmol
  cache-dir = "/Volumes/Work/Temporary/uv_cache"

  [[index]]
  url = "https://pypi.tuna.tsinghua.edu.cn/simple"
  default = true
  ```
