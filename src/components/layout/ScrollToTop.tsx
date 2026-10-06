'use client';
import React, { useState, useEffect } from 'react';

interface ScrollToTopProps {
  /** Optional custom class name for styling/positioning extensions */
  className?: string;
  /** Distance in pixels scrolled before the button appears (default: 300) */
  showBelow?: number;
}

export const ScrollToTop: React.FC<ScrollToTopProps> = ({
  className = '',
  showBelow = 300,
}) => {
  const [isVisible, setIsVisible] = useState(false);

  // Check window scroll position
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > showBelow) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    // Run once on mount in case page is already scrolled
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, [showBelow]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <button
      type="button"
      onClick={scrollToTop}
      aria-label="Scroll to top"
      className={`fixed z-40 transition-all duration-300 ease-in-out transform ${
        isVisible
          ? 'translate-y-0 opacity-100 scale-100 pointer-events-auto'
          : 'translate-y-4 opacity-0 scale-90 pointer-events-none'
      } 
      /* Positioning: Above fixed bottom bar on mobile (bottom-20), regular floating bottom-right on desktop (md:bottom-8) */
      bottom-20 right-4 md:bottom-8 md:right-8
      flex items-center justify-center w-11 h-11 rounded-full 
      bg-yellow-500 text-white shadow-lg hover:bg-yellow-600 active:scale-95 
      border-2 border-white/40 backdrop-blur-md group ${className}`}
    >
      <svg
        className="w-5 h-5 text-white group-hover:-translate-y-0.5 transition-transform"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        viewBox="0 0 24 24"
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
      </svg>
    </button>
  );
};