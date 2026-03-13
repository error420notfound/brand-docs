import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// ─────────────────────────────────────────────────────────────────────────────
// 🔧 CONFIGURATION — update these before deploying
// ─────────────────────────────────────────────────────────────────────────────
const config: Config = {
  title: 'Brand Docs',
  tagline: 'Design system, brand assets, and marketing guidelines',
  favicon: 'img/favicon.ico',

  // GitHub Pages deployment
  url: 'https://error420notfound.github.io',
  baseUrl: '/brand-docs/',

  organizationName: 'error420notfound', // GitHub org/user
  projectName: 'brand-docs',                // GitHub repo name
  trailingSlash: false,

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          editUrl: 'https://github.com/error420notfound/brand-docs/tree/main/',
          showLastUpdateTime: true,
          showLastUpdateAuthor: true,
        },
        blog: false, // Disable blog — enable later for changelogs
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: 'img/social-card.png',

    colorMode: {
      defaultMode: 'light',
      disableSwitch: false,
      respectPrefersColorScheme: true,
    },

    navbar: {
      title: 'Brand Docs',
      logo: {
        alt: 'Brand Logo',
        src: 'img/logo.svg',
        srcDark: 'img/logo-dark.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'brandSidebar',
          position: 'left',
          label: '🎨 Brand',
        },
        {
          type: 'docSidebar',
          sidebarId: 'uiuxSidebar',
          position: 'left',
          label: '🖥 UI / UX',
        },
        {
          type: 'docSidebar',
          sidebarId: 'marketingSidebar',
          position: 'left',
          label: '📣 Marketing',
        },
        {
          href: 'https://github.com/error420notfound/brand-docs',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },

    footer: {
      style: 'dark',
      links: [
        {
          title: 'Brand',
          items: [
            { label: 'Overview', to: '/docs/brand/overview' },
            { label: 'Logos', to: '/docs/brand/logos/usage' },
            { label: 'Color Palette', to: '/docs/brand/colors/palette' },
            { label: 'Typography', to: '/docs/brand/typography/typefaces' },
          ],
        },
        {
          title: 'UI / UX',
          items: [
            { label: 'Design Principles', to: '/docs/ui-ux/principles' },
            { label: 'Components', to: '/docs/ui-ux/components/overview' },
            { label: 'Patterns', to: '/docs/ui-ux/patterns/overview' },
            { label: 'Accessibility', to: '/docs/ui-ux/accessibility/overview' },
          ],
        },
        {
          title: 'Marketing',
          items: [
            { label: 'Voice & Tone', to: '/docs/marketing/voice-and-tone' },
            { label: 'Templates', to: '/docs/marketing/templates/overview' },
            { label: 'Campaign Guidelines', to: '/docs/marketing/campaigns/overview' },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Your Company. Built with Docusaurus.`,
    },

    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },

    algolia: undefined, // Add Algolia DocSearch credentials here when ready
  } satisfies Preset.ThemeConfig,
};

export default config;
