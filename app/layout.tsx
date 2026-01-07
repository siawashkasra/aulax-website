import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://aulax.app"),
  title: {
    default: "Aulax - Connecting You to the Local Marketplace",
    template: "%s | Aulax",
  },
  description: "Explore your local market with excitement! Aulax makes it easy and fun to discover nearby shops and amazing deals at your favourite stores. Connect with local businesses, earn rewards, and shop sustainably.",
  keywords: [
    "local marketplace",
    "local shopping",
    "local businesses",
    "community marketplace",
    "local deals",
    "shopping app",
    "local rewards",
    "sustainable shopping",
    "local market",
    "neighborhood shopping",
  ],
  authors: [{ name: "Aulax" }],
  creator: "Aulax",
  publisher: "Aulax",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: "/App icon/Aulax-App icon.svg",
    apple: "/App icon/Aulax-App icon.svg",
  },
  manifest: "/manifest.json",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    siteName: "Aulax",
    title: "Aulax - Connecting You to the Local Marketplace",
    description: "Explore your local market with excitement! Aulax makes it easy and fun to discover nearby shops and amazing deals at your favourite stores.",
    images: [
      {
        url: "/images/hero-market.jpg",
        width: 1200,
        height: 630,
        alt: "Aulax - Local Marketplace",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Aulax - Connecting You to the Local Marketplace",
    description: "Explore your local market with excitement! Aulax makes it easy and fun to discover nearby shops and amazing deals at your favourite stores.",
    images: ["/images/hero-market.jpg"],
    creator: "@aulax",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    // Add your verification codes here when available
    // google: "your-google-verification-code",
    // yandex: "your-yandex-verification-code",
    // bing: "your-bing-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://aulax.app";

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Aulax",
    url: baseUrl,
    logo: `${baseUrl}/App icon/Aulax-App icon.svg`,
    description:
      "Aulax connects you to the local marketplace, making it easy to discover nearby shops and amazing deals at your favourite stores.",
    contactPoint: {
      "@type": "ContactPoint",
      email: "enquiry@aulax.app",
      contactType: "Customer Service",
    },
    address: {
      "@type": "PostalAddress",
      addressLocality: "London",
      addressCountry: "UK",
    },
    sameAs: [
      // Add your social media links here
      // "https://twitter.com/aulax",
      // "https://facebook.com/aulax",
      // "https://instagram.com/aulax",
      // "https://linkedin.com/company/aulax",
      // "https://youtube.com/@aulax",
    ],
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Aulax",
    url: baseUrl,
    description:
      "Explore your local market with excitement! Aulax makes it easy and fun to discover nearby shops and amazing deals at your favourite stores.",
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${baseUrl}/search?q={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  };

  const softwareApplicationSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Aulax",
    applicationCategory: "ShoppingApplication",
    operatingSystem: "iOS, Android",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.8",
      ratingCount: "150",
    },
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareApplicationSchema) }}
        />
      </head>
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
