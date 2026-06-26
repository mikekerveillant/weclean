'use client';

import Link from 'next/link';
import { useState, useEffect, useRef, useCallback } from 'react';

const MESSAGES: { id: string; text: string; href: string | null }[] = [
  {
    id: 'trust',
    text: '10+ years of trusted care · 200K+ customers yearly · 1,349+ five-star reviews',
    href: null,
  },
  {
    id: 'membership',
    text: '🎉 Monthly membership plans coming soon — join the waitlist',
    href: '/pricing#membership',
  },
  {
    id: 'referral',
    text: '💸 Refer a friend, you both get rewarded',
    href: '/referral',
  },
  {
    id: 'branches',
    text: '📍 13 branches across Metro Manila, El Nido, and Siargao',
    href: '/branches',
  },
];

const STORAGE_KEY = 'wc-bar-exp';
const DISMISS_DAYS = 7;
const INTERVAL_MS = 5000;

export default function AnnouncementBar() {
  const [dismissed, setDismissed] = useState(false);
  const [closing, setClosing] = useState(false);
  const [active, setActive] = useState(0);
  const [msgVisible, setMsgVisible] = useState(true);
  const [reducedMotion, setReducedMotion] = useState(false);

  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const fadeRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // On mount: check dismiss state + motion preference
  useEffect(() => {
    try {
      const exp = localStorage.getItem(STORAGE_KEY);
      if (exp && Date.now() < parseInt(exp, 10)) {
        setDismissed(true);
        return;
      }
    } catch (_) {}

    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReducedMotion(mq.matches);
    const handler = (e: MediaQueryListEvent) => setReducedMotion(e.matches);
    mq.addEventListener('change', handler);
    return () => mq.removeEventListener('change', handler);
  }, []);

  // Auto-rotate messages
  useEffect(() => {
    if (dismissed || reducedMotion) return;

    intervalRef.current = setInterval(() => {
      setMsgVisible(false);
      fadeRef.current = setTimeout(() => {
        setActive(prev => (prev + 1) % MESSAGES.length);
        setMsgVisible(true);
      }, 300);
    }, INTERVAL_MS);

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
      if (fadeRef.current) clearTimeout(fadeRef.current);
    };
  }, [dismissed, reducedMotion]);

  const dismiss = useCallback(() => {
    setClosing(true);
    try {
      localStorage.setItem(STORAGE_KEY, String(Date.now() + DISMISS_DAYS * 86_400_000));
    } catch (_) {}
    // Keep CSS rule in sync for the inline-script check on next load
    document.documentElement.setAttribute('data-bar', '0');
    setTimeout(() => setDismissed(true), 300);
  }, []);

  // After React confirms dismissal, remove from DOM. The CSS rule (set by the
  // inline script in layout.tsx) already hides it before this point for returning
  // dismissed visitors, so there is no visible layout shift.
  if (dismissed) return null;

  const msg = MESSAGES[active];
  const motionClasses = reducedMotion ? '' : 'transition-[max-height,opacity] duration-300';

  return (
    <div
      className={`wc-announcement-bar bg-brand-800 overflow-hidden ${motionClasses} ${
        closing ? 'max-h-0 opacity-0' : 'max-h-9 opacity-100'
      }`}
      role="region"
      aria-label="Site announcements"
    >
      <div className="h-9 flex items-center justify-center relative px-10">
        {/* Rotating message — aria-live="off" so screen readers discover it naturally
            rather than being interrupted every 5 seconds during auto-rotation */}
        <div
          className="text-xs font-medium text-brand-200 text-center truncate max-w-[calc(100%-2.5rem)]"
          aria-live="off"
          aria-atomic="true"
        >
          {reducedMotion ? (
            // Reduced motion: show first message statically, no animation
            MESSAGES[0].href ? (
              <Link href={MESSAGES[0].href} className="hover:text-white transition-colors">
                {MESSAGES[0].text}
              </Link>
            ) : (
              MESSAGES[0].text
            )
          ) : msg.href ? (
            <Link
              href={msg.href}
              className={`hover:text-white transition-opacity duration-300 ${msgVisible ? 'opacity-100' : 'opacity-0'}`}
            >
              {msg.text}
            </Link>
          ) : (
            <span className={`transition-opacity duration-300 ${msgVisible ? 'opacity-100' : 'opacity-0'}`}>
              {msg.text}
            </span>
          )}
        </div>

        <button
          onClick={dismiss}
          aria-label="Dismiss announcement bar"
          className="absolute right-3 top-1/2 -translate-y-1/2 p-1.5 text-brand-400 hover:text-white transition-colors rounded-sm"
        >
          <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
    </div>
  );
}
