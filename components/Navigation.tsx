import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useAuth } from '@/hooks/useAuth';
import AuthModal from '@/components/AuthModal';

export default function Navigation() {
  const router = useRouter();
  const { user, signOut } = useAuth();
  const [authModalOpen, setAuthModalOpen] = useState(false);
  const [authMode, setAuthMode] = useState<'login' | 'signup'>('login');
  const isActive = (path: string) => router.pathname === path;
  const baseLinkClass =
    'text-sm text-raycast-text-secondary hover:text-raycast-text transition-colors duration-200';

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-raycast-white/80 backdrop-blur-md border-b border-raycast-border">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="/" className="flex items-center" aria-label="Rosota Copilot home">
            <Image
              src="/images/rosota-logo-v2.png"
              alt="Rosota Copilot"
              width={146}
              height={146}
            />
          </a>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center gap-8">
            <Link
              href="/"
              className={`${baseLinkClass} ${
                isActive('/') ? 'font-semibold text-raycast-text underline underline-offset-4' : ''
              }`}
            >
              Home
            </Link>
            <a
              href="https://rosota.run"
              target="_blank"
              rel="noopener noreferrer"
              className={baseLinkClass}
            >
              About Us
            </a>
            <Link
              href="/starter-pack"
              className={`${baseLinkClass} ${
                isActive('/starter-pack')
                  ? 'font-semibold text-raycast-text underline underline-offset-4'
                  : ''
              }`}
            >
              Hardware
            </Link>
            <Link
              href="/community"
              className={`${baseLinkClass} ${
                isActive('/community')
                  ? 'font-semibold text-raycast-text underline underline-offset-4'
                  : ''
              }`}
            >
              Community
            </Link>
          </div>

          {/* Download Button & Auth */}
          <div className="hidden md:flex items-center gap-2">
            <a
              href="https://drive.google.com/file/d/1NvDkRYVRdwrQter4uvwqZP699UX1vl5o/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-4 py-2 bg-raycast-text text-raycast-white text-sm font-normal rounded-button hover:bg-opacity-80 transition-all duration-200 shadow-sm hover:shadow-md"
            >
              <Image
                src="/images/apple-logo.png"
                alt="Apple"
                width={12}
                height={12}
                className="mr-2 brightness-0 invert"
              />
              macOS
            </a>
            <a
              href="/Rosota Copilot for Windows.zip"
              download
              className="inline-flex items-center px-4 py-2 bg-raycast-white text-raycast-text border border-gray-300 text-sm font-normal rounded-button hover:border-gray-400 transition-all duration-200 shadow-sm hover:shadow-md"
            >
              <Image
                src="/images/window-logo.png"
                alt="Windows"
                width={12}
                height={12}
                className="mr-2"
              />
              Windows
            </a>
            {user ? (
              <div className="flex items-center gap-2 ml-2">
                <span className="text-sm text-raycast-text-secondary">
                  {user.email?.split('@')[0]}
                </span>
                <button
                  onClick={signOut}
                  className="px-4 py-2 text-sm text-raycast-text-secondary hover:text-raycast-text transition-colors"
                >
                  로그아웃
                </button>
              </div>
            ) : (
              <button
                onClick={() => {
                  setAuthMode('login');
                  setAuthModalOpen(true);
                }}
                className="ml-2 px-4 py-2 text-sm text-raycast-text-secondary hover:text-raycast-text transition-colors"
              >
                로그인
              </button>
            )}
          </div>
        </div>
      </div>

      <AuthModal
        isOpen={authModalOpen}
        onClose={() => setAuthModalOpen(false)}
        mode={authMode}
        onModeChange={(newMode) => setAuthMode(newMode)}
      />
    </nav>
  );
}

