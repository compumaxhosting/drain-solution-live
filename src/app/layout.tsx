import type { Metadata, Viewport } from "next";
import { Poppins } from "next/font/google";
import React from "react";
import { FixedBottomBar } from "@/components/layout/FixedBottomBar";
import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import { ScrollToTop } from "@/components/layout/ScrollToTop";
import TopBar from "@/components/layout/TopBar";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Drain Cleaning NJ | Commercial Sewer & Drain Services | Drain Solutions Plus",
  description: "Professional commercial drain cleaning NJ, sewer cleaning, sewer repair, camera inspections and emergency drain services for businesses across Northern New Jersey.",
  keywords: [
    "drain cleaning NJ",
    "sewer cleaning NJ",
    "sewer line repair NJ",
    "sewer camera inspection NJ",
    "commercial drain cleaning NJ",
    "commercial sewer cleaning",
    "emergency drain cleaning NJ",
    "sewer line cleaning",
    "hydro jetting",
    "sewer pipe repair",
    "drain camera inspection",
  ],
  authors: [{ name: "Drain Solutions Plus" }],
  metadataBase: new URL("https://www.drainsolutionplus.com"),
  icons: {
    icon: "/images/favicon.webp",
  },
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    title: "Drain Cleaning NJ | Commercial Sewer & Drain Services | Drain Solutions Plus",
    description: "Commercial drain cleaning, sewer cleaning, sewer repair, camera inspections and emergency drain services throughout Northern New Jersey.",
    url: "https://www.drainsolutionplus.com/",
    siteName: "Drain Solutions Plus",
    locale: "en_US",
    images: [
      {
        url: "/images/client-images/drain-pipe-video-inspection.webp",
        alt: "Technician performing a sewer pipe video inspection",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Drain Cleaning NJ | Commercial Sewer & Drain Services",
    description: "Commercial drain cleaning, sewer cleaning, sewer repair, camera inspections and emergency drain services across Northern New Jersey.",
    images: ["/images/client-images/drain-pipe-video-inspection.webp"],
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
      "@type": "Plumber",
      "@id": "https://www.drainsolutionplus.com/#business",
      "name": "Drain Solutions Plus",
      "url": "https://www.drainsolutionplus.com/",
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.drainsolutionplus.com/path-to-your-logo.webp"
      },
      "image": "https://www.drainsolutionplus.com/path-to-your-business-image.webp",
      "description": "Drain Solutions Plus provides commercial and residential drain cleaning, sewer cleaning, sewer repair, video sewer inspections, toilet repair, faucet and leak repair, frozen pipe repair, and emergency drain services throughout Northern New Jersey.",
      "telephone": "YOUR-VERIFIED-PHONE",
      "priceRange": "$$",
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
        "Commercial Drain Cleaning",
        "Commercial Sewer Cleaning",
        "Sewer Line Repair",
        "Sewer Camera Inspection",
        "Hydro Jetting",
        "Drain Cleaning",
        "Toilet Repair",
        "Faucet and Leak Repair",
        "Frozen Pipe Repair",
        "Emergency Drain Services"
      ],
      "sameAs": [
        "YOUR-VERIFIED-GOOGLE-BUSINESS-PROFILE-URL"
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
    },
    {
      "@type": "WebPage",
      "@id": "https://www.drainsolutionplus.com/#webpage",
      "url": "https://www.drainsolutionplus.com/",
      "name": "Drain Cleaning NJ | Commercial Sewer & Drain Services | Drain Solutions Plus",
      "description": "Professional commercial drain cleaning, sewer cleaning, sewer repair, camera inspections and emergency drain services throughout Northern New Jersey.",
      "isPartOf": {
        "@id": "https://www.drainsolutionplus.com/#website"
      },
      "about": {
        "@id": "https://www.drainsolutionplus.com/#business"
      },
      "primaryImageOfPage": {
        "@type": "ImageObject",
        "url": "https://www.drainsolutionplus.com/path-to-your-business-image.webp"
      },
      "inLanguage": "en-US"
    },
    {
      "@type": "Service",
      "@id": "https://www.drainsolutionplus.com/#commercial-drain-cleaning",
      "name": "Commercial Drain Cleaning",
      "serviceType": "Commercial Drain Cleaning",
      "provider": {
        "@id": "https://www.drainsolutionplus.com/#business"
      },
      "areaServed": {
        "@type": "State",
        "name": "New Jersey"
      },
      "description": "Commercial drain cleaning services for businesses experiencing clogged, slow, or backed-up drainage systems."
    },
    {
      "@type": "Service",
      "@id": "https://www.drainsolutionplus.com/#sewer-cleaning",
      "name": "Sewer Cleaning",
      "serviceType": "Sewer Cleaning",
      "provider": {
        "@id": "https://www.drainsolutionplus.com/#business"
      },
      "areaServed": {
        "@type": "State",
        "name": "New Jersey"
      },
      "description": "Professional sewer cleaning services for commercial and residential properties throughout Northern New Jersey."
    },
    {
      "@type": "Service",
      "@id": "https://www.drainsolutionplus.com/#sewer-repair",
      "name": "Sewer Line Repair",
      "serviceType": "Sewer Line Repair",
      "provider": {
        "@id": "https://www.drainsolutionplus.com/#business"
      },
      "areaServed": {
        "@type": "State",
        "name": "New Jersey"
      },
      "description": "Sewer line repair services for damaged, blocked, or malfunctioning sewer pipes."
    },
    {
      "@type": "Service",
      "@id": "https://www.drainsolutionplus.com/#sewer-camera-inspection",
      "name": "Sewer Camera Inspection",
      "serviceType": "Sewer Camera Inspection",
      "provider": {
        "@id": "https://www.drainsolutionplus.com/#business"
      },
      "areaServed": {
        "@type": "State",
        "name": "New Jersey"
      },
      "description": "Video sewer camera inspections to identify blockages, pipe damage, root intrusion, and other sewer line problems."
    },
    {
      "@type": "Service",
      "@id": "https://www.drainsolutionplus.com/#emergency-drain-service",
      "name": "Emergency Drain Service",
      "serviceType": "Emergency Drain and Sewer Service",
      "provider": {
        "@id": "https://www.drainsolutionplus.com/#business"
      },
      "areaServed": {
        "@type": "State",
        "name": "New Jersey"
      },
      "description": "Emergency drain and sewer services for urgent clogs, backups, and drainage problems."
    }
  ]
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${poppins.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col pb-16 md:pb-0">
        <TopBar />
        <Header />
        {children}
        <Footer />
        <FixedBottomBar
          phoneNumber="+12018819622"
          servicesHref="/our-services"
          locationHref="https://share.google/bfA0LuV5SfVzdp57H"
        />
        <ScrollToTop />
      </body>
    </html>
  );
}