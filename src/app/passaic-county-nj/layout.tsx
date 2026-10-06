import type { Metadata, Viewport } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Passaic County, NJ Drain Cleaning & Sewer Services",
  description: "Drain cleaning and sewer services for homes and businesses throughout Passaic County, NJ. Call Drain Solutions Plus for service.",
  keywords: [
    "drain cleaning Passaic County NJ",
    "sewer cleaning Passaic County NJ",
    "drain repair Passaic County NJ",
    "sewer repair Passaic County NJ",
    "hydro jetting Passaic County NJ",
  ],
  authors: [{ name: "Drain Solutions Plus" }],
  metadataBase: new URL("https://www.drainsolutionplus.com"),
  alternates: {
    canonical: "/passaic-county-nj",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    title: "Passaic County, NJ Drain Cleaning & Sewer Services",
    description: "Drain cleaning and sewer services for residential and commercial properties throughout Passaic County, NJ.",
    url: "https://www.drainsolutionplus.com/passaic-county-nj",
    siteName: "Drain Solutions Plus",
    locale: "en_US",
    images: [
      {
        url: "/images/njj.webp",
        alt: "Northern New Jersey service area map showing coverage that includes Passaic County",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Passaic County, NJ Drain Cleaning & Sewer Services",
    description: "Drain cleaning and sewer services for homes and businesses throughout Passaic County, NJ.",
    images: ["/images/njj.webp"],
  },
  other: {
    referrer: "strict-origin-when-cross-origin",
  },
};

// Extracted to comply with Next.js Viewport API rules
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
        "@id": "https://www.drainsolutionplus.com/#business"
      },
      "inLanguage": "en-US"
    },
    {
      "@type": "LocalBusiness",
      "@id": "https://www.drainsolutionplus.com/#business",
      "name": "Drain Solutions Plus",
      "url": "https://www.drainsolutionplus.com/",
      "telephone": "+1-201-881-9622",
      "description": "Drain Solutions Plus provides residential and commercial drain cleaning, drain repair, sewer cleaning, sewer repair, video sewer inspections, high-pressure water jetting, and related plumbing services throughout Northern New Jersey.",
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
      "areaServed": [
        {
          "@type": "AdministrativeArea",
          "name": "Passaic County, New Jersey"
        },
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
        }
      ]
    },
    {
      "@type": "Service",
      "@id": "https://www.drainsolutionplus.com/passaic-county-nj/#service",
      "name": "Drain Cleaning & Sewer Services in Passaic County, NJ",
      "serviceType": [
        "Drain Cleaning",
        "Drain Repair",
        "Sewer Cleaning",
        "Sewer Repair",
        "Sewer Line Replacement",
        "Hydro Jetting",
        "Video Sewer Inspection"
      ],
      "provider": {
        "@id": "https://www.drainsolutionplus.com/#business"
      },
      "areaServed": {
        "@type": "AdministrativeArea",
        "name": "Passaic County, New Jersey"
      },
      "url": "https://www.drainsolutionplus.com/passaic-county-nj",
      "description": "Residential and commercial drain cleaning and sewer services throughout Passaic County, NJ, including drain repair, sewer repair, high-pressure water jetting, sewer line replacement, and main line video inspections."
    },
    {
      "@type": "WebPage",
      "@id": "https://www.drainsolutionplus.com/passaic-county-nj/#webpage",
      "url": "https://www.drainsolutionplus.com/passaic-county-nj",
      "name": "Drain Cleaning & Sewer Services Throughout Passaic County, NJ",
      "description": "Drain cleaning and sewer services for residential and commercial properties throughout Passaic County, NJ.",
      "isPartOf": {
        "@id": "https://www.drainsolutionplus.com/#website"
      },
      "about": {
        "@id": "https://www.drainsolutionplus.com/passaic-county-nj/#service"
      },
      "publisher": {
        "@id": "https://www.drainsolutionplus.com/#business"
      },
      "breadcrumb": {
        "@id": "https://www.drainsolutionplus.com/passaic-county-nj/#breadcrumb"
      },
      "inLanguage": "en-US"
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.drainsolutionplus.com/passaic-county-nj/#breadcrumb",
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
          "name": "Passaic County Drain & Sewer Services",
          "item": "https://www.drainsolutionplus.com/passaic-county-nj"
        }
      ]
    }
  ]
};

export default function PassaicCountyLayout({
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