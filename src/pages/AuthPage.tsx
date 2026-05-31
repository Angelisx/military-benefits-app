import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '../lib/supabase';
import './AuthPage.css';

export default function AuthPage() {
  const navigate = useNavigate();
  const [mode, setMode] = useState<'sign_in' | 'sign_up'>('sign_in');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleEmailAuth = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setSuccess('');
    try {
      if (mode === 'sign_in') {
        const { error } = await supabase.auth.signInWithPassword({ email, password });
        if (error) throw error;
        navigate('/');
      } else {
        const { error } = await supabase.auth.signUp({ email, password });
        if (error) throw error;
        setSuccess('Check your email to confirm your account.');
      }
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : 'An error occurred');
    } finally {
      setLoading(false);
    }
  };

  const handleGoogle = async () => {
    await supabase.auth.signInWithOAuth({ provider: 'google', options: { redirectTo: window.location.origin } });
  };

  const handleApple = async () => {
    await supabase.auth.signInWithOAuth({ provider: 'apple', options: { redirectTo: window.location.origin } });
  };

  return (
    <div className="auth-page">
      <button className="auth-page__back" onClick={() => navigate(-1)}>‹ Back</button>
      <div className="auth-page__header">
        <div className="auth-page__logo">🎖️</div>
        <h1 className="auth-page__title">Military Benefits App</h1>
        <p className="auth-page__sub">Track and maximize your military benefits</p>
      </div>

      <div className="auth-tabs">
        <button className={`auth-tab${mode === 'sign_in' ? ' active' : ''}`} onClick={() => setMode('sign_in')}>Sign In</button>
        <button className={`auth-tab${mode === 'sign_up' ? ' active' : ''}`} onClick={() => setMode('sign_up')}>Create Account</button>
      </div>

      <form className="auth-form" onSubmit={handleEmailAuth}>
        <input
          type="email"
          placeholder="Email address"
          value={email}
          onChange={e => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          required
          minLength={6}
        />
        {error && <div className="auth-error">{error}</div>}
        {success && <div className="auth-success">{success}</div>}
        <button type="submit" className="auth-submit" disabled={loading}>
          {loading ? 'Loading...' : mode === 'sign_in' ? 'Sign In' : 'Create Account'}
        </button>
      </form>

      <div className="auth-divider"><span>or continue with</span></div>

      <div className="auth-social">
        <button className="auth-social-btn" onClick={handleGoogle}>
          <span>🔵</span> Google
        </button>
        <button className="auth-social-btn" onClick={handleApple}>
          <span>🍎</span> Apple
        </button>
      </div>

      <p className="auth-legal">
        By signing in you agree to our{' '}
        <a href="/terms">Terms of Service</a> and{' '}
        <a href="/privacy">Privacy Policy</a>.
      </p>
    </div>
  );
}
