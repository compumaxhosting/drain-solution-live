import type { ServiceItem } from "@/types/service";

export const sewerAndDrainCleaning: ServiceItem = {
  id: "sewer-and-drain-cleaning",
  tag: "Comprehensive Cleaning",
  title: "Sewer & Drain Cleaning in Hawthorne, NJ",
  description: "Professional sewer and drain cleaning in Hawthorne, NJ for clogged drains, sewer lines, blocked toilets, and recurring backups. Serving homes and businesses.",
  longDescription: "Drain Solution Plus provides professional sewer and drain cleaning services in Hawthorne, NJ, serving residential and commercial properties throughout Passaic County, Bergen County, Hudson County, and Essex County. We clear clogged drains, blocked toilets, and sewer lines affected by grease, sludge, roots, debris, and other buildup using professional drain-cleaning equipment and proven techniques. From sink, shower, and floor drains to main sewer lines, our experienced team can diagnose drainage problems and use methods such as power snaking, high-pressure water jetting, and video camera inspection when appropriate. Professional sewer and drain cleaning can restore proper water flow, reduce recurring blockages, and help identify potential problems before they become more serious. Whether you are dealing with slow drainage, foul odors, a stubborn clog, or a sewer backup, Drain Solution Plus provides reliable solutions designed to keep your plumbing and drainage system functioning properly. For professional sewer and drain cleaning in Hawthorne, NJ and surrounding areas, contact Drain Solution Plus to schedule service.",
  image: "/images/services-images/bathtub-drain-snakin.webp",
  ctaText: "Sewer Cleaning",
  ctaLink: "/our-services/sewer-and-drain-cleaning",
  bulletPoints: [
    "Heavy-duty rooter and auger systems for main sewer lines",
    "Removal of stubborn blockages, grease buildup, and scale",
    "Restoration of optimal wastewater flow across residential and commercial properties",
    "Preventive maintenance plans available to avoid future sewer surprises"
  ],
  footerHeading: "Dealing with Main Line Backups?",
  footerText: "Ensure your entire property drains smoothly with our professional sewer and drain cleaning solutions.",
  
  meta: {
    title: "Sewer & Drain Cleaning in Hawthorne, NJ | Drain Solution Plus",
    description: "Professional sewer and drain cleaning in Hawthorne, NJ for clogged drains, sewer lines, blocked toilets, and recurring backups. Serving homes and businesses.",
    keywords: "sewer and drain cleaning, sewer cleaning Hawthorne NJ, drain cleaning Hawthorne NJ, sewer line cleaning, clogged drain cleaning, sewer drain cleaning NJ, Drain Solution Plus",
    canonical: "https://www.drainsolutionplus.com/our-services/sewer-and-drain-cleaning",
    ogImage: "/images/services-images/bathtub-drain-snakin.webp"
  },

  faqs: [
    {
      question: "What is sewer and drain cleaning?",
      answer: "Sewer and drain cleaning is a professional service that removes clogs, grease, sludge, roots, debris, and other buildup from residential and commercial drains and sewer lines to restore proper flow."
    },
    {
      question: "When should I call for sewer or drain cleaning?",
      answer: "You should consider professional cleaning when you experience slow drains, recurring clogs, foul odors, gurgling sounds, blocked toilets, standing water, or sewage backups."
    },
    {
      question: "What types of drains can Drain Solution Plus clean?",
      answer: "Drain Solution Plus can clean sink drains, shower drains, floor drains, toilet drains, and main sewer lines, depending on the location and cause of the blockage."
    },
    {
      question: "How are stubborn sewer and drain clogs removed?",
      answer: "Depending on the condition of the line, professional cleaning may involve power snaking, high-pressure water jetting, or other specialized equipment designed to remove difficult blockages and buildup."
    },
    {
      question: "Can sewer and drain cleaning help prevent recurring clogs?",
      answer: "Professional cleaning can remove accumulated material that contributes to blockages and may help reduce recurring drainage problems. Video inspection can also help identify underlying issues when clogs continue to return."
    },
    {
      question: "Does Drain Solution Plus provide sewer and drain cleaning outside Hawthorne, NJ?",
      answer: "Yes. Drain Solution Plus serves residential and commercial customers in Hawthorne and throughout Passaic County, Bergen County, Hudson County, and Essex County, New Jersey."
    }
  ],

  schemaGraph: {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": "https://www.drainsolutionplus.com/our-services/sewer-and-drain-cleaning#service",
        "name": "Sewer & Drain Cleaning",
        "serviceType": "Sewer and Drain Cleaning",
        "description": "Professional sewer and drain cleaning services in Hawthorne, NJ for clogged drains, blocked toilets, sewer lines, grease, sludge, roots, debris, and recurring drainage problems.",
        "url": "https://www.drainsolutionplus.com/our-services/sewer-and-drain-cleaning",
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
        "@id": "https://www.drainsolutionplus.com/our-services/sewer-and-drain-cleaning#faq",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "What is sewer and drain cleaning?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Sewer and drain cleaning is a professional service that removes clogs, grease, sludge, roots, debris, and other buildup from residential and commercial drains and sewer lines to restore proper flow."
            }
          },
          {
            "@type": "Question",
            "name": "When should I call for sewer or drain cleaning?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "You should consider professional cleaning when you experience slow drains, recurring clogs, foul odors, gurgling sounds, blocked toilets, standing water, or sewage backups."
            }
          },
          {
            "@type": "Question",
            "name": "What types of drains can Drain Solution Plus clean?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Drain Solution Plus can clean sink drains, shower drains, floor drains, toilet drains, and main sewer lines, depending on the location and cause of the blockage."
            }
          },
          {
            "@type": "Question",
            "name": "How are stubborn sewer and drain clogs removed?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Depending on the condition of the line, professional cleaning may involve power snaking, high-pressure water jetting, or other specialized equipment designed to remove difficult blockages and buildup."
            }
          },
          {
            "@type": "Question",
            "name": "Can sewer and drain cleaning help prevent recurring clogs?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Professional cleaning can remove accumulated material that contributes to blockages and may help reduce recurring drainage problems. Video inspection can also help identify underlying issues when clogs continue to return."
            }
          },
          {
            "@type": "Question",
            "name": "Does Drain Solution Plus provide sewer and drain cleaning outside Hawthorne, NJ?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. Drain Solution Plus serves residential and commercial customers in Hawthorne and throughout Passaic County, Bergen County, Hudson County, and Essex County, New Jersey."
            }
          }
        ]
      }
    ]
  }
};