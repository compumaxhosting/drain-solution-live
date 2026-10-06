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
    title: "Services",
    items: [
      { name: "Residential Drain Cleaning", href: "/our-services/residential-drain-cleaning" },
      { name: "Residential Drain Repairs", href: "/our-services/residential-drain-repairs" },
      { name: "Commercial Drain Repairs", href: "/our-services/commercial-drain-repairs" },
      { name: "Commercial Drain Cleaning", href: "/our-services/commercial-drain-cleaning" },
      { name: "Faucet & Leak Repairs", href: "/our-services/faucet-leak-repairs" },
      { name: "Sewer and Drain Cleaning", href: "/our-services/sewer-and-drain-cleaning" },
      { name: "Toilet Clogs", href: "/our-services/toilet-clogs" },
      { name: "Residential Tub Clogs", href: "/our-services/tub-clogs" },
      { name: "Sink Clogs", href: "/our-services/sink-clogs" },
      { name: "Sewer and Drain Repairs", href: "/our-services/sewer-and-drain-repairs" },
      { name: "Sewer and Drain Video Inspections", href: "/our-services/sewer-and-drain-video-inspections" },
      { name: "Hydro Jetting", href: "/our-services/hydro-jetting" },
      { name: "Flush Valve Leak Repairs", href: "/our-services/flush-valve-leak-repairs" },
      { name: "Sump Pump Repairs or Replacement", href: "/our-services/sump-pump-repairs-or-replacement" },
      { name: "Sewage Ejector Pump Repairs or Replacement", href: "/our-services/sewage-ejector-pumps-repairs-or-replacement" },
    ],
  },
  {
    title: "Residential",
    items: [
      { name: "Residential Drain", desc: "Top-notch household drain cleaning", href: "/residential-drain-service" },
      { name: "Residential Sewer", desc: "Precise home piping restorations", href: "/residential-sewer-service" },
    ],
  },
  {
    title: "Commercial",
    items: [
      { name: "Commercial Drain", desc: "Heavy-duty commercial cleaning", href: "/commercial-drain-service" },
      { name: "Commercial Sewer", desc: "Industrial and commercial repairs", href: "/commercial-sewer-service" },
    ],
  },
];
