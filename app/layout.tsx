import type { Metadata } from "next";
import { Montserrat, Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Providers from "@/components/Providers";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800", "900"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Bear Street Tavern | Banff's Best Pizza | Bear St, Banff AB",
  description: "Award-winning restaurant in Banff featuring Banff's Best Pizza as seen on You Gotta Eat Here. Dog-friendly patio, craft beers from Three Bears Brewery, and bear-sized cocktails. Located at 211 Bear Street, Banff, Alberta.",
  keywords: ["Banff restaurant", "Bear Street Tavern", "Banff pizza", "dog-friendly patio Banff", "Three Bears Brewery", "You Gotta Eat Here", "Banff dining"],
  openGraph: {
    title: "Bear Street Tavern - Banff's Best Pizza",
    description: "Award-winning tavern in the heart of Banff serving premium pizza, craft beers, and cast iron specialties.",
    type: "website",
    locale: "en_CA",
    url: "https://bearstreettavern.ca",
    siteName: "Bear Street Tavern",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${montserrat.variable} ${inter.variable} antialiased`}
      >
        <Providers>
          <Header />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
