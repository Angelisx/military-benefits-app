const BASE = '/api';

function getToken(): string | null {
  return localStorage.getItem('mba_access_token');
}

function authHeaders(): HeadersInit {
  const token = getToken();
  return token ? { Authorization: `Bearer ${token}`, 'Content-Type': 'application/json' } : { 'Content-Type': 'application/json' };
}

async function get<T>(path: string, auth = false): Promise<T> {
  const headers: HeadersInit = auth ? authHeaders() : { 'Content-Type': 'application/json' };
  const res = await fetch(`${BASE}${path}`, { headers });
  if (!res.ok) throw new Error(`API ${res.status}: ${path}`);
  return res.json();
}

async function post<T>(path: string, body: unknown, auth = false): Promise<T> {
  const headers: HeadersInit = auth ? authHeaders() : { 'Content-Type': 'application/json' };
  const res = await fetch(`${BASE}${path}`, { method: 'POST', headers, body: JSON.stringify(body) });
  if (!res.ok) throw new Error(`API ${res.status}: ${path}`);
  return res.json();
}

export const api = {
  getLounges: () => get<unknown[]>('/data/airport-lounges'),
  getHotels: () => get<unknown[]>('/data/military-hotels?status=active'),
  getCreditCards: () => get<unknown[]>('/data/credit-cards'),
  getStateBenefits: () => get<unknown[]>('/data/state-benefits'),
  getTSPPrices: (body: { timeline: string; startDate: string; endDate: string }) =>
    post<unknown>('/data/tsp-prices', body),

  getUserTSP: () => get<unknown>('/user/tsp-data', true),
  saveUserTSP: (data: unknown) => post<unknown>('/user/tsp-data', data, true),

  getUserCards: () => get<unknown[]>('/user/cards', true),
  saveUserCard: (data: unknown) => post<unknown>('/user/cards', data, true),

  getUserPay: () => get<unknown>('/user/military-pay', true),
  saveUserPay: (data: unknown) => post<unknown>('/user/military-pay', data, true),

  logPageView: (page: string) => post<void>('/analytics/page-view', { page }, false).catch(() => {}),
};
