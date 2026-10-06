"use client";

import React, { useState, useEffect, useCallback } from "react";
import Link from "next/link";

interface Review {
  id: number;
  name: string;
  location: string;
  county: string;
  countyHref: string;
  rating: number;
  service: string;
  review: string;
}

const reviewsData: Review[] = [
  {
    id: 1,
    name: "Michael R.",
    location: "Paramus, NJ",
    county: "Bergen County",
    countyHref: "/bergen-county-nj",
    rating: 5,
    service: "Emergency Drain Cleaning",
    review:
      "Our basement sewer line started backing up on a Sunday morning. Drain Solutions Plus arrived within 45 minutes, found the root intrusion using camera inspection, and cleared it completely.",
  },
  {
    id: 2,
    name: "Sarah L.",
    location: "Montclair, NJ",
    county: "Essex County",
    countyHref: "/essex-county-nj",
    rating: 5,
    service: "Residential Drain Repairs",
    review:
      "Super professional crew! They explained the whole repair process clearly, gave an honest upfront estimate, and left the bathroom spotless. True lifesavers for our old piping.",
  },
  {
    id: 3,
    name: "David K.",
    location: "Hoboken, NJ",
    county: "Hudson County",
    countyHref: "/hudson-county-nj",
    rating: 5,
    service: "Commercial Hydro Jetting",
    review:
      "We manage a high-traffic restaurant in Hoboken with ongoing grease trap issues. Their heavy-duty jetting cleared lines that two other plumbers gave up on. Reliable and fast.",
  },
  {
    id: 4,
    name: "Anthony M.",
    location: "Wayne, NJ",
    county: "Passaic County",
    countyHref: "/passaic-county-nj",
    rating: 5,
    service: "Main Line Video Inspection",
    review:
      "The HD camera diagnostic pinpointed our cracked sewer line right under the driveway without tearing up the lawn. Top-notch equipment and friendly technicians.",
  },
  {
    id: 5,
    name: "Jennifer P.",
    location: "Hackensack, NJ",
    county: "Bergen County",
    countyHref: "/bergen-county-nj",
    rating: 5,
    service: "Faucet & Leak Repairs",
    review:
      "Prompt, courteous, and transparent pricing. They quickly repaired our leaking subfloor branch lines and inspected the rest of the lines proactively. Highly recommend!",
  },
];

export default function ReviewsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % reviewsData.length);
  }, []);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + reviewsData.length) % reviewsData.length);
  };

  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      nextSlide();
    }, 2000);

    return () => clearInterval(interval);
  }, [isPaused, nextSlide]);

  return (
    <section className="relative w-full overflow-hidden bg-white py-16 sm:py-20 lg:py-24 text-slate-900">
      {/* 80% Screen Centered Container */}
      <div className="relative z-10 mx-auto w-[92%] sm:w-[85%] lg:w-[80%] max-w-[1400px]">
        
        {/* ================= HEADER ================= */}
        <div className="flex flex-col items-center text-center mb-12 sm:mb-16">
          <div className="flex items-center space-x-2 mb-2.5">
            <span className="h-2 w-2 rounded-full bg-[#c02f2d]" />
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#c02f2d]">
              Verified Client Feedback
            </span>
            <span className="h-2 w-2 rounded-full bg-[#c02f2d]" />
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tight text-[#014485]">
            What Our Customers Say
          </h2>

          <div className="mt-3.5 h-1 w-14 bg-[#c02f2d] rounded-full" />
        </div>

        {/* ================= SLIDER CAROUSEL ================= */}
        <div
          className="relative w-full"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Viewport Mask */}
          <div className="overflow-hidden py-4">
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{
                transform: `translateX(-${currentIndex * 100}%)`,
              }}
            >
              {reviewsData.map((item, idx) => {
                const isEven = idx % 2 === 1;
                const cardBg = isEven ? "bg-[#c02f2d]" : "bg-[#014485]";
                const pillBg = isEven ? "bg-[#014485]" : "bg-[#c02f2d]";

                return (
                  <div
                    key={item.id}
                    className="w-full flex-shrink-0 px-2 sm:px-4 md:px-8 flex justify-center"
                  >
                    {/* Alternating Red / Blue Card */}
                    <div
                      className={`relative w-full max-w-[850px] rounded-2xl ${cardBg} p-7 sm:p-10 lg:p-12 shadow-xl text-white flex flex-col justify-between`}
                    >
                      <div>
                        {/* Top Bar: Stars + Alternating Pill Tag */}
                        <div className="flex flex-wrap items-center justify-between gap-3 pb-6 border-b border-white/20">
                          {/* 5 Stars */}
                          <div className="flex items-center space-x-1 text-amber-300">
                            {[...Array(item.rating)].map((_, i) => (
                              <svg
                                key={i}
                                className="h-5 w-5 fill-current"
                                viewBox="0 0 20 20"
                              >
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </svg>
                            ))}
                          </div>

                          {/* Contrasting Pill Tag */}
                          <span
                            className={`rounded-full ${pillBg} px-3.5 py-1 text-[11px] font-bold uppercase tracking-wider text-white shadow-sm border border-white/25`}
                          >
                            {item.service}
                          </span>
                        </div>

                        {/* Review Quote Body */}
                        <p className="pt-6 text-base sm:text-lg lg:text-xl font-normal leading-relaxed text-white/95 italic">
                          &ldquo;{item.review}&rdquo;
                        </p>
                      </div>

                      {/* Author & Verification Footer */}
                      <div className="pt-8 flex items-center justify-between">
                        <div>
                          <h4 className="text-base sm:text-lg font-bold text-white tracking-wide">
                            {item.name}
                          </h4>
                          <p className="text-xs sm:text-sm text-white/80 font-medium">
                            {item.location} (
                            <Link
                              href={item.countyHref}
                              className="underline decoration-white/60 underline-offset-2 hover:decoration-white focus-visible:outline-none focus-visible:underline"
                            >
                              {item.county}
                            </Link>
                            )
                          </p>
                        </div>

                        {/* Verified Tag */}
                        <div className="flex items-center space-x-1.5 text-emerald-300 text-xs font-bold uppercase tracking-wider">
                          <svg className="h-4 w-4 fill-current" viewBox="0 0 20 20">
                            <path
                              fillRule="evenodd"
                              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                              clipRule="evenodd"
                            />
                          </svg>
                          <span>Verified Job</span>
                        </div>
                      </div>

                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* ================= CONTROLS & PAGINATION ================= */}
          <div className="mt-8 flex items-center justify-center space-x-6">
            {/* Prev Button */}
            <button
              onClick={prevSlide}
              aria-label="Previous Review"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-[#014485] text-white shadow-md transition-all hover:bg-[#003366] hover:scale-110 active:scale-95"
            >
              <svg className="h-5 w-5 fill-none stroke-current stroke-2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            {/* Indicators */}
            <div className="flex items-center space-x-2">
              {reviewsData.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  aria-label={`Go to review ${idx + 1}`}
                  className={`h-2.5 rounded-full transition-all duration-300 ${
                    currentIndex === idx
                      ? "w-8 bg-[#c02f2d]"
                      : "w-2.5 bg-stone-300 hover:bg-stone-400"
                  }`}
                />
              ))}
            </div>

            {/* Next Button */}
            <button
              onClick={nextSlide}
              aria-label="Next Review"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-[#014485] text-white shadow-md transition-all hover:bg-[#003366] hover:scale-110 active:scale-95"
            >
              <svg className="h-5 w-5 fill-none stroke-current stroke-2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

        </div>

      </div>
    </section>
  );
}