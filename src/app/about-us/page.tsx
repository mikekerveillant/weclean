import type { Metadata } from 'next';
import Link from 'next/link';
import { SITE_URL, GENERAL_WHATSAPP } from '@/data/pricing';

export const metadata: Metadata = {
  title: 'About WeClean Laundry Philippines',
  description:
    'Meet WeClean Laundry, founded in 2017 to make professional laundry care convenient and affordable across the Philippines. Big on Quality. WeClean for Less.',
  alternates: { canonical: `${SITE_URL}/about-us` },
};

const WHY = [
  {
    title: 'Established Expertise',
    desc: 'Proudly serving customers since 2017 across Metro Manila, El Nido, and Siargao.',
  },
  {
    title: 'Uncompromising Standards',
    desc: 'Tough on stains, gentle on fabrics. Every order processed separately — never mixed with other customers\'.',
  },
  {
    title: 'Budget-Friendly Pricing',
    desc: 'Honest per-load rates with zero hidden fees. Full Service from ₱165/load. Pickup & delivery free for nearby areas.',
  },
  {
    title: 'WhatsApp-First Booking',
    desc: 'Book a pickup in under a minute on WhatsApp. No app download, no account required.',
  },
];

const STATS = [
  { value: '10+', label: 'Years of care' },
  { value: '200K+', label: 'Customers yearly' },
  { value: '1,349+', label: '5-star reviews' },
  { value: '99.7%', label: 'Satisfaction rate' },
  { value: '13', label: 'Branches nationwide' },
];

export default function AboutPage() {
  const bookingLink = `https://wa.me/${GENERAL_WHATSAPP}?text=${encodeURIComponent("Hi WeClean! I'd like to learn more about your services.")}`;

  return (
    <>
      <section className="bg-brand-900 text-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-brand-300 text-sm font-semibold uppercase tracking-widest mb-3">About WeClean</p>
              <h1 className="text-4xl font-bold mb-4">Your hardworking partner for your daily wash</h1>
              <p className="text-brand-200 leading-relaxed text-lg">
                Since 2017, WeClean has believed everyone deserves perfectly folded, fresh laundry at a price
                you'll love. We treat your clothes like our own, keeping our standards high and our prices low
                so you can get back to what matters most.
              </p>
              <p className="text-brand-300 font-semibold mt-4 text-lg">Big on Quality. WeClean for less.</p>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {STATS.map((s) => (
                <div key={s.label} className="bg-brand-800/60 rounded-2xl p-5 text-center">
                  <p className="text-3xl font-bold text-white">{s.value}</p>
                  <p className="text-brand-300 text-xs mt-1">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-14 bg-white">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-brand-900 mb-8">Why Choose WeClean?</h2>
          <div className="grid sm:grid-cols-2 gap-6">
            {WHY.map((w) => (
              <div key={w.title} className="flex gap-4 p-5 border border-gray-100 rounded-xl">
                <div className="w-8 h-8 rounded-full bg-brand-100 flex items-center justify-center shrink-0 mt-0.5">
                  <svg className="w-4 h-4 text-brand-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-brand-900 mb-1">{w.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{w.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 bg-brand-900 text-white text-center">
        <div className="mx-auto max-w-xl px-4">
          <h2 className="text-2xl font-bold mb-3">Ready to experience WeClean?</h2>
          <p className="text-brand-200 mb-6 text-sm">Book a pickup in under a minute on WhatsApp — no app, no account, just fresh laundry.</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href={bookingLink}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-white text-brand-900 font-semibold px-6 py-2.5 text-sm hover:bg-brand-50 transition-colors"
            >
              Book on WhatsApp
            </a>
            <Link
              href="/branches"
              className="rounded-full border border-brand-500 text-brand-200 font-semibold px-6 py-2.5 text-sm hover:bg-brand-800 transition-colors"
            >
              Find a Branch
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
