import { GENERAL_WHATSAPP, COMMERCIAL_WHATSAPP } from '@/data/pricing';
import type { Branch } from '@/types';

export interface BookingContext {
  branch?: Branch;
  services?: string[];
  date?: string;
  timeSlot?: string;
  address?: string;
  notes?: string;
}

/**
 * Builds a WhatsApp deep link pre-filled with booking context.
 * Routes to the branch-specific number if a branch is provided, otherwise
 * falls back to the central booking number.
 *
 * FUTURE UPGRADE POINT: Replace this function with a WhatsApp Flow URL when
 * the business upgrades to the WhatsApp Business API. The function signature
 * and call sites stay the same — only this implementation changes.
 */
export function buildBookingLink(ctx: BookingContext): string {
  const number = ctx.branch?.whatsapp ?? GENERAL_WHATSAPP;

  const lines: string[] = [];

  if (ctx.branch) {
    lines.push(`Hi WeClean ${ctx.branch.shortName}! I'd like to book a pickup.`);
  } else {
    lines.push("Hi WeClean! I'd like to book a pickup.");
  }

  if (ctx.services?.length) lines.push(`📋 Service${ctx.services.length > 1 ? 's' : ''}: ${ctx.services.join(', ')}`);
  if (ctx.date)    lines.push(`📅 Date: ${ctx.date}`);
  if (ctx.timeSlot) lines.push(`⏰ Time: ${ctx.timeSlot}`);
  if (ctx.address)  lines.push(`📍 Address: ${ctx.address}`);
  if (ctx.notes)    lines.push(`📝 Notes: ${ctx.notes}`);

  const text = lines.join('\n');
  return `https://wa.me/${number}?text=${encodeURIComponent(text)}`;
}

/** Simple CTA link for a specific service from any non-branch context */
export function buildServiceLink(serviceName: string): string {
  const text = `Hi WeClean! I'd like to book a ${serviceName} service.`;
  return `https://wa.me/${GENERAL_WHATSAPP}?text=${encodeURIComponent(text)}`;
}

/** For branch pages: direct CTA with branch name pre-filled */
export function buildBranchLink(branch: Branch, note?: string): string {
  const lines = [`Hi WeClean ${branch.shortName}! I'd like to book a pickup.`];
  if (note) lines.push(note);
  const text = lines.join('\n');
  return `https://wa.me/${branch.whatsapp}?text=${encodeURIComponent(text)}`;
}

/** Commercial inquiry deep link */
export function buildCommercialLink(): string {
  const text = "Hi WeClean! I'd like to inquire about commercial laundry services for my business.";
  return `https://wa.me/${COMMERCIAL_WHATSAPP}?text=${encodeURIComponent(text)}`;
}
