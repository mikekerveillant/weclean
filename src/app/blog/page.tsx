import type { Metadata } from 'next';
import Link from 'next/link';
import { SITE_URL } from '@/data/pricing';

export const metadata: Metadata = {
  title: 'WeClean Blog · Laundry Guides Across Metro Manila',
  description:
    'Practical guides on choosing a laundry shop and getting same-day service across Pasig, Taguig, Pandacan, Makati, Pasay, Quezon City, El Nido, Siargao, and more.',
  alternates: { canonical: `${SITE_URL}/blog` },
};

const BLOG_POSTS = [
  { slug: 'laundry-shops-near-pasig', area: 'Pasig', type: 'Guide', title: 'Laundry Shops Near Pasig: What to Know Before You Pick One', desc: 'What to look for in a laundry shop near Pasig and how WeClean\'s branches deliver convenient, reliable service.' },
  { slug: 'same-day-laundry-pasig', area: 'Pasig', type: 'Same-day', title: 'Same Day Laundry in Pasig: Finding a Service That Actually Delivers', desc: 'What same-day laundry really means in Pasig and how to get clothes back fast without sacrificing quality.' },
  { slug: 'laundry-shops-near-taguig', area: 'Taguig', type: 'Guide', title: 'Laundry Shops Near Taguig: What to Know Before You Pick One', desc: 'A practical guide to picking a laundry shop near Taguig, BGC and surrounding neighborhoods.' },
  { slug: 'same-day-laundry-taguig', area: 'Taguig', type: 'Same-day', title: 'Same Day Laundry in Taguig: Finding a Service That Actually Delivers', desc: 'How to get same-day laundry in Taguig that\'s actually fast, with tips for picking the right shop.' },
  { slug: 'laundry-shops-near-pandacan', area: 'Pandacan', type: 'Guide', title: 'Laundry Shops Near Pandacan: What to Know Before You Pick One', desc: 'Guide to choosing a reliable laundry shop near Pandacan, Manila.' },
  { slug: 'same-day-laundry-pandacan', area: 'Pandacan', type: 'Same-day', title: 'Same Day Laundry in Pandacan: Finding a Service That Actually Delivers', desc: 'Same-day laundry options near Pandacan and what to expect on turnaround.' },
  { slug: 'laundry-shops-near-mandaluyong', area: 'Mandaluyong', type: 'Guide', title: 'Laundry Shops Near Mandaluyong: What to Know Before You Pick One', desc: 'A guide to laundry shops near Mandaluyong and how to spot a reliable one.' },
  { slug: 'same-day-laundry-mandaluyong', area: 'Mandaluyong', type: 'Same-day', title: 'Same Day Laundry in Mandaluyong: Finding a Service That Actually Delivers', desc: 'Same-day laundry near Mandaluyong: what actually works on a tight timeline.' },
  { slug: 'laundry-shops-near-san-andres-bukid', area: 'San Andres Bukid', type: 'Guide', title: 'Laundry Shops Near San Andres Bukid: What to Know Before You Pick One', desc: 'Guide to laundry shops near San Andres Bukid, Manila and what to check before booking.' },
  { slug: 'same-day-laundry-san-andres-bukid', area: 'San Andres Bukid', type: 'Same-day', title: 'Same Day Laundry in San Andres Bukid: Finding a Service That Actually Delivers', desc: 'Same-day laundry tips near San Andres Bukid for fast, reliable turnaround.' },
  { slug: 'laundry-shops-near-pasay', area: 'Pasay', type: 'Guide', title: 'Laundry Shops Near Pasay: What to Know Before You Pick One', desc: 'Guide to picking a reliable laundry shop near Pasay.' },
  { slug: 'same-day-laundry-pasay', area: 'Pasay', type: 'Same-day', title: 'Same Day Laundry in Pasay: Finding a Service That Actually Delivers', desc: 'Same-day laundry options in Pasay and what to expect on turnaround.' },
  { slug: 'laundry-shops-near-paco', area: 'Paco', type: 'Guide', title: 'Laundry Shops Near Paco: What to Know Before You Pick One', desc: 'Guide to choosing a laundry shop near Paco, Manila.' },
  { slug: 'same-day-laundry-paco', area: 'Paco', type: 'Same-day', title: 'Same Day Laundry in Paco: Finding a Service That Actually Delivers', desc: 'How to get fast same-day laundry near Paco without sacrificing quality.' },
  { slug: 'laundry-shops-near-quezon-city', area: 'Quezon City', type: 'Guide', title: 'Laundry Shops Near Quezon City: What to Know Before You Pick One', desc: 'Guide to laundry shops near Quezon City and what to check before booking.' },
  { slug: 'same-day-laundry-quezon-city', area: 'Quezon City', type: 'Same-day', title: 'Same Day Laundry in Quezon City: Finding a Service That Actually Delivers', desc: 'Same-day laundry tips for Quezon City residents on a tight timeline.' },
  { slug: 'laundry-shops-near-malate', area: 'Malate', type: 'Guide', title: 'Laundry Shops Near Malate: What to Know Before You Pick One', desc: 'A practical guide to picking a laundry shop near Malate, Manila.' },
  { slug: 'same-day-laundry-malate', area: 'Malate', type: 'Same-day', title: 'Same Day Laundry in Malate: Finding a Service That Actually Delivers', desc: 'Same-day laundry in Malate: what actually works on a tight schedule.' },
  { slug: 'laundry-shops-near-makati', area: 'Makati', type: 'Guide', title: 'Laundry Shops Near Makati: What to Know Before You Pick One', desc: 'Guide to choosing a reliable laundry shop near Makati.' },
  { slug: 'same-day-laundry-makati', area: 'Makati', type: 'Same-day', title: 'Same Day Laundry in Makati: Finding a Service That Actually Delivers', desc: 'How to get same-day laundry in Makati that\'s actually fast.' },
  { slug: 'laundry-shops-near-santa-ana', area: 'Santa Ana', type: 'Guide', title: 'Laundry Shops Near Santa Ana: What to Know Before You Pick One', desc: 'Guide to picking a reliable laundry shop near Santa Ana, Manila.' },
  { slug: 'same-day-laundry-santa-ana', area: 'Santa Ana', type: 'Same-day', title: 'Same Day Laundry in Santa Ana: Finding a Service That Actually Delivers', desc: 'Same-day laundry options near Santa Ana and what to expect on turnaround.' },
  { slug: 'laundry-shops-near-el-nido', area: 'El Nido', type: 'Guide', title: 'Laundry Shops Near El Nido: What to Know Before You Pick One', desc: 'Guide to picking a reliable laundry shop in El Nido, Palawan.' },
  { slug: 'same-day-laundry-el-nido', area: 'El Nido', type: 'Same-day', title: 'Same Day Laundry in El Nido: Finding a Service That Actually Delivers', desc: 'How to get same-day laundry in El Nido that\'s actually fast and reliable.' },
  { slug: 'laundry-shops-near-siargao', area: 'Siargao', type: 'Guide', title: 'Laundry Shops Near Siargao: What to Know Before You Pick One', desc: 'Guide to choosing a reliable laundry shop in Siargao.' },
  { slug: 'same-day-laundry-siargao', area: 'Siargao', type: 'Same-day', title: 'Same Day Laundry in Siargao: Finding a Service That Actually Delivers', desc: 'Same-day laundry tips for Siargao locals and travelers on a tight schedule.' },
];

export default function BlogPage() {
  return (
    <>
      <section className="bg-brand-900 text-white py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-brand-300 text-sm font-semibold uppercase tracking-widest mb-2">Guides</p>
          <h1 className="text-4xl font-bold mb-3">Local Laundry Guides</h1>
          <p className="text-brand-200 max-w-xl mx-auto">
            Honest, practical guides on choosing a laundry shop and getting same-day service in your neighborhood.
          </p>
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {BLOG_POSTS.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group border border-gray-100 rounded-2xl p-5 hover:shadow-md transition-shadow"
              >
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-xs font-semibold uppercase tracking-widest text-brand-600">{post.area}</span>
                  <span className="text-gray-300">·</span>
                  <span className={`text-xs rounded-full px-2 py-0.5 font-medium ${
                    post.type === 'Same-day'
                      ? 'bg-brand-100 text-brand-700'
                      : 'bg-gray-100 text-gray-600'
                  }`}>{post.type}</span>
                </div>
                <h2 className="font-semibold text-brand-900 mb-2 group-hover:text-brand-700 transition-colors leading-snug">
                  {post.title}
                </h2>
                <p className="text-sm text-gray-500 leading-relaxed">{post.desc}</p>
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
