import type { ServiceItem } from "@/types/service";

export const residentialDrainCleaning: ServiceItem = {
  id: "residential-drain-cleaning",
  tag: "Residential Solutions",
  title: "Residential Drain Cleaning in Hawthorne, NJ",
  description: "Professional residential drain cleaning in Hawthorne, NJ, serving Passaic, Bergen, Hudson & Essex Counties. Clear clogged and slow drains today.",
  longDescription: "Drain Solution Plus provides professional residential drain cleaning in Hawthorne, NJ, serving homeowners throughout Passaic County, Bergen County, Hudson County, and Essex County. We clear clogged, slow, and backed-up drains in kitchens, bathrooms, showers, tubs, toilets, laundry areas, and main sewer lines using professional equipment and proven drain cleaning techniques. Whether you are dealing with recurring clogs, unpleasant odors, slow drainage, or a complete blockage, our experienced team can identify the cause and provide an effective solution. For reliable residential drain cleaning near Hawthorne, NJ, contact Drain Solution Plus for professional service designed to restore proper drainage and help reduce recurring drainage problems.",
  image: "/images/services-images/unclogged-sink-drain.webp",
  ctaText: "Drain Cleaning",
  ctaLink: "/our-services/residential-drain-cleaning",
  bulletPoints: [
    "Advanced power snaking and mechanical augering equipment",
    "Eco-friendly treatments safe for household piping networks",
    "Thorough line flushing to prevent immediate recurring clogs",
    "Prevention of costly emergency water damage across sinks and showers"
  ],
  footerHeading: "Experiencing Slow Drainage at Home?",
  footerText: "Don't let a minor clog turn into a major plumbing emergency. Our professional technicians are ready to restore your home's water flow quickly and cleanly.",
  
  meta: {
    title: "Residential Drain Cleaning in Hawthorne, NJ | Drain Solution Plus",
    description: "Professional residential drain cleaning in Hawthorne, NJ, serving Passaic, Bergen, Hudson & Essex Counties. Clear clogged and slow drains today.",
    keywords: "residential drain cleaning, drain cleaning Hawthorne NJ, clogged drain cleaning, drain cleaning Passaic County, drain cleaning Bergen County, drain cleaning Hudson County, drain cleaning Essex County",
    canonical: "https://www.drainsolutionplus.com/our-services/residential-drain-cleaning",
    ogImage: "https://www.drainsolutionplus.com/images/services-images/unclogged-sink-drain.webp"
  },

  faqs: [
    {
      question: "What is residential drain cleaning?",
      answer: "Residential drain cleaning is a professional service that removes clogs, buildup, grease, hair, debris, and other obstructions from household drains to restore proper water flow and help reduce recurring blockages."
    },
    {
      question: "When should I call for residential drain cleaning?",
      answer: "You should consider professional drain cleaning when you notice slow drainage, recurring clogs, standing water, unpleasant drain odors, gurgling sounds, or water backing up into sinks, showers, tubs, or other fixtures."
    },
    {
      question: "What types of residential drains can be cleaned?",
      answer: "Professional drain cleaning can address kitchen sinks, bathroom sinks, showers, bathtubs, toilets, laundry drains, floor drains, and main residential sewer lines, depending on the nature and location of the blockage."
    },
    {
      question: "Can drain cleaning help with recurring clogs?",
      answer: "Yes. Professional drain cleaning can remove accumulated debris and buildup that may contribute to recurring clogs. If a blockage repeatedly returns, a professional inspection may help identify an underlying plumbing or sewer issue."
    },
    {
      question: "Does Drain Solution Plus serve areas outside Hawthorne, NJ?",
      answer: "Yes. Drain Solution Plus provides residential drain cleaning services in Hawthorne and throughout Passaic County, Bergen County, Hudson County, and Essex County, New Jersey."
    },
    {
      question: "How can I schedule residential drain cleaning in Hawthorne, NJ?",
      answer: "Contact Drain Solution Plus to discuss your drainage problem and schedule professional residential drain cleaning service in Hawthorne, NJ, or the surrounding service areas."
    }
  ],

  schemaGraph: {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": "https://www.drainsolutionplus.com/our-services/residential-drain-cleaning#service",
        "name": "Residential Drain Cleaning",
        "serviceType": "Residential Drain Cleaning",
        "description": "Professional residential drain cleaning for clogged, slow, and backed-up drains in Hawthorne, NJ and surrounding areas.",
        "url": "https://www.drainsolutionplus.com/our-services/residential-drain-cleaning",
        "provider": {
          "@id": "https://www.drainsolutionplus.com/#organization"
        },
        "areaServed": [
          { "@type": "AdministrativeArea", "name": "Passaic County, New Jersey" },
          { "@type": "AdministrativeArea", "name": "Bergen County, New Jersey" },
          { "@type": "AdministrativeArea", "name": "Hudson County, New Jersey" },
          { "@type": "AdministrativeArea", "name": "Essex County, New Jersey" }
        ],
        "audience": {
          "@type": "Audience",
          "audienceType": "Residential Homeowners"
        },
        "availableChannel": {
          "@type": "ServiceChannel",
          "serviceUrl": "https://www.drainsolutionplus.com/our-services/residential-drain-cleaning"
        }
      },
      {
        "@type": "LocalBusiness",
        "@id": "https://www.drainsolutionplus.com/#organization",
        "name": "Drain Solution Plus",
        "url": "https://www.drainsolutionplus.com/",
        "description": "Drain Solution Plus provides residential drain cleaning and plumbing solutions in Hawthorne, NJ and surrounding New Jersey counties.",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Hawthorne",
          "addressRegion": "NJ",
          "addressCountry": "US"
        },
        "areaServed": [
          "Passaic County, NJ",
          "Bergen County, NJ",
          "Hudson County, NJ",
          "Essex County, NJ"
        ]
      },
      {
        "@type": "FAQPage",
        "@id": "https://www.drainsolutionplus.com/our-services/residential-drain-cleaning#faq",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "What residential drain cleaning services does Drain Solution Plus provide?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Drain Solution Plus provides professional cleaning for clogged, slow, and backed-up residential drains, including kitchen sinks, bathroom sinks, showers, tubs, toilets, laundry drains, floor drains, and main sewer lines."
            }
          },
          {
            "@type": "Question",
            "name": "How do I know if my drain needs professional cleaning?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Slow drainage, recurring clogs, unpleasant odors, gurgling sounds, standing water, and drain backups can indicate that professional drain cleaning is needed."
            }
          },
          {
            "@type": "Question",
            "name": "Does Drain Solution Plus serve areas outside Hawthorne, NJ?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. Drain Solution Plus serves residential customers in Hawthorne and throughout Passaic County, Bergen County, Hudson County, and Essex County, New Jersey."
            }
          },
          {
            "@type": "Question",
            "name": "Can professional drain cleaning help prevent recurring clogs?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Professional drain cleaning can thoroughly remove buildup and blockages and may help reduce recurring drainage problems when the underlying cause is properly identified and addressed."
            }
          }
        ]
      }
    ]
  }
};