import type { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  title: 'About Drain Solutions Plus | Northern NJ Drain & Sewer Specialists',
  description: 'Meet Drain Solutions Plus in Hawthorne, NJ, serving businesses and homeowners with drain cleaning, sewer repair, inspections and emergency services across Northern NJ.',
  keywords: [
    'Drain Solutions Plus',
    'Northern NJ drain services',
    'Hawthorne NJ drain company',
    'drain cleaning NJ',
    'commercial drain services NJ',
    'sewer repair NJ',
    'sewer inspection NJ',
    'emergency drain service NJ',
  ],
  authors: [{ name: 'Drain Solutions Plus' }],
  referrer: 'strict-origin-when-cross-origin',
  robots: {
    index: true,
    follow: true,
  },
  themeColor: '#ffffff',
  alternates: {
    canonical: 'https://www.drainsolutionplus.com/about-us',
  },
  openGraph: {
    type: 'website',
    url: 'https://www.drainsolutionplus.com/about-us',
    title: 'About Drain Solutions Plus | Northern NJ Drain & Sewer Specialists',
    description: 'Discover Drain Solutions Plus in Hawthorne, NJ and our approach to commercial and residential drain, sewer, inspection and emergency services across Northern NJ.',
    siteName: 'Drain Solutions Plus',
    images: [
      {
        url: '/images/client-images/commercial-drain-repair-1.webp',
        alt: 'Drain technicians completing a commercial drain repair',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About Drain Solutions Plus | Northern NJ Drain & Sewer Specialists',
    description: 'Discover Drain Solutions Plus in Hawthorne, NJ and our commercial and residential drain, sewer, inspection and emergency services across Northern NJ.',
    images: ['/images/client-images/commercial-drain-repair-1.webp'],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Plumber',
        '@id': 'https://www.drainsolutionplus.com/#organization',
        'name': 'Drain Solutions Plus',
        'url': 'https://www.drainsolutionplus.com/',
        'description': 'Drain Solutions Plus provides commercial and residential drain cleaning, sewer cleaning, sewer repair, video sewer inspections, toilet repair, faucet and leak repair, frozen pipe repair, and emergency drain services in Northern New Jersey.',
        'address': {
          '@type': 'PostalAddress',
          'addressLocality': 'Hawthorne',
          'addressRegion': 'NJ',
          'addressCountry': 'US',
        },
        'areaServed': [
          {
            '@type': 'AdministrativeArea',
            'name': 'Bergen County, New Jersey',
            'containsPlace': [
              { '@type': 'City', 'name': 'Hackensack' },
              { '@type': 'City', 'name': 'Paramus' },
              { '@type': 'City', 'name': 'Teaneck' },
              { '@type': 'City', 'name': 'Fair Lawn' },
              { '@type': 'City', 'name': 'Ridgewood' },
              { '@type': 'City', 'name': 'Englewood' },
              { '@type': 'City', 'name': 'Lyndhurst' },
              { '@type': 'City', 'name': 'Rutherford' },
            ],
          },
          {
            '@type': 'AdministrativeArea',
            'name': 'Essex County, New Jersey',
            'containsPlace': [
              { '@type': 'City', 'name': 'Newark' },
              { '@type': 'City', 'name': 'Bloomfield' },
              { '@type': 'City', 'name': 'Montclair' },
              { '@type': 'City', 'name': 'Belleville' },
              { '@type': 'City', 'name': 'Nutley' },
              { '@type': 'City', 'name': 'West Orange' },
              { '@type': 'City', 'name': 'Livingston' },
            ],
          },
          {
            '@type': 'AdministrativeArea',
            'name': 'Hudson County, New Jersey',
            'containsPlace': [
              { '@type': 'City', 'name': 'Jersey City' },
              { '@type': 'City', 'name': 'Hoboken' },
              { '@type': 'City', 'name': 'Bayonne' },
              { '@type': 'City', 'name': 'Union City' },
              { '@type': 'City', 'name': 'North Bergen' },
              { '@type': 'City', 'name': 'Secaucus' },
              { '@type': 'City', 'name': 'Kearny' },
            ],
          },
          {
            '@type': 'AdministrativeArea',
            'name': 'Passaic County, New Jersey',
            'containsPlace': [
              { '@type': 'City', 'name': 'Clifton' },
              { '@type': 'City', 'name': 'Paterson' },
              { '@type': 'City', 'name': 'Passaic' },
              { '@type': 'City', 'name': 'Wayne' },
              { '@type': 'City', 'name': 'Hawthorne' },
              { '@type': 'City', 'name': 'Totowa' },
              { '@type': 'City', 'name': 'Little Falls' },
            ],
          },
        ],
        'knowsAbout': [
          'Commercial drain cleaning',
          'Residential drain cleaning',
          'Sewer cleaning',
          'Sewer line repair',
          'Sewer camera inspection',
          'Drain camera inspection',
          'Hydro jetting',
          'Toilet repair',
          'Faucet repair',
          'Water leak repair',
          'Frozen pipe repair',
          'Emergency drain services',
        ],
      },
      {
        '@type': 'WebSite',
        '@id': 'https://www.drainsolutionplus.com/#website',
        'url': 'https://www.drainsolutionplus.com/',
        'name': 'Drain Solutions Plus',
        'publisher': {
          '@id': 'https://www.drainsolutionplus.com/#organization',
        },
        'inLanguage': 'en-US',
      },
      {
        '@type': 'AboutPage',
        '@id': 'https://www.drainsolutionplus.com/about-us#webpage',
        'url': 'https://www.drainsolutionplus.com/about-us',
        'name': 'About Drain Solutions Plus',
        'description': 'Learn about Drain Solutions Plus and its commercial and residential drain, sewer, inspection, repair, and emergency services in Northern New Jersey.',
        'isPartOf': {
          '@id': 'https://www.drainsolutionplus.com/#website',
        },
        'about': {
          '@id': 'https://www.drainsolutionplus.com/#organization',
        },
        'mainEntity': {
          '@id': 'https://www.drainsolutionplus.com/#organization',
        },
        'inLanguage': 'en-US',
      },
      {
        '@type': 'Place',
        '@id': 'https://www.drainsolutionplus.com/#hawthorne-office',
        'name': 'Drain Solutions Plus - Hawthorne, NJ',
        'address': {
          '@type': 'PostalAddress',
          'addressLocality': 'Hawthorne',
          'addressRegion': 'NJ',
          'addressCountry': 'US',
        },
      },
      {
        '@type': 'Service',
        '@id': 'https://www.drainsolutionplus.com/#commercial-drain-cleaning',
        'name': 'Commercial Drain Cleaning',
        'serviceType': 'Commercial Drain Cleaning',
        'provider': {
          '@id': 'https://www.drainsolutionplus.com/#organization',
        },
        'areaServed': {
          '@type': 'State',
          'name': 'New Jersey',
        },
      },
      {
        '@type': 'Service',
        '@id': 'https://www.drainsolutionplus.com/#sewer-services',
        'name': 'Sewer Cleaning and Repair',
        'serviceType': 'Sewer Cleaning and Sewer Line Repair',
        'provider': {
          '@id': 'https://www.drainsolutionplus.com/#organization',
        },
        'areaServed': {
          '@type': 'State',
          'name': 'New Jersey',
        },
      },
      {
        '@type': 'Service',
        '@id': 'https://www.drainsolutionplus.com/#video-inspection',
        'name': 'Sewer Camera Inspection',
        'serviceType': 'Sewer Camera Inspection',
        'provider': {
          '@id': 'https://www.drainsolutionplus.com/#organization',
        },
        'areaServed': {
          '@type': 'State',
          'name': 'New Jersey',
        },
      },
    ],
  };

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