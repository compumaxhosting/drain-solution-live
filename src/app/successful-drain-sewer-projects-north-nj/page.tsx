"use client";

import React, { useState } from "react";
import Image from "next/image";

// ==========================================
// 1. INDEPENDENT DATA ARRAYS (EDIT HERE)
// ==========================================

interface ProjectItem {
  id: number;
  title: string;
  category: string;
  description: string;
  image: string; 
}

interface VideoItem {
  id: number;
  title: string;
  description: string;
  videoSrc: string; // Path to your local video file (e.g., "/videos/project-video-1.mp4")
  posterSrc?: string; // Optional thumbnail preview image for the video
}

// Add your horizontal landscape before/after images here with exact matching categories
const myGalleryProjects: ProjectItem[] = [
  {
    id: 1,
    title: "Shower Valve Replacement & Repair",
    category: "Plumbing Repair",
    description:
      "Removed the damaged shower valve assembly and professionally installed a new valve system for reliable water control and long-term performance.",
    image: "/images/before-after/1.webp",
  },
  {
    id: 3,
    title: "Cast Iron Sewer Replaced with PVC",
    category: "Sewer Line Replacement",
    description:
      "Replaced deteriorated cast iron sewer piping with durable PVC, improving drainage performance and providing a reliable long-term sewer solution.",
    image: "/images/before-after/3.webp",
  },
{
  id: 2,
  title: "Damaged Sewer Pipe Replacement",
  category: "Sewer Line Replacement",
  description:
    "Removed the damaged sewer pipe and replaced it with new PVC piping to restore proper drainage and reliable wastewater flow.",
  image: "/images/before-after/2.webp",
},
  {
    id: 4,
    title: "Underground Sewer Pipe Replacement",
    category: "Sewer Repair",
    description:
      "Excavated the affected section and replaced damaged underground sewer piping to restore dependable drainage while completing the repair with a clean installation.",
    image: "/images/before-after/4.webp",
  },
];

// Add your 2 local videos here (stored in your public folder)
const myProjectVideos: VideoItem[] = [
  {
    id: 1,
   title: "Commercial Drain Repair",
description:
  "Repairing damaged commercial drain piping on-site to restore proper drainage and keep the system operating reliably.",
    videoSrc: "/vids/commercial-drain-repair-v1.mp4", 
  },
  {
    id: 2,
   title: "Toilet Line Clearing",
description:
  "Cleared the clogged toilet line by snaking the line to remove the blockage, then reassembled the toilet and restored proper drainage.",
    videoSrc: "/vids/vid.mp4", 
  },
];

// ==========================================
// 2. COMPONENT LOGIC & UI
// ==========================================

export default function SuccessfulProjectsPage() {
  const [selectedImage, setSelectedImage] = useState<ProjectItem | null>(null);

  // Find index for Lightbox navigation arrows
  const currentIndex = selectedImage 
    ? myGalleryProjects.findIndex((p) => p.id === selectedImage.id) 
    : -1;

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (currentIndex > 0) {
      setSelectedImage(myGalleryProjects[currentIndex - 1]);
    } else {
      setSelectedImage(myGalleryProjects[myGalleryProjects.length - 1]);
    }
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (currentIndex < myGalleryProjects.length - 1) {
      setSelectedImage(myGalleryProjects[currentIndex + 1]);
    } else {
      setSelectedImage(myGalleryProjects[0]);
    }
  };

  return (
    <>
      <main className="relative w-full bg-[#f4f4f2] py-20 lg:py-28 min-h-screen">
        <div className="mx-auto w-[92%] sm:w-[88%] lg:w-[82%] max-w-[1400px]">
          
          {/* ================= SECTION HEADER ================= */}
          <div className="flex flex-col items-center text-center mb-16 lg:mb-20">
            <div className="inline-flex items-center space-x-3 bg-white px-4 py-1.5 rounded-full shadow-sm border border-stone-200 mb-4">
              <span className="h-2 w-2 rounded-full bg-[#c02f2d] animate-pulse" />
              <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#c02f2d]">
                Northern New Jersey Portfolio
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tight text-[#014485] max-w-3xl">
              Successful Drain & Sewer Operations
            </h1>

            <div className="mt-4 h-1.5 w-16 bg-[#c02f2d] rounded-full" />
            
            <p className="mt-5 text-base sm:text-lg text-stone-600 max-w-2xl font-normal leading-relaxed">
              Explore our verified archive of complex residential and commercial pipeline restorations, high-pressure cleans, and advanced diagnostics across North NJ.
            </p>
          </div>

          {/* ================= HORIZONTAL IMAGE GRID (2 PER ROW) ================= */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10 mb-24">
            {myGalleryProjects.map((project, index) => (
              <div
                key={project.id}
                onClick={() => setSelectedImage(project)}
                className="group bg-white rounded-2xl overflow-hidden shadow-md border border-stone-200/80 cursor-pointer transition-all duration-300 hover:shadow-xl hover:-translate-y-1.5 flex flex-col"
              >
                {/* Optimized Wider Aspect Ratio Container to completely expose top banners */}
                <div className="relative w-full aspect-[16/8.5] bg-stone-900 overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    loading={index < 2 ? "eager" : "lazy"}
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover object-center transition-transform duration-500 ease-out group-hover:scale-105"
                  />
                  
                  {/* Category Pill Badge Positioned on Bottom Right */}
                  <span className="absolute bottom-3 right-3 z-10 text-[10px] sm:text-xs font-black uppercase tracking-widest bg-[#014485] text-white px-3 py-1 rounded shadow-md border border-white/20">
                    {project.category}
                  </span>

                  {/* Hover Overlay Button Prompt */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/40 backdrop-blur-[2px]">
                    <span className="bg-white text-[#014485] text-xs font-black uppercase tracking-widest px-5 py-2.5 rounded-full shadow-lg transform translate-y-2 group-hover:translate-y-0 transition-transform">
                      Click to Expand Preview
                    </span>
                  </div>
                </div>

                {/* Card Content Footer */}
                <div className="p-6 sm:p-7 flex flex-col flex-grow bg-white">
                  <h3 className="text-xl font-black uppercase text-[#014485] tracking-tight group-hover:text-[#c02f2d] transition-colors">
                    {project.title}
                  </h3>
                  <p className="mt-2.5 text-sm sm:text-base text-stone-600 leading-relaxed font-normal">
                    {project.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* ================= LOCAL VIDEO SHOWCASE SECTION ================= */}
          <section className="mt-20 pt-16 border-t-2 border-stone-300/60">
            <div className="flex flex-col items-center text-center mb-12">
              <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#c02f2d] mb-2 bg-red-50 px-3 py-1 rounded-full border border-red-100">
                On-Site Video Documentation
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black uppercase tracking-tight text-[#014485]">
                Field Operation Videos
              </h2>
              <div className="mt-3 h-1 w-12 bg-[#c02f2d] rounded-full" />
              <p className="mt-3 text-stone-600 max-w-lg text-sm sm:text-base">
                Watch our local project recordings showcasing heavy-duty equipment and professional workflow routines.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10 max-w-5xl mx-auto">
              {myProjectVideos.map((video) => (
                <div 
                  key={video.id} 
                  className="bg-white rounded-2xl overflow-hidden shadow-md border border-stone-200/80 flex flex-col"
                >
                  {/* Local HTML5 Video Element Container */}
                  <div className="relative w-full aspect-video bg-stone-950">
                    <video
                      src={video.videoSrc}
                      poster={video.posterSrc}
                      controls
                      preload="metadata"
                      className="absolute inset-0 w-full h-full object-cover"
                    >
                      Your browser does not support the video tag.
                    </video>
                  </div>

                  <div className="p-6 flex flex-col flex-grow">
                    <h3 className="text-lg font-bold text-[#014485] uppercase tracking-wide">
                      {video.title}
                    </h3>
                    <p className="mt-2 text-sm text-stone-600 leading-relaxed">
                      {video.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>

        </div>

        {/* ================= FULLSCREEN IMAGE LIGHTBOX MODAL WITH ARROWS IN BLUR AREA ================= */}
        {selectedImage && (
          <div
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-[200] flex items-center justify-center bg-black/90 backdrop-blur-md p-4 sm:p-8"
          >
            {/* Previous Arrow in Blur Area */}
            <button
              onClick={handlePrev}
              className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 z-[210] flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-black/60 text-white hover:bg-[#c02f2d] transition-all shadow-2xl text-xl sm:text-2xl font-bold border border-white/20"
              aria-label="Previous Image"
            >
              ❮
            </button>

            {/* Modal Card Content */}
            <div
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-5xl w-full max-h-[90vh] bg-white rounded-2xl overflow-hidden shadow-2xl flex flex-col"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 z-30 flex items-center justify-center w-11 h-11 rounded-full bg-black/75 text-white font-bold hover:bg-[#c02f2d] transition shadow-lg text-lg"
                aria-label="Close Modal"
              >
                ✕
              </button>

              {/* Lightbox Image Container */}
              <div className="relative w-full h-[65vh] sm:h-[72vh] bg-stone-950 flex items-center justify-center">
                <Image
                  src={selectedImage.image}
                  alt={selectedImage.title}
                  fill
                  sizes="90vw"
                  className="object-contain"
                  priority
                />
              </div>

              {/* Modal Info Footer */}
              <div className="p-5 sm:p-6 bg-white flex flex-col sm:flex-row items-start sm:items-center justify-between border-t border-stone-200 gap-4">
                <div>
                  <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#c02f2d]">
                    {selectedImage.category}
                  </span>
                  <h3 className="text-lg sm:text-xl font-black uppercase text-[#014485] mt-0.5">
                    {selectedImage.title}
                  </h3>
                  <p className="text-sm text-stone-600 mt-1">{selectedImage.description}</p>
                </div>
                <button
                  onClick={() => setSelectedImage(null)}
                  className="rounded-lg bg-[#c02f2d] px-6 py-3 text-xs font-bold uppercase tracking-wider text-white hover:bg-[#a62523] transition shadow-sm w-full sm:w-auto"
                >
                  Close Preview
                </button>
              </div>
            </div>

            {/* Next Arrow in Blur Area */}
            <button
              onClick={handleNext}
              className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 z-[210] flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-black/60 text-white hover:bg-[#c02f2d] transition-all shadow-2xl text-xl sm:text-2xl font-bold border border-white/20"
              aria-label="Next Image"
            >
              ❯
            </button>

          </div>
        )}
      </main>

    </>
  );
}