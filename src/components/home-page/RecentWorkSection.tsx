"use client";

import React from "react";
import Link from "next/link";

export default function RecentWorkSection() {
  return (
    <section className="relative w-full overflow-hidden bg-[#c02f2d] py-16 sm:py-20 lg:py-24 text-white">
      {/* 80% Screen Centered Container */}
      <div className="relative z-10 mx-auto w-[92%] sm:w-[85%] lg:w-[80%] max-w-[1300px] flex flex-col items-center text-center">
        
        {/* ================= CENTERED HEADER ================= */}
        <div className="flex flex-col items-center space-y-3 mb-10 sm:mb-12 max-w-2xl">
          <div className="flex items-center space-x-2">
            <span className="h-1.5 w-1.5 rounded-full bg-white" />
            <span className="text-[11px] font-bold uppercase tracking-[0.22em] text-white/80">
              Field Footage &amp; Diagnostics
            </span>
            <span className="h-1.5 w-1.5 rounded-full bg-white" />
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tight text-white">
            Recent Work
          </h2>

          <div className="h-1 w-14 bg-white rounded-full mt-1" />

          <p className="text-sm sm:text-base text-white/85 font-normal leading-relaxed pt-2">
            Take a look inside our high-definition main line video scans and trenchless restorations in action across Northern New Jersey homes and facilities.
          </p>
        </div>

        {/* ================= CENTERED VIDEO EMBED ================= */}
        <div className="w-full max-w-[1000px] overflow-hidden rounded-2xl bg-black shadow-[0_20px_40px_rgba(0,0,0,0.35)] border-2 border-white/20">
          <div className="relative aspect-[16/9] w-full">
            {/* HTML5 Native Video Player */}
            <video
              className="h-full w-full object-cover"
              controls
              playsInline
              preload="metadata"
              poster="/vids/vid-img.webp"
            >
              <source src="/vids/vid.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>

        {/* ================= PORTFOLIO CTA BUTTON ================= */}
        <div className="mt-10 sm:mt-12">
          <Link
            href="/successful-drain-sewer-projects-north-nj"
            className="group inline-flex items-center space-x-3 rounded-lg bg-[#014485] px-10 py-3.5 text-xs sm:text-sm font-bold uppercase tracking-widest text-white shadow-xl border border-white/20 transition-all duration-200 hover:bg-[#003366] hover:scale-105 active:scale-95"
          >
            <span>Portfolio</span>
            <svg
              className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2.5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </Link>
        </div>

      </div>
    </section>
  );
}