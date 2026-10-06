import React from "react";
import {
  ArrowUpRight,
  Check,
  ShieldCheck,
  Pipette,
  Leaf,
  Layers,
  Activity,
  AlertTriangle,
} from "lucide-react";

const CommercialDrainAndSewer: React.FC = () => {
  const highlights = [
    {
      number: "01",
      icon: Layers,
      title: "Custom Commercial Drainage",
      text: "Every property has unique needs. We design tailored solutions utilizing trench drains, channel drains, and commercial pumps to divert stormwater and run-off away from your foundation perimeter.",
    },
    {
      number: "02",
      icon: Pipette,
      title: "Premium Materials & Layout",
      text: "We avoid cheap corrugated piping in favor of heavy-duty commercial PVC pipelines integrated into multi-flow underground configurations with robust catch basins and inlet structures.",
    },
    {
      number: "03",
      icon: Leaf,
      title: "Sustainable Stormwater Design",
      text: "Our pipe layouts are engineered to control stormwater near the surface where appropriate, minimizing excessive runoff, preventing soil erosion, and protecting local water systems.",
    },
  ];

  const coreServices = [
    "Commercial Sewer Repair & Cleaning",
    "Commercial Drain Cleaning & Repairs",
    "Trench & Channel Drain Systems",
    "Catch Basin & Inlet Installation",
    "Foundation Moisture Diversion",
    "Commercial Sump & Ejector Pumps",
  ];

  return (
    <section className="overflow-hidden bg-white text-slate-900">
      {/* ================= HERO SECTION ================= */}
      <div className="relative">
        <div className="grid min-h-[680px] lg:grid-cols-[44%_56%]">
          {/* LEFT BLUE PANEL */}
          <div className="relative flex items-center overflow-hidden bg-[#014484] px-6 py-20 sm:px-10 lg:px-16">
            <div className="absolute -left-32 -top-32 h-80 w-80 rounded-full border-[45px] border-white/5" />
            <div className="absolute -bottom-32 -right-32 h-80 w-80 rounded-full border-[45px] border-white/5" />

            <div className="relative z-10 max-w-xl">
              <div className="mb-7 flex items-center gap-3">
                <span className="h-[2px] w-12 bg-[#c02f2d]" />
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-white/70">
                  Reliable Drain & Sewer Business Solutions NJ
                </span>
              </div>

              <h1 className="text-4xl font-extrabold leading-[1.08] text-white sm:text-5xl lg:text-[56px]">
                Commercial Drain
                <br />
                & Sewer Solutions
                <br />
                <span className="text-white/65">For NJ Businesses</span>
              </h1>

              <p className="mt-7 max-w-lg text-base leading-8 text-white/75">
                Top commercial drain and sewer experts. We protect your building’s
                foundation from stagnant water, erosion, and structural damage with
                tailored drainage systems and high-capacity flow management.
              </p>

              <div className="mt-9 flex flex-wrap gap-3">
                <a
                  href="/contact/"
                  className="inline-flex items-center gap-2 rounded-full bg-[#c02f2d] px-6 py-3.5 text-sm font-bold text-white transition hover:bg-[#a92527]"
                >
                  Schedule Consultation
                  <ArrowUpRight className="h-4 w-4" />
                </a>

                <a
                  href="#foundation-protection"
                  className="inline-flex items-center gap-2 rounded-full border border-white/25 px-6 py-3.5 text-sm font-bold text-white transition hover:bg-white/10"
                >
                  Explore Solutions
                </a>
              </div>
            </div>
          </div>

          {/* RIGHT IMAGE / BADGE */}
          <div className="relative min-h-[500px] lg:min-h-0">
            <img
              src="/images/client-images/hydro-jetting.webp"
              alt="Technician using hydro-jetting equipment to clean a commercial drain"
              className="absolute inset-0 h-full w-full object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-r from-black/25 via-transparent to-black/15" />

            {/* EXPERIENCE CARD */}
            <div className="absolute bottom-8 left-6 flex items-center gap-5 bg-white px-6 py-5 shadow-2xl sm:left-10 sm:px-8">
              <div>
                <span className="block text-5xl font-black leading-none text-[#014484]">
                  10
                </span>
              </div>

              <div className="border-l border-slate-200 pl-5">
                <span className="block text-xs font-bold uppercase tracking-widest text-[#c02f2d]">
                  Years
                </span>
                <span className="block text-sm font-bold text-slate-800">
                  Of Experience
                </span>
              </div>
            </div>

            <div className="absolute right-0 top-0 h-24 w-24 bg-[#c02f2d]" />
          </div>
        </div>
      </div>

      {/* ================= FOUNDATION RISK OVERVIEW ================= */}
      <div id="foundation-protection" className="mx-auto max-w-7xl px-5 py-20 sm:px-6 lg:px-8 lg:py-28">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">
          <div>
            <span className="text-sm font-bold uppercase tracking-[0.18em] text-[#c02f2d]">
              Protect Your Asset
            </span>

            <h2 className="mt-4 text-3xl font-extrabold leading-tight text-slate-900 sm:text-4xl">
              Preventing Foundation Damage From{" "}
              <span className="text-[#014484]">Puddling Water & Runoff</span>
            </h2>

            <div className="mt-6 flex items-center gap-3 rounded-lg border-l-4 border-[#c02f2d] bg-slate-50 p-4">
              <AlertTriangle className="h-6 w-6 shrink-0 text-[#c02f2d]" />
              <p className="text-xs font-semibold uppercase tracking-wider text-slate-700">
                Water accumulation threatens building integrity & operations
              </p>
            </div>
          </div>

          <div className="space-y-5 text-base leading-8 text-slate-600">
            <p>
              Structural damage to a building represents a significant financial threat
              to commercial enterprises, often leading to steep repair costs and
              disruptive operational downtime. The integrity of your building’s
              foundation is crucial for structural stability and code compliance.
            </p>

            <p>
              One of the primary causes of foundation failure is the accumulation of
              water around the structure's base—often referred to as puddling water.
              Following heavy rain and severe storms, stagnant water infiltrates the soil,
              triggering rapid erosion and destabilizing the supporting subgrade.
            </p>

            <p>
              Over time, unmanaged saturation leads to uneven settling, structural cracking,
              and compromised interior safety. Implementing proactive, commercial-grade
              drainage diverts water away from vulnerable foundation perimeters, safeguarding
              your business's bottom line.
            </p>
          </div>
        </div>
      </div>

      {/* ================= 3 FEATURE PILLARS ================= */}
      <div className="bg-slate-50">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-6 lg:px-8 lg:py-28">
          <div className="mb-14 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#c02f2d]">
                Engineering & Design Standards
              </span>

              <h2 className="mt-3 text-3xl font-extrabold sm:text-4xl">
                Advanced Commercial{" "}
                <span className="text-[#014484]">Drainage Engineering</span>
              </h2>
            </div>

            <p className="max-w-md text-sm leading-7 text-slate-500">
              We solve drainage problems and enhance the flow of your commercial property
              with proven, durable civil infrastructure.
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            {highlights.map((item, index) => {
              const Icon = item.icon;
              const isAccent = index === 1;

              return (
                <div
                  key={item.number}
                  className={`relative flex flex-col justify-between overflow-hidden p-8 transition-shadow hover:shadow-xl ${
                    isAccent ? "bg-[#014484] text-white" : "bg-white text-slate-900"
                  }`}
                >
                  <div>
                    <div className="flex items-start justify-between">
                      <div
                        className={`flex h-12 w-12 items-center justify-center rounded-xl ${
                          isAccent ? "bg-white/10 text-white" : "bg-[#014484] text-white"
                        }`}
                      >
                        <Icon className="h-6 w-6" />
                      </div>

                      <span
                        className={`text-5xl font-black ${
                          isAccent ? "text-white/10" : "text-slate-100"
                        }`}
                      >
                        {item.number}
                      </span>
                    </div>

                    <h3 className="mt-8 text-xl font-extrabold">{item.title}</h3>

                    <p
                      className={`mt-4 text-sm leading-7 ${
                        isAccent ? "text-white/75" : "text-slate-600"
                      }`}
                    >
                      {item.text}
                    </p>
                  </div>

                  <div className="mt-8 h-1 w-12 bg-[#c02f2d]" />
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* ================= WHY CHOOSE US ================= */}
      <div className="mx-auto max-w-7xl px-5 py-20 sm:px-6 lg:px-8 lg:py-28">
        <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
          {/* IMAGE SIDE */}
          <div className="relative">
            <div className="overflow-hidden">
              <img
                src="/images/client-images/emergency-main-sewer-clogged.webp"
                alt="Clogged main sewer line requiring professional drain service"
                className="h-[440px] w-full object-cover sm:h-[540px]"
              />
            </div>

            <div className="absolute -bottom-8 -right-5 hidden w-72 bg-[#c02f2d] p-7 text-white shadow-2xl sm:block">
              <span className="text-xs font-bold uppercase tracking-widest text-white/70">
                Drainage Specialists
              </span>
              <p className="mt-2 text-xl font-extrabold leading-tight">
                Top Commercial Drain & Sewer Experts
              </p>
            </div>
          </div>

          {/* CONTENT SIDE */}
          <div>
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#c02f2d]">
              Why Choose Us
            </span>

            <h2 className="mt-4 text-3xl font-extrabold leading-tight sm:text-4xl lg:text-5xl">
              Delivering Stability For Your{" "}
              <span className="text-[#014484]">Commercial Property</span>
            </h2>

            <div className="mt-7 space-y-4 text-base leading-8 text-slate-600">
              <p>
                We understand the critical importance of a stable, secure foundation.
                Our comprehensive commercial drainage and sewer solutions are engineered
                to prevent water accumulation, redirect heavy flow, and protect your building
                from costly repairs.
              </p>

              <p>
                From diagnostic inspections and routine clearing to full-scale catch basin
                and pipe installations, we work closely with commercial property managers
                to ensure continuous system reliability and environmental sustainability.
              </p>
            </div>

            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {coreServices.map((service) => (
                <div key={service} className="flex items-center gap-3">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#014484] text-white">
                    <Check className="h-3.5 w-3.5" />
                  </span>
                  <span className="text-sm font-semibold text-slate-800">
                    {service}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ================= PIPING & SPECIFICATIONS ================= */}
      <div className="bg-[#111c2b]">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-6 lg:px-8 lg:py-28">
          <div className="grid gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:gap-24">
            <div>
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#c02f2d]">
                Engineered Performance
              </span>

              <h2 className="mt-5 text-4xl font-extrabold leading-tight text-white sm:text-5xl">
                Best Materials & Installation{" "}
                <span className="text-white/50">Built for Longevity</span>
              </h2>

              <div className="mt-8 h-1 w-20 bg-[#c02f2d]" />
            </div>

            <div className="text-white">
              <p className="text-base leading-8 text-white/70">
                Our commercial drainage lines feature heavy-duty, commercial-grade PVC
                pipelines. We strictly avoid brittle, inferior alternatives like older
                corrugated pipe that are susceptible to collapse and root intrusion under
                commercial traffic loads.
              </p>

              <p className="mt-5 text-base leading-8 text-white/70">
                Systems incorporate multi-flow technology with carefully engineered catch
                basins and inflow grates. Most of the layout sits neatly concealed underground,
                directing runoff safely toward retention or municipal connections without
                disrupting surface aesthetics.
              </p>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {[
                  "Industrial PVC Pipelines",
                  "Multi-Flow Catch Basins",
                  "Sub-Surface Erosion Defense",
                  "Stormwater Runoff Minimization",
                ].map((spec) => (
                  <div
                    key={spec}
                    className="border border-white/10 bg-white/5 p-5 transition hover:border-white/20"
                  >
                    <Check className="h-5 w-5 text-[#c02f2d]" />
                    <p className="mt-3 text-sm font-bold text-white">{spec}</p>
                  </div>
                ))}
              </div>
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
                Reliable Drain & Sewer Business Solutions NJ
              </span>

              <h2 className="mt-3 text-3xl font-extrabold leading-tight text-white sm:text-4xl">
                Protect Your Foundation with Proven Commercial Drain & Sewer Systems
              </h2>

              <p className="mt-4 text-sm leading-7 text-white/70">
                Eliminate puddling water, clear stubborn blockages, and safeguard your
                facility with 10 years of specialized commercial expertise.
              </p>
            </div>

            <a
              href="/contact/"
              className="inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-[#c02f2d] px-8 py-4 text-sm font-bold text-white transition hover:bg-[#a92527]"
            >
              Get Commercial Service
              <ArrowUpRight className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommercialDrainAndSewer;