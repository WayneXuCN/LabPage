---
layout: page
title: MicrosoftHostsPicker
description: A modern, asynchronous Python tool to automatically find and select the fastest IP addresses for Microsoft services.
img: assets/img/project/MicrosoftHostsPicker/MicrosoftHostsPicker.png
importance: 2
category: fun
giscus_comments: true
---

A modern, asynchronous Python tool to automatically find and select the fastest IP addresses for Microsoft services.

## 🚀 Features

- **Asynchronous ping testing** - Concurrent latency testing for faster results
- **Smart IP selection** - Intelligent early termination when optimal IPs are found
- **Modular configuration** - Easy-to-customize service definitions
- **Beautiful console output** - Rich, colorful progress indicators and results
- **Modern Python** - Built with asyncio, type hints, and dataclasses

## 🎯 Why This Tool?

In certain regions, Microsoft services may experience poor performance due to DNS resolving to suboptimal IP addresses. This tool solves that problem by:

- Testing hundreds of IP addresses concurrently
- Identifying the lowest-latency endpoints for each service
- Generating optimized hosts file entries
- Supporting 10+ Microsoft services including Xbox Live, Office CDN, Microsoft Store, and more

## 📋 Supported Services

- **Microsoft Account** - account.microsoft.com
- **Xbox Live CDN** - Game content delivery and multiplayer services
- **Xbox Cloud Sync** - Save game synchronization
- **Office CDN** - Office application downloads and updates
- **Microsoft Store** - App store images and pages
- **Microsoft Games Download** - Game installation and updates
- **Windows Update** - System updates and patches
- **Microsoft Login** - Authentication services (static IP)

## 🛠️ Installation

### Prerequisites

- Python 3.12+
- Network connectivity for ping testing

### Method 1: Using uv (Recommended)

```sh
# Install uv if you haven't already
pip install uv

# Clone the repository
git clone https://github.com/WayneXuCN/MicrosoftHostsPicker.git
cd MicrosoftHostsPicker

# Install dependencies
uv sync
```

### Method 2: Using pip

```sh
# Clone the repository
git clone https://github.com/WayneXuCN/MicrosoftHostsPicker.git
cd MicrosoftHostsPicker

# Install dependencies
pip install ping3==4.0.4
```

## 🚀 Usage

### Basic Usage

```sh
python MicrosoftHostsPicker.py
```

### Advanced Configuration

You can customize the behavior by modifying `config.py`:

```python
DEFAULT_CONFIG = {
    'ping_attempts': 2,           # Number of ping attempts per IP
    'ping_timeout': 0.5,          # Ping timeout in seconds
    'ping_max_workers': 100,      # Concurrent ping limit
    'good_enough_threshold': 50.0, # Stop testing if latency < 50ms
}
```

## 📁 Project Structure

```text
MicrosoftHostsPicker/
├── MicrosoftHostsPicker.py    # Main application
├── config.py                  # Service configurations
├── pyproject.toml            # Project metadata and dependencies
├── uv.lock                   # Lock file for reproducible builds
├── data/                     # IP address databases
│   ├── Microsoft_Account.txt
│   ├── Xbox_Live_CDN_1.txt
│   └── ...
└── hosts                     # Generated hosts file (after running)
```

## 🔧 How It Works

1. **Configuration Loading** - Reads service definitions from `config.py`
2. **Asynchronous Testing** - Concurrently pings IP addresses from data files
3. **Smart Optimization** - Uses early termination for large IP sets
4. **Result Generation** - Creates optimized hosts file entries
5. **User Guidance** - Provides clear instructions for implementation

## 📖 Usage Tips

- **Selective Application**: Only replace problematic IP addresses in your system's hosts file
- **Backup First**: Always backup your existing hosts file before making changes
- **Service-Specific**: Some services use global CDN and may not need manual configuration
- **Regular Updates**: Re-run the tool periodically as optimal IPs may change

## 🔍 Understanding the Output

The tool provides rich console output:

- ✅ **Green checkmark**: Optimal IP found
- ❌ **Red X**: No available IP found
- ⚠️ **Warning**: Test failed
- 📊 **Progress bar**: Shows testing progress for large IP sets

## 🛡️ System Hosts File Locations

- **Windows**: `C:\Windows\System32\drivers\etc\hosts`
- **macOS/Linux**: `/etc/hosts`

Remember to run as administrator/sudo when modifying system hosts files.

## 🙏 Acknowledgments

This project is based on [ButaiKirin/MicrosoftHostsPicker](https://github.com/ButaiKirin/MicrosoftHostsPicker). Thanks to the original author for the foundation work.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit issues, feature requests, or pull requests.

## 📄 License

This project is licensed under the terms specified in the LICENSE file.

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
