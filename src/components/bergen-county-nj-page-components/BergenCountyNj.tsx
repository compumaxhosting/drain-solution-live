import React, { useState } from 'react';

export const BergenCountyNj: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq((prevIndex) => (prevIndex === index ? null : index));
  };

  const faqs = [
    {
      q: 'Does Drain Solutions Plus serve Bergen County?',
      a: 'Yes. Drain Solutions Plus provides residential and commercial drain, sewer, plumbing, and pump services throughout Bergen County, NJ, including communities such as Fort Lee, Hackensack, Englewood, Paramus, Ridgewood, Mahwah, Fair Lawn, and Teaneck.',
    },
    {
      q: 'What drain services are available in Bergen County?',
      a: 'Services include residential and commercial drain cleaning and repair, toilet, tub, and sink clog removal, sewer and drain cleaning, video inspections, hydro jetting, faucet and leak repair, and flush valve leak repair.',
    },
    {
      q: 'Does Drain Solutions Plus provide sewer repair?',
      a: 'Yes. Sewer and drain repair services are available for residential and commercial properties. Video inspection may be used to help identify the location and condition of a sewer or drain problem.',
    },
    {
      q: 'Does the company provide hydro jetting?',
      a: 'Yes. Hydro jetting is available for appropriate drain and sewer cleaning situations. Pipe condition and the type of obstruction should be considered before using this cleaning method.',
    },
    {
      q: 'Do you repair sump pumps and sewage ejector pumps?',
      a: 'Yes. Drain Solutions Plus provides sump pump repair and replacement as well as sewage ejector pump repair and replacement.',
    },
  ];

  return (
    <article className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-slate-800 antialiased font-sans leading-relaxed selection:bg-[#014485] selection:text-white">
      {/* Top Banner & Header */}
      <header className="border-b-2 border-slate-100 pb-10 mb-10">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#014485] mb-6">
          Drain Cleaning &amp; Sewer Services Throughout Bergen County, NJ
        </h1>
        <p className="text-base sm:text-lg mb-4 text-slate-700 leading-relaxed">
          Drain Solutions Plus provides residential and commercial drain, sewer, plumbing, and pump services throughout Bergen County, NJ. Whether you have a clogged sink, blocked toilet, slow bathtub drain, recurring sewer problem, leaking faucet, or a sump or sewage ejector pump issue, our services are designed to address common drainage and plumbing problems for homes and businesses.
        </p>
        <p className="text-base sm:text-lg mb-6 text-slate-700 leading-relaxed">
          Our Bergen County service area includes communities such as Fort Lee, Hackensack, Englewood, Paramus, Ridgewood, Mahwah, Fair Lawn, Teaneck, and surrounding communities.
        </p>
        <p className="text-lg font-bold text-[#014485]">
          Call <a href="tel:2018819622" className="text-[#c02f2d] hover:underline">(201) 881-9622</a> to discuss your drain, sewer, or plumbing service needs.
        </p>
      </header>

      {/* Main Flow Content */}
      <div className="space-y-10">
        {/* Residential & Commercial Drain Services */}
        <section className="border-b border-slate-100 pb-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#014485] mb-3">
            Residential &amp; Commercial Drain Services
          </h2>
          <p className="mb-4 text-slate-700">
            Drain problems can range from an isolated fixture clog to a larger issue affecting multiple drains. Drain Solutions Plus provides residential and commercial services to help identify and address drainage problems.
          </p>
          <p className="font-semibold text-slate-900 mb-2">Our Bergen County services include:</p>
          <ul className="list-disc list-inside space-y-1 mb-4 text-slate-700 marker:text-[#c02f2d]">
            <li>Residential drain cleaning</li>
            <li>Residential drain repair</li>
            <li>Commercial drain cleaning</li>
            <li>Commercial drain repair</li>
            <li>Sewer and drain cleaning</li>
            <li>Sewer and drain repair</li>
            <li>Toilet clog removal</li>
            <li>Tub and bathtub clog removal</li>
            <li>Sink clog removal</li>
            <li>Sewer and drain video inspection</li>
            <li>Hydro jetting</li>
            <li>Faucet and leak repair</li>
            <li>Flush valve leak repair</li>
            <li>Sump pump repair and replacement</li>
            <li>Sewage ejector pump repair and replacement</li>
          </ul>
        </section>

        {/* Drain Cleaning in Bergen County */}
        <section className="border-b border-slate-100 pb-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#014485] mb-3">
            Drain Cleaning in Bergen County
          </h2>
          <p className="mb-4 text-slate-700">
            A slow or blocked drain can interfere with everyday activities and may be caused by buildup, debris, grease, foreign objects, or other obstructions. Drain Solutions Plus provides residential and commercial drain cleaning throughout Bergen County.
          </p>
          <p className="text-slate-700">
            We also handle individual fixture clogs, including toilets, bathtubs, tubs, and sinks. If a blockage repeatedly returns, additional inspection may be useful to determine whether the problem extends farther into the drainage system.
          </p>
        </section>

        {/* Sewer & Drain Repair */}
        <section className="border-b border-slate-100 pb-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#014485] mb-3">
            Sewer &amp; Drain Repair
          </h2>
          <p className="mb-4 text-slate-700">
            Some drainage problems require more than clearing a blockage. Damaged, deteriorated, leaking, or obstructed sewer and drain lines may require repair.
          </p>
          <p className="text-slate-700">
            Drain Solutions Plus provides sewer and drain repair for residential and commercial properties in Bergen County. A video inspection can help identify the location and condition of an issue before determining the appropriate repair approach.
          </p>
        </section>

        {/* Sewer & Drain Video Inspections */}
        <section className="border-b border-slate-100 pb-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#014485] mb-3">
            Sewer &amp; Drain Video Inspections
          </h2>
          <p className="mb-4 text-slate-700">
            A sewer and drain video inspection uses a camera to view the inside of a pipe. This can help locate blockages and provide information about conditions that cannot be easily identified from outside the line.
          </p>
          <p className="font-semibold text-slate-900 mb-2">Video inspection may be appropriate when:</p>
          <ul className="list-disc list-inside space-y-1 mb-4 text-slate-700 marker:text-[#c02f2d]">
            <li>Drain or sewer problems keep returning</li>
            <li>Several fixtures are affected</li>
            <li>A sewer backup occurs</li>
            <li>The source of a blockage is unclear</li>
            <li>You suspect a damaged sewer or drain line</li>
            <li>You need information before repair or replacement</li>
          </ul>
        </section>

        {/* Hydro Jetting in Bergen County */}
        <section className="border-b border-slate-100 pb-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#014485] mb-3">
            Hydro Jetting in Bergen County
          </h2>
          <p className="mb-4 text-slate-700">
            Hydro jetting uses high-pressure water to clean certain buildup and obstructions from inside drain and sewer lines. It may be useful for certain grease, sludge, mineral buildup, and other materials that restrict flow.
          </p>
          <p className="text-slate-700">
            The condition of the pipe and type of obstruction should be considered before determining whether hydro jetting is suitable.
          </p>
        </section>

        {/* Faucet, Leak & Flush Valve Repairs */}
        <section className="border-b border-slate-100 pb-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#014485] mb-3">
            Faucet, Leak &amp; Flush Valve Repairs
          </h2>
          <p className="mb-4 text-slate-700">
            Drain Solutions Plus also provides faucet and leak repair and flush valve leak repair. These services address plumbing fixtures that may be leaking, malfunctioning, or failing to shut off properly.
          </p>
          <p className="text-slate-700">
            Addressing a leak promptly can help prevent continued water loss and potential damage around the affected fixture.
          </p>
        </section>

        {/* Sump Pump & Sewage Ejector Pump Services */}
        <section className="border-b border-slate-100 pb-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#014485] mb-3">
            Sump Pump &amp; Sewage Ejector Pump Services
          </h2>
          <p className="mb-4 text-slate-700">
            Drain Solutions Plus provides sump pump repair and replacement for properties where an existing sump pump is not operating properly or requires replacement.
          </p>
          <p className="text-slate-700">
            We also provide sewage ejector pump repair and replacement for properties that rely on sewage ejector systems. The appropriate solution depends on the condition of the existing equipment and the property&apos;s requirements.
          </p>
        </section>

        {/* Serving Communities Throughout Bergen County */}
        <section className="border-b border-slate-100 pb-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#014485] mb-3">
            Serving Communities Throughout Bergen County
          </h2>
          <p className="mb-4 text-slate-700">
            Drain Solutions Plus serves customers throughout Bergen County, including:
          </p>
          <p className="mb-4 text-slate-700 leading-relaxed">
            Allendale, Alpine, Bergenfield, Bogota, Carlstadt, Cliffside Park, Closter, Cresskill, Demarest, Dumont, East Newark, Edgewater, Elmwood Park, Emerson, Englewood, Englewood Cliffs, Fair Lawn, Fairview, Fort Lee, Franklin Lakes, Garfield, Glen Rock, Hackensack, Harrington Park, Hasbrouck Heights, Haworth, Hillsdale, Ho-Ho-Kus, Leonia, Little Ferry, Lodi, Lyndhurst, Mahwah, Maywood, Midland Park, Montvale, Moonachie, New Milford, North Arlington, Northvale, Norwood, Oakland, Old Tappan, Oradell, Palisades Park, Paramus, Park Ridge, Ramsey, Ridgefield, Ridgefield Park, Ridgewood, River Edge, River Vale, Rochelle Park, Rockleigh, Rutherford, Saddle Brook, Saddle River, Secaucus, South Hackensack, Teaneck, Tenafly, Teterboro, Upper Saddle River, Waldwick, Wallington, Washington Township, Westwood, Woodcliff Lake, and Wyckoff.
          </p>
          <p className="text-slate-700">
            If your Bergen County community is not listed, contact Drain Solutions Plus to confirm service availability.
          </p>
        </section>

        {/* When Should You Call for Drain or Sewer Service? */}
        <section className="border-b border-slate-100 pb-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#014485] mb-3">
            When Should You Call for Drain or Sewer Service?
          </h2>
          <p className="mb-4 text-slate-700">
            Professional service may be appropriate when a drain repeatedly clogs, several fixtures drain slowly, a sewer backup occurs, a plumbing fixture leaks, or a pump is no longer operating properly.
          </p>
          <p className="text-slate-700">
            Recurring problems can have different causes. Cleaning may resolve some blockages, while inspection or repair may be appropriate when a problem continues or a line appears damaged.
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

        {/* Get Drain & Sewer Service in Bergen County, NJ */}
        <section className="pt-2">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#014485] mb-4">
            Get Drain &amp; Sewer Service in Bergen County, NJ
          </h2>
          <p className="mb-4 text-slate-700 text-lg">
            From a single clogged sink or toilet to recurring drain and sewer problems, Drain Solutions Plus provides residential and commercial services throughout Bergen County.
          </p>
          <p className="font-bold text-[#014485] text-lg">
            Call <a href="tel:2018819622" className="text-[#c02f2d] hover:underline">(201) 881-9622</a> to discuss your service needs or schedule an appointment.
          </p>
        </section>
      </div>
    </article>
  );
};

export default BergenCountyNj;