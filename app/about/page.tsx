import Link from 'next/link';
import Image from 'next/image';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us | Bear Street Tavern | Our Story in Banff',
  description: 'Learn about Bear Street Tavern, Banff\'s award-winning pizza destination featured on "You Gotta Eat Here." Discover our story, pet-friendly philosophy, and commitment to quality.',
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white pt-24">
      {/* Hero Section with Background */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/2019_BearStreetTavern_ScenicDining_PaulZizka.jpg"
            alt="Bear Street Tavern Interior"
            fill
            style={{ objectFit: 'cover' }}
            quality={100}
            className="opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-white"></div>
        </div>

        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <div className="inline-block px-6 py-2 bg-warm-brown text-white text-xs tracking-[0.3em] mb-6 font-bold">
            OUR STORY
          </div>
          <h1 className="font-display text-6xl md:text-8xl tracking-tight mb-6 font-black text-white">
            ABOUT US
          </h1>
          <div className="w-32 h-1 bg-white mx-auto mb-6"></div>
          <p className="text-white text-xl tracking-wide font-medium">
            Serving Banff's Best Pizza Since Day One
          </p>
        </div>
      </section>

      {/* Main Story Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
              <div>
                <h2 className="font-display text-4xl md:text-5xl tracking-tight mb-6 font-black text-charcoal">
                  WELCOME TO BEAR STREET TAVERN
                </h2>
                <div className="w-24 h-1 bg-warm-brown mb-6"></div>
                <p className="text-charcoal text-lg leading-relaxed mb-4">
                  Nestled in the heart of Banff on Bear Street, we're proud to serve what locals and visitors alike call <strong>"Banff's Best Pizza"</strong> — featured on the hit TV show <strong>"You Gotta Eat Here"</strong> with John Catucci.
                </p>
                <p className="text-charcoal text-lg leading-relaxed mb-4">
                  Our tavern combines premium oven-baked pizzas, craft beers from <strong>Three Bears Brewery</strong>, and genuine mountain hospitality in a welcoming atmosphere that feels like home.
                </p>
                <p className="text-charcoal text-lg leading-relaxed">
                  Whether you're cozying up in a booth for two or bringing friends and family to take over a table for 20, we've got the perfect spot for you.
                </p>
              </div>
              <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
                <Image
                  src="/images/Patio/patio3.jpg"
                  alt="Bear Street Tavern Interior"
                  fill
                  style={{ objectFit: 'cover' }}
                  className="hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Awards & Recognition */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-display text-4xl md:text-5xl tracking-tight mb-6 font-black text-charcoal">
              AWARDS & RECOGNITION
            </h2>
            <div className="w-24 h-1 bg-warm-brown mx-auto"></div>
          </div>

          <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-8">
            {/* You Gotta Eat Here */}
            <div className="bg-white border-2 border-gray-200 p-8 rounded-lg text-center hover:shadow-lg transition-shadow">
              <div className="relative h-48 mb-6 rounded-lg overflow-hidden bg-gray-50">
                <Image
                  src="/images/AWARDS & RECOGNITION/YOU GOTTA EAT HERE.jpg"
                  alt="You Gotta Eat Here"
                  fill
                  style={{ objectFit: 'contain' }}
                  className="p-4"
                />
              </div>
              <h3 className="font-display text-xl tracking-wider mb-3 font-bold text-charcoal">
                YOU GOTTA EAT HERE
              </h3>
              <p className="text-charcoal/70">
                Featured on the popular Food Network show, showcasing our award-winning pizzas to a national audience.
              </p>
            </div>

            {/* Best Pizza */}
            <div className="bg-white border-2 border-gray-200 p-8 rounded-lg text-center hover:shadow-lg transition-shadow">
              <div className="relative h-48 mb-6 rounded-lg overflow-hidden bg-gray-50">
                <Image
                  src="/images/AWARDS & RECOGNITION/RESTAURANT GURU 2019.jpg"
                  alt="Restaurant Guru 2019"
                  fill
                  style={{ objectFit: 'contain' }}
                  className="p-4"
                />
              </div>
              <h3 className="font-display text-xl tracking-wider mb-3 font-bold text-charcoal">
                RESTAURANT GURU 2019
              </h3>
              <p className="text-charcoal/70">
                Recognized as "Best Pizza" for our commitment to quality and authentic flavors.
              </p>
            </div>

            {/* OpenTable */}
            <div className="bg-white border-2 border-gray-200 p-8 rounded-lg text-center hover:shadow-lg transition-shadow">
              <div className="relative h-48 mb-6 rounded-lg overflow-hidden bg-gray-50">
                <Image
                  src="/images/AWARDS & RECOGNITION/OPENTABLE 2024.jpg"
                  alt="OpenTable 2024"
                  fill
                  style={{ objectFit: 'contain' }}
                  className="p-4"
                />
              </div>
              <h3 className="font-display text-xl tracking-wider mb-3 font-bold text-charcoal">
                OPENTABLE 2024
              </h3>
              <p className="text-charcoal/70">
                Honored with OpenTable's Diners' Choice Award for exceptional dining experiences.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What Makes Us Special */}
      <section className="py-16 md:py-24 bg-black text-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-display text-4xl md:text-5xl tracking-tight mb-6 font-black">
              WHAT MAKES US SPECIAL
            </h2>
            <div className="w-24 h-1 bg-white mx-auto"></div>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12">
              {/* Pet Friendly */}
              <div className="flex items-start space-x-6">
                <div className="flex-shrink-0 w-20 h-20 rounded-full overflow-hidden border-4 border-warm-brown">
                  <div className="relative w-full h-full">
                    <Image
                      src="/images/Pets/Pet1.jpg"
                      alt="Pet Friendly"
                      fill
                      style={{ objectFit: 'cover' }}
                    />
                  </div>
                </div>
                <div>
                  <h3 className="font-display text-2xl tracking-wider mb-3 font-bold">
                    100% PET-FRIENDLY
                  </h3>
                  <p className="text-white/80 leading-relaxed">
                    We're proudly pet-friendly! Bring your furry friends to our year-round heated patio with cozy firepits. We even have a <strong>special menu for dogs and dog-friendly beer</strong> so your four-legged companions can enjoy the experience too.
                  </p>
                </div>
              </div>

              {/* Craft Beer */}
              <div className="flex items-start space-x-6">
                <div className="flex-shrink-0 w-20 h-20 rounded-full overflow-hidden border-4 border-warm-brown">
                  <div className="relative w-full h-full">
                    <Image
                      src="/images/Drinks/Drink8.jpg"
                      alt="Three Bears Brewery"
                      fill
                      style={{ objectFit: 'cover' }}
                    />
                  </div>
                </div>
                <div>
                  <h3 className="font-display text-2xl tracking-wider mb-3 font-bold">
                    THREE BEARS BREWERY
                  </h3>
                  <p className="text-white/80 leading-relaxed">
                    Featuring exclusive craft beers from Three Bears Brewery, along with a full selection of craft beers, cocktails, and beverages carefully curated to complement your meal.
                  </p>
                </div>
              </div>

              {/* Family Welcome */}
              <div className="flex items-start space-x-6">
                <div className="flex-shrink-0 w-20 h-20 rounded-full overflow-hidden border-4 border-warm-brown">
                  <div className="relative w-full h-full">
                    <Image
                      src="/images/Patio/Patio4.jpg"
                      alt="Family Friendly"
                      fill
                      style={{ objectFit: 'cover' }}
                    />
                  </div>
                </div>
                <div>
                  <h3 className="font-display text-2xl tracking-wider mb-3 font-bold">
                    FAMILY FRIENDLY
                  </h3>
                  <p className="text-white/80 leading-relaxed">
                    Children are most welcome! Whether it's a family dinner or a celebration, we provide a warm and welcoming atmosphere for guests of all ages.
                  </p>
                </div>
              </div>

              {/* Quality */}
              <div className="flex items-start space-x-6">
                <div className="flex-shrink-0 w-20 h-20 rounded-full overflow-hidden border-4 border-warm-brown">
                  <div className="relative w-full h-full">
                    <Image
                      src="/images/Food/Food10.jpg"
                      alt="Quality Ingredients"
                      fill
                      style={{ objectFit: 'cover' }}
                    />
                  </div>
                </div>
                <div>
                  <h3 className="font-display text-2xl tracking-wider mb-3 font-bold">
                    QUALITY INGREDIENTS
                  </h3>
                  <p className="text-white/80 leading-relaxed">
                    We use 24-hour fermented dough, organic San Marzano sauce, and the freshest toppings to create our signature oven-baked pizzas that keep people coming back.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Philosophy */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-display text-4xl md:text-5xl tracking-tight mb-6 font-black text-charcoal">
              OUR PHILOSOPHY
            </h2>
            <div className="w-24 h-1 bg-warm-brown mx-auto mb-8"></div>
            <p className="text-charcoal text-xl leading-relaxed mb-6">
              At Bear Street Tavern, we believe in creating more than just great food — we create experiences and memories that last a lifetime in the heart of the Canadian Rockies.
            </p>
            <p className="text-charcoal text-lg leading-relaxed">
              Part of the renowned <strong>Banff Hospitality Collective</strong>, we're committed to quality, community, and delivering genuine mountain hospitality. Whether you're a local or visiting from around the world, we want you to feel at home from the moment you walk through our doors.
            </p>
          </div>
        </div>
      </section>

      {/* Location & Hours */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-display text-4xl md:text-5xl tracking-tight mb-6 font-black text-charcoal">
                VISIT US
              </h2>
              <div className="w-24 h-1 bg-warm-brown mx-auto"></div>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Location */}
              <div className="bg-white border-2 border-gray-200 p-8 rounded-lg">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-warm-brown rounded-full flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <h3 className="font-display text-2xl tracking-wider font-bold text-charcoal">
                    LOCATION
                  </h3>
                </div>
                <p className="text-charcoal font-bold mb-1">211 Bear Street</p>
                <p className="text-charcoal/70 mb-1">Banff, Alberta T1L 1A1</p>
                <p className="text-charcoal/70 mb-4">Canada</p>
                <p className="text-charcoal/70 text-sm">
                  Located in the heart of downtown Banff, just steps from all the main attractions.
                </p>
              </div>

              {/* Hours */}
              <div className="bg-white border-2 border-gray-200 p-8 rounded-lg">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-warm-brown rounded-full flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="font-display text-2xl tracking-wider font-bold text-charcoal">
                    HOURS
                  </h3>
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between items-center border-b border-gray-200 pb-2">
                    <span className="font-bold text-charcoal">Monday - Sunday</span>
                    <span className="text-charcoal/70">12:00 PM - 9:00 PM</span>
                  </div>
                  <p className="text-charcoal/70 text-sm mt-4">
                    <strong>Kitchen closes at 9:00 PM</strong><br />
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-black text-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-display text-4xl md:text-5xl tracking-tight mb-8 font-black">
              READY TO EXPERIENCE BANFF'S BEST PIZZA?
            </h2>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                href="/reservations"
                className="bg-white text-black hover:bg-white/90 px-12 py-4 font-bold text-sm tracking-[0.3em] transition-all border-2 border-white hover:scale-105"
              >
                BOOK A TABLE
              </Link>
              <Link
                href="/order-online"
                className="bg-warm-brown text-white hover:bg-warm-brown/90 px-12 py-4 font-bold text-sm tracking-[0.3em] transition-all border-2 border-warm-brown hover:scale-105"
              >
                ORDER ONLINE
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Back to Home */}
      <section className="py-16 bg-white">
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
