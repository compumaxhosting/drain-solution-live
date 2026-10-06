import type { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  title: 'Commercial Sewer Cleaning & Repair NJ | Drain Solutions Plus',
  description: 'Commercial sewer cleaning and sewer line repair in NJ, including clogs, backups, hydro jetting, pipe repair, replacement and tree root issues.',
  keywords: [
    'commercial sewer cleaning NJ',
    'sewer cleaning NJ',
    'sewer line cleaning NJ',
    'commercial sewer service NJ',
    'main sewer line clog NJ',
    'sewer backup cleanup NJ',
    'hydro jetting NJ',
    'sewer repair NJ',
    'sewer line repair NJ',
    'sewer pipe repair NJ',
    'sewer line replacement NJ',
    'trenchless sewer repair NJ',
    'tree root in sewer line NJ',
    'commercial sewer repair NJ',
    'Hawthorne NJ sewer services',
    'Northern NJ sewer services',
  ],
  authors: [{ name: 'Drain Solutions Plus' }],
  referrer: 'strict-origin-when-cross-origin',
  robots: {
    index: true,
    follow: true,
  },
  themeColor: '#ffffff',
  alternates: {
    canonical: 'https://www.drainsolutionplus.com/commercial-sewer-service',
  },
  openGraph: {
    type: 'website',
    url: 'https://www.drainsolutionplus.com/commercial-sewer-service',
    title: 'Commercial Sewer Cleaning & Repair NJ | Drain Solutions Plus',
    description: 'Commercial sewer cleaning and repair in NJ for line clogs, backups, hydro jetting, damaged pipes, replacements and tree root problems.',
    siteName: 'Drain Solutions Plus',
    images: [
      {
        url: '/images/client-images/slab-sewer-repair.webp',
        alt: 'Commercial sewer cleaning and sewer line repair services by Drain Solutions Plus in New Jersey',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Commercial Sewer Cleaning & Repair NJ | Drain Solutions Plus',
    description: 'Commercial sewer cleaning and repair in NJ for clogs, backups, hydro jetting, damaged pipes, replacements and tree root problems.',
    images: ['/images/client-images/slab-sewer-repair.webp'],
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
        '@type': 'Service',
        '@id': 'https://www.drainsolutionplus.com/commercial-sewer-service#service',
        'name': 'Commercial Sewer Cleaning & Repair',
        'url': 'https://www.drainsolutionplus.com/commercial-sewer-service',
        'serviceType': [
          'Commercial Sewer Cleaning',
          'Sewer Line Cleaning',
          'Commercial Sewer Repair',
          'Sewer Line Repair',
        ],
        'description': 'Commercial sewer cleaning and sewer line repair services for clogged, backed-up or damaged sewer systems, including sewer line cleaning, hydro jetting, pipe repair, sewer line replacement, trenchless repair and tree root problems.',
        'provider': {
          '@id': 'https://www.drainsolutionplus.com/#business',
        },
        'audience': {
          '@type': 'BusinessAudience',
          'audienceType': 'Commercial customers',
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
        'hasOfferCatalog': {
          '@type': 'OfferCatalog',
          'name': 'Commercial Sewer Services',
          'itemListElement': [
            {
              '@type': 'Offer',
              'itemOffered': {
                '@type': 'Service',
                'name': 'Sewer Line Cleaning',
                'serviceType': 'Sewer Cleaning',
              },
            },
            {
              '@type': 'Offer',
              'itemOffered': {
                '@type': 'Service',
                'name': 'Main Sewer Line Clog Service',
                'serviceType': 'Main Sewer Line Clog Removal',
              },
            },
            {
              '@type': 'Offer',
              'itemOffered': {
                '@type': 'Service',
                'name': 'Sewer Backup Cleanup',
                'serviceType': 'Sewer Backup Cleanup',
              },
            },
            {
              '@type': 'Offer',
              'itemOffered': {
                '@type': 'Service',
                'name': 'Hydro Jetting',
                'serviceType': 'Hydro Jetting',
              },
            },
            {
              '@type': 'Offer',
              'itemOffered': {
                '@type': 'Service',
                'name': 'Sewer Pipe Repair',
                'serviceType': 'Sewer Pipe Repair',
              },
            },
            {
              '@type': 'Offer',
              'itemOffered': {
                '@type': 'Service',
                'name': 'Sewer Line Replacement',
                'serviceType': 'Sewer Line Replacement',
              },
            },
            {
              '@type': 'Offer',
              'itemOffered': {
                '@type': 'Service',
                'name': 'Trenchless Sewer Repair',
                'serviceType': 'Trenchless Sewer Repair',
              },
            },
            {
              '@type': 'Offer',
              'itemOffered': {
                '@type': 'Service',
                'name': 'Tree Root Sewer Line Repair',
                'serviceType': 'Sewer Root Intrusion Repair',
              },
            },
          ],
        },
      },
      {
        '@type': 'WebPage',
        '@id': 'https://www.drainsolutionplus.com/commercial-sewer-service#webpage',
        'url': 'https://www.drainsolutionplus.com/commercial-sewer-service',
        'name': 'Commercial Sewer Cleaning & Repair NJ | Drain Solutions Plus',
        'description': 'Commercial sewer cleaning and sewer line repair for clogs, backups, hydro jetting, damaged pipes, replacements and tree root problems.',
        'isPartOf': {
          '@id': 'https://www.drainsolutionplus.com/#website',
        },
        'about': {
          '@id': 'https://www.drainsolutionplus.com/commercial-sewer-service#service',
        },
        'mainEntity': {
          '@id': 'https://www.drainsolutionplus.com/commercial-sewer-service#service',
        },
        'inLanguage': 'en-US',
      },
      {
        '@type': 'BreadcrumbList',
        '@id': 'https://www.drainsolutionplus.com/commercial-sewer-service#breadcrumb',
        'itemListElement': [
          {
            '@type': 'ListItem',
            'position': 1,
            'name': 'Home',
            'item': 'https://www.drainsolutionplus.com/',
          },
          {
            '@type': 'ListItem',
            'position': 2,
            'name': 'Our Services',
            'item': 'https://www.drainsolutionplus.com/our-services',
          },
          {
            '@type': 'ListItem',
            'position': 3,
            'name': 'Commercial Sewer Services',
            'item': 'https://www.drainsolutionplus.com/commercial-sewer-service',
          },
        ],
      },
      {
        '@type': 'Plumber',
        '@id': 'https://www.drainsolutionplus.com/#business',
        'name': 'Drain Solutions Plus',
        'url': 'https://www.drainsolutionplus.com/',
        'address': {
          '@type': 'PostalAddress',
          'addressLocality': 'Hawthorne',
          'addressRegion': 'NJ',
          'addressCountry': 'US',
        },
        'knowsAbout': [
          'Commercial sewer cleaning',
          'Sewer line cleaning',
          'Main sewer line clogs',
          'Sewer backup cleanup',
          'Hydro jetting',
          'Sewer pipe repair',
          'Sewer line replacement',
          'Trenchless sewer repair',
          'Tree root intrusion in sewer lines',
        ],
      },
      {
        '@type': 'WebSite',
        '@id': 'https://www.drainsolutionplus.com/#website',
        'url': 'https://www.drainsolutionplus.com/',
        'name': 'Drain Solutions Plus',
        'publisher': {
          '@id': 'https://www.drainsolutionplus.com/#business',
        },
        'inLanguage': 'en-US',
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