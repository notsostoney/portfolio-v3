"use client";

import { useState } from "react";
import FrozenKeyboard from "@/components/FrozenKeyboard";
import SmoothScroll from "@/components/smooth-scroll";
import Reveal from "@/components/Reveal";
import SectionNav from "@/components/SectionNav";
import CopyEmail from "@/components/CopyEmail";
import SeasonPicker from "@/components/SeasonPicker";
import LanguagePicker from "@/components/LanguagePicker";
import ProjectModal, {
  type ProjectDetail,
} from "@/components/ProjectModal";
import { useLanguage } from "@/components/LanguageProvider";
import type { Lang } from "@/lib/i18n";

const EMAIL = "antoine.pornin.fr@gmail.com";

type Localised = { fr: string; en: string; de: string; zh: string };

type Project = ProjectDetail & {
  align: "left" | "right";
  section: "project1" | "project2" | "project3";
};

const projects: Project[] = [
  {
    num: "01",
    name: {
      fr: "Portfolio Interactif 3D",
      en: "3D Interactive Portfolio",
      de: "Interaktives 3D-Portfolio",
      zh: "3D 交互式作品集",
    },
    stack: [
      "Next.js 16",
      "React Three Fiber",
      "Three.js",
      "TypeScript",
      "Tailwind CSS",
      "GitHub Pages",
    ],
    desc: {
      fr: "Ce portfolio — construit avec Next.js 16 et React Three Fiber. Clavier 3D interactif, thèmes saisonniers, support multilingue FR/EN/DE/ZH.",
      en: "This very portfolio — built with Next.js 16 and React Three Fiber. Interactive 3D keyboard, seasonal themes, multilingual FR/EN/DE/ZH support.",
      de: "Dieses Portfolio — mit Next.js 16 und React Three Fiber gebaut. Interaktive 3D-Tastatur, Saisonthemen, mehrsprachig FR/EN/DE/ZH.",
      zh: "这个作品集本身——使用 Next.js 16 和 React Three Fiber 构建，3D 交互键盘，季节主题，支持法/英/德/中。",
    },
    details: {
      fr: "Portfolio personnel basé sur le projet open-source de Txema Albero (Txemalon/3d-portfolio), entièrement reconfiguré pour Antoine Pornin. Remplace le système ES/EN par FR/EN/DE/ZH. Déployé sur GitHub Pages via export statique Next.js avec basePath /portfolio-v3. Clavier 3D généré procéduralement avec React Three Fiber, animations physiques, sons et taglines par touche.",
      en: "Personal portfolio based on Txema Albero's open-source project (Txemalon/3d-portfolio), fully reconfigured for Antoine Pornin. Replaced ES/EN i18n with FR/EN/DE/ZH. Deployed on GitHub Pages via Next.js static export with basePath /portfolio-v3. 3D keyboard procedurally generated with React Three Fiber, physics animations, sounds and per-key taglines.",
      de: "Persönliches Portfolio basierend auf Txema Alberos Open-Source-Projekt, vollständig für Antoine Pornin angepasst. ES/EN-i18n durch FR/EN/DE/ZH ersetzt. Deployment auf GitHub Pages via Next.js Static Export. 3D-Tastatur mit React Three Fiber, Physikanimationen und Ton.",
      zh: "基于 Txema Albero 开源项目改造的个人作品集，将 ES/EN 替换为 FR/EN/DE/ZH 四语言支持，通过 Next.js 静态导出部署到 GitHub Pages。",
    },
    url: "https://notsostoney.github.io/portfolio-v3/",
    github: "https://github.com/notsostoney/portfolio-v3",
    media: [],
    highlights: ["nextdotjs", "react", "typescript", "tailwindcss"],
    align: "left",
    section: "project1",
  },
  {
    num: "02",
    name: {
      fr: "Portfolio V2 — Scène 3D Interactive",
      en: "Portfolio V2 — Interactive 3D Scene",
      de: "Portfolio V2 — Interaktive 3D-Szene",
      zh: "Portfolio V2 — 交互式 3D 场景",
    },
    stack: [
      "Three.js",
      "JavaScript",
      "Webpack",
      "CSS",
      "GitHub Pages",
    ],
    desc: {
      fr: "Portfolio immersif avec une scène 3D construite en Three.js — environnement interactif rendu dans le navigateur.",
      en: "Immersive portfolio with a 3D scene built in Three.js — interactive environment rendered directly in the browser.",
      de: "Immersives Portfolio mit einer 3D-Szene in Three.js — interaktive Umgebung direkt im Browser.",
      zh: "基于 Three.js 构建的沉浸式 3D 场景作品集，直接在浏览器中渲染。",
    },
    details: {
      fr: "Deuxième version du portfolio personnel, construite avec Three.js et Webpack. Scène 3D interactive rendue côté client, assets optimisés via Webpack 5, déploiement sur GitHub Pages. Ce site sert de shell principal qui intègre la version OS (portfolio-inner-site) via iframe CSS 3D.",
      en: "Second version of the personal portfolio, built with Three.js and Webpack. Client-side interactive 3D scene, assets optimised with Webpack 5, deployed on GitHub Pages. This site acts as the main shell embedding the OS version (portfolio-inner-site) via a CSS 3D iframe.",
      de: "Zweite Version des persönlichen Portfolios, mit Three.js und Webpack erstellt. Clientseitige interaktive 3D-Szene, Webpack 5-Optimierung, GitHub Pages Deployment. Diese Site ist die Hauptshell, die die OS-Version per CSS-3D-Iframe einbettet.",
      zh: "使用 Three.js 和 Webpack 构建的第二版个人作品集。客户端交互式 3D 场景，Webpack 5 资产优化，部署于 GitHub Pages。作为主壳，通过 CSS 3D iframe 嵌入 OS 版本。",
    },
    url: "https://notsostoney.github.io/portfolio/",
    github: "https://github.com/notsostoney/portfolio",
    media: [],
    highlights: ["javascript", "css", "html5"],
    align: "right",
    section: "project2",
  },
  {
    num: "03",
    name: {
      fr: "Yiwu Sourcing — Intermédiation B2B",
      en: "Yiwu Sourcing — B2B Intermediation",
      de: "Yiwu Sourcing — B2B-Vermittlung",
      zh: "义乌采购 — B2B 贸易中介",
    },
    stack: [
      "Commerce International",
      "Sourcing",
      "Négociation",
      "Chine / France",
      "WeChat / Alibaba",
    ],
    desc: {
      fr: "Activité d'intermédiation commerciale entre la France et Yiwu, Chine — identification et qualification de fournisseurs pour entreprises françaises.",
      en: "Commercial intermediation between France and Yiwu, China — identifying and qualifying suppliers for French companies.",
      de: "Handelsvermittlung zwischen Frankreich und Yiwu, China — Identifizierung und Qualifizierung von Lieferanten für französische Unternehmen.",
      zh: "法中商贸中介活动——为法国企业识别和筛选义乌供应商，降低合作风险。",
    },
    details: {
      fr: "Activité indépendante développée en parallèle des études. Yiwu est la capitale mondiale du commerce de gros. Mission : réduire l'incertitude des entreprises françaises avant tout engagement avec un partenaire chinois. Identification de fournisseurs fiables, négociation des conditions, contrôle qualité de premier niveau, coordination logistique. Clients : PME françaises cherchant à diversifier leurs approvisionnements.",
      en: "Independent activity developed alongside studies. Yiwu is the world's wholesale capital. Mission: reduce uncertainty for French companies before engaging with a Chinese partner. Identifying reliable suppliers, negotiating terms, first-level quality control, logistics coordination. Clients: French SMEs looking to diversify their supply chains.",
      de: "Selbstständige Tätigkeit neben dem Studium. Yiwu ist die weltweite Großhandelshauptstadt. Mission: Unsicherheit für französische Unternehmen vor der Zusammenarbeit mit chinesischen Partnern reduzieren. Lieferantenidentifikation, Verhandlung, Qualitätskontrolle, Logistikkoordination.",
      zh: "在校期间独立开展的商贸活动。义乌是全球最大的小商品批发市场。为法国中小企业寻找可靠供应商，负责谈判、初级质检和物流协调。",
    },
    media: [],
    highlights: [],
    align: "left",
    section: "project3",
  },
];

const experiences: Array<{
  role: Localised;
  company: string;
  period: Localised;
  location: Localised;
  summary: Localised;
  bullets: Localised[];
  stack: string[];
}> = [
  {
    role: {
      fr: "Stagiaire Commercial",
      en: "Sales Intern",
      de: "Praktikant Vertrieb",
      zh: "商务实习生",
    },
    company: "Golden Sun Health Technology Group",
    period: { fr: "2025 — 2026", en: "2025 — 2026", de: "2025 — 2026", zh: "2025 — 2026" },
    location: { fr: "Jinhua, Chine", en: "Jinhua, China", de: "Jinhua, China", zh: "中国金华" },
    summary: {
      fr: "Stage de longue durée au sein d'un groupe spécialisé dans les technologies de santé. Développement commercial sur les marchés francophones, suivi clients et support à l'export.",
      en: "Long-term internship in a health technology group. Business development on French-speaking markets, client follow-up and export support.",
      de: "Langzeitpraktikum in einem Gesundheitstechnologieunternehmen. Geschäftsentwicklung auf frankophonen Märkten, Kundenbetreuung und Exportunterstützung.",
      zh: "在健康科技集团的长期实习，负责法语市场开发、客户跟进和出口支持。",
    },
    bullets: [
      {
        fr: "Prospection et suivi de clients francophones à l'international.",
        en: "Prospecting and managing French-speaking international clients.",
        de: "Akquise und Betreuung frankophoner internationaler Kunden.",
        zh: "开发和跟进法语市场国际客户。",
      },
      {
        fr: "Rédaction de supports commerciaux et de communication en français.",
        en: "Drafting commercial and communication materials in French.",
        de: "Erstellung von Vertriebs- und Kommunikationsmaterialien auf Französisch.",
        zh: "编写法语商业和营销材料。",
      },
      {
        fr: "Coordination avec les équipes production et logistique pour l'export.",
        en: "Coordination with production and logistics teams for export.",
        de: "Koordination mit Produktions- und Logistikteams für den Export.",
        zh: "与生产和物流团队协调出口事务。",
      },
      {
        fr: "Immersion totale en environnement professionnel chinois.",
        en: "Full immersion in a Chinese professional environment.",
        de: "Vollständige Immersion im chinesischen Berufsumfeld.",
        zh: "完全融入中国职场环境。",
      },
    ],
    stack: ["Commerce international", "Mandarin", "Français", "Export", "B2B"],
  },
  {
    role: {
      fr: "Intermédiaire Commercial Indépendant",
      en: "Independent Commercial Intermediary",
      de: "Selbstständiger Handelsvermittler",
      zh: "独立商贸中介",
    },
    company: "Yiwu Sourcing",
    period: {
      fr: "2024 — Présent",
      en: "2024 — Present",
      de: "2024 — Heute",
      zh: "2024 — 至今",
    },
    location: { fr: "France / Chine", en: "France / China", de: "Frankreich / China", zh: "法国 / 中国" },
    summary: {
      fr: "Activité d'intermédiation B2B entre entreprises françaises et fournisseurs chinois à Yiwu — identification, qualification et coordination.",
      en: "B2B intermediation between French companies and Chinese suppliers in Yiwu — identification, qualification and coordination.",
      de: "B2B-Vermittlung zwischen französischen Unternehmen und chinesischen Lieferanten in Yiwu.",
      zh: "法国企业与义乌中国供应商之间的 B2B 中介服务——识别、筛选与协调。",
    },
    bullets: [
      {
        fr: "Identification de fournisseurs fiables sur les marchés de Yiwu.",
        en: "Identifying reliable suppliers in Yiwu markets.",
        de: "Identifizierung zuverlässiger Lieferanten auf den Yiwu-Märkten.",
        zh: "在义乌市场识别可靠供应商。",
      },
      {
        fr: "Négociation des conditions commerciales et logistiques.",
        en: "Negotiating commercial and logistics terms.",
        de: "Verhandlung von Handels- und Logistikbedingungen.",
        zh: "商务和物流条款谈判。",
      },
      {
        fr: "Réduction du risque fournisseur pour les PME françaises.",
        en: "Reducing supplier risk for French SMEs.",
        de: "Reduzierung des Lieferantenrisikos für französische KMU.",
        zh: "降低法国中小企业的供应商风险。",
      },
    ],
    stack: ["Sourcing", "Négociation", "Alibaba", "WeChat", "Logistique"],
  },
  {
    role: {
      fr: "Étudiant — BUT Techniques de Commercialisation",
      en: "Student — International Trade (BUT TC)",
      de: "Student — Internationaler Handel (BUT TC)",
      zh: "学生 — 国际贸易 (BUT TC)",
    },
    company: "IUT de l'Indre",
    period: { fr: "2023 — 2026", en: "2023 — 2026", de: "2023 — 2026", zh: "2023 — 2026" },
    location: { fr: "Issoudun, France", en: "Issoudun, France", de: "Issoudun, Frankreich", zh: "法国伊苏丹" },
    summary: {
      fr: "BUT TC option Commerce International dans un environnement économique dynamique (Safran, Louis Vuitton). Formation solide en marketing, négociation, analyse de marchés et gestion de projet.",
      en: "BUT TC in International Trade in a dynamic economic environment (Safran, Louis Vuitton nearby). Solid training in marketing, negotiation, market analysis and project management.",
      de: "BUT TC Internationaler Handel in einem dynamischen wirtschaftlichen Umfeld (Safran, Louis Vuitton). Solide Ausbildung in Marketing, Verhandlung, Marktanalyse und Projektmanagement.",
      zh: "在动态经济环境中（附近有 Safran、Louis Vuitton）攻读国际贸易 BUT TC，扎实掌握营销、谈判、市场分析和项目管理。",
    },
    bullets: [
      {
        fr: "Marketing international, analyse de marchés, négociation.",
        en: "International marketing, market analysis, negotiation.",
        de: "Internationales Marketing, Marktanalyse, Verhandlung.",
        zh: "国际营销、市场分析、商务谈判。",
      },
      {
        fr: "Projets tuteurés en partenariat avec des entreprises locales.",
        en: "Tutored projects in partnership with local companies.",
        de: "Betreute Projekte in Zusammenarbeit mit lokalen Unternehmen.",
        zh: "与当地企业合作的导师指导项目。",
      },
      {
        fr: "Stage long en entreprise à l'international (Chine).",
        en: "Long-term international company internship (China).",
        de: "Langzeitpraktikum im internationalen Unternehmen (China).",
        zh: "海外长期企业实习（中国）。",
      },
    ],
    stack: ["Marketing", "Commerce International", "Gestion de projet", "Anglais", "Allemand"],
  },
];

function pick<T>(loc: { fr: T; en: T; de: T; zh: T }, lang: Lang): T {
  return loc[lang];
}

function HeroWord({
  text,
  delay,
  className = "",
}: {
  text: string;
  delay: number;
  className?: string;
}) {
  return (
    <span className={`hero-word ${className}`}>
      <span style={{ animationDelay: `${delay}ms` }}>{text}</span>
    </span>
  );
}

export default function Home() {
  const { t, lang } = useLanguage();
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  return (
    <SmoothScroll>
      <div className="relative">
        {/* Persistent 3D scene */}
        <div className="fixed inset-0 z-0">
          <FrozenKeyboard />
        </div>

        {/* Header */}
        <header className="fixed top-0 inset-x-0 z-50 px-6 sm:px-10 md:px-14 py-5 flex items-center justify-between pointer-events-none">
          <div className="flex items-center gap-3 pointer-events-auto">
            <span
              data-cursor="hover"
              className="text-sm font-semibold tracking-tight text-ice-100"
            >
              Antoine Pornin
            </span>
            <span className="status-pill hidden sm:inline-flex">
              {t("header.availability")}
            </span>
          </div>
          <div className="flex items-center gap-2 pointer-events-auto">
            <SeasonPicker />
            <a
              href="https://github.com/notsostoney/portfolio-v3"
              target="_blank"
              rel="noopener noreferrer"
              data-cursor="hover"
              className="frost-btn !py-1.5 !px-3 !text-xs"
            >
              <svg viewBox="0 0 16 16" width="14" height="14" fill="currentColor" aria-hidden>
                <path d="M8 0C3.58 0 0 3.58 0 8a8 8 0 005.47 7.59c.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z" />
              </svg>
              <span>GitHub</span>
            </a>
            <LanguagePicker />
          </div>
        </header>

        <SectionNav />

        <main className="relative z-10 pointer-events-none">
          {/* Hero */}
          <section
            data-kb-section="hero"
            className="min-h-screen flex flex-col justify-center p-6 sm:p-10 md:p-14"
          >
            <div className="mt-20">
              <p
                className="text-[11px] uppercase tracking-[0.3em] text-ice-300 mb-5 fade-in-up"
                style={{ ["--d" as string]: "0ms" }}
              >
                {t("hero.greeting")}
              </p>
              <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-[8.5rem] font-bold tracking-[-0.03em] text-ice-50 leading-[0.92] whitespace-nowrap">
                <HeroWord text="Antoine" delay={120} />
                <br />
                <HeroWord text="Pornin" delay={260} className="text-ice-400" />
              </h1>
              <p
                className="mt-8 text-base sm:text-lg md:text-xl text-ice-200 max-w-xl leading-relaxed fade-in-up"
                style={{ ["--d" as string]: "520ms" }}
              >
                {t("hero.roleLine")}
                <br />
                {t("hero.tagline")}
              </p>

              {/* CTAs */}
              <div
                className="mt-10 flex flex-wrap items-center gap-3 pointer-events-auto fade-in-up"
                style={{ ["--d" as string]: "700ms" }}
              >
                <a
                  href={
                    lang === "en"
                      ? "/portfolio-v3/cv/Antoine_Pornin_CV_EN.pdf"
                      : lang === "de"
                      ? "/portfolio-v3/cv/Antoine_Pornin_CV_DE.pdf"
                      : lang === "zh"
                      ? "/portfolio-v3/cv/Antoine_Pornin_CV_ZH.pdf"
                      : "/portfolio-v3/cv/Antoine_Pornin_CV_FR.pdf"
                  }
                  target="_blank"
                  rel="noopener noreferrer"
                  data-cursor="hover"
                  data-magnetic
                  className="frost-btn frost-btn--primary"
                >
                  <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
                    <path d="M14 3H7a2 2 0 00-2 2v14a2 2 0 002 2h10a2 2 0 002-2V8z" />
                    <path d="M14 3v5h5" />
                  </svg>
                  {t("hero.cv")}
                </a>
                <button
                  type="button"
                  data-cursor="hover"
                  data-magnetic
                  className="frost-btn"
                  onClick={() =>
                    document
                      .querySelector<HTMLElement>('[data-kb-section="contact"]')
                      ?.scrollIntoView({ behavior: "smooth", block: "start" })
                  }
                >
                  {t("hero.hire")}
                </button>
                <a
                  href="https://github.com/notsostoney"
                  target="_blank"
                  rel="noopener noreferrer"
                  data-cursor="hover"
                  data-magnetic
                  className="frost-icon"
                  aria-label="GitHub"
                >
                  <svg viewBox="0 0 16 16" width="16" height="16" fill="currentColor" aria-hidden>
                    <path d="M8 0C3.58 0 0 3.58 0 8a8 8 0 005.47 7.59c.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z" />
                  </svg>
                </a>
                <a
                  href="https://www.linkedin.com/in/antoine-pornin/"
                  target="_blank"
                  rel="noopener noreferrer"
                  data-cursor="hover"
                  data-magnetic
                  className="frost-icon"
                  aria-label="LinkedIn"
                >
                  <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" aria-hidden>
                    <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.22 8h4.56v14H.22V8zm7.4 0h4.37v1.92h.06c.61-1.15 2.1-2.36 4.32-2.36 4.62 0 5.47 3.04 5.47 6.99V22h-4.56v-6.59c0-1.57-.03-3.6-2.19-3.6-2.19 0-2.53 1.71-2.53 3.48V22H7.62V8z" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Scroll indicator */}
            <div
              className="mt-auto flex items-center gap-3 fade-in-up"
              style={{ ["--d" as string]: "900ms" }}
            >
              <span className="scroll-indicator">
                <span>{t("hero.scroll")}</span>
                <span className="scroll-indicator__rail" />
              </span>
              <span className="text-[11px] uppercase tracking-[0.25em] text-ice-400 hidden sm:inline">
                {t("hero.keysHint")}
              </span>
            </div>
          </section>

          {/* Stack */}
          <section
            data-kb-section="stack"
            className="relative min-h-[200vh] p-6 sm:p-10 md:p-14"
          >
            <div className="relative h-[150vh]">
              <div className="sticky top-20 sm:top-20 text-center">
                <Reveal>
                  <h2 className="text-5xl sm:text-7xl md:text-8xl font-bold tracking-[-0.03em] text-ice-50 leading-[0.95]">
                    {t("stack.title")}
                  </h2>
                </Reveal>
                <Reveal delay={120}>
                  <p className="mt-3 text-sm sm:text-base text-ice-400">
                    {t("stack.hint")}
                  </p>
                </Reveal>
              </div>
            </div>
          </section>

          {/* Experience */}
          <section
            data-kb-section="experience"
            className="relative p-6 sm:p-10 md:p-14 pb-24"
          >
            <div className="sticky top-24 sm:top-28 text-center mb-12 sm:mb-16 z-0">
              <Reveal>
                <h2 className="text-5xl sm:text-7xl md:text-8xl font-bold tracking-[-0.03em] text-ice-50 leading-[0.95]">
                  {t("experience.title")}
                </h2>
              </Reveal>
              <Reveal delay={120}>
                <p className="mt-3 text-sm sm:text-base text-ice-300">
                  {t("experience.subtitle")}
                </p>
              </Reveal>
            </div>

            <div className="relative z-10 max-w-3xl mx-auto space-y-6">
              {experiences.map((exp, idx) => (
                <Reveal
                  key={`${exp.company}-${idx}`}
                  delay={idx * 120}
                  as="article"
                  className="relative rounded-2xl bg-ink-1/75 backdrop-blur-md border border-ink-3 p-6 sm:p-8 md:p-10 pointer-events-auto shadow-[0_8px_40px_-20px_rgba(0,0,0,0.6)]"
                >
                  <header className="flex flex-wrap items-start justify-between gap-3 mb-5">
                    <div>
                      <h3 className="text-2xl sm:text-3xl font-bold text-ice-50 tracking-tight">
                        {pick(exp.role, lang)}
                      </h3>
                      <p className="text-ice-400 font-medium mt-1">
                        {exp.company}
                        <span className="text-ice-500/80 font-normal">
                          {" · "}
                          {pick(exp.location, lang)}
                        </span>
                      </p>
                    </div>
                    <span className="font-mono text-xs text-ice-100 px-3 py-1 rounded-full border border-ice-700/70 bg-ink-2/60 whitespace-nowrap">
                      {pick(exp.period, lang)}
                    </span>
                  </header>

                  <p className="text-ice-200 leading-relaxed mb-5">
                    {pick(exp.summary, lang)}
                  </p>

                  <ul className="space-y-2.5 mb-6">
                    {exp.bullets.map((b, i) => (
                      <li key={i} className="flex gap-3 text-ice-100 leading-relaxed">
                        <span className="mt-[0.65em] flex-none w-1.5 h-1.5 rounded-full bg-ice-400" />
                        <span>{pick(b, lang)}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-1.5">
                    {exp.stack.map((s) => (
                      <span key={s} data-cursor="hover" className="frost-chip">
                        {s}
                      </span>
                    ))}
                  </div>
                </Reveal>
              ))}
            </div>
          </section>

          {/* Projects */}
          {projects.map((p) => (
            <section
              key={p.num}
              data-kb-section={p.section}
              data-kb-highlights={(p.highlights ?? []).join(",")}
              className="relative min-h-screen flex items-center p-6 sm:p-10 md:p-14 overflow-hidden"
            >
              <span
                aria-hidden
                className={`watermark top-1/2 -translate-y-1/2 ${
                  p.align === "left" ? "right-[-2vw]" : "left-[-2vw]"
                }`}
              >
                {p.num}
              </span>

              <div
                className={
                  p.align === "left"
                    ? "max-w-xl relative"
                    : "max-w-xl ml-auto text-right relative md:mr-16 lg:mr-24"
                }
              >
                <Reveal>
                  <p className="font-mono text-sm text-ice-400 mb-3">
                    {p.num} · {t("projects.kicker")}
                  </p>
                </Reveal>
                <Reveal delay={80}>
                  <h2 className="text-3xl sm:text-5xl font-semibold tracking-tight text-ice-50 leading-[1.05] mb-4">
                    {pick(p.name, lang)}
                  </h2>
                </Reveal>
                {p.badge ? (
                  <Reveal delay={140}>
                    <span className="inline-block text-[10px] uppercase tracking-widest text-ice-300 border border-ice-700 rounded-full px-2 py-0.5 mb-4">
                      {pick(p.badge, lang)}
                    </span>
                  </Reveal>
                ) : null}
                <Reveal delay={180}>
                  <p className="text-base sm:text-lg text-ice-200 leading-relaxed mb-6">
                    {pick(p.desc, lang)}
                  </p>
                </Reveal>
                <Reveal delay={260}>
                  <div
                    className={
                      p.align === "right"
                        ? "flex flex-wrap gap-1.5 justify-end pointer-events-auto mb-5"
                        : "flex flex-wrap gap-1.5 pointer-events-auto mb-5"
                    }
                  >
                    {p.stack.map((s) => (
                      <span key={s} data-cursor="hover" className="frost-chip">
                        {s}
                      </span>
                    ))}
                  </div>
                </Reveal>
                <Reveal delay={320}>
                  <div
                    className={
                      p.align === "right"
                        ? "flex justify-end pointer-events-auto"
                        : "flex pointer-events-auto"
                    }
                  >
                    <button
                      type="button"
                      onClick={() => setActiveProject(p)}
                      data-cursor="hover"
                      data-magnetic
                      className="frost-btn"
                    >
                      {t("projects.viewMore")}
                      <svg
                        viewBox="0 0 24 24"
                        width="14"
                        height="14"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        aria-hidden
                      >
                        <path d="M5 12h14M13 5l7 7-7 7" />
                      </svg>
                    </button>
                  </div>
                </Reveal>
              </div>
            </section>
          ))}

          {/* Contact */}
          <section
            data-kb-section="contact"
            className="relative min-h-screen flex flex-col justify-center p-6 sm:p-10 md:p-14 overflow-hidden"
          >
            <div className="max-w-xl relative">
              <Reveal>
                <p className="font-mono text-sm text-ice-400 mb-3">
                  {t("contact.kicker")}
                </p>
              </Reveal>
              <Reveal delay={80}>
                <h2 className="text-4xl sm:text-6xl font-semibold tracking-tight text-ice-50 mb-6">
                  {t("contact.title")}
                </h2>
              </Reveal>
              <Reveal delay={160}>
                <p className="text-ice-200 mb-10">{t("contact.body")}</p>
              </Reveal>
              <Reveal delay={240}>
                <div className="flex flex-wrap gap-3 pointer-events-auto">
                  <CopyEmail email={EMAIL} className="frost-btn frost-btn--primary">
                    <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
                      <rect x="3" y="5" width="18" height="14" rx="2" />
                      <path d="M3 7l9 6 9-6" />
                    </svg>
                    {t("contact.copyEmail")}
                  </CopyEmail>
                  <a
                    href={`mailto:${EMAIL}`}
                    data-cursor="hover"
                    className="frost-btn"
                  >
                    {t("contact.openMail")}
                  </a>
                  <a
                    href="https://github.com/notsostoney"
                    target="_blank"
                    rel="noopener noreferrer"
                    data-cursor="hover"
                    className="frost-btn"
                  >
                    {t("contact.github")}
                  </a>
                  <a
                    href="https://www.linkedin.com/in/antoine-pornin/"
                    target="_blank"
                    rel="noopener noreferrer"
                    data-cursor="hover"
                    className="frost-btn"
                  >
                    {t("contact.linkedin")}
                  </a>
                </div>
              </Reveal>
            </div>
            <Reveal delay={320}>
              <p className="mt-14 text-[11px] uppercase tracking-[0.25em] text-ice-400">
                {t("contact.footer")}
              </p>
            </Reveal>
          </section>
        </main>

        <ProjectModal
          project={activeProject}
          onClose={() => setActiveProject(null)}
        />
      </div>
    </SmoothScroll>
  );
}
