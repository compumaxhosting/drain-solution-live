"use client";

import React from "react";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="relative isolate flex min-h-[420px] sm:min-h-[520px] lg:min-h-[640px] w-full items-center overflow-hidden">
      {/* ================= BACKGROUND STATIC IMAGE ================= */}
      <div className="absolute inset-0 -z-20 h-full w-full">
        <Image
          src="/images/1.webp"
          alt="Hero Background"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />

        {/* Dark overlay & left vignette so text is always crisp */}
        <div className="absolute inset-0" />
        <div className="absolute inset-0" />
      </div>

      {/* ================= MAIN HERO CONTAINER (FLUSH LEFT) ================= */}
      <div className="relative z-10 w-full px-5 py-12 sm:px-10 sm:py-16 md:px-14 lg:px-20 xl:px-24">
        <div className="max-w-4xl text-left">
          
          {/* ================= MAIN HEADING ================= */}
<h1 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-[1.1] tracking-tight text-white">
  <span className="[text-shadow:_1px_1px_0_#9ca3af,_-1px_-1px_0_#9ca3af,_1px_-1px_0_#9ca3af,_-1px_1px_0_#9ca3af,_0_0_12px_rgba(156,163,175,0.4)]" >The Sewer &amp; Drain Experts{" "}</span>
  <span className="block sm:inline text-[#014485] [text-shadow:_1px_1px_0_#ffdf20,_-1px_-1px_0_#9ca3af,_1px_-1px_0_#ffdf20,_-1px_1px_0_#ffdf20,_0_0_12px_rgba(156,163,175,0.4)]">
    That You Can Trust
  </span>
</h1>
          {/* ================= REDUCED PADDING & INCREASED IMAGE WIDTH ================= */}
          <div className="mt-6 inline-block rounded-lg overflow-hidden shadow-lg bg-white border border-stone-200">
            <div className="relative h-12 sm:h-14 px-1 py-1 flex items-center justify-center">
              <Image
                src="/images/five-stars.webp"
                alt="5 Star Google Reviews"
                width={260}
                height={55}
                className="h-full w-auto object-contain object-center"
              />
            </div>
          </div>

          {/* ================= CTA BUTTON ================= */}
          <div className="mt-5 flex w-full flex-col items-stretch justify-start sm:w-auto sm:flex-row sm:items-center">
            <a
              href="tel:2018819622"
              className="inline-flex w-full sm:w-auto items-center justify-center gap-2.5 rounded-lg border border-[#e24442] bg-[#c02f2d] hover:bg-[#a82523] px-7 py-3.5 sm:px-9 sm:py-4 text-sm sm:text-base font-bold text-white shadow-lg transition-all active:scale-[0.98]"
            >
              <svg
                className="h-5 w-5 shrink-0"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
              <span>Call (201) 881-9622</span>
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}