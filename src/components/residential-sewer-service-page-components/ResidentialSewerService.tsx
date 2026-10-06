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
  PhoneCall,
  Clock,
  MapPin,
  HelpCircle,
} from "lucide-react";

const ResidentialSewerService: React.FC = () => {
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
                  Northern NJ Residential Sewer Solutions
                </span>
              </div>

              <h1 className="text-3xl font-extrabold leading-[1.12] text-white sm:text-4xl lg:text-[44px]">
                Residential Sewer Cleaning &amp; Repair in Northern NJ
              </h1>

              <p className="mt-7 text-base leading-8 text-white/80">
                A sewer problem can affect your entire home&apos;s plumbing system. Slow drainage, recurring blockages, unpleasant odors, leaks, or other sewer-line issues may indicate that the problem is farther into the system than a single clogged fixture.
              </p>

              <div className="mt-9 flex flex-wrap gap-4">
                <a
                  href="/contact/"
                  className="inline-flex items-center gap-2 rounded-full bg-[#c02f2d] px-7 py-3.5 text-sm font-bold text-white transition hover:bg-[#a92527]"
                >
                  Schedule Residential Service
                  <ArrowUpRight className="h-4 w-4" />
                </a>
                <a
                  href="tel:2018819622"
                  className="inline-flex items-center gap-2 rounded-full border border-white/25 px-7 py-3.5 text-sm font-bold text-white transition hover:bg-white/10"
                >
                  <PhoneCall className="h-4 w-4 text-[#c02f2d]" />
                  Call (201) 881-9622
                </a>
              </div>
            </div>
          </div>

          {/* RIGHT IMAGE / BADGE */}
          <div className="relative min-h-[460px] lg:min-h-0">
            <img
              src="/images/client-images/sewer-video-inspection-2.webp"
              alt="Residential sewer cleaning and repair in Northern New Jersey"
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-transparent to-black/15" />

            {/* Experience / Reliability Card */}
            <div className="absolute bottom-8 left-6 flex items-center gap-4 bg-white px-6 py-5 shadow-2xl sm:left-10 sm:px-8">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#014484] text-white">
                <Home className="h-6 w-6" />
              </div>
              <div className="border-l border-slate-200 pl-4">
                <span className="block text-xs font-bold uppercase tracking-widest text-[#c02f2d]">
                  <Link href="/bergen-county-nj" className="hover:underline">Bergen</Link>
                  {", "}
                  <Link href="/essex-county-nj" className="hover:underline">Essex</Link>
                  {", "}
                  <Link href="/hudson-county-nj" className="hover:underline">Hudson</Link>
                  {" & "}
                  <Link href="/passaic-county-nj" className="hover:underline">Passaic</Link>
                </span>
                <span className="block text-sm font-bold text-slate-900">
                  Counties Covered
                </span>
              </div>
            </div>

            <div className="absolute right-0 top-0 h-24 w-24 bg-[#c02f2d]" />
          </div>
        </div>
      </div>

      {/* ================= SECTION 1: CLEANING SERVICE ================= */}
      <div className="mx-auto max-w-7xl px-5 py-20 sm:px-6 lg:px-8 lg:py-24">
        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
          <div>
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#c02f2d]">
              Full-Service Residential Care
            </span>
            <h2 className="mt-4 text-3xl font-extrabold leading-tight text-slate-900 sm:text-4xl">
              Professional Sewer Solutions for{" "}
              <span className="text-[#014484]">Northern New Jersey Homes</span>
            </h2>
            <div className="mt-6 h-1 w-20 bg-[#c02f2d]" />
          </div>

          <div className="space-y-6 text-base leading-8 text-slate-600">
            <p>
              Drain Solution Plus provides residential sewer cleaning, repair, and installation services throughout Northern New Jersey. Services include hydro-jetting, video sewer inspections, trenchless pipe repair, and sewer installation for residential properties.
            </p>
            <p>
              If you are experiencing a sewer problem at your home, call (201) 881-9622 or schedule service online to discuss your needs.
            </p>

            <div className="grid gap-4 pt-2 sm:grid-cols-2">
              <div className="flex items-center gap-3 rounded-lg border border-slate-200 bg-slate-50 p-4">
                <Droplets className="h-5 w-5 shrink-0 text-[#014484]" />
                <span className="text-sm font-semibold text-slate-800">
                  Hydro-Jetting Technology
                </span>
              </div>
              <div className="flex items-center gap-3 rounded-lg border border-slate-200 bg-slate-50 p-4">
                <Search className="h-5 w-5 shrink-0 text-[#014484]" />
                <span className="text-sm font-semibold text-slate-800">
                  Video Sewer Inspections
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ================= RESIDENTIAL SEWER CLEANING ================= */}
      <div className="bg-slate-50 py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-20 items-center">
            <div>
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#c02f2d]">
                Blockage Removal
              </span>
              <h2 className="mt-4 text-3xl font-extrabold leading-tight text-slate-900 sm:text-4xl">
                Residential Sewer Cleaning
              </h2>
              <div className="mt-6 h-1 w-20 bg-[#c02f2d]" />
              <p className="mt-6 text-base leading-8 text-slate-600">
                Residential sewer cleaning helps remove clogs, grease buildup, debris, and other obstructions that can restrict the flow through a home&apos;s sewer lines. Drain Solution Plus uses cleaning methods such as hydro-jetting to address stubborn buildup and blockages. Hydro-jetting uses high-pressure water to clean the inside of a sewer line and help restore normal flow when the condition of the line and blockage make the method appropriate.
              </p>
            </div>

            <div className="rounded-xl border border-slate-200 bg-white p-8 shadow-sm">
              <h3 className="text-lg font-bold text-slate-900 mb-4">Professional sewer cleaning may be appropriate when you notice:</h3>
              <ul className="space-y-3 text-slate-700">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 shrink-0 text-[#c02f2d] mt-1" />
                  <span>Slow drains throughout the home</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 shrink-0 text-[#c02f2d] mt-1" />
                  <span>Recurring sewer blockages</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 shrink-0 text-[#c02f2d] mt-1" />
                  <span>Drainage problems that return after previous cleaning</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 shrink-0 text-[#c02f2d] mt-1" />
                  <span>Unpleasant sewer odors</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 shrink-0 text-[#c02f2d] mt-1" />
                  <span>A sewer line that is not flowing normally</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 shrink-0 text-[#c02f2d] mt-1" />
                  <span>Suspected buildup or debris inside the line</span>
                </li>
              </ul>
              <p className="mt-6 text-sm text-slate-600">
                A recurring problem should not automatically be treated as another routine clog. Further inspection may be useful when the cause is unclear or the issue continues to return.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* ================= SEWER VIDEO INSPECTION ================= */}
      <div className="mx-auto max-w-7xl px-5 py-20 sm:px-6 lg:px-8 lg:py-24">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20 items-center">
          <div>
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#c02f2d]">
              Advanced Diagnostics
            </span>
            <h2 className="mt-4 text-3xl font-extrabold leading-tight text-slate-900 sm:text-4xl">
              Sewer Video Inspection
            </h2>
            <div className="mt-6 h-1 w-20 bg-[#c02f2d]" />
            <p className="mt-6 text-base leading-8 text-slate-600">
              A sewer video inspection uses a camera to view the inside of a sewer line. This can help identify the location and potential cause of a blockage or other sewer-line problem. Drain Solution Plus provides video inspections to help determine what is happening inside residential sewer lines. The company&apos;s service information also describes inspecting the main sewer line to the street to provide a visual assessment of the condition of the line.
            </p>
          </div>

          <div className="rounded-xl border border-slate-200 bg-slate-50 p-8 shadow-sm">
            <h3 className="text-lg font-bold text-slate-900 mb-4">Video inspection can be particularly useful when:</h3>
            <ul className="space-y-3 text-slate-700">
              <li className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 shrink-0 text-[#c02f2d] mt-1" />
                <span>A sewer blockage keeps returning</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 shrink-0 text-[#c02f2d] mt-1" />
                <span>The source of the problem is difficult to identify</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 shrink-0 text-[#c02f2d] mt-1" />
                <span>A sewer line may be cracked or damaged</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 shrink-0 text-[#c02f2d] mt-1" />
                <span>Cleaning alone has not resolved the problem</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 shrink-0 text-[#c02f2d] mt-1" />
                <span>A homeowner wants to understand the condition of a main sewer line</span>
              </li>
            </ul>
            <p className="mt-6 text-sm text-slate-600">
              Seeing the inside of the pipe can provide useful information before deciding whether cleaning, repair, or another solution is appropriate.
            </p>
          </div>
        </div>
      </div>

      {/* ================= HYDRO-JETTING FOR SEWER LINES ================= */}
      <div className="bg-slate-50 py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-20 items-center">
            <div>
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#c02f2d]">
                High-Pressure Cleaning
              </span>
              <h2 className="mt-4 text-3xl font-extrabold leading-tight text-slate-900 sm:text-4xl">
                Hydro-Jetting for Sewer Lines
              </h2>
              <div className="mt-6 h-1 w-20 bg-[#c02f2d]" />
            </div>
            <div className="space-y-6 text-base leading-8 text-slate-600">
              <p>
                Hydro-jetting is a sewer cleaning technique that uses high-pressure water to remove certain blockages and buildup from inside a pipe.
              </p>
              <p>
                Drain Solution Plus lists hydro-jetting among its residential sewer cleaning methods. The technique may be useful for stubborn clogs, grease buildup, and debris when the sewer line is suitable for this type of cleaning.
              </p>
              <p>
                Hydro-jetting is a cleaning method, not a universal solution for every sewer problem. If inspection reveals a damaged sewer line, cleaning may not address the underlying issue. In those situations, repair options may need to be considered.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* ================= SECTION 2: EXPERT REPAIR SERVICES ================= */}
      <div id="expert-repairs" className="bg-white">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-6 lg:px-8 lg:py-28">
          <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
            {/* Visual Box */}
            <div className="relative order-2 lg:order-1">
              <div className="overflow-hidden rounded-sm shadow-xl">
                <img
                  src="/images/client-images/emergency-main-sewer-clogged.webp"
                  alt="Expert Sewer Repair Services for Residential Issues"
                  className="h-[440px] w-full object-cover sm:h-[500px]"
                />
              </div>

              <div className="absolute -bottom-6 -right-4 hidden w-72 bg-[#014484] p-6 text-white shadow-2xl sm:block">
                <div className="flex items-center gap-3">
                  <Wrench className="h-6 w-6 text-[#c02f2d]" />
                  <span className="text-xs font-bold uppercase tracking-widest text-white/80">
                    Trenchless Repairs
                  </span>
                </div>
                <p className="mt-3 text-sm font-semibold leading-relaxed text-white/90">
                  Minimizes disruption to your property and preserves your landscaping.
                </p>
              </div>
            </div>

            {/* Content Side */}
            <div className="order-1 lg:order-2">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#c02f2d]">
                Structural Fixes
              </span>

              <h2 className="mt-4 text-3xl font-extrabold leading-tight text-slate-900 sm:text-4xl lg:text-[40px]">
                Residential Sewer Repair &amp; Trenchless Options
              </h2>

              <div className="mt-7 space-y-5 text-base leading-8 text-slate-600">
                <p>
                  Sewer lines can develop problems such as cracks, leaks, blockages, or other damage. When cleaning cannot resolve the underlying issue, professional sewer repair may be necessary.
                </p>
                <p>
                  Drain Solution Plus provides residential sewer repair and uses video inspection to help diagnose sewer-line problems. The company also offers trenchless pipe repair, a method intended to address certain pipe problems without the extensive excavation associated with some traditional repair approaches.
                </p>
                <p>
                  Whether trenchless repair is appropriate depends on the condition, location, and configuration of the sewer line. A professional assessment can help determine which repair approach fits the specific problem.
                </p>
              </div>

              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                {[
                  "Cracks, Leaks & Blockages",
                  "Trenchless Pipe Repair",
                  "Landscaping Preservation",
                  "Long-Lasting Solutions",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#014484] text-white">
                      <Check className="h-3.5 w-3.5" />
                    </span>
                    <span className="text-sm font-semibold text-slate-800">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ================= RESIDENTIAL SEWER INSTALLATION ================= */}
      <div className="bg-[#111c2b] text-white">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-6 lg:px-8 lg:py-28">
          <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-24">
            <div>
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#c02f2d]">
                New Construction &amp; Upgrades
              </span>

              <h2 className="mt-5 text-3xl font-extrabold leading-tight sm:text-4xl lg:text-5xl">
                Residential Sewer Installation
              </h2>

              <p className="mt-6 text-lg font-medium text-white/90">
                Drain Solution Plus also provides residential sewer installation services for new construction and system upgrades.
              </p>

              <div className="mt-8 h-1 w-20 bg-[#c02f2d]" />
            </div>

            <div className="space-y-6 text-base leading-8 text-white/75">
              <p>
                Proper planning is an important part of a new sewer installation. The company&apos;s current service page states that its installation work involves planning and execution based on the home&apos;s requirements and is intended to provide a functional sewer system for residential use.
              </p>
              <p>
                Homeowners, builders, and contractors considering a new sewer system or an upgrade can contact Drain Solution Plus to discuss the project and determine the appropriate requirements.
              </p>

              <div className="grid gap-4 pt-4 sm:grid-cols-3">
                <div className="border border-white/10 bg-white/5 p-4 text-center">
                  <CheckCircle2 className="mx-auto h-6 w-6 text-[#c02f2d]" />
                  <p className="mt-2 text-xs font-bold uppercase tracking-wider text-white">
                    New Construction
                  </p>
                </div>
                <div className="border border-white/10 bg-white/5 p-4 text-center">
                  <CheckCircle2 className="mx-auto h-6 w-6 text-[#c02f2d]" />
                  <p className="mt-2 text-xs font-bold uppercase tracking-wider text-white">
                    System Upgrades
                  </p>
                </div>
                <div className="border border-white/10 bg-white/5 p-4 text-center">
                  <ShieldCheck className="mx-auto h-6 w-6 text-[#c02f2d]" />
                  <p className="mt-2 text-xs font-bold uppercase tracking-wider text-white">
                    Proper Planning
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ================= WHEN SHOULD YOU CALL & HOW IT WORKS ================= */}
      <div className="mx-auto max-w-7xl px-5 py-20 sm:px-6 lg:px-8 lg:py-24">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="rounded-xl border border-slate-200 bg-slate-50 p-8 shadow-sm">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#c02f2d]">Timing</span>
            <h3 className="mt-3 text-2xl font-extrabold text-slate-900">When Should You Call for Sewer Service?</h3>
            <p className="mt-4 text-slate-600 text-sm leading-7">
              Some sewer problems become easier to identify when several fixtures are affected at the same time. Consider requesting professional sewer service when you experience:
            </p>
            <ul className="mt-6 space-y-3">
              <li className="flex items-start gap-3 text-sm text-slate-700">
                <CheckCircle2 className="h-5 w-5 text-[#c02f2d] shrink-0 mt-0.5" /> Repeated sewer backups
              </li>
              <li className="flex items-start gap-3 text-sm text-slate-700">
                <CheckCircle2 className="h-5 w-5 text-[#c02f2d] shrink-0 mt-0.5" /> Multiple slow drains
              </li>
              <li className="flex items-start gap-3 text-sm text-slate-700">
                <CheckCircle2 className="h-5 w-5 text-[#c02f2d] shrink-0 mt-0.5" /> Persistent unpleasant odors
              </li>
              <li className="flex items-start gap-3 text-sm text-slate-700">
                <CheckCircle2 className="h-5 w-5 text-[#c02f2d] shrink-0 mt-0.5" /> Recurring blockages
              </li>
              <li className="flex items-start gap-3 text-sm text-slate-700">
                <CheckCircle2 className="h-5 w-5 text-[#c02f2d] shrink-0 mt-0.5" /> Suspected sewer-line damage
              </li>
              <li className="flex items-start gap-3 text-sm text-slate-700">
                <CheckCircle2 className="h-5 w-5 text-[#c02f2d] shrink-0 mt-0.5" /> A sewer problem that returns after cleaning
              </li>
            </ul>
            <p className="mt-6 text-xs text-slate-500">
              Early evaluation can help identify whether the problem involves cleaning, inspection, repair, or another service.
            </p>
          </div>

          <div className="rounded-xl border border-slate-200 bg-slate-50 p-8 shadow-sm">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#c02f2d]">Process</span>
            <h3 className="mt-3 text-2xl font-extrabold text-slate-900">How Residential Sewer Service Works</h3>
            <div className="mt-4 space-y-4 text-sm leading-7 text-slate-600">
              <p><strong>1. Describe the Problem:</strong> Tell the service provider what you are experiencing, including slow drainage, recurring clogs, backups, odors, or suspected sewer-line damage.</p>
              <p><strong>2. Inspect the Sewer Line:</strong> When additional diagnosis is needed, video inspection can provide a view inside the sewer line and help identify the location and nature of the problem.</p>
              <p><strong>3. Determine the Appropriate Service:</strong> Depending on the findings, the appropriate solution may involve sewer cleaning, hydro-jetting, repair, or another service.</p>
              <p><strong>4. Complete the Required Work:</strong> If cleaning is appropriate, the sewer line can be cleaned using the applicable method. If the line is damaged, repair options can be considered.</p>
              <p><strong>5. Discuss Future Maintenance:</strong> If your home has recurring sewer problems, ask about appropriate maintenance and inspection options for the system.</p>
            </div>
          </div>
        </div>
      </div>

      {/* ================= SERVICE AREA & 24/7 AVAILABILITY ================= */}
      <div className="bg-slate-50 py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-20 items-center">
            <div>
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#c02f2d]">
                Local Coverage
              </span>
              <h2 className="mt-4 text-3xl font-extrabold leading-tight text-slate-900 sm:text-4xl">
                Residential Sewer Service in Northern New Jersey
              </h2>
              <div className="mt-6 h-1 w-20 bg-[#c02f2d]" />
              <p className="mt-6 text-base leading-8 text-slate-600">
                Drain Solution Plus provides residential sewer services throughout Northern New Jersey. Service availability can depend on the specific location, so homeowners outside these areas should contact the company to confirm availability.
              </p>
              <div className="mt-6 p-4 bg-[#014484] text-white rounded-lg inline-flex items-center gap-3">
                <Clock className="h-6 w-6 text-[#c02f2d] shrink-0" />
                <div>
                  <span className="block text-xs font-bold uppercase tracking-wider text-white/75">Emergency Availability</span>
                  <span className="text-sm font-bold">Same-Day and 24/7 Drain &amp; Sewer Service</span>
                </div>
              </div>
            </div>

            <div className="rounded-xl border border-slate-200 bg-white p-8 shadow-sm">
              <h3 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
                <MapPin className="h-5 w-5 text-[#c02f2d]" /> Counties Served in Northern NJ:
              </h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { name: "Bergen County, NJ", href: "/bergen-county-nj" },
                  { name: "Essex County, NJ", href: "/essex-county-nj" },
                  { name: "Hudson County, NJ", href: "/hudson-county-nj" },
                  { name: "Passaic County, NJ", href: "/passaic-county-nj" },
                ].map((county) => (
                  <li key={county.href} className="flex items-center gap-3 rounded border border-slate-200 bg-slate-50 p-4 font-semibold text-slate-800 shadow-sm">
                    <CheckCircle2 className="h-5 w-5 text-[#c02f2d]" />
                    <Link href={county.href} className="underline decoration-slate-400 underline-offset-2 hover:text-[#014485]">
                      {county.name}
                    </Link>
                  </li>
                ))}
              </ul>
              <p className="mt-6 text-xs text-slate-500">
                Drain Solution Plus currently advertises same-day service and 24/7 drain and sewer service in Northern NJ. The company lists (201) 881-9622 as its service phone number.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* ================= WHY CHOOSE DRAIN SOLUTION PLUS ================= */}
      <div className="mx-auto max-w-7xl px-5 py-20 sm:px-6 lg:px-8 lg:py-24">
        <div className="text-center max-w-3xl mx-auto">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#c02f2d]">
            Our Advantages
          </span>
          <h2 className="mt-3 text-3xl font-extrabold text-slate-900 sm:text-4xl">
            Why Choose Drain Solution Plus?
          </h2>
          <p className="mt-4 text-base text-slate-600">
            Drain Solution Plus focuses on drain and sewer services for residential and commercial properties. For homeowners, the company offers several related sewer services rather than limiting its work to basic clog removal.
          </p>
          <div className="mt-6 mx-auto h-1 w-20 bg-[#c02f2d]" />
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-xl border border-slate-200 bg-slate-50 p-6 shadow-sm">
            <CheckCircle2 className="h-6 w-6 text-[#c02f2d] mb-3" />
            <h3 className="font-bold text-slate-900">Sewer Cleaning</h3>
          </div>
          <div className="rounded-xl border border-slate-200 bg-slate-50 p-6 shadow-sm">
            <CheckCircle2 className="h-6 w-6 text-[#c02f2d] mb-3" />
            <h3 className="font-bold text-slate-900">Hydro-Jetting</h3>
          </div>
          <div className="rounded-xl border border-slate-200 bg-slate-50 p-6 shadow-sm">
            <CheckCircle2 className="h-6 w-6 text-[#c02f2d] mb-3" />
            <h3 className="font-bold text-slate-900">Video Sewer Inspection</h3>
          </div>
          <div className="rounded-xl border border-slate-200 bg-slate-50 p-6 shadow-sm">
            <CheckCircle2 className="h-6 w-6 text-[#c02f2d] mb-3" />
            <h3 className="font-bold text-slate-900">Sewer Repair</h3>
          </div>
          <div className="rounded-xl border border-slate-200 bg-slate-50 p-6 shadow-sm">
            <CheckCircle2 className="h-6 w-6 text-[#c02f2d] mb-3" />
            <h3 className="font-bold text-slate-900">Trenchless Pipe Repair</h3>
          </div>
          <div className="rounded-xl border border-slate-200 bg-slate-50 p-6 shadow-sm">
            <CheckCircle2 className="h-6 w-6 text-[#c02f2d] mb-3" />
            <h3 className="font-bold text-slate-900">Sewer Installation</h3>
          </div>
          <div className="rounded-xl border border-slate-200 bg-slate-50 p-6 shadow-sm">
            <CheckCircle2 className="h-6 w-6 text-[#c02f2d] mb-3" />
            <h3 className="font-bold text-slate-900">Same-Day Service</h3>
          </div>
          <div className="rounded-xl border border-slate-200 bg-slate-50 p-6 shadow-sm">
            <CheckCircle2 className="h-6 w-6 text-[#c02f2d] mb-3" />
            <h3 className="font-bold text-slate-900">24/7 Drain &amp; Sewer Service</h3>
          </div>
        </div>
      </div>

      {/* ================= FAQ SECTION ================= */}
      <div className="bg-slate-50 py-20 sm:py-24">
        <div className="mx-auto max-w-4xl px-5 sm:px-6 lg:px-8">
          <div className="text-center">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#c02f2d]">
              FAQ Section
            </span>
            <h2 className="mt-3 text-3xl font-extrabold text-slate-900 sm:text-4xl">
              Residential Sewer Service FAQs
            </h2>
            <p className="mt-4 text-base text-slate-600">Frequently Asked Questions</p>
            <div className="mt-6 mx-auto h-1 w-20 bg-[#c02f2d]" />
          </div>

          <div className="mt-12 space-y-6">
            <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="text-lg font-bold text-slate-900 flex items-center gap-3">
                <HelpCircle className="h-5 w-5 text-[#c02f2d] shrink-0" /> What is residential sewer cleaning?
              </h3>
              <p className="mt-3 text-sm leading-7 text-slate-600 pl-8">
                Residential sewer cleaning removes blockages and buildup from sewer lines serving a home. Drain Solution Plus uses methods including hydro-jetting to address certain clogs, grease buildup, and debris. The appropriate cleaning method depends on the condition of the sewer line and the type of obstruction involved.
              </p>
            </div>

            <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="text-lg font-bold text-slate-900 flex items-center gap-3">
                <HelpCircle className="h-5 w-5 text-[#c02f2d] shrink-0" /> When should I have my sewer line inspected?
              </h3>
              <p className="mt-3 text-sm leading-7 text-slate-600 pl-8">
                A sewer inspection may be useful when blockages repeatedly return, the source of a drainage problem is unclear, or there is concern about damage inside the sewer line. Drain Solution Plus uses video inspection to view sewer lines and help identify the location and cause of problems.
              </p>
            </div>

            <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="text-lg font-bold text-slate-900 flex items-center gap-3">
                <HelpCircle className="h-5 w-5 text-[#c02f2d] shrink-0" /> Does Drain Solution Plus offer hydro-jetting?
              </h3>
              <p className="mt-3 text-sm leading-7 text-slate-600 pl-8">
                Yes. Hydro-jetting is listed as one of Drain Solution Plus&apos;s residential sewer cleaning methods. It uses high-pressure water to help remove certain blockages and buildup from inside sewer lines. Whether it is suitable for a particular line depends on the condition of the system.
              </p>
            </div>

            <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="text-lg font-bold text-slate-900 flex items-center gap-3">
                <HelpCircle className="h-5 w-5 text-[#c02f2d] shrink-0" /> What is trenchless sewer repair?
              </h3>
              <p className="mt-3 text-sm leading-7 text-slate-600 pl-8">
                Trenchless sewer repair is a repair approach that can address certain underground pipe problems without extensive excavation. Drain Solution Plus lists trenchless pipe repair among its residential sewer repair services. The appropriate repair method depends on the condition and configuration of the sewer line.
              </p>
            </div>

            <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="text-lg font-bold text-slate-900 flex items-center gap-3">
                <HelpCircle className="h-5 w-5 text-[#c02f2d] shrink-0" /> Does Drain Solution Plus install residential sewer lines?
              </h3>
              <p className="mt-3 text-sm leading-7 text-slate-600 pl-8">
                Yes. Drain Solution Plus provides residential sewer installation services for new construction and system upgrades. The company describes planning and installation based on the requirements of the residential property.
              </p>
            </div>

            <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="text-lg font-bold text-slate-900 flex items-center gap-3">
                <HelpCircle className="h-5 w-5 text-[#c02f2d] shrink-0" /> What areas does Drain Solution Plus serve?
              </h3>
              <p className="mt-3 text-sm leading-7 text-slate-600 pl-8">
                Drain Solution Plus currently lists{" "}
                <Link href="/bergen-county-nj" className="text-[#014485] underline">Bergen</Link>,{" "}
                <Link href="/essex-county-nj" className="text-[#014485] underline">Essex</Link>,{" "}
                <Link href="/hudson-county-nj" className="text-[#014485] underline">Hudson</Link>, and{" "}
                <Link href="/passaic-county-nj" className="text-[#014485] underline">Passaic</Link>{" "}
                counties as its Northern New Jersey service areas. Homeowners should contact the company to confirm service availability for their specific property.
              </p>
            </div>

            <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="text-lg font-bold text-slate-900 flex items-center gap-3">
                <HelpCircle className="h-5 w-5 text-[#c02f2d] shrink-0" /> Does Drain Solution Plus offer 24/7 sewer service?
              </h3>
              <p className="mt-3 text-sm leading-7 text-slate-600 pl-8">
                The company currently advertises 24/7 drain and sewer service in Northern New Jersey and also advertises same-day service. Actual response and scheduling depend on the circumstances and service availability.
              </p>
            </div>

            <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="text-lg font-bold text-slate-900 flex items-center gap-3">
                <HelpCircle className="h-5 w-5 text-[#c02f2d] shrink-0" /> Can a recurring sewer clog indicate a bigger problem?
              </h3>
              <p className="mt-3 text-sm leading-7 text-slate-600 pl-8">
                Yes. A recurring blockage can result from continued buildup, an obstruction farther inside the sewer line, or a damaged section of pipe. When a problem repeatedly returns, video inspection can help determine what is happening inside the line before choosing the next service.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* ================= FINAL CTA ================= */}
      <div className="relative overflow-hidden bg-[#014484]">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-6 lg:px-8 lg:py-20">
          <div className="flex flex-col justify-between gap-8 md:flex-row md:items-center">
            <div className="max-w-2xl">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-white/60">
                Drain Solution Plus
              </span>
              <h2 className="mt-3 text-3xl font-extrabold leading-tight text-white sm:text-4xl">
                Request Residential Sewer Service
              </h2>
              <p className="mt-4 text-sm leading-7 text-white/75">
                If your home&apos;s sewer line is clogged, slow, backing up, or showing signs of another problem, professional evaluation can help identify the appropriate solution. Drain Solution Plus provides residential sewer cleaning, inspection, repair, and installation services in Northern New Jersey. Call (201) 881-9622 or schedule service online to get started.
              </p>
            </div>

            <div className="flex flex-wrap gap-4 shrink-0">
              <a
                href="/contact/"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#c02f2d] px-8 py-4 text-sm font-bold text-white transition hover:bg-[#a92527]"
              >
                Schedule Service Online
                <ArrowUpRight className="h-5 w-5" />
              </a>
              <a
                href="tel:2018819622"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/25 px-8 py-4 text-sm font-bold text-white transition hover:bg-white/10"
              >
                <PhoneCall className="h-5 w-5 text-[#c02f2d]" />
                (201) 881-9622
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResidentialSewerService;