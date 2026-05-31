import { useState } from 'react';
import PageHeader from '../components/PageHeader';
import SlidePanel from '../components/SlidePanel';
import ArticleList from '../components/ArticleList';
import ArticleReader from '../components/ArticleReader';
import LoungesPanel from '../panels/LoungesPanel';
import HotelsPanel from '../panels/HotelsPanel';
import TSPPanel from '../panels/TSPPanel';
import PayPanel from '../panels/PayPanel';
import CardsPanel from '../panels/CardsPanel';
import type { Article } from '../types';
import './ExplorePage.css';

type PanelId = 'lounges' | 'library' | 'tsp' | 'hotels' | 'cards' | 'pay' | null;

const TILES = [
  { id:'lounges' as PanelId, icon:'✈️', label:'Lounges', sub:'200+ Airport Lounges', gradient:'gradient-purple' },
  { id:'library' as PanelId, icon:'📚', label:'Library', sub:'Benefits You Didn\'t Know Existed', gradient:'gradient-blue' },
  { id:'tsp' as PanelId, icon:'📊', label:'TSP', sub:'Track Your TSP Returns', gradient:'gradient-red' },
  { id:'hotels' as PanelId, icon:'🏨', label:'Hotels', sub:'90+ Premium Hotels', gradient:'gradient-navy' },
  { id:'cards' as PanelId, icon:'💳', label:'Cards', sub:'Track Your Credit Card Benefits', gradient:'gradient-teal' },
  { id:'pay' as PanelId, icon:'💰', label:'Pay', sub:'Track Your Pay', gradient:'gradient-amber' },
];

export default function ExplorePage() {
  const [activePanel, setActivePanel] = useState<PanelId>(null);
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);

  const panelTitle: Record<Exclude<PanelId, null>, string> = {
    lounges: 'Lounges',
    library: 'Library',
    tsp: 'TSP',
    hotels: 'Hotels',
    cards: 'Cards',
    pay: 'Pay Calculator',
  };

  const panelBadge: Partial<Record<Exclude<PanelId, null>, string>> = {
    lounges: '208 Airport Lounges',
    hotels: '97 Properties',
    cards: '26 Cards',
    library: `${25} Articles`,
  };

  return (
    <div className="page-scroll">
      <PageHeader title="Explore" subtitle="Military benefits & tools" />

      <div className="explore-grid">
        {TILES.map(tile => (
          <button
            key={tile.id}
            className={`explore-tile ${tile.gradient}`}
            onClick={() => setActivePanel(tile.id)}
          >
            <span className="explore-tile__icon">{tile.icon}</span>
            <span className="explore-tile__label">{tile.label}</span>
            <span className="explore-tile__sub">{tile.sub}</span>
          </button>
        ))}
      </div>

      {/* Sub-panels */}
      <SlidePanel
        open={activePanel === 'lounges'}
        onClose={() => setActivePanel(null)}
        title={panelTitle.lounges}
        badge={panelBadge.lounges}
      >
        <LoungesPanel />
      </SlidePanel>

      <SlidePanel
        open={activePanel === 'library'}
        onClose={() => setActivePanel(null)}
        title={panelTitle.library}
        badge={panelBadge.library}
      >
        <ArticleList onSelect={a => { setActivePanel(null); setSelectedArticle(a); }} />
      </SlidePanel>

      <SlidePanel
        open={activePanel === 'tsp'}
        onClose={() => setActivePanel(null)}
        title={panelTitle.tsp}
      >
        <TSPPanel />
      </SlidePanel>

      <SlidePanel
        open={activePanel === 'hotels'}
        onClose={() => setActivePanel(null)}
        title={panelTitle.hotels}
        badge={panelBadge.hotels}
      >
        <HotelsPanel />
      </SlidePanel>

      <SlidePanel
        open={activePanel === 'cards'}
        onClose={() => setActivePanel(null)}
        title={panelTitle.cards}
        badge={panelBadge.cards}
      >
        <CardsPanel />
      </SlidePanel>

      <SlidePanel
        open={activePanel === 'pay'}
        onClose={() => setActivePanel(null)}
        title={panelTitle.pay}
      >
        <PayPanel />
      </SlidePanel>

      {/* Article reader stacks on top */}
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
