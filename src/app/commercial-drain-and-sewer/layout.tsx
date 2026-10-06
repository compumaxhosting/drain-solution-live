import type { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  title: 'Commercial Drain Cleaning NJ | Clogged Drain Services | Drain Solutions Plus',
  description: 'Commercial drain cleaning in NJ for clogged kitchen, bathroom, laundry and floor drains. Serving Hawthorne and businesses across Northern New Jersey.',
  keywords: [
    'commercial drain cleaning NJ',
    'drain cleaning NJ',
    'clogged drain cleaning NJ',
    'commercial clogged drain cleaning',
    'kitchen drain cleaning NJ',
    'bathroom drain cleaning NJ',
    'laundry drain cleaning NJ',
    'floor drain cleaning NJ',
    'commercial drain service NJ',
    'Hawthorne NJ drain cleaning',
    'Northern NJ commercial drain cleaning',
    'Hackensack NJ',
    'Paramus NJ',
    'Teaneck NJ',
    'Fair Lawn NJ',
    'Ridgewood NJ',
    'Englewood NJ',
    'Lyndhurst NJ',
    'Rutherford NJ',
    'Newark NJ',
    'Bloomfield NJ',
    'Montclair NJ',
    'Belleville NJ',
    'Nutley NJ',
    'West Orange NJ',
    'Livingston NJ',
    'Jersey City NJ',
    'Hoboken NJ',
    'Bayonne NJ',
    'Union City NJ',
    'North Bergen NJ',
    'Secaucus NJ',
    'Kearny NJ',
    'Clifton NJ',
    'Paterson NJ',
    'Passaic NJ',
    'Wayne NJ',
    'Hawthorne NJ',
    'Totowa NJ',
    'Little Falls NJ',
  ],
  authors: [{ name: 'Drain Solutions Plus' }],
  referrer: 'strict-origin-when-cross-origin',
  robots: {
    index: true,
    follow: true,
  },
  themeColor: '#ffffff',
  alternates: {
    canonical: 'https://www.drainsolutionplus.com/commercial-drain-and-sewer',
  },
  openGraph: {
    type: 'website',
    url: 'https://www.drainsolutionplus.com/commercial-drain-and-sewer',
    title: 'Commercial Drain Cleaning NJ | Clogged Drain Services | Drain Solutions Plus',
    description: 'Professional commercial drain cleaning for clogged kitchen, bathroom, laundry and floor drains in Hawthorne and across Northern New Jersey.',
    siteName: 'Drain Solutions Plus',
    images: [
      {
        url: '/images/client-images/iron-sewer-replaced-with-pvc1.webp',
        alt: 'Commercial sewer pipe replacement with new PVC piping',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Commercial Drain Cleaning NJ | Clogged Drain Services',
    description: 'Commercial drain cleaning for clogged kitchen, bathroom, laundry and floor drains in Hawthorne and throughout Northern New Jersey.',
    images: ['/images/client-images/iron-sewer-replaced-with-pvc1.webp'],
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
        '@id': 'https://www.drainsolutionplus.com/commercial-drain-and-sewer#service',
        'name': 'Commercial Drain Cleaning',
        'alternateName': [
          'Commercial Clogged Drain Cleaning',
          'Commercial Drain Service',
          'Commercial Kitchen Drain Cleaning',
          'Commercial Floor Drain Cleaning',
        ],
        'url': 'https://www.drainsolutionplus.com/commercial-drain-and-sewer',
        'serviceType': 'Commercial Drain Cleaning',
        'description': 'Commercial drain cleaning for clogged and slow kitchen, bathroom, laundry and floor drains. Drain Solutions Plus serves businesses throughout Northern New Jersey from its Hawthorne, NJ office.',
        'provider': {
          '@id': 'https://www.drainsolutionplus.com/#business',
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
        'audience': {
          '@type': 'BusinessAudience',
          'audienceType': 'Commercial customers',
        },
        'hasOfferCatalog': {
          '@type': 'OfferCatalog',
          'name': 'Commercial Drain Cleaning Services',
          'itemListElement': [
            {
              '@type': 'Offer',
              'itemOffered': {
                '@type': 'Service',
                'name': 'Commercial Clogged Drain Cleaning',
                'serviceType': 'Clogged Drain Cleaning',
              },
            },
            {
              '@type': 'Offer',
              'itemOffered': {
                '@type': 'Service',
                'name': 'Commercial Kitchen Drain Cleaning',
                'serviceType': 'Kitchen Drain Cleaning',
              },
            },
            {
              '@type': 'Offer',
              'itemOffered': {
                '@type': 'Service',
                'name': 'Commercial Bathroom Drain Cleaning',
                'serviceType': 'Bathroom Drain Cleaning',
              },
            },
            {
              '@type': 'Offer',
              'itemOffered': {
                '@type': 'Service',
                'name': 'Commercial Laundry Drain Cleaning',
                'serviceType': 'Laundry Drain Cleaning',
              },
            },
            {
              '@type': 'Offer',
              'itemOffered': {
                '@type': 'Service',
                'name': 'Commercial Floor Drain Cleaning',
                'serviceType': 'Floor Drain Cleaning',
              },
            },
          ],
        },
      },
      {
        '@type': 'WebPage',
        '@id': 'https://www.drainsolutionplus.com/commercial-drain-and-sewer#webpage',
        'url': 'https://www.drainsolutionplus.com/commercial-drain-and-sewer',
        'name': 'Commercial Drain Cleaning NJ | Clogged Drain Services',
        'description': 'Commercial drain cleaning for clogged kitchen, bathroom, laundry and floor drains in Hawthorne and throughout Northern New Jersey.',
        'isPartOf': {
          '@id': 'https://www.drainsolutionplus.com/#website',
        },
        'about': {
          '@id': 'https://www.drainsolutionplus.com/commercial-drain-and-sewer#service',
        },
        'mainEntity': {
          '@id': 'https://www.drainsolutionplus.com/commercial-drain-and-sewer#service',
        },
        'inLanguage': 'en-US',
      },
      {
        '@type': 'BreadcrumbList',
        '@id': 'https://www.drainsolutionplus.com/commercial-drain-and-sewer#breadcrumb',
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
            'name': 'Commercial Drain Cleaning',
            'item': 'https://www.drainsolutionplus.com/commercial-drain-and-sewer',
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
          'Commercial drain cleaning',
          'Clogged drain cleaning',
          'Kitchen drain cleaning',
          'Bathroom drain cleaning',
          'Laundry drain cleaning',
          'Floor drain cleaning',
          'Commercial sewer cleaning',
          'Sewer line repair',
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