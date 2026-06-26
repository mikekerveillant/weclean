export interface HoursSpec {
  open: string; // "08:00"
  close: string; // "20:00"
}

export interface BranchHours {
  monFri: HoursSpec;
  sat: HoursSpec;
  sun: HoursSpec;
}

export type ServiceSlug =
  | 'wash-dry-fold'
  | 'household-items'
  | 'pickup-delivery'
  | 'dry-cleaning'
  | 'ultrasonic-sneakers'
  | 'commercial-laundry';

export interface Branch {
  slug: string;
  name: string;           // "WeClean Laundry – Dian Branch"
  shortName: string;      // "Dian Branch"
  area: string;           // "Makati"
  cityDisplay: string;    // "Makati City"
  streetAddress: string;  // "1737-C Niccan Building, Dian St."
  city: string;           // for schema addressLocality
  region: string;         // "Metro Manila"
  addressCountry: 'PH';
  phone: string;          // "+63 917 624 7132"
  // Each branch routes bookings to its own WhatsApp. Format: digits only, no + or spaces.
  // TODO: replace each placeholder below with the branch-specific number from GBP.
  whatsapp: string;       // "639176247132"
  lat: number;
  lng: number;
  hours: BranchHours;
  services: ServiceSlug[];
  description: string;    // unique localized copy for SEO
  neighborhood: string;   // short label e.g. "Dian Street, Makati"
  landmarks: string;      // "near Chino Roces Ave"
}

export interface PricingTier {
  label: string;
  subtitle?: string;
  pricePerLoad?: number;   // PHP
  rushMultiplier?: number; // e.g. 2 means x2
  maxKg?: number;
  note?: string;
}

export interface Service {
  slug: ServiceSlug;
  name: string;
  tagline: string;
  description: string;
  highlights: string[];
  availability: string; // e.g. "All branches" or "Dian Branch + pickup & delivery"
  cta: string;
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface Review {
  name: string;
  initials: string;
  branch?: string;
  rating: number;
  date: string;
  text: string;
  source: 'Google';
}

export interface BookingFormValues {
  branchSlug: string;
  service: string;
  date: string;
  timeSlot: string;
  address: string;
  notes: string;
}
