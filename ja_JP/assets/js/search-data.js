
const currentUrl = window.location.href;
const siteUrl = "https://lab.wenjiexu.site/"; 
let updatedUrl = currentUrl.replace("https://lab.wenjiexu.site/", "");
if (currentUrl.length == updatedUrl.length && currentUrl.startsWith("http://127.0.0.1")) {
  const otherSiteUrl = siteUrl.replace("localhost", "127.0.0.1");
  updatedUrl = currentUrl.replace(otherSiteUrl + "", "");
}
if ("ja_JP".length > 0) {
  updatedUrl = updatedUrl.replace("/ja_JP", "");
}
// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-自己紹介",
    title: "自己紹介",
    section: "ナビゲーションメニュー",
    handler: () => {
      window.location.href = "/ja_JP/";
    },
  },{id: "nav-論文",
          title: "論文",
          description: "カテゴリ別に新しい順で並んだ論文一覧。jekyll-scholar により生成。",
          section: "ナビゲーションメニュー",
          handler: () => {
            window.location.href = "/ja_JP/publications/";
          },
        },{id: "nav-プロジェクト",
          title: "プロジェクト",
          description: "増え続ける私のクールなプロジェクト集。",
          section: "ナビゲーションメニュー",
          handler: () => {
            window.location.href = "/ja_JP/projects/";
          },
        },{id: "nav-工具",
          title: "工具",
          description: "個人制作やオープンソースの便利なアプリ、スクリプト、ツールのコレクションです。",
          section: "ナビゲーションメニュー",
          handler: () => {
            window.location.href = "/ja_JP/toolbox/";
          },
        },{id: "books-the-godfather",
          title: 'The Godfather',
          description: "",
          section: "",handler: () => {
              window.location.href = "/ja_JP/books/ja_JP/the_godfather/";
            },},{id: "news-2022年-学長奨学金",
          title: '2022年 学長奨学金',
          description: "",
          section: "ニュース",},{id: "news-2022年-学部国家奨学金",
          title: '2022年 学部国家奨学金',
          description: "",
          section: "ニュース",},{id: "news-2023年-江蘇省優秀学士論文-一等賞",
          title: '2023年 江蘇省優秀学士論文 一等賞',
          description: "",
          section: "ニュース",},{id: "projects-hostimagebackup",
          title: 'HostImageBackup',
          description: "複数の画像ホスティングサービスから画像を簡単にローカルへバックアップできるモジュール式Python CLIツール。",
          section: "プロジェクト",handler: () => {
              window.location.href = "/ja_JP/projects/ja_JP/HostImageBackup/";
            },},{id: "projects-microsofthostspicker",
          title: 'MicrosoftHostsPicker',
          description: "一个现代化的异步 Python 工具，可自动查找并选择 Microsoft 服务的最快 IP 地址。",
          section: "プロジェクト",handler: () => {
              window.location.href = "/ja_JP/projects/ja_JP/MicrosoftHostsPicker/";
            },},{id: "projects-typst-ucas-thesis",
          title: 'Typst-ucas-thesis',
          description: "Typst に基づく中国科学院大学論文テンプレート",
          section: "プロジェクト",handler: () => {
              window.location.href = "/ja_JP/projects/ja_JP/Typst%20for%20UCAS%20thesis/";
            },},{
        id: 'social-email',
        title: 'メールを送信',
        section: 'ソーシャル',
        handler: () => {
          window.open("mailto:%77%65%6E%6A%69%65.%78%75.%63%6E@%6F%75%74%6C%6F%6F%6B.%63%6F%6D", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'ソーシャル',
        handler: () => {
          window.open("https://github.com/WayneXuCN", "_blank");
        },
      },{
        id: 'social-orcid',
        title: 'ORCID',
        section: 'ソーシャル',
        handler: () => {
          window.open("https://orcid.org/0000-0002-7778-0450", "_blank");
        },
      },{
        id: 'social-researchgate',
        title: 'ResearchGate',
        section: 'ソーシャル',
        handler: () => {
          window.open("https://www.researchgate.net/profile/https://www.researchgate.net/profile/Wenjie-Xu-19/", "_blank");
        },
      },{
        id: 'social-rss',
        title: 'RSS Feed',
        section: 'ソーシャル',
        handler: () => {
          window.open("/feed.xml", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'ソーシャル',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=eWTidmsAAAAJ", "_blank");
        },
      },{
        id: 'social-wechat_qr',
        title: 'Wechat_qr',
        section: 'ソーシャル',
        handler: () => {
          window.open("", "_blank");
        },
      },{
        id: 'social-zotero',
        title: 'Zotero',
        section: 'ソーシャル',
        handler: () => {
          window.open("https://www.zotero.org/wenjie_xu2000", "_blank");
        },
      },{
          id: 'lang-en_US',
          title: 'en_US',
          section: '言語',
          handler: () => {
            window.location.href = "/en_US" + updatedUrl;
          },
        },{
          id: 'lang-zh_CN',
          title: 'zh_CN',
          section: '言語',
          handler: () => {
            window.location.href = "" + updatedUrl;
          },
        },{
          id: 'lang-de_DE',
          title: 'de_DE',
          section: '言語',
          handler: () => {
            window.location.href = "/de_DE" + updatedUrl;
          },
        },{
      id: 'light-theme',
      title: 'ライトテーマに変更',
      description: 'サイトのテーマをライトに変更',
      section: 'テーマ',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'ダークテーマに変更',
      description: 'サイトのテーマをダークに変更',
      section: 'テーマ',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'システムデフォルトを使用',
      description: 'サイトのテーマをシステムデフォルトに変更',
      section: 'テーマ',
      handler: () => {
        setThemeSetting("system");
      },
    },];
