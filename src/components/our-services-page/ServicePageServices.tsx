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

const allServicesData: ServiceItem[] = [
  // --- EXISTING SERVICES ---
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
  {
    id: "commercial-drain-cleaning",
    tag: "Heavy-Duty Jetting",
    title: "COMMERCIAL DRAIN CLEANING",
    description:
      "Keeping the drains clean in your commercial property is vital to the successful operation of your business. Without clean drains, your business will suffer and you will notice increased problems in your commercial building. At DRAIN SOLUTIONS PLUS, we work with business owners to provide guaranteed drain solutions.",
    image: "/images/client-images/commercial-drain-repair-2.webp",
    ctaText: "Commercial Cleaning",
    ctaLink: "/our-services/commercial-drain-cleaning",
  },
  {
    id: "faucet-leak-repairs",
    tag: "Fixture & Leak Care",
    title: "TOILET, FAUCET & LEAK REPAIRS",
    description:
      "At times you realise that you still have the same problem happening to your sink faucet situation over and over again. Now that’s really frustrating and you just can’t live with this. We at Drain Solutions Plus do the best to repair the faucet.\n\nIf you any more plumbing problems , we are there to help you.",
    image: "/images/client-images/kitchen-line1.webp",
    ctaText: "Leak Repairs",
    ctaLink: "/our-services/faucet-leak-repairs",
  },

  // --- NEWLY ADDED MISSING SERVICES ---
  {
    id: "sewer-and-drain-cleaning",
    tag: "Comprehensive Cleaning",
    title: "SEWER AND DRAIN CLEANING",
    description:
      "Accumulated debris, sludge, and tree roots can severely restrict your main sewer line flow. Our comprehensive sewer and drain cleaning service utilizes high-powered equipment to scour your pipes clean, preventing catastrophic backups and costly property damage for residential and commercial customers.",
    image: "/images/client-images/bathtub-drain-snakin.webp",
    ctaText: "Sewer Cleaning",
    ctaLink: "/our-services/sewer-and-drain-cleaning",
  },
  {
    id: "toilet-clogs",
    tag: "Targeted Fixture Care",
    title: "TOILET CLOGS",
    description:
      "A stubborn toilet clog can disrupt your household or business instantly. When standard plunging fails, our plumbing experts use specialized professional toilet augers to clear obstructions safely without scratching or cracking your porcelain fixtures.",
    image: "/images/client-images/toilet-clog.webp",
    ctaText: "Clear Toilet Clog",
    ctaLink: "/our-services/toilet-clogs",
  },
  {
    id: "tub-clogs",
    tag: "Bathroom Solutions",
    title: "TUB CLOGS",
    description:
      "Bathtub drains frequently accumulate hair, skin flakes, and soap residue over time, leading to slow drainage or standing water during showers. We thoroughly clear tub traps and branch lines to get your bathroom flowing perfectly again.",
    image: "/images/client-images/hair-pulled-from-tub.webp",
    ctaText: "Clear Tub Clog",
    ctaLink: "/our-services/tub-clogs",
  },
  {
    id: "sink-clogs",
    tag: "Kitchen & Bath Care",
    title: "SINK CLOGS",
    description:
      "Kitchen sinks get choked with food particles, coffee grounds, and grease, while bathroom sinks battle toothpaste and hair. We clear P-traps, tailpieces, and branch lines to restore instant, clean drainage to your sinks.",
    image: "/images/client-images/unclogged-sink-drain.webp",
    ctaText: "Clear Sink Clog",
    ctaLink: "/our-services/sink-clogs",
  },
  {
    id: "sewer-and-drain-repairs",
    tag: "Piping Restorations",
    title: "SEWER AND DRAIN REPAIRS",
    description:
      "Whether caused by shifting soil, tree root intrusion, or pipe aging, sewer and drain line damage requires prompt professional attention. We provide heavy-duty residential and commercial repair services to ensure your entire wastewater system remains secure and sanitary.",
    image: "/images/client-images/sewer-pipe-repair-1.webp",
    ctaText: "Sewer Repairs",
    ctaLink: "/our-services/sewer-and-drain-repairs",
  },
  {
    id: "sewer-and-drain-video-inspections",
    tag: "Advanced Diagnostics",
    title: "SEWER AND DRAIN VIDEO INSPECTIONS",
    description:
      "Stop guessing where your plumbing issues lie. Our advanced sewer and drain video inspection service runs a specialized high-definition camera through your entire line, projecting real-time video to locate cracks, root intrusion, and blockages with absolute precision.",
    image: "/images/client-images/sewer-video-inspection-2.webp",
    ctaText: "Video Inspection",
    ctaLink: "/our-services/sewer-and-drain-video-inspections",
  },
  {
    id: "hydro-jetting",
    tag: "High-Pressure Cleaning",
    title: "HYDRO JETTING",
    description:
      "Hydro jetting uses ultra-high-pressure streams of water to blast away stubborn grease, scale, mineral deposits, and roots from the interior walls of your pipes. It leaves your lines as clean as the day they were installed, far outperforming traditional snaking.",
    image: "/images/client-images/hydro-jetting.webp",
    ctaText: "Hydro Jetting",
    ctaLink: "/our-services/hydro-jetting",
  },
  {
    id: "flush-valve-leak-repairs",
    tag: "Valve Specialist Care",
    title: "FLUSH VALVE LEAK REPAIRS",
    description:
      "Leaking flush valves lead to constant water waste, noisy bathrooms, and escalating utility bills. Our technicians specialize in rebuilding and replacing worn flush valve diaphragms, seals, and complete assemblies for flawless, quiet operation.",
    image: "/images/client-images/shower-valve-2.webp",
    ctaText: "Repair Flush Valve",
    ctaLink: "/our-services/flush-valve-leak-repairs",
  },
  {
    id: "sump-pump-repairs-or-replacement",
    tag: "Flood Protection",
    title: "SUMP PUMP REPAIRS OR REPLACEMENT",
    description:
      "A failing sump pump can leave your basement vulnerable to severe flooding and water damage during heavy rainfall. We provide prompt diagnostics, motor repairs, and full sump pump replacements including backup battery systems to keep your property protected year-round.",
    image: "/images/client-images/sump-pump.webp",
    ctaText: "Sump Pump Services",
    ctaLink: "/our-services/sump-pump-repairs-or-replacement",
  },
  {
    id: "sewage-ejector-pumps-repairs-or-replacement",
    tag: "Wastewater Pumping",
    title: "SEWAGE EJECTOR PUMPS REPAIRS OR REPLACEMENT",
    description:
      "Basement bathrooms, laundry rooms, and wet bars rely on sewage ejector pumps to lift wastewater up to the main sewer line. If your ejector pump fails, it can cause severe backups. We offer fast repair, maintenance, and heavy-duty replacement services.",
    image: "/images/client-images/ejector.webp",
    ctaText: "Ejector Pump Services",
    ctaLink: "/our-services/sewage-ejector-pumps-repairs-or-replacement",
  },
];

export default function ServicePageServices() {
  return (
    <section className="relative w-full overflow-hidden bg-[#fafaf9] py-16 sm:py-20 lg:py-24">
      {/* 80% Screen Centered Container */}
      <div className="relative z-10 mx-auto w-[92%] sm:w-[85%] lg:w-[80%] max-w-[1500px]">
        
        {/* ================= SECTION HEADER ================= */}
        <div className="flex flex-col items-center text-center mb-12 sm:mb-16">
          <div className="flex items-center space-x-2 mb-2.5">
            <span className="h-2 w-2 rounded-full bg-[#c02f2d]" />
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#c02f2d]">
              Our Complete Range
            </span>
            <span className="h-2 w-2 rounded-full bg-[#c02f2d]" />
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tight text-[#014485]">
            Services
          </h2>

          <div className="mt-3.5 h-1 w-14 bg-[#c02f2d] rounded-full" />
        </div>

        {/* ================= ALTERNATING ROWS ================= */}
        <div className="flex flex-col space-y-12 sm:space-y-16 lg:space-y-20">
          {allServicesData.map((service, index) => {
            const isEven = index % 2 === 1;

            return (
              <div
                key={service.id}
                className="grid grid-cols-1 items-center gap-8 lg:grid-cols-12 lg:gap-12 xl:gap-14"
              >
                {/* BALANCED IMAGE COLUMN - Increased Height */}
                <div
                  className={`lg:col-span-7 w-full ${
                    isEven ? "lg:order-2" : "lg:order-1"
                  }`}
                >
                  <div className="group relative aspect-[4/3] sm:aspect-[16/11] w-full max-h-[460px] overflow-hidden rounded-xl bg-stone-100 shadow-[0_8px_22px_rgba(0,0,0,0.07)]">
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

                {/* CONTENT COLUMN */}
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
            href="/contact"
            className="group inline-flex items-center space-x-3 rounded-lg bg-[#014485] px-9 py-3.5 text-xs sm:text-sm font-bold uppercase tracking-widest text-white shadow-md shadow-blue-900/15 transition-all duration-200 hover:bg-[#013568] hover:shadow-lg active:scale-95"
          >
            <span>Request An Estimate</span>
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