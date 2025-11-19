import React from 'react';
import Image from 'next/image';

export default function HardwareCTA() {
  return (
    <section id="hardware" className="py-24 px-6 bg-raycast-white">
      <div className="max-w-5xl mx-auto">
        <div className="rounded-3xl border border-raycast-border bg-gradient-to-br from-raycast-white to-gray-50/30 p-12 md:p-16 shadow-sm">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Text */}
            <div className="space-y-6">
              <div className="space-y-4">
                <h2 className="text-3xl md:text-4xl font-semibold text-raycast-text">
                  Need hardware?
                </h2>
                <p className="text-lg text-raycast-text-secondary leading-relaxed">
                  Control a real robotic arm with the ROSOTA Starter Pack. Complete hardware kit for hands-on robotics development.
                </p>
              </div>

              <a
                href="/starter-pack"
                className="inline-flex items-center px-6 py-3 bg-[#FDFDFD] text-raycast-text border border-raycast-border rounded-button font-medium hover:border-gray-300 hover:shadow-md transition-all duration-200"
              >
                View Hardware
                <svg
                  className="w-4 h-4 ml-2"
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

            {/* Right Side - Product Image */}
            <div className="relative">
              <div className="rounded-2xl overflow-hidden border border-raycast-border bg-[#f8f9fa] shadow-sm">
                <Image
                  src="/images/soarm.png"
                  alt="SO-ARM101 hardware kit"
                  width={800}
                  height={600}
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

