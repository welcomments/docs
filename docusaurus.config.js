module.exports = {
  title: 'Welcomments Documentation',
  url: 'https://60a561c589858b3c192f1015--keen-nobel-67c5e6.netlify.app/',
  baseUrl: '/docs/',
  favicon: 'img/favicon.svg',
  organizationName: 'welcomments',
  projectName: 'docs',
  themeConfig: {
    colorMode: { disableSwitch: true },
    navbar: {
      title: 'Welcomments',
      logo: {
        alt: 'Welcomments logo',
        src: 'img/logo.svg',
        href: 'https://welcomments.io/',
        target: '_self',
      },
      items: [
        {
          href: '/',
          label: 'Docs',
          position: 'left',
          target: '_self',
          activeBasePath: '/docs'
        },
        {
          href: 'https://github.com/welcomments/docs',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Study',
          items: [
            {
              label: 'Read our blog',
              to: 'https://welcomments.io/blog',
            },
            {
              label: 'Study the documentation',
              to: 'https://welcomments.io/docs',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/welcomments/',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/welcomments',
            },
          ],
        },
        {
          title: 'Explore',
          items: [
            {
              label: 'Give us feedback',
              href: 'mailto:hello@welcomments.io',
            },
            {
              label: 'Status',
              href: 'https://status.welcomments.io',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Welcomments.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl:
            'https://github.com/welcomments/docs/edit/master/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
