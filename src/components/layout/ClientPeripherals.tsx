"use client";

import React from "react";
import dynamic from "next/dynamic";

const CustomCursor = dynamic(
  () => import("@/components/ui/CustomCursor").then((m) => m.CustomCursor),
  { ssr: false }
);

const CookieConsentBanner = dynamic(
  () => import("@/components/ui/CookieConsentBanner").then((m) => m.CookieConsentBanner),
  { ssr: false }
);

export function ClientPeripherals() {
  return (
    <>
      <CustomCursor />
      <CookieConsentBanner />
    </>
  );
}
