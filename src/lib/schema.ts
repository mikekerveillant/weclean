import type { Branch } from '@/types';
import { SITE_URL } from '@/data/pricing';

const ORG_ID = `${SITE_URL}/#organization`;
const WEBSITE_ID = `${SITE_URL}/#website`;

export function organizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@context': 'https://schema.org',
        '@type': 'Organization',
        '@id': ORG_ID,
        name: 'WeClean Laundry',
        url: SITE_URL,
        logo: `${SITE_URL}/weclean-symbol-white.png`,
        telephone: '+63 917 624 7132',
        email: 'info@weclean.com.ph',
        foundingDate: '2017',
        description:
          'Premium laundry, sneaker cleaning, and pickup & delivery across the Philippines. Big on Quality. WeClean for Less.',
        sameAs: [
          'https://www.linkedin.com/company/weclean-philippines',
          'https://www.facebook.com/weclean.laundromat',
          'https://www.instagram.com/weclean.ph/',
        ],
        areaServed: [
          { '@type': 'City', name: 'Makati City' },
          { '@type': 'City', name: 'Manila' },
          { '@type': 'City', name: 'Pasay City' },
          { '@type': 'City', name: 'Pasig City' },
          { '@type': 'City', name: 'Quezon City' },
          { '@type': 'City', name: 'El Nido' },
          { '@type': 'City', name: 'General Luna' },
        ],
      },
      {
        '@context': 'https://schema.org',
        '@type': 'WebSite',
        '@id': WEBSITE_ID,
        url: SITE_URL,
        name: 'WeClean Laundry Philippines',
        publisher: { '@id': ORG_ID },
      },
    ],
  };
}

export function webPageSchema(opts: {
  slug: string;
  title: string;
  description: string;
}) {
  const url = opts.slug === '' ? SITE_URL : `${SITE_URL}/${opts.slug}`;
  return {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    '@id': `${url}#webpage`,
    url,
    name: opts.title,
    description: opts.description,
    isPartOf: { '@id': WEBSITE_ID },
    about: { '@id': ORG_ID },
  };
}

export function branchSchema(branch: Branch) {
  const branchUrl = `${SITE_URL}/branches/${branch.slug}`;
  const branchId = `${branchUrl}#business`;

  const openingHoursSpecification = [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: branch.hours.monFri.open,
      closes: branch.hours.monFri.close,
    },
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: 'Saturday',
      opens: branch.hours.sat.open,
      closes: branch.hours.sat.close,
    },
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: 'Sunday',
      opens: branch.hours.sun.open,
      closes: branch.hours.sun.close,
    },
  ];

  return {
    '@context': 'https://schema.org',
    '@graph': [
      webPageSchema({
        slug: `branches/${branch.slug}`,
        title: `WeClean ${branch.shortName} | Laundry near ${branch.area}`,
        description: branch.description,
      }),
      {
        '@context': 'https://schema.org',
        '@type': 'Laundry',
        '@id': branchId,
        name: branch.name,
        url: branchUrl,
        telephone: branch.phone,
        address: {
          '@type': 'PostalAddress',
          streetAddress: branch.streetAddress,
          addressLocality: branch.city,
          addressRegion: branch.region,
          addressCountry: branch.addressCountry,
        },
        geo: {
          '@type': 'GeoCoordinates',
          latitude: branch.lat,
          longitude: branch.lng,
        },
        openingHoursSpecification,
        priceRange: '₱₱',
        currenciesAccepted: 'PHP',
        paymentAccepted: 'Cash, GCash, QR Ph',
        parentOrganization: { '@id': ORG_ID },
        hasOfferCatalog: {
          '@type': 'OfferCatalog',
          name: 'Laundry services',
          itemListElement: branch.services.map((s) => ({
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: serviceNameMap[s] ?? s,
            },
          })),
        },
      },
    ],
  };
}

const serviceNameMap: Record<string, string> = {
  'wash-dry-fold': 'Wash, Dry & Fold',
  'household-items': 'Household Items Laundry',
  'pickup-delivery': 'Laundry Pickup & Delivery',
  'dry-cleaning': 'Dry Cleaning',
  'ultrasonic-sneakers': 'UltraSonic Sneaker Cleaning',
  'commercial-laundry': 'Commercial Laundry',
};

export function faqPageSchema(faqs: { question: string; answer: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: f.answer,
      },
    })),
  };
}
