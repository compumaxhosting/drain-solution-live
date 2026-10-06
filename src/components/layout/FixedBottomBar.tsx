"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { serviceGroups } from "./serviceNavigation";

interface FixedBottomBarProps {
  /** Phone number for the Call Now action (e.g., "+1234567890") */
  phoneNumber: string;
  /** Link or anchor for the Services button (default: "#services") */
  servicesHref?: string;
  /** Link or anchor for the Location button (default: "#location") */
  locationHref?: string;
  /** Optional custom class name for styling container extensions */
  className?: string;
}

export const FixedBottomBar: React.FC<FixedBottomBarProps> = ({
  phoneNumber,
  servicesHref = '#services',
  locationHref = '#location',
  className = '',
}) => {
  const [servicesOpen, setServicesOpen] = useState(false);

  useEffect(() => {
    if (!servicesOpen) return;

    const previousOverflow = document.body.style.overflow;
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setServicesOpen(false);
    };

    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", closeOnEscape);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", closeOnEscape);
    };
  }, [servicesOpen]);

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 ${servicesOpen ? "z-[200]" : "z-50"} bg-[#c02f2d] backdrop-blur-md border-t border-yellow-400 shadow-[0_-4px_20px_rgba(234,179,8,0.15)] md:hidden pb-[env(safe-area-inset-bottom)] ${className}`}
    >
      <div className="grid grid-cols-3 h-16 px-2 py-1 gap-1 text-white">
        
        {/* Call Now Button (Primary CTA) */}
        <a
          href={`tel:${phoneNumber}`}
          className="flex flex-col items-center justify-center rounded-xltext-[#ffdf20] hover:bg-yellow-600/60 active:scale-95 transition-all group"
          aria-label="Call Now"
        >
          <svg className="w-5 h-5 mb-0.5 text-[#ffdf20] group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
            />
          </svg>
          <span className="text-[11px] font-bold tracking-wide text-[#ffdf20]">Call Now</span>
        </a>

        {/* Services Button */}
        <button
          type="button"
          onClick={() => setServicesOpen(true)}
          className="flex flex-col items-center justify-center rounded-xl text-white hover:bg-yellow-600/40 active:scale-95 transition-all group"
          aria-label="View Services"
          aria-haspopup="dialog"
          aria-expanded={servicesOpen}
        >
          <svg className="w-5 h-5 mb-0.5 text-[#ffdf20] group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
            />
          </svg>
          <span className="text-[11px] font-medium text-[#ffdf20]">Services</span>
        </button>

        {/* Location Button */}
        <a
          href={locationHref}
          className="flex flex-col items-center justify-center rounded-xl text-[#ffdf20] hover:bg-yellow-600/40 active:scale-95 transition-all group"
          aria-label="View Location"
        >
          <svg className="w-5 h-5 mb-0.5 text-[#ffdf20] group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
            />
          </svg>
          <span className="text-[11px] font-medium text-[#ffdf20]">Location</span>
        </a>

      </div>

      {servicesOpen && (
        <div
          className="fixed inset-0 z-[201] flex items-end justify-center bg-slate-950/55 px-3 pt-6 pb-[calc(env(safe-area-inset-bottom)+1rem)] backdrop-blur-sm"
          onClick={() => setServicesOpen(false)}
        >
          <section
            role="dialog"
            aria-modal="true"
            aria-labelledby="bottom-bar-services-title"
            aria-describedby="bottom-bar-services-description"
            className="flex max-h-[min(82dvh,44rem)] w-full max-w-lg flex-col overflow-hidden rounded-3xl border border-white/15 bg-white shadow-[0_24px_80px_rgba(0,0,0,0.35)] animate-in slide-in-from-bottom-4 duration-200"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="flex items-start justify-between border-b border-slate-100 px-5 pb-4 pt-5">
              <div className="pr-4">
                <p className="mb-1 text-[11px] font-bold uppercase tracking-[0.18em] text-[#c02f2d]">
                  Drain Solutions Plus
                </p>
                <h2 id="bottom-bar-services-title" className="text-xl font-bold text-slate-900">
                  Explore our services
                </h2>
                <p id="bottom-bar-services-description" className="mt-1 text-sm text-slate-500">
                  Find the right drain, sewer, or plumbing service.
                </p>
              </div>
              <button
                type="button"
                onClick={() => setServicesOpen(false)}
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-slate-100 text-slate-600 transition hover:bg-slate-200 hover:text-slate-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#c02f2d]"
                aria-label="Close services"
                autoFocus
              >
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 6l12 12M18 6 6 18" />
                </svg>
              </button>
            </div>

            <div className="overflow-y-auto overscroll-contain px-5 py-2">
              {serviceGroups.map((group) => (
                <div key={group.title} className="py-3">
                  <h3 className="mb-2 text-xs font-bold uppercase tracking-[0.14em] text-slate-500">
                    {group.title}
                  </h3>
                  <div className="space-y-1">
                    {group.items.map((service) => (
                      <Link
                        key={service.href}
                        href={service.href}
                        onClick={() => setServicesOpen(false)}
                        className="group flex items-center justify-between gap-3 rounded-xl px-3 py-3 transition hover:bg-red-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#c02f2d]"
                      >
                        <span className="min-w-0">
                          <span className="block text-sm font-semibold text-slate-800 group-hover:text-[#a82422]">
                            {service.name}
                          </span>
                          {service.desc && (
                            <span className="mt-0.5 block text-xs text-slate-500">
                              {service.desc}
                            </span>
                          )}
                        </span>
                        <svg className="h-4 w-4 shrink-0 text-slate-400 transition group-hover:translate-x-0.5 group-hover:text-[#c02f2d]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14m-6-6 6 6-6 6" />
                        </svg>
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div className="border-t border-slate-100 bg-slate-50 px-5 py-3">
              <Link
                href={servicesHref}
                onClick={() => setServicesOpen(false)}
                className="flex items-center justify-center rounded-xl bg-[#c02f2d] px-4 py-3 text-sm font-bold text-white transition hover:bg-[#a82422] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#c02f2d] focus-visible:ring-offset-2"
              >
                View all services
              </Link>
            </div>
          </section>
        </div>
      )}
    </div>
  );
};