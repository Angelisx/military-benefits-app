import { useState } from 'react';
import PageHeader from '../components/PageHeader';
import './VAPage.css';

// VA Combined Rating Formula
function combinedRating(ratings: number[]): number {
  if (!ratings.length) return 0;
  let remaining = 100;
  let combined = 0;
  const sorted = [...ratings].sort((a, b) => b - a);
  for (const r of sorted) {
    const contribution = (r / 100) * remaining;
    combined += contribution;
    remaining -= contribution;
  }
  return Math.round(combined / 10) * 10; // Round to nearest 10
}

export default function VAPage() {
  const [tab, setTab] = useState<'loan' | 'disability'>('loan');

  // VA Loan calculators
  const [income, setIncome] = useState('');
  const [debts, setDebts] = useState('');
  const [rate, setRate] = useState('7.0');

  // IRRRL
  const [curRate, setCurRate] = useState('');
  const [newRate, setNewRate] = useState('');
  const [balance, setBalance] = useState('');

  // Disability
  const [disabilityTab, setDisabilityTab] = useState<'rating'|'bdd'|'state'>('rating');
  const [ratings, setRatings] = useState<number[]>([30]);
  const [stateSearch, setStateSearch] = useState('');

  const affordCalc = () => {
    const monthlyIncome = Number(income) / 12;
    const maxDebtRatio = 0.41;
    const maxPayment = monthlyIncome * maxDebtRatio - Number(debts);
    if (maxPayment <= 0) return null;
    const monthlyRate = Number(rate) / 100 / 12;
    const n = 360;
    const maxLoan = maxPayment * ((1 - Math.pow(1 + monthlyRate, -n)) / monthlyRate);
    return { maxLoan: Math.round(maxLoan), maxPayment: Math.round(maxPayment) };
  };

  const irrrlCalc = () => {
    const b = Number(balance);
    const cur = Number(curRate) / 100 / 12;
    const nw = Number(newRate) / 100 / 12;
    if (!b || !cur || !nw || nw >= cur) return null;
    const curPmt = b * cur / (1 - Math.pow(1 + cur, -360));
    const newPmt = b * nw / (1 - Math.pow(1 + nw, -360));
    const savings = curPmt - newPmt;
    const closingCost = b * 0.01;
    const breakeven = Math.ceil(closingCost / savings);
    return { savings: Math.round(savings), breakeven };
  };

  const afford = affordCalc();
  const irrrl = irrrlCalc();
  const combined = combinedRating(ratings);

  const BDD_STEPS = [
    { step:1, title:'Start 180–90 Days Before Separation', desc:'File your claim between 180 and 90 days before your separation date. This is the eligibility window for BDD.' },
    { step:2, title:'Gather Medical Records', desc:'Request copies of all your military treatment records (STRs). Submit these with your claim — VA will not have them automatically.' },
    { step:3, title:'File on VA.gov', desc:'Go to VA.gov/disability/file-disability-claim-form-21-526ez. Select "Benefits Delivery at Discharge" as your claim type.' },
    { step:4, title:'Complete C&P Exams Before Separation', desc:'VA will schedule Compensation and Pension exams. You must complete all exams before your separation date. Missing an exam can delay your claim by months.' },
    { step:5, title:'Your Rating Begins on Day 1', desc:'If approved, your effective date is your separation date — not when you filed. You receive back pay from day one.' },
  ];

  const SAMPLE_STATES = [
    { code:'TX', name:'Texas', benefits:['No state income tax on military retirement pay','100% disabled veterans exempt from property taxes','Purple Heart recipients: free vehicle registration'] },
    { code:'FL', name:'Florida', benefits:['No state income tax (all residents)','100% disabled veterans: property tax exemption','Homestead exemption up to $5,000 additional'] },
    { code:'CA', name:'California', benefits:['Military pay earned outside CA not taxed','100% disabled veterans: property tax exemption','CalVet college tuition fee waivers'] },
    { code:'VA', name:'Virginia', benefits:['Military retirement pay deduction up to $20,000/yr','Surviving spouse property tax exemption','National Guard education assistance grant'] },
    { code:'NC', name:'North Carolina', benefits:['Military retirement pay partially exempt from income tax','Disabled veteran property tax exclusion up to $45,000','Gold Star family license plates'] },
    { code:'GA', name:'Georgia', benefits:['Military retirement pay: first $35,000 exempt','Veteran/surviving spouse property tax exemption','State tuition waiver for Purple Heart recipients'] },
  ];

  const filteredStates = SAMPLE_STATES.filter(s =>
    !stateSearch || s.name.toLowerCase().includes(stateSearch.toLowerCase()) ||
    s.code.toLowerCase().includes(stateSearch.toLowerCase())
  );

  return (
    <div className="page-scroll">
      <PageHeader title="VA" subtitle="Loan & Disability Tools" />

      <div className="va-tabs">
        <button className={`va-tab${tab === 'loan' ? ' active' : ''}`} onClick={() => setTab('loan')}>VA Loan</button>
        <button className={`va-tab${tab === 'disability' ? ' active' : ''}`} onClick={() => setTab('disability')}>VA Disability</button>
      </div>

      {tab === 'loan' && (
        <div className="va-section-list">
          <div className="va-card">
            <div className="va-card__header">🏠 VA Affordability Calculator</div>
            <div className="va-form">
              <div className="va-field">
                <label>Annual Income ($)</label>
                <input type="number" value={income} placeholder="e.g. 65000" onChange={e => setIncome(e.target.value)} />
              </div>
              <div className="va-field">
                <label>Monthly Debts ($)</label>
                <input type="number" value={debts} placeholder="Car, student loans, etc." onChange={e => setDebts(e.target.value)} />
              </div>
              <div className="va-field">
                <label>Interest Rate (%)</label>
                <input type="number" value={rate} step="0.1" onChange={e => setRate(e.target.value)} />
              </div>
            </div>
            {afford ? (
              <div className="va-results">
                <div className="va-result-row">
                  <span>Max Loan Amount</span>
                  <span className="money">${afford.maxLoan.toLocaleString()}</span>
                </div>
                <div className="va-result-row">
                  <span>Est. Monthly Payment</span>
                  <span className="money">${afford.maxPayment.toLocaleString()}/mo</span>
                </div>
              </div>
            ) : (income && debts) ? (
              <div className="va-warning">⚠️ Debt-to-income ratio too high. Reduce debts or increase income.</div>
            ) : null}
          </div>

          <div className="va-card">
            <div className="va-card__header">🔄 VA IRRRL Calculator</div>
            <div className="va-form">
              <div className="va-field">
                <label>Current Rate (%)</label>
                <input type="number" value={curRate} step="0.1" placeholder="e.g. 7.5" onChange={e => setCurRate(e.target.value)} />
              </div>
              <div className="va-field">
                <label>New Rate (%)</label>
                <input type="number" value={newRate} step="0.1" placeholder="e.g. 6.2" onChange={e => setNewRate(e.target.value)} />
              </div>
              <div className="va-field">
                <label>Loan Balance ($)</label>
                <input type="number" value={balance} placeholder="e.g. 300000" onChange={e => setBalance(e.target.value)} />
              </div>
            </div>
            {irrrl ? (
              <div className="va-results">
                <div className="va-result-row">
                  <span>Monthly Savings</span>
                  <span className="money">${irrrl.savings.toLocaleString()}/mo</span>
                </div>
                <div className="va-result-row">
                  <span>Break-Even</span>
                  <span>{irrrl.breakeven} months</span>
                </div>
              </div>
            ) : null}
            <p className="va-note">IRRRL (Streamline Refinance) requires no appraisal and minimal paperwork. New rate must be lower than current rate.</p>
          </div>
        </div>
      )}

      {tab === 'disability' && (
        <>
          <div className="va-sub-tabs">
            <button className={`va-sub-tab${disabilityTab==='rating'?' active':''}`} onClick={()=>setDisabilityTab('rating')}>🧮 Rating</button>
            <button className={`va-sub-tab${disabilityTab==='bdd'?' active':''}`} onClick={()=>setDisabilityTab('bdd')}>📋 BDD</button>
            <button className={`va-sub-tab${disabilityTab==='state'?' active':''}`} onClick={()=>setDisabilityTab('state')}>🏴 State</button>
          </div>

          {disabilityTab === 'rating' && (
            <div className="va-section-list">
              <div className="va-card">
                <div className="va-card__header">🧮 Combined VA Rating Calculator</div>
                <div className="va-rating-combined">
                  <div className="va-rating-combined__value money">{combined}%</div>
                  <div className="va-rating-combined__label">Combined Rating</div>
                </div>
                <div className="va-ratings-list">
                  {ratings.map((r, i) => (
                    <div key={i} className="va-rating-row">
                      <span className="va-rating-row__label">Condition {i+1}</span>
                      <select value={r} onChange={e => setRatings(prev => prev.map((x,j) => j===i ? Number(e.target.value) : x))}>
                        {[10,20,30,40,50,60,70,80,90,100].map(v => <option key={v} value={v}>{v}%</option>)}
                      </select>
                      {ratings.length > 1 && (
                        <button className="va-rating-remove" onClick={() => setRatings(prev => prev.filter((_,j) => j!==i))}>✕</button>
                      )}
                    </div>
                  ))}
                </div>
                <button className="va-add-condition" onClick={() => setRatings(prev => [...prev, 10])}>+ Add Condition</button>
                <p className="va-note">The VA uses "whole person" math — ratings don't simply add up. A 30% + 30% = 51% (rounds to 50%), not 60%.</p>
              </div>
            </div>
          )}

          {disabilityTab === 'bdd' && (
            <div className="va-section-list">
              <div className="va-card">
                <div className="va-card__header">📋 BDD — Separation Claims Guide</div>
                <p className="va-bdd-intro">File before you separate and your effective date is Day 1 of civilian life. Benefits Delivery at Discharge (BDD) is the fastest path to your rating.</p>
                {BDD_STEPS.map(s => (
                  <div key={s.step} className="bdd-step">
                    <div className="bdd-step__num">{s.step}</div>
                    <div className="bdd-step__body">
                      <div className="bdd-step__title">{s.title}</div>
                      <div className="bdd-step__desc">{s.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {disabilityTab === 'state' && (
            <div className="va-section-list">
              <div style={{ padding: '12px 16px 8px' }}>
                <input
                  placeholder="🔍 Search states..."
                  value={stateSearch}
                  onChange={e => setStateSearch(e.target.value)}
                />
              </div>
              {filteredStates.map(s => (
                <div key={s.code} className="state-benefit-card">
                  <div className="state-benefit-card__header">
                    <span className="state-benefit-card__code">{s.code}</span>
                    <span className="state-benefit-card__name">{s.name}</span>
                  </div>
                  {s.benefits.map((b, i) => (
                    <div key={i} className="state-benefit-item">• {b}</div>
                  ))}
                </div>
              ))}
            </div>
          )}
        </>
      )}
    </div>
  );
}
