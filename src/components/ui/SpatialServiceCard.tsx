"use client";

import React from "react";
import Link from "next/link";
import { ServiceData } from "@/data/services";

interface SpatialServiceCardProps {
  service: ServiceData;
  index: number;
}

export function SpatialServiceCard({ service, index }: SpatialServiceCardProps) {
  return (
    <div className="perspective-800 h-full">
      <Link
        href={`/services/${service.slug}`}
        className="group relative flex flex-col justify-between h-full bg-white border-2 border-[#DDE7F2] hover:border-[#0A2A5E] p-6 sm:p-7 rounded-[4px] shadow-sm hover:shadow-spatial-hover transition-all duration-300 ease-out hover:-translate-y-1.5 preserve-3d"
        style={{
          transform: "translateZ(0)",
        }}
      >
        {/* Subtle top indicator for index */}
        <div>
          <div className="flex items-center justify-between gap-3 mb-5">
            {/* 3D Elevated Icon Container */}
            <div className="w-12 h-12 rounded-[4px] bg-[#EAF2FC] border border-[#1565D8]/20 flex items-center justify-center text-[#1565D8] group-hover:bg-[#1565D8] group-hover:text-white group-hover:scale-105 transition-all duration-300 shadow-sm">
              <span
                className="material-symbols-outlined text-[24px]"
                style={{ fontVariationSettings: "'FILL' 1, 'wght' 700" }}
              >
                {service.icon}
              </span>
            </div>

            <div className="flex items-center gap-1.5">
              <span className="text-[10.5px] font-black uppercase tracking-widest text-[#536B86] bg-[#F8FAFD] px-2 py-0.5 border border-[#DDE7F2] rounded-[2px]">
                {String(index + 1).padStart(2, "0")}
              </span>
              <span className="text-[10px] font-bold uppercase tracking-wider text-[#1565D8] bg-[#EAF2FC] px-2 py-0.5 rounded-[2px]">
                24×7
              </span>
            </div>
          </div>

          {/* Service Title */}
          <h3 className="text-[17px] sm:text-[18px] font-extrabold uppercase tracking-tight text-[#0A2A5E] leading-snug group-hover:text-[#1565D8] transition-colors mb-2.5">
            {service.name}
          </h3>

          {/* Short Description */}
          <p className="text-[13px] font-medium text-[#536B86] leading-relaxed line-clamp-3">
            {service.shortDescription}
          </p>
        </div>

        {/* Bottom Action strip */}
        <div className="mt-6 pt-4 border-t border-[#DDE7F2] flex items-center justify-between text-[#0A2A5E] group-hover:text-[#1565D8] transition-colors">
          <span className="text-[11px] font-black uppercase tracking-wider">
            {service.cardAnchor || "View Details"}
          </span>
          <span className="material-symbols-outlined text-[18px] transition-transform duration-300 group-hover:translate-x-1">
            arrow_forward
          </span>
        </div>
      </Link>
    </div>
  );
}
