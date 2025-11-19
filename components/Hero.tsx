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
              href="/Rosota Copilot for MacOS.zip"
              download
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

          {/* Floating Card */}
          <div className="relative max-w-5xl mx-auto">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-raycast-border bg-raycast-white transform hover:scale-[1.01] transition-transform duration-300">
              {/* Placeholder for Copilot UI Screenshot */}
              <div className="aspect-[16/10] bg-gradient-to-br from-gray-50 via-white to-gray-50">
                <div className="w-full h-full flex items-center justify-center p-12">
                  <div className="text-center space-y-6">
                    {/* Mock Window Chrome */}
                    <div className="max-w-4xl mx-auto">
                      <div className="bg-raycast-white rounded-xl shadow-lg border border-gray-200 overflow-hidden">
                        {/* Window Header */}
                        <div className="flex items-center gap-2 px-4 py-3 bg-gray-50 border-b border-gray-200">
                          <div className="flex gap-2">
                            <div className="w-3 h-3 rounded-full bg-red-400"></div>
                            <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                            <div className="w-3 h-3 rounded-full bg-green-400"></div>
                          </div>
                          <div className="flex-1 text-center">
                            <span className="text-xs text-gray-500 font-medium">Rosota Copilot</span>
                          </div>
                        </div>
                        {/* Window Content */}
                        <div className="p-8 bg-raycast-white">
                          <div className="space-y-4">
                            <div className="w-32 h-32 mx-auto bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl flex items-center justify-center">
                              <svg
                                className="w-16 h-16 text-white"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
                                />
                              </svg>
                            </div>
                            <div className="space-y-2">
                              <div className="h-3 bg-gray-200 rounded w-3/4 mx-auto"></div>
                              <div className="h-3 bg-gray-200 rounded w-1/2 mx-auto"></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
