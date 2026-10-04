"use client";

import React from "react";

export function CookiePreferencesButton() {
  return (
    <button
      type="button"
      onClick={() => {
        if (typeof window !== "undefined") {
          window.dispatchEvent(new Event("open_cookie_preferences"));
        }
      }}
      className="hover:text-[#38A3F7] transition-colors text-left cursor-pointer"
    >
      Cookie Preferences
    </button>
  );
}
