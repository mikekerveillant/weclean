import type { Service } from '@/types';

export const services: Service[] = [
  {
    slug: 'wash-dry-fold',
    name: 'Wash, Dry & Fold',
    tagline: 'Everyday Care',
    description:
      'Premium detergents, careful washing and a perfect fold for your everyday essentials. Each order processed separately — never mixed with other customers\' clothes.',
    highlights: [
      'Premium washing to remove stains and brighten colors',
      'State-of-the-art drying for soft, fresh garments',
      'Neatly folded and ready within 24 hours',
      'Full Service: max. 5 kg per load (₱165)',
      'Rush same-day available at 2× the standard rate',
    ],
    availability: 'All 13 branches',
    cta: 'Book a Wash',
  },
  {
    slug: 'household-items',
    name: 'Household Items',
    tagline: 'Home Care',
    description:
      'Fresh comforters, linens, curtains and bedding with the same trusted WeClean quality. Full Service: max. 4 kg per load.',
    highlights: [
      'Comforters, blankets, linens and bedding',
      'Thorough cleaning and fresh finishing',
      'Item assessment and pricing available at your nearest branch',
      'Max. 4 kg per load (₱170)',
      'Rush same-day available at 2× the standard rate',
    ],
    availability: 'All 13 branches',
    cta: 'Book Household Laundry',
  },
  {
    slug: 'pickup-delivery',
    name: 'Pickup & Delivery',
    tagline: 'Door to Door',
    description:
      'Get four hours of your week back with convenient, contactless service at your door. Schedule a pickup and get fresh laundry delivered within 24 hours.',
    highlights: [
      'Free pickup for nearby areas',
      'Simple scheduling through WhatsApp or our website',
      'Individual order processing — never mixed',
      'Fresh laundry delivered back within 24 hours',
    ],
    availability: 'All 13 branches (nearby areas)',
    cta: 'Schedule a Pickup',
  },
  {
    slug: 'dry-cleaning',
    name: 'Dry Cleaning',
    tagline: 'Expert Care',
    description:
      'Expert handling for pieces that deserve extra attention — from fine fabrics and formal wear to delicate garments that need fabric-conscious cleaning methods.',
    highlights: [
      'Fabric-conscious cleaning methods',
      'Careful finishing that protects shape and texture',
      'Branch assessment for special care requirements',
      'Available for walk-in at the Dian Branch (Makati)',
      'Available for all customers via pickup & delivery',
    ],
    availability: 'Walk-in at Dian Branch | Pickup & delivery at all branches',
    cta: 'Book Dry Cleaning',
  },
  {
    slug: 'ultrasonic-sneakers',
    name: 'UltraSonic Sneaker Cleaning',
    tagline: 'Specialty Care',
    description:
      'Gentle deep cleaning using ultrasonic technology — no harsh brushing, aggressive chemicals or high-temperature steam. Out-of-the-box freshness, every time.',
    highlights: [
      'No harsh brushing or aggressive chemicals',
      'No high-temperature steam that warps materials',
      'Fresh, clean sneakers with an out-of-the-box aroma',
      'Safe for leather, canvas, mesh, and specialty materials',
      'Walk-in at Dian Branch | Pickup & delivery nationwide',
    ],
    availability: 'Walk-in at Dian Branch (Makati) | Pickup & delivery for all customers',
    cta: 'Book Sneaker Cleaning',
  },
  {
    slug: 'commercial-laundry',
    name: 'Commercial Laundry',
    tagline: 'Custom Quote',
    description:
      'Reliable, consistent laundry solutions for hospitality, wellness and local businesses. Flexible pickup and delivery arrangements with a custom service plan.',
    highlights: [
      'Consistent professional processing at volume',
      'Flexible collection and delivery arrangements',
      'Custom service plan and quotation for your volume',
      'Serving hotels, resorts, gyms, salons, and F&B',
    ],
    availability: 'All branches — contact for custom plan',
    cta: 'Request a Quote',
  },
];
