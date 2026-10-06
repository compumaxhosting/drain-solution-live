'use client'

import React, { useState } from 'react';

export const PassaicCountyNj: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq((prevIndex) => (prevIndex === index ? null : index));
  };

  const faqs = [
    {
      q: 'Does Drain Solutions Plus serve Passaic County?',
      a: 'Yes. Drain Solutions Plus provides residential and commercial drain, sewer, plumbing, and pump services throughout Passaic County, including Clifton, Passaic, Paterson, Wayne, Totowa, Hawthorne, Pompton Lakes, Little Falls, West Milford, and Woodland Park.',
    },
    {
      q: 'What drain services are available?',
      a: 'Services include residential and commercial drain cleaning and repairs, sewer and drain cleaning, sewer and drain repairs, toilet, tub and sink clog removal, video inspections, and hydro jetting.',
    },
    {
      q: 'Does Drain Solutions Plus repair sump pumps?',
      a: 'Yes. Drain Solutions Plus provides sump pump repairs or replacement. The appropriate service depends on the condition of the existing pump.',
    },
    {
      q: 'Does the company repair sewage ejector pumps?',
      a: 'Yes. Drain Solutions Plus provides sewage ejector pump repairs or replacement for properties that use these systems.',
    },
    {
      q: 'What is hydro jetting?',
      a: 'Hydro jetting uses high-pressure water to clean certain buildup and obstructions from inside drain and sewer lines. Pipe condition and the type of blockage should be considered before using this method.',
    },
    {
      q: 'When is a sewer video inspection useful?',
      a: 'A video inspection can help locate and identify problems inside a drain or sewer line, particularly when blockages repeatedly return or the cause of a drainage problem is unclear.',
    },
    {
      q: 'Does Drain Solutions Plus provide commercial drain service?',
      a: 'Yes. Commercial services include commercial drain cleaning and commercial drain repairs, along with sewer and drain cleaning, repairs, video inspections, and hydro jetting.',
    },
    {
      q: 'Is emergency service available?',
      a: 'Drain Solutions Plus offers 24/7 emergency drain and sewer service. Contact the company directly to confirm current availability and response time.',
    },
  ];

  return (
    <article className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-slate-800 antialiased font-sans leading-relaxed selection:bg-[#014485] selection:text-white">
      {/* Top Banner & Header */}
      <header className="border-b-2 border-slate-100 pb-10 mb-10">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#014485] mb-6">
          Drain Cleaning &amp; Sewer Services Throughout Passaic County, NJ
        </h1>
        <p className="text-base sm:text-lg mb-4 text-slate-700 leading-relaxed">
          Drain Solutions Plus provides residential and commercial drain cleaning, drain repair, sewer services, plumbing repairs, and pump services throughout Passaic County, NJ. Our services include residential and commercial drain cleaning, drain repairs, sewer and drain cleaning, sewer and drain repairs, video inspections, hydro jetting, toilet, tub, and sink clog removal, faucet and leak repairs, flush valve leak repairs, sump pump repairs or replacement, and sewage ejector pump repairs or replacement.
        </p>
        <p className="text-base sm:text-lg mb-6 text-slate-700 leading-relaxed">
          If you&apos;re dealing with a clogged drain, recurring blockage, slow drainage, sewer backup, leaking fixture, or suspected sewer-line problem, identifying the cause is an important first step. Drain Solutions Plus provides cleaning, inspection, repair, and replacement services based on the specific problem.
        </p>
        <p className="text-lg font-bold text-[#014485]">
          Call <a href="tel:2018819622" className="text-[#c02f2d] hover:underline">(201) 881-9622</a> to discuss your service needs or schedule an appointment.
        </p>
      </header>

      {/* Main Flow Content */}
      <div className="space-y-10">
        {/* Residential Drain Cleaning & Repairs */}
        <section className="border-b border-slate-100 pb-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#014485] mb-3">
            Residential Drain Cleaning &amp; Repairs
          </h2>
          <p className="mb-4 text-slate-700">
            Drain problems can affect kitchens, bathrooms, laundry areas, and other parts of a home. Drain Solutions Plus provides residential drain cleaning and residential drain repairs for common drainage problems, including recurring or difficult-to-clear clogs.
          </p>
          <p className="font-semibold text-slate-900 mb-2">Services include:</p>
          <ul className="list-disc list-inside space-y-1 mb-4 text-slate-700 marker:text-[#c02f2d]">
            <li>Residential drain cleaning</li>
            <li>Residential drain repairs</li>
            <li>Toilet clogs</li>
            <li>Tub clogs</li>
            <li>Sink clogs</li>
            <li>Sewer and drain cleaning</li>
            <li>Sewer and drain repairs</li>
            <li>Sewer and drain video inspections</li>
            <li>Hydro jetting</li>
          </ul>
          <p className="text-slate-700">
            A recurring blockage may be caused by buildup or another issue inside the line. When the cause is unclear or the problem continues to return, a video inspection can provide additional information about the condition of the pipe.
          </p>
        </section>

        {/* Commercial Drain Cleaning & Repairs */}
        <section className="border-b border-slate-100 pb-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#014485] mb-3">
            Commercial Drain Cleaning &amp; Repairs
          </h2>
          <p className="mb-4 text-slate-700">
            Drainage problems can interfere with the normal operation of a commercial property. Drain Solutions Plus provides commercial drain cleaning and commercial drain repairs to address blocked, slow, or problematic drainage systems.
          </p>
          <p className="text-slate-700">
            Depending on the situation, service may involve drain cleaning, sewer cleaning, repairs, video inspection, or hydro jetting. Identifying the source of the problem can help determine the appropriate service.
          </p>
        </section>

        {/* Sewer & Drain Cleaning */}
        <section className="border-b border-slate-100 pb-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#014485] mb-3">
            Sewer &amp; Drain Cleaning
          </h2>
          <p className="mb-4 text-slate-700">
            Sewer and drain cleaning can help remove blockages and buildup that interfere with normal wastewater flow. Depending on the condition of the line and the type of obstruction, different cleaning methods may be appropriate.
          </p>
          <p className="text-slate-700">
            Drain Solutions Plus provides sewer and drain cleaning for residential and commercial properties throughout Passaic County.
          </p>
        </section>

        {/* Sewer & Drain Repairs */}
        <section className="border-b border-slate-100 pb-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#014485] mb-3">
            Sewer &amp; Drain Repairs
          </h2>
          <p className="mb-4 text-slate-700">
            When cleaning alone is not enough, the problem may require sewer and drain repairs. Pipe damage, deterioration, leaks, or other issues can affect drainage and may require targeted repair or replacement.
          </p>
          <p className="text-slate-700">
            A video inspection can help identify the location and condition of a problem before determining the appropriate repair approach.
          </p>
        </section>

        {/* Sewer & Drain Video Inspections */}
        <section className="border-b border-slate-100 pb-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#014485] mb-3">
            Sewer &amp; Drain Video Inspections
          </h2>
          <p className="mb-4 text-slate-700">
            A sewer and drain video inspection uses a camera to view the inside of a drain or sewer line. This can help identify problems that cannot easily be located from above ground.
          </p>
          <p className="font-semibold text-slate-900 mb-2">Video inspection may be useful when:</p>
          <ul className="list-disc list-inside space-y-1 mb-4 text-slate-700 marker:text-[#c02f2d]">
            <li>A blockage keeps returning</li>
            <li>Multiple drains are affected</li>
            <li>A sewer backup occurs</li>
            <li>The cause of a drainage problem is unclear</li>
            <li>You suspect damage inside the line</li>
            <li>You are considering sewer or drain repairs</li>
          </ul>
          <p className="text-slate-700">
            The inspection can provide information about blockages, cracks, root intrusion, leaks, deterioration, and other conditions inside the pipe.
          </p>
        </section>

        {/* Hydro Jetting */}
        <section className="border-b border-slate-100 pb-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#014485] mb-3">
            Hydro Jetting
          </h2>
          <p className="mb-4 text-slate-700">
            Hydro jetting uses high-pressure water to clean buildup and certain obstructions from inside drain and sewer lines. It may be appropriate for grease, sludge, mineral buildup, and other material that can restrict flow.
          </p>
          <p className="text-slate-700">
            The condition of the pipe and the nature of the blockage should be considered before selecting hydro jetting as a cleaning method.
          </p>
        </section>

        {/* Faucet, Leak & Flush Valve Repairs */}
        <section className="border-b border-slate-100 pb-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#014485] mb-3">
            Faucet, Leak &amp; Flush Valve Repairs
          </h2>
          <p className="mb-4 text-slate-700">
            Not every plumbing problem involves a blocked drain. Drain Solutions Plus also provides faucet and leak repairs and flush valve leak repairs.
          </p>
          <p className="text-slate-700">
            A leaking faucet or fixture can waste water and may require repair or replacement of the affected component. Flush valve problems can also cause a toilet to continue running or leak after flushing.
          </p>
        </section>

        {/* Sump Pump Repairs or Replacement */}
        <section className="border-b border-slate-100 pb-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#014485] mb-3">
            Sump Pump Repairs or Replacement
          </h2>
          <p className="mb-4 text-slate-700">
            A sump pump helps remove water from a sump pit and can be an important part of a property&apos;s water-management system. Drain Solutions Plus provides sump pump repairs or replacement when a sump pump is not operating properly or requires replacement.
          </p>
          <p className="text-slate-700">
            The appropriate solution depends on the condition of the existing pump and the property&apos;s specific requirements.
          </p>
        </section>

        {/* Sewage Ejector Pump Repairs or Replacement */}
        <section className="border-b border-slate-100 pb-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#014485] mb-3">
            Sewage Ejector Pump Repairs or Replacement
          </h2>
          <p className="mb-4 text-slate-700">
            Properties that use sewage ejector systems may require specialized pump service when the system is not operating correctly. Drain Solutions Plus provides sewage ejector pump repairs or replacement.
          </p>
          <p className="text-slate-700">
            If a sewage ejector pump is malfunctioning, prompt service can help address the problem and determine whether repair or replacement is appropriate.
          </p>
        </section>

        {/* Toilet, Tub & Sink Clogs */}
        <section className="border-b border-slate-100 pb-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#014485] mb-3">
            Toilet, Tub &amp; Sink Clogs
          </h2>
          <p className="mb-2 text-slate-700">
            Individual fixture clogs are among the most common drainage problems. Drain Solutions Plus services:
          </p>
          <ul className="list-disc list-inside space-y-1 mb-4 text-slate-700 marker:text-[#c02f2d]">
            <li>Toilet clogs</li>
            <li>Tub clogs</li>
            <li>Sink clogs</li>
          </ul>
          <p className="text-slate-700">
            If a clog repeatedly returns after being cleared, additional inspection may be appropriate to determine whether there is a deeper problem within the drain or sewer line.
          </p>
        </section>

        {/* Residential & Commercial Service in Passaic County */}
        <section className="border-b border-slate-100 pb-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#014485] mb-3">
            Residential &amp; Commercial Service in Passaic County
          </h2>
          <p className="mb-2 text-slate-700">
            Drain Solutions Plus provides residential and commercial service throughout Passaic County, New Jersey, including:
          </p>
          <ul className="list-disc list-inside space-y-1 mb-4 text-slate-700 marker:text-[#c02f2d]">
            <li>Clifton</li>
            <li>Passaic</li>
            <li>Paterson</li>
            <li>Wayne</li>
            <li>Totowa</li>
            <li>Hawthorne</li>
            <li>Pompton Lakes</li>
            <li>Little Falls</li>
            <li>West Milford</li>
            <li>Woodland Park</li>
          </ul>
          <p className="text-slate-700">
            If your property is located elsewhere in Passaic County, contact Drain Solutions Plus to confirm service availability.
          </p>
        </section>

        {/* When Should You Request Drain or Sewer Service? */}
        <section className="border-b border-slate-100 pb-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#014485] mb-3">
            When Should You Request Drain or Sewer Service?
          </h2>
          <p className="mb-2 text-slate-700">Consider contacting a professional when you experience:</p>
          <ul className="list-disc list-inside space-y-1 mb-4 text-slate-700 marker:text-[#c02f2d]">
            <li>A drain that repeatedly becomes clogged</li>
            <li>Multiple slow or blocked drains</li>
            <li>A sewer backup</li>
            <li>Persistent toilet, tub, or sink clogs</li>
            <li>Water or fixture leaks</li>
            <li>A sump pump that is not operating properly</li>
            <li>Problems with a sewage ejector pump</li>
            <li>Drainage problems that return after cleaning</li>
            <li>Unexplained sewer or drain issues</li>
          </ul>
          <p className="text-slate-700">
            When the cause is uncertain, a video inspection can help provide information about the condition of the line before repair or replacement decisions are made.
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

        {/* Get Drain & Sewer Service in Passaic County */}
        <section className="pt-2">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#014485] mb-4">
            Get Drain &amp; Sewer Service in Passaic County
          </h2>
          <p className="mb-4 text-slate-700 text-lg">
            Whether you need drain cleaning, drain repairs, sewer cleaning, sewer repairs, hydro jetting, video inspection, fixture repair, sump pump service, or sewage ejector pump service, Drain Solutions Plus can help determine the appropriate next step for your property.
          </p>
          <p className="font-bold text-[#014485] text-lg">
            Call <a href="tel:2018819622" className="text-[#c02f2d] hover:underline">(201) 881-9622</a> to discuss your drain or sewer problem or schedule service.
          </p>
        </section>
      </div>
    </article>
  );
};

export default PassaicCountyNj;