import { useState, useEffect } from 'react';
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import './TSPPanel.css';

const FUNDS = ['G','F','C','S','I'];
const L_FUNDS = ['L Income','L 2030','L 2035','L 2040','L 2045','L 2050','L 2055','L 2060','L 2065','L 2070','L 2075'];

// Sample NAV history for charts (normalized to 100 at start)
const generateSampleData = () => {
  const data = [];
  let c = 100, s = 100, g = 100, f = 100, i = 100;
  for (let m = 0; m < 24; m++) {
    c += (Math.random() - 0.3) * 4;
    s += (Math.random() - 0.28) * 5;
    g += 0.15;
    f += (Math.random() - 0.35) * 1.5;
    i += (Math.random() - 0.32) * 3;
    const date = new Date(2024, m % 12, 1);
    data.push({
      date: date.toLocaleDateString('en-US', { month: 'short', year: '2-digit' }),
      C: +c.toFixed(2), S: +s.toFixed(2), G: +g.toFixed(2), F: +f.toFixed(2), I: +i.toFixed(2),
    });
  }
  return data;
};

const CHART_DATA = generateSampleData();

const COLORS = { C: '#4ade80', S: '#60a5fa', G: '#fbbf24', F: '#a78bfa', I: '#f87171' };

interface TSPState {
  currentBalance: number;
  baseBalance: number;
  trackingStartDate: string;
  contributionPercent: number;
  payGrade: string;
  yearsOfService: number;
  expectedReturn: number;
  fundAllocations: { C: number; F: number; G: number; I: number; S: number; L: number };
  selectedLFund: string;
}

const defaultTSP = (): TSPState => {
  try {
    const saved = localStorage.getItem('tspData');
    if (saved) return JSON.parse(saved) as TSPState;
  } catch {}
  return {
    currentBalance: 0, baseBalance: 0, trackingStartDate: '', contributionPercent: 5,
    payGrade: 'E-5', yearsOfService: 4, expectedReturn: 7,
    fundAllocations: { C: 80, F: 0, G: 0, I: 0, S: 20, L: 0 },
    selectedLFund: 'L 2050',
  };
};

export default function TSPPanel() {
  const [data, setData] = useState<TSPState>(defaultTSP);
  const [visibleFunds, setVisibleFunds] = useState<string[]>(['C', 'S']);
  const [tab, setTab] = useState<'tracker' | 'calculator'>('tracker');

  useEffect(() => {
    localStorage.setItem('tspData', JSON.stringify(data));
  }, [data]);

  const toggleFund = (f: string) =>
    setVisibleFunds(prev => prev.includes(f) ? prev.filter(x => x !== f) : [...prev, f]);

  const projectedBalance = () => {
    const b = data.currentBalance || 0;
    const r = (data.expectedReturn || 7) / 100;
    const years = 10;
    return (b * Math.pow(1 + r, years)).toFixed(0);
  };

  const gain = data.currentBalance && data.baseBalance
    ? (((data.currentBalance - data.baseBalance) / data.baseBalance) * 100).toFixed(2)
    : null;

  return (
    <div className="tsp-panel">
      <div className="tsp-tabs">
        <button className={`tsp-tab${tab === 'tracker' ? ' active' : ''}`} onClick={() => setTab('tracker')}>Tracker</button>
        <button className={`tsp-tab${tab === 'calculator' ? ' active' : ''}`} onClick={() => setTab('calculator')}>Calculator</button>
      </div>

      {tab === 'tracker' && (
        <>
          <div className="tsp-balance-card">
            <div className="tsp-balance-card__label">Current Balance</div>
            <div className="tsp-balance-card__value money">
              ${(data.currentBalance || 0).toLocaleString()}
            </div>
            {gain && (
              <div className={`tsp-balance-card__gain ${Number(gain) >= 0 ? 'pos' : 'neg'}`}>
                {Number(gain) >= 0 ? '▲' : '▼'} {Math.abs(Number(gain))}% since tracking start
              </div>
            )}
          </div>

          <div className="tsp-panel__section">
            <label className="tsp-label">Current Balance ($)</label>
            <input type="number" value={data.currentBalance || ''} placeholder="0"
              onChange={e => setData(d => ({ ...d, currentBalance: Number(e.target.value) }))} />
          </div>
          <div className="tsp-panel__section">
            <label className="tsp-label">Starting Balance ($)</label>
            <input type="number" value={data.baseBalance || ''} placeholder="0"
              onChange={e => setData(d => ({ ...d, baseBalance: Number(e.target.value) }))} />
          </div>
          <div className="tsp-panel__section">
            <label className="tsp-label">Contribution % of Pay</label>
            <input type="number" value={data.contributionPercent} min="0" max="100"
              onChange={e => setData(d => ({ ...d, contributionPercent: Number(e.target.value) }))} />
          </div>

          <div className="tsp-panel__section">
            <div className="tsp-label">Fund Allocations</div>
            {FUNDS.map(f => (
              <div key={f} className="tsp-alloc-row">
                <span className="tsp-alloc-row__label" style={{ color: COLORS[f as keyof typeof COLORS] }}>{f} Fund</span>
                <input type="number" min="0" max="100"
                  value={data.fundAllocations[f as keyof typeof data.fundAllocations] ?? 0}
                  onChange={e => setData(d => ({
                    ...d,
                    fundAllocations: { ...d.fundAllocations, [f]: Number(e.target.value) }
                  }))}
                  style={{ width: 70, textAlign: 'center' }}
                />
                <span className="tsp-alloc-row__pct">%</span>
              </div>
            ))}
          </div>

          <div className="tsp-panel__section">
            <div className="tsp-label">Fund Performance (24 months)</div>
            <div className="tsp-fund-toggles">
              {FUNDS.map(f => (
                <button
                  key={f}
                  className={`tsp-fund-btn${visibleFunds.includes(f) ? ' active' : ''}`}
                  style={visibleFunds.includes(f) ? { borderColor: COLORS[f as keyof typeof COLORS], color: COLORS[f as keyof typeof COLORS] } : {}}
                  onClick={() => toggleFund(f)}
                >
                  {f}
                </button>
              ))}
            </div>
            <div style={{ height: 200, marginTop: 12 }}>
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={CHART_DATA} margin={{ top: 4, right: 8, bottom: 4, left: -20 }}>
                  <XAxis dataKey="date" tick={{ fill: '#999', fontSize: 10 }} />
                  <YAxis tick={{ fill: '#999', fontSize: 10 }} />
                  <Tooltip
                    contentStyle={{ background: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: 8 }}
                    labelStyle={{ color: '#fff' }}
                  />
                  {visibleFunds.map(f => (
                    <Line
                      key={f}
                      type="monotone"
                      dataKey={f}
                      stroke={COLORS[f as keyof typeof COLORS]}
                      dot={false}
                      strokeWidth={2}
                    />
                  ))}
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>
        </>
      )}

      {tab === 'calculator' && (
        <>
          <div className="tsp-panel__section">
            <label className="tsp-label">Expected Annual Return (%)</label>
            <input type="number" value={data.expectedReturn} min="1" max="20" step="0.5"
              onChange={e => setData(d => ({ ...d, expectedReturn: Number(e.target.value) }))} />
          </div>
          <div className="tsp-panel__section">
            <label className="tsp-label">L Fund Selection</label>
            <select value={data.selectedLFund}
              onChange={e => setData(d => ({ ...d, selectedLFund: e.target.value }))}>
              {L_FUNDS.map(f => <option key={f} value={f}>{f}</option>)}
            </select>
          </div>
          <div className="tsp-projection-card">
            <div className="tsp-projection-card__label">10-Year Projection</div>
            <div className="tsp-projection-card__value money">${Number(projectedBalance()).toLocaleString()}</div>
            <div className="tsp-projection-card__note">At {data.expectedReturn}% annual return</div>
          </div>
          <div className="tsp-note">
            💡 The C Fund (S&P 500 index) has averaged ~10.3%/year historically. The G Fund is the safest option but returns only ~2–3%.
          </div>
        </>
      )}
    </div>
  );
}
