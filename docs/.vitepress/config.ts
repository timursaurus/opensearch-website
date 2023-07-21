import { defineConfig, } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "OpenSearch Project",
  outDir: 'dist',
  lang: "en-US",
  description: "OpenSearch Project Website",
  themeConfig: {
    logo: 'logo.svg',
    search: {
      provider: 'local',
    },
    nav: [
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
    ],

    sidebar: [
      {
        text: "Getting Started",
        items: [
          { text: 'Plugins', link: 'https://opensearch.org/docs/latest/install-and-configure/plugins/' },
          { text: 'Docker Image', link: 'https://hub.docker.com/r/opensearchproject/opensearch' },
          { text: 'Downloads', link: '/downloads' },
        ]
      },
      {
        text: "Platform",
        items: [
          { text: "Vector Database", link: "platform/search/vector-database" },
          { text: "Live Demo", link: "https://playground.opensearch.org" },
          { text: "Performance Benchmarks", link: "/benchmarks" },
        ],
      },
    ],
    footer: {
      copyright: `© OpenSearch contributors, ${new Date().getFullYear()}`,
    },

    socialLinks: [
      { icon: "github", link: "https://github.com/opensearch-project" },
      { icon: 'twitter', link: 'https://twitter.com/OpenSearchProj' },
      { icon: 'youtube', link: 'https://www.youtube.com/c/OpenSearchProject' },
      { icon: 'facebook', link: 'https://www.facebook.com/OpenSearchProject/' },
      { icon: 'linkedin', link: 'https://www.linkedin.com/company/opensearch-project/' }
    ],
  },
});
