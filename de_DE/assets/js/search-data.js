
const currentUrl = window.location.href;
const siteUrl = "https://waynexucn.github.io/"; 
let updatedUrl = currentUrl.replace("https://waynexucn.github.io/", "");
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
  },{id: "nav-blog",
          title: "Blog",
          description: "",
          section: "Navigationsmenü",
          handler: () => {
            window.location.href = "/de_DE/blog/";
          },
        },{id: "nav-archiv",
          title: "Archiv",
          description: "Brücke zwischen Ideen aus verschiedenen Bereichen",
          section: "Navigationsmenü",
          handler: () => {
            window.location.href = "/de_DE/archive/";
          },
        },{id: "nav-projekte",
          title: "Projekte",
          description: "Eine wachsende Sammlung meiner coolen Projekte.",
          section: "Navigationsmenü",
          handler: () => {
            window.location.href = "/de_DE/projects/";
          },
        },{id: "nav-repositorien",
          title: "Repositorien",
          description: "",
          section: "Navigationsmenü",
          handler: () => {
            window.location.href = "/de_DE/repositories/";
          },
        },{id: "nav-veröffentlichungen",
          title: "Veröffentlichungen",
          description: "Veröffentlichungen nach Kategorien in umgekehrt chronologischer Reihenfolge. Erstellt mit jekyll-scholar.",
          section: "Navigationsmenü",
          handler: () => {
            window.location.href = "/de_DE/publications/";
          },
        },{id: "dropdown-app",
              title: "App",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "/de_DE/apps/";
              },
            },{id: "dropdown-bücherregal",
              title: "Bücherregal",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "/de_DE/books/";
              },
            },{id: "dropdown-personen",
              title: "Personen",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "/de_DE/people/";
              },
            },{id: "post-macos-systemkonfigurationsprotokoll",
        
          title: "macOS Systemkonfigurationsprotokoll",
        
        description: "Aufzeichnung von macOS-Systemsoftwarekonfigurationen und Lösungen für häufige Fehler",
        section: "Beiträge",
        handler: () => {
          
            window.location.href = "/de_DE/blog/2025/Mac%E7%B3%BB%E7%BB%9F%E9%85%8D%E7%BD%AE%E8%AE%B0%E5%BD%95/";
          
        },
      },{id: "post-praktische-konfiguration-für-leistungsschwache-cloud-server",
        
          title: "Praktische Konfiguration für leistungsschwache Cloud-Server",
        
        description: "Notizen zur Konfiguration von Cloud-Servern mit niedriger Leistung",
        section: "Beiträge",
        handler: () => {
          
            window.location.href = "/de_DE/blog/2025/%E4%BD%8E%E9%85%8D%E4%BA%91%E6%9C%8D%E5%8A%A1%E5%99%A8%E9%85%8D%E7%BD%AE/";
          
        },
      },{id: "post-essay-erinnerungen-an-das-alte-zuhause",
        
          title: "„Essay“ Erinnerungen an das alte Zuhause",
        
        description: "Gedanken und Alltagsbeobachtungen",
        section: "Beiträge",
        handler: () => {
          
            window.location.href = "/de_DE/blog/2025/%E9%9A%8F%E7%AC%94%E5%B9%B4%E5%89%8D%E9%87%8D%E8%AE%BF%E6%97%A7%E5%B1%85/";
          
        },
      },{id: "post-essay-der-erste-tag-im-jahr-2025-ein-paar-gedanken",
        
          title: "„Essay“ Der erste Tag im Jahr 2025 – Ein paar Gedanken",
        
        description: "Gedanken und Alltägliches",
        section: "Beiträge",
        handler: () => {
          
            window.location.href = "/de_DE/blog/2025/%E9%9A%8F%E7%AC%9425%E5%B2%81%E7%9A%84%E7%AC%AC%E4%B8%80%E5%A4%A9/";
          
        },
      },{id: "post-jahresrückblick-2024",
        
          title: "Jahresrückblick 2024",
        
        description: "Rückblick auf meine wissenschaftliche Arbeit im Jahr 2024",
        section: "Beiträge",
        handler: () => {
          
            window.location.href = "/de_DE/blog/2024/2024%E5%B9%B4%E7%A7%91%E7%A0%94%E5%B7%A5%E4%BD%9C%E6%80%BB%E7%BB%93/";
          
        },
      },{id: "post-weiterveröffentlicht-die-normalität-und-abnormalität-der-chinesischen-sprache",
        
          title: "„Weiterveröffentlicht“ Die Normalität und Abnormalität der chinesischen Sprache",
        
        description: "Nachdruck eines Artikels von Herrn Yu Guangzhong „Die Normalität und Abnormalität der chinesischen Sprache“. Die Ansichten entsprechen nicht unbedingt meiner eigenen.",
        section: "Beiträge",
        handler: () => {
          
            window.location.href = "/de_DE/blog/2024/%E8%BD%AC%E8%BD%BD%E4%B8%AD%E6%96%87%E7%9A%84%E5%B8%B8%E6%80%81%E4%B8%8E%E5%8F%98%E6%80%81/";
          
        },
      },{id: "post-einrichtung-eines-linux-servers-für-wissenschaftliche-forschung",
        
          title: "Einrichtung eines Linux-Servers für wissenschaftliche Forschung",
        
        description: "Wie man einen Linux-Server für akademische Zwecke einrichtet",
        section: "Beiträge",
        handler: () => {
          
            window.location.href = "/de_DE/blog/2024/%E9%83%A8%E7%BD%B2%E7%94%A8%E4%BA%8E%E5%AD%A6%E6%9C%AF%E7%A0%94%E7%A9%B6%E7%9A%84Linux%E6%9C%8D%E5%8A%A1%E5%99%A8/";
          
        },
      },{id: "post-effiziente-pfadverwaltung-in-python-projekten-best-practices",
        
          title: "Effiziente Pfadverwaltung in Python-Projekten: Best Practices",
        
        description: "Standardisierte Methoden zur Pfadverwaltung in Python-Projekten",
        section: "Beiträge",
        handler: () => {
          
            window.location.href = "/de_DE/blog/2024/Python%E9%A1%B9%E7%9B%AE%E4%B8%AD%E9%AB%98%E6%95%88%E7%AE%A1%E7%90%86%E8%B7%AF%E5%BE%84%E7%9A%84%E8%8C%83%E5%BC%8F/";
          
        },
      },{id: "post-weiterveröffentlicht-warum-ich-weiterhin-blogge",
        
          title: "„Weiterveröffentlicht“ Warum ich weiterhin blogge",
        
        description: "Du solltest bloggen, auch wenn du keine Leser hast",
        section: "Beiträge",
        handler: () => {
          
            window.location.href = "/de_DE/blog/2024/%E8%BD%AC%E8%BD%BD%E4%B8%BA%E4%BB%80%E4%B9%88%E8%BF%98%E5%9C%A8%E5%86%99%E5%8D%9A%E5%AE%A2/";
          
        },
      },{id: "post-word-layout-aufzeichnungen",
        
          title: "Word-Layout-Aufzeichnungen",
        
        description: "Häufige Word-Layout-Erfahrungen und Makro-Tools",
        section: "Beiträge",
        handler: () => {
          
            window.location.href = "/de_DE/blog/2024/Word%E6%8E%92%E7%89%88%E8%AE%B0%E5%BD%95/";
          
        },
      },{id: "post-steuerung-der-gehäuselüfter",
        
          title: "Steuerung der Gehäuselüfter",
        
        description: "Temperaturkurven zur Steuerung der Gehäuselüftergeschwindigkeit festlegen",
        section: "Beiträge",
        handler: () => {
          
            window.location.href = "/de_DE/blog/2024/%E6%9C%BA%E7%AE%B1%E9%A3%8E%E6%89%87%E6%8E%A7%E5%88%B6/";
          
        },
      },{id: "post-essay-das-verständnis-des-dammbruch-arguments-slippery-slope",
        
          title: "„Essay“ Das Verständnis des Dammbruch-Arguments (Slippery Slope)",
        
        description: "Das Dammbruch-Argument (Slippery Slope)",
        section: "Beiträge",
        handler: () => {
          
            window.location.href = "/de_DE/blog/2024/%E9%9A%8F%E7%AC%94%E6%BB%91%E5%9D%A1%E8%B0%AC%E8%AF%AFSlipperySlop/";
          
        },
      },{id: "post-flexible-und-effiziente-python-umgebungsverwaltung-mit-conda-und-uv",
        
          title: "Flexible und effiziente Python-Umgebungsverwaltung mit Conda und uv",
        
        description: "Methoden zur Verwaltung von Python-Umgebungen für unterschiedliche Anforderungen",
        section: "Beiträge",
        handler: () => {
          
            window.location.href = "/de_DE/blog/2024/Python%E7%8E%AF%E5%A2%83%E7%AE%A1%E7%90%86Conda%E5%92%8Cuv/";
          
        },
      },{id: "post-essay-mein-ausdrucksbedürfnis-nimmt-ab",
        
          title: "„Essay“ Mein Ausdrucksbedürfnis nimmt ab",
        
        description: "Kleine Gedanken und Worte",
        section: "Beiträge",
        handler: () => {
          
            window.location.href = "/de_DE/blog/2023/%E9%9A%8F%E7%AC%94%E6%88%91%E7%9A%84%E8%A1%A8%E8%BE%BE%E6%AC%B2%E5%9C%A8%E9%80%92%E5%87%8F/";
          
        },
      },{id: "post-essay-über-das-erwachsenwerden",
        
          title: "„Essay“ Über das Erwachsenwerden",
        
        description: "Gedanken und Reflexionen über das Erwachsenwerden",
        section: "Beiträge",
        handler: () => {
          
            window.location.href = "/de_DE/blog/2023/%E9%9A%8F%E7%AC%94%E5%85%B3%E4%BA%8E%E6%88%90%E9%95%BF/";
          
        },
      },{id: "post-weiterveröffentlicht-wie-man-zitierte-wissenschaftliche-arbeiten-und-erfolgreiche-förderanträge-schreibt",
        
          title: "„Weiterveröffentlicht“ Wie man zitierte wissenschaftliche Arbeiten und erfolgreiche Förderanträge schreibt",
        
        description: "Auszüge aus „Writing Science – Joshua Schimel“",
        section: "Beiträge",
        handler: () => {
          
            window.location.href = "/de_DE/blog/2023/%E8%BD%AC%E8%BD%BD%E5%A6%82%E4%BD%95%E6%92%B0%E5%86%99%E8%A2%AB%E5%BC%95%E7%94%A8%E7%9A%84%E8%AE%BA%E6%96%87%E5%92%8C%E8%8E%B7%E5%BE%97%E8%B5%84%E5%8A%A9%E7%9A%84%E6%8F%90%E6%A1%88/";
          
        },
      },{id: "post-essay-man-kann-viele-menschen-kennen-aber-sollte-wenige-freunde-haben",
        
          title: "„Essay“ Man kann viele Menschen kennen, aber sollte wenige Freunde haben",
        
        description: "Gedanken und Reflexionen über Beziehungen",
        section: "Beiträge",
        handler: () => {
          
            window.location.href = "/de_DE/blog/2023/%E9%9A%8F%E7%AC%94%E5%8F%AF%E4%BB%A5%E5%A4%9A%E8%AE%A4%E8%AF%86%E4%BA%BA%E4%BD%86%E8%A6%81%E5%B0%91%E4%BA%A4%E6%9C%8B%E5%8F%8B/";
          
        },
      },{id: "post-windows-systemkonfigurationsnotizen",
        
          title: "Windows-Systemkonfigurationsnotizen",
        
        description: "Notizen zur Softwarekonfiguration und Fehlerbehebung unter Windows",
        section: "Beiträge",
        handler: () => {
          
            window.location.href = "/de_DE/blog/2022/Windows%E7%B3%BB%E7%BB%9F%E9%85%8D%E7%BD%AE%E8%AE%B0%E5%BD%95/";
          
        },
      },{id: "post-linux-systemkonfigurationsprotokoll",
        
          title: "Linux Systemkonfigurationsprotokoll",
        
        description: "Aufzeichnung von Linux-Systemsoftwarekonfigurationen und Lösungen für häufige Probleme",
        section: "Beiträge",
        handler: () => {
          
            window.location.href = "/de_DE/blog/2022/Linux%E7%B3%BB%E7%BB%9F%E9%85%8D%E7%BD%AE%E8%AE%B0%E5%BD%95/";
          
        },
      },{id: "post-weiterveröffentlicht-baue-deine-aufzeichnungen-auf",
        
          title: "„Weiterveröffentlicht“ Baue deine Aufzeichnungen auf",
        
        description: "Weiterveröffentlicht vom „Rao Yi Wissenschafts-WeChat-Kanal“",
        section: "Beiträge",
        handler: () => {
          
            window.location.href = "/de_DE/blog/2022/%E8%BD%AC%E8%BD%BD%E5%BB%BA%E7%AB%8B%E4%BD%A0%E7%9A%84%E8%AE%B0%E5%BD%95/";
          
        },
      },{id: "post-leitfaden-für-chinesisches-copywriting-und-typografie",
        
          title: "Leitfaden für chinesisches Copywriting und Typografie",
        
        description: "Ein Leitfaden für chinesische Typografie zur Verbesserung der schriftlichen Kommunikation",
        section: "Beiträge",
        handler: () => {
          
            window.location.href = "/de_DE/blog/2022/%E4%B8%AD%E6%96%87%E6%96%87%E6%A1%88%E6%8E%92%E7%89%88%E6%8C%87%E5%8D%97/";
          
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
          section: "Nachrichten",},{id: "projects-typst-ucas-thesis",
          title: 'Typst-ucas-thesis',
          description: "UCAS Thesis-Vorlage basierend auf Typst",
          section: "Projekte",handler: () => {
              window.location.href = "/de_DE/projects/de/Typst%20for%20UCAS%20thesis/";
            },},{id: "projects-typst-ucas-thesis",
          title: 'Typst-ucas-thesis',
          description: "UCAS thesis Template Based on Typst",
          section: "Projekte",handler: () => {
              window.location.href = "/de_DE/projects/en/Typst%20for%20UCAS%20thesis/";
            },},{id: "projects-typst-ucas-thesis",
          title: 'Typst-ucas-thesis',
          description: "基于 Typst 的中国科学院大学学位论文模板",
          section: "Projekte",handler: () => {
              window.location.href = "/de_DE/projects/zh_CN/Typst%20for%20UCAS%20thesis/";
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
            window.location.href = "" + updatedUrl;
          },
        },{
          id: 'lang-zh_CN',
          title: 'zh_CN',
          section: 'Sprachen',
          handler: () => {
            window.location.href = "/zh_CN" + updatedUrl;
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
