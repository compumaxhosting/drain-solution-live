"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";

export default function TopBar() {
  const [dateTime, setDateTime] = useState<string>("");

  useEffect(() => {
    // Function to update local time and date based on user's device settings
    const updateDateTime = () => {
      const now = new Date();
      
      const options: Intl.DateTimeFormatOptions = {
        month: "numeric",
        day: "numeric",
        year: "numeric",
        hour: "numeric",
        minute: "2-digit",
        second: "2-digit",
        hour12: true,
      };

      setDateTime(new Intl.DateTimeFormat("en-US", options).format(now));
    };

    updateDateTime();
    const timer = setInterval(updateDateTime, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="w-full bg-[#014485] text-white border-b border-white/10 select-none">
      <div className="w-full px-4 sm:px-6 lg:px-10 h-12 grid grid-cols-2 min-[840px]:grid-cols-3 items-center">
        
        {/* LEFT SECTION: Digital Timing, Location & 5-Star Rating */}
        <div className="flex items-center space-x-3 lg:space-x-5 overflow-hidden">
          {/* Live Local Date & Time */}
          <div className="flex items-center space-x-1.5 font-medium text-[12px] sm:text-[13px] text-white/90 whitespace-nowrap">
            <svg
              className="w-4 h-4 text-white shrink-0"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <span suppressHydrationWarning>{dateTime || "Loading time..."}</span>
          </div>

          {/* 5-Star Rating */}
          <div className="hidden xl:flex items-center space-x-1.5 whitespace-nowrap border-l border-white/20 pl-4">
            <div className="flex text-amber-400 space-x-0.5">
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  className="w-3.5 h-3.5 fill-current drop-shadow-sm"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <span className="text-[13px] text-white/90 font-medium">(5.0 Star Rated)</span>
          </div>
        </div>

        {/* MIDDLE SECTION: Locked dead center (Social Media Icons) */}
        <div className="flex items-center justify-end space-x-3 min-[840px]:justify-center">
          {/* Facebook */}
          <a
            href="https://www.facebook.com/people/Drain-Solutions-Plus/61594994970578/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-7 h-7 rounded-full bg-[#1877f2] flex items-center justify-center hover:scale-110 transition-transform shadow-sm"
            aria-label="Facebook"
          >
            <svg className="w-4 h-4 fill-white" viewBox="0 0 24 24">
              <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
            </svg>
          </a>

          {/* Instagram */}
          <a
            href="https://www.instagram.com/drainsolutionsplus"
            target="_blank"
            rel="noopener noreferrer"
            className="w-7 h-7 rounded-full bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888] flex items-center justify-center hover:scale-110 transition-transform shadow-sm"
            aria-label="Instagram"
          >
            <svg className="w-4 h-4 fill-white" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
            </svg>
          </a>

          {/* Yelp */}
          <a
            href="https://www.yelp.com/biz/drain-solutions-plus-clifton-6"
            target="_blank"
            rel="noopener noreferrer"
            className="w-7 h-7 rounded-full bg-white flex items-center justify-center hover:scale-110 transition-transform shadow-sm"
            aria-label="Yelp"
          >
            <Image src="/images/yelp-icon.webp" alt="" width={20} height={20} className="h-5 w-5 object-contain" />
          </a>

          {/* YouTube */}
          <a
            href="https://www.youtube.com/channel/UC_Wp9WULUYRAF9ao0Fmzb2Q"
            target="_blank"
            rel="noopener noreferrer"
            className="w-7 h-7 rounded-full bg-[#ff0000] flex items-center justify-center hover:scale-110 transition-transform shadow-sm"
            aria-label="YouTube"
          >
            <svg className="h-4 w-4 fill-white" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.6 12 3.6 12 3.6s-7.5 0-9.4.5A3 3 0 0 0 .5 6.2 31 31 0 0 0 0 12a31 31 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.9.5 9.4.5 9.4.5s7.5 0 9.4-.5a3 3 0 0 0 2.1-2.1A31 31 0 0 0 24 12a31 31 0 0 0-.5-5.8ZM9.6 15.6V8.4l6.2 3.6-6.2 3.6Z" />
            </svg>
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/drain-solutions-plus-57323b166"
            target="_blank"
            rel="noopener noreferrer"
            className="w-7 h-7 rounded-full bg-[#0a66c2] flex items-center justify-center hover:scale-110 transition-transform shadow-sm"
            aria-label="LinkedIn"
          >
            <svg className="h-4 w-4 fill-white" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.35V9h3.414v1.561h.049c.476-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286ZM5.337 7.433a2.062 2.062 0 1 1 0-4.124 2.062 2.062 0 0 1 0 4.124ZM7.119 20.452H3.554V9h3.565v11.452Z" />
            </svg>
          </a>
        </div>

        {/* RIGHT SECTION: Flush to the far-right end */}
        <div className="hidden min-[840px]:flex items-center justify-end">
          <a
            href="tel:2018819622"
            className="flex items-center space-x-2 text-[15px] font-bold text-white hover:text-red-300 transition whitespace-nowrap"
          >
            <svg
              className="w-5 h-5 text-white shrink-0"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
              />
            </svg>
            <span className="hidden min-[840px]:inline font-medium text-white/90">Same Day Service:</span>
            <span className="text-[16px] tracking-wide font-extrabold">(201) 881-9622</span>
          </a>
        </div>

      </div>
    </div>
  );
}