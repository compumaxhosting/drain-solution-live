import React from "react";
import {
  ArrowUpRight,
  Check,
  Droplets,
  ScanLine,
  Wrench,
} from "lucide-react";

const CommercialSewerService = () => {
  const services = [
    {
      number: "01",
      icon: Droplets,
      title: "Expert Sewer Cleaning",
      text: "High-pressure water jetting and advanced cleaning techniques remove grease, debris, buildup, and difficult blockages from commercial sewer lines.",
    },
    {
      number: "02",
      icon: ScanLine,
      title: "Advanced Sewer Inspection",
      text: "Video inspection technology helps identify cracks, leaks, misalignments, and other hidden problems without unnecessary disruption to your property.",
    },
    {
      number: "03",
      icon: Wrench,
      title: "Commercial Sewer Repair",
      text: "From pipe damage to recurring blockages, our technicians provide targeted repair solutions designed around your property's specific requirements.",
    },
  ];

  return (
    <section className="overflow-hidden bg-white text-slate-900">
      {/* ================= HERO ================= */}
      <div className="relative">
        <div className="grid min-h-[680px] lg:grid-cols-[42%_58%]">
          {/* BLUE PANEL */}
          <div className="relative flex items-center overflow-hidden bg-[#014484] px-6 py-20 sm:px-10 lg:px-16">
            {/* Decorative circles */}
            <div className="absolute -left-32 -top-32 h-80 w-80 rounded-full border-[45px] border-white/5" />
            <div className="absolute -bottom-32 -right-32 h-80 w-80 rounded-full border-[45px] border-white/5" />

            <div className="relative z-10 max-w-xl">
              <div className="mb-7 flex items-center gap-3">
                <span className="h-[2px] w-12 bg-[#c02f2d]" />
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-white/70">
                  Commercial Sewer Services
                </span>
              </div>

              <h1 className="text-4xl font-extrabold leading-[1.05] text-white sm:text-5xl lg:text-[62px]">
                Reliable Sewer
                <br />
                Solutions for
                <br />
                <span className="text-white/65">NJ Businesses</span>
              </h1>

              <p className="mt-7 max-w-lg text-base leading-8 text-white/75">
                Expert sewer cleaning, repair, inspection, and installation
                services designed to keep commercial operations running
                smoothly across Northern New Jersey.
              </p>

              <div className="mt-9 flex flex-wrap gap-3">
                <a
                  href="/contact/"
                  className="inline-flex items-center gap-2 rounded-full bg-[#c02f2d] px-6 py-3.5 text-sm font-bold text-white transition hover:bg-[#a92527]"
                >
                  Request Service
                  <ArrowUpRight className="h-4 w-4" />
                </a>

                <a
                  href="/commercial-sewer-service"
                  className="inline-flex items-center gap-2 rounded-full border border-white/25 px-6 py-3.5 text-sm font-bold text-white transition hover:bg-white/10"
                >
                  Our Sewer Services
                </a>
              </div>
            </div>
          </div>

          {/* IMAGE SIDE */}
          <div className="relative min-h-[500px] lg:min-h-0">
            <img
              src="/images/client-images/slab-sewer-repair.webp"
              alt="Sewer line repair beneath a concrete slab at a commercial property"
              className="absolute inset-0 h-full w-full object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-transparent to-black/10" />

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

            {/* RED CORNER */}
            <div className="absolute right-0 top-0 h-24 w-24 bg-[#c02f2d]" />
          </div>
        </div>
      </div>

      {/* ================= INTRO ================= */}
      <div className="mx-auto max-w-7xl px-5 py-20 sm:px-6 lg:px-8 lg:py-28">
        <div className="grid gap-12 lg:grid-cols-[0.75fr_1.25fr] lg:gap-24">
          <div>
            <span className="text-sm font-bold uppercase tracking-[0.18em] text-[#c02f2d]">
              Built For Commercial Operations
            </span>

            <h2 className="mt-4 text-3xl font-extrabold leading-tight sm:text-4xl">
              Keeping Your Sewer System{" "}
              <span className="text-[#014484]">Clear, Reliable & Efficient</span>
            </h2>
          </div>

          <div className="space-y-5 text-base leading-8 text-slate-600">
            <p>
              We are dedicated to providing expert sewer cleaning services for
              commercial properties throughout Northern New Jersey. A properly
              functioning sewer system is essential for cleanliness, health,
              safety, and operational efficiency.
            </p>

            <p>
              Whether your business is dealing with slow drainage, unpleasant
              odors, or complete blockages, our team is equipped with advanced
              tools and proven techniques to address the problem efficiently.
            </p>

            <p>
              High-pressure water jetting and video inspection technology allow
              us to thoroughly clean sewer lines and identify problems that may
              otherwise remain hidden.
            </p>

            <p>
              By keeping your sewer system clean and properly maintained, we
              help reduce the possibility of unexpected disruptions that can
              interfere with your daily business operations.
            </p>
          </div>
        </div>
      </div>

      {/* ================= SERVICE CARDS ================= */}
      <div className="bg-slate-50">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-6 lg:px-8 lg:py-28">
          <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#c02f2d]">
                What We Handle
              </span>

              <h2 className="mt-3 text-3xl font-extrabold sm:text-4xl">
                Complete Commercial{" "}
                <span className="text-[#014484]">Sewer Services</span>
              </h2>
            </div>

            <p className="max-w-md text-sm leading-7 text-slate-500">
              From routine cleaning to complex infrastructure problems, our
              services are built around the demands of commercial properties.
            </p>
          </div>

          <div className="grid gap-5 lg:grid-cols-3">
            {services.map((service, index) => {
              const Icon = service.icon;

              return (
                <div
                  key={service.number}
                  className={`relative overflow-hidden p-8 ${
                    index === 1
                      ? "bg-[#014484] text-white"
                      : "bg-white text-slate-900"
                  }`}
                >
                  <div className="flex items-start justify-between">
                    <div
                      className={`flex h-12 w-12 items-center justify-center rounded-xl ${
                        index === 1
                          ? "bg-white/10 text-white"
                          : "bg-[#014484] text-white"
                      }`}
                    >
                      <Icon className="h-5 w-5" />
                    </div>

                    <span
                      className={`text-5xl font-black ${
                        index === 1 ? "text-white/10" : "text-slate-100"
                      }`}
                    >
                      {service.number}
                    </span>
                  </div>

                  <h3 className="mt-8 text-xl font-extrabold">
                    {service.title}
                  </h3>

                  <p
                    className={`mt-4 text-sm leading-7 ${
                      index === 1 ? "text-white/70" : "text-slate-600"
                    }`}
                  >
                    {service.text}
                  </p>

                  <div
                    className={`mt-7 h-1 w-12 ${
                      index === 1 ? "bg-[#c02f2d]" : "bg-[#c02f2d]"
                    }`}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* ================= REPAIR SECTION ================= */}
      <div className="mx-auto max-w-7xl px-5 py-20 sm:px-6 lg:px-8 lg:py-28">
        <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
          {/* IMAGE */}
          <div className="relative">
            <div className="overflow-hidden">
              <img
                src="/images/client-images/emergency-main-sewer-clogged.webp"
                alt="Blocked sewer line requiring commercial sewer repair"
                className="h-[430px] w-full object-cover sm:h-[540px]"
              />
            </div>

            <div className="absolute -bottom-8 -right-5 hidden w-64 bg-[#c02f2d] p-7 text-white shadow-xl sm:block">
              <span className="text-xs font-bold uppercase tracking-widest text-white/70">
                Commercial
              </span>

              <p className="mt-2 text-xl font-extrabold leading-tight">
                Long-Term Sewer Repair Solutions
              </p>
            </div>
          </div>

          {/* CONTENT */}
          <div>
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#c02f2d]">
              Sewer Repair
            </span>

            <h2 className="mt-4 text-3xl font-extrabold leading-tight sm:text-4xl lg:text-5xl">
              Reliable Repairs for{" "}
              <span className="text-[#014484]">
                Complex Commercial Sewer Issues
              </span>
            </h2>

            <div className="mt-7 space-y-5 text-base leading-8 text-slate-600">
              <p>
                When it comes to sewer repair,{" "}
                <strong className="text-slate-900">
                  Drain Solutions Plus
                </strong>{" "}
                provides comprehensive solutions tailored to commercial
                properties throughout Northern New Jersey.
              </p>

              <p>
                Commercial sewer systems often handle substantially higher
                volumes of waste and usage. Over time, this can contribute to
                pipe leaks, cracks, misalignments, blockages, and other
                complications.
              </p>

              <p>
                Our experienced technicians use modern diagnostic technology to
                locate the source of the problem and determine the appropriate
                repair approach.
              </p>

              <p>
                Trenchless repair techniques can help address damaged pipes
                while minimizing unnecessary disruption to your property and
                daily business operations.
              </p>
            </div>

            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {[
                "Pipe Cracks & Leaks",
                "Pipe Misalignment",
                "Trenchless Repair",
                "Recurring Blockages",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#014484] text-white">
                    <Check className="h-3.5 w-3.5" />
                  </span>

                  <span className="text-sm font-semibold text-slate-800">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ================= INSTALLATION ================= */}
      <div className="bg-[#111c2b]">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-6 lg:px-8 lg:py-28">
          <div className="grid gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:gap-24">
            {/* TITLE */}
            <div>
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#c02f2d]">
                Sewer Installation
              </span>

              <h2 className="mt-5 text-4xl font-extrabold leading-tight text-white sm:text-5xl">
                Professional Infrastructure Built For{" "}
                <span className="text-white/50">Long-Term Performance</span>
              </h2>

              <div className="mt-8 h-1 w-20 bg-[#c02f2d]" />
            </div>

            {/* CONTENT */}
            <div className="text-white">
              <p className="text-base leading-8 text-white/70">
                We also specialize in sewer installation services for new
                commercial developments and property upgrades in Northern New
                Jersey. New sewer systems require careful planning and
                execution to ensure they meet local requirements while handling
                the specific demands of the business.
              </p>

              <p className="mt-5 text-base leading-8 text-white/70">
                Our team provides expert guidance on durable materials,
                efficient layouts, and practical installation strategies. We
                work closely with property owners, contractors, and architects
                to integrate the sewer system seamlessly into the overall
                infrastructure.
              </p>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {[
                  "Durable Materials",
                  "Efficient Layouts",
                  "Commercial-Grade Systems",
                  "Code-Conscious Installation",
                ].map((item) => (
                  <div
                    key={item}
                    className="border border-white/10 bg-white/5 p-5"
                  >
                    <Check className="h-5 w-5 text-[#c02f2d]" />

                    <p className="mt-3 text-sm font-bold text-white">
                      {item}
                    </p>
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
                Drain Solutions Plus
              </span>

              <h2 className="mt-3 text-3xl font-extrabold leading-tight text-white sm:text-4xl">
                Keep Your Commercial Sewer System Running Smoothly
              </h2>

              <p className="mt-4 text-sm leading-7 text-white/70">
                Reliable cleaning, inspection, repair, and installation
                solutions for commercial properties throughout Northern New
                Jersey.
              </p>
            </div>

            <a
              href="/contact/"
              className="inline-flex shrink-0 items-center justify-center gap-2 bg-[#c02f2d] px-7 py-4 text-sm font-bold text-white transition hover:bg-[#a92527]"
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

export default CommercialSewerService;