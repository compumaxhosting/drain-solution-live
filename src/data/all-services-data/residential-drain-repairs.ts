import type { ServiceItem } from "@/types/service";

export const residentialDrainRepairs: ServiceItem = {
  id: "residential-drain-repairs",
  tag: "Home Piping Restorations",
  title: "Residential Drain Repairs in Hawthorne, NJ",
  description: "Professional residential drain repairs in Hawthorne, NJ. Fix damaged pipes, leaks, sewer odors, and recurring drainage problems with Drain Solution Plus.",
  longDescription: "Drain Solution Plus provides professional residential drain repair services in Hawthorne, NJ, serving homeowners throughout Passaic County, Bergen County, Hudson County, and Essex County. We repair damaged, leaking, cracked, misaligned, or deteriorating residential drain and sewer pipes to help restore proper drainage and protect your home from water damage, recurring backups, and unpleasant sewer odors. Our residential drain repair services can address under-sink branch lines, PVC and metal piping, sagging or misaligned drain lines, hidden leaks, and other drainage problems that require more than routine cleaning. If you notice persistent sewer smells, slow drainage, recurring backups, visible leaks, or signs of water damage, professional inspection can help identify the underlying issue and determine the appropriate repair. Drain Solution Plus provides dependable residential drain repair solutions designed to minimize disruption while addressing the source of the problem. For professional residential drain repairs in Hawthorne, NJ and surrounding areas, contact Drain Solution Plus to schedule an evaluation and get your home's drainage system back in proper working condition.",
  image: "/images/services-images/kitchen-cleaning.webp",
  ctaText: "Drain Repairs",
  ctaLink: "/our-services/residential-drain-repairs",
  bulletPoints: [
    "Under-sink branch line restorations and PVC/metal piping fixes",
    "Sewer odor diagnostics to pinpoint hidden cracks and active gas leaks",
    "Precision pipe alignment correcting sagging lines and pooling water",
    "Protection against structural wood or drywall rot from minor leaks"
  ],
  footerHeading: "Notice Unpleasant Odors or Leaks?",
  footerText: "Protect your property from hidden water damage and persistent smells. Contact our expert residential repair team for a thorough evaluation today.",
  
  meta: {
    title: "Residential Drain Repairs in Hawthorne, NJ | Drain Solution Plus",
    description: "Professional residential drain repairs in Hawthorne, NJ. Fix damaged pipes, leaks, sewer odors, and recurring drainage problems with Drain Solution Plus.",
    keywords: "residential drain repairs, drain repair Hawthorne NJ, residential drain repair NJ, sewer pipe repair, drain pipe repair, plumbing repairs Hawthorne NJ, Drain Solution Plus",
    canonical: "https://www.drainsolutionplus.com/our-services/residential-drain-repairs",
    ogImage: "https://www.drainsolutionplus.com/images/services-images/kitchen-cleaning.webp"
  },

  faqs: [
    {
      question: "What are residential drain repairs?",
      answer: "Residential drain repairs address damaged, leaking, cracked, misaligned, or deteriorating drain pipes and related components to restore proper drainage and help prevent recurring plumbing problems."
    },
    {
      question: "How do I know if my home's drain needs repair instead of cleaning?",
      answer: "Recurring backups, persistent sewer odors, visible leaks, slow drainage that returns after cleaning, damp areas, or signs of water damage may indicate an underlying pipe problem that requires professional repair."
    },
    {
      question: "What types of residential drain pipes can be repaired?",
      answer: "Residential drain repair may include under-sink branch lines, PVC or metal piping, misaligned drain lines, and other damaged sections of a home's drainage or sewer system, depending on the condition of the plumbing."
    },
    {
      question: "Can a damaged drain pipe cause sewer odors?",
      answer: "Yes. Cracks, leaks, damaged connections, or other pipe problems can allow sewer gases to escape and may result in persistent unpleasant odors inside or around the home."
    },
    {
      question: "Does Drain Solution Plus provide residential drain repairs outside Hawthorne, NJ?",
      answer: "Yes. Drain Solution Plus serves homeowners in Hawthorne and throughout Passaic County, Bergen County, Hudson County, and Essex County, New Jersey."
    },
    {
      question: "How can I schedule residential drain repair in Hawthorne, NJ?",
      answer: "Contact Drain Solution Plus to discuss your drainage problem and schedule a professional residential drain repair evaluation in Hawthorne, NJ or the surrounding service areas."
    }
  ],

  schemaGraph: {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": "https://www.drainsolutionplus.com/our-services/residential-drain-repairs#service",
        "name": "Residential Drain Repairs",
        "serviceType": "Residential Drain Repair",
        "description": "Professional residential drain repair services in Hawthorne, NJ for damaged, leaking, cracked, misaligned, or deteriorating drain and sewer pipes.",
        "url": "https://www.drainsolutionplus.com/our-services/residential-drain-repairs",
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
        "@id": "https://www.drainsolutionplus.com/our-services/residential-drain-repairs#faq",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "What are residential drain repairs?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Residential drain repairs address damaged, leaking, cracked, misaligned, or deteriorating drain pipes and related components to restore proper drainage and help prevent recurring plumbing problems."
            }
          },
          {
            "@type": "Question",
            "name": "How do I know if my home's drain needs repair instead of cleaning?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Recurring backups, persistent sewer odors, visible leaks, slow drainage that returns after cleaning, damp areas, or signs of water damage may indicate an underlying pipe problem that requires professional repair."
            }
          },
          {
            "@type": "Question",
            "name": "What types of residential drain pipes can be repaired?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Residential drain repair may include under-sink branch lines, PVC or metal piping, misaligned drain lines, and other damaged sections of a home's drainage or sewer system, depending on the condition of the plumbing."
            }
          },
          {
            "@type": "Question",
            "name": "Can a damaged drain pipe cause sewer odors?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. Cracks, leaks, damaged connections, or other pipe problems can allow sewer gases to escape and may result in persistent unpleasant odors inside or around the home."
            }
          },
          {
            "@type": "Question",
            "name": "Does Drain Solution Plus provide residential drain repairs outside Hawthorne, NJ?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. Drain Solution Plus serves homeowners in Hawthorne and throughout Passaic County, Bergen County, Hudson County, and Essex County, New Jersey."
            }
          },
          {
            "@type": "Question",
            "name": "How can I schedule residential drain repair in Hawthorne, NJ?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Contact Drain Solution Plus to discuss your drainage problem and schedule a professional residential drain repair evaluation in Hawthorne, NJ or the surrounding service areas."
            }
          }
        ]
      }
    ]
  }
};