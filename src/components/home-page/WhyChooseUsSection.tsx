"use client";

import React from "react";
import Link from "next/link";

const pillars = [
  {
    title: "Committed & Highly Rated",
    desc: "Top-tier drain cleaning and reliable results on every job.",
  },
  {
    title: "Insured & Bonded",
    desc: "Licensed technicians treating your home or business with care.",
  },
  {
    title: "Same-Day Fast Response",
    desc: "Emergency dispatch across Northern New Jersey when you need it.",
  },
];

export default function WhyChooseUsSection() {
  return (
    <section className="relative w-full overflow-hidden bg-[#014485] py-12 sm:py-14 text-white">
      {/* 80% Screen Centered Container */}
      <div className="relative z-10 mx-auto w-[92%] sm:w-[86%] lg:w-[80%] max-w-[1440px]">
        
        {/* Header & Quick Intro */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-8 border-b border-white/15">
          <div>
            <div className="flex items-center space-x-2 mb-2">
              <span className="h-1.5 w-1.5 rounded-full bg-[#c02f2d]" />
              <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-white/70">
                The Plus Difference
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black uppercase tracking-tight text-white">
              Why Choose Drain Solutions Plus
            </h2>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded bg-white px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-[#014485] transition-all hover:bg-white/90 active:scale-95"
            >
              Schedule Online
            </Link>
            <a
              href="tel:2018819622"
              className="inline-flex items-center justify-center rounded bg-[#c02f2d] px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-white transition-all hover:bg-[#a62523] active:scale-95"
            >
              (201) 881-9622
            </a>
          </div>
        </div>

        {/* Streamlined Horizontal Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-8">
          {pillars.map((item, idx) => (
            <div key={item.title} className="flex items-start space-x-3.5">
              <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-white/10 text-xs font-bold font-mono text-white/80">
                0{idx + 1}
              </span>
              <div>
                <h3 className="text-base font-bold text-white tracking-wide">
                  {item.title}
                </h3>
                <p className="mt-1 text-xs sm:text-[13px] font-light text-white/80 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}