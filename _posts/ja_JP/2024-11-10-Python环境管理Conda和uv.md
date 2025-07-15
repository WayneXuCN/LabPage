---
layout: post
title: Condaとuvで柔軟かつ効率的なPython環境管理を実現する
date: 2024-02-09 13:08:36
last_updated: 2024-12-05 17:20:03
description: 様々なニーズに応じたPython環境管理の方法
tags: Python Ubuntu Windows
categories: Productivity
featured: false
giscus_comments: true
related_posts: true
toc:
  sidebar: right
---

## 背景

Pythonプロジェクトは多岐にわたり、データ分析・機械学習からWeb開発や小規模なツールスクリプトまで、その用途によってPythonバージョンや環境の分離、依存関係管理の要件が異なります。シンプルなプロジェクトではpipだけで依存関係を管理できますが、プロジェクトの規模や複雑さが増すにつれ、バージョンの衝突や環境の肥大化といった問題が顕在化します。

例えば、データサイエンス系のプロジェクトは巨大な機械学習ライブラリ（TensorFlowやPyTorchなど）に依存することが多く、安定した環境分離が必要です。一方、Web開発や軽量なスクリプトプロジェクトでは、素早く柔軟な依存管理やPythonバージョンの切り替えが重視されます。従来のcondaは強力ですが、環境サイズが数GBにもなりがちで、やや重すぎる印象です。そこで、私は環境管理の方法を見直し、`Conda`と`uv`の組み合わせを採用し、従来の`conda-pyenv-poetry`構成を置き換えて、より効率的かつ軽量なPython環境管理を実現しました。

私の方針は以下の通りです：

- **`Conda`**：データサイエンスや機械学習プロジェクト向けに、しっかり分離された重量級仮想環境を提供し、類似プロジェクト間で環境を共有してディスク容量を節約
- **`uv`**：一般的なプロジェクト向けに、素早く独立した仮想環境を提供し、柔軟なPythonバージョン管理と依存ロックをサポート

## Conda

`Conda`は、もともとPythonのデータサイエンスプロジェクト向けに設計されたオープンソースのパッケージ・環境管理システムですが、現在はRやNode.js、Javaなど多くの言語もサポートしています。Anaconda社によって開発され、データサイエンス・機械学習・科学計算分野で広く利用されています。

- **仮想環境の分離**：`Conda`は完全に分離された仮想環境を作成でき、依存関係の衝突を防ぎ、複雑な科学計算ライブラリの管理に最適です
- **依存関係の自動解決**：`pip`よりも強力な依存解決機能を持ちます
- **多言語対応**：Pythonだけでなく、RやJuliaなど他言語の依存管理も可能

### インストールと設定

**Miniforge**の利用を推奨します。これは`conda-forge`チャンネル向けの軽量な`Conda`ディストリビューションで、以下の特徴があります：

- デフォルトでコミュニティ主導の`conda-forge`リポジトリを利用し、公式よりも豊富かつ最新のパッケージを提供
- `mamba`（高速な`Conda`互換ツール）を同梱し、パッケージ解決・インストールを高速化

**設定の最適化**：

```bash
# base環境の自動有効化を無効化し、他のPython環境への干渉を防ぐ
conda config --set auto_activate_base false

# Condaのインストール確認
conda --version
mamba --version
```

> **注意**：Windowsでは、`Conda`のPATH優先度が`uv`のPythonパスより低くなるようにしてください。バージョン衝突を防ぐため、システムPATHの順序を調整し、`uv`のパスをCondaより前に配置します。

## uv

`uv`はRust製の最新Pythonパッケージマネージャーで、Pythonバージョン管理・仮想環境作成・依存管理を一体化し、`Pyenv`や`Poetry`など従来ツールよりも圧倒的なパフォーマンスを誇ります。主な特徴は以下の通りです：

- 🚀 1つのツールでpip、pip-tools、pipx、poetry、pyenv、twine、virtualenvなどを置き換え可能
- ⚡️ pipの10～100倍の速度
- 🗂️ プロジェクト管理機能と共通ロックファイルを提供
- ❇️ スクリプト実行時にインライン依存メタデータをサポート
- 🐍 Pythonバージョンのインストール・管理
- 🛠️ Pythonパッケージとして配布されるツールの実行・インストール
- 🔩 pip互換インターフェースで、慣れ親しんだCLIを高速化
- 🏢 Cargo風のワークスペース対応で大規模プロジェクトにも最適
- 💾 ディスク効率が高く、依存キャッシュによる重複排除
- ⏬ RustやPython不要でcurlまたはpipからインストール可能
- 🖥️ macOS、Linux、Windows対応

### インストールと設定

**UVのインストール**：

- Windowsの場合、PowerShellでインストール：

  ```powershell
  Invoke-WebRequest -Uri "https://astral.sh/uv/install.ps1" -OutFile "install.ps1"; .\install.ps1
  ```

- Ubuntuや他のLinuxの場合：

  ```bash
  curl -LsSf https://astral.sh/uv/install.sh | sh
  ```

- インストール確認：

  ```bash
  uv --version
  ```

**UVの設定**：

- グローバルなPythonバージョンの設定：

  ```bash
  uv python install 3.11  # Python 3.11をインストール
  uv python pin 3.11      # デフォルトバージョンを設定
  ```

- プロジェクトごとのPythonバージョン指定：

  ```bash
  cd my-project
  uv python pin 3.10      # このプロジェクトはPython 3.10を使用
  ```

  これにより、プロジェクトディレクトリに`.python-version`ファイルが生成され、バージョン設定が記録されます。

- 仮想環境の作成と依存管理：

  ```bash
  uv venv                    # 仮想環境を作成
  uv add numpy pandas        # 依存パッケージを追加
  uv sync                    # 依存関係を仮想環境に同期
  ```

  依存情報は`pyproject.toml`と`uv.lock`に記録され、一貫性が保たれます。

- プロジェクト環境の確認：

  ```bash
  uv run python -c "import sys; print(sys.executable)"
  ```

  出力はプロジェクトの仮想環境のPythonパス（例：`.../my-project/.venv/Scripts/python.exe`（Windows））となるはずです。

- UVでプロジェクトをビルドしPyPIに公開：

  ```bash
  uv build
  uv publish
  ```

- `uv`のカスタム設定（uv.toml）例：キャッシュディレクトリやpipインデックスURLの指定。uv.tomlはグローバル（Linux/Macなら~/.config/uv/uv.toml、Windowsなら%APPDATA%\uv\uv.toml）またはプロジェクトディレクトリに配置できます。

  ```tmol
  cache-dir = "/Volumes/Work/Temporary/uv_cache"

  [[index]]
  url = "https://pypi.tuna.tsinghua.edu.cn/simple"
  default = true
  ```

<footer lang="ja" style="
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
    このページは生成AIによって自動翻訳されています。不正確または不完全な情報が含まれる場合があります。
    <a href="mailto:wenjie.xu.cn@outlook.com" style="
      color: #007bff;
      text-decoration: none;
    ">ご意見・ご指摘はこちらまで</a>。品質向上のためご協力をお願いいたします。
  </p>
</footer>
