import type { ServiceItem } from "@/types/service";

export const sinkClogs: ServiceItem = {
  id: "sink-clogs",
  tag: "Kitchen & Bath Care",
  title: "Sink Clog Removal in Hawthorne, NJ",
  description: "Professional sink clog removal in Hawthorne, NJ for kitchen and bathroom sinks. Clear grease, food, hair, soap buildup, and stubborn blockages.",
  longDescription: "Drain Solution Plus provides professional sink clog removal services in Hawthorne, NJ, serving homeowners throughout Passaic County, Bergen County, Hudson County, and Essex County. We clear clogged and slow-draining kitchen and bathroom sinks caused by grease, food particles, hair, soap buildup, debris, and other blockages. If your sink drains slowly, backs up, produces unpleasant odors, or repeatedly becomes clogged, professional drain cleaning can help identify and remove the obstruction. Our experienced team uses professional equipment and proven techniques, including drain snaking and other appropriate cleaning methods, to restore proper water flow and help reduce recurring sink clogs. For reliable sink clog removal in Hawthorne, NJ and surrounding areas, contact Drain Solution Plus for professional service.",
  image: "/images/services-images/unclogged-sink-drain.webp",
  ctaText: "Clear Sink Clog",
  ctaLink: "/our-services/sink-clogs",
  bulletPoints: [
    "P-trap disassembly, cleaning, and secure re-sealing",
    "Grease and food waste extraction for kitchen sink lines",
    "Bathroom sink hair and debris clearing",
    "Flow testing to ensure airtight and leak-free operation"
  ],
  footerHeading: "Slow Draining Kitchen or Bath Sink?",
  footerText: "Stop dealing with pools of dirty water in your basin. Let our experts clear your sink clogs today.",
  
  meta: {
    title: "Sink Clog Removal in Hawthorne, NJ | Drain Solution Plus",
    description: "Professional sink clog removal in Hawthorne, NJ for kitchen and bathroom sinks. Clear grease, food, hair, soap buildup, and stubborn blockages.",
    keywords: "sink clog removal, clogged sink Hawthorne NJ, sink drain cleaning, kitchen sink clog, bathroom sink clog, slow sink drain, sink clog repair NJ, Drain Solution Plus",
    canonical: "https://www.drainsolutionplus.com/our-services/sink-clogs",
    ogImage: "https://www.drainsolutionplus.com/images/services-images/unclogged-sink-drain.webp"
  },

  faqs: [
    {
      question: "What causes a sink drain to clog?",
      answer: "Common causes include grease, food particles, hair, soap residue, debris, and buildup inside the drain or connecting pipe."
    },
    {
      question: "When should I call a professional for a clogged sink?",
      answer: "You should consider professional service when your sink drains slowly, repeatedly becomes clogged, backs up, produces unpleasant odors, or cannot be cleared with basic methods."
    },
    {
      question: "Can you unclog both kitchen and bathroom sinks?",
      answer: "Yes. Professional sink clog removal can address blockages in kitchen sinks, bathroom sinks, and other residential sink drains."
    },
    {
      question: "Why does my sink keep getting clogged?",
      answer: "Recurring sink clogs may be caused by ongoing buildup, improper items entering the drain, or a deeper blockage in the drain line. A professional inspection can help determine the underlying cause."
    },
    {
      question: "Can a clogged sink indicate a larger plumbing problem?",
      answer: "Yes. If multiple fixtures are draining slowly or backing up, the problem may extend beyond the sink and could involve a larger drain or sewer line blockage."
    },
    {
      question: "Does Drain Solution Plus serve sink clog customers outside Hawthorne, NJ?",
      answer: "Yes. Drain Solution Plus provides sink clog and drain cleaning services in Hawthorne and throughout Passaic County, Bergen County, Hudson County, and Essex County, New Jersey."
    }
  ],

  schemaGraph: {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": "https://www.drainsolutionplus.com/our-services/sink-clogs#service",
        "name": "Sink Clog Removal",
        "serviceType": "Sink Clog Removal",
        "description": "Professional sink clog removal services in Hawthorne, NJ for clogged and slow-draining kitchen and bathroom sinks caused by grease, food particles, hair, soap buildup, debris, and other blockages.",
        "url": "https://www.drainsolutionplus.com/our-services/sink-clogs",
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
        "@id": "https://www.drainsolutionplus.com/our-services/sink-clogs#faq",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "What causes a sink drain to clog?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Common causes include grease, food particles, hair, soap residue, debris, and buildup inside the drain or connecting pipe."
            }
          },
          {
            "@type": "Question",
            "name": "When should I call a professional for a clogged sink?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "You should consider professional service when your sink drains slowly, repeatedly becomes clogged, backs up, produces unpleasant odors, or cannot be cleared with basic methods."
            }
          },
          {
            "@type": "Question",
            "name": "Can you unclog both kitchen and bathroom sinks?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. Professional sink clog removal can address blockages in kitchen sinks, bathroom sinks, and other residential sink drains."
            }
          },
          {
            "@type": "Question",
            "name": "Why does my sink keep getting clogged?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Recurring sink clogs may be caused by ongoing buildup, improper items entering the drain, or a deeper blockage in the drain line. A professional inspection can help determine the underlying cause."
            }
          },
          {
            "@type": "Question",
            "name": "Can a clogged sink indicate a larger plumbing problem?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. If multiple fixtures are draining slowly or backing up, the problem may extend beyond the sink and could involve a larger drain or sewer line blockage."
            }
          },
          {
            "@type": "Question",
            "name": "Does Drain Solution Plus serve sink clog customers outside Hawthorne, NJ?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. Drain Solution Plus provides sink clog and drain cleaning services in Hawthorne and throughout Passaic County, Bergen County, Hudson County, and Essex County, New Jersey."
            }
          }
        ]
      }
    ]
  }
};