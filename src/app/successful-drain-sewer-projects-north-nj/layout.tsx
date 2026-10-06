import type { Metadata, Viewport } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Drain & Sewer Projects in Northern NJ | Drain Solutions Plus",
  description: "See successful drain and sewer projects completed by Drain Solutions Plus for commercial and residential customers throughout Northern New Jersey.",
  keywords: [
    "drain sewer projects NJ",
    "successful drain projects NJ",
    "sewer projects Northern NJ",
    "drain cleaning NJ",
    "sewer cleaning NJ",
    "sewer line repair NJ",
    "commercial drain cleaning NJ",
    "commercial sewer cleaning NJ",
    "sewer repair NJ",
    "drain solutions plus projects",
    "Northern New Jersey drain services",
    "Hawthorne NJ drain services",
  ],
  authors: [{ name: "Drain Solutions Plus" }],
  metadataBase: new URL("https://www.drainsolutionplus.com"),
  alternates: {
    canonical: "/successful-drain-sewer-projects-north-nj",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    title: "Drain & Sewer Projects in Northern NJ | Drain Solutions Plus",
    description: "Explore successful drain and sewer projects completed by Drain Solutions Plus for commercial and residential properties across Northern New Jersey.",
    url: "https://www.drainsolutionplus.com/successful-drain-sewer-projects-north-nj",
    siteName: "Drain Solutions Plus",
    locale: "en_US",
    images: [
      {
        url: "/images/before-after/4.webp",
        alt: "Successful drain and sewer projects completed by Drain Solutions Plus in Northern New Jersey",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Drain & Sewer Projects in Northern NJ | Drain Solutions Plus",
    description: "Explore successful commercial and residential drain and sewer projects completed by Drain Solutions Plus throughout Northern New Jersey.",
    images: ["/images/before-after/4.webp"],
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
      "@id": "https://www.drainsolutionplus.com/successful-drain-sewer-projects-north-nj#page",
      "url": "https://www.drainsolutionplus.com/successful-drain-sewer-projects-north-nj",
      "name": "Drain & Sewer Projects in Northern NJ | Drain Solutions Plus",
      "description": "A collection of successful drain and sewer projects completed by Drain Solutions Plus for commercial and residential properties throughout Northern New Jersey.",
      "isPartOf": {
        "@id": "https://www.drainsolutionplus.com/#website"
      },
      "about": {
        "@id": "https://www.drainsolutionplus.com/#business"
      },
      "mainEntity": {
        "@id": "https://www.drainsolutionplus.com/successful-drain-sewer-projects-north-nj#projects"
      },
      "inLanguage": "en-US"
    },
    {
      "@type": "ItemList",
      "@id": "https://www.drainsolutionplus.com/successful-drain-sewer-projects-north-nj#projects",
      "name": "Successful Drain & Sewer Projects",
      "description": "Examples of drain, sewer cleaning, repair, inspection and related service work completed by Drain Solutions Plus.",
      "itemListOrder": "https://schema.org/ItemListOrderDescending",
      "numberOfItems": 1,
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Drain & Sewer Projects in Northern New Jersey",
          "url": "https://www.drainsolutionplus.com/successful-drain-sewer-projects-north-nj"
        }
      ]
    },
    {
      "@type": "Service",
      "@id": "https://www.drainsolutionplus.com/successful-drain-sewer-projects-north-nj#service",
      "name": "Drain & Sewer Services",
      "serviceType": [
        "Drain Cleaning",
        "Sewer Cleaning",
        "Sewer Line Repair",
        "Sewer Camera Inspection",
        "Commercial Drain Cleaning",
        "Commercial Sewer Cleaning"
      ],
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
      ]
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.drainsolutionplus.com/successful-drain-sewer-projects-north-nj#breadcrumb",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://www.drainsolutionplus.com/"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Successful Drain & Sewer Projects",
          "item": "https://www.drainsolutionplus.com/successful-drain-sewer-projects-north-nj"
        }
      ]
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
      "knowsAbout": [
        "Drain cleaning",
        "Clogged drain cleaning",
        "Sewer cleaning",
        "Sewer line repair",
        "Sewer camera inspection",
        "Commercial drain cleaning",
        "Commercial sewer cleaning",
        "Hydro jetting",
        "Sewer pipe repair"
      ]
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
    }
  ]
};

export default function SuccessfulProjectsLayout({
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