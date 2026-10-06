import React from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { allServicesData } from "@/data/servicesData";

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return allServicesData.map((service) => ({
    slug: service.id,
  }));
}

export default async function ServiceDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const service = allServicesData.find((item) => item.id === slug);

  if (!service) {
    notFound();
  }

  return (
    <>
      <div className="min-h-screen bg-[#fafaf9]">
        {/* ================= HERO SECTION ================= */}
        <section className="relative w-full overflow-hidden py-16 sm:py-20 lg:py-24">
          <div className="relative z-10 mx-auto w-[92%] sm:w-[85%] lg:w-[80%] max-w-[1500px]">
            
            {/* Breadcrumb / Back Link */}
            <div className="mb-8">
              <Link
                href="/our-services"
                className="inline-flex items-center space-x-2 text-xs font-bold uppercase tracking-widest text-[#014485] hover:text-[#c02f2d] transition-colors"
              >
                <svg className="h-4 w-4 rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
                <span>Back to All Services</span>
              </Link>
            </div>

            <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-14">
              
              {/* Content Column */}
              <div className="flex flex-col items-start lg:col-span-6 space-y-4">
                <div className="flex items-center space-x-2">
                  <span className="h-2 w-2 rounded-full bg-[#c02f2d]" />
                  <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#c02f2d]">
                    {service.tag}
                  </span>
                </div>

                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tight text-[#014485] leading-[1.15]">
                  {service.title}
                </h1>

                <div className="h-1 w-14 bg-[#c02f2d] rounded-full" />

                <p className="text-base sm:text-lg leading-relaxed text-stone-600 font-normal pt-2">
                  {service.longDescription}
                </p>

                <div className="pt-4 flex flex-wrap gap-4">
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center rounded-sm bg-[#c02f2d] px-8 py-3.5 text-xs sm:text-sm font-bold tracking-wider uppercase text-white shadow-md transition-all duration-200 hover:bg-[#a62523] active:scale-95"
                  >
                    Book This Service
                  </Link>
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center rounded-sm bg-[#014485] px-8 py-3.5 text-xs sm:text-sm font-bold tracking-wider uppercase text-white shadow-md transition-all duration-200 hover:bg-[#013568] active:scale-95"
                  >
                    Request Estimate
                  </Link>
                </div>
              </div>

              {/* Image Column */}
              <div className="lg:col-span-6 w-full">
                <div className="group relative aspect-[16/10] w-full overflow-hidden rounded-xl bg-stone-100 shadow-[0_8px_22px_rgba(0,0,0,0.08)]">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    priority
                    sizes="(max-width: 1024px) 92vw, 48vw"
                    className="object-cover"
                  />
                  <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-black/5" />
                </div>
              </div>

            </div>

          </div>
        </section>

        {/* ================= BULLET POINTS LIST SECTION ================= */}
        <section className="w-full bg-white py-16 sm:py-20 border-t border-stone-200">
          <div className="mx-auto w-[92%] sm:w-[85%] lg:w-[80%] max-w-[1000px]">
            <div className="text-center mb-10">
              <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#c02f2d]">
                Key Highlights
              </span>
              <h2 className="text-2xl sm:text-3xl font-black uppercase text-[#014485] mt-2">
                What’s Included in This Service
              </h2>
              <div className="mx-auto mt-3 h-1 w-12 bg-[#c02f2d] rounded-full" />
            </div>

            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              {service.bulletPoints.map((point, idx) => (
                <li key={idx} className="flex items-start space-x-3 bg-[#fafaf9] p-5 rounded-lg border border-stone-200">
                  <svg className="h-5 w-5 text-[#c02f2d] shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm sm:text-base text-stone-700 font-medium">{point}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* ================= CUSTOM BOTTOM BANNER ================= */}
        <section className="w-full bg-[#014485] py-16 sm:py-20 text-white text-center">
          <div className="mx-auto w-[92%] sm:w-[85%] lg:w-[70%] max-w-[900px] space-y-4">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black uppercase tracking-tight">
              {service.footerHeading}
            </h2>
            <p className="text-stone-200 text-base sm:text-lg max-w-2xl mx-auto font-normal">
              {service.footerText}
            </p>
            <div className="pt-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-sm bg-[#c02f2d] px-9 py-4 text-xs sm:text-sm font-bold tracking-widest uppercase text-white shadow-md transition-all duration-200 hover:bg-[#a62523] active:scale-95"
              >
                Get Started Today
              </Link>
            </div>
          </div>
        </section>

      </div>

    </>
  );
}