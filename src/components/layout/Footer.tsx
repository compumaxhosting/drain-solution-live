"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const servicedLocations = [
  { name: "Bergen County, NJ", href: "/bergen-county-nj" },
  { name: "Essex County, NJ", href: "/essex-county-nj" },
  { name: "Hudson County, NJ", href: "/hudson-county-nj" },
  { name: "Passaic County, NJ", href: "/passaic-county-nj" },
];

const companyLinks = [
  { name: "About Us", href: "/about-us" },
  { name: "Services", href: "/our-services" },
  { name: "Our Projects", href: "/successful-drain-sewer-projects-north-nj" },
  { name: "Reviews", href: "/reviews" },
  { name: "Contact", href: "/contact" },
];

const serviceLinks = [
  { name: "Residential Drain Cleaning", href: "/our-services/residential-drain-cleaning" },
  { name: "Residential Drain Repairs", href: "/our-services/residential-drain-repairs" },
  { name: "Commercial Drain Cleaning", href: "/our-services/commercial-drain-cleaning" },
  { name: "Commercial Drain Repairs", href: "/our-services/commercial-drain-repairs" },
  { name: "Sewer and Drain Cleaning", href: "/our-services/sewer-and-drain-cleaning" },
  { name: "Sewer and Drain Repairs", href: "/our-services/sewer-and-drain-repairs" },
];

export default function Footer() {
  const [openSection, setOpenSection] = useState<string | null>(null);

  return (
    <footer className="relative w-full bg-[#014485] text-white">
      {/* Top Red Accent Horizon Line */}
      <div className="h-1.5 w-full bg-[#c02f2d]" />

      {/* Main Content Container */}
      <div className="mx-auto w-[92%] sm:w-[88%] lg:w-[84%] max-w-[1440px] pt-14 pb-10 lg:pt-18 lg:pb-12">
        
        {/* ================= 5-COLUMN HARMONIC GRID ================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-10 pb-12 border-b border-white/15">
          
          {/* 1. BRAND & LOGO (3 cols) */}
          <div className="lg:col-span-3 flex flex-col items-start space-y-4">
            <div className="rounded-xl bg-white px-5 py-3.5 shadow-md flex items-center justify-center w-full max-w-[210px] transition-transform duration-200 hover:scale-[1.02]">
              <Image
                src="/images/logo.webp"
                alt="Drain Solutions Plus"
                width={190}
                height={80}
                className="w-full h-auto object-contain"
                priority
              />
            </div>
            <p className="text-xs sm:text-[13px] leading-relaxed text-white/80 max-w-[240px] font-normal">
              Prompt, licensed, and specialized sewer &amp; drain professionals delivering trusted emergency care throughout Northern New Jersey.
            </p>
          </div>

          {/* 2. LOCATIONS (2 cols) */}
          <div className="lg:col-span-2 space-y-3.5">
            <span className="hidden text-[11px] font-bold uppercase tracking-[0.2em] text-white/60 md:block">
              Locations
            </span>
            <button
              type="button"
              aria-expanded={openSection === "locations"}
              aria-controls="footer-locations"
              onClick={() => setOpenSection(openSection === "locations" ? null : "locations")}
              className="flex w-full items-center justify-between border-b border-white/15 pb-3 text-left text-[11px] font-bold uppercase tracking-[0.2em] text-white/60 md:hidden"
            >
              Locations
              <svg className={`h-4 w-4 transition-transform ${openSection === "locations" ? "rotate-180" : ""}`} viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </button>
            <ul id="footer-locations" className={`${openSection === "locations" ? "block" : "hidden"} space-y-2.5 text-xs text-white/90 sm:text-[13px] md:block`}>
              {servicedLocations.map((loc) => (
                <li key={loc.href} className="flex items-center space-x-1.5 transition-colors hover:text-white">
                  <span className="h-1 w-1 rounded-full bg-[#c02f2d]" />
                  <Link
                    href={loc.href}
                    className="hover:underline underline-offset-4 focus-visible:outline-none focus-visible:underline"
                  >
                    {loc.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* 3. COMPANY (2 cols) */}
          <div className="lg:col-span-2 space-y-3.5">
            <span className="hidden text-[11px] font-bold uppercase tracking-[0.2em] text-white/60 md:block">
              Company
            </span>
            <button
              type="button"
              aria-expanded={openSection === "company"}
              aria-controls="footer-company"
              onClick={() => setOpenSection(openSection === "company" ? null : "company")}
              className="flex w-full items-center justify-between border-b border-white/15 pb-3 text-left text-[11px] font-bold uppercase tracking-[0.2em] text-white/60 md:hidden"
            >
              Company
              <svg className={`h-4 w-4 transition-transform ${openSection === "company" ? "rotate-180" : ""}`} viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </button>
            <ul id="footer-company" className={`${openSection === "company" ? "block" : "hidden"} space-y-2.5 text-xs text-white/90 sm:text-[13px] md:block`}>
              {companyLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="transition-colors hover:text-white hover:underline underline-offset-4"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* 4. SERVICES (2 cols) */}
          <div className="lg:col-span-2 space-y-3.5">
            <span className="hidden text-[11px] font-bold uppercase tracking-[0.2em] text-white/60 md:block">
              Services
            </span>
            <button
              type="button"
              aria-expanded={openSection === "services"}
              aria-controls="footer-services"
              onClick={() => setOpenSection(openSection === "services" ? null : "services")}
              className="flex w-full items-center justify-between border-b border-white/15 pb-3 text-left text-[11px] font-bold uppercase tracking-[0.2em] text-white/60 md:hidden"
            >
              Services
              <svg className={`h-4 w-4 transition-transform ${openSection === "services" ? "rotate-180" : ""}`} viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </button>
            <ul id="footer-services" className={`${openSection === "services" ? "block" : "hidden"} space-y-2.5 text-xs text-white/90 sm:text-[13px] md:block`}>
              {serviceLinks.map((svc) => (
                <li key={svc.name}>
                  <Link
                    href={svc.href}
                    className="transition-colors hover:text-white hover:underline underline-offset-4 block leading-snug"
                  >
                    {svc.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* 5. INQUIRIES & ACTIONS (3 cols) */}
          <div className="lg:col-span-3 space-y-4 lg:pl-2">
            <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-white/60 block">
              Inquiries
            </span>

            <p className="text-xs sm:text-[13px] text-white/90 leading-snug">
              P.O. Box 353<br />
              Hawthorne, NJ 07507
            </p>

            {/* CTAs */}
            <div className="space-y-2 w-full max-w-[240px]">
              {/* Schedule Online Button */}
              <Link
                href="/contact"
                className="flex items-center justify-center w-full py-2.5 px-4 rounded-md border border-white/40 bg-white/10 hover:bg-white hover:text-[#014485] text-xs font-bold uppercase tracking-wider text-white transition-all duration-200 active:scale-95 shadow-xs"
              >
                Schedule Online
              </Link>

              {/* Call Today Button */}
              <a
                href="tel:2018819622"
                className="flex items-center justify-center space-x-2 w-full py-2.5 px-4 rounded-md bg-[#c02f2d] hover:bg-[#a62523] text-xs font-bold uppercase tracking-wider text-white transition-all duration-200 active:scale-95 shadow-md"
              >
                <svg className="h-3.5 w-3.5 fill-none stroke-current stroke-2" viewBox="0 0 24 24">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                <span>(201) 881-9622</span>
              </a>
            </div>

            {/* Social Icons */}
            <div className="flex items-center space-x-2.5 pt-1 text-white/80">
              <a
                href="https://www.facebook.com/people/Drain-Solutions-Plus/61594994970578/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="flex h-7 w-7 items-center justify-center rounded-full bg-[#1877f2] hover:scale-110 transition-transform shadow-sm"
              >
                <svg className="h-3.5 w-3.5 fill-white" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                </svg>
              </a>

              <a
                href="https://www.instagram.com/drainsolutionsplus"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="flex h-7 w-7 items-center justify-center rounded-full bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888] hover:scale-110 transition-transform shadow-sm"
              >
                <svg className="h-3.5 w-3.5 fill-white" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a
                href="https://www.yelp.com/biz/drain-solutions-plus-clifton-6"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Yelp"
                className="flex h-7 w-7 items-center justify-center rounded-full bg-white hover:scale-110 transition-transform shadow-sm"
              >
                <Image src="/images/yelp-icon.webp" alt="" width={20} height={20} className="h-5 w-5 object-contain" />
              </a>
              <a
                href="https://www.youtube.com/channel/UC_Wp9WULUYRAF9ao0Fmzb2Q"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                className="flex h-7 w-7 items-center justify-center rounded-full bg-[#ff0000] hover:scale-110 transition-transform shadow-sm"
              >
                <svg className="h-3.5 w-3.5 fill-white" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.6 12 3.6 12 3.6s-7.5 0-9.4.5A3 3 0 0 0 .5 6.2 31 31 0 0 0 0 12a31 31 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.9.5 9.4.5 9.4.5s7.5 0 9.4-.5a3 3 0 0 0 2.1-2.1A31 31 0 0 0 24 12a31 31 0 0 0-.5-5.8ZM9.6 15.6V8.4l6.2 3.6-6.2 3.6Z" />
                </svg>
              </a>
            </div>
          </div>

        </div>

        {/* ================= BOTTOM BAR ================= */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-[11px] text-white/50 space-y-2 sm:space-y-0">
          <p>© 2026 Drain Solutions Plus. All Rights Reserved.</p>
        </div>

      </div>
    </footer>
  );
}