import React from 'react';
import Image from 'next/image';

export default function DownloadCTA() {
  return (
    <section className="py-20 px-6 bg-raycast-white border-t border-raycast-border">
      <div className="max-w-4xl mx-auto text-center space-y-4">
        {/* Headline */}
        <div className="space-y-1.5">
          <h2 className="text-2xl md:text-3xl font-semibold text-raycast-text">
            Take the smart route.
          </h2>
          <p className="text-lg text-raycast-text-secondary">
            Download and use Rosota Copilot for free.
          </p>
        </div>

        {/* Download Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
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
            className="inline-flex items-center justify-center px-6 py-3 bg-raycast-white text-raycast-text border border-gray-300 text-sm font-medium rounded-button hover:border-gray-400 hover:shadow-md transition-all duration-200"
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

        {/* Version Info */}
        <div className="text-sm text-raycast-text-secondary">
          <a
            href="/starter-pack"
            className="inline-flex items-center gap-1 text-raycast-text-secondary hover:text-raycast-text transition-colors duration-200"
          >
            View Hardware
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}

