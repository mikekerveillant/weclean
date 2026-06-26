import type { Metadata } from 'next';
import Link from 'next/link';
import { branches } from '@/data/branches';
import { hoursDisplay } from '@/data/branches';
import { SITE_URL } from '@/data/pricing';

export const metadata: Metadata = {
  title: 'WeClean Branches | Find a Laundry Near You',
  description:
    'Find WeClean laundry branches across Metro Manila (Makati, Manila, Pasay, Pasig, Quezon City), El Nido Palawan, and Siargao. 13 branches with pickup & delivery.',
  alternates: { canonical: `${SITE_URL}/branches` },
};

const AREAS = ['Makati', 'Manila', 'Pasay', 'Pasig', 'Quezon City', 'El Nido', 'Siargao'];

export default function BranchesPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-brand-900 text-white py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-brand-300 text-sm font-semibold uppercase tracking-widest mb-2">Locations</p>
          <h1 className="text-4xl font-bold mb-3">Find a WeClean</h1>
          <p className="text-brand-200 max-w-xl mx-auto">
            13 branches across Metro Manila, El Nido, and Siargao. Each with full laundry services and pickup & delivery.
          </p>
        </div>
      </section>

      {/* Branch listing grouped by area */}
      <section className="py-12 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {AREAS.map((area) => {
            const areaBranches = branches.filter((b) => b.area === area);
            if (!areaBranches.length) return null;
            return (
              <div key={area} className="mb-12">
                <h2 className="text-xl font-bold text-brand-900 mb-5 pb-2 border-b border-brand-100">
                  {area}
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                  {areaBranches.map((branch) => {
                    const hours = hoursDisplay(branch);
                    const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`${branch.name}, ${branch.streetAddress}, ${branch.city}`)}`;
                    return (
                      <div
                        key={branch.slug}
                        className="border border-gray-100 rounded-2xl p-5 hover:shadow-md transition-shadow"
                      >
                        <p className="text-xs font-semibold uppercase tracking-widest text-brand-600 mb-1">
                          {branch.cityDisplay}
                        </p>
                        <h3 className="font-bold text-brand-900 mb-2">{branch.name}</h3>
                        <dl className="space-y-1 text-sm mb-4">
                          <div className="flex gap-2">
                            <dt className="text-gray-400 w-16 shrink-0">Address</dt>
                            <dd className="text-gray-700">{branch.streetAddress}, {branch.city}</dd>
                          </div>
                          <div className="flex gap-2">
                            <dt className="text-gray-400 w-16 shrink-0">Phone</dt>
                            <dd>
                              <a href={`tel:${branch.phone.replace(/\s/g, '')}`} className="text-brand-700 hover:text-brand-900">
                                {branch.phone}
                              </a>
                            </dd>
                          </div>
                          <div className="flex gap-2">
                            <dt className="text-gray-400 w-16 shrink-0">Hours</dt>
                            <dd className="text-gray-700 space-y-0.5">
                              <p>Mon–Fri: {hours.monFri}</p>
                              <p>Sat: {hours.sat}</p>
                              <p>Sun: {hours.sun}</p>
                            </dd>
                          </div>
                        </dl>
                        <div className="flex gap-3">
                          <Link
                            href={`/branches/${branch.slug}`}
                            className="text-sm font-semibold text-brand-700 hover:text-brand-900 transition-colors"
                          >
                            View details →
                          </Link>
                          <a
                            href={mapsUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-sm text-gray-400 hover:text-gray-600 transition-colors"
                          >
                            Get directions ↗
                          </a>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
}
