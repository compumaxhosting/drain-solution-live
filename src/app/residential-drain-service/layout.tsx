import type { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  title: 'Residential Drain Service in Northern NJ | Drain Solution Plus',
  description:
    'Get residential drain service in Northern NJ from Drain Solution Plus. Drain cleaning, hydro jetting, repairs & video inspections. Call today.',
  authors: [{ name: 'Drain Solution Plus' }],
  keywords: [
    'residential drain service',
    'residential drain cleaning',
    'drain cleaning Northern NJ',
    'drain repair Northern NJ',
    'hydro jetting',
    'sewer camera inspection',
    'clogged drain service',
    'drain service Bergen County',
    'drain service Essex County',
    'drain service Hudson County',
    'drain service Passaic County',
  ],
  robots: {
    index: true,
    follow: true,
  },
  themeColor: '#ffffff',
  openGraph: {
    type: 'website',
    title: 'Residential Drain Service in Northern NJ | Drain Solution Plus',
    description:
      'Residential drain cleaning, hydro jetting, repairs and video inspections throughout Northern NJ. Contact Drain Solution Plus for service.',
    url: 'https://www.drainsolutionplus.com/residential-drain-service',
    siteName: 'Drain Solution Plus',
    images: [
      {
        url: '/images/client-images/unclogged-sink-drain.webp',
        alt: 'Residential drain service by Drain Solution Plus in Northern New Jersey',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Residential Drain Service in Northern NJ | Drain Solution Plus',
    description:
      'Residential drain cleaning, hydro jetting, repairs and video inspections throughout Northern NJ. Contact Drain Solution Plus for service.',
    images: ['/images/client-images/unclogged-sink-drain.webp'],
  },
  referrer: 'strict-origin-when-cross-origin',
  alternates: {
    canonical: 'https://www.drainsolutionplus.com/residential-drain-service',
  },
};

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  '@id': 'https://www.drainsolutionplus.com/residential-drain-service#service',
  name: 'Residential Drain Cleaning & Repair',
  serviceType: [
    'Residential Drain Cleaning',
    'Residential Drain Repair',
    'Hydro Jetting',
    'Video Drain Inspection',
    'Sewer Drain Service',
  ],
  description:
    'Residential drain cleaning and repair services in Northern New Jersey, including drain cleaning, high-pressure water jetting, video camera inspections, and drain repairs.',
  url: 'https://www.drainsolutionplus.com/residential-drain-service',
  provider: {
    '@type': 'LocalBusiness',
    '@id': 'https://www.drainsolutionplus.com/#organization',
    name: 'Drain Solution Plus',
    url: 'https://www.drainsolutionplus.com/',
    telephone: '+1-201-881-9622',
  },
  areaServed: [
    { '@type': 'AdministrativeArea', name: 'Bergen County, New Jersey' },
    { '@type': 'AdministrativeArea', name: 'Essex County, New Jersey' },
    { '@type': 'AdministrativeArea', name: 'Hudson County, New Jersey' },
    { '@type': 'AdministrativeArea', name: 'Passaic County, New Jersey' },
  ],
  availableChannel: {
    '@type': 'ServiceChannel',
    serviceUrl: 'https://www.drainsolutionplus.com/residential-drain-service',
    servicePhone: {
      '@type': 'ContactPoint',
      telephone: '+1-201-881-9622',
      contactType: 'customer service',
      areaServed: 'US-NJ',
    },
  },
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Residential Drain Services',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: { '@type': 'Service', name: 'Residential Drain Cleaning' },
      },
      {
        '@type': 'Offer',
        itemOffered: { '@type': 'Service', name: 'High-Pressure Water Jetting' },
      },
      {
        '@type': 'Offer',
        itemOffered: { '@type': 'Service', name: 'Video Camera Drain Inspection' },
      },
      {
        '@type': 'Offer',
        itemOffered: { '@type': 'Service', name: 'Residential Drain Repair' },
      },
    ],
  },
  hoursAvailable: {
    '@type': 'OpeningHoursSpecification',
    description: '24/7 drain and sewer service',
  },
};

export default function ResidentialDrainServiceLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {/* Schema.org Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      {/* Page Layout Wrapper */}
      {children}
    </>
  );
}