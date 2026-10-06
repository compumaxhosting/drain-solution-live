import type { Metadata, Viewport } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Drain Cleaning & Sewer Services Throughout Bergen County, NJ",
  description: "Get residential and commercial drain cleaning, sewer repair, hydro jetting, video inspections and plumbing services throughout Bergen County, NJ.",
  keywords: [
    "drain cleaning Bergen County NJ",
    "sewer repair Bergen County NJ",
    "drain repair Bergen County NJ",
    "hydro jetting Bergen County NJ",
    "sewer cleaning Bergen County NJ",
    "plumbing services Bergen County NJ",
  ],
  authors: [{ name: "Drain Solutions Plus" }],
  metadataBase: new URL("https://www.drainsolutionplus.com"),
  alternates: {
    canonical: "/bergen-county-nj",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    title: "Drain Cleaning & Sewer Services Throughout Bergen County, NJ",
    description: "Residential and commercial drain, sewer, plumbing and pump services throughout Bergen County, NJ from Drain Solutions Plus.",
    url: "https://www.drainsolutionplus.com/bergen-county-nj",
    siteName: "Drain Solutions Plus",
    locale: "en_US",
    images: [
      {
        url: "/images/njj.webp",
        alt: "Northern New Jersey service area map showing coverage that includes Bergen County",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Drain Cleaning & Sewer Services Throughout Bergen County, NJ",
    description: "Residential and commercial drain, sewer, plumbing and pump services throughout Bergen County, NJ.",
    images: ["/images/njj.webp"],
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
      "@type": "WebSite",
      "@id": "https://www.drainsolutionplus.com/#website",
      "url": "https://www.drainsolutionplus.com/",
      "name": "Drain Solutions Plus",
      "publisher": {
        "@id": "https://www.drainsolutionplus.com/#organization"
      },
      "inLanguage": "en-US"
    },
    {
      "@type": "LocalBusiness",
      "@id": "https://www.drainsolutionplus.com/#organization",
      "name": "Drain Solutions Plus",
      "url": "https://www.drainsolutionplus.com/",
      "telephone": "+1-201-881-9622",
      "description": "Drain Solutions Plus provides residential and commercial drain, sewer, plumbing, leak detection, and related services throughout Northern New Jersey.",
      "image": "https://www.drainsolutionplus.com/wp-content/uploads/2024/01/drain-solutions-plus.webp",
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.drainsolutionplus.com/wp-content/uploads/2024/01/drain-solutions-plus.webp"
      },
      "address": {
        "@type": "PostalAddress",
        "postOfficeBoxNumber": "353",
        "addressLocality": "Hawthorne",
        "addressRegion": "NJ",
        "postalCode": "07507",
        "addressCountry": "US"
      },
      "areaServed": {
        "@type": "AdministrativeArea",
        "name": "Bergen County, New Jersey"
      }
    },
    {
      "@type": "Service",
      "@id": "https://www.drainsolutionplus.com/bergen-county-nj/#service",
      "name": "Drain Cleaning & Sewer Services in Bergen County, NJ",
      "serviceType": [
        "Residential Drain Cleaning",
        "Residential Drain Repair",
        "Commercial Drain Cleaning",
        "Commercial Drain Repair",
        "Faucet and Leak Repair",
        "Sewer and Drain Cleaning",
        "Toilet Clog Removal",
        "Tub and Bathtub Clog Removal",
        "Sink Clog Removal",
        "Sewer and Drain Repair",
        "Sewer and Drain Video Inspection",
        "Hydro Jetting",
        "Flush Valve Leak Repair",
        "Sump Pump Repair and Replacement",
        "Sewage Ejector Pump Repair and Replacement"
      ],
      "provider": {
        "@id": "https://www.drainsolutionplus.com/#organization"
      },
      "areaServed": {
        "@type": "AdministrativeArea",
        "name": "Bergen County, New Jersey"
      },
      "url": "https://www.drainsolutionplus.com/bergen-county-nj",
      "description": "Residential and commercial drain, sewer, plumbing, and pump services throughout Bergen County, New Jersey, including drain cleaning and repair, sewer cleaning and repair, video inspections, hydro jetting, fixture clog removal, leak repairs, sump pump services, and sewage ejector pump services."
    },
    {
      "@type": "WebPage",
      "@id": "https://www.drainsolutionplus.com/bergen-county-nj/#webpage",
      "url": "https://www.drainsolutionplus.com/bergen-county-nj",
      "name": "Drain Cleaning & Sewer Services Throughout Bergen County, NJ",
      "description": "Get residential and commercial drain cleaning, sewer repair, hydro jetting, video inspections and plumbing services throughout Bergen County, NJ.",
      "isPartOf": {
        "@id": "https://www.drainsolutionplus.com/#website"
      },
      "about": {
        "@id": "https://www.drainsolutionplus.com/bergen-county-nj/#service"
      },
      "publisher": {
        "@id": "https://www.drainsolutionplus.com/#organization"
      },
      "breadcrumb": {
        "@id": "https://www.drainsolutionplus.com/bergen-county-nj/#breadcrumb"
      },
      "inLanguage": "en-US"
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.drainsolutionplus.com/bergen-county-nj/#breadcrumb",
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
          "name": "Bergen County Drain & Sewer Services",
          "item": "https://www.drainsolutionplus.com/bergen-county-nj"
        }
      ]
    }
  ]
};

export default function BergenCountyLayout({
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