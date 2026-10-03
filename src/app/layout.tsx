import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import { siteConfig } from "@/data/site";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { MobileCTA } from "@/components/layout/MobileCTA";

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: {
    default: siteConfig.seo.defaultTitle,
    template: `%s | ${siteConfig.seo.siteName}`,
  },
  description: siteConfig.seo.defaultDescription,
  metadataBase: new URL(siteConfig.seo.url),
  alternates: {
    canonical: "./",
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
  icons: {
    icon: [
      { url: siteConfig.favicon.svg, type: "image/svg+xml" },
      { url: siteConfig.favicon.ico, sizes: "48x48" },
      { url: siteConfig.favicon.png32, sizes: "32x32", type: "image/png" },
      { url: siteConfig.favicon.png16, sizes: "16x16", type: "image/png" },
    ],
    apple: siteConfig.favicon.appleTouchIcon,
  },
  manifest: siteConfig.favicon.manifest,
  openGraph: {
    type: "website",
    locale: siteConfig.seo.locale,
    url: siteConfig.seo.url,
    siteName: siteConfig.seo.siteName,
    title: siteConfig.seo.defaultTitle,
    description: siteConfig.seo.defaultDescription,
    images: [
      {
        url: `${siteConfig.seo.url}${siteConfig.ogImage}`,
        width: 1200,
        height: 630,
        alt: "Vidhya Sri Ambulance - Emergency Medical Transportation Hyderabad",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.seo.defaultTitle,
    description: siteConfig.seo.defaultDescription,
    images: [`${siteConfig.seo.url}${siteConfig.ogImage}`],
  },
  other: {
    "theme-color": siteConfig.colors.navy,
  },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "EmergencyService",
  name: siteConfig.companyName,
  legalName: siteConfig.companyLegalName,
  url: siteConfig.seo.url,
  logo: `${siteConfig.seo.url}${siteConfig.logo.horizontal.navy}`,
  image: `${siteConfig.seo.url}${siteConfig.ogImage}`,
  telephone: siteConfig.phone.raw,
  priceRange: "$$",
  address: {
    "@type": "PostalAddress",
    streetAddress: siteConfig.address.street,
    addressLocality: siteConfig.address.city,
    addressRegion: siteConfig.address.state,
    postalCode: siteConfig.address.zip,
    addressCountry: "IN",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 17.4156,
    longitude: 78.4357,
  },
  areaServed: [
    {
      "@type": "City",
      name: "Hyderabad",
    },
    {
      "@type": "AdministrativeArea",
      name: "Telangana",
    },
  ],
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday",
    ],
    opens: "00:00",
    closes: "23:59",
  },
  sameAs: [
    siteConfig.socialLinks.facebook,
    siteConfig.socialLinks.instagram,
    siteConfig.socialLinks.twitter,
    siteConfig.socialLinks.youtube,
  ].filter((link) => link !== "#"),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={manrope.variable}>
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,100..700,0..1,0&display=swap"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationJsonLd),
          }}
        />
      </head>
      <body className="bg-white text-gray-900 antialiased">
        <Header />
        <main className="w-full pt-20">{children}</main>
        <Footer />
        <MobileCTA />
      </body>
    </html>
  );
}
