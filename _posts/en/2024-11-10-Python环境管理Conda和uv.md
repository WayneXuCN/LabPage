---
layout: post
title: Flexible and Efficient Python Environment Management with Conda and uv
date: 2024-02-09 13:08:36
last_updated: 2024-12-05 17:20:03
description: Python environment management methods for different needs
tags: Python Ubuntu Windows
categories: Productivity
featured: false
giscus_comments: true
related_posts: true
toc:
  sidebar: right
---

## Background

Python projects are diverse, ranging from data analysis and machine learning to web development and small tool scripts. Each type of project has different requirements for Python versions, environment isolation, and dependency management. Simple projects may only need pip to manage dependencies, but as projects grow in scale or complexity, version conflicts and environment bloat become apparent.

For example, data science projects often rely on large machine learning libraries (such as TensorFlow or PyTorch) and require stable environment isolation. Web development or lightweight script projects, on the other hand, focus more on lightweight, fast dependency management and flexible Python version switching. Traditional conda, while powerful, can have environment sizes of several GB, which seems too bloated. Based on this, I optimized the environment management solution by using a combination of `Conda` and `uv` to replace the original `conda-pyenv-poetry` combination, in order to achieve more efficient and lightweight Python environment management.

My goals are:

- **`Conda`**: Provide well-isolated, heavyweight virtual environments for data science and machine learning projects, allowing multiple similar projects to share environments to save space.
- **`uv`**: Provide fast, independent virtual environments for regular projects, and support flexible Python version management and dependency locking.

## Conda

`Conda` is an open-source package and environment management system, originally designed for Python data science projects, but now supports multiple programming languages (such as R, Node.js, Java, etc.). It is developed by Anaconda Inc. and is widely used in data science, machine learning, and scientific computing.

- **Virtual Environment Isolation**: `Conda` creates completely isolated virtual environments, avoiding dependency conflicts and is suitable for managing complex scientific computing libraries.
- **Automatic Dependency Resolution**: Compared to `pip`, `Conda`'s dependency resolution is more powerful.
- **Multi-Language Support**: Not limited to Python, it can also manage dependencies for languages such as R and Julia.

### Installation and Configuration

It is recommended to use **Miniforge**, which is a lightweight `Conda` distribution for the `conda-forge` channel, with the following features:

- By default, it uses `conda-forge`, an open-source software repository maintained by the community, which provides a richer and more frequently updated set of packages than the default `Conda` channels.
- Provides `mamba`, a faster alternative to `Conda`, which speeds up package parsing and installation.

**Configuration Optimization**:

```bash
# Disable automatic activation of the base environment to avoid interfering with other Python environments
conda config --set auto_activate_base false

# Verify Conda installation:
conda --version
mamba --version
```

> **Note**: On Windows, ensure that `Conda`'s PATH priority is lower than the Python path provided by `uv` to avoid version conflicts. You can adjust the order in the system PATH, placing `uv`'s path before Conda's.

## uv

`uv` is a modern Python package manager written in Rust, integrating Python version management, virtual environment creation, and dependency management, with performance far exceeding other tools such as `Pyenv` and `Poetry`. Its core advantages include:

- 🚀 A single tool to replace pip, pip-tools, pipx, poetry, pyenv, twine, virtualenv, and more.
- ⚡️ 10-100x faster than pip
- 🗂️ Comprehensive project management, equipped with a universal lock file
- ❇️ Run scripts with support for inline dependency metadata
- 🐍 Install and manage Python versions
- 🛠️ Run and install tools published as Python packages
- 🔩 Includes a pip-compatible interface for enhanced performance via a familiar CLI
- 🏢 Supports Cargo-style worktrees for scalable projects
- 💾 Disk space efficient with a global cache for dependency deduplication
- ⏬ Installable via curl or pip with no Rust or Python
- 🖥️ Supports macOS, Linux, and Windows

### Installation and Configuration

**Install UV**:

- On Windows, use PowerShell to install:

  ```powershell
  Invoke-WebRequest -Uri "https://astral.sh/uv/install.ps1" -OutFile "install.ps1"; .\install.ps1
  ```

- On Ubuntu or other Linux systems:

  ```bash
  curl -LsSf https://astral.sh/uv/install.sh | sh
  ```

- Verify installation:

  ```bash
  uv --version
  ```

**Configure UV**:

- Set the global Python version:

  ```bash
  uv python install 3.11  # Install Python 3.11
  uv python pin 3.11      # Set the global default version
  ```

- Specify the Python version for the project:

  ```bash
  cd my-project
  uv python pin 3.10      # Project uses Python 3.10
  ```

  This will generate a `.python-version` file in the project directory, recording the version settings.

- Create a virtual environment and manage dependencies:

  ```bash
  uv venv                    # Create a virtual environment
  uv add numpy pandas        # Add dependencies
  uv sync                    # Synchronize dependencies to the virtual environment
  ```

  Dependency information is recorded in `pyproject.toml` and `uv.lock` to ensure consistency.

- Verify the project environment:

  ```bash
  uv run python -c "import sys; print(sys.executable)"
  ```

  The output should be the Python path of the project's virtual environment, such as `.../my-project/.venv/Scripts/python.exe` (Windows).

- Use UV to package the project and publish it to PyPI:

  ```bash
  uv build
  uv publish
  ```

- Customize `uv` configuration (uv.toml), such as setting a custom cache directory or configuring the pip index URL, create a uv.toml file. This file can be placed in a global location (e.g., ~/.config/uv/uv.toml on Linux/Mac or %APPDATA%\uv\uv.toml on Windows), or in the project directory for project-specific settings.

  ```tmol
  cache-dir = "/Volumes/Work/Temporary/uv_cache"

  [[index]]
  url = "https://pypi.tuna.tsinghua.edu.cn/simple"
  default = true
  ```

<footer lang="en" style="
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
    This page was automatically translated by generative AI and may contain inaccuracies or incomplete information.
    <a href="mailto:wenjie.xu.cn@outlook.com" style="
      color: #007bff;
      text-decoration: none;
    ">Feedback is welcome</a> to help us improve.
  </p>
</footer>
