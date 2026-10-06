import React from "react";
import Link from "next/link";
import {
  ArrowUpRight,
  ShieldCheck,
  Wrench,
  Search,
  Droplets,
  CalendarCheck,
  CheckCircle2,
  PhoneCall,
  Clock,
  MapPin,
  HelpCircle,
  AlertTriangle,
} from "lucide-react";

const CommercialDrainService: React.FC = () => {
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
                  Northern NJ Commercial Drain Specialists
                </span>
              </div>

              <h1 className="text-3xl font-extrabold leading-[1.12] text-white sm:text-4xl lg:text-[46px]">
                Commercial Drain Cleaning &amp; Repair for Northern NJ Businesses
              </h1>

              <p className="mt-7 text-base leading-8 text-white/80">
                Commercial drain problems can quickly interfere with normal business operations. Slow drains, recurring clogs, backups, grease buildup, and damaged drain lines can affect kitchens, bathrooms, floor drains, and other parts of a commercial property.
              </p>

              <div className="mt-9 flex flex-wrap gap-4">
                <a
                  href="/contact/"
                  className="inline-flex items-center gap-2 rounded-full bg-[#c02f2d] px-7 py-3.5 text-sm font-bold text-white transition hover:bg-[#a92527]"
                >
                  Schedule Service
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
              src="/images/client-images/iron-sewer-replaced-with-pvc1.webp"
              alt="Commercial sewer line replaced with durable PVC piping"
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-transparent to-black/15" />

            {/* Corner Badge */}
            <div className="absolute bottom-8 left-6 flex items-center gap-4 bg-white px-6 py-5 shadow-2xl sm:left-10 sm:px-8">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#014484] text-white">
                <ShieldCheck className="h-6 w-6" />
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

      {/* ================= SECTION 1: DETAILED HERO CONTENT ================= */}
      <div className="mx-auto max-w-7xl px-5 py-20 sm:px-6 lg:px-8 lg:py-24">
        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
          <div>
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#c02f2d]">
              Commercial Expertise
            </span>
            <h2 className="mt-4 text-3xl font-extrabold leading-tight text-slate-900 sm:text-4xl">
              Professional Service Across{" "}
              <span className="text-[#014484]">Northern New Jersey</span>
            </h2>
            <div className="mt-6 h-1 w-20 bg-[#c02f2d]" />
          </div>

          <div className="space-y-6 text-base leading-8 text-slate-600">
            <p>
              Drain Solution Plus provides commercial drain cleaning and repair services throughout Northern New Jersey, with service available in{" "}
              <Link href="/bergen-county-nj" className="text-[#014485] underline">Bergen</Link>,{" "}
              <Link href="/essex-county-nj" className="text-[#014485] underline">Essex</Link>,{" "}
              <Link href="/hudson-county-nj" className="text-[#014485] underline">Hudson</Link>, and{" "}
              <Link href="/passaic-county-nj" className="text-[#014485] underline">Passaic</Link> counties.
            </p>
            <p>
              Our commercial drain services include drain cleaning, drain repairs, video inspection, high-pressure water jetting, and preventive drain maintenance. If your business is dealing with a recurring blockage or a drainage problem that needs professional attention, call (201) 881-9622 or schedule service online.
            </p>
          </div>
        </div>
      </div>

      {/* ================= SECTION 2: COMMERCIAL DRAIN CLEANING SERVICES ================= */}
      <div id="tailored-solutions" className="bg-slate-50">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-6 lg:px-8 lg:py-28">
          <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
            {/* Visual Box */}
            <div className="relative order-2 lg:order-1">
              <div className="overflow-hidden rounded-sm shadow-xl">
                <img
                  src="/images/client-images/emergency-main-sewer-clogged.webp"
                  alt="Clogged sewer line being addressed with commercial drain service"
                  className="h-[440px] w-full object-cover sm:h-[500px]"
                />
              </div>

              <div className="absolute -bottom-6 -right-4 hidden w-72 bg-[#014484] p-6 text-white shadow-2xl sm:block">
                <div className="flex items-center gap-3">
                  <Wrench className="h-6 w-6 text-[#c02f2d]" />
                  <span className="text-xs font-bold uppercase tracking-widest text-white/80">
                    Comprehensive Care
                  </span>
                </div>
                <p className="mt-3 text-sm font-semibold leading-relaxed text-white/90">
                  Addressing root causes rather than simply treating symptoms.
                </p>
              </div>
            </div>

            {/* Content Side */}
            <div className="order-1 lg:order-2">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#c02f2d]">
                Targeted Solutions
              </span>

              <h2 className="mt-4 text-3xl font-extrabold leading-tight text-slate-900 sm:text-4xl lg:text-[40px]">
                Commercial Drain Cleaning Services
              </h2>

              <div className="mt-7 space-y-5 text-base leading-8 text-slate-600">
                <p>
                  Commercial drainage systems can experience heavier use and more demanding conditions than residential systems. Grease, debris, sediment, foreign material, and repeated use can contribute to slow drainage and blockages.
                </p>
                <p>
                  Drain Solution Plus provides commercial drain cleaning designed to identify and address drainage problems rather than simply treating the symptoms.
                </p>
                <p>
                  Depending on the condition of the system, service may include:
                </p>
              </div>

              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                <div className="flex items-center gap-3 rounded-lg border border-slate-200 bg-white p-4 shadow-sm">
                  <CheckCircle2 className="h-5 w-5 shrink-0 text-[#c02f2d]" />
                  <span className="text-sm font-semibold text-slate-800">Clearing clogged commercial drains</span>
                </div>
                <div className="flex items-center gap-3 rounded-lg border border-slate-200 bg-white p-4 shadow-sm">
                  <CheckCircle2 className="h-5 w-5 shrink-0 text-[#c02f2d]" />
                  <span className="text-sm font-semibold text-slate-800">Addressing slow or restricted drainage</span>
                </div>
                <div className="flex items-center gap-3 rounded-lg border border-slate-200 bg-white p-4 shadow-sm">
                  <CheckCircle2 className="h-5 w-5 shrink-0 text-[#c02f2d]" />
                  <span className="text-sm font-semibold text-slate-800">Cleaning drains affected by buildup</span>
                </div>
                <div className="flex items-center gap-3 rounded-lg border border-slate-200 bg-white p-4 shadow-sm">
                  <CheckCircle2 className="h-5 w-5 shrink-0 text-[#c02f2d]" />
                  <span className="text-sm font-semibold text-slate-800">High-pressure water jetting</span>
                </div>
                <div className="flex items-center gap-3 rounded-lg border border-slate-200 bg-white p-4 shadow-sm">
                  <CheckCircle2 className="h-5 w-5 shrink-0 text-[#c02f2d]" />
                  <span className="text-sm font-semibold text-slate-800">Video inspection of drainage or sewer lines</span>
                </div>
                <div className="flex items-center gap-3 rounded-lg border border-slate-200 bg-white p-4 shadow-sm">
                  <CheckCircle2 className="h-5 w-5 shrink-0 text-[#c02f2d]" />
                  <span className="text-sm font-semibold text-slate-800">Commercial drain repairs</span>
                </div>
                <div className="flex items-center gap-3 rounded-lg border border-slate-200 bg-white p-4 shadow-sm sm:col-span-2">
                  <CheckCircle2 className="h-5 w-5 shrink-0 text-[#c02f2d]" />
                  <span className="text-sm font-semibold text-slate-800">Routine inspections and preventive maintenance</span>
                </div>
              </div>

              <p className="mt-6 text-sm text-slate-500">
                The appropriate method depends on the type and location of the blockage, the condition of the drainage system, and the scope of the problem.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* ================= WHAT IS COMMERCIAL DRAIN CLEANING? ================= */}
      <div className="mx-auto max-w-7xl px-5 py-20 sm:px-6 lg:px-8 lg:py-24">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20 items-center">
          <div>
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#c02f2d]">
              In-Depth Knowledge
            </span>
            <h2 className="mt-4 text-3xl font-extrabold leading-tight text-slate-900 sm:text-4xl">
              What Is Commercial Drain Cleaning?
            </h2>
            <div className="mt-6 h-1 w-20 bg-[#c02f2d]" />
          </div>
          <div className="space-y-6 text-base leading-8 text-slate-600">
            <p>
              Commercial drain cleaning is the professional removal of blockages and buildup from drainage systems serving businesses and commercial properties.
            </p>
            <p>
              Unlike a basic household drain clog, a commercial drainage problem may involve larger or more heavily used drain lines, recurring buildup, grease, or problems farther inside the system. Proper diagnosis can help determine whether the issue can be resolved through cleaning or whether the drain or pipe also requires repair.
            </p>
            <p>
              For businesses, addressing drainage problems promptly can help reduce operational disruption and prevent a minor drainage issue from developing into a more significant plumbing problem.
            </p>
          </div>
        </div>
      </div>

      {/* ================= COMMON COMMERCIAL DRAIN PROBLEMS ================= */}
      <div className="bg-slate-50 py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#c02f2d]">
              Warning Signs
            </span>
            <h2 className="mt-3 text-3xl font-extrabold text-slate-900 sm:text-4xl">
              Common Commercial Drain Problems
            </h2>
            <p className="mt-4 text-base text-slate-600">
              Businesses can experience a range of drainage problems depending on the property and how its plumbing system is used. Common warning signs include:
            </p>
            <div className="mt-6 mx-auto h-1 w-20 bg-[#c02f2d]" />
          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-xl border border-slate-200 bg-white p-8 shadow-sm">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-[#014484] text-white mb-5">
                <Droplets className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900">Slow-Draining Fixtures</h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">
                A sink, floor drain, or other fixture that drains slowly may indicate partial blockage or buildup inside the drainage line.
              </p>
            </div>

            <div className="rounded-xl border border-slate-200 bg-white p-8 shadow-sm">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-[#014484] text-white mb-5">
                <Wrench className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900">Recurring Clogs</h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">
                If the same drain repeatedly becomes clogged after cleaning, the underlying issue may require further inspection rather than repeated surface-level clearing.
              </p>
            </div>

            <div className="rounded-xl border border-slate-200 bg-white p-8 shadow-sm">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-[#014484] text-white mb-5">
                <AlertTriangle className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900">Grease and Buildup</h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">
                Commercial kitchens and other high-use areas can place significant demands on drainage systems. Grease and other material can accumulate inside drain lines and restrict normal flow.
              </p>
            </div>

            <div className="rounded-xl border border-slate-200 bg-white p-8 shadow-sm">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-[#014484] text-white mb-5">
                <Droplets className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900">Drain Backups</h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">
                A backup can indicate a more significant obstruction or drainage-system problem. Commercial properties should address backups promptly because they can interfere with business operations and create difficult cleanup conditions.
              </p>
            </div>

            <div className="rounded-xl border border-slate-200 bg-white p-8 shadow-sm md:col-span-2 lg:col-span-2">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-[#014484] text-white mb-5">
                <Search className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900">Unusual Drainage Problems</h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">
                When several fixtures are draining slowly or experiencing problems at the same time, the issue may involve a larger section of the drainage system rather than an individual fixture.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* ================= COMMERCIAL DRAIN CLEANING AND REPAIR ================= */}
      <div className="mx-auto max-w-7xl px-5 py-20 sm:px-6 lg:px-8 lg:py-24">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20 items-center">
          <div>
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#c02f2d]">
              Complete Solutions
            </span>
            <h2 className="mt-4 text-3xl font-extrabold leading-tight text-slate-900 sm:text-4xl">
              Commercial Drain Cleaning and Repair
            </h2>
            <div className="mt-6 h-1 w-20 bg-[#c02f2d]" />
          </div>
          <div className="space-y-6 text-base leading-8 text-slate-600">
            <p>
              Cleaning removes blockages and buildup, but cleaning is not always the complete solution. Drain Solution Plus also provides commercial drain repairs for situations where the drainage system has a damaged or deteriorated component.
            </p>
            <p>
              A professional assessment can help determine whether your business needs:
            </p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <li className="flex items-center gap-2 font-semibold text-slate-800">
                <CheckCircle2 className="h-4 w-4 text-[#c02f2d]" /> Drain cleaning
              </li>
              <li className="flex items-center gap-2 font-semibold text-slate-800">
                <CheckCircle2 className="h-4 w-4 text-[#c02f2d]" /> Further inspection
              </li>
              <li className="flex items-center gap-2 font-semibold text-slate-800">
                <CheckCircle2 className="h-4 w-4 text-[#c02f2d]" /> High-pressure water jetting
              </li>
              <li className="flex items-center gap-2 font-semibold text-slate-800">
                <CheckCircle2 className="h-4 w-4 text-[#c02f2d]" /> Pipe or drain repair
              </li>
              <li className="flex items-center gap-2 font-semibold text-slate-800">
                <CheckCircle2 className="h-4 w-4 text-[#c02f2d]" /> Sewer cleaning
              </li>
              <li className="flex items-center gap-2 font-semibold text-slate-800">
                <CheckCircle2 className="h-4 w-4 text-[#c02f2d]" /> Sewer repair or replacement
              </li>
            </ul>
            <p className="pt-2">
              The goal is to identify the actual problem and determine the appropriate service instead of assuming every drainage issue is simply a clog.
            </p>
          </div>
        </div>
      </div>

      {/* ================= VIDEO INSPECTION ================= */}
      <div className="bg-slate-50 py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-20 items-center">
            <div>
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#c02f2d]">
                Advanced Diagnostics
              </span>
              <h2 className="mt-4 text-3xl font-extrabold leading-tight text-slate-900 sm:text-4xl">
                Video Inspection for Commercial Drain Problems
              </h2>
              <div className="mt-6 h-1 w-20 bg-[#c02f2d]" />
              <p className="mt-6 text-base leading-8 text-slate-600">
                Video inspection can provide a direct view inside a drain or sewer line. Drain Solution Plus uses video inspection to help identify conditions inside drainage and sewer lines. The company also describes main-line video inspection as a way to view the condition of a sewer line to the street.
              </p>
            </div>

            <div className="rounded-xl border border-slate-200 bg-white p-8 shadow-sm">
              <h3 className="text-lg font-bold text-slate-900 mb-4">A video inspection can be particularly useful when:</h3>
              <ul className="space-y-3 text-slate-700">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 shrink-0 text-[#c02f2d] mt-1" />
                  <span>A blockage keeps returning</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 shrink-0 text-[#c02f2d] mt-1" />
                  <span>The cause of a drainage problem is unclear</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 shrink-0 text-[#c02f2d] mt-1" />
                  <span>A sewer or drain line may be damaged</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 shrink-0 text-[#c02f2d] mt-1" />
                  <span>Additional information is needed before recommending repair</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 shrink-0 text-[#c02f2d] mt-1" />
                  <span>A property owner needs to understand the condition of a main line</span>
                </li>
              </ul>
              <p className="mt-6 text-sm text-slate-600">
                Seeing the inside of the line can help determine whether the problem is primarily a blockage, buildup, or a condition requiring repair.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* ================= HIGH-PRESSURE WATER JETTING ================= */}
      <div className="mx-auto max-w-7xl px-5 py-20 sm:px-6 lg:px-8 lg:py-24">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20 items-center">
          <div>
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#c02f2d]">
              Powerful Cleaning
            </span>
            <h2 className="mt-4 text-3xl font-extrabold leading-tight text-slate-900 sm:text-4xl">
              High-Pressure Water Jetting
            </h2>
            <div className="mt-6 h-1 w-20 bg-[#c02f2d]" />
          </div>
          <div className="space-y-6 text-base leading-8 text-slate-600">
            <p>
              High-pressure water jetting is one of the methods Drain Solution Plus uses for commercial drainage and sewer cleaning.
            </p>
            <p>
              The process uses pressurized water to clean buildup and obstructions from the inside of a drainage line. It can be useful when conventional drain-clearing methods are not sufficient for the condition of the line.
            </p>
            <p>
              Whether water jetting is appropriate depends on the drainage system, the obstruction, and the condition of the pipe. An assessment helps determine the appropriate cleaning method.
            </p>
          </div>
        </div>
      </div>

      {/* ================= PREVENTIVE COMMERCIAL DRAIN MAINTENANCE ================= */}
      <div className="bg-[#111c2b] text-white">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-6 lg:px-8 lg:py-28">
          <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-24">
            <div>
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#c02f2d]">
                Long-Term Reliability
              </span>

              <h2 className="mt-5 text-3xl font-extrabold leading-tight sm:text-4xl lg:text-5xl">
                Preventive Commercial Drain Maintenance
              </h2>

              <p className="mt-6 text-lg font-medium text-white/90">
                A commercial drainage problem does not always begin as an emergency. Gradual buildup can restrict drainage over time. Regular inspection and cleaning can help identify developing problems before they interfere with normal operations.
              </p>

              <div className="mt-8 h-1 w-20 bg-[#c02f2d]" />
            </div>

            <div className="space-y-6 text-base leading-8 text-white/75">
              <p>
                Drain Solution Plus offers preventive commercial drain maintenance that can include:
              </p>

              <ul className="space-y-3">
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5 text-[#c02f2d]" /> Routine drain inspections
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5 text-[#c02f2d]" /> Scheduled cleaning
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5 text-[#c02f2d]" /> System checks
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5 text-[#c02f2d]" /> Identification of developing drainage problems
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5 text-[#c02f2d]" /> Cleaning and maintenance based on the property&apos;s needs
                </li>
              </ul>

              <p>
                Preventive maintenance is particularly relevant for businesses where drainage problems can interrupt employees, customers, tenants, kitchens, restrooms, or other daily operations.
              </p>
              <p>
                The appropriate maintenance frequency depends on the property&apos;s drainage system, usage, history of blockages, and other site-specific conditions.
              </p>

              <div className="grid gap-4 pt-4 sm:grid-cols-3">
                <div className="border border-white/10 bg-white/5 p-4 text-center">
                  <CheckCircle2 className="mx-auto h-6 w-6 text-[#c02f2d]" />
                  <p className="mt-2 text-xs font-bold uppercase tracking-wider text-white">
                    Routine Inspections
                  </p>
                </div>
                <div className="border border-white/10 bg-white/5 p-4 text-center">
                  <CheckCircle2 className="mx-auto h-6 w-6 text-[#c02f2d]" />
                  <p className="mt-2 text-xs font-bold uppercase tracking-wider text-white">
                    Scheduled Cleaning
                  </p>
                </div>
                <div className="border border-white/10 bg-white/5 p-4 text-center">
                  <CheckCircle2 className="mx-auto h-6 w-6 text-[#c02f2d]" />
                  <p className="mt-2 text-xs font-bold uppercase tracking-wider text-white">
                    System Checks
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ================= HOW COMMERCIAL DRAIN SERVICE WORKS ================= */}
      <div className="mx-auto max-w-7xl px-5 py-20 sm:px-6 lg:px-8 lg:py-24">
        <div className="text-center max-w-3xl mx-auto">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#c02f2d]">
            Step-by-Step Process
          </span>
          <h2 className="mt-3 text-3xl font-extrabold text-slate-900 sm:text-4xl">
            How Commercial Drain Service Works
          </h2>
          <p className="mt-4 text-base text-slate-600">
            Every commercial drainage problem is different, but professional service generally begins with understanding the symptoms and identifying where the problem is occurring.
          </p>
          <div className="mt-6 mx-auto h-1 w-20 bg-[#c02f2d]" />
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <div className="rounded-xl border border-slate-200 bg-slate-50 p-8 shadow-sm">
            <span className="text-3xl font-extrabold text-[#c02f2d]">01</span>
            <h3 className="mt-4 text-lg font-bold text-slate-900">Describe the Drainage Problem</h3>
            <p className="mt-3 text-sm leading-7 text-slate-600">
              When contacting Drain Solution Plus, provide information about what you are experiencing, such as a slow drain, recurring clog, backup, or other drainage issue.
            </p>
          </div>

          <div className="rounded-xl border border-slate-200 bg-slate-50 p-8 shadow-sm">
            <span className="text-3xl font-extrabold text-[#c02f2d]">02</span>
            <h3 className="mt-4 text-lg font-bold text-slate-900">Assess the Drainage System</h3>
            <p className="mt-3 text-sm leading-7 text-slate-600">
              The problem can then be evaluated to determine what part of the drainage system may be affected and what type of service is appropriate.
            </p>
          </div>

          <div className="rounded-xl border border-slate-200 bg-slate-50 p-8 shadow-sm">
            <span className="text-3xl font-extrabold text-[#c02f2d]">03</span>
            <h3 className="mt-4 text-lg font-bold text-slate-900">Choose the Appropriate Cleaning or Inspection Method</h3>
            <p className="mt-3 text-sm leading-7 text-slate-600">
              Depending on the condition of the system, available methods may include drain cleaning, high-pressure water jetting, or video inspection.
            </p>
          </div>

          <div className="rounded-xl border border-slate-200 bg-slate-50 p-8 shadow-sm">
            <span className="text-3xl font-extrabold text-[#c02f2d]">04</span>
            <h3 className="mt-4 text-lg font-bold text-slate-900">Address the Underlying Problem</h3>
            <p className="mt-3 text-sm leading-7 text-slate-600">
              If cleaning resolves the issue, the drainage system can be returned to normal operation. If inspection identifies damaged or deteriorated components, repair may be recommended.
            </p>
          </div>

          <div className="rounded-xl border border-slate-200 bg-slate-50 p-8 shadow-sm md:col-span-2 lg:col-span-2">
            <span className="text-3xl font-extrabold text-[#c02f2d]">05</span>
            <h3 className="mt-4 text-lg font-bold text-slate-900">Discuss Preventive Maintenance When Appropriate</h3>
            <p className="mt-3 text-sm leading-7 text-slate-600">
              For businesses experiencing recurring drainage problems, routine inspections and cleaning may help address buildup before it develops into a larger operational issue.
            </p>
          </div>
        </div>
      </div>

      {/* ================= WHO CAN BENEFIT / WHY ADDRESS PROMPTLY ================= */}
      <div className="bg-slate-50 py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            <div className="rounded-xl border border-slate-200 bg-white p-8 shadow-sm">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#c02f2d]">Target Audience</span>
              <h3 className="mt-3 text-2xl font-extrabold text-slate-900">Who Can Benefit From Commercial Drain Service?</h3>
              <p className="mt-4 text-slate-600 text-sm leading-7">
                Commercial drain cleaning and repair can be relevant to businesses and commercial properties experiencing:
              </p>
              <ul className="mt-6 space-y-3">
                <li className="flex items-start gap-3 text-sm text-slate-700">
                  <CheckCircle2 className="h-5 w-5 text-[#c02f2d] shrink-0 mt-0.5" /> Slow or clogged drains
                </li>
                <li className="flex items-start gap-3 text-sm text-slate-700">
                  <CheckCircle2 className="h-5 w-5 text-[#c02f2d] shrink-0 mt-0.5" /> Recurring drainage problems
                </li>
                <li className="flex items-start gap-3 text-sm text-slate-700">
                  <CheckCircle2 className="h-5 w-5 text-[#c02f2d] shrink-0 mt-0.5" /> Commercial kitchen drain buildup
                </li>
                <li className="flex items-start gap-3 text-sm text-slate-700">
                  <CheckCircle2 className="h-5 w-5 text-[#c02f2d] shrink-0 mt-0.5" /> Floor drain problems
                </li>
                <li className="flex items-start gap-3 text-sm text-slate-700">
                  <CheckCircle2 className="h-5 w-5 text-[#c02f2d] shrink-0 mt-0.5" /> Sewer or main-line drainage issues
                </li>
                <li className="flex items-start gap-3 text-sm text-slate-700">
                  <CheckCircle2 className="h-5 w-5 text-[#c02f2d] shrink-0 mt-0.5" /> Drain backups
                </li>
                <li className="flex items-start gap-3 text-sm text-slate-700">
                  <CheckCircle2 className="h-5 w-5 text-[#c02f2d] shrink-0 mt-0.5" /> Drainage problems that return after previous cleaning
                </li>
                <li className="flex items-start gap-3 text-sm text-slate-700">
                  <CheckCircle2 className="h-5 w-5 text-[#c02f2d] shrink-0 mt-0.5" /> Damaged or deteriorating drain lines
                </li>
                <li className="flex items-start gap-3 text-sm text-slate-700">
                  <CheckCircle2 className="h-5 w-5 text-[#c02f2d] shrink-0 mt-0.5" /> A need for routine drain maintenance
                </li>
              </ul>
              <p className="mt-6 text-xs text-slate-500">
                If you are unsure whether the problem involves a single fixture or a larger drainage line, professional inspection can help determine the appropriate next step.
              </p>
            </div>

            <div className="rounded-xl border border-slate-200 bg-white p-8 shadow-sm">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#c02f2d]">Urgency &amp; Value</span>
              <h3 className="mt-3 text-2xl font-extrabold text-slate-900">Why Address Commercial Drain Problems Promptly?</h3>
              <div className="mt-4 space-y-4 text-sm leading-7 text-slate-600">
                <p>
                  A drainage problem can become more disruptive when it is left unresolved.
                </p>
                <p>
                  A slow drain may eventually stop draining. A recurring clog may indicate a deeper problem. A damaged drain line may require more extensive attention than a simple blockage.
                </p>
                <p>
                  For a commercial property, the practical concern is not only the plumbing itself. Drainage problems can interfere with normal business activity and create inconvenience for employees, customers, tenants, or visitors.
                </p>
                <p>
                  Prompt professional assessment can help determine whether the issue requires cleaning, inspection, maintenance, or repair.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ================= SERVICE AREA & 24/7 AVAILABILITY ================= */}
      <div className="mx-auto max-w-7xl px-5 py-20 sm:px-6 lg:px-8 lg:py-24">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20 items-center">
          <div>
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#c02f2d]">
              Local Coverage
            </span>
            <h2 className="mt-4 text-3xl font-extrabold leading-tight text-slate-900 sm:text-4xl">
              Commercial Drain Service in Northern New Jersey
            </h2>
            <div className="mt-6 h-1 w-20 bg-[#c02f2d]" />
            <p className="mt-6 text-base leading-8 text-slate-600">
              Drain Solution Plus provides commercial drain and sewer services in Northern New Jersey. The company is based in Hawthorne, New Jersey, and lists commercial drain cleaning and commercial drain repairs among its services.
            </p>
            <div className="mt-6 p-4 bg-[#014484] text-white rounded-lg inline-flex items-center gap-3">
              <Clock className="h-6 w-6 text-[#c02f2d] shrink-0" />
              <div>
                <span className="block text-xs font-bold uppercase tracking-wider text-white/75">Emergency Availability</span>
                <span className="text-sm font-bold">Same-Day and 24/7 Drain &amp; Sewer Service</span>
              </div>
            </div>
          </div>

          <div className="rounded-xl border border-slate-200 bg-slate-50 p-8 shadow-sm">
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
                <li key={county.href} className="flex items-center gap-3 rounded border border-slate-200 bg-white p-4 font-semibold text-slate-800 shadow-sm">
                  <CheckCircle2 className="h-5 w-5 text-[#c02f2d]" />
                  <Link href={county.href} className="underline decoration-slate-400 underline-offset-2 hover:text-[#014485]">
                    {county.name}
                  </Link>
                </li>
              ))}
            </ul>
            <p className="mt-6 text-xs text-slate-500">
              These service areas are stated on the company&apos;s current commercial and contact pages. If a drainage problem is affecting your business, contact Drain Solution Plus to discuss the problem and determine the appropriate service. Call (201) 881-9622 to request commercial drain service.
            </p>
          </div>
        </div>
      </div>

      {/* ================= WHY CHOOSE DRAIN SOLUTION PLUS ================= */}
      <div className="bg-slate-50 py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#c02f2d]">
              Our Advantages
            </span>
            <h2 className="mt-3 text-3xl font-extrabold text-slate-900 sm:text-4xl">
              Why Choose Drain Solution Plus for Commercial Drain Service?
            </h2>
            <p className="mt-4 text-base text-slate-600">
              Drain Solution Plus focuses specifically on drain and sewer cleaning and repair. The company also states that it provides upfront pricing for plumbing and drain repair services.
            </p>
            <div className="mt-6 mx-auto h-1 w-20 bg-[#c02f2d]" />
          </div>

          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
              <CheckCircle2 className="h-6 w-6 text-[#c02f2d] mb-3" />
              <h3 className="font-bold text-slate-900">Commercial Drain Cleaning</h3>
            </div>
            <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
              <CheckCircle2 className="h-6 w-6 text-[#c02f2d] mb-3" />
              <h3 className="font-bold text-slate-900">Commercial Drain Repairs</h3>
            </div>
            <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
              <CheckCircle2 className="h-6 w-6 text-[#c02f2d] mb-3" />
              <h3 className="font-bold text-slate-900">Sewer Cleaning &amp; Repair</h3>
            </div>
            <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
              <CheckCircle2 className="h-6 w-6 text-[#c02f2d] mb-3" />
              <h3 className="font-bold text-slate-900">Video Inspection</h3>
            </div>
            <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
              <CheckCircle2 className="h-6 w-6 text-[#c02f2d] mb-3" />
              <h3 className="font-bold text-slate-900">High-Pressure Water Jetting</h3>
            </div>
            <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
              <CheckCircle2 className="h-6 w-6 text-[#c02f2d] mb-3" />
              <h3 className="font-bold text-slate-900">Preventive Maintenance</h3>
            </div>
            <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
              <CheckCircle2 className="h-6 w-6 text-[#c02f2d] mb-3" />
              <h3 className="font-bold text-slate-900">Same-Day Service</h3>
            </div>
            <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
              <CheckCircle2 className="h-6 w-6 text-[#c02f2d] mb-3" />
              <h3 className="font-bold text-slate-900">24/7 Drain &amp; Sewer Service</h3>
            </div>
          </div>
          <p className="mt-8 text-center text-sm text-slate-600">
            Rather than assuming every drainage problem has the same cause, the service approach can incorporate inspection and appropriate cleaning or repair methods based on the condition of the system.
          </p>
        </div>
      </div>

      {/* ================= FAQ SECTION ================= */}
      <div className="mx-auto max-w-4xl px-5 py-20 sm:px-6 lg:px-8 lg:py-24">
        <div className="text-center">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#c02f2d]">
            FAQ Section
          </span>
          <h2 className="mt-3 text-3xl font-extrabold text-slate-900 sm:text-4xl">
            Commercial Drain Service FAQs
          </h2>
          <p className="mt-4 text-base text-slate-600">Frequently Asked Questions</p>
          <div className="mt-6 mx-auto h-1 w-20 bg-[#c02f2d]" />
        </div>

        <div className="mt-12 space-y-6">
          <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
            <h3 className="text-lg font-bold text-slate-900 flex items-center gap-3">
              <HelpCircle className="h-5 w-5 text-[#c02f2d] shrink-0" /> What is commercial drain cleaning?
            </h3>
            <p className="mt-3 text-sm leading-7 text-slate-600 pl-8">
              Commercial drain cleaning is professional cleaning of drainage systems serving businesses and commercial properties. It can address blockages, buildup, slow drainage, and other drainage problems. Depending on the condition of the line, service may involve conventional drain cleaning, high-pressure water jetting, or video inspection.
            </p>
          </div>

          <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
            <h3 className="text-lg font-bold text-slate-900 flex items-center gap-3">
              <HelpCircle className="h-5 w-5 text-[#c02f2d] shrink-0" /> Does Drain Solution Plus provide commercial drain repair?
            </h3>
            <p className="mt-3 text-sm leading-7 text-slate-600 pl-8">
              Yes. Drain Solution Plus lists commercial drain repairs as one of its services. The company also provides sewer cleaning and repair, allowing commercial drainage problems to be evaluated beyond a simple clogged fixture when necessary.
            </p>
          </div>

          <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
            <h3 className="text-lg font-bold text-slate-900 flex items-center gap-3">
              <HelpCircle className="h-5 w-5 text-[#c02f2d] shrink-0" /> Does Drain Solution Plus offer video drain or sewer inspections?
            </h3>
            <p className="mt-3 text-sm leading-7 text-slate-600 pl-8">
              Yes. Drain Solution Plus provides video inspection services for sewer lines. Video inspection can help provide a visual assessment of the inside of a line and help identify blockages, damage, or other conditions that may require additional cleaning or repair.
            </p>
          </div>

          <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
            <h3 className="text-lg font-bold text-slate-900 flex items-center gap-3">
              <HelpCircle className="h-5 w-5 text-[#c02f2d] shrink-0" /> Does Drain Solution Plus use high-pressure water jetting?
            </h3>
            <p className="mt-3 text-sm leading-7 text-slate-600 pl-8">
              Yes. High-pressure water jetting is listed as one of the methods used for commercial drainage and sewer cleaning. Whether jetting is appropriate depends on the condition of the drainage system and the type of obstruction or buildup involved.
            </p>
          </div>

          <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
            <h3 className="text-lg font-bold text-slate-900 flex items-center gap-3">
              <HelpCircle className="h-5 w-5 text-[#c02f2d] shrink-0" /> How quickly can a commercial drain problem be serviced?
            </h3>
            <p className="mt-3 text-sm leading-7 text-slate-600 pl-8">
              Drain Solution Plus currently advertises same-day service and 24/7 drain and sewer service in Northern New Jersey. Actual response and service timing can depend on scheduling, location, and the nature of the drainage problem.
            </p>
          </div>

          <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
            <h3 className="text-lg font-bold text-slate-900 flex items-center gap-3">
              <HelpCircle className="h-5 w-5 text-[#c02f2d] shrink-0" /> What causes commercial drains to clog?
            </h3>
            <p className="mt-3 text-sm leading-7 text-slate-600 pl-8">
              Commercial drains can develop blockages from accumulated grease, debris, sediment, foreign material, and repeated use. The specific cause depends on the property&apos;s plumbing system and how the drainage system is used. Recurring blockages may require inspection to identify an underlying problem.
            </p>
          </div>

          <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
            <h3 className="text-lg font-bold text-slate-900 flex items-center gap-3">
              <HelpCircle className="h-5 w-5 text-[#c02f2d] shrink-0" /> Does Drain Solution Plus provide preventive commercial drain maintenance?
            </h3>
            <p className="mt-3 text-sm leading-7 text-slate-600 pl-8">
              Yes. The commercial service page describes preventive maintenance that can include routine inspections, cleanings, and system checks. Maintenance needs vary by property, drainage-system design, usage, and history of recurring problems.
            </p>
          </div>

          <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
            <h3 className="text-lg font-bold text-slate-900 flex items-center gap-3">
              <HelpCircle className="h-5 w-5 text-[#c02f2d] shrink-0" /> What areas does Drain Solution Plus serve?
            </h3>
            <p className="mt-3 text-sm leading-7 text-slate-600 pl-8">
              Drain Solution Plus lists{" "}
              <Link href="/bergen-county-nj" className="text-[#014485] underline">Bergen</Link>,{" "}
              <Link href="/essex-county-nj" className="text-[#014485] underline">Essex</Link>,{" "}
              <Link href="/hudson-county-nj" className="text-[#014485] underline">Hudson</Link>, and{" "}
              <Link href="/passaic-county-nj" className="text-[#014485] underline">Passaic</Link>{" "}
              counties as its Northern New Jersey service areas. Businesses outside these counties should confirm service availability directly with the company before scheduling.
            </p>
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
                Request Commercial Drain Service
              </h2>
              <p className="mt-4 text-sm leading-7 text-white/75">
                A clogged or slow commercial drain can become a bigger operational problem when it is ignored. If your business in{" "}
                <Link href="/bergen-county-nj" className="text-white underline">Bergen</Link>,{" "}
                <Link href="/essex-county-nj" className="text-white underline">Essex</Link>,{" "}
                <Link href="/hudson-county-nj" className="text-white underline">Hudson</Link>, or{" "}
                <Link href="/passaic-county-nj" className="text-white underline">Passaic</Link>{" "}
                County needs commercial drain cleaning, inspection, maintenance, or repair, contact Drain Solution Plus. Call (201) 881-9622 or schedule service online.
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

export default CommercialDrainService;