import type { ServiceItem } from "@/types/service";

export const hydroJetting: ServiceItem = {
  id: "hydro-jetting",
  tag: "High-Pressure Cleaning",
  title: "Hydro Jetting services in Hawthorne, NJ",
  description: "Professional Hydro Jetting services in Hawthorne, NJ for stubborn clogs, grease, sludge, scale, roots, and sewer line buildup. Serving residential and commercial properties.",
  longDescription: "Drain Solution Plus provides professional hydro jetting services in Hawthorne, NJ, serving residential and commercial properties throughout Passaic County, Bergen County, Hudson County, and Essex County. Hydro jetting uses high-pressure water to break through and remove stubborn grease, sludge, scale, tree roots, and other buildup from drain and sewer lines. It is an effective option for recurring clogs, slow drainage, heavy buildup, and blockages that may not be fully cleared with traditional drain cleaning methods. Our experienced team uses professional hydro jetting equipment to thoroughly clean the inside of suitable drain and sewer lines and help restore proper water flow. For reliable Hydro Jetting services in Hawthorne, NJ and surrounding areas, contact Drain Solution Plus for professional drain and sewer cleaning service.",
  image: "/images/services-images/hydro-jetting.webp",
  ctaText: "Hydro Jetting",
  ctaLink: "/our-services/hydro-jetting",
  bulletPoints: [
    "Ultra-high-pressure water scouring up to 4000 PSI",
    "Complete removal of hardened grease, scale, and root mats",
    "Restores pipelines back to 100% inner diameter capacity",
    "Safe and highly effective for both residential and commercial networks"
  ],
  footerHeading: "Need a Deep Pipe Cleanout?",
  footerText: "Experience the ultimate cleaning power of hydro-jetting to eliminate stubborn buildup and prevent future clogs.",
  
  meta: {
    title: "Hydro Jetting services in Hawthorne, NJ | Drain Solution Plus",
    description: "Professional Hydro Jetting services in Hawthorne, NJ for stubborn clogs, grease, sludge, scale, roots, and sewer line buildup. Serving residential and commercial properties.",
    keywords: "hydro jetting, hydro jetting Hawthorne NJ, hydro jet drain cleaning, sewer line hydro jetting, hydro jetting NJ, grease removal, stubborn drain clogs, Drain Solution Plus",
    canonical: "https://www.drainsolutionplus.com/our-services/hydro-jetting",
    ogImage: "https://www.drainsolutionplus.com/images/services-images/hydro-jetting.webp"
  },

  faqs: [
    {
      question: "What is hydro jetting?",
      answer: "Hydro jetting is a professional drain and sewer cleaning method that uses high-pressure water to remove grease, sludge, scale, roots, and other buildup from inside pipes."
    },
    {
      question: "When is hydro jetting recommended?",
      answer: "Hydro jetting may be recommended for stubborn or recurring clogs, heavy buildup, slow drainage, and sewer lines that need a more thorough cleaning."
    },
    {
      question: "Can hydro jetting remove grease from drain lines?",
      answer: "Yes. High-pressure water can break apart and flush grease and other accumulated material from suitable drain and sewer pipes."
    },
    {
      question: "Can hydro jetting remove tree roots from sewer lines?",
      answer: "Hydro jetting can help clear certain root intrusions from sewer lines. A professional inspection can determine whether hydro jetting is appropriate for the condition of the pipe."
    },
    {
      question: "Is hydro jetting suitable for residential and commercial properties?",
      answer: "Yes. Hydro jetting can be used for appropriate residential and commercial drain and sewer systems, depending on the condition, size, and material of the piping."
    },
    {
      question: "Does Drain Solution Plus provide hydro jetting outside Hawthorne, NJ?",
      answer: "Yes. Drain Solution Plus provides hydro jetting and drain cleaning services in Hawthorne and throughout Passaic County, Bergen County, Hudson County, and Essex County, New Jersey."
    }
  ],

  schemaGraph: {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": "https://www.drainsolutionplus.com/our-services/hydro-jetting#service",
        "name": "Hydro Jetting",
        "serviceType": "Hydro Jetting",
        "description": "Professional hydro jetting services in Hawthorne, NJ using high-pressure water to remove stubborn grease, sludge, scale, tree roots, and other buildup from suitable drain and sewer lines.",
        "url": "https://www.drainsolutionplus.com/our-services/hydro-jetting",
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
        "@id": "https://www.drainsolutionplus.com/our-services/hydro-jetting#faq",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "What is hydro jetting?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Hydro jetting is a professional drain and sewer cleaning method that uses high-pressure water to remove grease, sludge, scale, roots, and other buildup from inside pipes."
            }
          },
          {
            "@type": "Question",
            "name": "When is hydro jetting recommended?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Hydro jetting may be recommended for stubborn or recurring clogs, heavy buildup, slow drainage, and sewer lines that need a more thorough cleaning."
            }
          },
          {
            "@type": "Question",
            "name": "Can hydro jetting remove grease from drain lines?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. High-pressure water can break apart and flush grease and other accumulated material from suitable drain and sewer pipes."
            }
          },
          {
            "@type": "Question",
            "name": "Can hydro jetting remove tree roots from sewer lines?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Hydro jetting can help clear certain root intrusions from sewer lines. A professional inspection can determine whether hydro jetting is appropriate for the condition of the pipe."
            }
          },
          {
            "@type": "Question",
            "name": "Is hydro jetting suitable for residential and commercial properties?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. Hydro jetting can be used for appropriate residential and commercial drain and sewer systems, depending on the condition, size, and material of the piping."
            }
          },
          {
            "@type": "Question",
            "name": "Does Drain Solution Plus provide hydro jetting outside Hawthorne, NJ?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. Drain Solution Plus provides hydro jetting and drain cleaning services in Hawthorne and throughout Passaic County, Bergen County, Hudson County, and Essex County, New Jersey."
            }
          }
        ]
      }
    ]
  }
};