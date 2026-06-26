import type { Metadata } from 'next';
import { reviews } from '@/data/reviews';
import { SITE_URL, GENERAL_WHATSAPP } from '@/data/pricing';

export const metadata: Metadata = {
  title: 'Customer Reviews | WeClean Philippines',
  description:
    'Read genuine Google reviews from WeClean laundry customers across the Philippines. 1,349+ 5-star reviews. 99.7% satisfaction rate.',
  alternates: { canonical: `${SITE_URL}/reviews` },
};

const aggregateRatingSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'WeClean Laundry Philippines',
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '5',
    bestRating: '5',
    worstRating: '1',
    ratingCount: '1349',
  },
};

export default function ReviewsPage() {
  const bookingLink = `https://wa.me/${GENERAL_WHATSAPP}?text=${encodeURIComponent("Hi WeClean! I'd like to book a pickup.")}`;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aggregateRatingSchema) }}
      />

      <section className="bg-brand-900 text-white py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-brand-300 text-sm font-semibold uppercase tracking-widest mb-2">Real experiences</p>
          <h1 className="text-4xl font-bold mb-3">Loved by WeClean customers</h1>
          <p className="text-brand-200 max-w-xl mx-auto">
            These genuine comments were shared on Google and reflect real experiences with our service and teams.
          </p>
          <div className="flex justify-center gap-8 mt-8">
            <div className="text-center">
              <p className="text-3xl font-bold text-white">1,349+</p>
              <p className="text-brand-300 text-sm">5-star reviews</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-white">99.7%</p>
              <p className="text-brand-300 text-sm">Satisfaction rate</p>
            </div>
            <div className="text-center">
              <div className="flex gap-0.5 justify-center mb-1">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-brand-300 text-sm">Google rating</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {reviews.map((r) => (
              <div key={r.name} className="border border-gray-100 rounded-2xl p-5">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-9 h-9 rounded-full bg-brand-100 flex items-center justify-center text-brand-700 font-bold text-xs shrink-0">
                    {r.initials}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-gray-900">{r.name}</p>
                    {r.branch && <p className="text-xs text-brand-500">{r.branch}</p>}
                  </div>
                </div>
                <div className="flex gap-0.5 mb-2">
                  {[...Array(r.rating)].map((_, i) => (
                    <svg key={i} className="w-3.5 h-3.5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-sm text-gray-600 leading-relaxed">{r.text}</p>
                <p className="text-xs text-gray-400 mt-3">{r.date} · {r.source}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-10 bg-brand-50 text-center">
        <div className="mx-auto max-w-xl px-4">
          <p className="text-gray-600 mb-4">Ready to experience WeClean yourself?</p>
          <a
            href={bookingLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-brand-700 text-white font-semibold px-6 py-2.5 text-sm hover:bg-brand-800 transition-colors"
          >
            Book a Pickup on WhatsApp
          </a>
        </div>
      </section>
    </>
  );
}
