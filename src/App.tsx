import { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import BottomNav from './components/BottomNav';
import HomePage from './pages/HomePage';

const ExplorePage = lazy(() => import('./pages/ExplorePage'));
const MapPage = lazy(() => import('./pages/MapPage'));
const VAPage = lazy(() => import('./pages/VAPage'));
const SettingsPage = lazy(() => import('./pages/SettingsPage'));
const LibraryPage = lazy(() => import('./pages/LibraryPage'));
const AuthPage = lazy(() => import('./pages/AuthPage'));
const PaywallPage = lazy(() => import('./pages/PaywallPage'));

const NO_NAV_ROUTES = ['/auth', '/paywall'];

function AppShell() {
  const location = useLocation();
  const showNav = !NO_NAV_ROUTES.includes(location.pathname);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', flex: 1, overflow: 'hidden' }}>
      <div style={{ flex: 1, overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
        <Suspense fallback={null}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/explore" element={<ExplorePage />} />
            <Route path="/map" element={<MapPage />} />
            <Route path="/va" element={<VAPage />} />
            <Route path="/settings" element={<SettingsPage />} />
            <Route path="/library" element={<LibraryPage />} />
            <Route path="/auth" element={<AuthPage />} />
            <Route path="/paywall" element={<PaywallPage />} />
          </Routes>
        </Suspense>
      </div>
      {showNav && <BottomNav />}
    </div>
  );
}

export default function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <AppShell />
      </BrowserRouter>
    </AuthProvider>
  );
}
