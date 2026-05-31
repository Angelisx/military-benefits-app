import type { ReactNode } from 'react';

interface PremiumGuardProps {
  children: ReactNode;
  inline?: boolean;
}

// Paywall disabled — all content is freely accessible
export default function PremiumGuard({ children }: PremiumGuardProps) {
  return <>{children}</>;
}
