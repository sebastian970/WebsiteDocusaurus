/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

// See https://docusaurus.io/docs/site-config for all the possible
// site configuration options.

// List of projects/orgs using your project for the users page.






const users = [
  {
    caption: 'User1',
    // You will need to prepend the image path with your baseUrl
    // if it is not '/', like: '/test-site/img/image.jpg'.
    image: '/img/undraw_open_source.svg',
    infoLink: 'https://www.facebook.com',
    pinned: true,
  },
];

const siteConfig = {
  title: 'Documentation', // Title for your website.
  tagline: 'Future Business',
  url: 'https://OlegGitH.github.io', // Your website URL
  baseUrl: '/WebsiteDocusaurus/', // Base URL for your project */
  // For github.io type URLs, you would set the url and baseUrl like:
  //   url: 'https://facebook.github.io',
  //   baseUrl: '/test-site/',

  // Used for publishing and more
  projectName: 'WebsiteDocusaurus',
  organizationName: 'OlegGitH',
  // For top-level user or org sites, the organization is still the same.
  // e.g., for the https://JoelMarcey.github.io site, it would be set like...
  //   organizationName: 'JoelMarcey'

  // For no header links in the top nav bar -> headerLinks: [],
  headerLinks: [
    {doc: 'doc1', label: 'Documentation'},
    {page: 'help', label: 'Help'},
    {href: 'https://trello.com/b/kY3Dg9n3/aplikacja-webowa-planowanie', label: 'Trello'},
    {search: true}
  ],

  editUrl: 'https://github.com/OlegGitH/WebsiteDocusaurus/blob/master/website/versioned_docs/version-1.0.0/' ,
  // If you have users set above, you add it here:
  users,

  disableTitleTagline: true,
  /* path to images for header/footer */

  headerIcon: 'img/undraw_code_thinking_1jeh.svg',
  footerIcon: 'img/undraw_code_thinking_1jeh.svg',
  favicon: 'img/undraw_monitor.svg',
   
  /* Colors for website */
  colors: {
    primaryColor: '#85c493',
    secondaryColor: '#066b33',
  },

  
  

  algolia: {
    apiKey: '0283afbb3e74de428806e36733dce783',
    indexName: 'dev_name',
    algoliaOptions: {} // Optional, if provided by Algolia
  },


  markdownPlugins: [
    function foo(md) {
      md.renderer.rules.fence_custom.foo = function(
        tokens,
        idx,
        options,
        env,
        instance,
      ) {
        return '<div class="foo"> bar </div>';
      };
    },
  ],

  


  /* Custom fonts for website */
  /*
  fonts: {
    myFont: [
      "Times New Roman",
      "Serif"
    ],
    myOtherFont: [
      "-apple-system",
      "system-ui"
    ]
  },
  */

  // This copyright info is used in /core/Footer.js and blog RSS/Atom feeds.
  copyright: `Copyright © ${new Date().getFullYear()} Future Business company`,

  highlight: {
    // Highlight.js theme to use for syntax highlighting in code blocks.
    theme: 'default',
  },

  // Add custom scripts here that would be placed in <script> tags.
  scripts: ['https://buttons.github.io/buttons.js',
  'https://cdnjs.cloudflare.com/ajax/libs/clipboard.js/2.0.0/clipboard.min.js',
  '/js/code-blocks-buttons.js',],
       
  // On page navigation for the current documentation page.
  onPageNav: 'separate',
  // No .html extensions for paths.
  cleanUrl: true,

  // Open Graph and Twitter card images.
  ogImage: 'img/undraw_online.svg',
  twitterImage: 'img/undraw_tweetstorm.svg',

  // For sites with a sizable amount of content, set collapsible to true.
  // Expand/collapse the links and subcategories under categories.
   docsSideNavCollapsible: true,

  // Show documentation's last contributor's name.
   enableUpdateBy: true,

  // Show documentation's last update time.
   enableUpdateTime: true,

  // You may provide arbitrary config keys to be used as needed by your
  // template. For example, if you need your repo's URL...
  //   repoUrl: 'https://github.com/facebook/test-site',
};

module.exports = siteConfig;
