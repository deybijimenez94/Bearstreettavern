import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Accessibility Statement | Bear Street Tavern',
  description: 'Bear Street Tavern is committed to ensuring accessibility for all guests. Learn about our accessibility features and accommodations.',
};

export default function AccessibilityPage() {
  return (
    <main className="min-h-screen bg-white pt-24">
      {/* Hero Section */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block px-6 py-2 bg-warm-brown text-white text-xs tracking-[0.3em] mb-6 font-bold">
              ACCESSIBILITY
            </div>
            <h1 className="font-display text-5xl md:text-7xl tracking-tight mb-6 font-black text-charcoal">
              ACCESSIBILITY STATEMENT
            </h1>
            <div className="w-32 h-1 bg-warm-brown mx-auto mb-6"></div>
            <p className="text-charcoal/70 text-lg tracking-wide">
              Bear Street Tavern is committed to providing an inclusive and accessible environment for all guests
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto space-y-12">

            {/* Our Commitment */}
            <div>
              <h2 className="font-display text-3xl md:text-4xl tracking-tight mb-6 font-bold text-charcoal">
                Our Commitment
              </h2>
              <div className="w-20 h-1 bg-warm-brown mb-6"></div>
              <div className="space-y-4 text-charcoal text-base leading-relaxed">
                <p>
                  At Bear Street Tavern, we believe that everyone should be able to enjoy great food, drinks, and hospitality. We are committed to ensuring that our restaurant is accessible to all guests, including those with disabilities.
                </p>
                <p>
                  We continuously work to improve accessibility at our establishment and welcome feedback on how we can better serve all members of our community.
                </p>
              </div>
            </div>

            {/* Physical Accessibility */}
            <div>
              <h2 className="font-display text-3xl md:text-4xl tracking-tight mb-6 font-bold text-charcoal">
                Physical Accessibility
              </h2>
              <div className="w-20 h-1 bg-warm-brown mb-6"></div>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="font-bold text-lg mb-3 text-charcoal">Entrance & Seating</h3>
                  <ul className="space-y-2 text-charcoal/80 text-sm">
                    <li className="flex items-start">
                      <span className="text-warm-brown mr-2">•</span>
                      <span>Accessible entrance with level access</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-warm-brown mr-2">•</span>
                      <span>Wheelchair-accessible seating available</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-warm-brown mr-2">•</span>
                      <span>Wide aisles for easy navigation</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-warm-brown mr-2">•</span>
                      <span>Year-round heated patio with accessible seating</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="font-bold text-lg mb-3 text-charcoal">Facilities</h3>
                  <ul className="space-y-2 text-charcoal/80 text-sm">
                    <li className="flex items-start">
                      <span className="text-warm-brown mr-2">•</span>
                      <span>Accessible restroom facilities</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-warm-brown mr-2">•</span>
                      <span>Well-lit dining areas</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-warm-brown mr-2">•</span>
                      <span>Service animals welcome</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-warm-brown mr-2">•</span>
                      <span>Accessible parking nearby</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Dietary Accommodations */}
            <div>
              <h2 className="font-display text-3xl md:text-4xl tracking-tight mb-6 font-bold text-charcoal">
                Dietary Accommodations
              </h2>
              <div className="w-20 h-1 bg-warm-brown mb-6"></div>
              <div className="space-y-4 text-charcoal text-base leading-relaxed">
                <p>
                  We understand that dietary needs vary and are happy to accommodate:
                </p>
                <ul className="space-y-3 ml-6">
                  <li className="flex items-start">
                    <span className="text-warm-brown font-bold mr-3">✓</span>
                    <span><strong>Gluten-Free Options:</strong> Gluten-free pizza crusts available (+$4.50)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-warm-brown font-bold mr-3">✓</span>
                    <span><strong>Vegetarian & Vegan:</strong> Multiple vegetarian pizzas and vegan cheese/meat alternatives (+$5)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-warm-brown font-bold mr-3">✓</span>
                    <span><strong>Allergy Information:</strong> Please inform your server of any food allergies</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-warm-brown font-bold mr-3">✓</span>
                    <span><strong>Custom Modifications:</strong> We're happy to modify menu items when possible</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Website Accessibility */}
            <div>
              <h2 className="font-display text-3xl md:text-4xl tracking-tight mb-6 font-bold text-charcoal">
                Website Accessibility
              </h2>
              <div className="w-20 h-1 bg-warm-brown mb-6"></div>
              <div className="space-y-4 text-charcoal text-base leading-relaxed">
                <p>
                  We strive to ensure that our website is accessible to everyone. Our website features:
                </p>
                <ul className="space-y-3 ml-6">
                  <li className="flex items-start">
                    <span className="text-warm-brown font-bold mr-3">✓</span>
                    <span>Clear navigation and structure</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-warm-brown font-bold mr-3">✓</span>
                    <span>Alt text for images</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-warm-brown font-bold mr-3">✓</span>
                    <span>Keyboard navigation support</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-warm-brown font-bold mr-3">✓</span>
                    <span>Readable fonts and color contrast</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-warm-brown font-bold mr-3">✓</span>
                    <span>Mobile-responsive design</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Communication */}
            <div>
              <h2 className="font-display text-3xl md:text-4xl tracking-tight mb-6 font-bold text-charcoal">
                Communication & Assistance
              </h2>
              <div className="w-20 h-1 bg-warm-brown mb-6"></div>
              <div className="space-y-4 text-charcoal text-base leading-relaxed">
                <p>
                  Our staff is trained to assist guests with various needs:
                </p>
                <ul className="space-y-3 ml-6">
                  <li className="flex items-start">
                    <span className="text-warm-brown font-bold mr-3">✓</span>
                    <span>Patient and attentive service</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-warm-brown font-bold mr-3">✓</span>
                    <span>Assistance with menu navigation</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-warm-brown font-bold mr-3">✓</span>
                    <span>Quiet seating areas available upon request</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-warm-brown font-bold mr-3">✓</span>
                    <span>Multiple ways to order: in-person, phone, or online</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Feedback */}
            <div className="bg-black text-white p-10 rounded-lg">
              <h2 className="font-display text-3xl md:text-4xl tracking-tight mb-6 font-bold">
                We Value Your Feedback
              </h2>
              <div className="w-20 h-1 bg-white mb-6"></div>
              <p className="text-white/80 mb-6 leading-relaxed">
                If you have any accessibility concerns or suggestions for how we can improve, please don't hesitate to contact us. Your feedback helps us create a better experience for all guests.
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
                <div className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-warm-brown" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span>211 Bear Street, Banff, AB T1L 1A1</span>
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
