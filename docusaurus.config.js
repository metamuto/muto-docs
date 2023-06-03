// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");
const math = require("remark-math");
const katex = require("rehype-katex");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Muto Metaverse",
  tagline: "",
  url: "https://docs.Mutodao.finance",
  baseUrl: "/",
  onBrokenLinks: "warn",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.png",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "MutoDAO", // Usually your GitHub org/user name.
  projectName: "Muto-docs", // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: "/main", // defaults to docs, but `main` maintains the gitbook paths
          sidebarPath: require.resolve("./sidebars.js"),
          // Remove this to remove the "edit this page" links.
          editUrl: "https://github.com/MutoDAO/Muto-docs/blob/main",
          remarkPlugins: [math],
          rehypePlugins: [katex],
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
        googleTagManager: {
          containerId: 'GTM-NJSWZX5'
        }
      }),
    ],
  ],
  // config for KaTex plugin: https://docusaurus.io/docs/markdown-features/math-equations
  stylesheets: [
    {
      href: "https://cdn.jsdelivr.net/npm/katex@0.13.24/dist/katex.min.css",
      type: "text/css",
      integrity:
        "sha384-odtC+0UGzzFL/6PNoE8rX/SPcQDXBJ+uRepguP4QkPCm2LBxH3FA3y+fKSiJ+AmM",
      crossorigin: "anonymous",
    },
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      colorMode: {
        defaultMode: "dark",
        disableSwitch: false,
        respectPrefersColorScheme: false,
      },
      navbar: {
        title: "",
        logo: {
          alt: "Muto Docs",
          src: "img/logo-dark.png",
          srcDark: "img/logo-light.png",
        },
        items: [
          // {
          //   type: "doc",
          //   docId: "utility/index",
          //   position: "left",
          //   label: "Utility",
          // },
          // {
          //   type: "doc",
          //   docId: "mechanics/stability/index",
          //   position: "left",
          //   label: "Stability",
          // },
          // {
          //   type: "doc",
          //   docId: "mechanics/liquidity/index",
          //   position: "left",
          //   label: "Liquidity",
          // },
          // {
          //   type: "doc",
          //   docId: "mechanics/governance/index",
          //   position: "left",
          //   label: "Governance",
          // },
          // {
          //   type: "doc",
          //   docId: "technical-guides/index",
          //   position: "left",
          //   label: "Technical Docs",
          // },
          {
            href: "https://github.com/MutoDAO/Muto-docs",
            label: "GitHub",
            position: "right",
          },
        ],
      },
      footer: {
        style: "dark",
        // links: [
        //   {
        //     title: "Documentation",
        //     items: [
        //       {
        //         label: "Protocol Documentation",
        //         to: "/main/overview/metamuto",
        //       },
        //     ],
        //   },
        //   {
        //     title: "Community",
        //     items: [
        //       {
        //         label: "Discord",
        //         href: "https://discord-invite.Mutodao.finance/",
        //       },
        //       {
        //         label: "Twitter",
        //         href: "https://twitter.com/MutoDAO",
        //       },
        //     ],
        //   },
        //   {
        //     title: "More",
        //     items: [
        //       {
        //         label: "Medium",
        //         to: "https://Mutodao.medium.com/",
        //       },
        //       {
        //         label: "GitHub",
        //         href: "https://github.com/MutoDAO",
        //       },
        //     ],
        //   },
        // ],
        copyright: `Copyright © ${new Date().getFullYear()} MetaMuto`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
