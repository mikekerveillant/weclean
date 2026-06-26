'use client';

import { useState, FormEvent } from 'react';
import type { ServiceSlug } from '@/types';
import { branches } from '@/data/branches';
import { buildBookingLink } from '@/lib/whatsapp';

const SERVICES: { label: string; slug: ServiceSlug }[] = [
  { label: 'Wash, Dry & Fold',          slug: 'wash-dry-fold' },
  { label: 'Household Items',           slug: 'household-items' },
  { label: 'Pickup & Delivery',         slug: 'pickup-delivery' },
  { label: 'Dry Cleaning',              slug: 'dry-cleaning' },
  { label: 'UltraSonic Sneaker Cleaning', slug: 'ultrasonic-sneakers' },
];

const TIME_SLOTS = [
  '8:00 – 11:00 AM',
  '12:00 – 3:00 PM',
  '4:00 – 7:00 PM',
];

interface Props {
  preselectedBranchSlug?: string;
  preselectedService?: string;
  compact?: boolean;
}

export default function BookingForm({ preselectedBranchSlug, preselectedService, compact }: Props) {
  const [branchSlug, setBranchSlug] = useState(preselectedBranchSlug ?? '');
  const [services, setServices] = useState<string[]>(
    preselectedService ? [preselectedService] : []
  );
  const [date, setDate] = useState('');
  const [timeSlot, setTimeSlot] = useState('');
  const [address, setAddress] = useState('');
  const [notes, setNotes] = useState('');

  const today = new Date().toISOString().split('T')[0];

  const selectedBranch = branches.find((b) => b.slug === branchSlug);

  function isAvailable(slug: ServiceSlug): boolean {
    if (!selectedBranch) return true;
    return selectedBranch.services.includes(slug);
  }

  function handleBranchChange(slug: string) {
    setBranchSlug(slug);
    const branch = branches.find((b) => b.slug === slug);
    if (branch) {
      // drop any selected services that this branch doesn't offer
      setServices((prev) =>
        prev.filter((label) => {
          const svc = SERVICES.find((s) => s.label === label);
          return svc ? branch.services.includes(svc.slug) : true;
        })
      );
    }
  }

  function toggleService(label: string, slug: ServiceSlug) {
    if (!isAvailable(slug)) return;
    setServices((prev) =>
      prev.includes(label) ? prev.filter((x) => x !== label) : [...prev, label]
    );
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault();

    const branch = branches.find((b) => b.slug === branchSlug);
    const url = buildBookingLink({
      branch,
      services: services.length ? services : undefined,
      date: date || undefined,
      timeSlot: timeSlot || undefined,
      address: address || undefined,
      notes: notes || undefined,
    });

    window.open(url, '_blank', 'noopener,noreferrer');

    if (typeof window !== 'undefined' && 'gtag' in window) {
      (window as Window & { gtag: (...args: unknown[]) => void }).gtag('event', 'whatsapp_booking_click', {
        branch: branch?.name ?? 'no_branch',
        services: services.join(', ') || 'not_specified',
        source: 'booking_form',
      });
    }
  }

  const inputClass =
    'w-full rounded-lg border border-brand-700 bg-brand-900/40 px-3 py-2.5 text-sm text-white placeholder-brand-400 focus:border-brand-400 focus:outline-none focus:ring-2 focus:ring-brand-500/30';

  const labelClass = 'block text-xs font-medium text-brand-200 mb-1.5';

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {/* Branch */}
      <div>
        <label className={labelClass}>Nearest Branch</label>
        <select
          value={branchSlug}
          onChange={(e) => handleBranchChange(e.target.value)}
          className={inputClass}
        >
          <option value="">Any branch / no preference</option>
          {branches.map((b) => (
            <option key={b.slug} value={b.slug}>
              {b.area} — {b.shortName}
            </option>
          ))}
        </select>
      </div>

      {/* Services — checkbox pills */}
      <div>
        <label className={labelClass}>
          Services <span className="text-brand-400 font-normal">(select all that apply)</span>
        </label>
        <div className="flex flex-wrap gap-2">
          {SERVICES.map(({ label, slug }) => {
            const available = isAvailable(slug);
            const selected = services.includes(label);
            return (
              <button
                key={slug}
                type="button"
                onClick={() => toggleService(label, slug)}
                disabled={!available}
                title={available ? undefined : `Not available at ${selectedBranch?.shortName ?? 'this branch'}`}
                className={`rounded-full px-3 py-1.5 text-xs font-medium transition-colors border ${
                  !available
                    ? 'opacity-35 cursor-not-allowed border-brand-700 text-brand-400 line-through'
                    : selected
                    ? 'bg-brand-500 border-brand-500 text-white'
                    : 'bg-transparent border-brand-600 text-brand-200 hover:border-brand-400 hover:text-white'
                }`}
              >
                {label}
              </button>
            );
          })}
        </div>
      </div>

      {/* Date + Time */}
      <div className={compact ? 'space-y-4' : 'grid grid-cols-2 gap-3'}>
        <div>
          <label className={labelClass}>Pickup Date</label>
          <input
            type="date"
            value={date}
            min={today}
            onChange={(e) => setDate(e.target.value)}
            className={inputClass}
          />
        </div>
        <div>
          <label className={labelClass}>Time Window</label>
          <select
            value={timeSlot}
            onChange={(e) => setTimeSlot(e.target.value)}
            className={inputClass}
          >
            <option value="">Select time</option>
            {TIME_SLOTS.map((t) => (
              <option key={t} value={t}>{t}</option>
            ))}
          </select>
        </div>
      </div>

      {/* Address */}
      <div>
        <label className={labelClass}>Pickup Address</label>
        <input
          type="text"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          placeholder="Street, barangay, city"
          className={inputClass}
        />
      </div>

      {/* Notes */}
      {!compact && (
        <div>
          <label className={labelClass}>
            Special Instructions <span className="text-brand-400 font-normal">(optional)</span>
          </label>
          <textarea
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
            rows={2}
            placeholder="e.g. delicate fabrics, building access notes"
            className={`${inputClass} resize-none`}
          />
        </div>
      )}

      <button
        type="submit"
        className="w-full rounded-full bg-white text-brand-900 font-semibold py-3 text-sm hover:bg-brand-50 transition-colors flex items-center justify-center gap-2"
      >
        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
          <path d="M12 0C5.373 0 0 5.373 0 12c0 2.103.545 4.08 1.498 5.797L0 24l6.335-1.462A11.93 11.93 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.854 0-3.598-.503-5.103-1.382l-.366-.217-3.764.869.944-3.661-.239-.382A9.93 9.93 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" />
        </svg>
        Send Booking Request on WhatsApp
      </button>
    </form>
  );
}
