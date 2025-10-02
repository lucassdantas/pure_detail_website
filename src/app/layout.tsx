import type { Metadata } from "next";
import localFont from 'next/font/local'
import { Michroma } from 'next/font/google'
import { Header } from "@/app/components/Header";
import { Footer } from "@/app/components/Footer";
import Script from "next/script";
import "./globals.css";

const michromaFont = Michroma({
  weight: ['400'],
  subsets: ['latin'],
})

const euroStileFont = localFont({
  src: [
    {
      path: '../fonts/fonnts.com-Eurostile_Extd_Black.otf',
      weight: '900',
      style: 'normal',
    }
  ],
  variable: '--font-eurostile'
})

const generalSansFont = localFont({
  src: [
    {
      path: '../fonts/GeneralSans-Medium.otf',
      weight: '400',
      style: 'normal'
    },
    {
      path: '../fonts/GeneralSans-MediumItalic.otf',
      weight: '400',
      style: 'italic'
    },
    {
      path: '../fonts/GeneralSans-Semibold_2.otf',
      weight: '700',
      style: 'normal'
    },
  ],
  variable: '--font-general-sans'
})

export const metadata: Metadata = {
  title: "Pure Detail | Car Detailing in North Shore, Auckland",
  description: "Professional car detailing in North Shore, Auckland. Pure Detail delivers premium car cleaning, polishing, and interior detailing with precision and care. Book your detail today for that fresh-car feeling!",
  keywords: [
    "car detailing Auckland",
    "car cleaning North Shore",
    "car polish Auckland",
    "mobile car detailing",
    "interior car cleaning",
    "exterior car wash",
    "car grooming Auckland",
    "paint protection",
    "ceramic coating Auckland",
    "auto detailing NZ",
  ],
  authors: [{ name: "Pure Detail" }],
  creator: "Pure Detail",
  publisher: "Pure Detail",
  applicationName: "Pure Detail Detailing Services",
  alternates: {
    canonical: "https://puredetail.co.nz",
  },
  openGraph: {
    title: "Pure Detail | Premium Car Detailing in Auckland",
    description: "Locally-owned car detailing business in North Shore, Auckland. From daily drivers to show cars, we bring back that new car shine with expert detailing.",
    url: "https://puredetail.co.nz",
    siteName: "Pure Detail",
    images: [
      {
        url: "https://puredetail.co.nz/imgs/og-banner.jpg",
        width: 1200,
        height: 630,
        alt: "Pure Detail - Car Detailing in Auckland",
      },
    ],
    locale: "en_NZ",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: "@PureDetailNZ",
    creator: "@PureDetailNZ",
    title: "Pure Detail | Car Detailing in Auckland",
    description: "Premium car detailing services in North Shore, Auckland. Book today for a spotless shine inside and out.",
    images: ["https://puredetail.co.nz/imgs/og-banner.jpg"],
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* JSON-LD Structured Data */}
        <Script
          id="ld-json"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "AutoDetailing",
              "name": "Pure Detail",
              "image": "https://puredetail.co.nz/imgs/og-banner.jpg",
              "@id": "https://puredetail.co.nz",
              "url": "https://puredetail.co.nz",
              "telephone": "+64 21 234 5678",
              "priceRange": "$$",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "North Shore",
                "addressLocality": "Auckland",
                "addressRegion": "Auckland",
                "postalCode": "0620",
                "addressCountry": "NZ"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": -36.7870,
                "longitude": 174.7756
              },
              "openingHoursSpecification": [
                {
                  "@type": "OpeningHoursSpecification",
                  "dayOfWeek": [
                    "Monday",
                    "Tuesday",
                    "Wednesday",
                    "Thursday",
                    "Friday",
                    "Saturday"
                  ],
                  "opens": "08:00",
                  "closes": "18:00"
                }
              ],
              "sameAs": [
                "https://www.facebook.com/puredetailnz",
                "https://www.instagram.com/puredetailnz",
                "https://twitter.com/PureDetailNZ"
              ],
              "description": "Pure Detail is a locally-owned car detailing business in North Shore, Auckland. We provide premium interior and exterior car detailing, polishing, and paint protection services.",
              "makesOffer": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Interior Car Detailing",
                    "description": "Deep cleaning and protection for all interior surfaces."
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Exterior Car Detailing",
                    "description": "Polishing, waxing, and restoring the shine of your car."
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Ceramic Coating",
                    "description": "Long-lasting paint protection and gloss enhancement."
                  }
                }
              ]
            }),
          }}
        />
      </head>
      <body className={`${generalSansFont.variable} ${euroStileFont.className} antialiased bg-black text-white`}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
