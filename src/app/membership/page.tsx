import type { Metadata } from 'next';
import { SITE_URL, GENERAL_WHATSAPP } from '@/data/pricing';

export const metadata: Metadata = {
  title: 'WeClean Membership | Monthly Laundry Plans',
  description:
    'WeClean membership plans for regular laundry customers — monthly inclusions, priority pickup, and member benefits. Choose a plan that fits your household.',
  alternates: { canonical: `${SITE_URL}/membership` },
};

// TODO: Finalize plan names, kg inclusions, prices, and perks with operations.
// The tiers below are placeholder structures — do not publish prices until confirmed.
const PLANS = [
  {
    id: 'starter',
    name: 'Starter',
    tagline: 'For singles and students',
    pricePerMonth: null, // TODO: confirm price
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
    pricePerMonth: null, // TODO: confirm price
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
    pricePerMonth: null, // TODO: confirm price
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

export default function MembershipPage() {
  const inquiryLink = `https://wa.me/${GENERAL_WHATSAPP}?text=${encodeURIComponent("Hi WeClean! I'm interested in your membership plans.")}`;

  return (
    <>
      <section className="bg-brand-900 text-white py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-brand-300 text-sm font-semibold uppercase tracking-widest mb-2">WeClean Plans</p>
          <h1 className="text-4xl font-bold mb-3">Monthly Membership</h1>
          <p className="text-brand-200 max-w-xl mx-auto">
            Regular laundry on a plan — predictable pricing, priority pickups, and member perks every month.
          </p>
          <div className="mt-4 inline-block bg-brand-800 text-brand-300 text-xs rounded-full px-4 py-1.5 font-medium">
            Coming Soon — Join the waitlist on WhatsApp
          </div>
        </div>
      </section>

      <section className="py-14 bg-white">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">

          {/* Pricing note */}
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 mb-10 text-sm text-amber-800">
            <strong>Note:</strong> Monthly pricing for these plans is being finalized. The structure and inclusions
            below represent the planned offering. Message us on WhatsApp to join the waitlist or ask about availability.
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {PLANS.map((plan) => (
              <div
                key={plan.id}
                className={`rounded-2xl p-6 border-2 ${
                  plan.highlight
                    ? 'border-brand-600 bg-brand-50'
                    : 'border-gray-100 bg-white'
                }`}
              >
                {plan.highlight && (
                  <span className="inline-block bg-brand-600 text-white text-xs font-semibold px-3 py-1 rounded-full mb-3">
                    Most Popular
                  </span>
                )}
                <h2 className="text-xl font-bold text-brand-900">{plan.name}</h2>
                <p className="text-gray-500 text-sm mb-4">{plan.tagline}</p>

                <div className="mb-4">
                  {plan.pricePerMonth ? (
                    <p className="text-3xl font-bold text-brand-900">₱{plan.pricePerMonth}<span className="text-sm font-normal text-gray-400">/month</span></p>
                  ) : (
                    <p className="text-brand-600 font-semibold text-sm">Price TBD — inquire via WhatsApp</p>
                  )}
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
                  href={inquiryLink}
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
      </section>
    </>
  );
}
