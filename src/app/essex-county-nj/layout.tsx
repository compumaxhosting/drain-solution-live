import type { Metadata, Viewport } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Expert Drain Cleaning & Sewer Services in Essex County, NJ",
  description: "Drain cleaning and sewer services in Essex County, NJ for homes and businesses, including drain repair, hydro jetting, inspections and pump services.",
  keywords: [
    "drain cleaning Essex County NJ",
    "sewer services Essex County NJ",
    "drain repair Essex County NJ",
    "sewer repair Essex County NJ",
    "hydro jetting Essex County NJ",
    "sewer video inspection Essex County NJ",
    "plumbing services Essex County NJ",
    "sump pump repair Essex County NJ",
  ],
  authors: [{ name: "Drain Solutions Plus" }],
  metadataBase: new URL("https://www.drainsolutionplus.com"),
  alternates: {
    canonical: "/essex-county-nj",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    title: "Expert Drain Cleaning & Sewer Services in Essex County, NJ",
    description: "Residential and commercial drain, sewer, plumbing and pump services throughout Essex County, NJ from Drain Solutions Plus.",
    url: "https://www.drainsolutionplus.com/essex-county-nj",
    siteName: "Drain Solutions Plus",
    locale: "en_US",
    images: [
      {
        url: "/images/njj.webp",
        alt: "Northern New Jersey service area map showing coverage that includes Essex County",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Expert Drain Cleaning & Sewer Services in Essex County, NJ",
    description: "Residential and commercial drain, sewer, plumbing and pump services throughout Essex County, NJ.",
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
      "inLanguage": "en-US",
      "publisher": {
        "@id": "https://www.drainsolutionplus.com/#business"
      }
    },
    {
      "@type": "LocalBusiness",
      "@id": "https://www.drainsolutionplus.com/#business",
      "name": "Drain Solutions Plus",
      "url": "https://www.drainsolutionplus.com/",
      "telephone": "+1-201-881-9622",
      "description": "Drain Solutions Plus provides residential and commercial drain, sewer, plumbing, leak repair, hydro jetting, video inspection, sump pump, and sewage ejector pump services throughout Northern New Jersey.",
      "image": "https://www.drainsolutionplus.com/wp-content/uploads/2024/01/drain-solutions-plus.webp",
      "logo": {
        "@type": "ImageObject",
        "@id": "https://www.drainsolutionplus.com/#logo",
        "url": "https://www.drainsolutionplus.com/wp-content/uploads/2024/01/drain-solutions-plus.webp"
      },
      "priceRange": "$$",
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
        "name": "Essex County, New Jersey"
      }
    },
    {
      "@type": "Service",
      "@id": "https://www.drainsolutionplus.com/essex-county-nj/#service",
      "name": "Drain, Sewer & Plumbing Services in Essex County, NJ",
      "url": "https://www.drainsolutionplus.com/essex-county-nj",
      "description": "Residential and commercial drain, sewer, plumbing, leak repair, hydro jetting, video inspection, sump pump, and sewage ejector pump services throughout Essex County, New Jersey.",
      "provider": {
        "@id": "https://www.drainsolutionplus.com/#business"
      },
      "areaServed": {
        "@type": "AdministrativeArea",
        "name": "Essex County, New Jersey"
      },
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
      ]
    },
    {
      "@type": "WebPage",
      "@id": "https://www.drainsolutionplus.com/essex-county-nj/#webpage",
      "url": "https://www.drainsolutionplus.com/essex-county-nj",
      "name": "Expert Drain Cleaning & Sewer Services in Essex County, NJ",
      "description": "Drain cleaning and sewer services in Essex County, NJ for homes and businesses, including drain repair, hydro jetting, inspections and pump services.",
      "inLanguage": "en-US",
      "isPartOf": {
        "@id": "https://www.drainsolutionplus.com/#website"
      },
      "about": {
        "@id": "https://www.drainsolutionplus.com/essex-county-nj/#service"
      },
      "publisher": {
        "@id": "https://www.drainsolutionplus.com/#business"
      },
      "breadcrumb": {
        "@id": "https://www.drainsolutionplus.com/essex-county-nj/#breadcrumb"
      }
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.drainsolutionplus.com/essex-county-nj/#breadcrumb",
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
          "name": "Essex County Drain & Sewer Services",
          "item": "https://www.drainsolutionplus.com/essex-county-nj"
        }
      ]
    }
  ]
};

export default function EssexCountyLayout({
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