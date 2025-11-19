import React from 'react';
import Image from 'next/image';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

export default function Hero() {
  const headline = useScrollAnimation();
  const subheadline = useScrollAnimation();
  const cta = useScrollAnimation();
  const smallText = useScrollAnimation();
  const floatingUI = useScrollAnimation();

  return (
    <section className="relative pt-40 pb-32 px-6 bg-raycast-white overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="text-center space-y-4">
          {/* Headline */}
          <div className="space-y-5">
            <h1 
              ref={headline.ref}
              className={`text-4xl md:text-5xl lg:text-6xl font-semibold text-raycast-text leading-tight transition-all duration-1000 ease-out ${
                headline.isVisible ? 'opacity-100 blur-0 translate-y-0' : 'opacity-0 blur-[10px] translate-y-5'
              }`}
            >
              AI-powered robot control
              <br />
              for everyone.
            </h1>
            <p 
              ref={subheadline.ref}
              className={`text-base md:text-lg text-raycast-text-secondary leading-normal max-w-3xl mx-auto transition-all duration-1000 ease-out delay-300 ${
                subheadline.isVisible ? 'opacity-100 blur-0 translate-y-0' : 'opacity-0 blur-[10px] translate-y-5'
              }`}
            >
              A lightweight robotics control software with leader–follower sync,
              <br />
              timeline recording, and precise motion tools.
            </p>
          </div>

          {/* CTA Buttons */}
          <div 
            ref={cta.ref}
            className={`flex flex-col sm:flex-row items-center justify-center gap-4 pt-12 transition-all duration-1000 ease-out delay-500 ${
              cta.isVisible ? 'opacity-100 blur-0 translate-y-0' : 'opacity-0 blur-[10px] translate-y-5'
            }`}
          >
            <a
              href="https://drive.google.com/file/d/1NvDkRYVRdwrQter4uvwqZP699UX1vl5o/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-6 py-3 bg-raycast-text text-raycast-white text-sm font-medium rounded-button hover:bg-opacity-80 transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              <Image
                src="/images/apple-logo.png"
                alt="Apple"
                width={18}
                height={28}
                className="mr-2"
              />
              Download for macOS
            </a>
            <a
              href="/Rosota Copilot for Windows.zip"
              download
              className="inline-flex items-center justify-center px-6 py-3 bg-raycast-white text-raycast-text border border-gray-300 text-sm font-medium rounded-button hover:border-gray-400 transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              <Image
                src="/images/window-logo.png"
                alt="Windows"
                width={18}
                height={18}
                className="mr-2"
              />
              Download for Windows
            </a>
          </div>

          {/* Small Text */}
          <div 
            ref={smallText.ref}
            className={`space-y-2 transition-all duration-1000 ease-out delay-600 ${
              smallText.isVisible ? 'opacity-100 blur-0 translate-y-0' : 'opacity-0 blur-[10px] translate-y-5'
            }`}
          >
            <p className="text-sm text-raycast-text-secondary">
              Free download · No signup required
            </p>
            <a
              href="/starter-pack"
              className="inline-flex items-center text-sm text-raycast-text-secondary hover:text-raycast-text transition-colors duration-200"
            >
              View Hardware
              <svg
                className="w-4 h-4 ml-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </a>
          </div>
        </div>

        {/* Floating UI Screenshot with Glow */}
        <div 
          ref={floatingUI.ref}
          className={`relative mt-20 transition-all duration-1000 ease-out delay-700 ${
            floatingUI.isVisible ? 'opacity-100 blur-0 translate-y-0' : 'opacity-0 blur-[10px] translate-y-5'
          }`}
        >
          {/* Soft Glow Background */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-[600px] h-[600px] bg-gradient-to-r from-blue-100/40 via-cyan-100/40 to-teal-100/40 rounded-full blur-3xl opacity-60"></div>
          </div>

          {/* Embedded Product Video */}
          <div className="relative max-w-5xl mx-auto px-4">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-raycast-border bg-raycast-white transform hover:scale-[1.01] transition-transform duration-300">
              <div className="aspect-video bg-black">
                <iframe
                  src="https://www.youtube.com/embed/pq5PjcEzr14?rel=0&autoplay=1&mute=1&playsinline=1"
                  title="Rosota Copilot demo video"
                  className="w-full h-full"
                  allow="autoplay; accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
