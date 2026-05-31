import { useState } from 'react';
import './HotelsPanel.css';

const SAMPLE_HOTELS = [
  { id:'1', name:'Shades of Green', hotel_type:'AFRC Resort', city:'Orlando', state:'FL', country:'USA', description:'On Disney World property. Military-exclusive hotel on the resort monorail loop.', eligibility:'Active duty, retirees, DoD civilians, and dependents.', website:'shadesofgreen.org' },
  { id:'2', name:'Hale Koa Hotel', hotel_type:'AFRC Hotel', city:'Honolulu', state:'HI', country:'USA', description:'Beachfront Waikiki hotel exclusively for the military community.', eligibility:'Active duty, retirees, reservists on orders, and DoD civilians.', website:'halekoa.com' },
  { id:'3', name:'Edelweiss Lodge and Resort', hotel_type:'AFRC Resort', city:'Garmisch-Partenkirchen', state:'', country:'Germany', description:'Alpine ski resort at the base of the Zugspitze mountain.', eligibility:'Active duty, retirees, and their families.', website:'edelweisslodgeandresort.com' },
  { id:'4', name:'New Sanno Hotel', hotel_type:'Military Hotel', city:'Tokyo', state:'', country:'Japan', description:'The only foreign-owned hotel in central Tokyo, operated by the US Navy.', eligibility:'Active duty DoD, DoD civilians, and their families.', website:'thenewsanno.com' },
  { id:'5', name:'Cape Henry Inn', hotel_type:'AFRC Hotel', city:'Virginia Beach', state:'VA', country:'USA', description:'Oceanfront suites steps from the beach at Joint Expeditionary Base Little Creek.', eligibility:'Active duty, retirees, reservists, and DoD civilians.', website:'caphenryinn.com' },
  { id:'6', name:'Dragon Hill Lodge', hotel_type:'AFRC Hotel', city:'Seoul', state:'', country:'South Korea', description:'Full-service hotel in Seoul on US Army Garrison Yongsan.', eligibility:'Active duty, retirees, reservists on orders, and dependents.', website:'dragonhilllodge.com' },
  { id:'7', name:'Kilauea Military Camp', hotel_type:'AFRC Camp', city:'Hawaii Volcanoes NP', state:'HI', country:'USA', description:'Military resort inside Hawaii Volcanoes National Park.', eligibility:'Active duty, retirees, reservists, and DoD civilians.', website:'kmc.army.mil' },
  { id:'8', name:'Lodging at Vail', hotel_type:'AFRC Cabin', city:'Vail', state:'CO', country:'USA', description:'Condos and cabins near Vail Mountain ski resort at deep discounts.', eligibility:'Active duty, retirees, and DoD civilians.', website:'afrc.army.mil' },
  { id:'9', name:'Navy Lodge San Diego', hotel_type:'Navy Lodge', city:'San Diego', state:'CA', country:'USA', description:'Full-service lodge on NAS North Island with bay views.', eligibility:'Active duty, retirees, reservists on orders.', website:'navylifesw.com' },
  { id:'10', name:'Army Lodging Fort Bragg', hotel_type:'Army Lodging', city:'Fayetteville', state:'NC', country:'USA', description:'On-post lodging at one of the largest US Army installations.', eligibility:'Active duty, TDY personnel, and retirees.', website:'fortliberty.armymwr.com' },
];

export default function HotelsPanel() {
  const [search, setSearch] = useState('');
  const [selected, setSelected] = useState<typeof SAMPLE_HOTELS[0] | null>(null);

  const filtered = SAMPLE_HOTELS.filter(h =>
    !search || [h.name, h.city, h.state, h.country, h.hotel_type]
      .join(' ').toLowerCase().includes(search.toLowerCase())
  );

  if (selected) {
    return (
      <div className="hotel-detail">
        <button className="hotel-detail__back" onClick={() => setSelected(null)}>‹ Back</button>
        <div className="hotel-detail__content">
          <div className="hotel-detail__type">{selected.hotel_type}</div>
          <h2 className="hotel-detail__name">{selected.name}</h2>
          <p className="hotel-detail__location">📍 {[selected.city, selected.state, selected.country].filter(Boolean).join(', ')}</p>
          <p className="hotel-detail__desc">{selected.description}</p>
          <div className="hotel-detail__section">
            <div className="hotel-detail__label">Who Can Book</div>
            <p className="hotel-detail__value">{selected.eligibility}</p>
          </div>
          <a href={`https://${selected.website}`} target="_blank" rel="noopener noreferrer" className="hotel-detail__link">
            Visit Website ↗
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="hotels-panel">
      <div className="hotels-panel__search-wrap">
        <input
          placeholder="🔍 Search hotels..."
          value={search}
          onChange={e => setSearch(e.target.value)}
        />
      </div>
      <div className="hotels-panel__count">{filtered.length} properties</div>
      {filtered.map(h => (
        <button key={h.id} className="hotel-card" onClick={() => setSelected(h)}>
          <div className="hotel-card__top">
            <span className="hotel-card__type">{h.hotel_type}</span>
            <span className="hotel-card__loc">{[h.city, h.state || h.country].filter(Boolean).join(', ')}</span>
          </div>
          <div className="hotel-card__name">{h.name}</div>
          <div className="hotel-card__desc">{h.description}</div>
          <span className="hotel-card__chevron">›</span>
        </button>
      ))}
    </div>
  );
}
