import type { Metadata, Viewport } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Drain Cleaning & Sewer Services in Hudson County, NJ",
  description: "Get residential and commercial drain cleaning, sewer repair, hydro jetting, video inspections, plumbing and pump services throughout Hudson County, NJ.",
  keywords: [
    "drain cleaning Hudson County NJ",
    "sewer repair Hudson County NJ",
    "drain repair Hudson County NJ",
    "hydro jetting Hudson County NJ",
    "sewer cleaning Hudson County NJ",
    "plumbing services Hudson County NJ",
  ],
  authors: [{ name: "Drain Solutions Plus" }],
  metadataBase: new URL("https://www.drainsolutionplus.com"),
  alternates: {
    canonical: "/hudson-county-nj",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    title: "Drain Cleaning & Sewer Services in Hudson County, NJ",
    description: "Residential and commercial drain, sewer, plumbing and pump services throughout Hudson County, NJ from Drain Solutions Plus.",
    url: "https://www.drainsolutionplus.com/hudson-county-nj",
    siteName: "Drain Solutions Plus",
    locale: "en_US",
    images: [
      {
        url: "/images/njj.webp",
        alt: "Northern New Jersey service area map showing coverage that includes Hudson County",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Drain Cleaning & Sewer Services in Hudson County, NJ",
    description: "Residential and commercial drain, sewer, plumbing and pump services throughout Hudson County, NJ.",
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
      "areaServed": [
        {
          "@type": "AdministrativeArea",
          "name": "Hudson County, New Jersey"
        },
        {
          "@type": "City",
          "name": "Bayonne",
          "containedInPlace": {
            "@type": "AdministrativeArea",
            "name": "Hudson County, New Jersey"
          }
        },
        {
          "@type": "City",
          "name": "East Newark",
          "containedInPlace": {
            "@type": "AdministrativeArea",
            "name": "Hudson County, New Jersey"
          }
        },
        {
          "@type": "City",
          "name": "Guttenberg",
          "containedInPlace": {
            "@type": "AdministrativeArea",
            "name": "Hudson County, New Jersey"
          }
        },
        {
          "@type": "City",
          "name": "Harrison",
          "containedInPlace": {
            "@type": "AdministrativeArea",
            "name": "Hudson County, New Jersey"
          }
        },
        {
          "@type": "City",
          "name": "Hoboken",
          "containedInPlace": {
            "@type": "AdministrativeArea",
            "name": "Hudson County, New Jersey"
          }
        },
        {
          "@type": "City",
          "name": "Jersey City",
          "containedInPlace": {
            "@type": "AdministrativeArea",
            "name": "Hudson County, New Jersey"
          }
        },
        {
          "@type": "City",
          "name": "Kearny",
          "containedInPlace": {
            "@type": "AdministrativeArea",
            "name": "Hudson County, New Jersey"
          }
        },
        {
          "@type": "City",
          "name": "North Bergen",
          "containedInPlace": {
            "@type": "AdministrativeArea",
            "name": "Hudson County, New Jersey"
          }
        },
        {
          "@type": "City",
          "name": "Secaucus",
          "containedInPlace": {
            "@type": "AdministrativeArea",
            "name": "Hudson County, New Jersey"
          }
        },
        {
          "@type": "City",
          "name": "Union City",
          "containedInPlace": {
            "@type": "AdministrativeArea",
            "name": "Hudson County, New Jersey"
          }
        },
        {
          "@type": "City",
          "name": "Weehawken",
          "containedInPlace": {
            "@type": "AdministrativeArea",
            "name": "Hudson County, New Jersey"
          }
        },
        {
          "@type": "City",
          "name": "West New York",
          "containedInPlace": {
            "@type": "AdministrativeArea",
            "name": "Hudson County, New Jersey"
          }
        }
      ]
    },
    {
      "@type": "Service",
      "@id": "https://www.drainsolutionplus.com/hudson-county-nj/#service",
      "name": "Drain, Sewer & Plumbing Services in Hudson County, NJ",
      "url": "https://www.drainsolutionplus.com/hudson-county-nj",
      "description": "Residential and commercial drain, sewer, plumbing, leak repair, hydro jetting, video inspection, sump pump, and sewage ejector pump services throughout Hudson County, New Jersey.",
      "provider": {
        "@id": "https://www.drainsolutionplus.com/#business"
      },
      "areaServed": {
        "@type": "AdministrativeArea",
        "name": "Hudson County, New Jersey"
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
      "@id": "https://www.drainsolutionplus.com/hudson-county-nj/#webpage",
      "url": "https://www.drainsolutionplus.com/hudson-county-nj",
      "name": "Drain Cleaning & Sewer Services Throughout Hudson County, NJ",
      "description": "Get residential and commercial drain cleaning, sewer repair, hydro jetting, video inspections, plumbing and pump services throughout Hudson County, NJ.",
      "inLanguage": "en-US",
      "isPartOf": {
        "@id": "https://www.drainsolutionplus.com/#website"
      },
      "about": {
        "@id": "https://www.drainsolutionplus.com/hudson-county-nj/#service"
      },
      "publisher": {
        "@id": "https://www.drainsolutionplus.com/#business"
      },
      "breadcrumb": {
        "@id": "https://www.drainsolutionplus.com/hudson-county-nj/#breadcrumb"
      }
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.drainsolutionplus.com/hudson-county-nj/#breadcrumb",
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
          "name": "Hudson County Drain & Sewer Services",
          "item": "https://www.drainsolutionplus.com/hudson-county-nj"
        }
      ]
    }
  ]
};

export default function HudsonCountyLayout({
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