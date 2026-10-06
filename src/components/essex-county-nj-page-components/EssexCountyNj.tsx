'use client'
import React, { useState } from 'react';

export const EssexCountyNj: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq((prevIndex) => (prevIndex === index ? null : index));
  };

  const faqs = [
    {
      q: 'Does Drain Solutions Plus serve Essex County, NJ?',
      a: 'Yes. Drain Solutions Plus provides residential and commercial drain, sewer, plumbing, and pump services throughout Essex County, including Newark, Montclair, Bloomfield, West Orange, Livingston, Maplewood, Nutley, Verona, Cedar Grove, Irvington, and East Orange.',
    },
    {
      q: 'What drain cleaning services are available?',
      a: 'Services include residential and commercial drain cleaning, sewer and drain cleaning, toilet clog removal, sink clog removal, and tub or bathtub clog removal. The appropriate cleaning method depends on the type and location of the blockage.',
    },
    {
      q: 'Does Drain Solutions Plus provide drain and sewer repair?',
      a: 'Yes. Residential and commercial drain repair and sewer and drain repair are available throughout Essex County. A video inspection may help identify the location and condition of a recurring problem.',
    },
    {
      q: 'What is hydro jetting?',
      a: 'Hydro jetting uses high-pressure water to clean certain buildup and obstructions from inside drain and sewer lines. Whether it is appropriate depends on the pipe condition and the material restricting the line.',
    },
    {
      q: 'When is a sewer video inspection useful?',
      a: 'A video inspection can help when blockages repeatedly return, multiple fixtures are affected, a sewer backup occurs, pipe damage is suspected, or you need additional information before deciding on repair.',
    },
    {
      q: 'Do you provide sump pump services?',
      a: 'Yes. Drain Solutions Plus provides sump pump repair and replacement for residential and commercial properties throughout the service area.',
    },
    {
      q: 'Do you repair sewage ejector pumps?',
      a: 'Yes. Sewage ejector pump repair and replacement are available for properties that use sewage ejector systems.',
    },
    {
      q: 'Do you provide faucet and leak repair?',
      a: 'Yes. Drain Solutions Plus provides faucet and leak repair as well as flush valve leak repair throughout the Essex County service area.',
    },
  ];

  return (
    <article className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-slate-800 antialiased font-sans leading-relaxed selection:bg-[#014485] selection:text-white">
      {/* Top Banner & Header */}
      <header className="border-b-2 border-slate-100 pb-10 mb-10">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#014485] mb-6">
          Drain Cleaning &amp; Sewer Services Throughout Essex County, NJ
        </h1>
        <p className="text-base sm:text-lg mb-4 text-slate-700 leading-relaxed">
          Drain Solutions Plus provides residential and commercial drain, sewer, plumbing, and pump services throughout Essex County, NJ. From a clogged sink or toilet to recurring drainage problems, sewer issues, leaking fixtures, or pump failures, our services address a range of plumbing and wastewater needs for homes and businesses.
        </p>
        <p className="text-base sm:text-lg mb-6 text-slate-700 leading-relaxed">
          Our Essex County service area includes Newark, Montclair, Bloomfield, West Orange, Livingston, Maplewood, Nutley, Verona, Cedar Grove, Irvington, East Orange, and surrounding Essex County communities.
        </p>
        <p className="text-lg font-bold text-[#014485]">
          Need drain, sewer, or plumbing service? Call <a href="tel:2018819622" className="text-[#c02f2d] hover:underline">(201) 881-9622</a> to discuss your needs or schedule service.
        </p>
      </header>

      {/* Main Flow Content */}
      <div className="space-y-10">
        {/* Drain Cleaning for Residential & Commercial Properties */}
        <section className="border-b border-slate-100 pb-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#014485] mb-3">
            Drain Cleaning for Residential &amp; Commercial Properties
          </h2>
          <p className="mb-4 text-slate-700">
            A slow or blocked drain can be caused by accumulated debris, grease, foreign objects, or other material inside the line. Drain Solutions Plus provides residential drain cleaning and commercial drain cleaning throughout Essex County.
          </p>
          <p className="font-semibold text-slate-900 mb-2">
            We service common fixture blockages, including:
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
            When a blockage returns repeatedly, the problem may extend beyond the individual fixture. Additional evaluation can help determine whether the issue involves a larger drain or sewer line.
          </p>
        </section>

        {/* Residential & Commercial Drain Repair */}
        <section className="border-b border-slate-100 pb-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#014485] mb-3">
            Residential &amp; Commercial Drain Repair
          </h2>
          <p className="mb-4 text-slate-700">
            Not every drainage problem can be resolved through cleaning alone. Damaged or deteriorated drainage components may require repair.
          </p>
          <p className="text-slate-700">
            Drain Solutions Plus provides residential drain repair and commercial drain repair throughout Essex County. The appropriate approach depends on the location and condition of the affected system. A video inspection can provide additional information when the source of a problem is difficult to identify.
          </p>
        </section>

        {/* Sewer & Drain Cleaning */}
        <section className="border-b border-slate-100 pb-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#014485] mb-3">
            Sewer &amp; Drain Cleaning
          </h2>
          <p className="mb-4 text-slate-700">
            Sewer and drain blockages can affect multiple fixtures and may interfere with normal wastewater flow. Drain Solutions Plus provides sewer and drain cleaning for residential and commercial properties throughout Essex County.
          </p>
          <p className="text-slate-700">
            Cleaning may be appropriate when buildup or an obstruction is restricting the line. If the same problem keeps returning, identifying the underlying condition can help determine whether additional service is necessary.
          </p>
        </section>

        {/* Sewer & Drain Repair */}
        <section className="border-b border-slate-100 pb-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#014485] mb-3">
            Sewer &amp; Drain Repair
          </h2>
          <p className="mb-4 text-slate-700">
            A recurring sewer problem does not always mean the line simply needs another cleaning. Pipe damage or other conditions may require repair.
          </p>
          <p className="text-slate-700">
            Drain Solutions Plus provides sewer and drain repair for homes and businesses throughout Essex County. When appropriate, a video inspection can help identify the location and condition of a problem inside the line.
          </p>
        </section>

        {/* Sewer & Drain Video Inspections */}
        <section className="border-b border-slate-100 pb-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#014485] mb-3">
            Sewer &amp; Drain Video Inspections
          </h2>
          <p className="mb-4 text-slate-700">
            A sewer and drain video inspection uses a camera to examine the inside of a pipe. This can help locate blockages and other conditions that may not be visible from above ground.
          </p>
          <p className="font-semibold text-slate-900 mb-2">Video inspection may be useful when:</p>
          <ul className="list-disc list-inside space-y-1 mb-4 text-slate-700 marker:text-[#c02f2d]">
            <li>A blockage repeatedly returns</li>
            <li>Several drains are affected</li>
            <li>A sewer backup occurs</li>
            <li>The cause of the problem is unclear</li>
            <li>Pipe damage is suspected</li>
            <li>You need information before considering repair</li>
          </ul>
        </section>

        {/* Hydro Jetting in Essex County */}
        <section className="border-b border-slate-100 pb-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#014485] mb-3">
            Hydro Jetting in Essex County
          </h2>
          <p className="mb-4 text-slate-700">
            Hydro jetting uses high-pressure water to clean certain buildup and obstructions from drain and sewer lines. Depending on the situation, it may help remove grease, sludge, accumulated debris, and other material restricting flow.
          </p>
          <p className="text-slate-700">
            Because pipe condition and obstruction type matter, hydro jetting should be selected based on the specific circumstances of the line.
          </p>
        </section>

        {/* Faucet, Leak & Flush Valve Repairs */}
        <section className="border-b border-slate-100 pb-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#014485] mb-3">
            Faucet, Leak &amp; Flush Valve Repairs
          </h2>
          <p className="mb-4 text-slate-700">
            Drain Solutions Plus also provides faucet and leak repair and flush valve leak repair throughout Essex County.
          </p>
          <p className="text-slate-700">
            These services can address leaking or malfunctioning plumbing fixtures. Prompt attention to a persistent leak can help prevent continued water loss and problems around the affected fixture.
          </p>
        </section>

        {/* Sump Pump Repair & Replacement */}
        <section className="border-b border-slate-100 pb-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#014485] mb-3">
            Sump Pump Repair &amp; Replacement
          </h2>
          <p className="text-slate-700">
            Drain Solutions Plus provides sump pump repair and replacement for residential and commercial properties in Essex County. Repair may be appropriate when an existing pump has a serviceable problem, while replacement may be considered when the equipment requires replacement.
          </p>
        </section>

        {/* Sewage Ejector Pump Repair & Replacement */}
        <section className="border-b border-slate-100 pb-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#014485] mb-3">
            Sewage Ejector Pump Repair &amp; Replacement
          </h2>
          <p className="mb-4 text-slate-700">
            Properties that use sewage ejector systems may need specialized service when a pump stops functioning correctly. Drain Solutions Plus provides sewage ejector pump repair and replacement throughout Essex County.
          </p>
          <p className="text-slate-700">
            The appropriate service depends on the condition of the existing pump and the requirements of the property&apos;s system.
          </p>
        </section>

        {/* Serving Essex County Communities */}
        <section className="border-b border-slate-100 pb-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#014485] mb-3">
            Serving Essex County Communities
          </h2>
          <p className="mb-2 text-slate-700">
            Drain Solutions Plus provides drain, sewer, plumbing, and pump services throughout Essex County, including:
          </p>
          <ul className="list-disc list-inside space-y-1 mb-4 text-slate-700 marker:text-[#c02f2d]">
            <li>Belleville</li>
            <li>Bloomfield</li>
            <li>Caldwell</li>
            <li>Cedar Grove</li>
            <li>East Orange</li>
            <li>Essex Fells</li>
            <li>Fairfield</li>
            <li>Glen Ridge</li>
            <li>Irvington</li>
            <li>Livingston</li>
            <li>Maplewood</li>
            <li>Millburn</li>
            <li>Montclair</li>
            <li>Newark</li>
            <li>North Caldwell</li>
            <li>Nutley</li>
            <li>Orange</li>
            <li>Roseland</li>
            <li>South Orange</li>
            <li>Verona</li>
            <li>West Caldwell</li>
            <li>West Orange</li>
          </ul>
          <p className="text-slate-700">
            If your Essex County location is not listed, contact Drain Solutions Plus to confirm current service availability.
          </p>
        </section>

        {/* When Should You Request Drain or Sewer Service? */}
        <section className="border-b border-slate-100 pb-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#014485] mb-3">
            When Should You Request Drain or Sewer Service?
          </h2>
          <p className="mb-4 text-slate-700">
            Professional evaluation may be appropriate when a drain repeatedly clogs, multiple fixtures are affected, wastewater backs up, a sewer problem returns after cleaning, or you have a persistent plumbing leak.
          </p>
          <p className="text-slate-700">
            Recurring drainage problems can have different causes. Depending on the situation, the appropriate solution may involve cleaning, hydro jetting, video inspection, repair, or another service.
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

        {/* Get Drain & Sewer Service in Essex County, NJ */}
        <section className="pt-2">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#014485] mb-4">
            Get Drain &amp; Sewer Service in Essex County, NJ
          </h2>
          <p className="mb-4 text-slate-700 text-lg">
            Whether you are dealing with a clogged fixture, recurring drainage issue, sewer problem, plumbing leak, or pump issue, Drain Solutions Plus provides residential and commercial services throughout Essex County.
          </p>
          <p className="font-bold text-[#014485] text-lg">
            Call <a href="tel:2018819622" className="text-[#c02f2d] hover:underline">(201) 881-9622</a> to discuss your drain, sewer, plumbing, or pump service needs.
          </p>
        </section>
      </div>
    </article>
  );
};

export default EssexCountyNj;