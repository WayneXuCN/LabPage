
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
        },{id: "nav-ブログ",
          title: "ブログ",
          description: "",
          section: "ナビゲーションメニュー",
          handler: () => {
            window.location.href = "/ja_JP/blog/";
          },
        },{id: "nav-アーカイブ",
          title: "アーカイブ",
          description: "異なる分野のアイデアをつなぐ",
          section: "ナビゲーションメニュー",
          handler: () => {
            window.location.href = "/ja_JP/archive/";
          },
        },{id: "nav-工具",
          title: "工具",
          description: "個人制作やオープンソースの便利なアプリ、スクリプト、ツールのコレクションです。",
          section: "ナビゲーションメニュー",
          handler: () => {
            window.location.href = "/ja_JP/toolbox/";
          },
        },{id: "dropdown-履歴",
              title: "履歴",
              description: "",
              section: "ドロップダウン",
              handler: () => {
                window.location.href = "/ja_JP/cv/";
              },
            },{id: "dropdown-本棚",
              title: "本棚",
              description: "",
              section: "ドロップダウン",
              handler: () => {
                window.location.href = "/ja_JP/books/";
              },
            },{id: "dropdown-人物",
              title: "人物",
              description: "",
              section: "ドロップダウン",
              handler: () => {
                window.location.href = "/ja_JP/people/";
              },
            },{id: "post-macosシステム設定の記録",
        
          title: "macOSシステム設定の記録",
        
        description: "macOSのソフトウェア設定と一般的なエラー解決策の記録",
        section: "投稿",
        handler: () => {
          
            window.location.href = "/ja_JP/blog/2025/Mac%E7%B3%BB%E7%BB%9F%E9%85%8D%E7%BD%AE%E8%AE%B0%E5%BD%95/";
          
        },
      },{id: "post-低スペッククラウドサーバーの実用的な設定記録",
        
          title: "低スペッククラウドサーバーの実用的な設定記録",
        
        description: "クラウドサーバー設定の実践的な記録",
        section: "投稿",
        handler: () => {
          
            window.location.href = "/ja_JP/blog/2025/%E4%BD%8E%E9%85%8D%E4%BA%91%E6%9C%8D%E5%8A%A1%E5%99%A8%E9%85%8D%E7%BD%AE/";
          
        },
      },{id: "post-随筆-旧居の記憶",
        
          title: "「随筆」旧居の記憶",
        
        description: "気ままなひとこと",
        section: "投稿",
        handler: () => {
          
            window.location.href = "/ja_JP/blog/2025/%E9%9A%8F%E7%AC%94%E5%B9%B4%E5%89%8D%E9%87%8D%E8%AE%BF%E6%97%A7%E5%B1%85/";
          
        },
      },{id: "post-随筆-2025年の最初の日に-少し語ってみる",
        
          title: "「随筆」2025年の最初の日に、少し語ってみる",
        
        description: "気ままなひとこと",
        section: "投稿",
        handler: () => {
          
            window.location.href = "/ja_JP/blog/2025/%E9%9A%8F%E7%AC%9425%E5%B2%81%E7%9A%84%E7%AC%AC%E4%B8%80%E5%A4%A9/";
          
        },
      },{id: "post-2024年の研究活動総括",
        
          title: "2024年の研究活動総括",
        
        description: "2024年の振り返り",
        section: "投稿",
        handler: () => {
          
            window.location.href = "/ja_JP/blog/2024/2024%E5%B9%B4%E7%A7%91%E7%A0%94%E5%B7%A5%E4%BD%9C%E6%80%BB%E7%BB%93/";
          
        },
      },{id: "post-転載-中国語の常態と異常態",
        
          title: "「転載」中国語の常態と異常態",
        
        description: "余光中氏の「中国語の常態と異常態」からの転載であり、すべての意見に完全に同意するものではありません",
        section: "投稿",
        handler: () => {
          
            window.location.href = "/ja_JP/blog/2024/%E8%BD%AC%E8%BD%BD%E4%B8%AD%E6%96%87%E7%9A%84%E5%B8%B8%E6%80%81%E4%B8%8E%E5%8F%98%E6%80%81/";
          
        },
      },{id: "post-学術研究向けlinuxサーバーの構築手順",
        
          title: "学術研究向けLinuxサーバーの構築手順",
        
        description: "Linuxサーバーの構築方法",
        section: "投稿",
        handler: () => {
          
            window.location.href = "/ja_JP/blog/2024/%E9%83%A8%E7%BD%B2%E7%94%A8%E4%BA%8E%E5%AD%A6%E6%9C%AF%E7%A0%94%E7%A9%B6%E7%9A%84Linux%E6%9C%8D%E5%8A%A1%E5%99%A8/";
          
        },
      },{id: "post-pythonプロジェクトで効率的にパスを管理するためのパラダイム",
        
          title: "Pythonプロジェクトで効率的にパスを管理するためのパラダイム",
        
        description: "標準的なパス管理手法",
        section: "投稿",
        handler: () => {
          
            window.location.href = "/ja_JP/blog/2024/Python%E9%A1%B9%E7%9B%AE%E4%B8%AD%E9%AB%98%E6%95%88%E7%AE%A1%E7%90%86%E8%B7%AF%E5%BE%84%E7%9A%84%E8%8C%83%E5%BC%8F/";
          
        },
      },{id: "post-転載-なぜ今でもブログを書くのか",
        
          title: "「転載」なぜ今でもブログを書くのか",
        
        description: "読者がいなくてもブログを書くべき理由",
        section: "投稿",
        handler: () => {
          
            window.location.href = "/ja_JP/blog/2024/%E8%BD%AC%E8%BD%BD%E4%B8%BA%E4%BB%80%E4%B9%88%E8%BF%98%E5%9C%A8%E5%86%99%E5%8D%9A%E5%AE%A2/";
          
        },
      },{id: "post-word-レイアウト記録",
        
          title: "Word レイアウト記録",
        
        description: "よく使う Word のレイアウト経験とマクロツール",
        section: "投稿",
        handler: () => {
          
            window.location.href = "/ja_JP/blog/2024/Word%E6%8E%92%E7%89%88%E8%AE%B0%E5%BD%95/";
          
        },
      },{id: "post-pcケースファンの制御",
        
          title: "PCケースファンの制御",
        
        description: "温度カーブでPCケースファンの回転数を制御する方法",
        section: "投稿",
        handler: () => {
          
            window.location.href = "/ja_JP/blog/2024/%E6%9C%BA%E7%AE%B1%E9%A3%8E%E6%89%87%E6%8E%A7%E5%88%B6/";
          
        },
      },{id: "post-随筆-スリッパリー-スロープ誤謬を理解する",
        
          title: "「随筆」スリッパリー・スロープ誤謬を理解する",
        
        description: "スリッパリー・スロープ（滑り坂）誤謬について",
        section: "投稿",
        handler: () => {
          
            window.location.href = "/ja_JP/blog/2024/%E9%9A%8F%E7%AC%94%E6%BB%91%E5%9D%A1%E8%B0%AC%E8%AF%AFSlipperySlop/";
          
        },
      },{id: "post-condaとuvで柔軟かつ効率的なpython環境管理を実現する",
        
          title: "Condaとuvで柔軟かつ効率的なPython環境管理を実現する",
        
        description: "様々なニーズに応じたPython環境管理の方法",
        section: "投稿",
        handler: () => {
          
            window.location.href = "/ja_JP/blog/2024/Python%E7%8E%AF%E5%A2%83%E7%AE%A1%E7%90%86Conda%E5%92%8Cuv/";
          
        },
      },{id: "post-随筆-私の-表現欲-は減少している",
        
          title: "「随筆」私の「表現欲」は減少している",
        
        description: "ちょっとした考えごと",
        section: "投稿",
        handler: () => {
          
            window.location.href = "/ja_JP/blog/2023/%E9%9A%8F%E7%AC%94%E6%88%91%E7%9A%84%E8%A1%A8%E8%BE%BE%E6%AC%B2%E5%9C%A8%E9%80%92%E5%87%8F/";
          
        },
      },{id: "post-随筆-成長について",
        
          title: "「随筆」成長について",
        
        description: "ちょっとした考えごと",
        section: "投稿",
        handler: () => {
          
            window.location.href = "/ja_JP/blog/2023/%E9%9A%8F%E7%AC%94%E5%85%B3%E4%BA%8E%E6%88%90%E9%95%BF/";
          
        },
      },{id: "post-転載-引用される論文と採択される提案書の書き方",
        
          title: "「転載」引用される論文と採択される提案書の書き方",
        
        description: "『Writing science - Joshua Schimel』より抜粋",
        section: "投稿",
        handler: () => {
          
            window.location.href = "/ja_JP/blog/2023/%E8%BD%AC%E8%BD%BD%E5%A6%82%E4%BD%95%E6%92%B0%E5%86%99%E8%A2%AB%E5%BC%95%E7%94%A8%E7%9A%84%E8%AE%BA%E6%96%87%E5%92%8C%E8%8E%B7%E5%BE%97%E8%B5%84%E5%8A%A9%E7%9A%84%E6%8F%90%E6%A1%88/";
          
        },
      },{id: "post-随筆-人脈は広げても-友人は慎重に選ぶべき",
        
          title: "「随筆」人脈は広げても、友人は慎重に選ぶべき",
        
        description: "ちょっとした考えごと",
        section: "投稿",
        handler: () => {
          
            window.location.href = "/ja_JP/blog/2023/%E9%9A%8F%E7%AC%94%E5%8F%AF%E4%BB%A5%E5%A4%9A%E8%AE%A4%E8%AF%86%E4%BA%BA%E4%BD%86%E8%A6%81%E5%B0%91%E4%BA%A4%E6%9C%8B%E5%8F%8B/";
          
        },
      },{id: "post-windows-システム設定記録",
        
          title: "Windows システム設定記録",
        
        description: "Windows システムのソフトウェア設定と一般的なエラー解決策の記録",
        section: "投稿",
        handler: () => {
          
            window.location.href = "/ja_JP/blog/2022/Windows%E7%B3%BB%E7%BB%9F%E9%85%8D%E7%BD%AE%E8%AE%B0%E5%BD%95/";
          
        },
      },{id: "post-linux-システム設定記録",
        
          title: "Linux システム設定記録",
        
        description: "Linux システムのソフトウェア設定と一般的な問題解決策の記録",
        section: "投稿",
        handler: () => {
          
            window.location.href = "/ja_JP/blog/2022/Linux%E7%B3%BB%E7%BB%9F%E9%85%8D%E7%BD%AE%E8%AE%B0%E5%BD%95/";
          
        },
      },{id: "post-転載-あなたの記録を築く",
        
          title: "「転載」あなたの記録を築く",
        
        description: "「饶毅科学」公式アカウントからの転載",
        section: "投稿",
        handler: () => {
          
            window.location.href = "/ja_JP/blog/2022/%E8%BD%AC%E8%BD%BD%E5%BB%BA%E7%AB%8B%E4%BD%A0%E7%9A%84%E8%AE%B0%E5%BD%95/";
          
        },
      },{id: "post-中国語コピーライティング-タイポグラフィガイドライン",
        
          title: "中国語コピーライティング・タイポグラフィガイドライン",
        
        description: "中国語のコピーライティングとタイポグラフィのガイドライン。書面でのコミュニケーション効果を高めるために。",
        section: "投稿",
        handler: () => {
          
            window.location.href = "/ja_JP/blog/2022/%E4%B8%AD%E6%96%87%E6%96%87%E6%A1%88%E6%8E%92%E7%89%88%E6%8C%87%E5%8D%97/";
          
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
