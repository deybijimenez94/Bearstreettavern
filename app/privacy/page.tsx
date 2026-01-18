import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy | Bear Street Tavern',
  description: 'Read Bear Street Tavern\'s privacy policy to understand how we collect, use, and protect your personal information.',
};

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-white pt-24">
      {/* Hero Section */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block px-6 py-2 bg-warm-brown text-white text-xs tracking-[0.3em] mb-6 font-bold">
              YOUR PRIVACY MATTERS
            </div>
            <h1 className="font-display text-5xl md:text-7xl tracking-tight mb-6 font-black text-charcoal">
              PRIVACY POLICY
            </h1>
            <div className="w-32 h-1 bg-warm-brown mx-auto mb-6"></div>
            <p className="text-charcoal/70 text-lg tracking-wide">
              How we collect, use, and protect your personal information
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto space-y-12">

            {/* Introduction */}
            <div>
              <h2 className="font-display text-3xl md:text-4xl tracking-tight mb-6 font-bold text-charcoal">
                Introduction
              </h2>
              <div className="w-20 h-1 bg-warm-brown mb-6"></div>
              <div className="space-y-4 text-charcoal text-base leading-relaxed">
                <p>
                  Bear Street Tavern ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our restaurant, use our website, or engage with our services.
                </p>
                <p>
                  By using our services, you agree to the collection and use of information in accordance with this policy. If you do not agree with our policies and practices, please do not use our services.
                </p>
              </div>
            </div>

            {/* Information We Collect */}
            <div>
              <h2 className="font-display text-3xl md:text-4xl tracking-tight mb-6 font-bold text-charcoal">
                Information We Collect
              </h2>
              <div className="w-20 h-1 bg-warm-brown mb-6"></div>

              <div className="space-y-6">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="font-bold text-lg mb-3 text-charcoal">Personal Information</h3>
                  <p className="text-charcoal/80 text-sm mb-3">
                    We may collect personal information that you voluntarily provide to us when you:
                  </p>
                  <ul className="space-y-2 text-charcoal/80 text-sm ml-6">
                    <li className="flex items-start">
                      <span className="text-warm-brown mr-2">•</span>
                      <span>Make a reservation (name, phone number, email, party size)</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-warm-brown mr-2">•</span>
                      <span>Place an online order (name, email, phone, delivery address, payment information)</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-warm-brown mr-2">•</span>
                      <span>Subscribe to our newsletter (email address)</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-warm-brown mr-2">•</span>
                      <span>Contact us through our website or social media</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-warm-brown mr-2">•</span>
                      <span>Participate in promotions or contests</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="font-bold text-lg mb-3 text-charcoal">Automatically Collected Information</h3>
                  <p className="text-charcoal/80 text-sm mb-3">
                    When you visit our website, we may automatically collect certain information about your device, including:
                  </p>
                  <ul className="space-y-2 text-charcoal/80 text-sm ml-6">
                    <li className="flex items-start">
                      <span className="text-warm-brown mr-2">•</span>
                      <span>IP address and browser type</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-warm-brown mr-2">•</span>
                      <span>Operating system and device information</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-warm-brown mr-2">•</span>
                      <span>Pages visited and time spent on our website</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-warm-brown mr-2">•</span>
                      <span>Referring website addresses</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* How We Use Your Information */}
            <div>
              <h2 className="font-display text-3xl md:text-4xl tracking-tight mb-6 font-bold text-charcoal">
                How We Use Your Information
              </h2>
              <div className="w-20 h-1 bg-warm-brown mb-6"></div>
              <div className="space-y-4 text-charcoal text-base leading-relaxed">
                <p>We use the information we collect to:</p>
                <ul className="space-y-3 ml-6">
                  <li className="flex items-start">
                    <span className="text-warm-brown font-bold mr-3">✓</span>
                    <span>Process reservations and orders</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-warm-brown font-bold mr-3">✓</span>
                    <span>Communicate with you about your reservation, order, or inquiry</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-warm-brown font-bold mr-3">✓</span>
                    <span>Send you promotional materials and special offers (with your consent)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-warm-brown font-bold mr-3">✓</span>
                    <span>Improve our services and customer experience</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-warm-brown font-bold mr-3">✓</span>
                    <span>Analyze website usage and trends</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-warm-brown font-bold mr-3">✓</span>
                    <span>Comply with legal obligations</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-warm-brown font-bold mr-3">✓</span>
                    <span>Prevent fraud and ensure security</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Information Sharing */}
            <div>
              <h2 className="font-display text-3xl md:text-4xl tracking-tight mb-6 font-bold text-charcoal">
                Information Sharing and Disclosure
              </h2>
              <div className="w-20 h-1 bg-warm-brown mb-6"></div>
              <div className="space-y-4 text-charcoal text-base leading-relaxed">
                <p>
                  We do not sell, trade, or rent your personal information to third parties. We may share your information only in the following circumstances:
                </p>
                <ul className="space-y-3 ml-6">
                  <li className="flex items-start">
                    <span className="text-warm-brown font-bold mr-3">•</span>
                    <span><strong>Service Providers:</strong> Third-party vendors who help us operate our business (payment processors, email service providers, reservation systems)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-warm-brown font-bold mr-3">•</span>
                    <span><strong>Legal Requirements:</strong> When required by law or to protect our rights</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-warm-brown font-bold mr-3">•</span>
                    <span><strong>Business Transfers:</strong> In connection with a merger, sale, or acquisition</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-warm-brown font-bold mr-3">•</span>
                    <span><strong>With Your Consent:</strong> When you have given us explicit permission</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Cookies */}
            <div>
              <h2 className="font-display text-3xl md:text-4xl tracking-tight mb-6 font-bold text-charcoal">
                Cookies and Tracking Technologies
              </h2>
              <div className="w-20 h-1 bg-warm-brown mb-6"></div>
              <div className="space-y-4 text-charcoal text-base leading-relaxed">
                <p>
                  We use cookies and similar tracking technologies to track activity on our website and hold certain information. Cookies are files with small amounts of data that may include an anonymous unique identifier.
                </p>
                <p>
                  You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, you may not be able to use some portions of our website.
                </p>
              </div>
            </div>

            {/* Data Security */}
            <div>
              <h2 className="font-display text-3xl md:text-4xl tracking-tight mb-6 font-bold text-charcoal">
                Data Security
              </h2>
              <div className="w-20 h-1 bg-warm-brown mb-6"></div>
              <div className="space-y-4 text-charcoal text-base leading-relaxed">
                <p>
                  We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.
                </p>
                <p>
                  However, please note that no method of transmission over the Internet or electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your personal information, we cannot guarantee its absolute security.
                </p>
              </div>
            </div>

            {/* Your Rights */}
            <div>
              <h2 className="font-display text-3xl md:text-4xl tracking-tight mb-6 font-bold text-charcoal">
                Your Privacy Rights
              </h2>
              <div className="w-20 h-1 bg-warm-brown mb-6"></div>
              <div className="space-y-4 text-charcoal text-base leading-relaxed">
                <p>You have the right to:</p>
                <ul className="space-y-3 ml-6">
                  <li className="flex items-start">
                    <span className="text-warm-brown font-bold mr-3">✓</span>
                    <span>Access the personal information we hold about you</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-warm-brown font-bold mr-3">✓</span>
                    <span>Request correction of inaccurate or incomplete information</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-warm-brown font-bold mr-3">✓</span>
                    <span>Request deletion of your personal information</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-warm-brown font-bold mr-3">✓</span>
                    <span>Opt-out of marketing communications at any time</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-warm-brown font-bold mr-3">✓</span>
                    <span>Object to processing of your personal information</span>
                  </li>
                </ul>
                <p className="mt-4">
                  To exercise any of these rights, please contact us using the information provided below.
                </p>
              </div>
            </div>

            {/* Children's Privacy */}
            <div>
              <h2 className="font-display text-3xl md:text-4xl tracking-tight mb-6 font-bold text-charcoal">
                Children's Privacy
              </h2>
              <div className="w-20 h-1 bg-warm-brown mb-6"></div>
              <div className="space-y-4 text-charcoal text-base leading-relaxed">
                <p>
                  Our services are not directed to individuals under the age of 18. We do not knowingly collect personal information from children under 18. If you become aware that a child has provided us with personal information, please contact us, and we will take steps to delete such information.
                </p>
              </div>
            </div>

            {/* Changes to Privacy Policy */}
            <div>
              <h2 className="font-display text-3xl md:text-4xl tracking-tight mb-6 font-bold text-charcoal">
                Changes to This Privacy Policy
              </h2>
              <div className="w-20 h-1 bg-warm-brown mb-6"></div>
              <div className="space-y-4 text-charcoal text-base leading-relaxed">
                <p>
                  We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date.
                </p>
                <p>
                  You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are effective when they are posted on this page.
                </p>
              </div>
            </div>

            {/* Contact Information */}
            <div className="bg-black text-white p-10 rounded-lg">
              <h2 className="font-display text-3xl md:text-4xl tracking-tight mb-6 font-bold">
                Contact Us
              </h2>
              <div className="w-20 h-1 bg-white mb-6"></div>
              <p className="text-white/80 mb-6 leading-relaxed">
                If you have any questions about this Privacy Policy or our privacy practices, please contact us:
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-warm-brown" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <span>Phone: 403.762.2021</span>
                </div>
                <div className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-warm-brown" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span>Email: info@bearstreettavern.ca</span>
                </div>
                <div className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-warm-brown mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <div>
                    <span className="block">Bear Street Tavern</span>
                    <span className="block">211 Bear Street</span>
                    <span className="block">Banff, AB T1L 1A1, Canada</span>
                  </div>
                </div>
              </div>
              <div className="mt-8">
                <Link
                  href="/contact"
                  className="inline-block bg-white text-black hover:bg-white/90 px-10 py-4 font-bold text-sm tracking-[0.3em] transition-all border-2 border-white"
                >
                  CONTACT US
                </Link>
              </div>
            </div>

            {/* Last Updated */}
            <div className="text-center pt-8">
              <p className="text-charcoal/50 text-sm">
                Last updated: January 2026
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Back to Home */}
      <section className="py-12 bg-gray-50">
        <div className="text-center">
          <Link
            href="/"
            className="inline-block bg-black text-white hover:bg-charcoal px-12 py-4 font-bold text-sm tracking-[0.3em] transition-all border-2 border-black"
          >
            BACK TO HOME
          </Link>
        </div>
      </section>
    </main>
  );
}
