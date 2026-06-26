export const GENERAL_WHATSAPP = '639176247132';
export const COMMERCIAL_WHATSAPP = '639202247801';
export const CENTRAL_PHONE = '+63 917 624 7132';
export const COMMERCIAL_PHONE = '+63 920 224 7801';
export const EMAIL = 'info@weclean.com.ph';
export const SITE_URL = 'https://www.weclean.com.ph';

export const pricing = [
  {
    id: 'self-service-wash',
    label: 'Wash',
    badge: 'Self Service',
    subtitle: 'Max. of 7 kg',
    pricePerLoad: 60 as number | null,
    rushMultiplier: null as number | null,
    selfService: true,
    note: null as string | null,
  },
  {
    id: 'self-service-dry',
    label: 'Dry',
    badge: 'Self Service',
    subtitle: 'Max. of 7 kg',
    pricePerLoad: 70 as number | null,
    rushMultiplier: null as number | null,
    selfService: true,
    note: null as string | null,
  },
  {
    id: 'full-service',
    label: 'Regular Clothes',
    badge: 'Full Service',
    subtitle: 'Max. of 5 kg',
    pricePerLoad: 165 as number | null,
    rushMultiplier: 2 as number | null, // ₱330 same day
    selfService: false,
    note: null as string | null,
  },
  {
    id: 'household',
    label: 'Household Items',
    badge: 'Full Service',
    subtitle: 'Max. of 4 kg',
    pricePerLoad: 170 as number | null,
    rushMultiplier: 2 as number | null, // ₱340 same day
    selfService: false,
    note: null as string | null,
  },
  {
    id: 'pickup-delivery',
    label: 'Pick Up & Delivery',
    badge: null as string | null,
    subtitle: 'Nearby areas',
    pricePerLoad: 0 as number | null,
    rushMultiplier: null as number | null,
    selfService: false,
    note: 'FREE for nearby areas. Call or WhatsApp to confirm your zone.' as string | null,
  },
];

export const supplies = [
  { name: 'Ariel', price: 20 },
  { name: 'Downy', price: 15 },
  { name: 'Zonrox (Color Safe)', price: 10 },
];

// Dry cleaning & UltraSonic sneaker pricing not shown on branch price board.
// TODO: confirm rates from operations before publishing.
export const specialtyPricingNote =
  'Dry cleaning and UltraSonic sneaker cleaning pricing varies by item. Inquire at the Dian Branch or message us on WhatsApp for a quote.';
