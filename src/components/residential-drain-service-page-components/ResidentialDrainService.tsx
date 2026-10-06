import React from "react";
import Link from "next/link";
import {
  ArrowUpRight,
  Check,
  Droplets,
  Search,
  Wrench,
  ShieldCheck,
  Home,
  CheckCircle2,
} from "lucide-react";

const ResidentialDrainService: React.FC = () => {
  return (
    <section className="overflow-hidden bg-white text-slate-900">
      {/* ================= HERO SECTION ================= */}
      <div className="relative">
        <div className="grid min-h-[640px] lg:grid-cols-[46%_54%]">
          {/* LEFT BLUE PANEL */}
          <div className="relative flex items-center overflow-hidden bg-[#014484] px-6 py-20 sm:px-10 lg:px-16">
            {/* Decorative background circles */}
            <div className="absolute -left-32 -top-32 h-80 w-80 rounded-full border-[45px] border-white/5" />
            <div className="absolute -bottom-32 -right-32 h-80 w-80 rounded-full border-[45px] border-white/5" />

            <div className="relative z-10 max-w-xl">
              <div className="mb-7 flex items-center gap-3">
                <span className="h-[2px] w-12 bg-[#c02f2d]" />
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-white/70">
                  Northern New Jersey Service Coverage
                </span>
              </div>

              <h1 className="text-3xl font-extrabold leading-[1.12] text-white sm:text-4xl lg:text-[44px]">
                Residential Drain Cleaning &amp; Repair in Northern NJ
              </h1>

              <p className="mt-7 text-base leading-8 text-white/80">
                A clogged, slow, or damaged drain can quickly disrupt your home. Whether water is backing up in the kitchen sink, your shower is draining slowly, or you are dealing with a recurring blockage, Drain Solution Plus provides residential drain cleaning and repair services throughout Northern New Jersey.
              </p>

              <div className="mt-9 flex flex-wrap gap-4">
                <a
                  href="tel:2018819622"
                  className="inline-flex items-center gap-2 rounded-full bg-[#c02f2d] px-7 py-3.5 text-sm font-bold text-white transition hover:bg-[#a92527]"
                >
                  Call (201) 881-9622
                  <ArrowUpRight className="h-4 w-4" />
                </a>
                <a
                  href="#expert-drain-repairs"
                  className="inline-flex items-center gap-2 rounded-full border border-white/25 px-7 py-3.5 text-sm font-bold text-white transition hover:bg-white/10"
                >
                  Repairs &amp; Maintenance
                </a>
              </div>
            </div>
          </div>

          {/* RIGHT IMAGE / BADGE */}
          <div className="relative min-h-[460px] lg:min-h-0">
            <img
              src="/images/client-images/unclogged-sink-drain.webp"
              alt="Residential Drain Cleaning & Repair in Northern NJ"
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-transparent to-black/15" />

            {/* Experience / Residential Card */}
            <div className="absolute bottom-8 left-6 flex items-center gap-4 bg-white px-6 py-5 shadow-2xl sm:left-10 sm:px-8">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#014484] text-white">
                <Home className="h-6 w-6" />
              </div>
              <div className="border-l border-slate-200 pl-4">
                <span className="block text-xs font-bold uppercase tracking-widest text-[#c02f2d]">
                  10 Years Experience
                </span>
                <span className="block text-sm font-bold text-slate-900">
                  24/7 Drain &amp; Sewer Service
                </span>
              </div>
            </div>

            <div className="absolute right-0 top-0 h-24 w-24 bg-[#c02f2d]" />
          </div>
        </div>
      </div>

      {/* ================= HIGHLIGHTS BADGE STRIP ================= */}
      <div className="bg-slate-100 border-b border-slate-200">
        <div className="mx-auto max-w-7xl px-5 py-6 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4 text-center">
            <div className="bg-white p-4 rounded shadow-sm">
              <span className="block text-sm font-bold text-[#014484]">Same-day service</span>
            </div>
            <div className="bg-white p-4 rounded shadow-sm">
              <span className="block text-sm font-bold text-[#014484]">24/7 Drain &amp; Sewer Service</span>
            </div>
            <div className="bg-white p-4 rounded shadow-sm">
              <span className="block text-sm font-bold text-[#014484]">Video Camera Inspections</span>
            </div>
            <div className="bg-white p-4 rounded shadow-sm">
              <span className="block text-sm font-bold text-[#014484]">High-Pressure Water Jetting</span>
            </div>
          </div>
        </div>
      </div>

      {/* ================= SECTION 1: RESIDENTIAL DRAIN CLEANING SERVICES ================= */}
      <div className="mx-auto max-w-7xl px-5 py-20 sm:px-6 lg:px-8 lg:py-24">
        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
          <div>
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#c02f2d]">
              Home Drainage Care
            </span>
            <h2 className="mt-4 text-3xl font-extrabold leading-tight text-slate-900 sm:text-4xl">
              Residential <span className="text-[#014484]">Drain Cleaning Services</span>
            </h2>
            <div className="mt-6 h-1 w-20 bg-[#c02f2d]" />
          </div>

          <div className="space-y-6 text-base leading-8 text-slate-600">
            <p>
              A drain that is slow today can become completely blocked tomorrow. Professional drain cleaning can remove buildup and obstructions that interfere with normal water flow.
            </p>
            <p>
              Drain Solution Plus provides residential drain cleaning for homeowners experiencing problems such as:
            </p>

            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-slate-800 font-medium">
              {[
                "Slow-draining sinks",
                "Clogged kitchen drains",
                "Clogged bathroom sinks",
                "Shower and bathtub drain clogs",
                "Floor drain blockages",
                "Toilet drainage problems",
                "Recurring drain clogs",
                "Foul or unusual drain odors",
                "Water backing up through drains",
                "Main drain and sewer-line blockages"
              ].map((problem) => (
                <li key={problem} className="flex items-center gap-2 bg-slate-50 border border-slate-200 p-3 rounded">
                  <Check className="h-4 w-4 text-[#c02f2d] shrink-0" />
                  <span className="text-sm">{problem}</span>
                </li>
              ))}
            </ul>

            <p className="pt-2">
              The right cleaning method depends on the type and location of the blockage. Our technicians can assess the problem and use appropriate professional equipment to restore proper drainage.
            </p>

            <div className="grid gap-4 pt-2 sm:grid-cols-2">
              <div className="flex items-center gap-3 rounded-lg border border-slate-200 bg-slate-50 p-4">
                <Droplets className="h-5 w-5 shrink-0 text-[#014484]" />
                <span className="text-sm font-semibold text-slate-800">
                  High-Pressure Water Jetting
                </span>
              </div>
              <div className="flex items-center gap-3 rounded-lg border border-slate-200 bg-slate-50 p-4">
                <Search className="h-5 w-5 shrink-0 text-[#014484]" />
                <span className="text-sm font-semibold text-slate-800">
                  Video Camera Inspections
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ================= SECTION 2: PROFESSIONAL DRAIN CLEANING FOR DIFFICULT CLOGS ================= */}
      <div className="bg-slate-50 py-16 border-y border-slate-200">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#c02f2d]">
              Advanced Equipment &amp; Techniques
            </span>
            <h2 className="mt-3 text-3xl font-extrabold text-slate-900 sm:text-4xl">
              Professional Drain Cleaning for Difficult Clogs
            </h2>
            <p className="mt-4 text-base text-slate-600 leading-7">
              Some blockages can be cleared with conventional drain-cleaning equipment, while stubborn or recurring problems may require a more thorough approach.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            <div className="bg-white p-8 rounded shadow-sm border border-slate-200">
              <h3 className="text-xl font-bold text-[#014484] mb-4">Drain Snaking</h3>
              <p className="text-slate-600 text-sm leading-7">
                Professional drain snakes can help break through and remove many common obstructions inside residential drain lines. Different equipment and cable sizes can be used depending on the drain and the nature of the blockage.
              </p>
            </div>
            <div className="bg-white p-8 rounded shadow-sm border border-slate-200">
              <h3 className="text-xl font-bold text-[#014484] mb-4">High-Pressure Water Jetting</h3>
              <p className="text-slate-600 text-sm leading-7">
                Hydro jetting, also called high-pressure water jetting, uses pressurized water to clean buildup and obstructions from inside a drain or sewer line. This method can be useful when a drain line has significant buildup or when a recurring blockage requires more than simply opening a passage through the obstruction.
              </p>
            </div>
            <div className="bg-white p-8 rounded shadow-sm border border-slate-200">
              <h3 className="text-xl font-bold text-[#014484] mb-4">Video Camera Inspection</h3>
              <p className="text-slate-600 text-sm leading-7 mb-4">
                When a drain problem keeps coming back, clearing the blockage may not be enough. A video camera inspection can provide a visual look inside the sewer or drain line.
              </p>
              <p className="text-slate-600 text-sm leading-7">
                Camera inspections can help identify conditions such as blockages, cracks, deteriorated pipe, root intrusion, and other problems inside the line. Understanding what is happening inside the pipe can help determine whether the appropriate solution is cleaning, repair, or another form of corrective work.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* ================= SECTION 3: RESIDENTIAL DRAIN REPAIR & RECURRING PROBLEMS ================= */}
      <div id="expert-drain-repairs" className="bg-white">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-6 lg:px-8 lg:py-28">
          <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
            {/* Visual Box */}
            <div className="relative order-2 lg:order-1">
              <div className="overflow-hidden rounded-sm shadow-xl">
                <img
                  src="/images/client-images/emergency-main-sewer-clogged.webp"
                  alt="Residential Drain Repair"
                  className="h-[440px] w-full object-cover sm:h-[500px]"
                />
              </div>

              <div className="absolute -bottom-6 -right-4 hidden w-72 bg-[#014484] p-6 text-white shadow-2xl sm:block">
                <div className="flex items-center gap-3">
                  <Wrench className="h-6 w-6 text-[#c02f2d]" />
                  <span className="text-xs font-bold uppercase tracking-widest text-white/80">
                    Targeted Repairs
                  </span>
                </div>
                <p className="mt-3 text-sm font-semibold leading-relaxed text-white/90">
                  Address drainage problems at their source with minimal unnecessary excavation.
                </p>
              </div>
            </div>

            {/* Content Side */}
            <div className="order-1 lg:order-2">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#c02f2d]">
                Source Diagnostics &amp; Fixes
              </span>

              <h2 className="mt-4 text-3xl font-extrabold leading-tight text-slate-900 sm:text-4xl">
                Residential Drain Repair
              </h2>

              <div className="mt-7 space-y-5 text-base leading-8 text-slate-600">
                <p>
                  Not every drainage problem is simply a clog. Drain pipes can develop leaks, cracks, deterioration, or alignment problems over time. When a damaged drain line is responsible for recurring problems, professional repair may be necessary.
                </p>
                <p>
                  Drain Solution Plus provides residential drain repair services designed to address drainage problems at their source. Depending on the condition and location of the pipe, repair options may include methods intended to minimize unnecessary excavation. Our team can inspect the problem, explain the available options, and determine the appropriate repair approach for your home.
                </p>
                <p>
                  <strong>Recurring Drain Problems? Find the Cause:</strong> If the same drain keeps clogging after it has been cleared, there may be an underlying problem inside the line. Repeated blockages can be associated with buildup, damaged piping, root intrusion, or other conditions that are not always visible from the outside. Instead of repeatedly treating the symptom, a professional inspection can help determine what is actually happening inside the pipe.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ================= SECTION 4: PROCESS & WHEN TO CALL ================= */}
      <div className="bg-slate-50 py-20 border-t border-slate-200">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <div className="grid gap-16 lg:grid-cols-2">
            <div>
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#c02f2d]">
                Step-By-Step Workflow
              </span>
              <h2 className="mt-3 text-3xl font-extrabold text-slate-900 sm:text-4xl mb-8">
                Our Residential Drain Service Process
              </h2>
              
              <div className="space-y-6">
                {[
                  { step: "1", title: "Identify the Problem", desc: "We start by understanding what is happening with your home's drainage system, including where the blockage occurs and whether the problem is recurring." },
                  { step: "2", title: "Determine the Appropriate Approach", desc: "Different drainage problems require different solutions. Depending on the situation, professional drain-cleaning equipment, water jetting, or video inspection may be appropriate." },
                  { step: "3", title: "Clean or Inspect the Drain", desc: "We address the obstruction or inspect the line to better understand the condition of the drainage system." },
                  { step: "4", title: "Identify Underlying Problems", desc: "If the problem involves damaged or deteriorated piping, an inspection can help determine where the issue is located and what type of repair may be needed." },
                  { step: "5", title: "Discuss the Solution", desc: "Once the condition of the drain or sewer line is understood, you can make an informed decision about the next step." }
                ].map((item) => (
                  <div key={item.step} className="flex gap-4 bg-white p-5 rounded border border-slate-200 shadow-sm">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#014484] text-white font-bold">
                      {item.step}
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-slate-900">{item.title}</h3>
                      <p className="mt-1 text-sm text-slate-600 leading-6">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#c02f2d]">
                Professional Guidance
              </span>
              <h2 className="mt-3 text-3xl font-extrabold text-slate-900 sm:text-4xl mb-8">
                When Should You Call a Residential Drain Professional?
              </h2>
              <p className="text-slate-600 text-base mb-6 leading-7">
                A completely blocked drain is not the only reason to seek professional help. Consider scheduling professional drain service if you notice:
              </p>

              <ul className="space-y-3 mb-8">
                {[
                  "A sink, tub, or shower draining unusually slowly",
                  "A drain that repeatedly becomes clogged",
                  "Water backing up into a sink, tub, or floor drain",
                  "Persistent unpleasant odors coming from a drain",
                  "Multiple fixtures draining slowly at the same time",
                  "A toilet that repeatedly has drainage problems",
                  "Signs that a main drain or sewer line may be blocked",
                  "Drain problems that return shortly after being cleared"
                ].map((reason) => (
                  <li key={reason} className="flex items-start gap-3 bg-white p-3 rounded border border-slate-200">
                    <CheckCircle2 className="h-5 w-5 text-[#c02f2d] shrink-0 mt-0.5" />
                    <span className="text-sm font-medium text-slate-800">{reason}</span>
                  </li>
                ))}
              </ul>

              <p className="text-sm text-slate-600 italic">
                When several fixtures are affected at the same time, the problem may involve a larger portion of the drainage system rather than one individual fixture.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* ================= SECTION 5: SERVICE AREA & WHY CHOOSE US ================= */}
      <div className="bg-[#111c2b] text-white py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <div className="grid gap-14 lg:grid-cols-2">
            <div>
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#c02f2d]">
                Northern New Jersey Coverage
              </span>
              <h2 className="mt-3 text-3xl font-extrabold sm:text-4xl mb-6">
                Residential Drain Service in Northern New Jersey
              </h2>
              <p className="text-white/80 text-base leading-8 mb-6">
                Drain Solution Plus provides residential drain and sewer services throughout Northern New Jersey. Our listed service area includes:
              </p>

              <div className="grid grid-cols-2 gap-4 mb-8">
                {[
                  { name: "Bergen County", href: "/bergen-county-nj" },
                  { name: "Essex County", href: "/essex-county-nj" },
                  { name: "Hudson County", href: "/hudson-county-nj" },
                  { name: "Passaic County", href: "/passaic-county-nj" },
                ].map((county) => (
                  <Link
                    key={county.href}
                    href={county.href}
                    className="rounded border border-white/10 bg-white/5 p-4 text-center transition-colors hover:bg-white/15 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
                  >
                    <span className="text-sm font-bold text-white underline decoration-white/60 underline-offset-4">
                      {county.name}
                    </span>
                  </Link>
                ))}
              </div>

              <p className="text-sm text-white/75">
                If you are unsure whether your home is within our service area, contact us directly.
              </p>
            </div>

            <div>
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#c02f2d]">
                The Drain Solution Plus Advantage
              </span>
              <h2 className="mt-3 text-3xl font-extrabold sm:text-4xl mb-6">
                Why Homeowners Choose Drain Solution Plus
              </h2>
              <p className="text-white/80 text-base leading-8 mb-6">
                Choosing a drain company is about more than simply getting water moving again. Homeowners need a service provider that can identify the problem, explain the available options, and work with the existing plumbing system. Drain Solution Plus brings:
              </p>

              <ul className="grid grid-cols-1 gap-3">
                {[
                  "10 years of experience serving customers with drain and sewer problems",
                  "Residential drain cleaning and repair services",
                  "Professional drain-cleaning equipment",
                  "High-pressure water jetting",
                  "Video camera sewer-line inspections",
                  "24/7 drain and sewer service",
                  "Same-day service",
                  "Northern New Jersey service coverage"
                ].map((adv) => (
                  <li key={adv} className="flex items-center gap-3 bg-white/5 border border-white/10 p-3 rounded">
                    <ShieldCheck className="h-5 w-5 text-[#c02f2d] shrink-0" />
                    <span className="text-sm text-white/90">{adv}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* ================= SECTION 6: FAQS ================= */}
      <div className="bg-white py-20">
        <div className="mx-auto max-w-5xl px-5 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#c02f2d]">
              Common Questions
            </span>
            <h2 className="mt-3 text-3xl font-extrabold text-slate-900 sm:text-4xl">
              Residential Drain Service FAQs
            </h2>
          </div>

          <div className="space-y-6">
            {[
              { q: "What does residential drain cleaning include?", a: "Residential drain cleaning involves clearing obstructions and buildup from household drain lines so wastewater can flow properly. The appropriate cleaning method depends on the location and nature of the blockage." },
              { q: "How do I know if I need drain cleaning or drain repair?", a: "If a drain is simply blocked, professional cleaning may resolve the problem. If the drain repeatedly clogs or there are signs of damaged, cracked, leaking, or deteriorated piping, an inspection may be necessary to determine whether repair is appropriate." },
              { q: "Can you clear a recurring drain clog?", a: "Yes. Drain Solution Plus handles recurring residential drain problems. When a blockage continues to return, a video camera inspection can help determine whether an underlying problem exists inside the line." },
              { q: "What is hydro jetting?", a: "Hydro jetting is a drain and sewer cleaning method that uses high-pressure water to remove buildup and obstructions from inside a pipe. It can be useful for certain stubborn or heavily built-up drain lines." },
              { q: "What is a video sewer inspection?", a: "A video sewer inspection uses a camera to view the inside of a drain or sewer line. This can help locate blockages and identify problems such as cracks, deterioration, or root intrusion." },
              { q: "Can you repair damaged residential drain pipes?", a: "Drain Solution Plus provides residential drain repair services for problems involving damaged or deteriorated drainage piping. The appropriate repair depends on the condition and location of the pipe." },
              { q: "Do you provide emergency residential drain service?", a: "Drain Solution Plus advertises 24/7 drain and sewer service in Northern New Jersey. If you have an urgent drainage or sewer problem, call (201) 881-9622 to discuss your situation and service availability." },
              { q: "What areas do you serve?", a: "Drain Solution Plus lists Bergen, Essex, Hudson, and Passaic counties among its Northern New Jersey service areas. Contact the company if you are unsure whether your location is covered." },
              { q: "How quickly can residential drain service be scheduled?", a: "Drain Solution Plus advertises same-day service. Actual availability can depend on the nature of the problem, location, and current scheduling capacity." }
            ].map((faq, idx) => (
              <div key={idx} className="bg-slate-50 border border-slate-200 p-6 rounded shadow-sm">
                <h3 className="text-lg font-bold text-slate-900 mb-2">{faq.q}</h3>
                <p className="text-slate-600 text-sm leading-7">
                  {faq.q === "What areas do you serve?" ? (
                    <>
                      Drain Solution Plus lists{" "}
                      <Link href="/bergen-county-nj" className="text-[#014485] underline">Bergen</Link>,{" "}
                      <Link href="/essex-county-nj" className="text-[#014485] underline">Essex</Link>,{" "}
                      <Link href="/hudson-county-nj" className="text-[#014485] underline">Hudson</Link>, and{" "}
                      <Link href="/passaic-county-nj" className="text-[#014485] underline">Passaic</Link>{" "}
                      counties among its Northern New Jersey service areas. Contact the company if you are unsure whether your location is covered.
                    </>
                  ) : (
                    faq.a
                  )}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ================= FINAL CTA ================= */}
      <div className="relative overflow-hidden bg-[#014484]">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-6 lg:px-8 lg:py-20">
          <div className="flex flex-col justify-between gap-8 md:flex-row md:items-center">
            <div className="max-w-2xl">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-white/60">
                <Link href="/bergen-county-nj" className="underline underline-offset-2 hover:text-white">Bergen County</Link>
                {" • "}
                <Link href="/essex-county-nj" className="underline underline-offset-2 hover:text-white">Essex County</Link>
                {" • "}
                <Link href="/hudson-county-nj" className="underline underline-offset-2 hover:text-white">Hudson County</Link>
                {" • "}
                <Link href="/passaic-county-nj" className="underline underline-offset-2 hover:text-white">Passaic County</Link>
              </span>
              <h2 className="mt-3 text-3xl font-extrabold leading-tight text-white sm:text-4xl">
                Need Residential Drain Cleaning or Repair?
              </h2>
              <p className="mt-4 text-sm leading-7 text-white/75">
                Don&apos;t let a slow or clogged drain become a bigger plumbing problem. Whether you need help with a stubborn household clog, recurring drainage problems, or a damaged drain line, Drain Solution Plus can assess the issue and help determine the appropriate next step.
              </p>
            </div>

            <a
              href="tel:2018819622"
              className="inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-[#c02f2d] px-8 py-4 text-sm font-bold text-white transition hover:bg-[#a92527]"
            >
              Call: (201) 881-9622
              <ArrowUpRight className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResidentialDrainService;