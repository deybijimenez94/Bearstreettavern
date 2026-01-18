import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms and Conditions | Bear Street Tavern',
  description: 'Read Bear Street Tavern\'s terms and conditions for using our website and services.',
};

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-white pt-24">
      {/* Hero Section */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block px-6 py-2 bg-warm-brown text-white text-xs tracking-[0.3em] mb-6 font-bold">
              LEGAL INFORMATION
            </div>
            <h1 className="font-display text-5xl md:text-7xl tracking-tight mb-6 font-black text-charcoal">
              TERMS & CONDITIONS
            </h1>
            <div className="w-32 h-1 bg-warm-brown mx-auto mb-6"></div>
            <p className="text-charcoal/70 text-lg tracking-wide">
              Please read these terms and conditions carefully before using our services
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto space-y-12">

            {/* Agreement to Terms */}
            <div>
              <h2 className="font-display text-3xl md:text-4xl tracking-tight mb-6 font-bold text-charcoal">
                Agreement to Terms
              </h2>
              <div className="w-20 h-1 bg-warm-brown mb-6"></div>
              <div className="space-y-4 text-charcoal text-base leading-relaxed">
                <p>
                  These Terms and Conditions ("Terms") constitute a legally binding agreement between you and Bear Street Tavern ("we," "our," or "us") concerning your use of our restaurant services, website, and any related services.
                </p>
                <p>
                  By accessing our website, making a reservation, placing an order, or visiting our restaurant, you agree to be bound by these Terms. If you disagree with any part of these Terms, you may not access our services.
                </p>
              </div>
            </div>

            {/* Use of Services */}
            <div>
              <h2 className="font-display text-3xl md:text-4xl tracking-tight mb-6 font-bold text-charcoal">
                Use of Our Services
              </h2>
              <div className="w-20 h-1 bg-warm-brown mb-6"></div>

              <div className="space-y-6">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="font-bold text-lg mb-3 text-charcoal">Reservations</h3>
                  <ul className="space-y-2 text-charcoal/80 text-sm">
                    <li className="flex items-start">
                      <span className="text-warm-brown mr-2">•</span>
                      <span>Reservations are subject to availability</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-warm-brown mr-2">•</span>
                      <span>We reserve the right to cancel or modify reservations in exceptional circumstances</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-warm-brown mr-2">•</span>
                      <span>Late arrivals (more than 15 minutes) may result in cancellation</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-warm-brown mr-2">•</span>
                      <span>Please notify us at least 2 hours in advance if you need to cancel</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="font-bold text-lg mb-3 text-charcoal">Online Orders</h3>
                  <ul className="space-y-2 text-charcoal/80 text-sm">
                    <li className="flex items-start">
                      <span className="text-warm-brown mr-2">•</span>
                      <span>All prices are in Canadian Dollars (CAD) and include applicable taxes unless otherwise stated</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-warm-brown mr-2">•</span>
                      <span>Payment is required at the time of order</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-warm-brown mr-2">•</span>
                      <span>We accept major credit cards and debit cards</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-warm-brown mr-2">•</span>
                      <span>Order modifications may not be possible once submitted</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Restaurant Policies */}
            <div>
              <h2 className="font-display text-3xl md:text-4xl tracking-tight mb-6 font-bold text-charcoal">
                Restaurant Policies
              </h2>
              <div className="w-20 h-1 bg-warm-brown mb-6"></div>
              <div className="space-y-4 text-charcoal text-base leading-relaxed">
                <ul className="space-y-3 ml-6">
                  <li className="flex items-start">
                    <span className="text-warm-brown font-bold mr-3">•</span>
                    <span><strong>Age Requirement:</strong> You must be of legal drinking age (18+ in Alberta) to purchase or consume alcoholic beverages</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-warm-brown font-bold mr-3">•</span>
                    <span><strong>Responsible Service:</strong> We reserve the right to refuse service to intoxicated individuals</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-warm-brown font-bold mr-3">•</span>
                    <span><strong>Dress Code:</strong> We maintain a casual dining atmosphere; however, we ask that guests dress appropriately</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-warm-brown font-bold mr-3">•</span>
                    <span><strong>Pet Policy:</strong> Pets are welcome on our patio only (service animals are welcome throughout)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-warm-brown font-bold mr-3">•</span>
                    <span><strong>Smoking:</strong> Smoking is prohibited in all indoor areas and within 5 meters of entrances</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Promotions and Specials */}
            <div>
              <h2 className="font-display text-3xl md:text-4xl tracking-tight mb-6 font-bold text-charcoal">
                Promotions and Specials
              </h2>
              <div className="w-20 h-1 bg-warm-brown mb-6"></div>
              <div className="space-y-4 text-charcoal text-base leading-relaxed">
                <ul className="space-y-3 ml-6">
                  <li className="flex items-start">
                    <span className="text-warm-brown mr-2">•</span>
                    <span>Daily specials are subject to change without notice</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-warm-brown mr-2">•</span>
                    <span>Specials are dine-in only unless otherwise specified</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-warm-brown mr-2">•</span>
                    <span>Specials may not be available on holidays or long weekends</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-warm-brown mr-2">•</span>
                    <span>Only one promotional offer may be used per transaction</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-warm-brown mr-2">•</span>
                    <span>Gift cards cannot be combined with other promotional offers</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Cancellations and Refunds */}
            <div>
              <h2 className="font-display text-3xl md:text-4xl tracking-tight mb-6 font-bold text-charcoal">
                Cancellations and Refunds
              </h2>
              <div className="w-20 h-1 bg-warm-brown mb-6"></div>
              <div className="space-y-4 text-charcoal text-base leading-relaxed">
                <p><strong>Reservation Cancellations:</strong></p>
                <ul className="space-y-2 ml-6 mb-4">
                  <li className="flex items-start">
                    <span className="text-warm-brown mr-2">•</span>
                    <span>Please cancel at least 2 hours before your reservation time</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-warm-brown mr-2">•</span>
                    <span>No-show reservations may result in restrictions on future bookings</span>
                  </li>
                </ul>

                <p><strong>Order Cancellations and Refunds:</strong></p>
                <ul className="space-y-2 ml-6">
                  <li className="flex items-start">
                    <span className="text-warm-brown mr-2">•</span>
                    <span>Orders may be cancelled within 5 minutes of placement</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-warm-brown mr-2">•</span>
                    <span>Refunds will be issued in the original form of payment</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-warm-brown mr-2">•</span>
                    <span>If you're not satisfied with your meal, please notify us immediately</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-warm-brown mr-2">•</span>
                    <span>Gift cards are non-refundable</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Food Allergies */}
            <div>
              <h2 className="font-display text-3xl md:text-4xl tracking-tight mb-6 font-bold text-charcoal">
                Food Allergies and Dietary Restrictions
              </h2>
              <div className="w-20 h-1 bg-warm-brown mb-6"></div>
              <div className="space-y-4 text-charcoal text-base leading-relaxed">
                <p>
                  While we make every effort to accommodate food allergies and dietary restrictions, we cannot guarantee that our food is completely free from allergens. Our kitchen handles common allergens including wheat, milk, eggs, soy, tree nuts, peanuts, and shellfish.
                </p>
                <p>
                  <strong>Please inform your server of any allergies or dietary restrictions.</strong> Cross-contamination is possible, and we cannot be held liable for allergic reactions.
                </p>
              </div>
            </div>

            {/* Intellectual Property */}
            <div>
              <h2 className="font-display text-3xl md:text-4xl tracking-tight mb-6 font-bold text-charcoal">
                Intellectual Property Rights
              </h2>
              <div className="w-20 h-1 bg-warm-brown mb-6"></div>
              <div className="space-y-4 text-charcoal text-base leading-relaxed">
                <p>
                  All content on our website, including text, graphics, logos, images, and software, is the property of Bear Street Tavern or its content suppliers and is protected by Canadian and international copyright laws.
                </p>
                <p>
                  You may not reproduce, distribute, modify, create derivative works of, publicly display, or exploit any of our content without our express written permission.
                </p>
              </div>
            </div>

            {/* Limitation of Liability */}
            <div>
              <h2 className="font-display text-3xl md:text-4xl tracking-tight mb-6 font-bold text-charcoal">
                Limitation of Liability
              </h2>
              <div className="w-20 h-1 bg-warm-brown mb-6"></div>
              <div className="space-y-4 text-charcoal text-base leading-relaxed">
                <p>
                  To the maximum extent permitted by law, Bear Street Tavern shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenues, whether incurred directly or indirectly.
                </p>
                <p>
                  Our total liability to you for any claims arising from your use of our services shall not exceed the amount you paid for the relevant product or service.
                </p>
              </div>
            </div>

            {/* Photography and Social Media */}
            <div>
              <h2 className="font-display text-3xl md:text-4xl tracking-tight mb-6 font-bold text-charcoal">
                Photography and Social Media
              </h2>
              <div className="w-20 h-1 bg-warm-brown mb-6"></div>
              <div className="space-y-4 text-charcoal text-base leading-relaxed">
                <p>
                  By visiting our restaurant, you consent to being photographed or filmed. These images may be used for promotional purposes on our website, social media, or marketing materials.
                </p>
                <p>
                  When you tag us on social media or use our hashtags, you grant us permission to share your content on our platforms.
                </p>
              </div>
            </div>

            {/* Governing Law */}
            <div>
              <h2 className="font-display text-3xl md:text-4xl tracking-tight mb-6 font-bold text-charcoal">
                Governing Law
              </h2>
              <div className="w-20 h-1 bg-warm-brown mb-6"></div>
              <div className="space-y-4 text-charcoal text-base leading-relaxed">
                <p>
                  These Terms shall be governed by and construed in accordance with the laws of the Province of Alberta and the federal laws of Canada applicable therein, without regard to conflict of law provisions.
                </p>
                <p>
                  Any disputes arising from these Terms shall be subject to the exclusive jurisdiction of the courts of Alberta.
                </p>
              </div>
            </div>

            {/* Changes to Terms */}
            <div>
              <h2 className="font-display text-3xl md:text-4xl tracking-tight mb-6 font-bold text-charcoal">
                Changes to These Terms
              </h2>
              <div className="w-20 h-1 bg-warm-brown mb-6"></div>
              <div className="space-y-4 text-charcoal text-base leading-relaxed">
                <p>
                  We reserve the right to modify these Terms at any time. We will notify users of any material changes by posting the new Terms on this page and updating the "Last Updated" date.
                </p>
                <p>
                  Your continued use of our services after changes are posted constitutes acceptance of the modified Terms.
                </p>
              </div>
            </div>

            {/* Contact Information */}
            <div className="bg-black text-white p-10 rounded-lg">
              <h2 className="font-display text-3xl md:text-4xl tracking-tight mb-6 font-bold">
                Questions About These Terms?
              </h2>
              <div className="w-20 h-1 bg-white mb-6"></div>
              <p className="text-white/80 mb-6 leading-relaxed">
                If you have any questions about these Terms and Conditions, please contact us:
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
