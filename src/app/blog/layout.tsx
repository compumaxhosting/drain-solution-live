import type { Metadata, Viewport } from 'next';
import React from 'react';

export const metadata: Metadata = {
  title: 'Drain Cleaning Tips & Plumbing Advice | Drain Solution Plus',
  description:
    'Explore drain cleaning tips, plumbing advice, and clog prevention guides from Drain Solution Plus serving Hawthorne, Passaic, Bergen, Hudson, and Essex County, NJ.',
  keywords: [
    'Drain Solution Plus blog',
    'drain cleaning tips',
    'plumbing advice New Jersey',
    'clogged drain solutions',
    'drain clog prevention',
    'residential drain cleaning NJ',
    'plumbing maintenance tips',
    'drain cleaning Hawthorne NJ',
    'Passaic County plumbing',
    'Bergen County drain cleaning',
    'Hudson County plumbing',
    'Essex County drain cleaning',
  ],
  authors: [{ name: 'Drain Solution Plus' }],
  alternates: {
    canonical: 'https://www.drainsolutionplus.com/blog',
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: 'website',
    title: 'Drain Cleaning Tips & Plumbing Advice | Drain Solution Plus',
    description:
      'Get practical drain cleaning tips, plumbing advice, and clog prevention guides for homeowners in Hawthorne and surrounding New Jersey counties.',
    url: 'https://www.drainsolutionplus.com/blog',
    siteName: 'Drain Solution Plus',
    images: [
      {
        url: 'https://www.drainsolutionplus.com/images/services-images/sink-line-cleared.webp',
        alt: 'Drain Solution Plus plumbing and residential drain cleaning advice',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Drain Cleaning Tips & Plumbing Advice | Drain Solution Plus',
    description:
      'Discover practical plumbing advice, drain cleaning tips, and clog prevention solutions from Drain Solution Plus in New Jersey.',
    images: ['https://www.drainsolutionplus.com/images/services-images/sink-line-cleared.webp'],
  },
  other: {
    referrer: 'strict-origin-when-cross-origin',
  },
};

export const viewport: Viewport = {
  themeColor: '#ffffff',
};

const blogCollectionSchema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'CollectionPage',
      '@id': 'https://www.drainsolutionplus.com/blog#webpage',
      'url': 'https://www.drainsolutionplus.com/blog',
      'name': 'Drain Cleaning Tips & Plumbing Advice | Drain Solution Plus',
      'description':
        'Explore drain cleaning tips, plumbing advice, and clog prevention guides from Drain Solution Plus serving Hawthorne, Passaic, Bergen, Hudson, and Essex County, NJ.',
      'isPartOf': {
        '@id': 'https://www.drainsolutionplus.com/#website',
      },
      'about': {
        '@id': 'https://www.drainsolutionplus.com/#business',
      },
      'inLanguage': 'en-US',
      'breadcrumb': {
        '@id': 'https://www.drainsolutionplus.com/blog#breadcrumb',
      },
      'mainEntity': {
        '@type': 'ItemList',
        'name': 'Drain Cleaning and Plumbing Articles',
        'itemListOrder': 'https://schema.org/ItemListOrderDescending',
      },
    },
    {
      '@type': 'WebSite',
      '@id': 'https://www.drainsolutionplus.com/#website',
      'url': 'https://www.drainsolutionplus.com/',
      'name': 'Drain Solution Plus',
      'publisher': {
        '@id': 'https://www.drainsolutionplus.com/#organization',
      },
      'inLanguage': 'en-US',
    },
    {
      '@type': 'Organization',
      '@id': 'https://www.drainsolutionplus.com/#organization',
      'name': 'Drain Solution Plus',
      'url': 'https://www.drainsolutionplus.com/',
    },
    {
      '@type': 'Plumber',
      '@id': 'https://www.drainsolutionplus.com/#business',
      'name': 'Drain Solution Plus',
      'url': 'https://www.drainsolutionplus.com/',
      'areaServed': [
        {
          '@type': 'AdministrativeArea',
          'name': 'Passaic County, New Jersey',
        },
        {
          '@type': 'AdministrativeArea',
          'name': 'Bergen County, New Jersey',
        },
        {
          '@type': 'AdministrativeArea',
          'name': 'Hudson County, New Jersey',
        },
        {
          '@type': 'AdministrativeArea',
          'name': 'Essex County, New Jersey',
        },
        {
          '@type': 'City',
          'name': 'Hawthorne, New Jersey',
        },
      ],
      'hasOfferCatalog': {
        '@type': 'OfferCatalog',
        'name': 'Drain Cleaning Services',
        'itemListElement': [
          {
            '@type': 'Offer',
            'itemOffered': {
              '@type': 'Service',
              'name': 'Residential Drain Cleaning',
              'url': 'https://www.drainsolutionplus.com/our-services/residential-drain-cleaning',
            },
          },
        ],
      },
    },
    {
      '@type': 'BreadcrumbList',
      '@id': 'https://www.drainsolutionplus.com/blog#breadcrumb',
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
          'name': 'Blog',
          'item': 'https://www.drainsolutionplus.com/blog',
        },
      ],
    },
  ],
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(blogCollectionSchema),
        }}
      />
      {children}
    </>
  );
}