"use client";

import React from "react";
import Link from "next/link";
import { localities, LocalityData } from "@/data/coverage";

interface NearbyAreasProps {
  currentLocality: LocalityData;
}

export function NearbyAreas({ currentLocality }: NearbyAreasProps) {
  // Use currentLocality.nearbyLocalities directly from verified dataset
  const nearby = currentLocality.nearbyLocalities || [];

  if (nearby.length === 0) return null;

  return (
    <div className="bg-white border-2 border-[#DDE7F2] p-6 sm:p-7 rounded-[4px] shadow-sm">
      <div className="flex items-center justify-between gap-4 mb-4 pb-3 border-b border-[#DDE7F2]">
        <div>
          <span className="text-[10px] font-black uppercase tracking-widest text-[#1565D8] block mb-1">
            Regional Dispatch Network
          </span>
          <h3 className="text-lg sm:text-xl font-extrabold uppercase text-[#0A2A5E] tracking-tight">
            Also Serving Nearby {currentLocality.name}
          </h3>
        </div>
        <Link
          href="/coverage"
          className="text-xs font-bold uppercase text-[#1565D8] hover:text-[#0A2A5E] transition-colors shrink-0"
        >
          All Hubs →
        </Link>
      </div>

      <p className="text-xs text-[#536B86] font-medium leading-relaxed mb-4">
        Our fleet stationing and arterial corridor routes allow swift dispatch coordination to adjacent residential colonies and healthcare centers near {currentLocality.name}:
      </p>

      <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
        {nearby.map((item) => (
          <Link
            key={item.slug}
            href={`/coverage/${item.slug}`}
            className="flex items-center gap-2 p-3 bg-[#F8FAFD] border border-[#DDE7F2] hover:border-[#0A2A5E] hover:bg-[#EAF2FC] rounded-[3px] transition-all group"
          >
            <span className="material-symbols-outlined text-[18px] text-[#1565D8] group-hover:scale-110 transition-transform">
              location_on
            </span>
            <span className="text-xs font-extrabold uppercase text-[#0A2A5E] truncate">
              {item.name}
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}
