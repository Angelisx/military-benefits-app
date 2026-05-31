import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getRecentArticles } from '../data/articles';
import SlidePanel from '../components/SlidePanel';
import ArticleReader from '../components/ArticleReader';
import type { Article } from '../types';
import './HomePage.css';

const METRIC_TILES = [
  { id:'cards', icon:'💳', label:'Card Benefits', gradient:'gradient-teal', link:'/explore' },
  { id:'income', icon:'💵', label:'Annual Income', gradient:'gradient-amber', link:null },
  { id:'tsp', icon:'📈', label:'Projected Balance', subtitle:'1 Week', gradient:'gradient-blue', link:'/explore' },
  { id:'perks', icon:'🎯', label:'Perks', gradient:'gradient-purple', link:null },
];

export default function HomePage() {
  const navigate = useNavigate();
  const recentArticles = getRecentArticles(3);
  const [income, setIncome] = useState(() => Number(localStorage.getItem('annualIncome') || 0));
  const [editIncome, setEditIncome] = useState(false);
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);

  const saveIncome = (val: number) => {
    setIncome(val);
    localStorage.setItem('annualIncome', String(val));
    setEditIncome(false);
  };

  return (
    <div className="page-scroll">
      <header className="home-header">
        <div>
          <h1 className="home-header__title">Home</h1>
          <p className="home-header__subtitle">Track and maximize your military benefits</p>
        </div>
        <button className="home-header__gear" onClick={() => navigate('/settings')} aria-label="Settings">⚙️</button>
      </header>

      <div className="metric-grid">
        {METRIC_TILES.map(tile => (
          <button
            key={tile.id}
            className={`metric-tile ${tile.gradient}`}
            onClick={() => tile.link && navigate(tile.link)}
          >
            <span className="metric-tile__icon">{tile.icon}</span>
            <div className="metric-tile__label">{tile.label}</div>
            {tile.id === 'income' ? (
              editIncome ? (
                <input
                  className="metric-tile__input"
                  type="number"
                  autoFocus
                  defaultValue={income || ''}
                  placeholder="Enter amount"
                  onBlur={e => saveIncome(Number(e.target.value))}
                  onKeyDown={e => e.key === 'Enter' && saveIncome(Number((e.target as HTMLInputElement).value))}
                  onClick={e => e.stopPropagation()}
                />
              ) : (
                <div className="metric-tile__value money" onClick={e => { e.stopPropagation(); setEditIncome(true); }}>
                  {income ? `$${income.toLocaleString()}/yr` : 'Tap to add'}
                </div>
              )
            ) : (
              <div className="metric-tile__value">
                {tile.id === 'tsp' ? 'View TSP →' : tile.id === 'cards' ? 'Manage →' : '0 pts'}
              </div>
            )}
          </button>
        ))}
      </div>

      <div className="home-total">
        Total Tracked: <span className="money">$0</span>
      </div>

      <section className="home-section">
        <h2 className="home-section__title">📍 Nearby Discounts</h2>
        <div className="location-prompt">
          <div className="location-prompt__icon">📍</div>
          <p className="location-prompt__text">Enable location to see military discounts near you</p>
          <button
            className="location-prompt__btn"
            onClick={() => navigator.geolocation?.getCurrentPosition(() => {}, () => {})}
          >
            Enable Location
          </button>
        </div>
      </section>

      <section className="home-section">
        <h2 className="home-section__title">📰 Latest Articles</h2>
        {recentArticles.map(a => (
          <button key={a.id} className="home-article-card" onClick={() => setSelectedArticle(a)}>
            <span className="home-article-card__emoji">{a.emoji}</span>
            <div className="home-article-card__body">
              <div className="home-article-card__title">{a.title}</div>
              <div className="home-article-card__sub">{a.subtitle}</div>
            </div>
            <span className="home-article-card__chevron">›</span>
          </button>
        ))}
      </section>

      <SlidePanel
        open={!!selectedArticle}
        onClose={() => setSelectedArticle(null)}
        title={selectedArticle?.title ?? ''}
      >
        {selectedArticle && <ArticleReader article={selectedArticle} />}
      </SlidePanel>
    </div>
  );
}
