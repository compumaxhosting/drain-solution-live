import type { Metadata, Viewport } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Drain & Sewer Services NJ | Commercial Drain Cleaning & Repair",
  description: "Explore Drain Solutions Plus services in Northern NJ, from commercial drain and sewer cleaning to repairs, camera inspections, leak repair and emergency service.",
  keywords: [
    "drain cleaning NJ",
    "sewer cleaning NJ",
    "sewer line repair NJ",
    "sewer camera inspection NJ",
    "commercial drain cleaning NJ",
    "commercial sewer cleaning",
    "toilet repair NJ",
    "faucet leak repair NJ",
    "frozen pipe repair NJ",
    "emergency drain cleaning NJ",
    "residential drain cleaning NJ",
    "hydro jetting NJ",
    "drain camera inspection NJ",
  ],
  authors: [{ name: "Drain Solutions Plus" }],
  metadataBase: new URL("https://www.drainsolutionplus.com"),
  alternates: {
    canonical: "/our-services",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    title: "Drain & Sewer Services NJ | Commercial Drain Cleaning & Repair",
    description: "See the full range of Drain Solutions Plus services, including commercial drain cleaning, sewer repair, video inspections, leak repair and emergency drain service across Northern NJ.",
    url: "https://www.drainsolutionplus.com/our-services",
    siteName: "Drain Solutions Plus",
    locale: "en_US",
    images: [
      {
        url: "/images/client-images/kitchen-cleaning.webp",
        alt: "Technician cleaning a kitchen drain line",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Drain & Sewer Services NJ | Commercial Drain Cleaning & Repair",
    description: "Explore commercial and residential drain, sewer, inspection, repair and emergency services from Drain Solutions Plus across Northern New Jersey.",
    images: ["/images/client-images/kitchen-cleaning.webp"],
  },
  other: {
    referrer: "strict-origin-when-cross-origin",
  },
};

export const viewport: Viewport = {
  themeColor: "#ffffff",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "CollectionPage",
      "@id": "https://www.drainsolutionplus.com/our-services#page",
      "url": "https://www.drainsolutionplus.com/our-services",
      "name": "Drain & Sewer Services NJ | Commercial Drain Cleaning & Repair",
      "description": "Explore commercial and residential drain, sewer, inspection, repair and emergency services from Drain Solutions Plus across Northern New Jersey.",
      "isPartOf": {
        "@id": "https://www.drainsolutionplus.com/#website"
      },
      "about": {
        "@id": "https://www.drainsolutionplus.com/#business"
      },
      "mainEntity": {
        "@id": "https://www.drainsolutionplus.com/our-services#service-list"
      },
      "inLanguage": "en-US"
    },
    {
      "@type": "ItemList",
      "@id": "https://www.drainsolutionplus.com/our-services#service-list",
      "name": "Drain Solutions Plus Services",
      "description": "Commercial and residential drain, sewer, inspection, repair and emergency services provided by Drain Solutions Plus.",
      "numberOfItems": 8,
      "itemListOrder": "https://schema.org/ItemListOrderAscending",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Drain Cleaning",
          "url": "https://www.drainsolutionplus.com/our-services#drain-cleaning"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Sewer Cleaning",
          "url": "https://www.drainsolutionplus.com/our-services#sewer-cleaning"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Sewer Repair",
          "url": "https://www.drainsolutionplus.com/our-services#sewer-repair"
        },
        {
          "@type": "ListItem",
          "position": 4,
          "name": "Sewer Camera & Video Inspection",
          "url": "https://www.drainsolutionplus.com/our-services#video-inspection"
        },
        {
          "@type": "ListItem",
          "position": 5,
          "name": "Toilet Repair",
          "url": "https://www.drainsolutionplus.com/our-services#toilet-repair"
        },
        {
          "@type": "ListItem",
          "position": 6,
          "name": "Faucet & Leak Repair",
          "url": "https://www.drainsolutionplus.com/our-services#faucet-leak-repair"
        },
        {
          "@type": "ListItem",
          "position": 7,
          "name": "Frozen Pipe Repair",
          "url": "https://www.drainsolutionplus.com/our-services#frozen-pipes"
        },
        {
          "@type": "ListItem",
          "position": 8,
          "name": "Emergency Drain & Sewer Services",
          "url": "https://www.drainsolutionplus.com/our-services#emergency"
        }
      ]
    },
    {
      "@type": "Service",
      "@id": "https://www.drainsolutionplus.com/our-services#drain-cleaning",
      "name": "Drain Cleaning",
      "serviceType": "Drain Cleaning",
      "provider": {
        "@id": "https://www.drainsolutionplus.com/#business"
      },
      "areaServed": {
        "@type": "State",
        "name": "New Jersey"
      },
      "audience": [
        {
          "@type": "BusinessAudience",
          "audienceType": "Commercial customers"
        },
        {
          "@type": "PeopleAudience",
          "audienceType": "Residential customers"
        }
      ],
      "description": "Professional drain cleaning for clogged, slow or backed-up drains in commercial and residential properties."
    },
    {
      "@type": "Service",
      "@id": "https://www.drainsolutionplus.com/our-services#sewer-cleaning",
      "name": "Sewer Cleaning",
      "serviceType": "Sewer Cleaning",
      "provider": {
        "@id": "https://www.drainsolutionplus.com/#business"
      },
      "areaServed": {
        "@type": "State",
        "name": "New Jersey"
      },
      "description": "Sewer line cleaning for blockages, backups and drainage problems affecting commercial and residential properties."
    },
    {
      "@type": "Service",
      "@id": "https://www.drainsolutionplus.com/our-services#sewer-repair",
      "name": "Sewer Line Repair",
      "serviceType": "Sewer Line Repair",
      "provider": {
        "@id": "https://www.drainsolutionplus.com/#business"
      },
      "areaServed": {
        "@type": "State",
        "name": "New Jersey"
      },
      "description": "Sewer line repair services for damaged, blocked or deteriorating sewer pipes."
    },
    {
      "@type": "Service",
      "@id": "https://www.drainsolutionplus.com/our-services#video-inspection",
      "name": "Sewer Camera Inspection",
      "serviceType": "Sewer Camera Inspection",
      "provider": {
        "@id": "https://www.drainsolutionplus.com/#business"
      },
      "areaServed": {
        "@type": "State",
        "name": "New Jersey"
      },
      "description": "Video camera inspection of drain and sewer lines to help identify blockages, damage, root intrusion and other pipe problems."
    },
    {
      "@type": "Service",
      "@id": "https://www.drainsolutionplus.com/our-services#toilet-repair",
      "name": "Toilet Repair",
      "serviceType": "Toilet Repair",
      "provider": {
        "@id": "https://www.drainsolutionplus.com/#business"
      },
      "areaServed": {
        "@type": "State",
        "name": "New Jersey"
      },
      "description": "Toilet repair for clogged, leaking, running and malfunctioning toilets."
    },
    {
      "@type": "Service",
      "@id": "https://www.drainsolutionplus.com/our-services#faucet-leak-repair",
      "name": "Faucet & Leak Repair",
      "serviceType": "Faucet and Leak Repair",
      "provider": {
        "@id": "https://www.drainsolutionplus.com/#business"
      },
      "areaServed": {
        "@type": "State",
        "name": "New Jersey"
      },
      "description": "Faucet and water leak repair services for residential and commercial properties."
    },
    {
      "@type": "Service",
      "@id": "https://www.drainsolutionplus.com/our-services#frozen-pipes",
      "name": "Frozen Pipe Repair",
      "serviceType": "Frozen Pipe Repair",
      "provider": {
        "@id": "https://www.drainsolutionplus.com/#business"
      },
      "areaServed": {
        "@type": "State",
        "name": "New Jersey"
      },
      "description": "Frozen and burst pipe repair services for urgent residential and commercial plumbing problems."
    },
    {
      "@type": "Service",
      "@id": "https://www.drainsolutionplus.com/our-services#emergency",
      "name": "Emergency Drain & Sewer Services",
      "serviceType": "Emergency Drain and Sewer Service",
      "provider": {
        "@id": "https://www.drainsolutionplus.com/#business"
      },
      "areaServed": {
        "@type": "State",
        "name": "New Jersey"
      },
      "description": "Emergency drain and sewer services for urgent clogs, backups and drainage problems."
    },
    {
      "@type": "WebSite",
      "@id": "https://www.drainsolutionplus.com/#website",
      "url": "https://www.drainsolutionplus.com/",
      "name": "Drain Solutions Plus",
      "publisher": {
        "@id": "https://www.drainsolutionplus.com/#business"
      },
      "inLanguage": "en-US"
    },
    {
      "@type": "Plumber",
      "@id": "https://www.drainsolutionplus.com/#business",
      "name": "Drain Solutions Plus",
      "url": "https://www.drainsolutionplus.com/",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Hawthorne",
        "addressRegion": "NJ",
        "addressCountry": "US"
      },
      "areaServed": [
        {
          "@type": "AdministrativeArea",
          "name": "Bergen County, New Jersey"
        },
        {
          "@type": "AdministrativeArea",
          "name": "Essex County, New Jersey"
        },
        {
          "@type": "AdministrativeArea",
          "name": "Hudson County, New Jersey"
        },
        {
          "@type": "AdministrativeArea",
          "name": "Passaic County, New Jersey"
        }
      ],
      "knowsAbout": [
        "Commercial drain cleaning",
        "Commercial sewer cleaning",
        "Sewer line repair",
        "Sewer camera inspection",
        "Hydro jetting",
        "Drain cleaning",
        "Toilet repair",
        "Faucet and leak repair",
        "Frozen pipe repair",
        "Emergency drain services"
      ]
    }
  ]
};

export default function OurServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
        {children}
    </>
  );
}