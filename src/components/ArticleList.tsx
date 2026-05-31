import { useState } from 'react';
import { articles } from '../data/articles';
import type { Article } from '../types';
import './ArticleList.css';

const CATEGORIES = ['All','Financial','Travel','Entertainment','Shopping','Finance','Lifestyle','Career','Health'];

interface ArticleListProps {
  onSelect: (article: Article) => void;
}

export default function ArticleList({ onSelect }: ArticleListProps) {
  const [category, setCategory] = useState('All');
  const [search, setSearch] = useState('');

  const filtered = articles.filter(a => {
    const matchCat = category === 'All' || a.category === category;
    const matchSearch = !search || a.title.toLowerCase().includes(search.toLowerCase());
    return matchCat && matchSearch;
  });

  return (
    <div className="article-list">
      <div className="article-list__search-wrap">
        <input
          className="article-list__search"
          placeholder="🔍 Search articles..."
          value={search}
          onChange={e => setSearch(e.target.value)}
        />
      </div>
      <div className="article-list__chips">
        {CATEGORIES.map(c => (
          <button
            key={c}
            className={`chip${category === c ? ' chip--active' : ''}`}
            onClick={() => setCategory(c)}
          >
            {c}
          </button>
        ))}
      </div>
      <div className="article-list__items">
        {filtered.map(a => (
          <button key={a.id} className="article-card" onClick={() => onSelect(a)}>
            <span className="article-card__emoji">{a.emoji}</span>
            <div className="article-card__body">
              <div className="article-card__title-row">
                <span className="article-card__title">{a.title}</span>
              </div>
              <span className="article-card__subtitle">{a.subtitle}</span>
            </div>
            <span className="article-card__chevron">›</span>
          </button>
        ))}
      </div>
    </div>
  );
}
