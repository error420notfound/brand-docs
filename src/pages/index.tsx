import type { ReactNode } from 'react';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import styles from './index.module.css';

type FeatureItem = {
  emoji: string;
  title: string;
  description: string;
  to: string;
  label: string;
};

const features: FeatureItem[] = [
  {
    emoji: '🎨',
    title: 'Brand Assets',
    description:
      'Logos, color palette, typography, and illustration guidelines — everything teams need to stay on-brand.',
    to: '/docs/brand/overview',
    label: 'Explore Brand',
  },
  {
    emoji: '🖥',
    title: 'UI / UX Design',
    description:
      'Component library, design patterns, spacing systems, motion principles, and accessibility requirements.',
    to: '/docs/ui-ux/principles',
    label: 'Explore UI / UX',
  },
  {
    emoji: '📣',
    title: 'Marketing',
    description:
      'Voice & tone, campaign guidelines, ad templates, and social media specs for marketing and advertising teams.',
    to: '/docs/marketing/voice-and-tone',
    label: 'Explore Marketing',
  },
];

function FeatureCard({ emoji, title, description, to, label }: FeatureItem): ReactNode {
  return (
    <div className={styles.card}>
      <div className={styles.cardEmoji}>{emoji}</div>
      <h3 className={styles.cardTitle}>{title}</h3>
      <p className={styles.cardDescription}>{description}</p>
      <Link className={styles.cardLink} to={to}>
        {label} →
      </Link>
    </div>
  );
}

export default function Home(): ReactNode {
  const { siteConfig } = useDocusaurusContext();

  return (
    <Layout title="Home" description={siteConfig.tagline}>
      {/* ── Hero ── */}
      <header className="hero--brand">
        <div className="container">
          <h1 className="hero__title">Brand Docs</h1>
          <p className="hero__subtitle">
            The single source of truth for our brand assets, design system,
            and marketing guidelines.
          </p>
          <div className={styles.heroCta}>
            <Link className={styles.ctaPrimary} to="/docs/brand/overview">
              Get Started
            </Link>
            <Link
              className={styles.ctaSecondary}
              to="https://github.com/YOUR-GITHUB-USERNAME/brand-docs"
            >
              View on GitHub
            </Link>
          </div>
        </div>
      </header>

      {/* ── Feature Cards ── */}
      <main className={styles.main}>
        <section className="container">
          <div className={styles.grid}>
            {features.map((f) => (
              <FeatureCard key={f.title} {...f} />
            ))}
          </div>
        </section>

        {/* ── Quick Links ── */}
        <section className={`container ${styles.quickLinks}`}>
          <h2 className={styles.sectionLabel}>Quick Links</h2>
          <div className={styles.linkGrid}>
            {[
              ['Logo Usage', '/docs/brand/logos/usage'],
              ['Color Palette', '/docs/brand/colors/palette'],
              ['Type Scale', '/docs/brand/typography/scale'],
              ['Illustrations', '/docs/brand/illustrations/library'],
              ['Buttons', '/docs/ui-ux/components/buttons'],
              ['Motion', '/docs/ui-ux/patterns/motion'],
              ['Voice & Tone', '/docs/marketing/voice-and-tone'],
              ['Social Templates', '/docs/marketing/templates/social-media'],
            ].map(([label, href]) => (
              <Link key={label} to={href} className={styles.quickLink}>
                {label}
              </Link>
            ))}
          </div>
        </section>
      </main>
    </Layout>
  );
}
