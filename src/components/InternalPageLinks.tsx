import Link from "next/link";

const serviceLinks = [
  { href: "/residential-drain-service", label: "Residential Drain Services" },
  { href: "/residential-sewer-service", label: "Residential Sewer Services" },
  { href: "/commercial-drain-service", label: "Commercial Drain Services" },
  { href: "/commercial-sewer-service", label: "Commercial Sewer Services" },
  { href: "/commercial-drain-and-sewer", label: "Commercial Drain & Sewer" },
  { href: "/our-services", label: "All Drain & Sewer Services" },
];

const countyLinks = [
  { href: "/bergen-county-nj", label: "Bergen County" },
  { href: "/essex-county-nj", label: "Essex County" },
  { href: "/hudson-county-nj", label: "Hudson County" },
  { href: "/passaic-county-nj", label: "Passaic County" },
];

export default function InternalPageLinks({
  excludeCounty,
  excludeService,
}: {
  excludeCounty?: string;
  excludeService?: string;
}) {
  const availableServices = serviceLinks.filter(
    (service) => service.href !== excludeService,
  );
  const availableCounties = countyLinks.filter(
    (county) => county.href !== excludeCounty,
  );

  return (
    <section className="border-y border-slate-200 bg-slate-50 py-12">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-6 lg:grid-cols-2 lg:px-8">
        <div>
          <h2 className="text-xl font-bold text-[#014485]">
            Explore Related Services
          </h2>
          <ul className="mt-4 grid gap-3 sm:grid-cols-2">
            {availableServices.map((service) => (
              <li key={service.href}>
                <Link
                  href={service.href}
                  className="text-sm font-semibold text-slate-700 underline decoration-slate-300 underline-offset-4 hover:text-[#c02f2d] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#014485]"
                >
                  {service.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-xl font-bold text-[#014485]">
            {excludeCounty ? "Other County Service Areas" : "Service Areas"}
          </h2>
          <ul className="mt-4 grid gap-3 sm:grid-cols-2">
            {availableCounties.map((county) => (
              <li key={county.href}>
                <Link
                  href={county.href}
                  className="text-sm font-semibold text-slate-700 underline decoration-slate-300 underline-offset-4 hover:text-[#c02f2d] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#014485]"
                >
                  {county.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
