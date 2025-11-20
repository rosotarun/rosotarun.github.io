import React from 'react';
import Head from 'next/head';
import Script from 'next/script';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import StarterPackDetail from '@/components/StarterPackDetail';
import WhatsIncluded from '@/components/WhatsIncluded';
import Specifications from '@/components/Specifications';

export default function StarterPackPage() {
  return (
    <div className="min-h-screen bg-raycast-white">
      <Head>
        <title>ROSOTA Starter Pack - Complete Robotics Kit</title>
        <meta name="description" content="Get started with robotics development. Complete hardware kit with robotic arm, controller, and all accessories." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        
        {/* Open Graph */}
        <meta property="og:title" content="ROSOTA Starter Pack - Complete Robotics Kit" />
        <meta property="og:description" content="Get started with robotics development. Complete hardware kit with robotic arm, controller, and all accessories." />
        <meta property="og:type" content="website" />
      </Head>

      {/* Ezoic Privacy Scripts */}
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
      <Script id="ezoic-init-starter" strategy="afterInteractive">
        {`
          window.ezstandalone = window.ezstandalone || {};
          ezstandalone.cmd = ezstandalone.cmd || [];
        `}
      </Script>

      <Navigation />
      
      <main>
        <StarterPackDetail />
        <WhatsIncluded />
        <Specifications />
        
        {/* ✨ Ezoic 광고 영역 - 스타터 팩 페이지 하단 ✨ */}
        <section className="py-12 px-6 bg-raycast-white">
          <div className="max-w-4xl mx-auto flex justify-center">
            <div id="ezoic-pub-ad-placeholder-112"></div>
          </div>
        </section>
        <Script id="ezoic-ad-112" strategy="lazyOnload">
          {`
            ezstandalone.cmd.push(function () {
              ezstandalone.showAds(112);
            });
          `}
        </Script>
      </main>

      <Footer />
    </div>
  );
}

