import { defineConfig, DefaultTheme } from "vitepress";
import { generateFAQ } from "./genFaq";

// https://vitepress.dev/reference/site-config

const nav: DefaultTheme.NavItem[] = [
  {
    text: "OpenSearchCon",
    items: [
      {
        text: "Register for OpenSearchCon!",
        link: "https://opensearchcon2023.splashthat.com/",
      },
      { text: "OpenSearchCon 2023 CFP!", link: "/opensearchcon2023-cfp" },
    ],
  },
  { text: "Downloads", link: "/downloads" },
  {
    text: "About",
    items: [
      { text: "Opensearch", link: "/about" },
      { text: "Releases", link: "/releases" },
      { text: "FAQ", link: "/faq" },
    ],
  },
  {
    text: "Community",
    items: [
      { text: "Blog", link: "/blog" },
      { text: "Forum", link: "https://forum.opensearch.org/" },
      { text: "Slack", link: "/slack" },
      { text: "Events", link: "/events" },
      { text: "Partners", link: "/partners" },
    ],
  },
  { text: "Documentation", link: "/docs" },
  {
    text: "Platform",
    items: [
      { text: "Vector Database", link: "platform/search/vector-database" },
      { text: "Live Demo", link: "https://playground.opensearch.org" },
      { text: "Performance Benchmarks", link: "/benchmarks" },
    ],
  },
];
const title = "OpenSearch Project";
const description = "OpenSearch Project Website";

function generate() {
  generateFAQ();
}

export default defineConfig({
  title,
  outDir: "dist",
  lang: "en-US",
  description,
  head: [
    ["link", { rel: "icon", href: "/favicon.svg", type: "image/svg+xml" }],
    ["link", { rel: "icon", href: "/favicon.svg", type: "image/svg+xml" }],
    [
      "link",
      {
        rel: "alternate icon",
        href: "/favicon.ico",
        type: "image/png",
        sizes: "16x16",
      },
    ],
    ["meta", { property: "og:type", content: "website" }],
    ["meta", { name: "og:title", content: title }],
    ["meta", { name: "og:description", content: description }],
    ["meta", { name: "twitter:title", content: title }],
    ["meta", { name: "twitter:card", content: "summary_large_image" }],
  ],
  buildEnd: generate,
  themeConfig: {
    logo: "logo.svg",
    search: {
      provider: "local",
    },
    nav,
    editLink: {
      pattern:
        "https://github.com/timursaurus/opensearch-website/edit/main/docs/:path",
      text: "Suggest changes to this page",
    },
    sidebar: [
      {
        text: "Getting Started",
        items: [
          {
            text: "Plugins",
            link: "https://opensearch.org/docs/latest/install-and-configure/plugins/",
          },
          {
            text: "Docker Image",
            link: "https://hub.docker.com/r/opensearchproject/opensearch",
          },
          { text: "Downloads", link: "/downloads" },
        ],
      },
      {
        text: "Platform",
        items: [
          { text: "Vector Database", link: "platform/search/vector-database" },
          { text: "Live Demo", link: "https://playground.opensearch.org" },
          { text: "Performance Benchmarks", link: "/benchmarks" },
        ],
      },
      {
        text: "Get Involved",
        items: [
          { text: "Code of Conduct", link: "/code-of-conduct" },
          { text: "Forum", link: "https://forum.opensearch.org/" },
          { text: "Github", link: "https://github.com/opensearch-project" },
          { text: "Slack", link: "/slack" },
        ],
      },
    ],
    footer: {
      copyright: `© OpenSearch contributors, ${new Date().getFullYear()}`,
    },

    socialLinks: [
      { icon: "github", link: "https://github.com/opensearch-project" },
      { icon: "twitter", link: "https://twitter.com/OpenSearchProj" },
      { icon: "youtube", link: "https://www.youtube.com/c/OpenSearchProject" },
      { icon: "facebook", link: "https://www.facebook.com/OpenSearchProject/" },
      {
        icon: "linkedin",
        link: "https://www.linkedin.com/company/opensearch-project/",
      },
    ],
  },
});
