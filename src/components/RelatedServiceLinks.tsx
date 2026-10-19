import Link from "next/link";
import { allServicesData } from "@/data/indexServicesData";

export default function RelatedServiceLinks({
  serviceIds,
}: {
  serviceIds: string[];
}) {
  const services = serviceIds
    .map((id) => allServicesData.find((service) => service.id === id))
    .filter((service) => service !== undefined);

  if (services.length === 0) return null;

  return (
    <section className="border-y border-slate-200 bg-white py-12">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-[#014485]">
          Related Drain &amp; Sewer Services
        </h2>
        <p className="mt-3 max-w-3xl text-sm leading-7 text-slate-600">
          Explore related services from Drain Solution Plus to find help for
          other drain, sewer, and plumbing needs.
        </p>
        <ul className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <li key={service.id}>
              <Link
                href={`/our-services/${service.id}`}
                className="font-semibold text-[#014485] underline decoration-slate-300 underline-offset-4 hover:text-[#c02f2d] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#014485]"
              >
                {service.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
