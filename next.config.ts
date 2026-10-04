import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  images: {
    formats: ["image/avif", "image/webp"],
  },
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "Referrer-Policy",
            value: "strict-origin-when-cross-origin",
          },
          {
            key: "X-Frame-Options",
            value: "SAMEORIGIN",
          },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=()",
          },
        ],
      },
    ];
  },
  async redirects() {
    return [
      // ── Locality Aliases (Redirect /hyderabad/* to canonical /coverage/*) ──
      {
        source: "/hyderabad",
        destination: "/coverage/hyderabad",
        permanent: true,
      },
      {
        source: "/hyderabad/:slug",
        destination: "/coverage/:slug",
        permanent: true,
      },

      // ── Core Legacy Service Routes ──
      {
        source: "/emergency-services",
        destination: "/services/emergency-ambulance",
        permanent: true,
      },
      {
        source: "/emergency-services/:path*",
        destination: "/services/emergency-ambulance",
        permanent: true,
      },
      {
        source: "/non-emergency-services",
        destination: "/services/patient-transfer-ambulance",
        permanent: true,
      },
      {
        source: "/non-emergency-services/:path*",
        destination: "/services/patient-transfer-ambulance",
        permanent: true,
      },
      {
        source: "/icu-services",
        destination: "/services/icu-ambulance",
        permanent: true,
      },
      {
        source: "/icu-services/:path*",
        destination: "/services/icu-ambulance",
        permanent: true,
      },
      {
        source: "/local-services",
        destination: "/coverage/hyderabad",
        permanent: true,
      },
      {
        source: "/local-services/:path*",
        destination: "/coverage/hyderabad",
        permanent: true,
      },
      {
        source: "/outstation-services",
        destination: "/services/outstation-ambulance",
        permanent: true,
      },
      {
        source: "/outstation-services/:path*",
        destination: "/services/outstation-ambulance",
        permanent: true,
      },
      {
        source: "/services/mortuary-transportation",
        destination: "/services/mortuary-ambulance",
        permanent: true,
      },
      {
        source: "/services/mortuary-dead-body-transportation",
        destination: "/services/mortuary-ambulance",
        permanent: true,
      },
      {
        source: "/deadbody-transport-services",
        destination: "/services/mortuary-ambulance",
        permanent: true,
      },
      {
        source: "/deadbody-transport-services/:path*",
        destination: "/services/mortuary-ambulance",
        permanent: true,
      },
      {
        source: "/deadbody-freezer-services",
        destination: "/services/dead-body-freezer-box",
        permanent: true,
      },
      {
        source: "/deadbody-freezer-services/:path*",
        destination: "/services/dead-body-freezer-box",
        permanent: true,
      },
      {
        source: "/freezer-box",
        destination: "/services/dead-body-freezer-box",
        permanent: true,
      },
      {
        source: "/dead-body-freezer-box",
        destination: "/services/dead-body-freezer-box",
        permanent: true,
      },
      {
        source: "/vip-freezer-box",
        destination: "/services/dead-body-freezer-box",
        permanent: true,
      },
      {
        source: "/mortuary-ambulance",
        destination: "/services/mortuary-ambulance",
        permanent: true,
      },

      // ── Legacy Company & Contact Routes ──
      {
        source: "/about-us",
        destination: "/about",
        permanent: true,
      },
      {
        source: "/about-us/:path*",
        destination: "/about",
        permanent: true,
      },
      {
        source: "/contact-us",
        destination: "/contact",
        permanent: true,
      },
      {
        source: "/contact-us/:path*",
        destination: "/contact",
        permanent: true,
      },

      // ── Legacy WordPress Categories, Tags, Author, Feeds ──
      {
        source: "/category/:path*",
        destination: "/services",
        permanent: true,
      },
      {
        source: "/tag/:path*",
        destination: "/services",
        permanent: true,
      },
      {
        source: "/author/:path*",
        destination: "/about",
        permanent: true,
      },
      {
        source: "/feed",
        destination: "/sitemap.xml",
        permanent: true,
      },
      {
        source: "/feed/:path*",
        destination: "/sitemap.xml",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
