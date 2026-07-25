import { CREDIT_CARDS } from '../data/creditCards';

const TRACKED_CARDS_KEY = 'trackedCardIds';
const TSP_DATA_KEY = 'tspData';

export function getTrackedCardIds(): string[] {
  try {
    const raw = localStorage.getItem(TRACKED_CARDS_KEY);
    return raw ? (JSON.parse(raw) as string[]) : [];
  } catch {
    return [];
  }
}

export function isCardTracked(id: string): boolean {
  return getTrackedCardIds().includes(id);
}

export function toggleTrackedCard(id: string): string[] {
  const current = getTrackedCardIds();
  const next = current.includes(id) ? current.filter(c => c !== id) : [...current, id];
  localStorage.setItem(TRACKED_CARDS_KEY, JSON.stringify(next));
  return next;
}

export function getTrackedCards() {
  const ids = getTrackedCardIds();
  return CREDIT_CARDS.filter(c => ids.includes(c.id));
}

export function getTrackedCardsPerksTotal(): number {
  return getTrackedCards().reduce((sum, c) => sum + c.total_annual_perks, 0);
}

export function getTSPBalance(): number {
  try {
    const raw = localStorage.getItem(TSP_DATA_KEY);
    if (!raw) return 0;
    const parsed = JSON.parse(raw) as { currentBalance?: number };
    return parsed.currentBalance ?? 0;
  } catch {
    return 0;
  }
}
