import type { ServiceItem } from "@/types/service";

export const sumpPumpRepairsOrReplacement: ServiceItem = {
  id: "sump-pump-repairs-or-replacement",
  tag: "Flood Protection",
  title: "Sump Pump Repair & Replacement in Hawthorne, NJ",
  description: "Professional sump pump repair and replacement in Hawthorne, NJ. Fix failing pumps and help protect basements from flooding and water damage.",
  longDescription: "Drain Solution Plus provides professional sump pump repair and replacement services in Hawthorne, NJ, serving homeowners throughout Passaic County, Bergen County, Hudson County, and Essex County. We repair malfunctioning sump pumps and replace worn or failed systems to help protect basements, crawl spaces, and foundations from unwanted water and flooding. If your sump pump is not turning on, runs continuously, makes unusual noises, struggles to remove water, or stops working during heavy rain, our experienced team can identify the problem and recommend the right solution. Timely sump pump service can help reduce the risk of basement flooding, water damage, and costly repairs. For dependable sump pump repair or replacement in Hawthorne, NJ and surrounding areas, contact Drain Solution Plus for professional service.",
  image: "/images/services-images/sump-pump.webp",
  ctaText: "Sump Pump Services",
  ctaLink: "/our-services/sump-pump-repairs-or-replacement",
  bulletPoints: [
    "Emergency motor troubleshooting and switch mechanism repairs",
    "High-capacity primary sump pump replacements",
    "Battery backup system installations for storm power outages",
    "Basement waterproofing and pit basin cleaning"
  ],
  footerHeading: "Is Your Basement Protected from Floods?",
  footerText: "Ensure your sump pump is ready for the next heavy storm with our expert repair and replacement services.",
  
  meta: {
    title: "Sump Pump Repair & Replacement in Hawthorne, NJ | Drain Solution Plus",
    description: "Professional sump pump repair and replacement in Hawthorne, NJ. Fix failing pumps and help protect basements from flooding and water damage.",
    keywords: "sump pump repair, sump pump replacement, sump pump repair Hawthorne NJ, sump pump service NJ, basement sump pump repair, sump pump installation, Drain Solution Plus",
    canonical: "https://www.drainsolutionplus.com/our-services/sump-pump-repairs-or-replacement",
    ogImage: "https://www.drainsolutionplus.com/images/services-images/sump-pump.webp"
  },

  faqs: [
    {
      question: "What are the signs that a sump pump needs repair?",
      answer: "Common signs include unusual noises, frequent cycling, continuous operation, failure to turn on, poor water removal, or water accumulating around the sump pit."
    },
    {
      question: "When should a sump pump be replaced instead of repaired?",
      answer: "Replacement may be recommended when a sump pump is severely worn, repeatedly fails, has significant mechanical damage, or is no longer able to reliably remove water."
    },
    {
      question: "Why is a working sump pump important?",
      answer: "A properly functioning sump pump helps remove groundwater and can reduce the risk of basement flooding, moisture damage, and water-related problems."
    },
    {
      question: "Can a sump pump stop working during heavy rain?",
      answer: "Yes. Heavy rainfall can place increased demand on a sump pump, and an aging, damaged, improperly sized, or malfunctioning system may struggle to keep up."
    },
    {
      question: "How often should a sump pump be inspected?",
      answer: "Regular inspection can help identify worn components, electrical issues, discharge problems, or other concerns before the pump is needed during heavy rainfall."
    },
    {
      question: "Does Drain Solution Plus provide sump pump service outside Hawthorne, NJ?",
      answer: "Yes. Drain Solution Plus provides sump pump repair and replacement services in Hawthorne and throughout Passaic County, Bergen County, Hudson County, and Essex County, New Jersey."
    }
  ],

  schemaGraph: {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": "https://www.drainsolutionplus.com/our-services/sump-pump-repairs-or-replacement#service",
        "name": "Sump Pump Repair or Replacement",
        "serviceType": "Sump Pump Repair and Replacement",
        "description": "Professional sump pump repair and replacement services in Hawthorne, NJ to help protect basements, crawl spaces, and foundations from unwanted water and flooding.",
        "url": "https://www.drainsolutionplus.com/our-services/sump-pump-repairs-or-replacement",
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
        "@id": "https://www.drainsolutionplus.com/our-services/sump-pump-repairs-or-replacement#faq",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "What are the signs that a sump pump needs repair?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Common signs include unusual noises, frequent cycling, continuous operation, failure to turn on, poor water removal, or water accumulating around the sump pit."
            }
          },
          {
            "@type": "Question",
            "name": "When should a sump pump be replaced instead of repaired?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Replacement may be recommended when a sump pump is severely worn, repeatedly fails, has significant mechanical damage, or is no longer able to reliably remove water."
            }
          },
          {
            "@type": "Question",
            "name": "Why is a working sump pump important?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "A properly functioning sump pump helps remove groundwater and can reduce the risk of basement flooding, moisture damage, and water-related problems."
            }
          },
          {
            "@type": "Question",
            "name": "Can a sump pump stop working during heavy rain?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. Heavy rainfall can place increased demand on a sump pump, and an aging, damaged, improperly sized, or malfunctioning system may struggle to keep up."
            }
          },
          {
            "@type": "Question",
            "name": "How often should a sump pump be inspected?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Regular inspection can help identify worn components, electrical issues, discharge problems, or other concerns before the pump is needed during heavy rainfall."
            }
          },
          {
            "@type": "Question",
            "name": "Does Drain Solution Plus provide sump pump service outside Hawthorne, NJ?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. Drain Solution Plus provides sump pump repair and replacement services in Hawthorne and throughout Passaic County, Bergen County, Hudson County, and Essex County, New Jersey."
            }
          }
        ]
      }
    ]
  }
};