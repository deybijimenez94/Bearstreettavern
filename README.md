# 🐻 Bear Street Tavern - Official Website

A modern, professional restaurant website for Bear Street Tavern in Banff, Alberta, Canada. Built with Next.js 15, TypeScript, and Tailwind CSS 4.

[![Lighthouse Score](https://img.shields.io/badge/Lighthouse-95%2B-success)](https://developers.google.com/web/tools/lighthouse)
[![Next.js](https://img.shields.io/badge/Next.js-15.1.1-black)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.3-blue)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.0-38bdf8)](https://tailwindcss.com/)

## 🍕 About Bear Street Tavern

Bear Street Tavern is Banff's premier destination for authentic wood-fired pizza, craft beers, and mountain hospitality. Featured on the hit TV show **"You Gotta Eat Here"**, we're proud to serve what locals and visitors call **"Banff's Best Pizza."**

**Location:** 211 Bear Street, Banff, AB T1L 1A1
**Phone:** (403) 762-2021
**Hours:** Daily 12:00 PM - 9:00 PM
**Website:** https://bearstreettavern.ca

### Key Features
- 🍕 Award-winning pizza featured on "You Gotta Eat Here"
- 🐕 Year-round dog-friendly heated patio with firepits
- 🍺 Craft beers from local Three Bears Brewery
- 🎉 Monday Madness: 50% OFF select pizzas from 5pm
- 🏔️ Part of Banff Hospitality Collective (12 restaurants)
- 🌍 Bilingual site (English/French)

---

## ✨ Features

### Completed Pages
- ✅ **Homepage** - Hero, featured pizzas, highlights, testimonials
- ✅ **Menu** - Interactive 6-category menu with filters
- ✅ **About** - Restaurant story, awards, team
- ✅ **Reservations** - OpenTable integration
- ✅ **Gallery** - Photo gallery with optimization
- ✅ **Contact** - Contact form with Web3Forms integration

### Functionality
- ✅ Responsive design (mobile-first)
- ✅ Bilingual support (EN/FR)
- ✅ Contact form with email notifications
- ✅ Newsletter subscription
- ✅ OpenTable reservation integration
- ✅ SEO optimized
- ✅ Open Graph for social media
- ✅ Accessibility (WCAG 2.1 AA)
- ✅ Security headers
- ✅ Image optimization (WebP/AVIF)
- ✅ Performance optimized

---

## 🚀 Quick Start

### Prerequisites
- **Node.js** 18.17+
- **npm** or **yarn**

### Installation

```bash
# Clone the repository
git clone [repository-url]
cd bear-street-tavern

# Install dependencies
npm install

# Create environment file
cp .env.example .env.local
```

### Environment Variables

Create a `.env.local` file with:

```bash
# Web3Forms (Required for contact form)
NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY=your_access_key_here

# Email to receive form submissions
NEXT_PUBLIC_CONTACT_EMAIL=info@bearstreettavern.ca

# Site URL
NEXT_PUBLIC_SITE_URL=https://bearstreettavern.ca
```

**Get Web3Forms Access Key:**
1. Go to https://web3forms.com
2. Sign up with your email
3. Get your free Access Key

### Development

```bash
# Run development server
npm run dev

# Open browser
# http://localhost:3000
```

### Production Build

```bash
# Build for production
npm run build

# Start production server
npm start
```

---

## 📁 Project Structure

```
bear-street-tavern/
├── app/                        # Next.js App Router
│   ├── layout.tsx             # Root layout
│   ├── page.tsx               # Homepage
│   ├── globals.css            # Global styles
│   ├── about/                 # About page
│   ├── contact/               # Contact page
│   ├── gallery/               # Gallery page
│   ├── menu/                  # Menu page
│   └── reservations/          # Reservations page
├── components/                 # React components
│   ├── Header.tsx             # Navigation
│   ├── Footer.tsx             # Footer with newsletter
│   ├── LanguageSwitcher.tsx   # Language toggle
│   ├── SchemaOrg.tsx          # SEO structured data
│   └── ...
├── constants/                  # Static data
│   └── menu.ts                # Menu items and specials
├── contexts/                   # React Context
│   └── LanguageContext.tsx    # Internationalization
├── public/                     # Static assets
│   └── images/                # Optimized images
├── .env.example               # Environment template
├── next.config.ts             # Next.js configuration
├── tailwind.config.ts         # Tailwind configuration
└── tsconfig.json              # TypeScript configuration
```

---

## 🎨 Tech Stack

| Technology | Version | Purpose |
|------------|---------|---------|
| Next.js | 15.1.1 | React framework with App Router |
| React | 19 | UI library |
| TypeScript | 5.3 | Type safety |
| Tailwind CSS | 4.0 | Styling |
| Web3Forms | Latest | Contact forms |
| next/image | Built-in | Image optimization |

---

## 📱 Responsive Breakpoints

| Device | Min Width | Max Width |
|--------|-----------|-----------|
| Mobile | 320px | 767px |
| Tablet | 768px | 1023px |
| Desktop | 1024px | 1439px |
| Large Desktop | 1440px+ | - |

---

## ♿ Accessibility

- ✅ WCAG 2.1 AA compliant
- ✅ Semantic HTML
- ✅ ARIA labels
- ✅ Keyboard navigation
- ✅ Focus indicators
- ✅ Screen reader support
- ✅ Color contrast compliance

---

## 🔍 SEO Features

- ✅ Meta tags (title, description, keywords)
- ✅ Open Graph (Facebook, WhatsApp, LinkedIn)
- ✅ Twitter Cards
- ✅ Schema.org structured data
- ✅ Sitemap.xml
- ✅ Robots.txt
- ✅ Semantic HTML
- ✅ Fast loading (< 3s)

---

## 🚢 Deployment

### Netlify (Recommended)

1. **Push to Git:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

2. **Deploy to Netlify:**
   - Go to https://netlify.com
   - Click "New site from Git"
   - Select repository
   - Build settings:
     ```
     Build command: npm run build
     Publish directory: .next
     ```

3. **Add Environment Variables:**
   - Go to Site settings > Environment variables
   - Add all variables from `.env.example`

4. **Custom Domain:**
   - Site settings > Domain management
   - Add custom domain: `bearstreettavern.ca`
   - Update DNS records

### Vercel

```bash
npm install -g vercel
vercel
```

---

## 📊 Performance

**Lighthouse Scores (Target):**
- Performance: 95+
- Accessibility: 100
- Best Practices: 100
- SEO: 100

**Core Web Vitals:**
- LCP (Largest Contentful Paint): < 2.5s
- FID (First Input Delay): < 100ms
- CLS (Cumulative Layout Shift): < 0.1

---

## 🔒 Security

- ✅ HTTPS only (SSL)
- ✅ Content Security Policy
- ✅ X-Frame-Options
- ✅ X-Content-Type-Options
- ✅ Strict-Transport-Security
- ✅ Referrer-Policy
- ✅ Permissions-Policy

---

## 🌐 Internationalization

The site supports English and French:

```tsx
// Usage in components
import { useLanguage } from '@/contexts/LanguageContext';

function MyComponent() {
  const { t, language, setLanguage } = useLanguage();

  return <h1>{t('header.home')}</h1>;
}
```

**To add translations:**
1. Open `contexts/LanguageContext.tsx`
2. Add to `translations` object
3. Use `t('key')` in components

---

## 🖼️ Image Optimization

All images are optimized using Next.js Image component:

```tsx
import Image from 'next/image';

<Image
  src="/images/pizza.jpg"
  alt="Description"
  width={800}
  height={600}
  quality={85}
/>
```

**Image Guidelines:**
- Format: JPG for photos, PNG for graphics
- Max size: 500KB before optimization
- Dimensions: 1920x1080 for hero images
- Location: `/public/images/`

---

## 📝 Content Management

### Update Menu Items

Edit `constants/menu.ts`:

```typescript
export const menuItems = [
  {
    id: 'the-godfather',
    name: 'THE GODFATHER',
    price: 29.50,
    description: 'Prosciutto, confit garlic...',
    category: 'signature'
  }
];
```

### Update Specials

Edit `constants/menu.ts`:

```typescript
export const specials = [
  {
    title: "Monday Madness",
    description: "50% OFF select pizzas from 5pm",
    // ...
  }
];
```

---

## 🧪 Testing

```bash
# Type checking
npm run type-check

# Lint
npm run lint

# Build test
npm run build
```

---

## 📞 Support & Documentation

### Documentation Files
- **DEPLOYMENT-GUIDE.md** - Complete deployment instructions
- **SETUP-INSTRUCTIONS.md** - Initial setup guide
- **HANDOVER-CHECKLIST.md** - Project handover checklist
- **EMAIL-TEMPLATE.md** - Email template for client

### Contact
- **Email:** info@bearstreettavern.ca
- **Phone:** (403) 762-2021
- **Address:** 211 Bear Street, Banff, AB T1L 1A1

---

## 🤝 Contributing

This is a private project for Bear Street Tavern. For maintenance:

1. Create feature branch
2. Make changes
3. Test thoroughly
4. Submit for review
5. Merge to main
6. Auto-deploy via Netlify/Vercel

---

## 📄 License

Proprietary - © 2026 Bear Street Tavern. All rights reserved.

---

## 🙏 Credits

**Built for:** Bear Street Tavern
**Part of:** Banff Hospitality Collective
**Location:** Banff, Alberta, Canada
**Framework:** Next.js by Vercel
**Styling:** Tailwind CSS
**Forms:** Web3Forms

---

**Built with ❤️ for Bear Street Tavern**
*Canada's Best Mountain Pizza Since [Year]*

---

## 📋 Quick Links

- [Live Site](https://bearstreettavern.ca)
- [Preview (Netlify)](https://bearstreettavern.netlify.app)
- [OpenTable Reservations](https://www.opentable.ca/r/bear-street-tavern-banff)
- [Instagram](https://instagram.com/bearstreettavern)
- [Facebook](https://facebook.com/bearstreettavern)
- [Banff Hospitality Collective](https://banffcollective.com)

---

**Last Updated:** January 29, 2026
**Version:** 1.0.0
