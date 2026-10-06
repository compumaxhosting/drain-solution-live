"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

interface ServiceItem {
  id: string;
  tag: string;
  title: string;
  description: string;
  image: string;
  ctaText: string;
  ctaLink: string;
}

const servicesData: ServiceItem[] = [
  {
    id: "residential-drain-cleaning",
    tag: "Residential Solutions",
    title: "RESIDENTIAL DRAIN CLEANING",
    description:
      "Keeping the drains in your home clean and spotless is vital to preventing serious plumbing problems such as burst pipes, overflowing sinks and toilets and foul odors from permeating your home. The easiest and most effective way to prevent problems and ensure your drains are running smoothly is with professional residential drain cleaning services.\n\nAt DRAIN SOLUTIONS PLUS, we help homeowners overcome their drain issues with a series of comprehensive, safe and efficient drain cleaning services.\n\nTop notch drain cleaning specialists. We unclog 99.9% of the drains we work on. We have a variety of snake cable sizes, different machines and methods to unclogging your drains.",
    image: "/images/client-images/sink-line-cleared.webp",
    ctaText: "Drain Cleaning",
    ctaLink: "/our-services/residential-drain-cleaning",
  },
  {
    id: "residential-drain-repairs",
    tag: "Home Piping Restorations",
    title: "RESIDENTIAL DRAIN REPAIRS",
    description:
      "Drain and sewer problems are a headache for any homeowner. Not only do they cause issues with your home, but they also disrupt your routine and potentially threaten the safety of your family. When you need residential sewer line repairs or drain repairs, it’s important to call an expert you can trust to get the job done right.\n\nAt DRAIN SOLUTIONS PLUS, we provide expert solutions for all your drain repair needs. We specialize in video inspecting sewer lines with our state of the art camera technology. We have the knowledge and experience in locating where your problem is and coming up with a variety of solutions so you won’t have to experience a sewer problem again.\n\nVideo inspecting sewer line to the street to get a visual of the condition of your main line. Highly recommended to new homeowners or if you’re shopping for a house.",
    image: "/images/client-images/kitchen-cleaning.webp",
    ctaText: "Drain Repairs",
    ctaLink: "/our-services/residential-drain-repairs",
  },
  {
    id: "commercial-drain-repairs",
    tag: "Commercial & Industrial",
    title: "COMMERCIAL DRAIN REPAIRS",
    description:
      "Experiencing a drain problem on your commercial property causes serious headaches for business owners. Not only do drain problems pose serious safety and health risks, but they can also lead to loss of business and income if part of your building needs to be shut down during the repair.",
    image: "/images/client-images/iron-sewer-replaced-with-pvc1.webp",
    ctaText: "Commercial Repairs",
    ctaLink: "/our-services/commercial-drain-repairs",
  },
];

export default function ServicesSection() {
  return (
    <section className="relative w-full overflow-hidden bg-[#fafaf9] py-16 sm:py-20 lg:py-24">
      {/* 80% Screen Centered Container */}
      <div className="relative z-10 mx-auto w-[92%] sm:w-[85%] lg:w-[80%] max-w-[1500px]">
        
        {/* ================= SECTION HEADER ================= */}
        <div className="flex flex-col items-center text-center mb-12 sm:mb-16">
          <div className="flex items-center space-x-2 mb-2.5">
            <span className="h-2 w-2 rounded-full bg-[#c02f2d]" />
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#c02f2d]">
              Our Capabilities
            </span>
            <span className="h-2 w-2 rounded-full bg-[#c02f2d]" />
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tight text-[#014485]">
            Services
          </h2>

          <div className="mt-3.5 h-1 w-14 bg-[#c02f2d] rounded-full" />
        </div>

        {/* ================= 3 BALANCED ROWS ================= */}
        <div className="flex flex-col space-y-12 sm:space-y-16 lg:space-y-20">
          {servicesData.map((service, index) => {
            const isEven = index % 2 === 1;

            return (
              <div
                key={service.id}
                className="grid grid-cols-1 items-center gap-8 lg:grid-cols-12 lg:gap-12 xl:gap-14"
              >
                {/* BALANCED IMAGE COLUMN (7 of 12 columns with lower aspect ratio) */}
                <div
                  className={`lg:col-span-7 w-full ${
                    isEven ? "lg:order-2" : "lg:order-1"
                  }`}
                >
                  <div className="group relative aspect-[16/8.5] w-full max-h-[360px] overflow-hidden rounded-xl bg-stone-100 shadow-[0_8px_22px_rgba(0,0,0,0.07)]">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      sizes="(max-width: 1024px) 92vw, 48vw"
                      className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                    />
                    <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-black/5" />
                  </div>
                </div>

                {/* COMFORTABLE CONTENT COLUMN (5 of 12 columns) */}
                <div
                  className={`flex flex-col items-start lg:col-span-5 space-y-3.5 sm:space-y-4 ${
                    isEven ? "lg:order-1 lg:pr-4" : "lg:order-2 lg:pl-4"
                  }`}
                >
                  <div className="flex items-center space-x-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#c02f2d]" />
                    <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#c02f2d]">
                      {service.tag}
                    </span>
                  </div>

                  <h3 className="text-2xl sm:text-[28px] lg:text-[30px] xl:text-[32px] font-black tracking-tight text-[#014485] leading-[1.2]">
                    {service.title}
                  </h3>

                  <p className="text-[14.5px] sm:text-[15px] leading-relaxed text-stone-600 font-normal whitespace-pre-line">
                    {service.description}
                  </p>

                  <div className="pt-1">
                    <Link
                      href={service.ctaLink}
                      className="inline-flex items-center justify-center rounded-sm bg-[#c02f2d] px-7 py-3 text-xs sm:text-[13px] font-bold tracking-wider uppercase text-white shadow-sm transition-all duration-200 hover:bg-[#a62523] active:scale-95"
                    >
                      {service.ctaText}
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* ================= VIEW ALL SERVICES CTA ================= */}
        <div className="mt-14 sm:mt-18 border-t border-stone-200 pt-10 flex flex-col items-center text-center space-y-3.5">
          <span className="text-xs uppercase tracking-[0.25em] font-mono text-[#014485] font-semibold">
            Need a Custom Solution?
          </span>

          <Link
            href="/our-services"
            className="group inline-flex items-center space-x-3 rounded-lg bg-[#014485] px-9 py-3.5 text-xs sm:text-sm font-bold uppercase tracking-widest text-white shadow-md shadow-blue-900/15 transition-all duration-200 hover:bg-[#013568] hover:shadow-lg active:scale-95"
          >
            <span>View All Services</span>
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