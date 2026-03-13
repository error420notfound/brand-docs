import type { SidebarsConfig } from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  // ── BRAND ──────────────────────────────────────────────────────────────────
  brandSidebar: [
    {
      type: 'doc',
      id: 'brand/overview',
      label: 'Brand Overview',
    },
    {
      type: 'category',
      label: '🪄 Logos',
      collapsed: false,
      items: [
        'brand-logos-usage',
        'brand/logos/clearspace',
        'brand/logos/variations',
        'brand/logos/dont',
      ],
    },
    {
      type: 'category',
      label: '🎨 Color Palette',
      collapsed: false,
      items: [
        'brand/colors/palette',
        'brand/colors/usage',
        'brand/colors/accessibility',
      ],
    },
    {
      type: 'category',
      label: '✍️ Typography',
      collapsed: false,
      items: [
        'brand/typography/typefaces',
        'brand/typography/scale',
        'brand/typography/usage',
      ],
    },
    {
      type: 'category',
      label: '🖼 Illustrations',
      collapsed: false,
      items: [
        'brand/illustrations/overview',
        'brand/illustrations/style-guide',
        'brand/illustrations/library',
      ],
    },
  ],

  // ── UI / UX ────────────────────────────────────────────────────────────────
  uiuxSidebar: [
    {
      type: 'doc',
      id: 'ui-ux/principles',
      label: 'Design Principles',
    },
    {
      type: 'category',
      label: '🧩 Components',
      collapsed: false,
      items: [
        'ui-ux/components/overview',
        'ui-ux/components/buttons',
        'ui-ux/components/forms',
        'ui-ux/components/navigation',
        'ui-ux/components/cards',
        'ui-ux/components/modals',
      ],
    },
    {
      type: 'category',
      label: '🔁 Patterns',
      collapsed: false,
      items: [
        'ui-ux/patterns/overview',
        'ui-ux/patterns/layout',
        'ui-ux/patterns/spacing',
        'ui-ux/patterns/motion',
      ],
    },
    {
      type: 'category',
      label: '♿ Accessibility',
      collapsed: false,
      items: [
        'ui-ux/accessibility/overview',
        'ui-ux/accessibility/color-contrast',
        'ui-ux/accessibility/keyboard-nav',
      ],
    },
  ],

  // ── MARKETING ──────────────────────────────────────────────────────────────
  marketingSidebar: [
    {
      type: 'doc',
      id: 'marketing/voice-and-tone',
      label: 'Voice & Tone',
    },
    {
      type: 'category',
      label: '📋 Templates',
      collapsed: false,
      items: [
        'marketing/templates/overview',
        'marketing/templates/social-media',
        'marketing/templates/email',
        'marketing/templates/presentations',
      ],
    },
    {
      type: 'category',
      label: '📣 Campaign Guidelines',
      collapsed: false,
      items: [
        'marketing/campaigns/overview',
        'marketing/campaigns/digital',
        'marketing/campaigns/print',
        'marketing/campaigns/video',
      ],
    },
  ],
};

export default sidebars;
