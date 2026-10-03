"use client";

import React, { useState } from "react";
import Link from "next/link";

interface HubNode {
  id: string;
  name: string;
  slug: string;
  zone: string;
  coords: { x: number; y: number }; // Percentage in SVG canvas
  isHQ?: boolean;
  hospitals: string;
}

const hubNodes: HubNode[] = [
  {
    id: "somajiguda",
    name: "Somajiguda (HQ)",
    slug: "somajiguda",
    zone: "Central Hub",
    coords: { x: 50, y: 46 },
    isHQ: true,
    hospitals: "NIMS, Yashoda, Asian Institute of Nephrology",
  },
  {
    id: "banjara-hills",
    name: "Banjara Hills",
    slug: "banjara-hills",
    zone: "Central Belt",
    coords: { x: 38, y: 52 },
    hospitals: "Care Hospitals, Star Hospitals, Basavatarakam",
  },
  {
    id: "jubilee-hills",
    name: "Jubilee Hills",
    slug: "jubilee-hills",
    zone: "Central Belt",
    coords: { x: 30, y: 44 },
    hospitals: "Apollo Health City Jubilee Hills",
  },
  {
    id: "hitech-city",
    name: "Hitec City / Madhapur",
    slug: "hitech-city",
    zone: "Cyberabad West",
    coords: { x: 18, y: 38 },
    hospitals: "Medicover Hospitals, AIG Hospitals",
  },
  {
    id: "gachibowli",
    name: "Gachibowli",
    slug: "gachibowli",
    zone: "Cyberabad West",
    coords: { x: 14, y: 56 },
    hospitals: "Continental Hospitals, Sunshine Hospitals",
  },
  {
    id: "secunderabad",
    name: "Secunderabad",
    slug: "secunderabad",
    zone: "North Corridor",
    coords: { x: 62, y: 28 },
    hospitals: "KIMS Hospitals, Sunshine, Yashoda Secunderabad",
  },
  {
    id: "begumpet",
    name: "Begumpet",
    slug: "begumpet",
    zone: "North Corridor",
    coords: { x: 52, y: 34 },
    hospitals: "Pace Hospital, KIMS Begumpet Belt",
  },
  {
    id: "lb-nagar",
    name: "LB Nagar",
    slug: "lb-nagar",
    zone: "East Zone",
    coords: { x: 80, y: 64 },
    hospitals: "Kamineni Hospitals, Aware Gleneagles Global",
  },
  {
    id: "mehdipatnam",
    name: "Mehdipatnam",
    slug: "mehdipatnam",
    zone: "South Zone",
    coords: { x: 42, y: 68 },
    hospitals: "Olive Hospital, Sarojini Devi Eye Hospital",
  },
];

export function SpatialCoverageMap() {
  const [selectedHub, setSelectedHub] = useState<HubNode>(hubNodes[0]);

  return (
    <div className="relative w-full max-w-6xl mx-auto perspective-1000 py-4">
      {/* ── 3D Elevated Map Canvas ── */}
      <div
        className="relative bg-white border-2 border-[#DDE7F2] rounded-[6px] shadow-spatial-lg overflow-hidden preserve-3d transition-transform duration-500 hover:border-[#0A2A5E]"
        style={{
          transform: "rotateX(3deg)",
        }}
      >
        {/* Top Header Strip */}
        <div className="bg-[#F8FAFD] border-b border-[#DDE7F2] px-5 py-3.5 flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#0F8F5F] animate-pulse" />
            <span className="text-[11px] font-black uppercase tracking-widest text-[#0A2A5E]">
              Greater Hyderabad Operational Transit Grid
            </span>
          </div>
          <div className="flex items-center gap-3 text-[11px] font-bold text-[#536B86]">
            <span className="inline-flex items-center gap-1">
              <span className="w-2 h-2 rounded-full bg-[#1565D8]" /> 9 Active Dispatch Nodes
            </span>
            <span className="inline-flex items-center gap-1">
              <span className="w-2 h-2 rounded-full bg-[#0F8F5F]" /> 24×7 Rapid Ambulance Mobilization
            </span>
          </div>
        </div>

        {/* Spatial Map Graphic Area */}
        <div data-cursor="explore" className="relative w-full h-[360px] sm:h-[440px] bg-[#F8FAFD] overflow-hidden select-none">
          {/* Subtle Background Radial & Grid Pattern */}
          <svg
            className="absolute inset-0 w-full h-full text-[#1565D8]/8"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
          >
            <defs>
              <pattern
                id="spatial-map-grid"
                width="48"
                height="48"
                patternUnits="userSpaceOnUse"
              >
                <path
                  d="M 48 0 L 0 0 0 48"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="0.8"
                />
                <circle cx="0" cy="0" r="1.5" fill="currentColor" opacity="0.6" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#spatial-map-grid)" />
          </svg>

          {/* Radiating Radar rings from Somajiguda HQ */}
          <div
            className="absolute -translate-x-1/2 -translate-y-1/2 pointer-events-none rounded-full border border-[#1565D8]/15"
            style={{
              left: `${hubNodes[0].coords.x}%`,
              top: `${hubNodes[0].coords.y}%`,
              width: "280px",
              height: "280px",
            }}
          />
          <div
            className="absolute -translate-x-1/2 -translate-y-1/2 pointer-events-none rounded-full border border-[#1565D8]/10 anim-radar-pulse"
            style={{
              left: `${hubNodes[0].coords.x}%`,
              top: `${hubNodes[0].coords.y}%`,
              width: "420px",
              height: "420px",
            }}
          />

          {/* SVG Transit Connecting Corridors */}
          <svg
            className="absolute inset-0 w-full h-full pointer-events-none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {hubNodes.slice(1).map((node) => (
              <line
                key={node.id}
                x1={`${hubNodes[0].coords.x}%`}
                y1={`${hubNodes[0].coords.y}%`}
                x2={`${node.coords.x}%`}
                y2={`${node.coords.y}%`}
                stroke={selectedHub.id === node.id ? "#1565D8" : "#DDE7F2"}
                strokeWidth={selectedHub.id === node.id ? "2.5" : "1.5"}
                strokeDasharray={selectedHub.id === node.id ? "none" : "4 4"}
                className="transition-all duration-300"
              />
            ))}
          </svg>

          {/* Interactive Hub Markers */}
          {hubNodes.map((node) => {
            const isSelected = selectedHub.id === node.id;
            return (
              <button
                key={node.id}
                onClick={() => setSelectedHub(node)}
                className="absolute -translate-x-1/2 -translate-y-1/2 group focus:outline-none transition-transform duration-300"
                style={{
                  left: `${node.coords.x}%`,
                  top: `${node.coords.y}%`,
                  zIndex: isSelected ? 30 : 20,
                  transform: isSelected
                    ? "translate(-50%, -50%) scale(1.15) translateZ(18px)"
                    : "translate(-50%, -50%) scale(1)",
                }}
              >
                <div
                  className={`flex items-center gap-1.5 px-2.5 py-1 rounded-[3px] border-2 shadow-sm transition-all duration-200 ${
                    isSelected
                      ? "bg-[#0A2A5E] border-[#0A2A5E] text-white shadow-spatial"
                      : node.isHQ
                      ? "bg-[#1565D8] border-[#0A2A5E] text-white"
                      : "bg-white border-[#DDE7F2] hover:border-[#1565D8] text-[#0A2A5E]"
                  }`}
                >
                  <span
                    className={`w-2 h-2 rounded-full ${
                      isSelected || node.isHQ ? "bg-[#0F8F5F] animate-pulse" : "bg-[#1565D8]"
                    }`}
                  />
                  <span className="text-[10px] sm:text-[11px] font-black uppercase tracking-wider whitespace-nowrap">
                    {node.name}
                  </span>
                </div>
              </button>
            );
          })}

          {/* Selected Node Floating Inspection Card (Bottom Right overlay) */}
          <div className="absolute bottom-3 right-3 sm:bottom-5 sm:right-5 max-w-xs sm:max-w-sm bg-white/95 backdrop-blur-sm border-2 border-[#0A2A5E] p-4 rounded-[4px] shadow-spatial-lg z-40 transition-all duration-300">
            <div className="flex items-center justify-between gap-2 mb-1.5">
              <span className="text-[10px] font-black uppercase tracking-widest text-[#1565D8] bg-[#EAF2FC] px-2 py-0.5 rounded-[2px]">
                {selectedHub.zone}
              </span>
              <span className="text-[10px] font-extrabold uppercase text-[#0F8F5F] flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-[#0F8F5F] animate-pulse" />
                Unit Ready
              </span>
            </div>

            <h4 className="text-[15px] font-extrabold uppercase text-[#0A2A5E] mb-1">
              {selectedHub.name}
            </h4>

            <p className="text-[11.5px] font-medium text-[#536B86] leading-snug mb-3">
              <strong className="text-[#0A2A5E]">Key Hospital Clusters:</strong> {selectedHub.hospitals}
            </p>

            <div className="flex items-center gap-2 pt-2 border-t border-[#DDE7F2]">
              <Link
                href={`/coverage/${selectedHub.slug}`}
                className="text-[11px] font-black uppercase tracking-wider text-[#1565D8] hover:text-[#0A2A5E] transition-colors flex items-center gap-1"
              >
                View Node Details →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
