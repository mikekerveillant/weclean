import type { Metadata } from 'next';
import type { ElementType } from 'react';
import Link from 'next/link';
import {
  ShoppingBag, Truck, Sparkles, PackageCheck,
  MapPin, WashingMachine, Home, Wind, Zap, Building2, Star,
} from 'lucide-react';
import BookingForm from '@/components/BookingForm';
import { branches } from '@/data/branches';
import { services } from '@/data/services';
import { reviews } from '@/data/reviews';
import { faqs } from '@/data/faqs';
import { pricing } from '@/data/pricing';
import { buildServiceLink, buildBookingLink } from '@/lib/whatsapp';
import { faqPageSchema, webPageSchema } from '@/lib/schema';
import { SITE_URL, GENERAL_WHATSAPP } from '@/data/pricing';

export const metadata: Metadata = {
  title: 'WeClean | Laundry & Pickup Philippines',
  description:
    'Premium laundry, sneaker cleaning, pickup and delivery — fresh, clean and ready in 24 hours. Big on Quality. WeClean for Less. 13 branches across the Philippines.',
  alternates: { canonical: SITE_URL },
};

const rushLink = `https://wa.me/${GENERAL_WHATSAPP}?text=${encodeURIComponent("Hi WeClean! I'd like a rush same-day pickup.")}`;

const HOW_IT_WORKS = [
  { step: '01', title: 'Bag Your Clothes', desc: 'Gather your items and separate delicates if needed.', Icon: ShoppingBag },
  { step: '02', title: 'We Pick Up', desc: 'Choose your preferred day and time window.', Icon: Truck },
  { step: '03', title: 'Expert Processing', desc: 'Premium products and careful techniques, every order separate.', Icon: Sparkles },
  { step: '04', title: 'We Deliver', desc: 'Fresh clothes back within 24 hours.', Icon: PackageCheck },
];

const STATS = [
  { value: '10+', label: 'Years of care' },
  { value: '200K+', label: 'Customers yearly' },
  { value: '1,349+', label: '5-star reviews' },
  { value: '99.7%', label: 'Satisfaction rate' },
];

const SERVICE_ICONS: Record<string, ElementType> = {
  'wash-dry-fold': WashingMachine,
  'household-items': Home,
  'pickup-delivery': Truck,
  'dry-cleaning': Wind,
  'ultrasonic-sneakers': Zap,
  'commercial-laundry': Building2,
};

export default function HomePage() {
  const faqSchema = faqPageSchema(faqs.slice(0, 6));
  const pageSchema = webPageSchema({
    slug: '',
    title: 'WeClean | Laundry & Pickup Philippines',
    description:
      'Premium laundry, sneaker cleaning, pickup and delivery. Big on Quality. WeClean for Less.',
  });

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* ── Hero ──────────────────────────────────────────────────────────── */}
      <section className="bg-brand-900 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Copy */}
            <div>
              <p className="text-brand-300 text-sm font-medium tracking-widest uppercase mb-3">
                Your trusted laundry partner
              </p>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-4">
                Big on Quality.<br />
                <span className="text-brand-300">WeClean for Less.</span>
              </h1>
              <p className="text-brand-200 text-lg leading-relaxed mb-8 max-w-lg">
                We care for the clothes you wear. Fast 24-hour service across the Philippines
                at a price you'll love. Premium Care. Budget Fare.
              </p>
              <div className="flex flex-wrap gap-4 text-sm mb-8">
                {['Pick-up & delivery', '24 hours guaranteed', 'Premium garment care', '99.7% satisfaction'].map((f) => (
                  <span key={f} className="flex items-center gap-1.5 text-brand-200">
                    <svg className="w-4 h-4 text-brand-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {f}
                  </span>
                ))}
              </div>
              <a
                href={rushLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-brand-300 hover:text-white transition-colors underline underline-offset-2"
              >
                In a rush? Message us on WhatsApp for same-day service →
              </a>
            </div>

            {/* Booking widget */}
            <div id="booking" className="bg-brand-800/60 backdrop-blur rounded-2xl p-6 border border-brand-700 scroll-mt-24">
              <h2 className="text-white font-semibold text-lg mb-1">Request a Pick-Up</h2>
              <p className="text-brand-300 text-sm mb-4">
                Fill in your details and we'll open WhatsApp with everything pre-filled.
              </p>
              <BookingForm />
            </div>
          </div>
        </div>
      </section>

      {/* ── Trust strip ───────────────────────────────────────────────────── */}
      <div className="bg-brand-800 py-3 overflow-hidden">
        <div className="flex animate-marquee whitespace-nowrap">
          {[
            '10+ years of trusted care',
            '200K+ customers yearly',
            '1,349+ five-star reviews',
            '24-hour turnaround guaranteed',
            '13 branches Philippines-wide',
            'Premium care — budget fare',
          ].concat([
            '10+ years of trusted care',
            '200K+ customers yearly',
            '1,349+ five-star reviews',
            '24-hour turnaround guaranteed',
            '13 branches Philippines-wide',
            'Premium care — budget fare',
          ]).map((item, i) => (
            <span key={i} className="mx-6 flex items-center gap-2 text-brand-200 text-sm font-medium">
              <Star className="w-3 h-3 text-brand-400 fill-brand-400 shrink-0" />
              {item}
            </span>
          ))}
        </div>
      </div>

      {/* ── Pricing snapshot ──────────────────────────────────────────────── */}
      <section id="pricing" className="bg-brand-50 py-12 scroll-mt-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-brand-900">Simple, Honest Pricing</h2>
            <p className="text-gray-600 text-sm mt-2">No hidden fees. Per-load pricing at branch or per-kilo for pickup & delivery.</p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-3xl mx-auto">
            {pricing.filter(p => !p.selfService).map((tier) => (
              <div key={tier.id} className="bg-white rounded-2xl p-4 text-center shadow-sm border border-brand-100">
                <p className="text-xs text-brand-600 font-semibold uppercase tracking-wide mb-1">
                  {tier.label}
                  {tier.badge && <span className="block normal-case text-gray-400 font-normal">{tier.badge}</span>}
                </p>
                {tier.id === 'pickup-delivery' ? (
                  <p className="text-2xl font-bold text-brand-900">FREE</p>
                ) : tier.pricePerLoad ? (
                  <p className="text-2xl font-bold text-brand-900">₱{tier.pricePerLoad}</p>
                ) : (
                  <p className="text-sm text-gray-500 mt-1">Ask branch</p>
                )}
                {tier.subtitle && <p className="text-xs text-gray-400 mt-0.5">{tier.subtitle}</p>}
                {tier.rushMultiplier && (
                  <p className="text-xs text-brand-500 mt-1 font-medium">Rush: ₱{(tier.pricePerLoad! * tier.rushMultiplier)} same-day</p>
                )}
              </div>
            ))}
          </div>
          <p className="text-center mt-4">
            <Link href="/pricing" className="text-sm text-brand-600 hover:text-brand-800 font-medium">
              View full pricing →
            </Link>
          </p>
        </div>
      </section>

      {/* ── Services ──────────────────────────────────────────────────────── */}
      <section id="services" className="py-16 bg-white scroll-mt-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-brand-600 text-sm font-semibold uppercase tracking-widest mb-2">Our Services</p>
            <h2 className="text-3xl font-bold text-brand-900">Premium Care for Every Fabric</h2>
            <p className="text-gray-500 mt-3 max-w-xl mx-auto">
              From everyday essentials to specialty items, expert care with every order processed separately.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((svc) => {
              const isCommercial = svc.slug === 'commercial-laundry';
              const ctaHref = isCommercial
                ? `mailto:info@weclean.com.ph?subject=Commercial%20Laundry%20Enquiry`
                : buildServiceLink(svc.name);
              const SvcIcon = SERVICE_ICONS[svc.slug];
              return (
                <div key={svc.slug} className="border border-gray-100 rounded-2xl p-6 hover:shadow-md transition-shadow group">
                  <div className="w-10 h-10 rounded-xl bg-brand-50 flex items-center justify-center mb-4">
                    {SvcIcon && <SvcIcon className="w-5 h-5 text-brand-500" strokeWidth={1.75} />}
                  </div>
                  <span className="inline-block text-xs font-semibold uppercase tracking-widest text-brand-600 mb-2">
                    {svc.tagline}
                  </span>
                  <h3 className="text-lg font-bold text-brand-900 mb-2">{svc.name}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed mb-4">{svc.description}</p>
                  <p className="text-xs text-gray-400 mb-4">{svc.availability}</p>
                  <a
                    href={ctaHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-700 hover:text-brand-900 transition-colors"
                  >
                    {svc.cta}
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </a>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── About / Stats ─────────────────────────────────────────────────── */}
      <section id="about" className="py-16 bg-brand-900 text-white scroll-mt-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-brand-300 text-sm font-semibold uppercase tracking-widest mb-3">About WeClean</p>
              <h2 className="text-3xl font-bold mb-4">
                The trusted standard in Philippine laundry care
              </h2>
              <p className="text-brand-200 leading-relaxed mb-6">
                Since 2017, WeClean has believed everyone deserves perfectly folded, fresh laundry
                at a price you'll love. We treat your clothes like our own, keeping our standards
                high and our prices low so you can get back to what matters most.
              </p>
              <ul className="space-y-3">
                {[
                  ['Established Expertise', 'Proudly serving our customers since 2017.'],
                  ['Uncompromising Standards', 'Tough on stains, gentle on fabrics.'],
                  ['Budget-Friendly Pricing', 'Honest rates with zero hidden fees.'],
                ].map(([title, desc]) => (
                  <li key={title} className="flex gap-3">
                    <svg className="w-5 h-5 text-brand-400 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span><strong className="text-white">{title}:</strong>{' '}<span className="text-brand-200">{desc}</span></span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="grid grid-cols-2 gap-6">
              {STATS.map((s) => (
                <div key={s.label} className="bg-brand-800/60 rounded-2xl p-6 text-center">
                  <p className="text-4xl font-bold text-white mb-1">{s.value}</p>
                  <p className="text-brand-300 text-sm">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── How It Works ──────────────────────────────────────────────────── */}
      <section id="how-it-works" className="py-16 bg-white scroll-mt-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-brand-600 text-sm font-semibold uppercase tracking-widest mb-2">How It Works</p>
            <h2 className="text-3xl font-bold text-brand-900">Simple, Convenient, Reliable</h2>
            <p className="text-gray-500 mt-3">A streamlined pickup and delivery process that gives you fresh clothes without losing your day.</p>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {HOW_IT_WORKS.map((step) => (
              <div key={step.step} className="text-center">
                <div className="relative w-16 h-16 rounded-2xl bg-brand-100 flex items-center justify-center mx-auto mb-4">
                  <step.Icon className="w-7 h-7 text-brand-600" strokeWidth={1.5} />
                  <span className="absolute -top-1.5 -right-1.5 w-5 h-5 rounded-full bg-brand-500 text-white text-[10px] font-bold flex items-center justify-center leading-none">
                    {step.step.replace('0', '')}
                  </span>
                </div>
                <h3 className="font-semibold text-brand-900 mb-2">{step.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Branches ──────────────────────────────────────────────────────── */}
      <section id="branches" className="py-16 bg-brand-50 scroll-mt-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <p className="text-brand-600 text-sm font-semibold uppercase tracking-widest mb-2">Find a WeClean</p>
            <h2 className="text-3xl font-bold text-brand-900">Our Branches</h2>
            <p className="text-gray-500 mt-3">Choose your nearest branch for its address, hours, and services.</p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {branches.map((branch) => (
              <Link
                key={branch.slug}
                href={`/branches/${branch.slug}`}
                className="group bg-white rounded-xl p-4 text-center border border-gray-100 hover:border-brand-300 hover:shadow-md transition-all"
              >
                <MapPin className="w-4 h-4 text-brand-400 mx-auto mb-1.5" strokeWidth={2} />
                <p className="text-xs font-semibold uppercase tracking-wide text-brand-600 mb-0.5">{branch.area}</p>
                <p className="font-semibold text-brand-900 text-sm group-hover:text-brand-700 transition-colors">{branch.shortName}</p>
                <p className="text-xs text-gray-400 mt-0.5">{branch.cityDisplay}</p>
              </Link>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link
              href="/branches"
              className="inline-flex items-center gap-2 rounded-full border-2 border-brand-700 text-brand-700 px-6 py-2.5 text-sm font-semibold hover:bg-brand-700 hover:text-white transition-colors"
            >
              View all branch details
            </Link>
          </div>
        </div>
      </section>

      {/* ── Reviews ───────────────────────────────────────────────────────── */}
      <section id="reviews" className="py-16 bg-white scroll-mt-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <p className="text-brand-600 text-sm font-semibold uppercase tracking-widest mb-2">Reviews</p>
            <h2 className="text-3xl font-bold text-brand-900">What our customers say</h2>
            <p className="text-gray-500 mt-3">Genuine Google reviews from WeClean customers.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {reviews.slice(0, 4).map((r) => (
              <div key={r.name} className="border border-gray-100 rounded-2xl p-5">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-9 h-9 rounded-full bg-brand-100 flex items-center justify-center text-brand-700 font-bold text-xs">
                    {r.initials}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-gray-900">{r.name}</p>
                    {r.branch && <p className="text-xs text-gray-400">{r.branch}</p>}
                  </div>
                </div>
                <div className="flex gap-0.5 mb-2">
                  {[...Array(r.rating)].map((_, i) => (
                    <svg key={i} className="w-3.5 h-3.5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-sm text-gray-600 leading-relaxed line-clamp-4">{r.text}</p>
                <p className="text-xs text-gray-400 mt-3">{r.date} · {r.source}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link
              href="/reviews"
              className="text-sm font-semibold text-brand-600 hover:text-brand-800 transition-colors"
            >
              Read all reviews →
            </Link>
          </div>
        </div>
      </section>

      {/* ── FAQ ───────────────────────────────────────────────────────────── */}
      <section id="faq" className="py-16 bg-brand-50 scroll-mt-24">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <p className="text-brand-600 text-sm font-semibold uppercase tracking-widest mb-2">FAQ</p>
            <h2 className="text-3xl font-bold text-brand-900">Frequently Asked Questions</h2>
          </div>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <details key={i} className="group bg-white rounded-xl border border-gray-100 overflow-hidden">
                <summary className="flex items-center justify-between px-5 py-4 cursor-pointer font-medium text-brand-900 text-sm select-none list-none">
                  {faq.question}
                  <svg className="w-4 h-4 text-brand-500 shrink-0 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <div className="px-5 pb-4 text-sm text-gray-600 leading-relaxed border-t border-gray-50 pt-3">
                  {faq.answer}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA banner ────────────────────────────────────────────────────── */}
      <section className="py-16 bg-brand-900 text-white text-center">
        <div className="mx-auto max-w-2xl px-4 sm:px-6">
          <h2 className="text-3xl font-bold mb-4">Ready for fresher laundry?</h2>
          <p className="text-brand-200 mb-8">
            Book a pickup in under a minute on WhatsApp. No app download, no account — just tap and go.
          </p>
          <Link
            href="/#booking"
            className="inline-flex items-center gap-2 rounded-full bg-white text-brand-900 font-semibold px-8 py-3.5 hover:bg-brand-50 transition-colors"
          >
            Book a Pickup
          </Link>
        </div>
      </section>
    </>
  );
}
