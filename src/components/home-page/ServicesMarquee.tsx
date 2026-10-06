"use client";

import React from "react";

const services = [
  "Sewer",
  "Drains",
  "Faucet and leak repairs",
  "Clogged Drains",
  "Toilet repairs",
  "Main line video sewer inspection",
  "Residential drain repairs and cleaning",
  "Hydro Jetting",
];

export default function ServicesMarquee() {
  return (
    <section className="relative w-full overflow-hidden bg-[#014485] py-3.5 sm:py-4 border-y-2 border-[#c02f2d] shadow-inner select-none">
      {/* Edge gradient fades for seamless entry/exit */}
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-12 sm:w-20 bg-gradient-to-r from-[#014485] to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-12 sm:w-20 bg-gradient-to-l from-[#014485] to-transparent" />

      {/* Marquee track: pauses on hover */}
      <div className="flex w-max animate-marquee hover:[animation-play-state:paused]">
        {/* Render duplicate sets to create an infinite seamless loop */}
        {[...Array(2)].map((_, setIndex) => (
          <div key={setIndex} className="flex shrink-0 items-center gap-6 sm:gap-10 pr-6 sm:pr-10">
            {services.map((item, index) => (
              <div key={`${setIndex}-${index}`} className="flex items-center gap-6 sm:gap-10">
                <span className="text-xs sm:text-sm lg:text-base uppercase tracking-wider text-white whitespace-nowrap drop-shadow-sm">
                  {item}
                </span>

                {/* Gold theme star divider */}
                <span className="flex items-center justify-center text-amber-400">
                  <svg
                    className="h-3 w-3 sm:h-3.5 sm:w-3.5 fill-current"
                    viewBox="0 0 20 20"
                    aria-hidden="true"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                </span>
              </div>
            ))}
          </div>
        ))}
      </div>

      <style jsx global>{`
        @keyframes marquee {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-marquee {
          animation: marquee 28s linear infinite;
        }
      `}</style>
    </section>
  );
}