import { createContext, useContext, useEffect, useState } from 'react';
import type { ReactNode } from 'react';
import { supabase } from '../lib/supabase';
import type { UserProfile, SubscriptionStatus } from '../types';

interface AuthContextValue {
  user: UserProfile | null;
  loading: boolean;
  subscriptionStatus: SubscriptionStatus;
  signOut: () => Promise<void>;
  refreshSubscription: () => void;
}

const AuthContext = createContext<AuthContextValue>({
  user: null,
  loading: true,
  subscriptionStatus: 'free',
  signOut: async () => {},
  refreshSubscription: () => {},
});

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<UserProfile | null>(null);
  const [loading, setLoading] = useState(true);
  const [subscriptionStatus, setSubscriptionStatus] = useState<SubscriptionStatus>('free');

  const loadSubscription = (userId: string): SubscriptionStatus => {
    const cached = localStorage.getItem(`subscription_status_v3_${userId}`);
    if (cached) {
      try {
        const parsed = JSON.parse(cached);
        const age = Date.now() - (parsed.timestamp ?? 0);
        if (age < 1000 * 60 * 60) return parsed.subscriptionStatus ?? 'free';
      } catch {}
    }
    return 'free';
  };

  useEffect(() => {
    supabase.auth.getSession().then(({ data }) => {
      const session = data.session;
      if (session?.user) {
        const u = session.user;
        const profile: UserProfile = {
          id: u.id,
          email: u.email ?? '',
          subscription_status: loadSubscription(u.id),
          is_active_duty: localStorage.getItem('isActiveDuty') !== 'false',
        };
        setUser(profile);
        setSubscriptionStatus(profile.subscription_status);
        localStorage.setItem('mba_access_token', session.access_token);
        localStorage.setItem('mba_refresh_token', session.refresh_token ?? '');
      }
      setLoading(false);
    });

    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      if (session?.user) {
        const u = session.user;
        const profile: UserProfile = {
          id: u.id,
          email: u.email ?? '',
          subscription_status: loadSubscription(u.id),
          is_active_duty: localStorage.getItem('isActiveDuty') !== 'false',
        };
        setUser(profile);
        setSubscriptionStatus(profile.subscription_status);
        localStorage.setItem('mba_access_token', session.access_token);
        localStorage.setItem('mba_refresh_token', session.refresh_token ?? '');
      } else {
        setUser(null);
        setSubscriptionStatus('free');
        localStorage.removeItem('mba_access_token');
        localStorage.removeItem('mba_refresh_token');
      }
      setLoading(false);
    });

    return () => subscription.unsubscribe();
  }, []);

  const signOut = async () => {
    await supabase.auth.signOut();
    localStorage.removeItem('mba_access_token');
    localStorage.removeItem('mba_refresh_token');
    setUser(null);
    setSubscriptionStatus('free');
  };

  const refreshSubscription = () => {
    if (user) setSubscriptionStatus(loadSubscription(user.id));
  };

  return (
    <AuthContext.Provider value={{ user, loading, subscriptionStatus, signOut, refreshSubscription }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);
