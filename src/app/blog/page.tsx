import type { Metadata } from 'next';
import Link from 'next/link';
import { SITE_URL } from '@/data/pricing';
import { blogPosts } from '@/data/blog';

export const metadata: Metadata = {
  title: 'WeClean Blog · Laundry Guides Across Metro Manila',
  description:
    'Practical guides on choosing a laundry shop, sneaker care, same-day service, and laundry tips across Pasig, Taguig, Makati, Quezon City, El Nido, Siargao, and more.',
  alternates: { canonical: `${SITE_URL}/blog` },
};

const TYPE_LABELS: Record<string, string> = {
  guide: 'Guide',
  'same-day': 'Same-Day',
  informational: 'How-To',
  sneaker: 'Sneaker Care',
};

const TYPE_CLASSES: Record<string, string> = {
  guide: 'bg-gray-100 text-gray-600',
  'same-day': 'bg-brand-100 text-brand-700',
  informational: 'bg-green-50 text-green-700',
  sneaker: 'bg-orange-50 text-orange-700',
};

export default function BlogPage() {
  return (
    <>
      <section className="bg-brand-900 text-white py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-brand-300 text-sm font-semibold uppercase tracking-widest mb-2">Guides</p>
          <h1 className="text-4xl font-bold mb-3">Local Laundry Guides</h1>
          <p className="text-brand-200 max-w-xl mx-auto">
            Honest, practical guides on choosing a laundry shop, same-day service, sneaker care, and laundry tips for every neighbourhood.
          </p>
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {blogPosts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group border border-gray-100 rounded-2xl p-5 hover:shadow-md transition-shadow"
              >
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-xs font-semibold uppercase tracking-widest text-brand-600">{post.area}</span>
                  <span className="text-gray-300">·</span>
                  <span className={`text-xs rounded-full px-2 py-0.5 font-medium ${TYPE_CLASSES[post.type] ?? 'bg-gray-100 text-gray-600'}`}>
                    {TYPE_LABELS[post.type] ?? post.type}
                  </span>
                </div>
                <h2 className="font-semibold text-brand-900 mb-2 group-hover:text-brand-700 transition-colors leading-snug">
                  {post.title}
                </h2>
                <p className="text-sm text-gray-500 leading-relaxed">{post.metaDescription}</p>
                <p className="text-xs text-brand-600 font-semibold mt-3 group-hover:text-brand-800 transition-colors">
                  Read guide →
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
