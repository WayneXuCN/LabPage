
const currentUrl = window.location.href;
const siteUrl = "https://lab.wenjiexu.site/"; 
let updatedUrl = currentUrl.replace("https://lab.wenjiexu.site/", "");
if (currentUrl.length == updatedUrl.length && currentUrl.startsWith("http://127.0.0.1")) {
  const otherSiteUrl = siteUrl.replace("localhost", "127.0.0.1");
  updatedUrl = currentUrl.replace(otherSiteUrl + "", "");
}
if ("de_DE".length > 0) {
  updatedUrl = updatedUrl.replace("/de_DE", "");
}
// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-über-mich",
    title: "Über mich",
    section: "Navigationsmenü",
    handler: () => {
      window.location.href = "/de_DE/";
    },
  },{id: "nav-veröffentlichungen",
          title: "Veröffentlichungen",
          description: "Veröffentlichungen nach Kategorien in umgekehrt chronologischer Reihenfolge. Erstellt mit jekyll-scholar.",
          section: "Navigationsmenü",
          handler: () => {
            window.location.href = "/de_DE/publications/";
          },
        },{id: "nav-projekte",
          title: "Projekte",
          description: "Eine wachsende Sammlung meiner coolen Projekte.",
          section: "Navigationsmenü",
          handler: () => {
            window.location.href = "/de_DE/projects/";
          },
        },{id: "nav-werkzeug",
          title: "Werkzeug",
          description: "Eine Sammlung nützlicher Apps, Skripte und Tools – teils von mir entwickelt, teils Open Source.",
          section: "Navigationsmenü",
          handler: () => {
            window.location.href = "/de_DE/toolbox/";
          },
        },{id: "books-the-godfather",
          title: 'The Godfather',
          description: "",
          section: "",handler: () => {
              window.location.href = "/de_DE/books/de_DE/the_godfather/";
            },},{id: "news-präsidentenstipendium-2022",
          title: 'Präsidentenstipendium, 2022',
          description: "",
          section: "Nachrichten",},{id: "news-nationales-stipendium-für-bachelorstudierende-2022",
          title: 'Nationales Stipendium für Bachelorstudierende, 2022',
          description: "",
          section: "Nachrichten",},{id: "news-ausgezeichnete-bachelorarbeit-der-provinz-jiangsu-erster-preis-2023",
          title: 'Ausgezeichnete Bachelorarbeit der Provinz Jiangsu, Erster Preis 2023',
          description: "",
          section: "Nachrichten",},{id: "projects-hostimagebackup",
          title: 'HostImageBackup',
          description: "Ein modulares Python-CLI-Tool zum einfachen Sichern von Bildern von verschiedenen Bild-Hosting-Diensten auf Ihren lokalen Rechner.",
          section: "Projekte",handler: () => {
              window.location.href = "/de_DE/projects/de_DE/HostImageBackup/";
            },},{id: "projects-microsofthostspicker",
          title: 'MicrosoftHostsPicker',
          description: "一个现代化的异步 Python 工具，可自动查找并选择 Microsoft 服务的最快 IP 地址。",
          section: "Projekte",handler: () => {
              window.location.href = "/de_DE/projects/de_DE/MicrosoftHostsPicker/";
            },},{id: "projects-typst-ucas-thesis",
          title: 'Typst-ucas-thesis',
          description: "UCAS Thesis-Vorlage basierend auf Typst",
          section: "Projekte",handler: () => {
              window.location.href = "/de_DE/projects/de_DE/Typst%20for%20UCAS%20thesis/";
            },},{
        id: 'social-email',
        title: 'E-Mail senden',
        section: 'Soziale Netzwerke',
        handler: () => {
          window.open("mailto:%77%65%6E%6A%69%65.%78%75.%63%6E@%6F%75%74%6C%6F%6F%6B.%63%6F%6D", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Soziale Netzwerke',
        handler: () => {
          window.open("https://github.com/WayneXuCN", "_blank");
        },
      },{
        id: 'social-orcid',
        title: 'ORCID',
        section: 'Soziale Netzwerke',
        handler: () => {
          window.open("https://orcid.org/0000-0002-7778-0450", "_blank");
        },
      },{
        id: 'social-researchgate',
        title: 'ResearchGate',
        section: 'Soziale Netzwerke',
        handler: () => {
          window.open("https://www.researchgate.net/profile/https://www.researchgate.net/profile/Wenjie-Xu-19/", "_blank");
        },
      },{
        id: 'social-rss',
        title: 'RSS Feed',
        section: 'Soziale Netzwerke',
        handler: () => {
          window.open("/feed.xml", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Soziale Netzwerke',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=eWTidmsAAAAJ", "_blank");
        },
      },{
        id: 'social-wechat_qr',
        title: 'Wechat_qr',
        section: 'Soziale Netzwerke',
        handler: () => {
          window.open("", "_blank");
        },
      },{
        id: 'social-zotero',
        title: 'Zotero',
        section: 'Soziale Netzwerke',
        handler: () => {
          window.open("https://www.zotero.org/wenjie_xu2000", "_blank");
        },
      },{
          id: 'lang-en_US',
          title: 'en_US',
          section: 'Sprachen',
          handler: () => {
            window.location.href = "/en_US" + updatedUrl;
          },
        },{
          id: 'lang-zh_CN',
          title: 'zh_CN',
          section: 'Sprachen',
          handler: () => {
            window.location.href = "" + updatedUrl;
          },
        },{
          id: 'lang-ja_JP',
          title: 'ja_JP',
          section: 'Sprachen',
          handler: () => {
            window.location.href = "/ja_JP" + updatedUrl;
          },
        },{
      id: 'light-theme',
      title: 'Zum hellen Design wechseln',
      description: 'Das Design der Seite auf Hell ändern',
      section: 'Design',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Zum dunklen Design wechseln',
      description: 'Das Design der Seite auf Dunkel ändern',
      section: 'Design',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Systemstandard verwenden',
      description: 'Das Design der Seite auf Systemstandard ändern',
      section: 'Design',
      handler: () => {
        setThemeSetting("system");
      },
    },];
