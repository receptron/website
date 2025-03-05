import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "GraphAI - Declarative AI Workflow Engine",
  description:
    "GraphAI is an asynchronous data flow execution engine, which allows developers to build agentic applications by describing agent workflows as declarative data flow graphs in YAML or JSON.",
  lastUpdated: true,
  ignoreDeadLinks: true,
  titleTemplate: ":title - GraphAI",

  themeConfig: {
    siteTitle: "GraphAI",
    logo: "/images/logo.png",
    nav: [
      { text: "Home", link: "/" },
      { text: "Guide", link: "/tutorial" },
    ],
    sidebar: [
      {
        text: "Tutorial",
        link: "/tutorial",
      },
    ],
    socialLinks: [{ icon: "github", link: "https://github.com/receptron/graphai" }],
    outline: {
      level: "deep",
    },
    editLink: {
      pattern: "https://github.com/receptron/website/edit/main/docs/:path",
      text: "Edit this page on GitHub",
    },
    search: {
      provider: "local",
      options: {
        detailedView: true,
      },
    },
    footer: {
      message: "Released under the MIT License.",
    },
  },

  locales: {
    root: {
      label: "English",
      lang: "en-US",
    },
    ja: {
      label: "Japanese",
      lang: "ja-JP",
      link: "/ja/",
      themeConfig: {
        nav: [
          { text: "ホーム", link: "/" },
          { text: "ガイド", link: "/ja/tutorial" },
        ],
        sidebar: [
          {
            text: "チュートリアル",
            link: "/ja/tutorial",
          },
        ],
      },
    },
  },
});
