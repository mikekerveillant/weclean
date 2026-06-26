import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { branches, getBranchBySlug, hoursDisplay } from '@/data/branches';
import { services } from '@/data/services';
import { buildBranchLink } from '@/lib/whatsapp';
import { branchSchema } from '@/lib/schema';
import BookingForm from '@/components/BookingForm';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return branches.map((b) => ({ slug: b.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const branch = getBranchBySlug(slug);
  if (!branch) return {};

  const title = `${branch.name} | Laundry near ${branch.area}`;
  const desc = branch.description;
  const url = `https://www.weclean.com.ph/branches/${branch.slug}`;

  return {
    title,
    description: desc,
    alternates: { canonical: url },
    openGraph: {
      title,
      description: desc,
      url,
      type: 'website',
    },
  };
}

export default async function BranchPage({ params }: Props) {
  const { slug } = await params;
  const branch = getBranchBySlug(slug);
  if (!branch) notFound();

  const hours = hoursDisplay(branch);
  const waLink = buildBranchLink(branch);
  const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`${branch.name}, ${branch.streetAddress}, ${branch.city}`)}`;
  const mapsEmbed = `https://maps.google.com/maps?q=${branch.lat},${branch.lng}&z=17&output=embed&iwloc=near`;

  const branchServices = services.filter((s) => branch.services.includes(s.slug));
  const schema = branchSchema(branch);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      {/* Breadcrumb */}
      <div className="bg-brand-50 border-b border-brand-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-2.5">
          <nav className="text-xs text-gray-400 flex items-center gap-1.5">
            <Link href="/" className="hover:text-brand-700 transition-colors">Home</Link>
            <span>/</span>
            <Link href="/branches" className="hover:text-brand-700 transition-colors">Branches</Link>
            <span>/</span>
            <span className="text-gray-600">{branch.shortName}</span>
          </nav>
        </div>
      </div>

      {/* Hero */}
      <section className="bg-brand-900 text-white py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10 items-start">
            <div>
              <p className="text-brand-300 text-sm font-semibold uppercase tracking-widest mb-2">
                WeClean {branch.area}
              </p>
              <h1 className="text-3xl sm:text-4xl font-bold mb-3">{branch.name}</h1>
              <p className="text-brand-200 leading-relaxed mb-6 max-w-lg">{branch.description}</p>

              {/* NAP block — exact match to GBP listing */}
              <dl className="space-y-3 text-sm">
                <div className="flex gap-3">
                  <dt className="text-brand-400 w-20 shrink-0">Address</dt>
                  <dd className="text-brand-100">
                    {branch.streetAddress}, {branch.city}
                    {branch.region !== branch.city && `, ${branch.region}`}
                  </dd>
                </div>
                <div className="flex gap-3">
                  <dt className="text-brand-400 w-20 shrink-0">Phone</dt>
                  <dd>
                    <a href={`tel:${branch.phone.replace(/\s/g, '')}`} className="text-brand-100 hover:text-white transition-colors">
                      {branch.phone}
                    </a>
                  </dd>
                </div>
                <div className="flex gap-3">
                  <dt className="text-brand-400 w-20 shrink-0">Hours</dt>
                  <dd className="text-brand-100 space-y-0.5">
                    <p>Mon–Fri: {hours.monFri}</p>
                    <p>Saturday: {hours.sat}</p>
                    <p>Sunday: {hours.sun}</p>
                  </dd>
                </div>
              </dl>

              <div className="flex flex-wrap gap-3 mt-6">
                <a
                  href={waLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-white text-brand-900 font-semibold px-5 py-2.5 text-sm hover:bg-brand-50 transition-colors"
                >
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                    <path d="M12 0C5.373 0 0 5.373 0 12c0 2.103.545 4.08 1.498 5.797L0 24l6.335-1.462A11.93 11.93 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.854 0-3.598-.503-5.103-1.382l-.366-.217-3.764.869.944-3.661-.239-.382A9.93 9.93 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" />
                  </svg>
                  Book a Pickup
                </a>
                <a
                  href={mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-brand-500 text-brand-200 font-semibold px-5 py-2.5 text-sm hover:bg-brand-800 transition-colors"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  Get Directions
                </a>
              </div>
            </div>

            {/* Booking widget */}
            <div className="bg-brand-800/60 backdrop-blur rounded-2xl p-6 border border-brand-700">
              <h2 className="text-white font-semibold text-base mb-1">Book from this branch</h2>
              <p className="text-brand-300 text-xs mb-4">
                This will open WhatsApp pre-filled with {branch.shortName} and your selected details.
              </p>
              <BookingForm preselectedBranchSlug={branch.slug} compact />
            </div>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="bg-gray-100">
        <iframe
          src={mapsEmbed}
          width="100%"
          height="300"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title={`Map for ${branch.name}`}
        />
      </section>

      {/* Services at this branch */}
      <section className="py-12 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-brand-900 mb-8">Services at this branch</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {branchServices.map((svc) => (
              <div key={svc.slug} className="border border-gray-100 rounded-xl p-5">
                <span className="text-xs font-semibold uppercase tracking-widest text-brand-600">{svc.tagline}</span>
                <h3 className="font-bold text-brand-900 mt-1 mb-2">{svc.name}</h3>
                <p className="text-sm text-gray-500 leading-relaxed mb-3">{svc.description}</p>
                <a
                  href={buildBranchLink(branch, `I'm interested in the ${svc.name} service.`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-semibold text-brand-700 hover:text-brand-900 transition-colors"
                >
                  {svc.cta} →
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Nearby branches */}
      <section className="py-10 bg-brand-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-lg font-semibold text-brand-900 mb-5">Other WeClean branches</h2>
          <div className="flex flex-wrap gap-3">
            {branches
              .filter((b) => b.slug !== branch.slug)
              .map((b) => (
                <Link
                  key={b.slug}
                  href={`/branches/${b.slug}`}
                  className="text-sm text-brand-700 border border-brand-200 rounded-full px-3 py-1.5 hover:bg-brand-100 transition-colors"
                >
                  {b.area} – {b.shortName}
                </Link>
              ))}
          </div>
        </div>
      </section>
    </>
  );
}
