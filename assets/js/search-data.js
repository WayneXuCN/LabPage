
const currentUrl = window.location.href;
const siteUrl = "https://lab.wenjiexu.site/"; 
let updatedUrl = currentUrl.replace("https://lab.wenjiexu.site/", "");
if (currentUrl.length == updatedUrl.length && currentUrl.startsWith("http://127.0.0.1")) {
  const otherSiteUrl = siteUrl.replace("localhost", "127.0.0.1");
  updatedUrl = currentUrl.replace(otherSiteUrl + "", "");
}
if ("".length > 0) {
  updatedUrl = updatedUrl.replace("/", "");
}
// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-关于",
    title: "关于",
    section: "导航菜单",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-发表",
          title: "发表",
          description: "按类别倒序排列的发表成果",
          section: "导航菜单",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-项目",
          title: "项目",
          description: "项目合集",
          section: "导航菜单",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-工具",
          title: "工具",
          description: "收录了我个人开发和部分开源的小程序、脚本与工具。",
          section: "导航菜单",
          handler: () => {
            window.location.href = "/toolbox/";
          },
        },{id: "books-the-godfather",
          title: 'The Godfather',
          description: "",
          section: "",handler: () => {
              window.location.href = "/books/zh_CN/the_godfather/";
            },},{id: "news-2022年校长奖学金",
          title: '2022年校长奖学金',
          description: "",
          section: "新闻",},{id: "news-2022年本科生国家奖学金",
          title: '2022年本科生国家奖学金',
          description: "",
          section: "新闻",},{id: "news-2023年江苏省优秀本科毕业论文一等奖",
          title: '2023年江苏省优秀本科毕业论文一等奖',
          description: "",
          section: "新闻",},{id: "projects-hostimagebackup",
          title: 'HostImageBackup',
          description: "一个模块化的 Python 命令行工具，轻松将各类图床服务的图片备份到本地。",
          section: "项目",handler: () => {
              window.location.href = "/projects/zh_CN/HostImageBackup/";
            },},{id: "projects-microsofthostspicker",
          title: 'MicrosoftHostsPicker',
          description: "一个现代化的异步 Python 工具，可自动查找并选择 Microsoft 服务的最快 IP 地址。",
          section: "项目",handler: () => {
              window.location.href = "/projects/zh_CN/MicrosoftHostsPicker/";
            },},{id: "projects-typst-ucas-thesis",
          title: 'Typst-ucas-thesis',
          description: "基于 Typst 的中国科学院大学学位论文模板",
          section: "项目",handler: () => {
              window.location.href = "/projects/zh_CN/Typst%20for%20UCAS%20thesis/";
            },},{
        id: 'social-email',
        title: '发送邮件',
        section: '社交',
        handler: () => {
          window.open("mailto:%77%65%6E%6A%69%65.%78%75.%63%6E@%6F%75%74%6C%6F%6F%6B.%63%6F%6D", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: '社交',
        handler: () => {
          window.open("https://github.com/WayneXuCN", "_blank");
        },
      },{
        id: 'social-orcid',
        title: 'ORCID',
        section: '社交',
        handler: () => {
          window.open("https://orcid.org/0000-0002-7778-0450", "_blank");
        },
      },{
        id: 'social-researchgate',
        title: 'ResearchGate',
        section: '社交',
        handler: () => {
          window.open("https://www.researchgate.net/profile/https://www.researchgate.net/profile/Wenjie-Xu-19/", "_blank");
        },
      },{
        id: 'social-rss',
        title: 'RSS Feed',
        section: '社交',
        handler: () => {
          window.open("/feed.xml", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: '社交',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=eWTidmsAAAAJ", "_blank");
        },
      },{
        id: 'social-wechat_qr',
        title: 'Wechat_qr',
        section: '社交',
        handler: () => {
          window.open("", "_blank");
        },
      },{
        id: 'social-zotero',
        title: 'Zotero',
        section: '社交',
        handler: () => {
          window.open("https://www.zotero.org/wenjie_xu2000", "_blank");
        },
      },{
          id: 'lang-en_US',
          title: 'en_US',
          section: '语言',
          handler: () => {
            window.location.href = "/en_US" + updatedUrl;
          },
        },{
          id: 'lang-de_DE',
          title: 'de_DE',
          section: '语言',
          handler: () => {
            window.location.href = "/de_DE" + updatedUrl;
          },
        },{
          id: 'lang-ja_JP',
          title: 'ja_JP',
          section: '语言',
          handler: () => {
            window.location.href = "/ja_JP" + updatedUrl;
          },
        },{
      id: 'light-theme',
      title: '切换到浅色主题',
      description: '切换为浅色主题',
      section: '主题',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: '切换到深色主题',
      description: '切换为深色主题',
      section: '主题',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: '使用系统默认主题',
      description: '跟随系统主题',
      section: '主题',
      handler: () => {
        setThemeSetting("system");
      },
    },];
