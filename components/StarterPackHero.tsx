import React from 'react';
import Image from 'next/image';

export default function StarterPackHero() {
  return (
    <section className="relative pt-40 pb-24 px-6 bg-raycast-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Product Image */}
          <div className="relative">
            <div className="relative aspect-square rounded-3xl overflow-hidden border border-raycast-border bg-gradient-to-br from-gray-50 to-gray-100 shadow-xl">
              <div className="w-full h-full flex items-center justify-center p-12">
                {/* Placeholder for Product Image */}
                <div className="text-center space-y-8">
                  <div className="w-64 h-64 mx-auto bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl flex items-center justify-center shadow-2xl">
                    <svg
                      className="w-32 h-32 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
                      />
                    </svg>
                  </div>
                  <p className="text-raycast-text font-semibold text-xl">6-Axis Robotic Arm</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right - Product Info */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-block px-4 py-1.5 bg-raycast-text/5 rounded-full">
                <span className="text-sm font-medium text-raycast-text">Hardware Kit</span>
              </div>
              <h1 className="text-5xl md:text-6xl font-semibold text-raycast-text leading-tight">
                ROSOTA Starter Pack
              </h1>
              <p className="text-xl text-raycast-text-secondary leading-relaxed">
                Everything you need to get started with robotics development. Complete kit with 6-axis robotic arm, controller, and Rosota Copilot software.
              </p>
            </div>

            {/* Price */}
            <div className="space-y-2">
              <div className="flex items-baseline gap-3">
                <span className="text-5xl font-semibold text-raycast-text">$1,299</span>
                <span className="text-lg text-raycast-text-secondary line-through">$1,599</span>
              </div>
              <p className="text-sm text-raycast-text-secondary">
                Limited time offer · Free shipping · 1-year warranty
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#"
                className="inline-flex items-center justify-center px-8 py-4 bg-raycast-text text-raycast-white text-lg font-semibold rounded-button hover:bg-opacity-90 transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                Order Now
              </a>
              <a
                href="#specs"
                className="inline-flex items-center justify-center px-8 py-4 bg-raycast-white text-raycast-text border border-raycast-border text-lg font-medium rounded-button hover:border-gray-300 hover:shadow-md transition-all duration-200"
              >
                View Specs
              </a>
            </div>

            {/* Features List */}
            <div className="pt-6 border-t border-raycast-border">
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-green-600 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-raycast-text-secondary">6-axis robotic arm with 1kg payload</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-green-600 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-raycast-text-secondary">USB-C controller with real-time feedback</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-green-600 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-raycast-text-secondary">Pre-installed Rosota Copilot software</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-green-600 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-raycast-text-secondary">Complete mounting kit and accessories</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

