import type { Metadata } from 'next';
import { Figtree } from 'next/font/google';
import './globals.css';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import AnnouncementBar from '@/components/layout/AnnouncementBar';
import { organizationSchema } from '@/lib/schema';
import { SITE_URL } from '@/data/pricing';

const figtree = Figtree({ subsets: ['latin'], display: 'swap' });

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'WeClean | Laundry & Pickup Philippines',
    template: '%s | WeClean Philippines',
  },
  description:
    'Premium laundry, sneaker cleaning, pickup and delivery — fresh, clean and ready in 24 hours. 13 branches across Metro Manila, El Nido, and Siargao.',
  openGraph: {
    type: 'website',
    locale: 'en_PH',
    url: SITE_URL,
    siteName: 'WeClean Laundry Philippines',
  },
  twitter: {
    card: 'summary_large_image',
  },
  robots: { index: true, follow: true },
  alternates: { canonical: SITE_URL },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-PH" className={figtree.className}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema()) }}
        />
        {/*
          Runs before first paint. If the visitor previously dismissed the bar,
          sets data-bar="0" on <html> so the CSS rule in globals.css hides it
          instantly — no layout shift, no flash of dismissed bar re-appearing.
        */}
        <script
          dangerouslySetInnerHTML={{
            __html: `try{var e=localStorage.getItem('wc-bar-exp');if(e&&Date.now()<+e)document.documentElement.setAttribute('data-bar','0')}catch(e){}`,
          }}
        />
        <AnnouncementBar />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
