import type { ServiceItem } from "@/types/service";

export const sewerAndDrainRepairs: ServiceItem = {
  id: "sewer-and-drain-repairs",
  tag: "Piping Restorations",
  title: "Sewer & Drain Repairs in Hawthorne, NJ",
  description: "Professional sewer and drain repairs in Hawthorne, NJ for cracked, leaking, damaged, or misaligned pipes. Serving residential and commercial properties.",
  longDescription: "Drain Solution Plus provides professional sewer and drain repair services in Hawthorne, NJ, serving residential and commercial properties throughout Passaic County, Bergen County, Hudson County, and Essex County. We repair damaged, cracked, leaking, misaligned, or deteriorating drain and sewer lines to help restore reliable drainage and protect your property from backups, water damage, and recurring plumbing problems. Our experienced team can diagnose sewer and drain issues using professional equipment, including video camera inspections, and recommend an appropriate repair solution based on the condition of the line. Common problems may include pipe cracks, root intrusion, joint damage, corrosion, leaks, and other structural issues that cannot be resolved through routine drain cleaning. When appropriate, modern repair methods such as trenchless technology can help minimize excavation and disruption to your property. For reliable sewer and drain repairs in Hawthorne, NJ and surrounding areas, contact Drain Solution Plus to schedule a professional evaluation.",
  image: "/images/services-images/sewer-pipe-repair-1.webp",
  ctaText: "Sewer Repairs",
  ctaLink: "/our-services/sewer-and-drain-repairs",
  bulletPoints: [
    "Root intrusion removal and damaged pipe section replacement",
    "Resolution for persistent sewer backups and structural collapses",
    "Heavy-duty materials built to withstand shifting ground pressure",
    "Compliance with local plumbing codes and environmental safety"
  ],
  footerHeading: "Facing Major Sewer Line Damage?",
  footerText: "Trust our seasoned professionals to deliver durable, long-lasting sewer and drain repair solutions.",
  
  meta: {
    title: "Sewer & Drain Repairs in Hawthorne, NJ | Drain Solution Plus",
    description: "Professional sewer and drain repairs in Hawthorne, NJ for cracked, leaking, damaged, or misaligned pipes. Serving residential and commercial properties.",
    keywords: "sewer and drain repairs, sewer repair Hawthorne NJ, drain repair Hawthorne NJ, sewer line repair, drain pipe repair, trenchless sewer repair, sewer camera inspection, Drain Solution Plus",
    canonical: "https://www.drainsolutionplus.com/our-services/sewer-and-drain-repairs",
    ogImage: "https://www.drainsolutionplus.com/images/services-images/sewer-pipe-repair-1.webp"
  },

  faqs: [
    {
      question: "What are sewer and drain repairs?",
      answer: "Sewer and drain repairs address damaged, cracked, leaking, misaligned, or deteriorating pipes and related components to restore proper drainage and help prevent recurring problems."
    },
    {
      question: "How do I know if my sewer or drain line needs repair?",
      answer: "Recurring backups, persistent slow drainage, sewer odors, leaks, wet areas, root intrusion, or problems that return after cleaning may indicate damaged or deteriorating piping."
    },
    {
      question: "Can a sewer camera inspection find damaged pipes?",
      answer: "Yes. A professional video camera inspection can help identify cracks, root intrusion, blockages, misaligned joints, and other problems inside sewer and drain lines."
    },
    {
      question: "What causes sewer and drain pipes to become damaged?",
      answer: "Common causes include age, corrosion, tree-root intrusion, shifting soil, cracked joints, physical damage, and long-term deterioration of the piping system."
    },
    {
      question: "What is trenchless sewer and drain repair?",
      answer: "Trenchless repair is a modern method that can repair certain damaged underground pipes with less excavation than traditional repair methods, potentially reducing disruption to the property."
    },
    {
      question: "Does Drain Solution Plus provide sewer and drain repairs outside Hawthorne, NJ?",
      answer: "Yes. Drain Solution Plus serves residential and commercial customers in Hawthorne and throughout Passaic County, Bergen County, Hudson County, and Essex County, New Jersey."
    }
  ],

  schemaGraph: {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Sewer & Drain Repairs",
    "serviceType": "Sewer and Drain Repair",
    "description": "Professional sewer and drain repair services in Hawthorne, NJ for damaged, cracked, leaking, misaligned, or deteriorating drain and sewer lines, including trenchless repair solutions when appropriate.",
    "url": "https://www.drainsolutionplus.com/our-services/sewer-and-drain-repairs",
    "provider": {
      "@type": "Plumber",
      "@id": "https://www.drainsolutionplus.com/#organization",
      "name": "Drain Solution Plus",
      "url": "https://www.drainsolutionplus.com/"
    },
    "areaServed": [
      { "@type": "AdministrativeArea", "name": "Passaic County, NJ" },
      { "@type": "AdministrativeArea", "name": "Bergen County, NJ" },
      { "@type": "AdministrativeArea", "name": "Hudson County, NJ" },
      { "@type": "AdministrativeArea", "name": "Essex County, NJ" }
    ]
  }
};