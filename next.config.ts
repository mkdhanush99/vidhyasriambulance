import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  images: {
    formats: ["image/avif", "image/webp"],
  },
  async redirects() {
    return [
      {
        source: "/emergency-services",
        destination: "/services/emergency-ambulance",
        permanent: true,
      },
      {
        source: "/non-emergency-services",
        destination: "/services/patient-transfer-ambulance",
        permanent: true,
      },
      {
        source: "/icu-services",
        destination: "/services/icu-ambulance",
        permanent: true,
      },
      {
        source: "/local-services",
        destination: "/coverage",
        permanent: true,
      },
      {
        source: "/outstation-services",
        destination: "/services/outstation-ambulance",
        permanent: true,
      },
      {
        source: "/deadbody-transport-services",
        destination: "/services/mortuary-transportation",
        permanent: true,
      },
      {
        source: "/deadbody-freezer-services",
        destination: "/services/mortuary-transportation",
        permanent: true,
      },
      {
        source: "/about-us",
        destination: "/about",
        permanent: true,
      },
      {
        source: "/contact-us",
        destination: "/contact",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
