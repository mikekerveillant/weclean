import type { Metadata } from 'next';
import Link from 'next/link';
import { services } from '@/data/services';
import { buildServiceLink } from '@/lib/whatsapp';
import { COMMERCIAL_WHATSAPP, SITE_URL } from '@/data/pricing';

export const metadata: Metadata = {
  title: 'Laundry Services | WeClean Philippines',
  description:
    'Explore WeClean laundry services: Wash Dry & Fold, Household Items, Pickup & Delivery, Dry Cleaning, UltraSonic Sneaker Cleaning, and Commercial Laundry.',
  alternates: { canonical: `${SITE_URL}/services` },
};

export default function ServicesPage() {
  const commercialLink = `https://wa.me/${COMMERCIAL_WHATSAPP}?text=${encodeURIComponent("Hi WeClean! I'd like a quote for commercial laundry services.")}`;

  return (
    <>
      <section className="bg-brand-900 text-white py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-brand-300 text-sm font-semibold uppercase tracking-widest mb-2">Complete garment care</p>
          <h1 className="text-4xl font-bold mb-3">Laundry Services</h1>
          <p className="text-brand-200 max-w-xl mx-auto">
            A service for every load — from weekly essentials to sneakers, household textiles, and business laundry.
          </p>
        </div>
      </section>

      <section className="py-14 bg-white">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 space-y-10">
          {services.map((svc) => {
            const isCommercial = svc.slug === 'commercial-laundry';
            const ctaHref = isCommercial ? commercialLink : buildServiceLink(svc.name);
            return (
              <div key={svc.slug} className="border border-gray-100 rounded-2xl p-7">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                  <div className="flex-1">
                    <span className="inline-block text-xs font-semibold uppercase tracking-widest text-brand-600 mb-2">
                      {svc.tagline}
                    </span>
                    <h2 className="text-2xl font-bold text-brand-900 mb-3">{svc.name}</h2>
                    <p className="text-gray-600 leading-relaxed mb-4">{svc.description}</p>
                    <ul className="space-y-2">
                      {svc.highlights.map((h) => (
                        <li key={h} className="flex items-start gap-2 text-sm text-gray-600">
                          <svg className="w-4 h-4 text-brand-500 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          {h}
                        </li>
                      ))}
                    </ul>
                    <p className="text-xs text-gray-400 mt-4">
                      <strong>Availability:</strong> {svc.availability}
                    </p>
                  </div>
                  <div className="sm:text-right">
                    <a
                      href={ctaHref}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-full bg-brand-700 text-white font-semibold px-5 py-2.5 text-sm hover:bg-brand-800 transition-colors"
                    >
                      {svc.cta}
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <section className="py-10 bg-brand-50 text-center">
        <div className="mx-auto max-w-xl px-4">
          <p className="text-gray-600 text-sm mb-4">
            Not sure which service you need?{' '}
            <Link href="/pricing" className="text-brand-700 font-semibold hover:text-brand-900">
              View full pricing
            </Link>{' '}
            or{' '}
            <a
              href={`https://wa.me/${COMMERCIAL_WHATSAPP}?text=${encodeURIComponent("Hi WeClean! I have a question about your services.")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand-700 font-semibold hover:text-brand-900"
            >
              message us on WhatsApp
            </a>
            .
          </p>
        </div>
      </section>
    </>
  );
}
