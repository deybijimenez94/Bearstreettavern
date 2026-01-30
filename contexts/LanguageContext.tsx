'use client';

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

type Language = 'en' | 'fr';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations: Record<Language, Record<string, string>> = {
  en: {
    // Header
    'header.home': 'HOME',
    'header.menu': 'MENU',
    'header.about': 'ABOUT',
    'header.reservations': 'RESERVATIONS',
    'header.gallery': 'GALLERY',
    'header.contact': 'CONTACT',
    'header.bookNow': 'BOOK NOW',

    // Home Page - Hero
    'home.hero.location': 'BANFF, ALBERTA',
    'home.hero.bearStreet': 'BEAR STREET',
    'home.hero.tavern': 'TAVERN',
    'home.hero.badge': 'AS SEEN ON "YOU GOTTA EAT HERE"',

    // Home Page - Pizzas
    'home.pizzas.title': 'SIGNATURE PIZZAS',
    'home.pizzas.subtitle': 'Oven-Baked Perfection',
    'home.pizzas.viewMenu': 'FULL MENU',
    'home.pizzas.godfather': 'THE GODFATHER',
    'home.pizzas.godfatherDesc': 'Italian sausage, prosciutto, confit garlic, truffle oil',
    'home.pizzas.bigBird': 'BIG BIRD',
    'home.pizzas.bigBirdDesc': 'Spinach, bacon, red onion, goat cheese, pesto chicken',
    'home.pizzas.margarita': 'MARGARITA',
    'home.pizzas.margaritaDesc': 'Italian sauce, four cheese, fresh basil, sea salt',
    'home.pizzas.awardWinning': 'AWARD-WINNING',
    'home.pizzas.popular': 'POPULAR',
    'home.pizzas.vegetarian': 'VEGETARIAN',

    // Home Page - Highlights
    'home.highlights.title': 'WHAT MAKES US SPECIAL',
    'home.highlights.petFriendly': '100% PET-FRIENDLY',
    'home.highlights.petFriendlyDesc': 'Year-round heated patio with cozy firepits. We have a special menu for dogs and dog-friendly beer so your furry friends can enjoy the experience too!',
    'home.highlights.craftBeers': 'CRAFT BEERS & DRINKS',
    'home.highlights.craftBeersDesc': 'Featuring exclusive brews from Three Bears Brewery and a full selection of craft beers, cocktails, and beverages to complement your meal.',
    'home.highlights.crazySpecials': 'CRAZY SPECIALS',
    'home.highlights.crazySpecialsDesc': '50% OFF select pizzas every Sunday and Monday from 5pm',
    'home.highlights.viewSpecials': 'VIEW SPECIALS',

    // Home Page - Instagram
    'home.instagram.title': 'SHARE YOUR MOMENTS',
    'home.instagram.subtitle': 'Tag us @bearstreettavern in your photos',
    'home.instagram.followUs': 'FOLLOW US',

    // Home Page - About
    'home.about.title': 'OUR STORY',
    'home.about.text1': 'Nestled in the heart of Banff on Bear Street, we\'re proud to serve what locals and visitors alike call "Banff\'s Best Pizza" — featured on the hit TV show "You Gotta Eat Here."',
    'home.about.text2': 'Our tavern combines premium oven-baked pizzas, craft beers from Three Bears Brewery, and genuine mountain hospitality in a welcoming atmosphere.',
    'home.about.text3': 'We\'re proudly pet-friendly! Bring your furry friends to our year-round heated patio with cozy firepits. We even have a special menu for dogs and dog-friendly beer so your four-legged companions can enjoy the experience too.',
    'home.about.text4': 'Part of the renowned Banff Hospitality Collective, we\'re committed to quality, community, and creating memories that last in the heart of the Rockies.',
    'home.about.learnMore': 'LEARN MORE',

    // Home Page - Testimonials
    'home.testimonials.title': 'WHAT OUR GUESTS SAY',
    'home.testimonials.subtitle': 'Real experiences from real people',

    // Home Page - CTA
    'home.cta.title': 'READY TO DINE?',
    'home.cta.bookTable': 'BOOK TABLE',
    'home.cta.location': 'LOCATION',
    'home.cta.address1': '211 BEAR STREET',
    'home.cta.address2': 'BANFF, AB',
    'home.cta.phone': 'PHONE',
    'home.cta.hours': 'HOURS',
    'home.cta.hoursValue': 'Daily 11:30AM - 9PM',

    // Footer
    'footer.newsletter': 'STAY UPDATED',
    'footer.newsletterDesc': 'GET EXCLUSIVE DEALS & SPECIAL OFFERS',
    'footer.subscribe': 'SUBSCRIBE',
    'footer.subscribing': 'SENDING...',
    'footer.subscribed': 'SUBSCRIBED SUCCESSFULLY',
    'footer.email': 'YOUR EMAIL',
    'footer.menu': 'MENU',
    'footer.home': 'HOME',
    'footer.menuLink': 'MENU',
    'footer.orderOnline': 'ORDER ONLINE',
    'footer.reservations': 'RESERVATIONS',
    'footer.giftCards': 'GIFT CARDS',
    'footer.specials': 'SPECIALS',
    'footer.contact': 'CONTACT',
    'footer.address': 'ADDRESS',
    'footer.address1': '211 Bear Street',
    'footer.address2': 'Banff, AB',
    'footer.phone': 'PHONE',
    'footer.hours': 'HOURS',
    'footer.hoursValue': 'Daily 11:30AM-9PM',
    'footer.followUs': 'FOLLOW US',
    'footer.emailLabel': 'EMAIL',
    'footer.emailAddress': 'INFO@BEARSTREETTAVERN.CA',
    'footer.copyright': 'BEAR STREET TAVERN',
    'footer.accessibility': 'ACCESSIBILITY',
    'footer.privacy': 'PRIVACY',
    'footer.terms': 'TERMS',
    'footer.collective': 'BANFF HOSPITALITY COLLECTIVE',

    // About Page
    'about.hero.tag': 'OUR STORY',
    'about.hero.title': 'ABOUT US',
    'about.hero.subtitle': 'Serving Banff\'s Best Pizza Since Day One',
    'about.welcome.title': 'WELCOME TO BEAR STREET TAVERN',
    'about.welcome.text1': 'Nestled in the heart of Banff on Bear Street, we\'re proud to serve what locals and visitors alike call "Banff\'s Best Pizza" — featured on the hit TV show "You Gotta Eat Here" with John Catucci.',
    'about.welcome.text2': 'Our tavern combines premium oven-baked pizzas, craft beers from Three Bears Brewery, and genuine mountain hospitality in a welcoming atmosphere that feels like home.',
    'about.welcome.text3': 'Whether you\'re cozying up in a booth for two or bringing friends and family to take over a table for 20, we\'ve got the perfect spot for you.',
    'about.awards.title': 'AWARDS & RECOGNITION',
    'about.awards.youGottaEat': 'YOU GOTTA EAT HERE',
    'about.awards.youGottaEatDesc': 'Featured on the popular Food Network show, showcasing our award-winning pizzas to a national audience.',
    'about.awards.restaurantGuru': 'RESTAURANT GURU 2019',
    'about.awards.restaurantGuruDesc': 'Recognized as "Best Pizza" for our commitment to quality and authentic flavors.',
    'about.awards.openTable': 'OPENTABLE 2024',
    'about.awards.openTableDesc': 'Honored with OpenTable\'s Diners\' Choice Award for exceptional dining experiences.',
    'about.special.title': 'WHAT MAKES US SPECIAL',
    'about.special.petFriendly': '100% PET-FRIENDLY',
    'about.special.petFriendlyDesc': 'We\'re proudly pet-friendly! Bring your furry friends to our year-round heated patio with cozy firepits. We even have a special menu for dogs and dog-friendly beer so your four-legged companions can enjoy the experience too.',
    'about.special.brewery': 'THREE BEARS BREWERY',
    'about.special.breweryDesc': 'Featuring exclusive craft beers from Three Bears Brewery, along with a full selection of craft beers, cocktails, and beverages carefully curated to complement your meal.',
    'about.special.familyFriendly': 'FAMILY FRIENDLY',
    'about.special.familyFriendlyDesc': 'Children are most welcome! Whether it\'s a family dinner or a celebration, we provide a warm and welcoming atmosphere for guests of all ages.',
    'about.special.quality': 'QUALITY INGREDIENTS',
    'about.special.qualityDesc': 'We use 24-hour fermented dough, organic San Marzano sauce, and the freshest toppings to create our signature oven-baked pizzas that keep people coming back.',
    'about.philosophy.title': 'OUR PHILOSOPHY',
    'about.philosophy.text1': 'At Bear Street Tavern, we believe in creating more than just great food — we create experiences and memories that last a lifetime in the heart of the Canadian Rockies.',
    'about.philosophy.text2': 'Part of the renowned Banff Hospitality Collective, we\'re committed to quality, community, and delivering genuine mountain hospitality. Whether you\'re a local or visiting from around the world, we want you to feel at home from the moment you walk through our doors.',
    'about.visit.title': 'VISIT US',
    'about.visit.locationTitle': 'LOCATION',
    'about.visit.address1': '211 Bear Street',
    'about.visit.address2': 'Banff, Alberta T1L 1A1',
    'about.visit.address3': 'Canada',
    'about.visit.locationDesc': 'Located in the heart of downtown Banff, just steps from all the main attractions.',
    'about.visit.hoursTitle': 'HOURS',
    'about.visit.hoursDay': 'Daily',
    'about.visit.hoursTime': '11:30AM - 9PM',
    'about.visit.hoursNote': 'Kitchen closes at 9:00 PM',
    'about.cta.title': 'READY TO EXPERIENCE BANFF\'S BEST PIZZA?',
    'about.cta.bookTable': 'BOOK TABLE',
    'about.cta.orderOnline': 'ORDER ONLINE',
    'about.cta.backHome': 'BACK TO HOME',

    // Specials Page
    'specials.hero.tag': 'SAVE BIG',
    'specials.hero.title': 'DAILY SPECIALS',
    'specials.hero.text1': 'Specials are dine-in only. Sunday & Monday from 5pm. Tuesday-Thursday all day & night.',
    'specials.hero.text2': 'Not available on holidays or long weekends. Select pizzas & calzones only.',
    'specials.sunday': 'SUNDAY',
    'specials.monday': 'MONDAY',
    'specials.tuesday': 'TUESDAY',
    'specials.wednesday': 'WEDNESDAY & THURSDAY',
    'specials.time.evening': '5:00 PM onwards',
    'specials.time.allDay': 'All day',
    'specials.deal.steins': '$10 Steins',
    'specials.deal.hiBalls': '$6 Hi-Balls',
    'specials.deal.pizzaOff': '50% OFF Pizza',
    'specials.deal.calzones': '$12 Calzones',
    'specials.deal.margaritas': '$6 Margaritas',
    'specials.info.title': 'IMPORTANT INFORMATION',
    'specials.info.dineIn': 'Specials are dine-in only',
    'specials.info.holidays': 'Not available on holidays or long weekends',
    'specials.info.select': 'Select pizzas and calzones only',
    'specials.info.sundayMonday': 'Sunday & Monday specials available from 5:00 PM onwards',
    'specials.info.tuesdayThursday': 'Tuesday-Thursday specials available all day & night',
    'specials.cta.title': 'READY TO SAVE?',
    'specials.cta.text': 'Book your table now and enjoy our amazing daily specials!',
    'specials.cta.bookNow': 'BOOK NOW',
    'specials.cta.backHome': 'BACK TO HOME',

    // Gift Cards Page
    'giftCards.hero.tag': 'PERFECT GIFT',
    'giftCards.hero.title': 'GIFT CARDS',
    'giftCards.hero.subtitle': 'GIVE THE GIFT OF GREAT FOOD',
    'giftCards.hero.text': 'The Perfect Gift for Pizza Lovers',
    'giftCards.why.title': 'WHY OUR GIFT CARDS',
    'giftCards.why.text': 'GIVE THE GIFT OF GREAT FOOD',
    'giftCards.why.desc': 'Share the experience of award-winning pizza, craft beers, and genuine mountain hospitality with friends and family. Perfect for any occasion!',
    'giftCards.easy.title': 'EASY TO USE',
    'giftCards.easy.desc': 'Simply present the card at Bear Street Tavern to redeem. Valid for dine-in and takeout.',
    'giftCards.amount.title': 'ANY AMOUNT',
    'giftCards.amount.desc': 'Choose any amount you want. No minimum or maximum purchase required.',
    'giftCards.expiry.title': 'NO EXPIRY',
    'giftCards.expiry.desc': 'Our gift cards never expire. Use them whenever you want!',
    'giftCards.how.title': 'HOW TO PURCHASE',
    'giftCards.online.title': 'ONLINE',
    'giftCards.online.text': 'Purchase gift cards conveniently online through our secure partner platform.',
    'giftCards.online.button': 'BUY ONLINE NOW',
    'giftCards.person.title': 'IN PERSON',
    'giftCards.person.text': 'Visit us at 211 Bear Street, Banff to purchase gift cards in person. Available daily during business hours.',
    'giftCards.person.button': 'GET DIRECTIONS',
    'giftCards.questions.title': 'QUESTIONS?',
    'giftCards.questions.text': 'Have questions about our gift cards? Contact us and we\'ll be happy to help!',
    'giftCards.questions.button': 'CONTACT US',
    'giftCards.cta.title': 'READY TO GIVE THE GIFT OF GREAT FOOD?',
    'giftCards.cta.buy': 'BUY GIFT CARD',
    'giftCards.cta.back': 'BACK TO HOME',

    // Order Online Page
    'orderOnline.hero.tag': 'SKIP THE LINE',
    'orderOnline.hero.title': 'ORDER ONLINE',
    'orderOnline.hero.subtitle': 'QUICK & EASY',
    'orderOnline.hero.text': 'Get your favorite pizzas, calzones, and more delivered or ready for pickup!',
    'orderOnline.how.title': 'HOW IT WORKS',
    'orderOnline.step1.title': 'CHOOSE YOUR FOOD',
    'orderOnline.step1.text': 'Browse our full menu and select your favorite items. Customize toppings, sides, and drinks.',
    'orderOnline.step2.title': 'PLACE YOUR ORDER',
    'orderOnline.step2.text': 'Complete your order online and choose pickup or delivery. Pay securely through our platform.',
    'orderOnline.step3.title': 'PICK UP & ENJOY',
    'orderOnline.step3.text': 'Get notified when your order is ready. Pick it up hot and fresh!',
    'orderOnline.ready.title': 'READY TO ORDER?',
    'orderOnline.ready.text': 'Place your order now and skip the wait. Perfect for busy days!',
    'orderOnline.ready.button': 'START YOUR ORDER',
    'orderOnline.popular.title': 'POPULAR FAVORITES',
    'orderOnline.good.title': 'GOOD TO KNOW',
    'orderOnline.good.time': 'Orders typically ready in 20-30 minutes',
    'orderOnline.good.hours': 'Online ordering available during business hours',
    'orderOnline.good.payment': 'Secure payment processing',
    'orderOnline.good.pickup': 'Contactless pickup available',
    'orderOnline.cta.title': 'HUNGRY? ORDER NOW!',
    'orderOnline.cta.order': 'ORDER ONLINE',
    'orderOnline.cta.back': 'BACK TO HOME',

    // Reservations Page
    'reservations.notice.title': '⚠️ RESERVATIONS STRONGLY RECOMMENDED',
    'reservations.notice.text1': 'Walk-in wait times can exceed 2+ hours during peak season (May-October) and weekends.',
    'reservations.notice.text2': 'Book ahead to guarantee your table and avoid disappointment!',
    'reservations.notice.button': 'GOT IT',
    'reservations.hero.tag': 'PLAN AHEAD',
    'reservations.hero.title': 'RESERVATIONS',
    'reservations.hero.subtitle': 'BOOK ONLINE NOW',
    'reservations.hero.text': 'Reserve your table through OpenTable for a guaranteed spot at Banff\'s Best Pizza!',
    'reservations.cta.button': 'BOOK ON OPENTABLE',
    'reservations.info.title': 'GOOD TO KNOW',
    'reservations.info.recommended': 'Reservations strongly recommended, especially during peak season',
    'reservations.info.walkins': 'Walk-ins welcome based on availability',
    'reservations.info.large': 'For parties of 8+, please call ahead',
    'reservations.info.cancellation': 'Please cancel if plans change so others can enjoy your spot',
    'reservations.contact.title': 'PREFER TO CALL?',
    'reservations.contact.phone': '(403) 762-2021',
    'reservations.contact.text': 'Call us directly to make a reservation or ask questions.',
    'reservations.backHome': 'BACK TO HOME',

    // Contact Page
    'contact.hero.tag': 'GET IN TOUCH',
    'contact.hero.title': 'CONTACT US',
    'contact.hero.subtitle': 'WE\'D LOVE TO HEAR FROM YOU',
    'contact.form.title': 'SEND US A MESSAGE',
    'contact.form.name': 'FULL NAME',
    'contact.form.email': 'EMAIL ADDRESS',
    'contact.form.phone': 'PHONE NUMBER',
    'contact.form.phoneOptional': '(OPTIONAL)',
    'contact.form.subject': 'SUBJECT',
    'contact.form.message': 'YOUR MESSAGE',
    'contact.form.submit': 'SEND MESSAGE',
    'contact.form.sending': 'SENDING...',
    'contact.form.success': 'MESSAGE SENT SUCCESSFULLY! We\'ll get back to you soon.',
    'contact.form.error': 'Something went wrong. Please try again or contact us directly.',
    'contact.info.title': 'CONTACT INFORMATION',
    'contact.info.location': 'LOCATION',
    'contact.info.address1': '211 Bear Street',
    'contact.info.address2': 'Banff, Alberta T1L 1A1',
    'contact.info.address3': 'Canada',
    'contact.info.phone': 'PHONE',
    'contact.info.phoneNumber': '(403) 762-2021',
    'contact.info.email': 'EMAIL',
    'contact.info.emailAddress': 'INFO@BEARSTREETTAVERN.CA',
    'contact.info.hours': 'HOURS',
    'contact.info.hoursValue': 'Daily 11:30AM - 9PM',
    'contact.map.title': 'FIND US',
    'contact.map.text': 'Located in the heart of downtown Banff, just steps from all major attractions.',
    'contact.map.directions': 'GET DIRECTIONS',
    'contact.backHome': 'BACK TO HOME',

    // Common Buttons/Links
    'common.joinTeam': 'JOIN OUR TEAM',
    'common.giftCard': 'GIFT CARD',
    'common.backToTop': 'BACK TO TOP',

    // Error Messages
    'error.newsletter': 'Something went wrong. Please try again.',
    'error.contact': 'Something went wrong. Please try again or contact us directly.',

  },
  fr: {
    // Header
    'header.home': 'ACCUEIL',
    'header.menu': 'MENU',
    'header.about': 'À PROPOS',
    'header.reservations': 'RÉSERVATIONS',
    'header.gallery': 'GALERIE',
    'header.contact': 'CONTACT',
    'header.bookNow': 'RÉSERVER',

    // Home Page - Hero
    'home.hero.location': 'BANFF, ALBERTA',
    'home.hero.bearStreet': 'BEAR STREET',
    'home.hero.tavern': 'TAVERN',
    'home.hero.badge': 'VU DANS "YOU GOTTA EAT HERE"',

    // Home Page - Pizzas
    'home.pizzas.title': 'PIZZAS SIGNATURE',
    'home.pizzas.subtitle': 'Cuites au four à la perfection',
    'home.pizzas.viewMenu': 'MENU COMPLET',
    'home.pizzas.godfather': 'THE GODFATHER',
    'home.pizzas.godfatherDesc': 'Saucisse italienne, prosciutto, ail confit, huile de truffe',
    'home.pizzas.bigBird': 'BIG BIRD',
    'home.pizzas.bigBirdDesc': 'Épinards, bacon, oignon rouge, fromage de chèvre, poulet au pesto',
    'home.pizzas.margarita': 'MARGARITA',
    'home.pizzas.margaritaDesc': 'Sauce italienne, quatre fromages, basilic frais, sel de mer',
    'home.pizzas.awardWinning': 'PRIMÉ',
    'home.pizzas.popular': 'POPULAIRE',
    'home.pizzas.vegetarian': 'VÉGÉTARIEN',

    // Home Page - Highlights
    'home.highlights.title': 'CE QUI NOUS REND SPÉCIAUX',
    'home.highlights.petFriendly': '100% ACCUEILLANT POUR LES ANIMAUX',
    'home.highlights.petFriendlyDesc': 'Terrasse chauffée toute l\'année avec foyers confortables. Nous avons un menu spécial pour chiens et de la bière adaptée aux chiens pour que vos amis à fourrure puissent profiter de l\'expérience aussi!',
    'home.highlights.craftBeers': 'BIÈRES ET BOISSONS ARTISANALES',
    'home.highlights.craftBeersDesc': 'Avec des bières exclusives de Three Bears Brewery et une sélection complète de bières artisanales, cocktails et boissons pour accompagner votre repas.',
    'home.highlights.crazySpecials': 'SPÉCIAUX DE FOLIE',
    'home.highlights.crazySpecialsDesc': '50% DE RABAIS sur certaines pizzas tous les dimanches et lundis dès 17h',
    'home.highlights.viewSpecials': 'VOIR LES SPÉCIAUX',

    // Home Page - Instagram
    'home.instagram.title': 'PARTAGEZ VOS MOMENTS',
    'home.instagram.subtitle': 'Identifiez-nous @bearstreettavern dans vos photos',
    'home.instagram.followUs': 'SUIVEZ-NOUS',

    // Home Page - About
    'home.about.title': 'NOTRE HISTOIRE',
    'home.about.text1': 'Niché au cœur de Banff sur Bear Street, nous sommes fiers de servir ce que les habitants et les visiteurs appellent "La meilleure pizza de Banff" — présenté dans l\'émission télévisée "You Gotta Eat Here".',
    'home.about.text2': 'Notre taverne combine des pizzas cuites au four de première qualité, des bières artisanales de Three Bears Brewery et une hospitalité de montagne authentique dans une atmosphère accueillante.',
    'home.about.text3': 'Nous accueillons fièrement les animaux! Amenez vos amis à fourrure sur notre terrasse chauffée toute l\'année avec foyers confortables. Nous avons même un menu spécial pour chiens et de la bière adaptée aux chiens pour que vos compagnons à quatre pattes puissent profiter de l\'expérience aussi.',
    'home.about.text4': 'Faisant partie du renommé Banff Hospitality Collective, nous nous engageons envers la qualité, la communauté et la création de souvenirs durables au cœur des Rocheuses.',
    'home.about.learnMore': 'EN SAVOIR PLUS',

    // Home Page - Testimonials
    'home.testimonials.title': 'CE QUE NOS CLIENTS DISENT',
    'home.testimonials.subtitle': 'Expériences réelles de vraies personnes',

    // Home Page - CTA
    'home.cta.title': 'PRÊT À DÎNER?',
    'home.cta.bookTable': 'RÉSERVER UNE TABLE',
    'home.cta.location': 'EMPLACEMENT',
    'home.cta.address1': '211 BEAR STREET',
    'home.cta.address2': 'BANFF, AB',
    'home.cta.phone': 'TÉLÉPHONE',
    'home.cta.hours': 'HEURES',
    'home.cta.hoursValue': 'Tous les jours 11h30 - 21h',

    // Footer
    'footer.newsletter': 'RESTEZ INFORMÉ',
    'footer.newsletterDesc': 'RECEVEZ DES OFFRES EXCLUSIVES',
    'footer.subscribe': 'S\'ABONNER',
    'footer.subscribing': 'ENVOI...',
    'footer.subscribed': 'ABONNEMENT RÉUSSI',
    'footer.email': 'VOTRE COURRIEL',
    'footer.menu': 'MENU',
    'footer.home': 'ACCUEIL',
    'footer.menuLink': 'MENU',
    'footer.orderOnline': 'COMMANDER EN LIGNE',
    'footer.reservations': 'RÉSERVATIONS',
    'footer.giftCards': 'CARTES CADEAUX',
    'footer.specials': 'SPÉCIAUX',
    'footer.contact': 'CONTACT',
    'footer.address': 'ADRESSE',
    'footer.address1': '211 Bear Street',
    'footer.address2': 'Banff, AB',
    'footer.phone': 'TÉLÉPHONE',
    'footer.hours': 'HEURES',
    'footer.hoursValue': 'Tous les jours 11h30-21h',
    'footer.followUs': 'SUIVEZ-NOUS',
    'footer.emailLabel': 'COURRIEL',
    'footer.emailAddress': 'INFO@BEARSTREETTAVERN.CA',
    'footer.copyright': 'BEAR STREET TAVERN',
    'footer.accessibility': 'ACCESSIBILITÉ',
    'footer.privacy': 'CONFIDENTIALITÉ',
    'footer.terms': 'CONDITIONS',
    'footer.collective': 'BANFF HOSPITALITY COLLECTIVE',

    // About Page
    'about.hero.tag': 'NOTRE HISTOIRE',
    'about.hero.title': 'À PROPOS',
    'about.hero.subtitle': 'Servant la meilleure pizza de Banff depuis le premier jour',
    'about.welcome.title': 'BIENVENUE À BEAR STREET TAVERN',
    'about.welcome.text1': 'Niché au cœur de Banff sur Bear Street, nous sommes fiers de servir ce que les habitants et les visiteurs appellent "La meilleure pizza de Banff" — présenté dans l\'émission télévisée "You Gotta Eat Here" avec John Catucci.',
    'about.welcome.text2': 'Notre taverne combine des pizzas cuites au four de première qualité, des bières artisanales de Three Bears Brewery et une hospitalité de montagne authentique dans une atmosphère accueillante qui vous fait sentir comme à la maison.',
    'about.welcome.text3': 'Que vous vous installiez dans une cabine pour deux ou que vous ameniez amis et famille pour occuper une table de 20, nous avons l\'endroit parfait pour vous.',
    'about.awards.title': 'PRIX ET RECONNAISSANCES',
    'about.awards.youGottaEat': 'YOU GOTTA EAT HERE',
    'about.awards.youGottaEatDesc': 'Présenté dans l\'émission populaire de Food Network, mettant en vedette nos pizzas primées à un public national.',
    'about.awards.restaurantGuru': 'RESTAURANT GURU 2019',
    'about.awards.restaurantGuruDesc': 'Reconnu comme "Meilleure Pizza" pour notre engagement envers la qualité et les saveurs authentiques.',
    'about.awards.openTable': 'OPENTABLE 2024',
    'about.awards.openTableDesc': 'Honoré du prix Diners\' Choice d\'OpenTable pour des expériences culinaires exceptionnelles.',
    'about.special.title': 'CE QUI NOUS REND SPÉCIAUX',
    'about.special.petFriendly': '100% ACCUEILLANT POUR LES ANIMAUX',
    'about.special.petFriendlyDesc': 'Nous accueillons fièrement les animaux! Amenez vos amis à fourrure sur notre terrasse chauffée toute l\'année avec foyers confortables. Nous avons même un menu spécial pour chiens et de la bière adaptée aux chiens pour que vos compagnons à quatre pattes puissent profiter de l\'expérience aussi.',
    'about.special.brewery': 'THREE BEARS BREWERY',
    'about.special.breweryDesc': 'Avec des bières artisanales exclusives de Three Bears Brewery, ainsi qu\'une sélection complète de bières artisanales, cocktails et boissons soigneusement sélectionnées pour accompagner votre repas.',
    'about.special.familyFriendly': 'ACCUEILLANT POUR LES FAMILLES',
    'about.special.familyFriendlyDesc': 'Les enfants sont les bienvenus! Que ce soit un dîner en famille ou une célébration, nous offrons une atmosphère chaleureuse et accueillante pour les clients de tous âges.',
    'about.special.quality': 'INGRÉDIENTS DE QUALITÉ',
    'about.special.qualityDesc': 'Nous utilisons une pâte fermentée pendant 24 heures, de la sauce San Marzano biologique et les garnitures les plus fraîches pour créer nos pizzas signature cuites au four qui font revenir les gens.',
    'about.philosophy.title': 'NOTRE PHILOSOPHIE',
    'about.philosophy.text1': 'Chez Bear Street Tavern, nous croyons en la création de plus que de la bonne nourriture — nous créons des expériences et des souvenirs qui durent toute une vie au cœur des Rocheuses canadiennes.',
    'about.philosophy.text2': 'Faisant partie du renommé Banff Hospitality Collective, nous nous engageons envers la qualité, la communauté et la prestation d\'une hospitalité de montagne authentique. Que vous soyez un habitant ou en visite du monde entier, nous voulons que vous vous sentiez chez vous dès que vous franchissez nos portes.',
    'about.visit.title': 'VISITEZ-NOUS',
    'about.visit.locationTitle': 'EMPLACEMENT',
    'about.visit.address1': '211 Bear Street',
    'about.visit.address2': 'Banff, Alberta T1L 1A1',
    'about.visit.address3': 'Canada',
    'about.visit.locationDesc': 'Situé au cœur du centre-ville de Banff, à quelques pas de toutes les principales attractions.',
    'about.visit.hoursTitle': 'HEURES',
    'about.visit.hoursDay': 'Tous les jours',
    'about.visit.hoursTime': '11h30 - 21h',
    'about.visit.hoursNote': 'La cuisine ferme à 21h00',
    'about.cta.title': 'PRÊT À DÉCOUVRIR LA MEILLEURE PIZZA DE BANFF?',
    'about.cta.bookTable': 'RÉSERVER UNE TABLE',
    'about.cta.orderOnline': 'COMMANDER EN LIGNE',
    'about.cta.backHome': 'RETOUR À L\'ACCUEIL',

    // Specials Page
    'specials.hero.tag': 'ÉCONOMISEZ GROS',
    'specials.hero.title': 'SPÉCIAUX QUOTIDIENS',
    'specials.hero.text1': 'Les spéciaux sont pour manger sur place seulement. Dimanche et lundi dès 17h. Mardi-jeudi toute la journée.',
    'specials.hero.text2': 'Non disponible pendant les jours fériés ou les longs week-ends. Pizzas et calzones sélectionnés seulement.',
    'specials.sunday': 'DIMANCHE',
    'specials.monday': 'LUNDI',
    'specials.tuesday': 'MARDI',
    'specials.wednesday': 'MERCREDI ET JEUDI',
    'specials.time.evening': 'Dès 17h00',
    'specials.time.allDay': 'Toute la journée',
    'specials.deal.steins': 'Chopes à 10$',
    'specials.deal.hiBalls': 'Hi-Balls à 6$',
    'specials.deal.pizzaOff': '50% DE RABAIS sur les pizzas',
    'specials.deal.calzones': 'Calzones à 12$',
    'specials.deal.margaritas': 'Margaritas à 6$',
    'specials.info.title': 'INFORMATIONS IMPORTANTES',
    'specials.info.dineIn': 'Les spéciaux sont pour manger sur place seulement',
    'specials.info.holidays': 'Non disponible pendant les jours fériés ou les longs week-ends',
    'specials.info.select': 'Pizzas et calzones sélectionnés seulement',
    'specials.info.sundayMonday': 'Spéciaux du dimanche et lundi disponibles dès 17h00',
    'specials.info.tuesdayThursday': 'Spéciaux du mardi au jeudi disponibles toute la journée',
    'specials.cta.title': 'PRÊT À ÉCONOMISER?',
    'specials.cta.text': 'Réservez votre table maintenant et profitez de nos incroyables spéciaux quotidiens!',
    'specials.cta.bookNow': 'RÉSERVER',
    'specials.cta.backHome': 'RETOUR À L\'ACCUEIL',

    // Gift Cards Page
    'giftCards.hero.tag': 'CADEAU PARFAIT',
    'giftCards.hero.title': 'CARTES CADEAUX',
    'giftCards.hero.subtitle': 'OFFREZ LE CADEAU DE LA BONNE NOURRITURE',
    'giftCards.hero.text': 'Le cadeau parfait pour les amateurs de pizza',
    'giftCards.why.title': 'POURQUOI NOS CARTES CADEAUX',
    'giftCards.why.text': 'OFFREZ LE CADEAU DE LA BONNE NOURRITURE',
    'giftCards.why.desc': 'Partagez l\'expérience de pizza primée, bières artisanales et hospitalité de montagne authentique avec amis et famille. Parfait pour toute occasion!',
    'giftCards.easy.title': 'FACILE À UTILISER',
    'giftCards.easy.desc': 'Présentez simplement la carte à Bear Street Tavern pour l\'échanger. Valide pour manger sur place et à emporter.',
    'giftCards.amount.title': 'N\'IMPORTE QUEL MONTANT',
    'giftCards.amount.desc': 'Choisissez le montant que vous voulez. Aucun achat minimum ou maximum requis.',
    'giftCards.expiry.title': 'SANS EXPIRATION',
    'giftCards.expiry.desc': 'Nos cartes cadeaux n\'expirent jamais. Utilisez-les quand vous voulez!',
    'giftCards.how.title': 'COMMENT ACHETER',
    'giftCards.online.title': 'EN LIGNE',
    'giftCards.online.text': 'Achetez des cartes cadeaux facilement en ligne via notre plateforme partenaire sécurisée.',
    'giftCards.online.button': 'ACHETER EN LIGNE',
    'giftCards.person.title': 'EN PERSONNE',
    'giftCards.person.text': 'Visitez-nous au 211 Bear Street, Banff pour acheter des cartes cadeaux en personne. Disponible tous les jours pendant les heures d\'ouverture.',
    'giftCards.person.button': 'OBTENIR L\'ITINÉRAIRE',
    'giftCards.questions.title': 'DES QUESTIONS?',
    'giftCards.questions.text': 'Vous avez des questions sur nos cartes cadeaux? Contactez-nous et nous serons heureux de vous aider!',
    'giftCards.questions.button': 'NOUS CONTACTER',
    'giftCards.cta.title': 'PRÊT À OFFRIR LE CADEAU DE LA BONNE NOURRITURE?',
    'giftCards.cta.buy': 'ACHETER UNE CARTE CADEAU',
    'giftCards.cta.back': 'RETOUR À L\'ACCUEIL',

    // Order Online Page
    'orderOnline.hero.tag': 'ÉVITEZ LA FILE',
    'orderOnline.hero.title': 'COMMANDER EN LIGNE',
    'orderOnline.hero.subtitle': 'RAPIDE ET FACILE',
    'orderOnline.hero.text': 'Obtenez vos pizzas, calzones et plus préférés livrés ou prêts pour ramassage!',
    'orderOnline.how.title': 'COMMENT ÇA MARCHE',
    'orderOnline.step1.title': 'CHOISISSEZ VOS ALIMENTS',
    'orderOnline.step1.text': 'Parcourez notre menu complet et sélectionnez vos articles préférés. Personnalisez garnitures, accompagnements et boissons.',
    'orderOnline.step2.title': 'PASSEZ VOTRE COMMANDE',
    'orderOnline.step2.text': 'Complétez votre commande en ligne et choisissez ramassage ou livraison. Payez en toute sécurité via notre plateforme.',
    'orderOnline.step3.title': 'RAMASSEZ ET PROFITEZ',
    'orderOnline.step3.text': 'Recevez une notification lorsque votre commande est prête. Récupérez-la chaude et fraîche!',
    'orderOnline.ready.title': 'PRÊT À COMMANDER?',
    'orderOnline.ready.text': 'Passez votre commande maintenant et évitez l\'attente. Parfait pour les journées chargées!',
    'orderOnline.ready.button': 'COMMENCEZ VOTRE COMMANDE',
    'orderOnline.popular.title': 'FAVORIS POPULAIRES',
    'orderOnline.good.title': 'BON À SAVOIR',
    'orderOnline.good.time': 'Commandes généralement prêtes en 20-30 minutes',
    'orderOnline.good.hours': 'Commande en ligne disponible pendant les heures d\'ouverture',
    'orderOnline.good.payment': 'Traitement de paiement sécurisé',
    'orderOnline.good.pickup': 'Ramassage sans contact disponible',
    'orderOnline.cta.title': 'FAIM? COMMANDEZ MAINTENANT!',
    'orderOnline.cta.order': 'COMMANDER EN LIGNE',
    'orderOnline.cta.back': 'RETOUR À L\'ACCUEIL',

    // Reservations Page
    'reservations.notice.title': '⚠️ RÉSERVATIONS FORTEMENT RECOMMANDÉES',
    'reservations.notice.text1': 'Le temps d\'attente sans réservation peut dépasser 2+ heures pendant la haute saison (mai-octobre) et les week-ends.',
    'reservations.notice.text2': 'Réservez à l\'avance pour garantir votre table et éviter toute déception!',
    'reservations.notice.button': 'COMPRIS',
    'reservations.hero.tag': 'PLANIFIEZ À L\'AVANCE',
    'reservations.hero.title': 'RÉSERVATIONS',
    'reservations.hero.subtitle': 'RÉSERVEZ EN LIGNE MAINTENANT',
    'reservations.hero.text': 'Réservez votre table via OpenTable pour une place garantie à la meilleure pizza de Banff!',
    'reservations.cta.button': 'RÉSERVER SUR OPENTABLE',
    'reservations.info.title': 'BON À SAVOIR',
    'reservations.info.recommended': 'Réservations fortement recommandées, surtout pendant la haute saison',
    'reservations.info.walkins': 'Clients sans réservation bienvenus selon disponibilité',
    'reservations.info.large': 'Pour groupes de 8+, veuillez appeler à l\'avance',
    'reservations.info.cancellation': 'Veuillez annuler si vos plans changent afin que d\'autres puissent profiter de votre place',
    'reservations.contact.title': 'PRÉFÉREZ APPELER?',
    'reservations.contact.phone': '(403) 762-2021',
    'reservations.contact.text': 'Appelez-nous directement pour faire une réservation ou poser des questions.',
    'reservations.backHome': 'RETOUR À L\'ACCUEIL',

    // Contact Page
    'contact.hero.tag': 'ENTRER EN CONTACT',
    'contact.hero.title': 'NOUS CONTACTER',
    'contact.hero.subtitle': 'NOUS AIMERIONS VOUS ENTENDRE',
    'contact.form.title': 'ENVOYEZ-NOUS UN MESSAGE',
    'contact.form.name': 'NOM COMPLET',
    'contact.form.email': 'ADRESSE COURRIEL',
    'contact.form.phone': 'NUMÉRO DE TÉLÉPHONE',
    'contact.form.phoneOptional': '(OPTIONNEL)',
    'contact.form.subject': 'SUJET',
    'contact.form.message': 'VOTRE MESSAGE',
    'contact.form.submit': 'ENVOYER LE MESSAGE',
    'contact.form.sending': 'ENVOI...',
    'contact.form.success': 'MESSAGE ENVOYÉ AVEC SUCCÈS! Nous vous répondrons bientôt.',
    'contact.form.error': 'Une erreur s\'est produite. Veuillez réessayer ou nous contacter directement.',
    'contact.info.title': 'COORDONNÉES',
    'contact.info.location': 'EMPLACEMENT',
    'contact.info.address1': '211 Bear Street',
    'contact.info.address2': 'Banff, Alberta T1L 1A1',
    'contact.info.address3': 'Canada',
    'contact.info.phone': 'TÉLÉPHONE',
    'contact.info.phoneNumber': '(403) 762-2021',
    'contact.info.email': 'COURRIEL',
    'contact.info.emailAddress': 'INFO@BEARSTREETTAVERN.CA',
    'contact.info.hours': 'HEURES',
    'contact.info.hoursValue': 'Tous les jours 11h30 - 21h',
    'contact.map.title': 'TROUVEZ-NOUS',
    'contact.map.text': 'Situé au cœur du centre-ville de Banff, à quelques pas de toutes les principales attractions.',
    'contact.map.directions': 'OBTENIR L\'ITINÉRAIRE',
    'contact.backHome': 'RETOUR À L\'ACCUEIL',

    // Common Buttons/Links
    'common.joinTeam': 'REJOIGNEZ NOTRE ÉQUIPE',
    'common.giftCard': 'CARTE CADEAU',
    'common.backToTop': 'RETOUR EN HAUT',

    // Error Messages
    'error.newsletter': 'Une erreur s\'est produite. Veuillez réessayer.',
    'error.contact': 'Une erreur s\'est produite. Veuillez réessayer ou nous contacter directement.',

  },
};

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>('en');

  useEffect(() => {
    // Load saved language from localStorage
    const savedLang = localStorage.getItem('language') as Language;
    if (savedLang && (savedLang === 'en' || savedLang === 'fr')) {
      setLanguageState(savedLang);
    }
  }, []);

  // Update HTML lang attribute when language changes
  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem('language', lang);
  };

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
