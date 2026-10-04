import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import { siteConfig } from "@/data/site";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { MobileCTA } from "@/components/layout/MobileCTA";
import { ClientPeripherals } from "@/components/layout/ClientPeripherals";

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
  display: "swap",
  variable: "--font-sans",
  preload: true,
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
        {/* Preconnect to external font origins */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

        {/* ── GOOGLE CONSENT MODE V2 DEFAULT CONFIGURATION ── */}
        <script
          id="google-consent-mode-init"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag(consent, default, {
                ad_storage: denied,
                analytics_storage: denied,
                ad_user_data: denied,
                ad_personalization: denied,
                wait_for_update: 500
              });
              gtag(set, ads_data_redaction, true);
              try {
                var stored = localStorage.getItem(vidhya_sri_consent_settings);
                if (stored) {
                  var c = JSON.parse(stored);
                  gtag(consent, update, {
                    ad_storage: c.marketing ? granted : denied,
                    analytics_storage: c.analytics ? granted : denied,
                    ad_user_data: c.marketing ? granted : denied,
                    ad_personalization: c.marketing ? granted : denied
                  });
                }
              } catch (e) {}
            `,
          }}
        />

        {/* Non-blocking icon font loading */}
        <link
          rel="preload"
          as="style"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0..1,0&display=swap"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0..1,0&display=swap"
          media="print"
          // @ts-expect-error async font stylesheet load
          onLoad="this.media=all"
        />
        <noscript>
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0..1,0&display=swap"
          />
        </noscript>

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
        <ClientPeripherals />
      </body>
    </html>
  );
}
