import { useState } from 'react';
import PremiumGuard from '../components/PremiumGuard';
import { CREDIT_CARDS } from '../data/creditCards';
import { getTrackedCardIds, toggleTrackedCard } from '../lib/tracking';
import './CardsPanel.css';

export default function CardsPanel() {
  const [selected, setSelected] = useState<typeof CREDIT_CARDS[0] | null>(null);
  const [search, setSearch] = useState('');
  const [trackedIds, setTrackedIds] = useState<string[]>(getTrackedCardIds);

  const handleToggleTracked = (id: string) => {
    setTrackedIds(toggleTrackedCard(id));
  };

  const filtered = CREDIT_CARDS.filter(c =>
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
            <button
              className={`card-detail__track${trackedIds.includes(selected.id) ? ' active' : ''}`}
              onClick={() => handleToggleTracked(selected.id)}
            >
              {trackedIds.includes(selected.id) ? '✓ Tracking This Card' : '+ Track This Card'}
            </button>
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
      <div className="cards-panel__count">
        {filtered.length} cards{trackedIds.length > 0 ? ` · ${trackedIds.length} tracked` : ''}
      </div>
      {filtered.map(c => (
        <div key={c.id} className="card-item">
          <button className="card-item__main" onClick={() => setSelected(c)}>
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
          <button
            className={`card-item__track${trackedIds.includes(c.id) ? ' active' : ''}`}
            aria-label={trackedIds.includes(c.id) ? 'Untrack card' : 'Track card'}
            onClick={() => handleToggleTracked(c.id)}
          >
            {trackedIds.includes(c.id) ? '✓' : '+'}
          </button>
        </div>
      ))}
    </div>
  );
}
