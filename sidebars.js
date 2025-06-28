// @ts-check

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.

 @type {import('@docusaurus/plugin-content-docs').SidebarsConfig}
 */
const sidebars = {
  // Single comprehensive sidebar showing all documentation
  docs: [
    {
      type: 'category',
      label: 'Getting Started',
      collapsed: false,
      items: [
        'home',
      ],
    },
    {
      type: 'category',
      label: 'Hardware',
      collapsed: false,
      items: [
        'hardware/index',
        'hardware/control-pcbs',
        'hardware/leg-test-stand',
        'hardware/modular-interfaces',
        'hardware/motors',
      ],
    },
    {
      type: 'category',
      label: 'Software',
      collapsed: false,
      items: [
        'software/index',
        'software/control-system',
        'software/simulation',
      ],
    },
    {
      type: 'category',
      label: 'Contributing',
      collapsed: false,
      items: [
        'contribute/contribute',
      ],
    },
  ],
};

export default sidebars;
