interface ServiceMenuItem {
  name: string;
  href: string;
  desc?: string;
}

interface ServiceGroup {
  title: string;
  items: ServiceMenuItem[];
}

export const serviceGroups: ServiceGroup[] = [
  {
    title: "Residential Drain Services",
    items: [
      { name: "Residential Drain Services", href: "/residential-drain-service" },
      { name: "Residential Drain Cleaning", href: "/our-services/residential-drain-cleaning" },
      { name: "Residential Drain Repairs", href: "/our-services/residential-drain-repairs" },
      { name: "Toilet Clog Removal", href: "/our-services/toilet-clogs" },
      { name: "Residential Tub Clog Removal", href: "/our-services/tub-clogs" },
      { name: "Sink Clog Removal", href: "/our-services/sink-clogs" },
      { name: "Faucet & Leak Repairs", href: "/our-services/faucet-leak-repairs" },
      { name: "Flush Valve Leak Repairs", href: "/our-services/flush-valve-leak-repairs" },
      { name: "Sump Pump Repair or Replacement", href: "/our-services/sump-pump-repairs-or-replacement" },
      { name: "Sewage Ejector Pump Repair or Replacement", href: "/our-services/sewage-ejector-pumps-repairs-or-replacement" },
    ],
  },
  {
    title: "Residential Sewer Services",
    items: [
      { name: "Residential Sewer Services", href: "/residential-sewer-service" },
      { name: "Sewer & Drain Cleaning", href: "/our-services/sewer-and-drain-cleaning" },
      { name: "Sewer & Drain Repairs", href: "/our-services/sewer-and-drain-repairs" },
      { name: "Sewer & Drain Video Inspections", href: "/our-services/sewer-and-drain-video-inspections" },
      { name: "Hydro Jetting", href: "/our-services/hydro-jetting" },
    ],
  },
  {
    title: "Commercial Drain Services",
    items: [
      { name: "Commercial Drain Services", href: "/commercial-drain-service" },
      { name: "Commercial Drain Cleaning", href: "/our-services/commercial-drain-cleaning" },
      { name: "Commercial Drain Repairs", href: "/our-services/commercial-drain-repairs" },
    ],
  },
  {
    title: "Commercial Sewer Services",
    items: [
      { name: "Commercial Sewer Services", href: "/commercial-sewer-service" },
      { name: "Commercial Drain & Sewer Services", href: "/commercial-drain-and-sewer" },
    ],
  },
];
