# 🐻 Bear Street Tavern - Official Website

A modern, professional restaurant website for Bear Street Tavern in Banff, Alberta, Canada. Built with Next.js 16, TypeScript, and Tailwind CSS 4.

## 🍕 About Bear Street Tavern

Bear Street Tavern is Banff's premier destination for authentic wood-fired pizza, craft beers, and mountain hospitality. Featured on the hit TV show **"You Gotta Eat Here"**, we're proud to serve what locals and visitors call **"Banff's Best Pizza."**

**Location:** 211 Bear Street, Banff, AB T1L 1A1
**Phone:** (403) 762-2021
**Hours:** Monday - Sunday, 12:00 PM - 9:00 PM

### Key Features
- 🍕 Award-winning pizza featured on "You Gotta Eat Here"
- 🐕 Year-round dog-friendly heated patio with firepits
- 🍺 Craft beers from local Three Bears Brewery
- 🎉 Monday Madness: 50% OFF select pizzas from 5pm
- 🏔️ Part of Banff Hospitality Collective (12 restaurants)

## 🚀 Getting Started

### Prerequisites
- Node.js 20+ installed
- npm or yarn package manager

### Installation

1. **Install dependencies**
   ```bash
   npm install
   ```

2. **Run the development server**
   ```bash
   npm run dev
   ```

3. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Build for Production

```bash
npm run build
npm start
```

## 🎨 Design System

### Color Palette - Modern Black & White
- **Primary (Black):** `#000000` - Bold, modern, sophisticated
- **Dark Gray:** `#1a1a1a` - Depth and dimension
- **Medium Gray:** `#2d2d2d` - Subtle backgrounds
- **Light Gray:** `#404040` - Borders and accents
- **White:** `#ffffff` - Clean, bright contrast
- **Off-White:** `#f5f5f5` - Soft alternatives
- **Accent Green:** `#2d5016` - From logo maple leaf (minimal use)
- **Accent Red:** `#8B0000` - For special highlights

### Typography
- **Headings:** Playfair Display (serif, elegant)
- **Body:** Inter (clean, readable, wide tracking)
- **Display:** Bebas Neue (bold titles, ultra-wide tracking)

### Design Principles
- **Modern Tavern Aesthetic:** Industrial meets sophistication
- **Monochromatic:** Black and white dominate with minimal color accents
- **Bold Typography:** Extra wide letter spacing for modern feel
- **Clean Layouts:** Maximum whitespace, minimal clutter
- **Sharp Borders:** Strong lines and geometric shapes
- **Hover States:** Subtle animations and scale effects
- **Brutalist Elements:** Raw, honest design without unnecessary decoration

## 📁 Project Structure

```
bear-street-tavern/
├── app/
│   ├── layout.tsx          # Root layout with Header & Footer
│   ├── page.tsx             # Homepage ✅
│   ├── globals.css          # Global styles & custom colors ✅
│   ├── menu/                # Menu page (to be built)
│   ├── about/               # About page (to be built)
│   ├── reservations/        # Reservations page (to be built)
│   ├── events/              # Private Events page (to be built)
│   ├── gallery/             # Gallery page (to be built)
│   ├── contact/             # Contact page (to be built)
│   └── specials/            # Specials page (to be built)
├── components/
│   ├── Header.tsx           # Navigation header ✅
│   └── Footer.tsx           # Footer with newsletter ✅
├── public/
│   └── images/              # Image assets (to be added)
├── package.json
└── README.md
```

## 🏠 Homepage Features

The homepage includes:

1. **Hero Section** - Full-screen with "You Gotta Eat Here" badge and CTAs
2. **About Snippet** - Restaurant introduction and values
3. **Signature Pizzas** - Featured menu items with hover effects
4. **Highlights Grid** - Dog-friendly patio, craft beers, Monday special
5. **Instagram Feed** - Social media integration placeholder
6. **Testimonials** - Customer reviews with 5-star ratings
7. **Final CTA** - Reservation call-to-action with contact info
8. **Back to Top Button** - Smooth scrolling navigation

## 🛠️ Tech Stack

- **Framework:** Next.js 16 (App Router)
- **Language:** TypeScript 5
- **Styling:** Tailwind CSS 4
- **Fonts:** Google Fonts (Playfair Display, Inter, Bebas Neue)
- **Deployment:** Ready for Vercel, Netlify, or any Node.js host

## 📱 Responsive Design

Fully responsive and optimized for:
- 📱 Mobile devices (320px+)
- 📱 Tablets (768px+)
- 💻 Desktop (1024px+)
- 🖥️ Large screens (1440px+)

## ♿ Accessibility

- ARIA labels on all interactive elements
- Semantic HTML structure
- Keyboard navigation support
- Color contrast compliance (WCAG AA)
- Focus states on all clickable elements

## 🎯 SEO Optimization

- Proper meta tags and OpenGraph data
- Semantic HTML structure
- Fast loading performance
- Descriptive URLs and page titles

## 📋 Next Steps

To complete the website, build these pages:

1. **Menu Page** (`/menu`) - Full menu with tabs and filters
2. **About Page** (`/about`) - Restaurant story and team
3. **Reservations Page** (`/reservations`) - Booking system
4. **Private Events Page** (`/events`) - Event packages and inquiry form
5. **Gallery Page** (`/gallery`) - Photo gallery with lightbox
6. **Contact Page** (`/contact`) - Contact form and map
7. **Specials Page** (`/specials`) - Monday Madness and promotions
8. **404 Page** - Custom error page

## 🖼️ Images Needed

Add images to `/public/images/`:
- Hero background images (1920x1080+)
- Pizza photos (signature items)
- Patio with firepit
- Interior shots
- Team/staff photos

## 🚢 Deployment

### Vercel (Recommended)
```bash
npm install -g vercel
vercel
```

### Netlify
```bash
npm run build
# Upload build output to Netlify
```

## 📞 Contact

- **Email:** info@bearstreettavern.ca
- **Phone:** (403) 762-2021
- **Address:** 211 Bear Street, Banff, AB T1L 1A1

---

**Built with ❤️ for Bear Street Tavern**
*Part of Banff Hospitality Collective*
