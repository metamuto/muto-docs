/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  // main: [{type: 'autogenerated', dirName: './main'}],

  // But you can create a sidebar manually
  // config options: https://docusaurus.io/docs/next/sidebar/items
  main: [
    {
      type: "category",
      label: "Overview",
      collapsible: true,
      collapsed: false,
      items: [{ type: "autogenerated", dirName: "overview" }],
    },
    {
      type: "category",
      label: "Governance",
      collapsible: true,
      collapsed: true,
      items: [{ type: "autogenerated", dirName: "governance" }],
    },
    {
      type: "category",
      label: "Technical",
      collapsible: true,
      collapsed: true,
      items: [{ type: "autogenerated", dirName: "technical" }],
    },
    {
      type: "category",
      label: "Resources",
      collapsible: true,
      collapsed: true,
      items: [{ type: "autogenerated", dirName: "resources" }],
    },
  ],
};

module.exports = sidebars;