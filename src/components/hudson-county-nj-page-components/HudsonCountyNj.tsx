'use client'

import React, { useState } from 'react';

export const HudsonCountyNj: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq((prevIndex) => (prevIndex === index ? null : index));
  };

  const faqs = [
    {
      q: 'Does Drain Solutions Plus serve Hudson County, NJ?',
      a: 'Yes. Drain Solutions Plus provides residential and commercial drain, sewer, plumbing, and pump services throughout Hudson County, including Jersey City, Hoboken, Bayonne, North Bergen, Union City, West New York, Secaucus, Kearny, Harrison, Guttenberg, Weehawken, and East Newark.',
    },
    {
      q: 'What drain cleaning services are available?',
      a: 'Services include residential and commercial drain cleaning, sewer and drain cleaning, toilet clog removal, sink clog removal, and tub or bathtub clog removal. The appropriate cleaning method depends on the type and location of the blockage.',
    },
    {
      q: 'Does Drain Solutions Plus repair sewer and drain lines?',
      a: 'Yes. Sewer and drain repair is available for residential and commercial properties. A video inspection may be useful when the location or nature of a recurring problem is unclear.',
    },
    {
      q: 'What is hydro jetting used for?',
      a: 'Hydro jetting uses high-pressure water to clean certain materials and obstructions from drain and sewer lines. Whether it is appropriate depends on the condition of the pipe and the type of material restricting the line.',
    },
    {
      q: 'When is a video sewer inspection useful?',
      a: 'A video inspection can be useful for recurring blockages, multiple affected fixtures, sewer backups, suspected pipe damage, or situations where more information is needed before choosing between cleaning and repair.',
    },
    {
      q: 'Do you repair sump pumps and sewage ejector pumps?',
      a: 'Yes. Drain Solutions Plus provides sump pump repair and replacement as well as sewage ejector pump repair and replacement.',
    },
    {
      q: 'Do you provide faucet and leak repairs?',
      a: 'Yes. Faucet and leak repair and flush valve leak repair are included among the plumbing services available throughout the service area.',
    },
  ];

  return (
    <article className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-slate-800 antialiased font-sans leading-relaxed selection:bg-[#014485] selection:text-white">
      {/* Top Banner & Header */}
      <header className="border-b-2 border-slate-100 pb-10 mb-10">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#014485] mb-6">
          Drain Cleaning &amp; Sewer Services Throughout Hudson County, NJ
        </h1>
        <p className="text-base sm:text-lg mb-4 text-slate-700 leading-relaxed">
          Drain Solutions Plus provides residential and commercial drain, sewer, plumbing, and pump services throughout Hudson County, NJ. From a clogged sink or toilet to recurring drainage problems, sewer issues, leaking fixtures, or pump failures, our services cover a range of plumbing and wastewater needs for homes and businesses.
        </p>
        <p className="text-base sm:text-lg mb-6 text-slate-700 leading-relaxed">
          Our Hudson County service area includes Jersey City, Hoboken, Bayonne, North Bergen, Union City, West New York, Secaucus, Kearny, Harrison, Guttenberg, Weehawken, and East Newark.
        </p>
        <p className="text-lg font-bold text-[#014485]">
          Need drain or sewer service? Call <a href="tel:2018819622" className="text-[#c02f2d] hover:underline">(201) 881-9622</a> to discuss your situation or schedule service.
        </p>
      </header>

      {/* Main Flow Content */}
      <div className="space-y-10">
        {/* Drain Cleaning for Homes & Businesses */}
        <section className="border-b border-slate-100 pb-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#014485] mb-3">
            Drain Cleaning for Homes &amp; Businesses
          </h2>
          <p className="mb-4 text-slate-700">
            A blocked or slow drain can be caused by accumulated debris, grease, foreign objects, or other material inside the line. Drain Solutions Plus provides residential and commercial drain cleaning throughout Hudson County.
          </p>
          <p className="font-semibold text-slate-900 mb-2">
            Services are available for individual fixtures as well as broader drainage problems, including:
          </p>
          <ul className="list-disc list-inside space-y-1 mb-4 text-slate-700 marker:text-[#c02f2d]">
            <li>Toilet clogs</li>
            <li>Sink clogs</li>
            <li>Tub and bathtub clogs</li>
            <li>Slow-draining fixtures</li>
            <li>Recurring drain blockages</li>
            <li>Sewer and drain flow problems</li>
          </ul>
          <p className="text-slate-700">
            When a blockage continues to return, the issue may require more than basic cleaning. Further evaluation can help determine whether the problem is isolated or related to a larger drain or sewer line.
          </p>
        </section>

        {/* Residential & Commercial Drain Repair */}
        <section className="border-b border-slate-100 pb-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#014485] mb-3">
            Residential &amp; Commercial Drain Repair
          </h2>
          <p className="mb-4 text-slate-700">
            Drain damage can interfere with normal water flow and may contribute to recurring drainage problems. Drain Solutions Plus provides residential drain repair and commercial drain repair in Hudson County.
          </p>
          <p className="text-slate-700">
            The appropriate repair depends on the location and condition of the affected drainage system. When the source of a problem is difficult to determine, a video inspection may provide additional information.
          </p>
        </section>

        {/* Sewer & Drain Cleaning */}
        <section className="border-b border-slate-100 pb-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#014485] mb-3">
            Sewer &amp; Drain Cleaning
          </h2>
          <p className="mb-4 text-slate-700">
            Sewer and drain blockages can affect multiple fixtures and, in some situations, an entire property. Drain Solutions Plus provides sewer and drain cleaning for residential and commercial properties throughout Hudson County.
          </p>
          <p className="text-slate-700">
            Cleaning may be appropriate when material inside the line is restricting normal flow. If a blockage repeatedly returns, identifying the underlying condition can be important before deciding on additional service.
          </p>
        </section>

        {/* Sewer & Drain Repair */}
        <section className="border-b border-slate-100 pb-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#014485] mb-3">
            Sewer &amp; Drain Repair
          </h2>
          <p className="mb-4 text-slate-700">
            Not every sewer problem is simply a clog. A line may have damage or another condition that requires repair rather than continued cleaning.
          </p>
          <p className="text-slate-700">
            Drain Solutions Plus provides sewer and drain repair for homes and businesses in Hudson County. A sewer and drain video inspection can help provide information about the location and condition of an internal problem.
          </p>
        </section>

        {/* Sewer & Drain Video Inspections */}
        <section className="border-b border-slate-100 pb-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#014485] mb-3">
            Sewer &amp; Drain Video Inspections
          </h2>
          <p className="mb-4 text-slate-700">
            A sewer and drain video inspection allows a camera to view the interior of a pipe. This can help locate problems that are difficult to identify from the surface.
          </p>
          <p className="font-semibold text-slate-900 mb-2">An inspection may be useful when:</p>
          <ul className="list-disc list-inside space-y-1 mb-4 text-slate-700 marker:text-[#c02f2d]">
            <li>A sewer or drain blockage keeps returning</li>
            <li>Multiple fixtures are affected</li>
            <li>A sewer backup has occurred</li>
            <li>The cause of a drainage problem is unclear</li>
            <li>Pipe damage is suspected</li>
            <li>You need more information before considering repair</li>
          </ul>
        </section>

        {/* Hydro Jetting */}
        <section className="border-b border-slate-100 pb-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#014485] mb-3">
            Hydro Jetting
          </h2>
          <p className="mb-4 text-slate-700">
            Hydro jetting uses high-pressure water to clean certain buildup and obstructions from inside drain and sewer lines. Depending on the circumstances, it may help remove materials such as grease, sludge, and other accumulated debris.
          </p>
          <p className="text-slate-700">
            Pipe condition and the type of obstruction should be considered before determining whether hydro jetting is an appropriate cleaning method.
          </p>
        </section>

        {/* Faucet, Leak & Flush Valve Repair */}
        <section className="border-b border-slate-100 pb-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#014485] mb-3">
            Faucet, Leak &amp; Flush Valve Repair
          </h2>
          <p className="mb-4 text-slate-700">
            Drain Solutions Plus also provides faucet and leak repair and flush valve leak repair throughout Hudson County. These services can address leaking or malfunctioning plumbing fixtures.
          </p>
          <p className="text-slate-700">
            A leaking faucet or flush valve can waste water and may continue to cause problems if the underlying fixture issue is not addressed.
          </p>
        </section>

        {/* Sump Pump Repair & Replacement */}
        <section className="border-b border-slate-100 pb-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#014485] mb-3">
            Sump Pump Repair &amp; Replacement
          </h2>
          <p className="mb-4 text-slate-700">
            A sump pump helps remove accumulated water from a sump pit. When an existing pump is not functioning correctly, repair or replacement may be necessary.
          </p>
          <p className="text-slate-700">
            Drain Solutions Plus provides sump pump repair and replacement for residential and commercial customers in the Hudson County service area.
          </p>
        </section>

        {/* Sewage Ejector Pump Repair & Replacement */}
        <section className="border-b border-slate-100 pb-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#014485] mb-3">
            Sewage Ejector Pump Repair &amp; Replacement
          </h2>
          <p className="mb-4 text-slate-700">
            Properties that use sewage ejector systems may require specialized pump service when the equipment is not operating properly. Drain Solutions Plus provides sewage ejector pump repair and replacement.
          </p>
          <p className="text-slate-700">
            The appropriate service depends on the condition of the existing system and the property&apos;s specific requirements.
          </p>
        </section>

        {/* Serving Hudson County Communities */}
        <section className="border-b border-slate-100 pb-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#014485] mb-3">
            Serving Hudson County Communities
          </h2>
          <p className="mb-2 text-slate-700">
            Drain Solutions Plus provides service throughout Hudson County, including:
          </p>
          <ul className="list-disc list-inside space-y-1 mb-4 text-slate-700 marker:text-[#c02f2d]">
            <li>Bayonne</li>
            <li>East Newark</li>
            <li>Guttenberg</li>
            <li>Harrison</li>
            <li>Hoboken</li>
            <li>Jersey City</li>
            <li>Kearny</li>
            <li>North Bergen</li>
            <li>Secaucus</li>
            <li>Union City</li>
            <li>Weehawken</li>
            <li>West New York</li>
          </ul>
          <p className="text-slate-700">
            If you are located elsewhere in Hudson County, contact Drain Solutions Plus to confirm current service availability.
          </p>
        </section>

        {/* When Should You Request Drain or Sewer Service? */}
        <section className="border-b border-slate-100 pb-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#014485] mb-3">
            When Should You Request Drain or Sewer Service?
          </h2>
          <p className="mb-4 text-slate-700">
            Consider professional evaluation when a drain repeatedly becomes blocked, several fixtures are affected, wastewater backs up, a sewer problem returns after cleaning, or you notice a persistent plumbing leak.
          </p>
          <p className="text-slate-700">
            For recurring problems, cleaning alone may not identify the underlying cause. Depending on the situation, drain cleaning, hydro jetting, video inspection, repair, or another service may be appropriate.
          </p>
        </section>

        {/* Frequently Asked Questions (Dropdown / Accordion) */}
        <section className="border-b border-slate-100 pb-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#014485] mb-6">
            Frequently Asked Questions
          </h2>
          <div className="divide-y divide-slate-200">
            {faqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div key={idx} className="py-4">
                  <button
                    type="button"
                    onClick={() => toggleFaq(idx)}
                    className="w-full flex items-center justify-between text-left focus:outline-none group cursor-pointer"
                    aria-expanded={isOpen}
                  >
                    <h3 className={`text-lg font-bold transition-colors ${isOpen ? 'text-[#c02f2d]' : 'text-[#014485] group-hover:text-[#c02f2d]'}`}>
                      {faq.q}
                    </h3>
                    <span className="ml-4 flex-shrink-0 text-slate-500">
                      <svg
                        className={`w-5 h-5 transform transition-transform duration-200 ${isOpen ? 'rotate-180 text-[#c02f2d]' : ''}`}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </span>
                  </button>
                  {isOpen && (
                    <div className="mt-3 pr-6 text-slate-700 leading-relaxed transition-all">
                      <p>{faq.a}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </section>

        {/* Get Drain & Sewer Service in Hudson County */}
        <section className="pt-2">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#014485] mb-4">
            Get Drain &amp; Sewer Service in Hudson County
          </h2>
          <p className="mb-4 text-slate-700 text-lg">
            Whether you are dealing with a clogged fixture, recurring drainage issue, sewer problem, leaking faucet, or pump issue, Drain Solutions Plus provides residential and commercial services throughout Hudson County.
          </p>
          <p className="font-bold text-[#014485] text-lg">
            Call <a href="tel:2018819622" className="text-[#c02f2d] hover:underline">(201) 881-9622</a> to discuss your drain, sewer, plumbing, or pump service needs.
          </p>
        </section>
      </div>
    </article>
  );
};

export default HudsonCountyNj;