import { NavLink } from 'react-router-dom';
import './BottomNav.css';

const tabs = [
  { to: '/', icon: '🏠', label: 'Home' },
  { to: '/explore', icon: '🧭', label: 'Explore' },
  { to: '/map', icon: '🗺️', label: 'Map' },
  { to: '/va', icon: '⚕️', label: 'VA' },
];

export default function BottomNav() {
  return (
    <nav className="bottom-nav">
      {tabs.map(tab => (
        <NavLink
          key={tab.to}
          to={tab.to}
          end={tab.to === '/'}
          className={({ isActive }) => `bottom-nav__tab${isActive ? ' active' : ''}`}
        >
          <span className="bottom-nav__icon">{tab.icon}</span>
          <span className="bottom-nav__label">{tab.label}</span>
        </NavLink>
      ))}
    </nav>
  );
}
