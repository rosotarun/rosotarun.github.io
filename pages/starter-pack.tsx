import React from 'react';
import Head from 'next/head';
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

      <Navigation />
      
      <main>
        <StarterPackDetail />
        <WhatsIncluded />
        <Specifications />
      </main>

      <Footer />
    </div>
  );
}

