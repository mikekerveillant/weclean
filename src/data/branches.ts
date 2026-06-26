import type { Branch } from '@/types';
import { GENERAL_WHATSAPP } from './pricing';

// ─── PHONE NUMBER TODO ───────────────────────────────────────────────────────
// Each branch has its own WhatsApp number (confirmed by operations).
// Currently all fields below default to the central booking number.
// Replace each `whatsapp` value with the branch-specific number from GBP.
// Format: digits only, no spaces or + (e.g. "639171234567").
// ─────────────────────────────────────────────────────────────────────────────

// ─── HOURS NOTE ──────────────────────────────────────────────────────────────
// Hours confirmed correct by operations (June 2026):
// Mon–Sat 8:00 AM – 8:00 PM | Sun 9:00 AM – 6:00 PM
// ─────────────────────────────────────────────────────────────────────────────

const DEFAULT_HOURS = {
  monFri: { open: '08:00', close: '20:00' },
  sat:    { open: '08:00', close: '20:00' },
  sun:    { open: '09:00', close: '18:00' },
};

// ─── GEO COORDINATES NOTE ────────────────────────────────────────────────────
// Coordinates below are approximate. Verify each against the GBP listing
// before publishing schema markup (Google flags mismatched coordinates).
// ─────────────────────────────────────────────────────────────────────────────

export const branches: Branch[] = [
  {
    slug: 'dian',
    name: 'WeClean Laundry – Dian Branch',
    shortName: 'Dian',
    area: 'Makati',
    cityDisplay: 'Makati City',
    streetAddress: '1737-C Niccan Building, Dian St.',
    city: 'Makati City',
    region: 'Metro Manila',
    addressCountry: 'PH',
    phone: '+63 917 624 7132', // TODO: branch-specific number from GBP
    whatsapp: GENERAL_WHATSAPP, // TODO: branch-specific WhatsApp from GBP
    lat: 14.5677,
    lng: 121.0119,
    hours: DEFAULT_HOURS,
    services: ['wash-dry-fold', 'household-items', 'pickup-delivery', 'dry-cleaning', 'ultrasonic-sneakers'],
    description:
      "WeClean's flagship Makati location on Dian Street — the only walk-in branch for dry cleaning and UltraSonic sneaker care. Convenient for Salcedo Village, San Lorenzo Village, and commuters through Chino Roces Ave.",
    neighborhood: 'Dian Street, Makati',
    landmarks: 'near Chino Roces Ave, accessible from Makati CBD and Guadalupe',
  },
  {
    slug: 'paco',
    name: 'WeClean Laundry – Paco Branch',
    shortName: 'Paco',
    area: 'Manila',
    cityDisplay: 'Manila',
    streetAddress: '1240 Pedrogil Street, Brgy. 684',
    city: 'Manila',
    region: 'Metro Manila',
    addressCountry: 'PH',
    phone: '+63 917 624 7132', // TODO: branch-specific number from GBP
    whatsapp: GENERAL_WHATSAPP, // TODO: branch-specific WhatsApp from GBP
    lat: 14.5853,
    lng: 120.9927,
    hours: DEFAULT_HOURS,
    services: ['wash-dry-fold', 'household-items', 'pickup-delivery', 'dry-cleaning'],
    description:
      'Serving the Paco residential belt near Pedrogil Street, close to the Philippine General Hospital area and UN Ave. Walk-in or pickup — fresh laundry within 24 hours.',
    neighborhood: 'Paco, Manila',
    landmarks: 'near Philippine General Hospital and UN Avenue',
  },
  {
    slug: 'pandacan',
    name: 'WeClean Laundry – Pandacan Branch',
    shortName: 'Pandacan',
    area: 'Manila',
    cityDisplay: 'Manila',
    streetAddress: '1401 Certeza Street, Pandacan',
    city: 'Manila',
    region: 'Metro Manila',
    addressCountry: 'PH',
    phone: '+63 917 624 7132', // TODO: branch-specific number from GBP
    whatsapp: GENERAL_WHATSAPP, // TODO: branch-specific WhatsApp from GBP
    lat: 14.5754,
    lng: 121.0094,
    hours: DEFAULT_HOURS,
    services: ['wash-dry-fold', 'household-items', 'pickup-delivery', 'dry-cleaning'],
    description:
      'On Certeza Street in Pandacan, a short commute from Sta. Mesa, Mandaluyong, and the Pasig border. Reliable 24-hour laundry care for Manila\'s inner-city neighborhoods.',
    neighborhood: 'Pandacan, Manila',
    landmarks: 'near Sta. Mesa and the Mandaluyong border',
  },
  {
    slug: 'dagonoy',
    name: 'WeClean Laundry – Dagonoy Branch',
    shortName: 'Dagonoy',
    area: 'Manila',
    cityDisplay: 'Manila',
    streetAddress: 'Unit B, 2407 Topacio cor. Dagonoy St., San Andres Bukid, Santa Ana',
    city: 'Manila',
    region: 'Metro Manila',
    addressCountry: 'PH',
    phone: '+63 917 624 7132', // TODO: branch-specific number from GBP
    whatsapp: GENERAL_WHATSAPP, // TODO: branch-specific WhatsApp from GBP
    lat: 14.5726,
    lng: 121.0047,
    hours: DEFAULT_HOURS,
    services: ['wash-dry-fold', 'household-items', 'pickup-delivery', 'dry-cleaning'],
    description:
      'Located on Topacio corner Dagonoy Street in San Andres Bukid, Santa Ana — serving the densely residential areas of Sta. Ana, Paco, and Sampaloc south.',
    neighborhood: 'San Andres Bukid, Santa Ana, Manila',
    landmarks: 'near Topacio and Dagonoy Streets intersection, Santa Ana',
  },
  {
    slug: 'ocampo',
    name: 'WeClean Laundry – Ocampo Branch',
    shortName: 'Ocampo',
    area: 'Manila',
    cityDisplay: 'Manila',
    streetAddress: '750 Pablo Ocampo Street cor. Donada St., Malate',
    city: 'Manila',
    region: 'Metro Manila',
    addressCountry: 'PH',
    phone: '+63 917 624 7132', // TODO: branch-specific number from GBP
    whatsapp: GENERAL_WHATSAPP, // TODO: branch-specific WhatsApp from GBP
    lat: 14.5743,
    lng: 120.9912,
    hours: DEFAULT_HOURS,
    services: ['wash-dry-fold', 'household-items', 'pickup-delivery', 'dry-cleaning'],
    description:
      'On Pablo Ocampo Street (formerly Vito Cruz) corner Donada in Malate — convenient for Malate and Paco residents, and those near Robinsons Manila and Rajah Sulayman Park.',
    neighborhood: 'Malate, Manila',
    landmarks: 'near Robinsons Manila and Rajah Sulayman Park, Malate',
  },
  {
    slug: 'balagtas',
    name: 'WeClean Laundry – Balagtas Branch',
    shortName: 'Balagtas',
    area: 'Pasay',
    cityDisplay: 'Pasay City',
    streetAddress: '103 Balagtas Villas, Barangay 15',
    city: 'Pasay City',
    region: 'Metro Manila',
    addressCountry: 'PH',
    phone: '+63 917 624 7132', // TODO: branch-specific number from GBP
    whatsapp: GENERAL_WHATSAPP, // TODO: branch-specific WhatsApp from GBP
    lat: 14.5389,
    lng: 121.0002,
    hours: DEFAULT_HOURS,
    services: ['wash-dry-fold', 'household-items', 'pickup-delivery', 'dry-cleaning'],
    description:
      'Balagtas Villas in Barangay 15, Pasay City — serving the southern Pasay residential zone close to the Baclaran area and NAIA approach roads.',
    neighborhood: 'Barangay 15, Pasay City',
    landmarks: 'near Baclaran Church and EDSA-Taft intersection',
  },
  {
    slug: 'harrison',
    name: 'WeClean Laundry – Harrison Branch',
    shortName: 'Harrison',
    area: 'Pasay',
    cityDisplay: 'Pasay City',
    streetAddress: '1925 F.B. Harrison cor. Lourdes Street',
    city: 'Pasay City',
    region: 'Metro Manila',
    addressCountry: 'PH',
    phone: '+63 917 624 7132', // TODO: branch-specific number from GBP
    whatsapp: GENERAL_WHATSAPP, // TODO: branch-specific WhatsApp from GBP
    lat: 14.5504,
    lng: 120.9921,
    hours: DEFAULT_HOURS,
    services: ['wash-dry-fold', 'household-items', 'pickup-delivery', 'dry-cleaning'],
    description:
      'On F.B. Harrison Street near Lourdes in Pasay City — minutes from SM Mall of Asia and the CCP Complex. Ideal for bay-area residents and MOA-area workers.',
    neighborhood: 'F.B. Harrison, Pasay City',
    landmarks: 'near SM Mall of Asia and CCP Complex',
  },
  {
    slug: 'sto-tomas',
    name: 'WeClean Laundry – Sto. Tomas Branch',
    shortName: 'Sto. Tomas',
    area: 'Pasig',
    cityDisplay: 'Pasig City',
    streetAddress: '6 F. Manalo Street, Barangay Santo Tomas',
    city: 'Pasig City',
    region: 'Metro Manila',
    addressCountry: 'PH',
    phone: '+63 917 624 7132', // TODO: branch-specific number from GBP
    whatsapp: GENERAL_WHATSAPP, // TODO: branch-specific WhatsApp from GBP
    lat: 14.5797,
    lng: 121.0714,
    hours: DEFAULT_HOURS,
    services: ['wash-dry-fold', 'household-items', 'pickup-delivery', 'dry-cleaning'],
    description:
      'On F. Manalo Street in Barangay Santo Tomas, Pasig City — a trusted neighborhood laundry for Sto. Tomas residents and surrounding Pasig barangays.',
    neighborhood: 'Santo Tomas, Pasig City',
    landmarks: 'near F. Manalo Street, Barangay Santo Tomas Pasig',
  },
  {
    slug: 'magsaysay',
    name: 'WeClean Laundry – Magsaysay Branch',
    shortName: 'Magsaysay',
    area: 'Pasig',
    cityDisplay: 'Pasig City',
    streetAddress: '0429 F. Mariano Ave cor. Magsaysay Street, Brgy. Manggahan',
    city: 'Pasig City',
    region: 'Metro Manila',
    addressCountry: 'PH',
    phone: '+63 917 624 7132', // TODO: branch-specific number from GBP
    whatsapp: GENERAL_WHATSAPP, // TODO: branch-specific WhatsApp from GBP
    lat: 14.5924,
    lng: 121.0873,
    hours: DEFAULT_HOURS,
    services: ['wash-dry-fold', 'household-items', 'pickup-delivery', 'dry-cleaning'],
    description:
      'At the F. Mariano and Magsaysay corner in Manggahan, Pasig — serving the Manggahan, Rosario, and upper Pasig residential communities.',
    neighborhood: 'Manggahan, Pasig City',
    landmarks: 'F. Mariano Ave corner Magsaysay Street, Manggahan Pasig',
  },
  {
    slug: 'shorthorn',
    name: 'WeClean Laundry – Shorthorn Branch',
    shortName: 'Shorthorn',
    area: 'Quezon City',
    cityDisplay: 'Quezon City',
    streetAddress: '73-A Short Horn Street, Bahay Toro (Project 8)',
    city: 'Quezon City',
    region: 'Metro Manila',
    addressCountry: 'PH',
    phone: '+63 917 624 7132', // TODO: branch-specific number from GBP
    whatsapp: GENERAL_WHATSAPP, // TODO: branch-specific WhatsApp from GBP
    lat: 14.6826,
    lng: 121.0261,
    hours: DEFAULT_HOURS,
    services: ['wash-dry-fold', 'household-items', 'pickup-delivery', 'dry-cleaning'],
    description:
      'On Short Horn Street in Bahay Toro (Project 8), Quezon City — serving the Project 7 and Project 8 communities of central QC, close to EDSA and Muñoz.',
    neighborhood: 'Project 8 (Bahay Toro), Quezon City',
    landmarks: 'near EDSA Muñoz and Project 7–8 communities, Quezon City',
  },
  {
    slug: 'el-nido-town',
    name: 'WeClean Laundry – El Nido Town Branch',
    shortName: 'El Nido Town',
    area: 'El Nido',
    cityDisplay: 'El Nido, Palawan',
    streetAddress: 'Lot Q-1-A, Barangay Corong Corong',
    city: 'El Nido',
    region: 'Palawan',
    addressCountry: 'PH',
    phone: '+63 917 624 7132', // TODO: branch-specific number from GBP
    whatsapp: GENERAL_WHATSAPP, // TODO: branch-specific WhatsApp from GBP
    lat: 11.1649,
    lng: 119.3834,
    hours: DEFAULT_HOURS,
    services: ['wash-dry-fold', 'household-items', 'pickup-delivery', 'dry-cleaning'],
    description:
      'In Barangay Corong Corong, steps from El Nido\'s main beach and town center. The go-to laundry for island-hopping travelers, resort guests, and long-stay visitors in El Nido, Palawan.',
    neighborhood: 'Corong Corong, El Nido',
    landmarks: 'near El Nido town proper and Corong Corong beach',
  },
  {
    slug: 'el-nido-lio',
    name: 'WeClean Laundry – El Nido Lio Branch',
    shortName: 'El Nido Lio',
    area: 'El Nido',
    cityDisplay: 'El Nido, Palawan',
    streetAddress: 'Lot No. 946-C1, Brgy. Villa Libertad',
    city: 'El Nido',
    region: 'Palawan',
    addressCountry: 'PH',
    phone: '+63 917 624 7132', // TODO: branch-specific number from GBP
    whatsapp: GENERAL_WHATSAPP, // TODO: branch-specific WhatsApp from GBP
    lat: 11.2028,
    lng: 119.3816,
    hours: DEFAULT_HOURS,
    services: ['wash-dry-fold', 'household-items', 'pickup-delivery', 'dry-cleaning'],
    description:
      'Serving the Lio Tourism Estate and Villa Libertad communities in northern El Nido — convenient for resort guests, eco-resort visitors, and travelers based near the Lio area.',
    neighborhood: 'Villa Libertad, El Nido',
    landmarks: 'near Lio Tourism Estate, northern El Nido',
  },
  {
    slug: 'siargao',
    name: 'WeClean Laundry – Siargao Branch',
    shortName: 'Siargao',
    area: 'Siargao',
    cityDisplay: 'General Luna, Siargao',
    streetAddress: 'Lot 1545, Purok 4, Libertad Street, General Luna',
    city: 'General Luna',
    region: 'Surigao del Norte',
    addressCountry: 'PH',
    phone: '+63 917 624 7132', // TODO: branch-specific number from GBP
    whatsapp: GENERAL_WHATSAPP, // TODO: branch-specific WhatsApp from GBP
    lat: 9.8073,
    lng: 126.1331,
    hours: DEFAULT_HOURS,
    services: ['wash-dry-fold', 'household-items', 'pickup-delivery', 'dry-cleaning'],
    description:
      'On Libertad Street in General Luna — the heart of Siargao\'s surf village. Fresh clothes for surfers, divers, digital nomads, and long-stay guests based on the island.',
    neighborhood: 'General Luna, Siargao',
    landmarks: 'near Cloud 9 surf area and General Luna town center, Siargao',
  },
];

export function getBranchBySlug(slug: string): Branch | undefined {
  return branches.find((b) => b.slug === slug);
}

export function formatHours(branch: Branch): string {
  return `Mon–Sat ${branch.hours.monFri.open.replace(':00', '')}:00 AM – ${parseInt(branch.hours.monFri.close) > 12 ? parseInt(branch.hours.monFri.close) - 12 : branch.hours.monFri.close}:00 PM | Sun ${branch.hours.sun.open.replace(':00', '')}:00 AM – ${parseInt(branch.hours.sun.close) > 12 ? parseInt(branch.hours.sun.close) - 12 : branch.hours.sun.close}:00 PM`;
}

export function hoursDisplay(branch: Branch) {
  const fmt = (t: string) => {
    const [h] = t.split(':');
    const n = parseInt(h);
    return n === 12 ? '12:00 PM' : n > 12 ? `${n - 12}:00 PM` : `${n}:00 AM`;
  };
  return {
    monFri: `${fmt(branch.hours.monFri.open)} – ${fmt(branch.hours.monFri.close)}`,
    sat:    `${fmt(branch.hours.sat.open)} – ${fmt(branch.hours.sat.close)}`,
    sun:    `${fmt(branch.hours.sun.open)} – ${fmt(branch.hours.sun.close)}`,
  };
}
