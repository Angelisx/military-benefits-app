import { useState } from 'react';
import './LoungesPanel.css';

const FILTER_TABS = ['All','Military/USO','Priority Pass','Amex Platinum','Capital One','Chase Sapphire','Delta Reserve'];

// Sample lounge data — production pulls from /api/data/airport-lounges
const SAMPLE_LOUNGES = [
  { id:'1', state:'CA', airport:'LAX - Los Angeles', count:8, uso:true, country:'USA', lounges:['USO Lounge T2','Priority Pass Club LAX','Amex Centurion LAX','Delta Sky Club T3'] },
  { id:'2', state:'TX', airport:'DFW - Dallas Fort Worth', count:6, uso:true, country:'USA', lounges:['USO DFW','American Admirals Club T4','Priority Pass DFW','Chase Sapphire Lounge'] },
  { id:'3', state:'NY', airport:'JFK - John F. Kennedy', count:10, uso:false, country:'USA', lounges:['Amex Centurion JFK T4','Delta Sky Club T4','Priority Pass Club JFK'] },
  { id:'4', state:'FL', airport:'MCO - Orlando International', count:4, uso:true, country:'USA', lounges:['USO MCO','Priority Pass MCO','Delta Sky Club MCO'] },
  { id:'5', state:'VA', airport:'DCA - Reagan National', count:5, uso:true, country:'USA', lounges:['USO DCA','American Admirals Club','Capital One Lounge DCA'] },
  { id:'6', state:'IL', airport:'ORD - O\'Hare International', count:7, uso:true, country:'USA', lounges:['USO ORD','United Club T1','Priority Pass ORD','Amex Centurion ORD'] },
  { id:'7', country:'Germany', airport:'FRA - Frankfurt Airport', count:5, uso:false, state:'', lounges:['Lufthansa Senator Lounge','Priority Pass FRA','Plaza Premium FRA'] },
  { id:'8', country:'Japan', airport:'NRT - Narita International', count:4, uso:false, state:'', lounges:['ANA Suite Lounge','JAL Sakura Lounge','Priority Pass NRT'] },
  { id:'9', country:'UK', airport:'LHR - Heathrow', count:6, uso:false, state:'', lounges:['British Airways Galleries','Amex Centurion LHR','No.1 Traveller'] },
];

export default function LoungesPanel() {
  const [filter, setFilter] = useState('All');
  const [search, setSearch] = useState('');
  const [expanded, setExpanded] = useState<string | null>(null);

  const usaLounges = SAMPLE_LOUNGES.filter(l => l.country === 'USA');
  const intlLounges = SAMPLE_LOUNGES.filter(l => l.country !== 'USA');

  const matchesFilter = (l: typeof SAMPLE_LOUNGES[0]) => {
    if (filter === 'All') return true;
    if (filter === 'Military/USO') return l.uso;
    return l.lounges.some(name => name.toLowerCase().includes(filter.toLowerCase().split(' ')[0]));
  };

  const matchesSearch = (l: typeof SAMPLE_LOUNGES[0]) => {
    if (!search) return true;
    return (l.state + l.airport + l.country).toLowerCase().includes(search.toLowerCase());
  };

  const renderGroup = (lounges: typeof SAMPLE_LOUNGES, heading: string) => {
    const filtered = lounges.filter(l => matchesFilter(l) && matchesSearch(l));
    if (!filtered.length) return null;
    return (
      <div className="lounges-group">
        <div className="lounges-group__heading">{heading}</div>
        {filtered.map(l => (
          <div key={l.id}>
            <button
              className={`lounge-row${expanded === l.id ? ' expanded' : ''}`}
              onClick={() => setExpanded(expanded === l.id ? null : l.id)}
            >
              <div className="lounge-row__info">
                {l.state && <span className="lounge-row__state">{l.state}</span>}
                <span className="lounge-row__airport">{l.airport}</span>
                {l.uso && <span className="uso-badge">USO</span>}
              </div>
              <div className="lounge-row__right">
                <span className="lounge-row__count">{l.count}</span>
                <span className="lounge-row__chevron">{expanded === l.id ? '▲' : '▼'}</span>
              </div>
            </button>
            {expanded === l.id && (
              <div className="lounge-details">
                {l.lounges.map((name, i) => (
                  <div key={i} className="lounge-item">✈️ {name}</div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className="lounges-panel">
      <div className="lounges-panel__search-wrap">
        <input
          placeholder="🔍 Search states or airports..."
          value={search}
          onChange={e => setSearch(e.target.value)}
        />
      </div>
      <div className="lounges-panel__filters">
        {FILTER_TABS.map(f => (
          <button
            key={f}
            className={`chip${filter === f ? ' chip--active' : ''}`}
            onClick={() => setFilter(f)}
          >
            {f}
          </button>
        ))}
      </div>
      {renderGroup(usaLounges, '🇺🇸 USA Lounges')}
      {renderGroup(intlLounges, '🌍 International')}
    </div>
  );
}
