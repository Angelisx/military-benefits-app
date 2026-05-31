import { useEffect, useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import './PaywallPage.css';

const PLANS = [
  { id:'monthly', label:'Monthly', price:'$9.99', period:'/month', badge:null },
  { id:'annual', label:'Annual', price:'$59.99', period:'/year', badge:'Save 50%' },
];

export default function PaywallPage() {
  const navigate = useNavigate();
  const [params] = useSearchParams();
  const [selectedPlan, setSelectedPlan] = useState('annual');

  useEffect(() => {
    if (params.get('checkout') === 'success') {
      alert('Welcome to PRO! Enjoy your full access.');
      navigate('/');
    }
  }, [params, navigate]);

  const handleCheckout = () => {
    alert('Stripe checkout integration requires VITE_STRIPE_PUBLISHABLE_KEY and a backend /api/checkout endpoint.');
  };

  return (
    <div className="paywall-page">
      <button className="paywall-page__back" onClick={() => navigate(-1)}>‹ Back</button>

      <div className="paywall-page__hero">
        <div className="paywall-page__icon">⭐</div>
        <h1 className="paywall-page__title">Unlock PRO Access</h1>
        <p className="paywall-page__sub">
          The complete military benefits toolkit — every article, every tool, every dollar saved.
        </p>
      </div>

      <ul className="paywall-page__perks">
        <li>✅ All 25+ premium benefit articles</li>
        <li>✅ Credit card benefit tracker ($1,500+ in annual perks)</li>
        <li>✅ TSP portfolio optimizer with live fund data</li>
        <li>✅ State-by-state benefit breakdown</li>
        <li>✅ VA loan & disability calculators</li>
        <li>✅ Offline access via PWA</li>
      </ul>

      <div className="paywall-page__plans">
        {PLANS.map(plan => (
          <button
            key={plan.id}
            className={`paywall-plan${selectedPlan === plan.id ? ' selected' : ''}`}
            onClick={() => setSelectedPlan(plan.id)}
          >
            <div className="paywall-plan__top">
              <span className="paywall-plan__label">{plan.label}</span>
              {plan.badge && <span className="paywall-plan__badge">{plan.badge}</span>}
            </div>
            <div className="paywall-plan__price">{plan.price}</div>
            <div className="paywall-plan__period">{plan.period}</div>
          </button>
        ))}
      </div>

      <button className="paywall-page__cta" onClick={handleCheckout}>
        Start Free Trial
      </button>
      <p className="paywall-page__fine">7-day free trial · Cancel anytime · No commitment</p>
    </div>
  );
}
