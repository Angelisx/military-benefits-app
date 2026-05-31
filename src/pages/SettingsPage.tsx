import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PageHeader from '../components/PageHeader';
import { useAuth } from '../context/AuthContext';
import './SettingsPage.css';

export default function SettingsPage() {
  const { user, signOut } = useAuth();
  const navigate = useNavigate();
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);
  const [iosExpanded, setIosExpanded] = useState(false);
  const [androidExpanded, setAndroidExpanded] = useState(false);

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({ title: 'Military Benefits App', url: window.location.origin });
    } else {
      navigator.clipboard.writeText(window.location.origin);
      alert('Link copied!');
    }
  };

  const handleClearCache = () => {
    if ('caches' in window) {
      caches.keys().then(names => names.forEach(n => caches.delete(n)));
    }
    localStorage.clear();
    window.location.reload();
  };

  const handleClearLocalData = () => {
    localStorage.clear();
    alert('Local data cleared.');
    navigate('/');
  };

  return (
    <div className="page-scroll">
      <PageHeader title="Settings" />

      {/* Support */}
      <div className="settings-section">
        <div className="settings-section__heading">Support</div>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="settings-row">
          <span>📩 Message Us on Instagram</span>
          <span className="settings-row__chevron">›</span>
        </a>
        <button className="settings-row" onClick={handleShare}>
          <span>🔗 Share with a Friend</span>
          <span className="settings-row__chevron">›</span>
        </button>
      </div>

      {/* Account */}
      <div className="settings-section">
        <div className="settings-section__heading">Account</div>
        {user ? (
          <>
            <div className="settings-row settings-row--info">
              <span>📧 {user.email}</span>
            </div>
            <button className="settings-row" onClick={signOut}>
              <span>🚪 Sign Out</span>
              <span className="settings-row__chevron">›</span>
            </button>
          </>
        ) : (
          <button className="settings-row" onClick={() => navigate('/auth')}>
            <span>🔑 Sign In / Create Account</span>
            <span className="settings-row__chevron">›</span>
          </button>
        )}
      </div>

      {/* Subscription — hidden until paywall is re-enabled */}

      {/* App Installation */}
      <div className="settings-section">
        <div className="settings-section__heading">App Installation</div>
        <p className="settings-install-note">Installing gives you offline access and a full-screen experience.</p>
        <button
          className="settings-accordion"
          onClick={() => setIosExpanded(e => !e)}
        >
          <span>📱 How to install on iPhone (iOS)</span>
          <span>{iosExpanded ? '▲' : '▼'}</span>
        </button>
        {iosExpanded && (
          <div className="settings-accordion-body">
            <p>1. Open this page in <strong>Safari</strong></p>
            <p>2. Tap the <strong>Share</strong> button (square with arrow up)</p>
            <p>3. Scroll down and tap <strong>"Add to Home Screen"</strong></p>
            <p>4. Tap <strong>Add</strong> in the top right</p>
            <p>The app will now appear on your home screen like a native app.</p>
          </div>
        )}
        <button
          className="settings-accordion"
          onClick={() => setAndroidExpanded(e => !e)}
        >
          <span>🤖 How to install on Android</span>
          <span>{androidExpanded ? '▲' : '▼'}</span>
        </button>
        {androidExpanded && (
          <div className="settings-accordion-body">
            <p>1. Open this page in <strong>Chrome</strong></p>
            <p>2. Tap the <strong>⋮ menu</strong> (three dots, top right)</p>
            <p>3. Tap <strong>"Add to Home screen"</strong></p>
            <p>4. Tap <strong>Add</strong></p>
            <p>The app installs as a standalone app with offline support.</p>
          </div>
        )}
      </div>

      {/* App Cache */}
      <div className="settings-section">
        <div className="settings-section__heading">App Cache</div>
        <button className="settings-row settings-row--warning" onClick={handleClearCache}>
          <span>🗑️ Clear App Cache & Reload</span>
          <span className="settings-row__chevron">›</span>
        </button>
      </div>

      {/* Privacy */}
      <div className="settings-section">
        <div className="settings-section__heading">Privacy & Legal</div>
        <a href="/privacy" className="settings-row">
          <span>🔒 Privacy Policy</span>
          <span className="settings-row__chevron">›</span>
        </a>
        <a href="/terms" className="settings-row">
          <span>📄 Terms of Service</span>
          <span className="settings-row__chevron">›</span>
        </a>
      </div>

      {/* Danger Zone */}
      {user && (
        <div className="settings-section settings-section--danger">
          <div className="settings-section__heading">Danger Zone</div>
          <button className="settings-row settings-row--destructive" onClick={handleClearLocalData}>
            <span>🗑️ Clear Local Data</span>
          </button>
          {!showDeleteConfirm ? (
            <button className="settings-row settings-row--destructive" onClick={() => setShowDeleteConfirm(true)}>
              <span>⛔ Delete Account</span>
            </button>
          ) : (
            <div className="settings-confirm">
              <p>Are you sure? This is permanent and cannot be undone.</p>
              <div className="settings-confirm__btns">
                <button onClick={() => setShowDeleteConfirm(false)}>Cancel</button>
                <button className="settings-confirm__delete">Delete Account</button>
              </div>
            </div>
          )}
        </div>
      )}

      <footer className="settings-footer">
        Military Benefits App v1.0<br />
        Made for those who serve 🇺🇸
      </footer>
    </div>
  );
}
