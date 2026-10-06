"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function AboutSection() {
  const [inView, setInView] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full overflow-hidden bg-[#fafaf9] py-13 sm:py-18 lg:py-20"
    >
      {/* Editorial Structural Hairlines */}
      <div className="pointer-events-none absolute inset-0 flex justify-between max-w-7xl mx-auto px-6 opacity-30">
        <div className="w-[1px] h-full bg-stone-200" />
        <div className="w-[1px] h-full bg-stone-200" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-20 items-center">
          
          {/* ================= VAN DISPLAY (IMAGE FIRST ON MOBILE: order-1) ================= */}
          <div className="lg:col-span-6 relative flex flex-col items-center justify-center order-1 lg:order-1">
            
            {/* Minimalist Geometric Backdrop Accent */}
            <div className="absolute -left-8 top-1/2 -translate-y-1/2 w-64 h-64 sm:w-96 sm:h-96 rounded-full bg-stone-100 -z-10" />

            {/* Van Container With Slide-in From Left */}
            <div
              className={`relative z-10 w-full transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                inView
                  ? "translate-x-0 opacity-100"
                  : "-translate-x-20 sm:-translate-x-44 opacity-0"
              }`}
            >
              <Image
                src="/images/5.webp"
                alt="Drain Solutions Plus Service Fleet Vehicle"
                width={700}
                height={420}
                priority
                className="h-auto w-full object-contain filter drop-shadow-[0_16px_22px_rgba(0,0,0,0.18)]"
              />

              {/* Precise Horizon Contact Line & Soft Floor Vignette */}
              <div className="mx-auto -mt-4 h-3 w-[82%] rounded-[100%] bg-black/25 blur-sm" />
            </div>

            {/* Subtle Baseline Metric Bar */}
            <div className="mt-6 sm:mt-10 flex items-center justify-between w-full max-w-md pt-4 sm:pt-5 border-t border-stone-200 text-stone-500">
              <span className="text-[11px] sm:text-xs uppercase tracking-widest font-mono text-[#014485] font-semibold">
                Fleet Status: Active
              </span>
              <span className="text-[11px] sm:text-xs font-medium tracking-wide">
                Serving All New Jersey Counties
              </span>
            </div>
          </div>

          {/* ================= CONTENT COLUMN (order-2 on mobile) ================= */}
          <div className="lg:col-span-6 flex flex-col items-start space-y-6 sm:space-y-7 order-2 lg:order-2">
            
            {/* Header Lockup With Integrated 10th Anniversary Hallmark */}
            <div className="flex items-center justify-between w-full border-b border-stone-200 pb-4 sm:pb-5">
              <div className="flex items-center space-x-2.5">
                <span className="h-1.5 w-1.5 rounded-full bg-[#c02f2d]" />
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#c02f2d]">
                  Company Overview
                </span>
              </div>

              {/* 10-YEAR ELEGANT HALLMARK */}
              <div className="flex items-center space-x-2.5 rounded-full border border-stone-300/80 bg-white px-3 py-1 sm:px-3.5 shadow-xs">
                <span className="text-xs font-black font-mono text-[#014485]">10 YRS</span>
                <span className="h-3 w-[1px] bg-stone-300" />
                <span className="text-[10px] sm:text-[11px] font-semibold uppercase tracking-wider text-stone-600">
                  2016 – 2026
                </span>
              </div>
            </div>

            {/* Main Title (Updated to Signature Navy Blue #014485) */}
            <h2 className="text-2xl sm:text-4xl lg:text-[44px] font-black uppercase tracking-tight text-[#014485] leading-[1.15]">
              We Specialize In <br />
              <span className="text-[#c02f2d]">Sewer &amp; Drain Cleaning</span>
            </h2>

            {/* Body Copy */}
            <div className="space-y-3.5 sm:space-y-4 text-stone-600 text-sm sm:text-base leading-relaxed font-normal">
              <p>
                The team at <strong className="font-bold text-stone-900">DRAIN SOLUTIONS PLUS</strong> is committed to solving your toughest clogged drain problems using safe yet highly effective methods. 
              </p>
              <p>
                Whether you need immediate help with a stopped drain, a blocked toilet, or clearing out years of grime and sludge from your main sewer line—we have you covered. Our technicians offer customized drain options to fit your exact needs, backed by our commercial-grade <span className="text-stone-900 font-semibold underline decoration-[#014485] decoration-2 underline-offset-4">Power Snake Service</span>.
              </p>
            </div>

            {/* Structured Service Pillars */}
            <div className="w-full grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 pt-1 sm:pt-2">
              {[
                { no: "01", name: "Residential Drain Cleaning", note: "Sinks, baths & stacks" },
                { no: "02", name: "Commercial Drain Cleaning", note: "Heavy-duty clearing" },
                { no: "03", name: "Commercial Drain Repairs", note: "Precision line repairs" },
              ].map((item) => (
                <div
                  key={item.name}
                  className="group relative rounded-xl border border-stone-200 bg-white p-3.5 sm:p-4 transition-all duration-300 hover:border-[#014485] hover:shadow-md"
                >
                  <span className="font-mono text-xs font-bold text-stone-400 group-hover:text-[#014485] transition-colors">
                    {item.no}
                  </span>
                  <h3 className="mt-1.5 sm:mt-2 text-xs sm:text-[13px] font-bold uppercase tracking-wider text-stone-900 leading-snug">
                    {item.name}
                  </h3>
                  <p className="mt-1 text-[11px] text-stone-500">{item.note}</p>
                </div>
              ))}
            </div>

            {/* Call To Action Controls */}
            <div className="flex flex-wrap items-center gap-3 sm:gap-4 pt-2 w-full">
              <Link
                href="/about-us"
                className="inline-flex items-center justify-center px-6 sm:px-7 py-3 sm:py-3.5 rounded-lg bg-[#c02f2d] text-white font-bold text-xs uppercase tracking-widest transition-all duration-200 hover:bg-[#a62523] shadow-md shadow-red-700/20 active:scale-95"
              >
                Learn More About Us
              </Link>
              
              <a
                href="tel:2018819622"
                className="inline-flex items-center space-x-2 px-5 sm:px-6 py-3 sm:py-3.5 rounded-lg border border-stone-300 bg-white text-stone-800 font-bold text-xs uppercase tracking-widest transition-all duration-200 hover:border-[#014485] hover:text-[#014485]"
              >
                <svg className="h-4 w-4 text-[#014485]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span>Call (201) 881-9622</span>
              </a>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}