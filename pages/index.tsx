import Head from 'next/head';
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
