// Minimal i18n layer: a single dictionary keyed by dot-path, with each leaf
// carrying FR / EN / DE / ZH copy. Consumers read via `useLanguage().t()`
// which resolves the path for the active language.
export type Lang = "fr" | "en" | "de" | "zh";

export const LANGUAGES: Lang[] = ["fr", "en", "de", "zh"];
export const DEFAULT_LANG: Lang = "fr";

type Leaf = Record<Lang, string>;
type Node = Leaf | { [key: string]: Node };

function isLeaf(node: Node): node is Leaf {
  return typeof (node as Leaf).fr === "string";
}

export const DICT = {
  picker: {
    season: { fr: "Saison", en: "Season", de: "Jahreszeit", zh: "季节" },
    language: { fr: "Langue", en: "Language", de: "Sprache", zh: "语言" },
  },
  seasons: {
    spring: { fr: "Printemps", en: "Spring", de: "Frühling", zh: "春天" },
    summer: { fr: "Été", en: "Summer", de: "Sommer", zh: "夏天" },
    autumn: { fr: "Automne", en: "Autumn", de: "Herbst", zh: "秋天" },
    winter: { fr: "Hiver", en: "Winter", de: "Winter", zh: "冬天" },
  },
  nav: {
    aria: { fr: "Sections", en: "Sections", de: "Abschnitte", zh: "导航" },
    home: { fr: "Accueil", en: "Home", de: "Start", zh: "主页" },
    stack: { fr: "Stack", en: "Stack", de: "Stack", zh: "技术" },
    experience: { fr: "Expérience", en: "Experience", de: "Erfahrung", zh: "经历" },
    project: { fr: "Projet", en: "Project", de: "Projekt", zh: "项目" },
    contact: { fr: "Contact", en: "Contact", de: "Kontakt", zh: "联系" },
  },
  header: {
    availability: {
      fr: "Disponible — stage / alternance",
      en: "Available — internship / work-study",
      de: "Verfügbar — Praktikum / Duales Studium",
      zh: "可实习 / 合作",
    },
  },
  hero: {
    greeting: { fr: "Bonjour, je suis", en: "Hi, I am", de: "Hallo, ich bin", zh: "你好，我是" },
    roleLine: {
      fr: "Étudiant en Commerce International.",
      en: "International Trade Student.",
      de: "Student für Internationalen Handel.",
      zh: "国际贸易专业学生。",
    },
    tagline: {
      fr: "Construire des ponts entre la France, l'Europe et la Chine.",
      en: "Building bridges between France, Europe and China.",
      de: "Brücken zwischen Frankreich, Europa und China bauen.",
      zh: "连接法国、欧洲与中国。",
    },
    cv: { fr: "Télécharger CV", en: "Download CV", de: "Lebenslauf", zh: "下载简历" },
    hire: { fr: "Me contacter", en: "Contact me", de: "Kontakt", zh: "联系我" },
    scroll: { fr: "Défiler pour explorer", en: "Scroll to explore", de: "Scrollen", zh: "滚动探索" },
    keysHint: {
      fr: "· survolez les touches",
      en: "· hover over the keys",
      de: "· über Tasten fahren",
      zh: "· 悬停查看技能",
    },
  },
  stack: {
    title: { fr: "Tech Stack", en: "Tech Stack", de: "Tech Stack", zh: "Tech Stack" },
    hint: {
      fr: "(conseil : survolez une touche)",
      en: "(hint: hover over a key)",
      de: "(Tipp: über eine Taste fahren)",
      zh: "（提示：悬停查看）",
    },
  },
  experience: {
    title: { fr: "Expérience", en: "Experience", de: "Erfahrung", zh: "经历" },
    subtitle: {
      fr: "Mon parcours professionnel.",
      en: "My professional journey.",
      de: "Mein beruflicher Werdegang.",
      zh: "我的职业经历。",
    },
  },
  projects: {
    kicker: { fr: "projet", en: "project", de: "Projekt", zh: "项目" },
    viewMore: { fr: "Voir plus", en: "View more", de: "Mehr sehen", zh: "查看详情" },
    openSite: { fr: "Ouvrir le site", en: "Visit site", de: "Website öffnen", zh: "访问网站" },
    viewCode: { fr: "Voir le code", en: "View code", de: "Code ansehen", zh: "查看代码" },
    close: { fr: "Fermer", en: "Close", de: "Schließen", zh: "关闭" },
    stackLabel: { fr: "Stack", en: "Stack", de: "Stack", zh: "技术栈" },
    overview: { fr: "Résumé", en: "Overview", de: "Überblick", zh: "概览" },
  },
  contact: {
    kicker: { fr: "contact", en: "contact", de: "kontakt", zh: "联系" },
    title: { fr: "On se parle ?", en: "Let's talk?", de: "Reden wir?", zh: "我们聊聊？" },
    body: {
      fr: "Une opportunité, une collaboration, une question ? Le clavier est prêt.",
      en: "An opportunity, a collaboration, a question? The keyboard is ready.",
      de: "Eine Gelegenheit, eine Zusammenarbeit, eine Frage? Die Tastatur ist bereit.",
      zh: "有合作机会、问题或想法？键盘已准备就绪。",
    },
    copyEmail: { fr: "Copier l'email", en: "Copy email", de: "E-Mail kopieren", zh: "复制邮箱" },
    openMail: { fr: "Ouvrir le mail", en: "Open mailto", de: "E-Mail öffnen", zh: "发送邮件" },
    github: { fr: "GitHub", en: "GitHub", de: "GitHub", zh: "GitHub" },
    linkedin: { fr: "LinkedIn", en: "LinkedIn", de: "LinkedIn", zh: "领英" },
    emailToast: { fr: "Email copié", en: "Email copied", de: "E-Mail kopiert", zh: "邮箱已复制" },
    footer: {
      fr: "© 2026 Antoine Pornin. Tous droits réservés.",
      en: "© 2026 Antoine Pornin. All rights reserved.",
      de: "© 2026 Antoine Pornin. Alle Rechte vorbehalten.",
      zh: "© 2026 Antoine Pornin. 保留所有权利。",
    },
  },
  keyboard: {
    taglines: {
      javascript: {
        fr: "Le langage qui fait tourner le web — et ce portfolio.",
        en: "The language that runs the web — and this portfolio.",
        de: "Die Sprache, die das Web antreibt — und dieses Portfolio.",
        zh: "驱动网络的语言——也驱动这个作品集。",
      },
      typescript: {
        fr: "Comme JavaScript, mais avec une ceinture de sécurité.",
        en: "Like JavaScript, but with a seatbelt.",
        de: "Wie JavaScript, aber mit Sicherheitsgurt.",
        zh: "像JavaScript，但更安全。",
      },
      html5: {
        fr: "La structure de chaque page web.",
        en: "The skeleton of every web page.",
        de: "Das Gerüst jeder Webseite.",
        zh: "每个网页的骨架。",
      },
      css: {
        fr: "Ce qui sépare le fonctionnel du beau.",
        en: "What separates functional from beautiful.",
        de: "Was Funktionalität von Schönheit trennt.",
        zh: "区分功能与美观的关键。",
      },
      tailwindcss: {
        fr: "Design directement dans le HTML.",
        en: "Design right inside the HTML.",
        de: "Design direkt im HTML.",
        zh: "在HTML中直接设计。",
      },
      python: {
        fr: "Se lit comme du français, s'automatise comme un robot.",
        en: "Reads like English, automates like a robot.",
        de: "Liest sich wie Deutsch, automatisiert wie ein Roboter.",
        zh: "读起来像英语，自动化像机器人。",
      },
      react: {
        fr: "Composants, composants, composants.",
        en: "Components, components, components.",
        de: "Komponenten, Komponenten, Komponenten.",
        zh: "组件，组件，组件。",
      },
      nextdotjs: {
        fr: "React adulte : routing, SSR, déploiement.",
        en: "React all grown up: routing, SSR, deployment.",
        de: "React erwachsen: Routing, SSR, Deployment.",
        zh: "成熟的React：路由、SSR、部署。",
      },
      vuedotjs: {
        fr: "Le frontend le plus accessible.",
        en: "The most approachable frontend.",
        de: "Das zugänglichste Frontend.",
        zh: "最易上手的前端框架。",
      },
      nodedotjs: {
        fr: "JavaScript côté serveur.",
        en: "JavaScript on the server.",
        de: "JavaScript auf dem Server.",
        zh: "服务端的JavaScript。",
      },
      php: {
        fr: "Fait tourner plus de sites qu'on ne croit.",
        en: "Runs more of the web than you think.",
        de: "Betreibt mehr Websites als man denkt.",
        zh: "运行着比你想象更多的网站。",
      },
      odoo: {
        fr: "ERP open-source pour les entreprises.",
        en: "Open-source ERP for businesses.",
        de: "Open-Source ERP für Unternehmen.",
        zh: "企业开源ERP系统。",
      },
      postgresql: {
        fr: "La base de données fiable qui ne fait jamais défaut.",
        en: "The reliable database that never lets you down.",
        de: "Die zuverlässige Datenbank, die niemals im Stich lässt.",
        zh: "从不让人失望的可靠数据库。",
      },
      docker: {
        fr: "Pareil sur ma machine, pareil en prod.",
        en: "Same on my machine, same in production.",
        de: "Gleich auf meinem Rechner, gleich in Produktion.",
        zh: "本地和生产环境完全一致。",
      },
      git: {
        fr: "La machine à voyager dans le temps du code.",
        en: "The time machine for your code.",
        de: "Die Zeitmaschine für deinen Code.",
        zh: "代码的时光机。",
      },
    },
  },
} as const satisfies Record<string, Node>;

// Resolve a dotted path in the dictionary for a given language.
export function translate(path: string, lang: Lang): string {
  const parts = path.split(".");
  let ref: Node = DICT as unknown as Node;
  for (const p of parts) {
    if (isLeaf(ref)) return path;
    ref = (ref as { [key: string]: Node })[p];
    if (ref === undefined) return path;
  }
  if (isLeaf(ref)) return ref[lang] ?? ref.fr ?? path;
  return path;
}
