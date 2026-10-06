"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { serviceGroups } from "./serviceNavigation";

interface NavItem {
  name: string;
  href: string;
  hasDropdown?: boolean;
}

const navLinks: NavItem[] = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about-us" },
  { name: "Services", href: "/our-services", hasDropdown: true },
  { name: "Residential", href: "/", hasDropdown: true },
  { name: "Commercial", href: "/commercial-drain-and-sewer", hasDropdown: true },
  { name: "Projects", href: "/successful-drain-sewer-projects-north-nj" },
  { name: "Contact", href: "/contact" },
  { name: "Reviews", href: "/reviews" },
];

export default function Header() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState<string | null>(null);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  const diagonalCut = "polygon(0 0, 100% 0, calc(100% - 24px) 100%, 0 100%)";

  return (
    <header className="sticky top-0 z-[100] w-full bg-[#c02f2d] shadow-md">
      <div className="mx-auto flex h-16 w-full max-w-[1920px] items-center justify-between pr-2 sm:h-[88px] sm:pr-5 lg:h-[100px] lg:pr-8 2xl:h-[112px]">
        
        {/* ================= LEFT SECTION: LOGO TAB + BADGE ================= */}
        <div className="flex items-center h-full shrink-0 overflow-visible">
          <div
            className="relative z-20 h-full p-[3px] sm:p-[4px] bg-[#c02f2d] shrink-0 select-none shadow-md"
            style={{ clipPath: diagonalCut }}
          >
            <div
              className="h-full w-full p-[2.5px] sm:p-[3px] bg-[#014485]"
              style={{ clipPath: diagonalCut }}
            >
              <div
                className="h-full flex items-center bg-white pl-2 xs:pl-3.5 sm:pl-6 lg:pl-8 pr-7 xs:pr-8 sm:pr-10 md:pr-12 lg:pr-14"
                style={{ clipPath: diagonalCut }}
              >
                <Link href="/" className="inline-flex items-center">
                  <Image
                    src="/images/logo.webp"
                    alt="Drain Solution Plus company logo"
                    width={380}
                    height={100}
                    priority
                    className="h-[clamp(50px,16vw,72px)] w-[clamp(96px,32vw,180px)] object-contain transition-transform duration-200 hover:scale-105 sm:h-[72px] sm:w-[200px] md:w-[220px] lg:h-[82px] lg:w-[260px] 2xl:h-[90px] 2xl:w-[300px]"
                  />
                </Link>
              </div>
            </div>
          </div>

          <div className="z-20 ml-3 hidden shrink-0 items-center md:flex lg:ml-5 xl:hidden">
            <Image
              src="/images/batch.webp"
              alt="Anniversary Badge"
              width={160}
              height={160}
              priority
              className="h-16 w-16 object-contain drop-shadow-md transition-transform duration-200 hover:scale-105 lg:h-20 lg:w-20"
            />
          </div>
        </div>

        {/* ================= DESKTOP NAVIGATION LINKS ================= */}
        <nav aria-label="Main navigation" className="hidden min-w-0 flex-1 items-center justify-center gap-3 px-2 2xl:flex 2xl:gap-4 2xl:px-3">
          {navLinks.map((item) => {
            const isActive =
              item.href === "/"
                ? pathname === "/" && item.name === "Home"
                : pathname.startsWith(item.href);

            if (item.hasDropdown) {
              const matchedGroup = serviceGroups.find(
                (grp) => grp.title.toLowerCase() === item.name.toLowerCase()
              );

              return (
                <div key={item.name} className="group relative shrink-0 py-6">
                  <Link
                    href={item.href}
                    className={`flex items-center whitespace-nowrap text-xs uppercase tracking-wide text-white transition-all hover:text-white/80 2xl:text-[13px] ${
                      isActive ? "text-white" : "text-white/95"
                    }`}
                  >
                    <span>{item.name}</span>
                    <svg
                      className="ml-1 h-3.5 w-3.5 fill-current transition-transform duration-200 group-hover:rotate-180"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>

                    {isActive && (
                      <span className="absolute bottom-4 left-0 h-[2px] w-full rounded-full bg-white shadow-xs" />
                    )}
                  </Link>

                  {/* Dropdown Menu with hover bridge */}
                  <div className="absolute left-1/2 top-full z-[120] hidden -translate-x-1/2 pt-2 group-hover:block group-focus-within:block">
                    <div className={`${item.name === "Services" ? "w-[min(760px,calc(100vw-2rem))]" : "w-[320px]"} max-h-[70vh] max-w-[calc(100vw-2rem)] overflow-y-auto rounded-xl bg-[#a82422] border border-white/20 py-3 px-2 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.5)]`}>
                      {matchedGroup && (
                        <div className={item.name === "Services" ? "grid grid-cols-3 gap-1" : "space-y-1"}>
                          {matchedGroup.items.map((svc) => (
                            <Link
                              key={svc.name}
                              href={svc.href}
                              className={`group/item block rounded-lg transition-all duration-150 hover:bg-white/10 ${item.name === "Services" ? "px-2 py-3" : "px-3 py-2.5"}`}
                            >
                              <div className="flex items-center justify-between">
                                <span className="min-w-0 flex-1 break-words text-xs uppercase tracking-wide text-white group-hover/item:text-amber-300 transition-colors">
                                  {svc.name}
                                </span>
                                <span className="ml-1 shrink-0 text-xs text-white/50 group-hover/item:text-white transition-transform">
                                  →
                                </span>
                              </div>
                              {svc.desc && (
                                <p className="text-[10.5px] text-white/70 transition-colors line-clamp-1 mt-0.5">
                                  {svc.desc}
                                </p>
                              )}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              );
            }

            return (
              <div key={item.name} className="relative shrink-0 py-6">
                <Link
                  href={item.href}
                  className={`whitespace-nowrap text-xs uppercase tracking-wide transition-all hover:text-white/80 2xl:text-[13px] ${
                    isActive ? "text-white" : "text-white/95"
                  }`}
                >
                  {item.name}
                  {isActive && (
                    <span className="absolute bottom-4 left-0 h-[2px] w-full rounded-full bg-white shadow-xs" />
                  )}
                </Link>
              </div>
            );
          })}
        </nav>

        {/* ================= RIGHT SECTION ================= */}
        <div className="z-20 hidden shrink-0 items-center space-x-3 2xl:flex">
          <Image
            src="/images/batch.webp"
            alt="Anniversary Badge"
            width={95}
            height={95}
            priority
            className="h-[72px] w-[72px] object-contain drop-shadow-lg transition-transform duration-200 hover:scale-105"
          />

          <a
            href="tel:2018819622"
            className="inline-flex items-center space-x-2 whitespace-nowrap rounded-full bg-yellow-300 px-3 py-2.5 text-xs font-bold uppercase tracking-wide text-[#c02f2d] shadow-sm transition hover:bg-white active:scale-95"
          >
            <svg
              className="h-4 w-4 fill-none stroke-current stroke-2"
              viewBox="0 0 24 24"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
            </svg>
            <span>Call Now</span>
          </a>
        </div>

        {/* ================= HEADER CONTROLS (Mobile & Tablets) ================= */}
        <div className="z-20 flex shrink-0 items-center gap-1 sm:gap-2 lg:gap-3 2xl:hidden">
          <a
            href="tel:2018819622"
            className="flex h-10 w-10 items-center justify-center rounded-full bg-yellow-300 text-[#c02f2d] text-xs font-bold uppercase tracking-wide shadow-sm transition hover:bg-white active:scale-95 sm:h-auto sm:w-auto sm:space-x-1 sm:px-3 sm:py-2"
            aria-label="Call Now"
          >
            <svg
              className="h-4 w-4 fill-none stroke-current stroke-2"
              viewBox="0 0 24 24"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
            </svg>
            <span className="hidden sm:inline">Call Now</span>
          </a>

          <Link
            href="/"
            className="flex h-10 w-10 items-center justify-center rounded-full bg-white/15 text-white transition hover:bg-white/25 active:scale-95"
            aria-label="Home"
          >
            <svg
              className="h-5 w-5 fill-none stroke-current stroke-2"
              viewBox="0 0 24 24"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
            </svg>
          </Link>

          <button
            onClick={() => setMobileMenuOpen(true)}
            aria-label="Open Navigation"
            className="flex h-10 w-10 items-center justify-center rounded-full text-white transition hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
          >
            <svg
              className="h-6 w-6 sm:h-7 sm:w-7 stroke-current stroke-2"
              viewBox="0 0 24 24"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="3" y1="6" x2="21" y2="6" />
              <line x1="7" y1="12" x2="21" y2="12" />
              <line x1="3" y1="18" x2="21" y2="18" />
            </svg>
          </button>
        </div>
      </div>

      {/* ================= BLUR BACKDROP OVERLAY ================= */}
      <div
        onClick={() => setMobileMenuOpen(false)}
        className={`fixed inset-0 z-[130] bg-black/60 backdrop-blur-sm transition-opacity duration-300 2xl:hidden ${
          mobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      />

      {/* ================= MOBILE & TABLET SLIDE DRAWER ================= */}
      <div
        className={`fixed right-0 top-0 z-[140] flex h-dvh w-[min(88vw,24rem)] max-w-full flex-col bg-[#c02f2d] shadow-2xl transition-transform duration-300 ease-out 2xl:hidden ${
          mobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex h-[65px] shrink-0 items-center justify-between border-b border-red-800/60 px-5 sm:px-6">
          <span className="text-white font-bold tracking-wider text-base uppercase">Menu</span>
          <button
            onClick={() => setMobileMenuOpen(false)}
            aria-label="Close Menu"
            className="rounded-full p-2 text-white transition hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
          >
            <svg
              className="w-6 h-6 stroke-current stroke-2"
              viewBox="0 0 24 24"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>

        <nav aria-label="Mobile navigation" className="flex-1 overflow-y-auto px-5 py-4 sm:px-6">
          <ul className="flex flex-col gap-3">
            {navLinks.map((item) => {
              const isActive =
                item.href === "/"
                  ? pathname === "/" && item.name === "Home"
                  : pathname.startsWith(item.href);

              if (item.hasDropdown) {
                const matchedGroup = serviceGroups.find(
                  (grp) => grp.title.toLowerCase() === item.name.toLowerCase()
                );
                const isDropdownExpanded = mobileDropdownOpen === item.name;

                return (
                  <li key={item.name} className="flex flex-col border-b border-red-800/40 pb-2">
                    <button
                      onClick={() =>
                        setMobileDropdownOpen(isDropdownExpanded ? null : item.name)
                      }
                      className="flex items-center justify-between py-1 text-left text-sm font-semibold text-white uppercase tracking-wider w-full"
                    >
                      <span>{item.name}</span>
                      <svg
                        className={`h-4 w-4 transition-transform duration-200 ${
                          isDropdownExpanded ? "rotate-180" : ""
                        }`}
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </button>

                    {isDropdownExpanded && matchedGroup && (
                      <div className="mt-2 space-y-2 pl-3 border-l-2 border-white/30">
                        {matchedGroup.items.map((svc) => (
                          <Link
                            key={svc.name}
                            href={svc.href}
                            onClick={() => setMobileMenuOpen(false)}
                            className="block py-1 text-xs font-medium text-white/90 hover:text-white uppercase"
                          >
                            {svc.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </li>
                );
              }

              return (
                <li key={item.name} className="border-b border-red-800/40 pb-2">
                  <Link
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`flex items-center justify-between py-1 text-sm font-semibold uppercase tracking-wider text-white ${
                      isActive ? "text-white underline decoration-2 underline-offset-4" : "text-white/95"
                    }`}
                  >
                    <span>{item.name}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="shrink-0 border-t border-red-800/60 bg-yellow-50/5 p-4 sm:p-5">
          <a
            href="tel:2018819622"
            className="flex items-center justify-center space-x-2 w-full py-2.5 bg-gray-100/90 text-[#c02f2d] font-bold rounded shadow hover:bg-white transition text-sm uppercase"
          >
            <svg className="w-4 h-4 fill-none stroke-current stroke-2" viewBox="0 0 24 24">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
            </svg>
            <span>Call Now</span>
          </a>
        </div>
      </div>
    </header>
  );
}