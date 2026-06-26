import type { Metadata } from 'next';
import Link from 'next/link';
import { pricing, supplies, specialtyPricingNote, COMMERCIAL_WHATSAPP, GENERAL_WHATSAPP, SITE_URL } from '@/data/pricing';

export const metadata: Metadata = {
  title: 'Plans & Pricing | WeClean Philippines',
  description:
    'WeClean laundry pricing: Self-service wash ₱60 / dry ₱70 (7kg). Full service ₱165/load. Pickup & delivery FREE. Rush same-day 2×. Monthly membership plans coming soon.',
  alternates: { canonical: `${SITE_URL}/pricing` },
};

const generalLink = `https://wa.me/${GENERAL_WHATSAPP}?text=${encodeURIComponent("Hi WeClean! I have a question about pricing.")}`;
const commercialLink = `https://wa.me/${COMMERCIAL_WHATSAPP}?text=${encodeURIComponent("Hi WeClean! I'd like a quote for commercial laundry services.")}`;
const membershipInquiryLink = `https://wa.me/${GENERAL_WHATSAPP}?text=${encodeURIComponent("Hi WeClean! I'm interested in your membership plans.")}`;

const PLANS = [
  {
    id: 'starter',
    name: 'Starter',
    tagline: 'For singles and students',
    kgPerMonth: 20,
    pickupsPerMonth: 4,
    perks: [
      '20 kg laundry per month',
      '4 scheduled pickups',
      'Priority booking slots',
      'Free delivery within zone',
    ],
    cta: 'Get Starter Plan',
    highlight: false,
  },
  {
    id: 'family',
    name: 'Family',
    tagline: 'For households of 2–4',
    kgPerMonth: 40,
    pickupsPerMonth: 8,
    perks: [
      '40 kg laundry per month',
      '8 scheduled pickups',
      'Priority booking slots',
      'Free delivery within zone',
      'Household items included',
    ],
    cta: 'Get Family Plan',
    highlight: true,
  },
  {
    id: 'household',
    name: 'Household Plus',
    tagline: 'For large families or shared units',
    kgPerMonth: 70,
    pickupsPerMonth: 12,
    perks: [
      '70 kg laundry per month',
      '12 scheduled pickups',
      'Priority booking slots',
      'Free delivery within zone',
      'Household items included',
      'Dedicated account support',
    ],
    cta: 'Get Household Plan',
    highlight: false,
  },
];

export default function PricingPage() {
  return (
    <>
      <section className="bg-brand-900 text-white py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-brand-300 text-sm font-semibold uppercase tracking-widest mb-2">Transparent rates</p>
          <h1 className="text-4xl font-bold mb-3">Simple, Honest Pricing</h1>
          <p className="text-brand-200 max-w-xl mx-auto">
            Per-load pricing at branch. Pickup & delivery free for nearby areas. No hidden fees.
          </p>
        </div>
      </section>

      <section className="py-14 bg-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">

          {/* Self-service */}
          <div className="mb-6">
            <h2 className="text-sm font-semibold uppercase tracking-widest text-brand-600 mb-3">Self Service</h2>
            <div className="grid grid-cols-2 gap-4">
              {pricing.filter(t => t.selfService).map((tier) => (
                <div key={tier.id} className="bg-brand-50 border border-brand-100 rounded-2xl p-5 flex items-center justify-between">
                  <div>
                    <p className="font-bold text-brand-900 text-lg">{tier.label}</p>
                    <p className="text-brand-500 text-xs mt-0.5">{tier.subtitle}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-3xl font-bold text-brand-900">₱{tier.pricePerLoad}</p>
                    <p className="text-brand-500 text-xs">per load</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Full-service table */}
          <div className="bg-brand-900 rounded-3xl overflow-hidden mb-10 text-white">
            <div className="p-6 border-b border-brand-800">
              <h2 className="text-lg font-bold">Full Service</h2>
              <p className="text-brand-300 text-sm">Wash, dry &amp; fold — per-load rates at any WeClean branch</p>
            </div>
            <div className="divide-y divide-brand-800">
              {pricing.filter(t => !t.selfService).map((tier) => (
                <div key={tier.id} className="grid grid-cols-3 gap-4 px-6 py-5 items-center">
                  <div>
                    <p className="font-semibold text-white">{tier.label}</p>
                    {tier.badge && <p className="text-brand-300 text-xs">{tier.badge}</p>}
                    {tier.subtitle && <p className="text-brand-400 text-xs mt-0.5">{tier.subtitle}</p>}
                  </div>
                  <div className="text-center">
                    {tier.id === 'pickup-delivery' ? (
                      <span className="text-2xl font-bold text-white">FREE</span>
                    ) : (
                      <>
                        <span className="text-2xl font-bold text-white">₱{tier.pricePerLoad}</span>
                        <p className="text-brand-400 text-xs mt-0.5">per load</p>
                      </>
                    )}
                  </div>
                  <div className="text-center">
                    {tier.rushMultiplier && tier.pricePerLoad ? (
                      <>
                        <span className="text-xl font-bold text-brand-300">₱{tier.pricePerLoad * tier.rushMultiplier}</span>
                        <p className="text-brand-400 text-xs mt-0.5">Rush (same-day)</p>
                      </>
                    ) : tier.id === 'pickup-delivery' ? (
                      <span className="text-brand-400 text-xs">Confirm zone with branch</span>
                    ) : (
                      <span className="text-brand-500 text-xs">—</span>
                    )}
                  </div>
                </div>
              ))}
            </div>
            <div className="px-6 py-4 bg-brand-800/40 text-xs text-brand-400">
              Rush (same-day) service is 2× the standard per-load rate. Availability may vary by branch.
            </div>
          </div>

          {/* ── Membership plans ───────────────────────────────────────────── */}
          <div id="membership" className="mb-10 scroll-mt-24">
            <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
              <div>
                <p className="text-xs font-semibold text-brand-600 uppercase tracking-widest mb-1">Monthly plans</p>
                <h2 className="text-lg font-bold text-brand-900">Monthly Membership</h2>
                <p className="text-gray-500 text-sm mt-0.5">Doing laundry every week? Save with a monthly plan instead of paying per load.</p>
              </div>
              <span className="inline-flex items-center bg-amber-100 text-amber-800 text-xs font-semibold px-3 py-1.5 rounded-full shrink-0">
                Coming Soon — Join the waitlist
              </span>
            </div>

            <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 mb-6 text-sm text-amber-800">
              <strong>Note:</strong> Monthly pricing is being finalized. The structure and inclusions below represent the planned offering.{' '}
              <a href={membershipInquiryLink} target="_blank" rel="noopener noreferrer" className="underline underline-offset-2 hover:text-amber-900">
                Message us on WhatsApp to join the waitlist.
              </a>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {PLANS.map((plan) => (
                <div
                  key={plan.id}
                  className={`rounded-2xl p-6 border-2 ${
                    plan.highlight ? 'border-brand-600 bg-brand-50' : 'border-gray-100 bg-white'
                  }`}
                >
                  {plan.highlight && (
                    <span className="inline-block bg-brand-600 text-white text-xs font-semibold px-3 py-1 rounded-full mb-3">
                      Most Popular
                    </span>
                  )}
                  <h3 className="text-xl font-bold text-brand-900">{plan.name}</h3>
                  <p className="text-gray-500 text-sm mb-4">{plan.tagline}</p>
                  <div className="mb-4">
                    <p className="text-brand-600 font-semibold text-sm">Price TBD — inquire via WhatsApp</p>
                  </div>
                  <ul className="space-y-2 mb-6">
                    {plan.perks.map((p) => (
                      <li key={p} className="flex items-start gap-2 text-sm text-gray-600">
                        <svg className="w-4 h-4 text-brand-500 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        {p}
                      </li>
                    ))}
                  </ul>
                  <a
                    href={membershipInquiryLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`block text-center rounded-full font-semibold py-2.5 text-sm transition-colors ${
                      plan.highlight
                        ? 'bg-brand-700 text-white hover:bg-brand-800'
                        : 'border border-brand-300 text-brand-700 hover:bg-brand-50'
                    }`}
                  >
                    {plan.cta}
                  </a>
                </div>
              ))}
            </div>
          </div>

          {/* Laundry supplies */}
          <div className="border border-gray-100 rounded-2xl p-6 mb-8">
            <h2 className="font-bold text-brand-900 mb-4">Laundry Supplies (available at branch)</h2>
            <div className="flex flex-wrap gap-4">
              {supplies.map((s) => (
                <div key={s.name} className="flex items-center gap-2 bg-brand-50 rounded-xl px-4 py-2">
                  <span className="text-sm text-brand-800 font-medium">{s.name}</span>
                  <span className="text-brand-600 font-bold">₱{s.price}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Specialty note */}
          <div className="border border-brand-100 rounded-2xl p-6 bg-brand-50 mb-8">
            <h2 className="font-bold text-brand-900 mb-2">Dry Cleaning & UltraSonic Sneakers</h2>
            <p className="text-gray-600 text-sm leading-relaxed">{specialtyPricingNote}</p>
          </div>

          {/* Payment methods */}
          <div className="border border-gray-100 rounded-2xl p-6 mb-10">
            <h2 className="font-bold text-brand-900 mb-3">Payment Methods</h2>
            <div className="flex flex-wrap gap-3">
              {['Cash', 'GCash', 'QR Ph-affiliated banks'].map((p) => (
                <span key={p} className="bg-gray-100 text-gray-700 text-sm rounded-full px-4 py-1.5">
                  {p}
                </span>
              ))}
            </div>
          </div>

          {/* Commercial */}
          <div className="bg-brand-900 rounded-2xl p-6 text-white text-center">
            <h2 className="font-bold text-xl mb-2">Commercial Laundry</h2>
            <p className="text-brand-200 text-sm mb-4 max-w-md mx-auto">
              Hospitality, wellness, restaurants, and local businesses — get a custom plan and quote for your volume.
            </p>
            <a
              href={commercialLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-white text-brand-900 font-semibold px-6 py-2.5 text-sm hover:bg-brand-50 transition-colors"
            >
              Request a Quote on WhatsApp
            </a>
          </div>

          {/* CTA */}
          <div className="mt-8 text-center">
            <p className="text-gray-500 text-sm mb-4">Have pricing questions?</p>
            <a
              href={generalLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-semibold text-brand-700 hover:text-brand-900 transition-colors"
            >
              Message us on WhatsApp →
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
