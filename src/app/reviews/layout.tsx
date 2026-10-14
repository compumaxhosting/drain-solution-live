import type { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Drain Solution Plus Reviews | Drain Service Reviews in Northern NJ",
  description:
    "Read Drain Solution Plus reviews from customers in Northern NJ and learn what homeowners say about our drain and sewer services.",
  authors: [{ name: "Drain Solution Plus" }],
  keywords: [
    "Drain Solution Plus reviews",
    "drain service reviews Northern NJ",
    "drain cleaning reviews",
    "sewer service reviews",
    "plumbing reviews Northern New Jersey",
    "customer reviews Drain Solution Plus",
  ],
  alternates: {
    canonical: "https://drainsolutionplus.com/reviews",
  },
  robots: {
    index: true,
    follow: true,
  },
  other: {
    "theme-color": "#ffffff",
    "referrer": "strict-origin-when-cross-origin",
  },
  openGraph: {
    type: "website",
    title: "Drain Solution Plus Reviews | Drain Service Reviews in Northern NJ",
    description:
      "Read customer reviews of Drain Solution Plus and see what homeowners in Northern NJ say about our drain and sewer services.",
    url: "https://drainsolutionplus.com/reviews",
    siteName: "Drain Solution Plus",
    images: [
      {
        url: "https://drainsolutionplus.com/images/njj.webp",
        alt: "Drain Solution Plus customer reviews and drain service in Northern New Jersey",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Drain Solution Plus Reviews | Drain Service Reviews in Northern NJ",
    description:
      "Read customer reviews of Drain Solution Plus and see what homeowners in Northern NJ say about our drain and sewer services.",
    images: ["https://drainsolutionplus.com/placeholder-og-image.jpg"],
  },
};

const jsonLdSchema = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  "@id": "https://drainsolutionplus.com/reviews#webpage",
  "url": "https://drainsolutionplus.com/reviews",
  "name": "Drain Solution Plus Reviews",
  "headline": "Drain Solution Plus Reviews | Customer Experiences in Northern NJ",
  "description": "Read customer reviews and experiences for Drain Solution Plus, providing drain and sewer services throughout Northern New Jersey.",
  "isPartOf": {
    "@type": "WebSite",
    "@id": "https://drainsolutionplus.com/#website",
    "name": "Drain Solution Plus",
    "url": "https://drainsolutionplus.com/"
  },
  "about": {
    "@type": "LocalBusiness",
    "@id": "https://drainsolutionplus.com/#localbusiness",
    "name": "Drain Solution Plus",
    "url": "https://drainsolutionplus.com/",
    "telephone": "+1-201-881-9622",
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
    ]
  },
  "mainEntity": {
    "@type": "ItemList",
    "@id": "https://drainsolutionplus.com/reviews#review-list",
    "name": "Drain Solution Plus Customer Reviews",
    "itemListOrder": "https://schema.org/ItemListUnordered"
  },
  "publisher": {
    "@type": "Organization",
    "@id": "https://drainsolutionplus.com/#organization",
    "name": "Drain Solution Plus",
    "url": "https://drainsolutionplus.com/"
  }
};

export default function ReviewsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdSchema) }}
        />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}