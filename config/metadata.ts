import type { Metadata } from 'next';

// Base URL for the site
const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://fireai.in';

// Default metadata values
export const defaultMetadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: 'FireAI - AI Brain for Businesses',
    template: '%s | FireAI'
  },
  description: 'FireAI is the AI brain for businesses that helps make better decisions and grow faster powered by AI. Transform complex data into actionable insights.',
  keywords: [
    'AI for business', 
    'business intelligence', 
    'data analytics', 
    'artificial intelligence', 
    'decision making', 
    'data insights', 
    'business growth',
    'FireAI',
    'AI solutions',
    'data visualization'
  ],
  authors: [{ name: 'FireAI', url: baseUrl }],
  creator: 'FireAI',
  publisher: 'FireAI',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-video-preview': -1,
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: baseUrl,
    siteName: 'FireAI',
    title: 'FireAI - AI Brain for Businesses',
    description: 'FireAI is the AI brain for businesses that helps make better decisions and grow faster powered by AI. Transform complex data into actionable insights.',
    images: [
      {
        url: `${baseUrl}/assets/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: 'FireAI - AI Brain for Businesses',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'FireAI - AI Brain for Businesses',
    description: 'FireAI is the AI brain for businesses that helps make better decisions and grow faster powered by AI.',
    creator: '@fireai',
    images: [`${baseUrl}/assets/twitter-image.jpg`],
  },
  alternates: {
    canonical: baseUrl,
  },
  manifest: `${baseUrl}/manifest.json`,
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/assets/icon-192.png', sizes: '192x192', type: 'image/png' },
      { url: '/assets/icon-512.png', sizes: '512x512', type: 'image/png' },
    ],
    apple: [
      { url: '/assets/apple-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    other: [
      {
        rel: 'apple-touch-icon',
        url: '/assets/apple-icon.png',
      },
    ],
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 5,
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_VERIFICATION || '',
    yandex: process.env.NEXT_PUBLIC_YANDEX_VERIFICATION || '',
    yahoo: process.env.NEXT_PUBLIC_YAHOO_VERIFICATION || '',
    other: {
      'msvalidate.01': '82C28A4733153FB70569C7B7BDA7C53B',
    },
  },
  category: 'technology',
};

// Helper function to generate page-specific metadata
export function createMetadata({
  title,
  description,
  path = '',
  openGraph = {},
  twitter = {},
  ...rest
}: {
  title?: string;
  description?: string;
  path?: string;
  openGraph?: Partial<NonNullable<Metadata['openGraph']>>;
  twitter?: Partial<NonNullable<Metadata['twitter']>>;
  [key: string]: any;
}): Metadata {
  const pageUrl = `${baseUrl}${path}`;
  
  return {
    ...defaultMetadata,
    ...(title && { title }),
    ...(description && { description }),
    alternates: {
      canonical: pageUrl,
    },
    openGraph: {
      ...defaultMetadata.openGraph,
      ...(title && { title }),
      ...(description && { description }),
      url: pageUrl,
      ...openGraph,
    },
    twitter: {
      ...defaultMetadata.twitter,
      ...(title && { title }),
      ...(description && { description }),
      ...twitter,
    },
    ...rest,
  };
}
