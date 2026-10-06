"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

const serviceCounties = [
  { name: "Bergen County, NJ", href: "/bergen-county-nj" },
  { name: "Essex County, NJ", href: "/essex-county-nj" },
  { name: "Hudson County, NJ", href: "/hudson-county-nj" },
  { name: "Passaic County, NJ", href: "/passaic-county-nj" },
];

export default function CoverageSection() {
  return (
    <section className="relative w-full overflow-hidden bg-[#c02f2d] py-16 sm:py-20 lg:py-10 text-white">
      {/* 80% Screen Centered Container */}
      <div className="relative z-10 mx-auto w-[92%] sm:w-[85%] lg:w-[80%] max-w-[1500px]">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-16">
          
          {/* ================= LEFT: CLEAN TYPOGRAPHY & LIST ================= */}
          <div className="flex flex-col items-start lg:col-span-7 space-y-6">
            
            {/* Live Indicator */}
            <div className="flex items-center space-x-2">
              <span className="h-2.5 w-2.5 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-white/90">
                24/7 Dispatch Available
              </span>
            </div>

            {/* Headline */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tight text-white leading-[1.15]">
              24/7 Drain &amp; Sewer Service <br />
              <span className="text-white/90 underline decoration-[#014485] decoration-4 underline-offset-8">
                Northern NJ
              </span>
            </h2>

            {/* Counties List */}
            <div className="w-full space-y-3 pt-2">
              <span className="text-xs font-bold uppercase tracking-[0.25em] text-white/80 block">
                We Service The Following Counties:
              </span>

              <ul className="space-y-3 pt-1">
                {serviceCounties.map((county) => (
                  <li key={county.href}>
                    <Link
                      href={county.href}
                      className="group inline-flex items-center gap-3.5 rounded-md py-1 pr-3 transition-colors hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#c02f2d]"
                    >
                      <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#014485] text-white transition-colors group-hover:bg-white group-hover:text-[#014485]">
                        <svg
                          className="h-3.5 w-3.5 fill-none stroke-current stroke-[3]"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      </span>
                      <span className="text-base font-bold tracking-wide text-white underline decoration-white/70 decoration-2 underline-offset-4 transition-colors group-hover:decoration-yellow-300 sm:text-lg">
                        {county.name}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Call Today Button */}
            <div className="pt-4">
              <a
                href="tel:2018819622"
                className="inline-flex items-center space-x-3 rounded-lg bg-[#014485] px-8 py-4 text-xs sm:text-sm font-extrabold uppercase tracking-widest text-white shadow-xl transition-all duration-200 hover:bg-[#013568] hover:scale-105 active:scale-95"
              >
                <div className="flex h-6 w-6 items-center justify-center rounded-full bg-white/20">
                  <svg
                    className="h-3.5 w-3.5 fill-none stroke-white stroke-2"
                    viewBox="0 0 24 24"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                </div>
                <span>Call Today: (201) 881-9622</span>
              </a>
            </div>

          </div>

          {/* ================= RIGHT: FULLY VISIBLE UNCLIPPED IMAGE ================= */}
          <div className="flex justify-center lg:justify-end lg:col-span-5 w-full">
            <div className="relative w-full max-w-[420px] flex items-center justify-center">
              <Image
                src="/images/njj.webp"
                alt="Northern New Jersey Service Area Map"
                width={500}
                height={700}
                className="w-full h-auto max-h-[620px] object-contain drop-shadow-2xl"
                priority
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}