import type { ServiceItem } from "@/types/service";

export const commercialDrainCleaning: ServiceItem = {
  id: "commercial-drain-cleaning",
  tag: "Heavy-Duty Jetting",
  title: "Commercial Drain Cleaning in Hawthorne, NJ",
  description: "Professional commercial drain cleaning in Hawthorne, NJ using hydro-jetting to remove grease, sludge, scale, and debris from business drainage systems.",
  longDescription: "Drain Solution Plus provides professional commercial drain cleaning services in Hawthorne, NJ, serving businesses throughout Passaic County, Bergen County, Hudson County, and Essex County. Our commercial drain cleaning solutions are designed to remove grease, scale, sludge, and heavy debris from commercial drainage systems and help maintain reliable flow during demanding business operations. Using high-pressure hydro-jetting and professional equipment, we clean commercial pipelines, kitchen drains, large-diameter pipes, and other drainage systems affected by heavy use and buildup. Regular commercial drain cleaning can help reduce recurring clogs, slow drainage, unpleasant odors, unexpected backups, and costly disruptions to your business. We also offer scheduled maintenance solutions to help keep commercial drainage systems operating efficiently and identify potential problems before they lead to major interruptions. For dependable commercial drain cleaning in Hawthorne, NJ and surrounding areas, contact Drain Solution Plus to schedule professional service for your business.",
  image: "/images/services-images/commercial-drain-cleaning.webp",
  ctaText: "Commercial Cleaning",
  ctaLink: "/our-services/commercial-drain-cleaning",
  bulletPoints: [
    "High-pressure hydro-jetting blasting away accumulated grease and scale",
    "Scheduled maintenance programs preventing unexpected facility shutdowns",
    "Large diameter pipe clearing for industrial complexes and kitchens",
    "Restoration of pipelines back to 100% inner diameter capacity"
  ],
  footerHeading: "Keep Your Facility Flowing Freely",
  footerText: "Schedule routine heavy-duty hydro-jetting to ensure continuous pipeline performance and protect your commercial enterprise.",
  
  meta: {
    title: "Commercial Drain Cleaning in Hawthorne, NJ | Drain Solution Plus",
    description: "Professional commercial drain cleaning in Hawthorne, NJ using hydro-jetting to remove grease, sludge, scale, and debris from business drainage systems.",
    keywords: "commercial drain cleaning, commercial drain cleaning Hawthorne NJ, commercial drain cleaning NJ, hydro jetting, commercial sewer cleaning, commercial pipe cleaning, Drain Solution Plus",
    canonical: "https://www.drainsolutionplus.com/our-services/commercial-drain-cleaning",
    ogImage: "https://www.drainsolutionplus.com/images/services-images/commercial-drain-cleaning.webp"
  },

  faqs: [
    {
      question: "What is commercial drain cleaning?",
      answer: "Commercial drain cleaning is a professional service that removes grease, scale, sludge, debris, and other buildup from drainage and sewer lines used by businesses and commercial properties."
    },
    {
      question: "When should a business schedule commercial drain cleaning?",
      answer: "Businesses should consider professional drain cleaning when they experience slow drainage, recurring clogs, unpleasant odors, backups, or heavy buildup caused by frequent use."
    },
    {
      question: "What method is used for commercial drain cleaning?",
      answer: "Drain Solution Plus uses professional equipment, including high-pressure hydro-jetting, to remove hardened grease, scale, and heavy debris from commercial pipelines."
    },
    {
      question: "Can commercial drain cleaning prevent recurring clogs?",
      answer: "Regular professional cleaning can help remove buildup before it becomes a major blockage and may reduce recurring drainage problems when combined with appropriate maintenance."
    },
    {
      question: "Can you clean large commercial drain and sewer lines?",
      answer: "Yes. Commercial drain cleaning can include large-diameter pipelines and drainage systems used by commercial kitchens, industrial facilities, and other properties with high-volume drainage demands."
    },
    {
      question: "Does Drain Solution Plus provide commercial drain cleaning outside Hawthorne, NJ?",
      answer: "Yes. Drain Solution Plus serves commercial properties in Hawthorne and throughout Passaic County, Bergen County, Hudson County, and Essex County, New Jersey."
    }
  ],

  schemaGraph: {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": "https://www.drainsolutionplus.com/our-services/commercial-drain-cleaning#service",
        "name": "Commercial Drain Cleaning",
        "serviceType": "Commercial Drain Cleaning",
        "description": "Professional commercial drain cleaning services in Hawthorne, NJ using high-pressure hydro-jetting and professional equipment to remove grease, scale, sludge, and heavy debris from commercial drainage systems.",
        "url": "https://www.drainsolutionplus.com/our-services/commercial-drain-cleaning",
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
        "@id": "https://www.drainsolutionplus.com/our-services/commercial-drain-cleaning#faq",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "What is commercial drain cleaning?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Commercial drain cleaning is a professional service that removes grease, scale, sludge, debris, and other buildup from drainage and sewer lines used by businesses and commercial properties."
            }
          },
          {
            "@type": "Question",
            "name": "When should a business schedule commercial drain cleaning?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Businesses should consider professional drain cleaning when they experience slow drainage, recurring clogs, unpleasant odors, backups, or heavy buildup caused by frequent use."
            }
          },
          {
            "@type": "Question",
            "name": "What method is used for commercial drain cleaning?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Drain Solution Plus uses professional equipment, including high-pressure hydro-jetting, to remove hardened grease, scale, and heavy debris from commercial pipelines."
            }
          },
          {
            "@type": "Question",
            "name": "Can commercial drain cleaning prevent recurring clogs?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Regular professional cleaning can help remove buildup before it becomes a major blockage and may reduce recurring drainage problems when combined with appropriate maintenance."
            }
          },
          {
            "@type": "Question",
            "name": "Can you clean large commercial drain and sewer lines?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. Commercial drain cleaning can include large-diameter pipelines and drainage systems used by commercial kitchens, industrial facilities, and other properties with high-volume drainage demands."
            }
          },
          {
            "@type": "Question",
            "name": "Does Drain Solution Plus provide commercial drain cleaning outside Hawthorne, NJ?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. Drain Solution Plus serves commercial properties in Hawthorne and throughout Passaic County, Bergen County, Hudson County, and Essex County, New Jersey."
            }
          }
        ]
      }
    ]
  }
};