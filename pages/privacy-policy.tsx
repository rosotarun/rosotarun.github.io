import React from 'react';
import Head from 'next/head';
import Script from 'next/script';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-raycast-white">
      <Head>
        <title>Privacy Policy - Rosota Copilot</title>
        <meta name="description" content="Privacy Policy for Rosota Copilot" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
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
      <Script id="ezoic-init-privacy" strategy="afterInteractive">
        {`
          window.ezstandalone = window.ezstandalone || {};
          ezstandalone.cmd = ezstandalone.cmd || [];
        `}
      </Script>

      <Navigation />

      <main className="pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-semibold text-raycast-text mb-4">
            Privacy Policy
          </h1>
          <p className="text-sm text-raycast-text-secondary mb-12">
            Last Updated: November 20, 2024
          </p>

          <div className="space-y-8 text-raycast-text-secondary leading-relaxed">
            {/* Introduction */}
            <section>
              <h2 className="text-2xl font-semibold text-raycast-text mb-4">Introduction</h2>
              <p>
                Rosota Copilot ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website rosota.store and use our software.
              </p>
            </section>

            {/* Information We Collect */}
            <section>
              <h2 className="text-2xl font-semibold text-raycast-text mb-4">Information We Collect</h2>
              
              <h3 className="text-xl font-semibold text-raycast-text mb-3 mt-4">Automatically Collected Information</h3>
              <p className="mb-3">When you visit our website, we automatically collect certain information about your device, including:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>IP address</li>
                <li>Browser type and version</li>
                <li>Operating system</li>
                <li>Pages visited and time spent on pages</li>
                <li>Referring website addresses</li>
                <li>Device information</li>
              </ul>

              <h3 className="text-xl font-semibold text-raycast-text mb-3 mt-4">Software Usage Data</h3>
              <p>
                When you use Rosota Copilot software, we may collect anonymous usage data to improve our product, including feature usage and crash reports.
              </p>
            </section>

            {/* Cookies and Tracking Technologies */}
            <section>
              <h2 className="text-2xl font-semibold text-raycast-text mb-4">Cookies and Tracking Technologies</h2>
              <p className="mb-3">We use cookies and similar tracking technologies to:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Remember your preferences</li>
                <li>Understand how you use our website</li>
                <li>Improve our services</li>
                <li>Serve personalized advertisements</li>
              </ul>
              <p className="mt-3">
                You can control cookies through your browser settings. However, disabling cookies may limit your ability to use certain features of our website.
              </p>
            </section>

            {/* Third-Party Advertising */}
            <section>
              <h2 className="text-2xl font-semibold text-raycast-text mb-4">Third-Party Advertising</h2>
              
              <h3 className="text-xl font-semibold text-raycast-text mb-3 mt-4">Ezoic</h3>
              <p className="mb-3">
                We use Ezoic, a third-party advertising partner, to display advertisements on our website. Ezoic uses cookies and similar technologies to:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Serve personalized ads based on your interests</li>
                <li>Measure ad performance</li>
                <li>Provide analytics about site traffic</li>
                <li>Collect first-party data such as emails and phone numbers from website forms for more personalized advertising</li>
              </ul>
              <p className="mt-3">
                Ezoic may collect information including IP addresses, browser information, page views, and interaction with advertisements. For more information about Ezoic's privacy practices, please visit:{' '}
                <a 
                  href="https://www.ezoic.com/privacy-policy/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-raycast-text hover:underline"
                >
                  https://www.ezoic.com/privacy-policy/
                </a>
              </p>
              
              {/* Ezoic Privacy Policy Embed */}
              <div className="mt-6 p-4 bg-raycast-bg border border-raycast-border rounded-xl">
                <span id="ezoic-privacy-policy-embed"></span>
              </div>
              
              <p className="mt-3 text-sm text-raycast-text-secondary">
                For detailed information about cookies and data collection used by Ezoic and its partners, please visit:{' '}
                <a 
                  href="http://g.ezoic.net/privacy/rosota.store" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-raycast-text hover:underline"
                >
                  Ezoic Privacy Disclosure
                </a>
              </p>

              <h3 className="text-xl font-semibold text-raycast-text mb-3 mt-4">Google Advertising</h3>
              <p>
                Our advertising partners, including Google, may use cookies to serve ads based on your prior visits to our website. You can opt out of personalized advertising by visiting{' '}
                <a 
                  href="https://www.google.com/settings/ads" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-raycast-text hover:underline"
                >
                  Google Ads Settings
                </a>
                {' '}or{' '}
                <a 
                  href="http://www.aboutads.info/choices/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-raycast-text hover:underline"
                >
                  www.aboutads.info
                </a>.
              </p>
            </section>

            {/* How We Use Your Information */}
            <section>
              <h2 className="text-2xl font-semibold text-raycast-text mb-4">How We Use Your Information</h2>
              <p className="mb-3">We use the collected information to:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Provide and maintain our services</li>
                <li>Improve and optimize our website and software</li>
                <li>Understand user behavior and preferences</li>
                <li>Serve relevant advertisements</li>
                <li>Communicate with you about updates and features</li>
                <li>Detect and prevent fraud or abuse</li>
                <li>Comply with legal obligations</li>
              </ul>
            </section>

            {/* Data Sharing */}
            <section>
              <h2 className="text-2xl font-semibold text-raycast-text mb-4">Data Sharing and Disclosure</h2>
              <p className="mb-3">We may share your information with:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><strong>Advertising Partners:</strong> Including Ezoic and Google, to serve personalized advertisements</li>
                <li><strong>Analytics Providers:</strong> To help us understand website usage</li>
                <li><strong>Service Providers:</strong> Who assist in operating our website and services</li>
                <li><strong>Legal Requirements:</strong> When required by law or to protect our rights</li>
              </ul>
              <p className="mt-3">
                We do not sell your personal information to third parties.
              </p>
            </section>

            {/* Your Rights */}
            <section>
              <h2 className="text-2xl font-semibold text-raycast-text mb-4">Your Rights</h2>
              <p className="mb-3">Depending on your location, you may have the following rights:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><strong>Access:</strong> Request access to your personal information</li>
                <li><strong>Correction:</strong> Request correction of inaccurate information</li>
                <li><strong>Deletion:</strong> Request deletion of your personal information</li>
                <li><strong>Opt-Out:</strong> Opt out of personalized advertising</li>
                <li><strong>Data Portability:</strong> Request a copy of your data in a portable format</li>
              </ul>
              <p className="mt-3">
                To exercise these rights, please contact us at the email address provided below.
              </p>
            </section>

            {/* GDPR Compliance */}
            <section>
              <h2 className="text-2xl font-semibold text-raycast-text mb-4">GDPR Compliance (EU Users)</h2>
              <p>
                If you are located in the European Economic Area (EEA), we process your personal data based on:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4 mt-3">
                <li>Your consent (for cookies and advertising)</li>
                <li>Legitimate interests (for analytics and service improvement)</li>
                <li>Legal obligations</li>
              </ul>
            </section>

            {/* CCPA Compliance */}
            <section>
              <h2 className="text-2xl font-semibold text-raycast-text mb-4">CCPA Compliance (California Users)</h2>
              <p>
                California residents have additional rights under the California Consumer Privacy Act (CCPA), including:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4 mt-3">
                <li>Right to know what personal information is collected</li>
                <li>Right to delete personal information</li>
                <li>Right to opt-out of the sale of personal information</li>
                <li>Right to non-discrimination for exercising CCPA rights</li>
              </ul>
            </section>

            {/* Data Security */}
            <section>
              <h2 className="text-2xl font-semibold text-raycast-text mb-4">Data Security</h2>
              <p>
                We implement reasonable security measures to protect your information from unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet is 100% secure.
              </p>
            </section>

            {/* Children's Privacy */}
            <section>
              <h2 className="text-2xl font-semibold text-raycast-text mb-4">Children's Privacy</h2>
              <p>
                Our services are not intended for users under the age of 13. We do not knowingly collect personal information from children under 13. If we become aware of such collection, we will delete the information immediately.
              </p>
            </section>

            {/* International Data Transfers */}
            <section>
              <h2 className="text-2xl font-semibold text-raycast-text mb-4">International Data Transfers</h2>
              <p>
                Your information may be transferred to and processed in countries other than your country of residence. We ensure appropriate safeguards are in place for such transfers.
              </p>
            </section>

            {/* Changes to Privacy Policy */}
            <section>
              <h2 className="text-2xl font-semibold text-raycast-text mb-4">Changes to This Privacy Policy</h2>
              <p>
                We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date.
              </p>
            </section>

            {/* Contact Us */}
            <section>
              <h2 className="text-2xl font-semibold text-raycast-text mb-4">Contact Us</h2>
              <p className="mb-3">
                If you have any questions about this Privacy Policy or wish to exercise your rights, please contact us at:
              </p>
              <div className="bg-raycast-bg border border-raycast-border rounded-xl p-6 mt-4">
                <p className="font-semibold text-raycast-text mb-2">ROSOTA</p>
                <p>Email: support@rosota.run</p>
                <p>Website: <a href="https://rosota.run" className="text-raycast-text hover:underline">https://rosota.run</a></p>
              </div>
            </section>

            {/* Consent */}
            <section className="border-t border-raycast-border pt-8 mt-8">
              <p className="text-sm">
                By using our website and services, you acknowledge that you have read and understood this Privacy Policy and consent to the collection, use, and disclosure of your information as described herein.
              </p>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

