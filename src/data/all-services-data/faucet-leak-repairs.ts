import type { ServiceItem } from "@/types/service";

export const faucetLeakRepairs: ServiceItem = {
  id: "faucet-leak-repairs",
  tag: "Fixture & Leak Care",
  title: "Faucet & Leak Repairs in Hawthorne, NJ",
  description: "Professional faucet and leak repairs in Hawthorne, NJ for homes and businesses. Fix leaking faucets, hidden leaks, and plumbing fixtures.",
  longDescription: "Drain Solution Plus provides professional faucet and leak repair services in Hawthorne, NJ, serving residential and commercial properties throughout Passaic County, Bergen County, Hudson County, and Essex County. We repair leaking faucets, plumbing fixtures, and water leaks to help reduce water waste and prevent damage to your property. Whether you are dealing with a dripping faucet, hidden water leak, damaged fixture, or recurring plumbing issue, our experienced team can identify the source of the problem and recommend an effective repair. Professional leak detection and timely faucet repair can help protect your home or business from water damage, corrosion, and costly plumbing problems. For reliable faucet and leak repair in Hawthorne, NJ and surrounding areas, contact Drain Solution Plus for professional service and practical plumbing solutions.",
  image: "/images/services-images/kitchen-line1.webp",
  ctaText: "Leak Repairs",
  ctaLink: "/our-services/faucet-leak-repairs",
  bulletPoints: [
    "Advanced acoustic and thermal imaging leak detection",
    "Premium valve and fixture replacement resisting future wear",
    "Surgical in-wall line repairs with minimal wall damage",
    "Lower monthly utility bills and prevention of structural rot"
  ],
  footerHeading: "Spotted a Hidden Leak or Drip?",
  footerText: "Stop water waste and prevent destructive mold growth before it starts. Reach out to our fixture and leak care professionals.",
  
  meta: {
    title: "Faucet & Leak Repairs in Hawthorne, NJ | Drain Solution Plus",
    description: "Professional faucet and leak repairs in Hawthorne, NJ for homes and businesses. Fix leaking faucets, hidden leaks, and plumbing fixtures.",
    keywords: "faucet leak repairs, faucet repair Hawthorne NJ, leak repair Hawthorne NJ, water leak repair, faucet repair NJ, leak detection, plumbing leak repair, Drain Solution Plus",
    canonical: "https://www.drainsolutionplus.com/our-services/faucet-leak-repairs",
    ogImage: "https://www.drainsolutionplus.com/images/services-images/kitchen-line1.webp"
  },

  faqs: [
    {
      question: "What faucet problems can Drain Solution Plus repair?",
      answer: "Drain Solution Plus can help with dripping faucets, leaking fixtures, damaged faucet components, and other common faucet problems in residential and commercial properties."
    },
    {
      question: "When should I call a professional for a water leak?",
      answer: "You should contact a professional when you notice unexplained water, damp areas, recurring moisture, damaged walls or ceilings, unusually high water usage, or a leak that cannot be easily identified."
    },
    {
      question: "Can a leaking faucet cause water damage?",
      answer: "Yes. A persistent faucet or plumbing leak can waste water and may contribute to moisture damage, corrosion, mold, or deterioration around the affected area if it is not addressed."
    },
    {
      question: "How are hidden water leaks detected?",
      answer: "Professional leak detection may use specialized equipment and techniques such as visual inspection, pressure testing, and leak detection technology to help locate the source of a hidden leak."
    },
    {
      question: "Does Drain Solution Plus repair faucets for both homes and businesses?",
      answer: "Yes. Drain Solution Plus provides faucet and leak repair services for both residential and commercial properties in Northern New Jersey."
    },
    {
      question: "Does Drain Solution Plus serve areas outside Hawthorne, NJ?",
      answer: "Yes. Drain Solution Plus serves customers in Hawthorne and throughout Passaic County, Bergen County, Hudson County, and Essex County, New Jersey."
    }
  ],

  schemaGraph: {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": "https://www.drainsolutionplus.com/our-services/faucet-leak-repairs#service",
        "name": "Faucet & Leak Repairs",
        "serviceType": "Faucet and Leak Repair",
        "description": "Professional faucet and leak repair services in Hawthorne, NJ for residential and commercial properties, including leaking faucets, plumbing fixtures, hidden water leaks, and leak detection.",
        "url": "https://www.drainsolutionplus.com/our-services/faucet-leak-repairs",
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
      },
      {
        "@type": "FAQPage",
        "@id": "https://www.drainsolutionplus.com/our-services/faucet-leak-repairs#faq",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "What faucet problems can Drain Solution Plus repair?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Drain Solution Plus can help with dripping faucets, leaking fixtures, damaged faucet components, and other common faucet problems in residential and commercial properties."
            }
          },
          {
            "@type": "Question",
            "name": "When should I call a professional for a water leak?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "You should contact a professional when you notice unexplained water, damp areas, recurring moisture, damaged walls or ceilings, unusually high water usage, or a leak that cannot be easily identified."
            }
          },
          {
            "@type": "Question",
            "name": "Can a leaking faucet cause water damage?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. A persistent faucet or plumbing leak can waste water and may contribute to moisture damage, corrosion, mold, or deterioration around the affected area if it is not addressed."
            }
          },
          {
            "@type": "Question",
            "name": "How are hidden water leaks detected?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Professional leak detection may use specialized equipment and techniques such as visual inspection, pressure testing, and leak detection technology to help locate the source of a hidden leak."
            }
          },
          {
            "@type": "Question",
            "name": "Does Drain Solution Plus repair faucets for both homes and businesses?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. Drain Solution Plus provides faucet and leak repair services for both residential and commercial properties in Northern New Jersey."
            }
          },
          {
            "@type": "Question",
            "name": "Does Drain Solution Plus serve areas outside Hawthorne, NJ?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. Drain Solution Plus serves customers in Hawthorne and throughout Passaic County, Bergen County, Hudson County, and Essex County, New Jersey."
            }
          }
        ]
      }
    ]
  }
};