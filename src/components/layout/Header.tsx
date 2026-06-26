'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

const NAV = [
  { label: 'Plans & Pricing', href: '/#pricing' },
  { label: 'Services', href: '/#services' },
  { label: 'About', href: '/#about' },
  { label: 'How it works', href: '/#how-it-works' },
  { label: 'Locations', href: '/#branches' },
  { label: 'Reviews', href: '/#reviews' },
  { label: 'FAQ', href: '/#faq' },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-brand-900 text-white shadow-md">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-24 items-center justify-between">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5" aria-label="WeClean home">
            <Image
              src="/weclean-symbol-white.png"
              alt="WeClean"
              width={32}
              height={32}
              className="shrink-0"
              priority
            />
            <span className="font-black text-3xl tracking-tight text-white">weclean</span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-6 text-sm font-extrabold">
            {NAV.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-brand-200 hover:text-white transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Book Now CTA */}
          <div className="flex items-center gap-3">
            <Link
              href="/#booking"
              className="hidden md:inline-flex items-center gap-2 rounded-full bg-white text-brand-900 px-7 py-4 text-base font-bold hover:bg-brand-50 transition-colors"
            >
              Book Now
            </Link>

            {/* Mobile menu button */}
            <button
              onClick={() => setOpen(!open)}
              className="md:hidden p-2 rounded-lg text-brand-200 hover:text-white hover:bg-brand-800 transition-colors"
              aria-label="Toggle menu"
            >
              {open ? (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile nav */}
        {open && (
          <div className="md:hidden border-t border-brand-800 py-4 space-y-1">
            {NAV.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="block px-3 py-2 rounded-lg text-brand-200 hover:text-white hover:bg-brand-800 text-sm font-extrabold transition-colors"
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/#booking"
              onClick={() => setOpen(false)}
              className="block mt-2 mx-3 text-center rounded-full bg-white text-brand-900 px-4 py-2 text-sm font-semibold"
            >
              Book Now
            </Link>
          </div>
        )}
      </div>
    </header>
  );
}
