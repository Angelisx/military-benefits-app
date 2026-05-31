import { useNavigate } from 'react-router-dom';
import './PremiumPaywall.css';

interface PremiumPaywallProps {
  inline?: boolean;
}

export default function PremiumPaywall({ inline }: PremiumPaywallProps) {
  const navigate = useNavigate();

  return (
    <div className={`paywall${inline ? ' paywall--inline' : ''}`}>
      <div className="paywall__icon">⭐</div>
      <h2 className="paywall__title">Unlock PRO Access</h2>
      <p className="paywall__desc">
        Get unlimited access to all articles, credit card tracking, TSP tools, and exclusive military benefits content.
      </p>
      <ul className="paywall__perks">
        <li>✅ All 25+ premium articles</li>
        <li>✅ Credit card benefit tracker</li>
        <li>✅ TSP portfolio tools</li>
        <li>✅ Exclusive deal alerts</li>
      </ul>
      <button className="paywall__cta" onClick={() => navigate('/paywall')}>
        Start Free Trial
      </button>
      <p className="paywall__fine">Cancel anytime · No commitment</p>
    </div>
  );
}
