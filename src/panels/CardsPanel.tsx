import { useState } from 'react';
import PremiumGuard from '../components/PremiumGuard';
import './CardsPanel.css';

const SAMPLE_CARDS = [
  {
    id:'1', name:'Amex Platinum', issuer:'American Express', annual_fee:695, waived_for_military:true,
    military_benefits:'Annual fee waived under SCRA/MLA for active duty. Full $695 waived.',
    signup_bonus:'80,000 points after $8,000 spend in 6 months',
    lounge_access:true, total_annual_perks:1500, tier:1,
    benefits:[
      { name:'Hotel Credit', value:200, reset_period:'Annually', description:'$200 at Fine Hotels & Resorts' },
      { name:'Airline Credit', value:200, reset_period:'Annually', description:'$200 airline fee credit' },
      { name:'Digital Entertainment', value:240, reset_period:'Annually', description:'$20/mo streaming' },
      { name:'Walmart+ Credit', value:155, reset_period:'Annually', description:'Walmart+ subscription covered' },
      { name:'Saks Credit', value:100, reset_period:'Annually', description:'$50 semi-annually at Saks' },
    ],
  },
  {
    id:'2', name:'Chase Sapphire Reserve', issuer:'Chase', annual_fee:550, waived_for_military:true,
    military_benefits:'Annual fee waived under SCRA/MLA for active duty.',
    signup_bonus:'60,000 points after $4,000 spend in 3 months',
    lounge_access:true, total_annual_perks:900, tier:1,
    benefits:[
      { name:'Travel Credit', value:300, reset_period:'Annually', description:'Automatic $300 travel credit' },
      { name:'Global Entry/TSA', value:100, reset_period:'Annually', description:'Credit for application fee' },
      { name:'DashPass', value:120, reset_period:'Annually', description:'DoorDash DashPass subscription' },
    ],
  },
  {
    id:'3', name:'Capital One Venture X', issuer:'Capital One', annual_fee:395, waived_for_military:true,
    military_benefits:'Annual fee waived for active duty under MLA.',
    signup_bonus:'75,000 miles after $4,000 spend in 3 months',
    lounge_access:true, total_annual_perks:700, tier:1,
    benefits:[
      { name:'Travel Credit', value:300, reset_period:'Annually', description:'$300 Capital One travel credit' },
      { name:'Anniversary Bonus', value:100, reset_period:'Annually', description:'10,000 bonus miles annually' },
      { name:'Global Entry/TSA', value:100, reset_period:'Annually', description:'Application fee credit' },
    ],
  },
  {
    id:'4', name:'Chase Sapphire Preferred', issuer:'Chase', annual_fee:95, waived_for_military:true,
    military_benefits:'Annual fee waived under SCRA/MLA.',
    signup_bonus:'60,000 points after $4,000 spend in 3 months',
    lounge_access:false, total_annual_perks:250, tier:2,
    benefits:[
      { name:'Hotel Credit', value:50, reset_period:'Annually', description:'$50 hotel credit through Chase' },
      { name:'DashPass', value:120, reset_period:'Annually', description:'DoorDash DashPass' },
    ],
  },
  {
    id:'5', name:'USAA Cashback Rewards+', issuer:'USAA', annual_fee:0, waived_for_military:false,
    military_benefits:'Designed specifically for military members. No foreign transaction fees.',
    signup_bonus:'None',
    lounge_access:false, total_annual_perks:120, tier:2,
    benefits:[
      { name:'Gas Cashback', value:60, reset_period:'Annually', description:'5% on first $3,000 in gas/military base purchases' },
      { name:'Grocery Cashback', value:60, reset_period:'Annually', description:'2% on grocery purchases' },
    ],
  },
  {
    id:'6', name:'Navy Federal Platinum', issuer:'Navy Federal', annual_fee:0, waived_for_military:false,
    military_benefits:'Exclusively for military, veterans, and their families. Low APR options.',
    signup_bonus:'None',
    lounge_access:false, total_annual_perks:0, tier:3,
    benefits:[],
  },
];

export default function CardsPanel() {
  const [selected, setSelected] = useState<typeof SAMPLE_CARDS[0] | null>(null);
  const [search, setSearch] = useState('');

  const filtered = SAMPLE_CARDS.filter(c =>
    !search || c.name.toLowerCase().includes(search.toLowerCase()) ||
    c.issuer.toLowerCase().includes(search.toLowerCase())
  );

  if (selected) {
    return (
      <PremiumGuard inline>
        <div className="card-detail">
          <button className="card-detail__back" onClick={() => setSelected(null)}>‹ Back</button>
          <div className="card-detail__content">
            <div className="card-detail__issuer">{selected.issuer}</div>
            <h2 className="card-detail__name">{selected.name}</h2>
            {selected.waived_for_military && (
              <div className="card-detail__waived">✅ Fee Waived for Military</div>
            )}
            <div className="card-detail__row">
              <span>Annual Fee</span>
              <span className={selected.waived_for_military ? 'strikethrough' : 'money'}>
                ${selected.annual_fee}
              </span>
            </div>
            <div className="card-detail__row">
              <span>Annual Perks Value</span>
              <span className="money">${selected.total_annual_perks}+</span>
            </div>
            <div className="card-detail__row">
              <span>Lounge Access</span>
              <span>{selected.lounge_access ? '✅ Yes' : '❌ No'}</span>
            </div>

            <div className="card-detail__section-heading">Military Benefits</div>
            <p className="card-detail__text">{selected.military_benefits}</p>

            <div className="card-detail__section-heading">Sign-Up Bonus</div>
            <p className="card-detail__text">{selected.signup_bonus}</p>

            {selected.benefits.length > 0 && (
              <>
                <div className="card-detail__section-heading">Annual Benefits Breakdown</div>
                {selected.benefits.map((b, i) => (
                  <div key={i} className="card-benefit-row">
                    <div className="card-benefit-row__top">
                      <span className="card-benefit-row__name">{b.name}</span>
                      <span className="money">${b.value}/{b.reset_period === 'Monthly' ? 'mo' : 'yr'}</span>
                    </div>
                    <div className="card-benefit-row__desc">{b.description}</div>
                  </div>
                ))}
              </>
            )}
          </div>
        </div>
      </PremiumGuard>
    );
  }

  return (
    <div className="cards-panel">
      <div className="cards-panel__search-wrap">
        <input
          placeholder="🔍 Search credit cards..."
          value={search}
          onChange={e => setSearch(e.target.value)}
        />
      </div>
      <div className="cards-panel__count">{filtered.length} cards</div>
      {filtered.map(c => (
        <button key={c.id} className="card-item" onClick={() => setSelected(c)}>
          <div className="card-item__top">
            <span className="card-item__issuer">{c.issuer}</span>
            {c.waived_for_military && <span className="card-item__waived">Fee Waived ✅</span>}
          </div>
          <div className="card-item__name">{c.name}</div>
          <div className="card-item__meta">
            <span className="card-item__fee">${c.annual_fee}/yr fee</span>
            {c.total_annual_perks > 0 && (
              <span className="money card-item__perks">${c.total_annual_perks}+ in perks</span>
            )}
          </div>
          <span className="card-item__chevron">›</span>
        </button>
      ))}
    </div>
  );
}
