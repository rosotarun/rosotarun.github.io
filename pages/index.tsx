import Head from 'next/head';
import Script from 'next/script';
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import HardwareCTA from '@/components/HardwareCTA';
import DownloadCTA from '@/components/DownloadCTA';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Head>
        <title>Rosota Copilot - AI-Powered Robot Control for Everyone</title>
        <meta
          name="description"
          content="A lightweight robotics control software with leader–follower sync, timeline recording, and precise motion tools. Download for macOS."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <meta property="og:title" content="Rosota Copilot - AI-Powered Robot Control" />
        <meta
          property="og:description"
          content="A lightweight robotics control software with leader–follower sync, timeline recording, and precise motion tools."
        />
        <meta property="og:type" content="website" />
      </Head>

      {/* Ezoic Privacy Scripts - 가장 먼저 로드 */}
      <Script
        src="https://cmp.gatekeeperconsent.com/min.js"
        data-cfasync="false"
        strategy="beforeInteractive"
      />
      <Script
        src="https://the.gatekeeperconsent.com/cmp.min.js"
        data-cfasync="false"
        strategy="beforeInteractive"
      />

      {/* Ezoic Header Script */}
      <Script
        src="//www.ezojs.com/ezoic/sa.min.js"
        strategy="afterInteractive"
      />
      <Script id="ezoic-init" strategy="afterInteractive">
        {`
          window.ezstandalone = window.ezstandalone || {};
          ezstandalone.cmd = ezstandalone.cmd || [];
        `}
      </Script>

      <div className="min-h-screen bg-raycast-white">
        <Navigation />
        <main>
          <Hero />
          <Features />
          <HardwareCTA />
          <DownloadCTA />
          <Footer />
        </main>
      </div>
    </>
  );
}
