export interface ServiceMetadata {
  title: string;
  description: string;
  keywords: string;
  canonical: string;
  ogImage: string;
}

export interface ServiceFaq {
  question: string;
  answer: string;
}

export interface ServiceItem {
  id: string;
  tag: string;
  title: string;
  description: string;
  longDescription: string;
  image: string;
  ctaText: string;
  ctaLink: string;
  bulletPoints: string[];
  footerHeading: string;
  footerText: string;
  meta?: ServiceMetadata;
  faqs?: ServiceFaq[];
  schemaGraph?: Record<string, unknown>;
}
