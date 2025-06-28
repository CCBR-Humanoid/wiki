import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import Heading from '@theme/Heading';
import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <style>
          {`
            .getStartedBtn {
              background: white;
              color: #222;
              font-family: monospace;
              font-size: 2rem;
              padding: 1rem 2.5rem;
              border: none;
              border-radius: 0.5rem;
              display: block;
              margin: 2rem auto;
              cursor: pointer;
              font-weight: bold;
              box-shadow: 0 2px 8px rgba(0,0,0,0.08);
              transition: background 0.2s, color 0.2s;
            }
            .getStartedBtn:hover {
              background: #222;
              color: #fff;
            }
          `}
        </style>
        <a href="/wiki/docs/home">
          <button className="getStartedBtn">
            Get Started
          </button>
        </a>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
