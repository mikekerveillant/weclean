import type { Metadata } from 'next';
import { SITE_URL, GENERAL_WHATSAPP } from '@/data/pricing';

export const metadata: Metadata = {
  title: 'Referral Program | WeClean Philippines',
  description:
    'Refer a friend to WeClean and earn rewards. Your friend gets a discount on their first booking, and you earn points toward free washes.',
  alternates: { canonical: `${SITE_URL}/referral` },
};

// TODO: Finalize referral mechanics (reward amounts, redemption rules) with operations.
// The structure below is the planned program — do not publish final rules until confirmed.

export default function ReferralPage() {
  const inquiryLink = `https://wa.me/${GENERAL_WHATSAPP}?text=${encodeURIComponent("Hi WeClean! I'm interested in the referral program.")}`;

  return (
    <>
      <section className="bg-brand-900 text-white py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-brand-300 text-sm font-semibold uppercase tracking-widest mb-2">Rewards</p>
          <h1 className="text-4xl font-bold mb-3">Refer a Friend, Earn Rewards</h1>
          <p className="text-brand-200 max-w-xl mx-auto">
            Share WeClean with your neighbors and friends. You both benefit — every time.
          </p>
          <div className="mt-4 inline-block bg-brand-800 text-brand-300 text-xs rounded-full px-4 py-1.5 font-medium">
            Coming Soon — Message us to join the waitlist
          </div>
        </div>
      </section>

      <section className="py-14 bg-white">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 mb-10 text-sm text-amber-800">
            <strong>Note:</strong> The referral program is in development. Reward amounts and redemption rules
            are being finalized. Message us on WhatsApp to get notified when it launches.
          </div>

          {/* How it works */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-brand-900 mb-6">How the referral program works</h2>
            <div className="space-y-5">
              {[
                {
                  step: '1',
                  title: 'Get your referral code',
                  desc: 'Every WeClean customer gets a unique referral code after their first booking. Message us on WhatsApp to request yours.',
                },
                {
                  step: '2',
                  title: 'Share it with friends',
                  desc: 'Send your code to friends, housemates, or colleagues in your area. They use it when booking their first WeClean pickup.',
                },
                {
                  step: '3',
                  title: 'Your friend gets a discount',
                  desc: 'Your referred friend receives a discount on their first completed booking. Amount TBD — to be confirmed at launch.',
                },
                {
                  step: '4',
                  title: 'You earn rewards',
                  desc: 'You earn reward points for each successful referral. Redeem points toward free washes or service upgrades. Mechanics TBD.',
                },
              ].map((s) => (
                <div key={s.step} className="flex gap-4 p-5 border border-gray-100 rounded-xl">
                  <div className="w-9 h-9 rounded-full bg-brand-100 flex items-center justify-center shrink-0 text-brand-700 font-bold text-sm">
                    {s.step}
                  </div>
                  <div>
                    <h3 className="font-semibold text-brand-900 mb-1">{s.title}</h3>
                    <p className="text-gray-500 text-sm leading-relaxed">{s.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Loyalty points note */}
          <div className="border border-brand-100 rounded-2xl p-6 bg-brand-50 mb-8">
            <h2 className="font-bold text-brand-900 mb-3">Loyalty Points</h2>
            <p className="text-gray-600 text-sm leading-relaxed mb-3">
              Beyond referrals, WeClean is building a loyalty points system where regular customers earn
              points on every completed wash — redeemable toward free loads, priority slots, or service upgrades.
            </p>
            <p className="text-xs text-gray-400">
              Specific earn rates and redemption tiers are being finalized. Message us to join the waitlist.
            </p>
          </div>

          <div className="text-center">
            <a
              href={inquiryLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-brand-700 text-white font-semibold px-8 py-3 text-sm hover:bg-brand-800 transition-colors"
            >
              Join the Waitlist on WhatsApp
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
