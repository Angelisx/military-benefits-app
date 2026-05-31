import './PremiumBadge.css';

interface PremiumBadgeProps {
  stepCount?: number;
}

export default function PremiumBadge({ stepCount }: PremiumBadgeProps) {
  return (
    <span className="premium-badge">
      PRO{stepCount ? ` · ${stepCount}` : ''}
    </span>
  );
}
