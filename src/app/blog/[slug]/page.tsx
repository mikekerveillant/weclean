import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { MapPin, Clock, ArrowLeft } from 'lucide-react';
import { getBlogPost, BLOG_SLUGS } from '@/data/blog';
import { branches } from '@/data/branches';
import { buildBranchLink, buildBookingLink } from '@/lib/whatsapp';
import { SITE_URL } from '@/data/pricing';

interface Props {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return BLOG_SLUGS.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) return {};
  const url = `${SITE_URL}/blog/${slug}`;
  return {
    title: post.title,
    description: post.metaDescription,
    alternates: { canonical: url },
    openGraph: { title: post.title, description: post.metaDescription, url, type: 'article' },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) notFound();

  const nearbyBranches = post.nearbyBranchSlugs
    .map((s) => branches.find((b) => b.slug === s))
    .filter(Boolean) as typeof branches;

  const bookingUrl = buildBookingLink({});

  return (
    <>
      {/* Hero */}
      <section className="bg-brand-900 text-white py-14">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <Link
            href="/blog"
            className="inline-flex items-center gap-1.5 text-brand-300 text-sm mb-6 hover:text-white transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            All guides
          </Link>
          <div className="flex items-center gap-2 mb-4">
            <span className="text-xs font-semibold uppercase tracking-widest text-brand-300">
              {post.area}
            </span>
            <span className="text-brand-700">·</span>
            <span className={`text-xs rounded-full px-2.5 py-0.5 font-medium ${
              post.type === 'same-day'
                ? 'bg-brand-500/30 text-brand-200'
                : 'bg-brand-800 text-brand-300'
            }`}>
              {post.type === 'same-day' ? 'Same-day' : 'Guide'}
            </span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold leading-tight mb-4">{post.title}</h1>
          <p className="text-brand-200 text-lg leading-relaxed">{post.intro}</p>
        </div>
      </section>

      {/* Content + Sidebar */}
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-[1fr_300px] gap-10 items-start">

          {/* Article body */}
          <article>
            {post.sections.map((section) => (
              <div key={section.heading} className="mb-10">
                <h2 className="text-xl font-bold text-brand-900 mb-4 pb-2 border-b border-gray-100">
                  {section.heading}
                </h2>
                <div className="space-y-4">
                  {section.paragraphs.map((p, i) => (
                    <p key={i} className="text-gray-600 leading-relaxed">{p}</p>
                  ))}
                </div>
              </div>
            ))}

            {/* FAQ */}
            {post.faqs.length > 0 && (
              <div className="mt-12">
                <h2 className="text-xl font-bold text-brand-900 mb-6">Frequently Asked Questions</h2>
                <div className="space-y-3">
                  {post.faqs.map((faq, i) => (
                    <details key={i} className="group bg-brand-50 rounded-xl border border-brand-100 overflow-hidden">
                      <summary className="flex items-center justify-between px-5 py-4 cursor-pointer font-medium text-brand-900 text-sm select-none list-none">
                        {faq.q}
                        <svg
                          className="w-4 h-4 text-brand-500 shrink-0 transition-transform group-open:rotate-180"
                          fill="none" stroke="currentColor" viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </summary>
                      <div className="px-5 pb-4 text-sm text-gray-600 leading-relaxed border-t border-brand-100 pt-3">
                        {faq.a}
                      </div>
                    </details>
                  ))}
                </div>
              </div>
            )}
          </article>

          {/* Sidebar */}
          <aside className="space-y-5 lg:sticky lg:top-20">

            {/* Book CTA */}
            <div className="bg-brand-900 text-white rounded-2xl p-6">
              <p className="text-brand-300 text-xs font-semibold uppercase tracking-widest mb-2">Ready to book?</p>
              <p className="font-bold text-lg mb-1">WeClean {post.area}</p>
              <p className="text-brand-200 text-sm mb-5">
                {post.type === 'same-day'
                  ? 'Message us before 10AM for same-day rush service.'
                  : 'Free pickup. 24-hour turnaround. No hidden fees.'}
              </p>
              <a
                href={bookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full rounded-full bg-white text-brand-900 font-semibold py-3 text-sm hover:bg-brand-50 transition-colors"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                  <path d="M12 0C5.373 0 0 5.373 0 12c0 2.103.545 4.08 1.498 5.797L0 24l6.335-1.462A11.93 11.93 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.854 0-3.598-.503-5.103-1.382l-.366-.217-3.764.869.944-3.661-.239-.382A9.93 9.93 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" />
                </svg>
                Book on WhatsApp
              </a>
            </div>

            {/* Nearby branches */}
            {nearbyBranches.length > 0 && (
              <div className="border border-gray-100 rounded-2xl p-5">
                <p className="text-xs font-semibold uppercase tracking-widest text-brand-600 mb-4">
                  WeClean near {post.area}
                </p>
                <div className="space-y-3">
                  {nearbyBranches.map((branch) => (
                    <div key={branch.slug} className="text-sm">
                      <Link
                        href={`/branches/${branch.slug}`}
                        className="font-semibold text-brand-900 hover:text-brand-700 transition-colors"
                      >
                        {branch.name}
                      </Link>
                      <p className="flex items-start gap-1.5 text-gray-500 mt-0.5 text-xs">
                        <MapPin className="w-3 h-3 shrink-0 mt-0.5 text-brand-400" />
                        {branch.streetAddress}, {branch.cityDisplay}
                      </p>
                      <p className="flex items-center gap-1.5 text-gray-400 mt-0.5 text-xs">
                        <Clock className="w-3 h-3 shrink-0 text-brand-400" />
                        Mon–Sat 8AM–8PM · Sun 9AM–6PM
                      </p>
                      <a
                        href={buildBranchLink(branch)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block mt-1.5 text-xs font-semibold text-brand-600 hover:text-brand-800 transition-colors"
                      >
                        Book this branch →
                      </a>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Pricing quick ref */}
            <div className="bg-brand-50 rounded-2xl p-5 text-sm">
              <p className="text-xs font-semibold uppercase tracking-widest text-brand-600 mb-3">Quick Pricing</p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex justify-between"><span>Full service / load</span><span className="font-semibold text-brand-900">₱165</span></li>
                <li className="flex justify-between"><span>Household items / load</span><span className="font-semibold text-brand-900">₱170</span></li>
                <li className="flex justify-between"><span>Pickup & delivery</span><span className="font-semibold text-brand-900">FREE</span></li>
                <li className="flex justify-between"><span>Same-day rush</span><span className="font-semibold text-brand-900">2× rate</span></li>
              </ul>
              <Link
                href="/pricing"
                className="block mt-3 text-xs text-brand-600 hover:text-brand-800 font-semibold transition-colors"
              >
                View full pricing →
              </Link>
            </div>
          </aside>
        </div>
      </div>

      {/* Bottom CTA */}
      <section className="bg-brand-900 text-white py-12 text-center">
        <div className="mx-auto max-w-xl px-4">
          <h2 className="text-2xl font-bold mb-3">Fresh laundry in 24 hours</h2>
          <p className="text-brand-200 mb-6 text-sm">
            Book a pickup in under a minute on WhatsApp — no app, no account required.
          </p>
          <a
            href={bookingUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-white text-brand-900 font-semibold px-7 py-3 text-sm hover:bg-brand-50 transition-colors"
          >
            Book on WhatsApp
          </a>
        </div>
      </section>
    </>
  );
}
