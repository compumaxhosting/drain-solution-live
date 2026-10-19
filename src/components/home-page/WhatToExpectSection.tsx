import {
  ArrowRight,
  ArrowDown,
  ArrowLeft,
  Search,
  MessageSquare,
  Tag,
  Handshake,
  Wrench,
  Target,
  Phone,
} from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Assess the Situation",
    description: "We'll inspect the plumbing issue and determine what's causing the problem.",
    icon: Search,
  },
  {
    number: "02",
    title: "Explain the Solution",
    description: "We'll clearly explain what we found and what needs to be done.",
    icon: MessageSquare,
  },
  {
    number: "03",
    title: "Upfront Pricing",
    description: "You'll know the cost before we move forward. No surprises or unexpected pricing.",
    icon: Tag,
  },
  {
    number: "04",
    title: "No Pressure",
    description: "No fancy sales pitch. We provide honest recommendations and straightforward service.",
    icon: Handshake,
  },
  {
    number: "05",
    title: "We Come Prepared",
    description: "We typically carry the tools and equipment needed to diagnose and repair common plumbing and drain problems on the first visit.",
    icon: Wrench,
  },
];

export default function WhatToExpectSection() {
  return (
    <section className="relative overflow-hidden bg-white py-16 sm:py-20 lg:py-24">
      {/* Decorative Red Background Corner Accent */}
      <div className="absolute -right-24 -top-24 hidden h-96 w-96 rounded-full bg-[#C02F2D]/10 pointer-events-none lg:block" />
      <div className="absolute right-0 top-0 hidden h-48 w-48 bg-[#C02F2D] pointer-events-none lg:block [clip-path:polygon(100%_0,0_0,100%_100%)] opacity-90" />

      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">

        {/* ================= HEADER ================= */}
        <div className="mb-12 flex flex-col gap-6 lg:mb-16 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-xl">
            <div className="flex items-center space-x-2">
              <span className="text-xs font-extrabold uppercase tracking-[0.25em] text-[#C02F2D]">
                What To Expect
              </span>
              <span className="h-0.5 w-10 bg-[#C02F2D]" />
            </div>

            <h2 className="mt-2 text-3xl font-black tracking-tight text-[#014484] sm:text-4xl lg:text-5xl uppercase">
              When We Arrive
            </h2>
          </div>

          <p className="max-w-xl text-sm leading-relaxed text-gray-600 sm:text-base font-normal">
            When a Drain Solutions Plus technician arrives at your home or place of business, our first priority is to understand the problem and find the right solution.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 lg:grid-cols-[minmax(0,1fr)_40px_minmax(0,1fr)_40px_minmax(0,1fr)] lg:grid-rows-[auto_3rem_auto] lg:items-center lg:gap-y-0">
          <div className="lg:col-start-1 lg:row-start-1">
            <StepCard {...steps[0]} />
          </div>
          <div className="lg:col-start-3 lg:row-start-1">
            <StepCard {...steps[1]} />
          </div>
          <div className="lg:col-start-5 lg:row-start-1">
            <StepCard {...steps[2]} />
          </div>
          <div className="lg:col-start-5 lg:row-start-3">
            <StepCard {...steps[3]} />
          </div>
          <div className="lg:col-start-3 lg:row-start-3">
            <StepCard {...steps[4]} />
          </div>

          <div className="relative flex min-h-[200px] flex-col justify-between overflow-hidden rounded-2xl bg-[#C02F2D] p-7 text-white shadow-xl lg:col-start-1 lg:row-start-3">
            <Target className="pointer-events-none absolute -bottom-6 -right-6 h-36 w-36 text-white/10" />
            <div className="relative z-10">
              <div className="mb-2 flex items-center space-x-2">
                <span className="text-[10px] font-extrabold uppercase tracking-[0.25em] text-white/80">Our Goal</span>
                <span className="h-px w-6 bg-white/50" />
              </div>
              <h3 className="text-xl font-black leading-tight tracking-tight sm:text-2xl">Solve the problem.<br />Do it right.</h3>
              <p className="mt-2 text-xs leading-relaxed text-white/90 sm:text-sm">We believe in honest recommendations and treating you the way we would want to be treated.</p>
            </div>
            <div className="relative z-10 mt-6">
              <a href="tel:2018819622" className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-xs font-bold text-[#014484] shadow-md transition-all hover:bg-gray-100 active:scale-95">
                <span>Call Drain Solutions Plus</span>
                <ArrowRight className="h-3.5 w-3.5 text-[#C02F2D]" strokeWidth={2.5} />
              </a>
            </div>
          </div>

          <div className="hidden justify-center lg:col-start-2 lg:row-start-1 lg:flex">
            <ArrowRight className="h-6 w-6 text-[#C02F2D]" strokeWidth={2.5} />
          </div>
          <div className="hidden justify-center lg:col-start-4 lg:row-start-1 lg:flex">
            <ArrowRight className="h-6 w-6 text-[#C02F2D]" strokeWidth={2.5} />
          </div>
          <div className="hidden items-center justify-self-end pr-[15%] lg:col-start-5 lg:row-start-2 lg:flex">
            <ArrowDown className="h-6 w-6 text-[#C02F2D]" strokeWidth={2.5} />
          </div>
          <div className="hidden justify-center lg:col-start-2 lg:row-start-3 lg:flex">
            <ArrowLeft className="h-6 w-6 text-[#C02F2D]" strokeWidth={2.5} />
          </div>
          <div className="hidden justify-center lg:col-start-4 lg:row-start-3 lg:flex">
            <ArrowLeft className="h-6 w-6 text-[#C02F2D]" strokeWidth={2.5} />
          </div>
        </div>

        {/* ================= FOOTER BAR ================= */}
        <div className="mt-12 flex flex-col gap-4 border-t border-gray-200/80 pt-6 sm:flex-row sm:items-center sm:justify-between bg-[#fafaf9] rounded-xl px-6 py-5 shadow-sm">
          <div className="flex items-center space-x-3">
            <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-[#C02F2D]/10 text-[#C02F2D]">
              <Phone className="h-5 w-5" />
            </div>
            <p className="text-sm font-medium text-gray-700">
              Have a plumbing or drain problem?{" "}
              <span className="font-bold text-[#014484]">Give Drain Solutions Plus a call. We&apos;re ready to help.</span>
            </p>
          </div>

          <a
            href="tel:2018819622"
            className="group inline-flex items-center gap-2 text-xs sm:text-sm font-bold uppercase tracking-wider text-[#C02F2D] transition-colors hover:text-[#a82624]"
          >
            <span>Get Help Today</span>
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" strokeWidth={2.5} />
          </a>
        </div>

      </div>
    </section>
  );
}

/* ================= STEP CARD COMPONENT ================= */
function StepCard({
  number,
  title,
  description,
  icon: Icon,
}: {
  number: string;
  title: string;
  description: string;
  icon: React.ElementType;
}) {
  return (
    <div className="relative min-h-[200px] overflow-hidden rounded-2xl border border-gray-200/80 bg-white p-6 shadow-[0_4px_25px_rgba(0,0,0,0.04)] transition-all duration-300 hover:-translate-y-1 hover:border-[#014484]/30 hover:shadow-[0_12px_35px_rgba(1,68,132,0.08)] flex flex-col justify-between">

      {/* Large Yellow Background Watermark Number */}
      <span className="absolute right-3 -top-3 select-none text-[110px] font-black leading-none text-yellow-300/60 pointer-events-none">
        {number}
      </span>

      <div className="relative z-10">
        {/* Top Icon & Badge Row */}
        <div className="mb-4 flex items-center justify-between">
          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#014484] text-white shadow-sm">
            <Icon className="h-5 w-5" strokeWidth={2} />
          </div>

          <span className="text-sm font-mono font-black tracking-widest text-[#C02F2D]">
            {number}
          </span>
        </div>

        {/* Title */}
        <h3 className="text-lg font-bold tracking-tight text-[#014484]">
          {title}
        </h3>

        {/* Description */}
        <p className="mt-2 text-xs sm:text-sm leading-relaxed text-gray-600 font-normal">
          {description}
        </p>
      </div>
    </div>
  );
}