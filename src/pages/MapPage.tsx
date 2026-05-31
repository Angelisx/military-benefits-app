import { useState, useEffect, useRef } from 'react';
import { discountCategories, freeLocationCategories } from '../data/discountCategories';
import './MapPage.css';

declare global {
  interface Window { google: unknown; }
}

const MAPS_API_KEY = import.meta.env.VITE_GOOGLE_MAPS_KEY ?? '';

export default function MapPage() {
  const mapRef = useRef<HTMLDivElement>(null);
  const [mapLoaded, setMapLoaded] = useState(false);
  const [mode, setMode] = useState<'free' | 'discount'>('free');
  const [selectedCat, setSelectedCat] = useState<string | null>(null);
  const [userLoc, setUserLoc] = useState<{ lat: number; lng: number } | null>(null);

  useEffect(() => {
    if (!MAPS_API_KEY) return;
    if (document.getElementById('gmaps-script')) { setMapLoaded(true); return; }
    const script = document.createElement('script');
    script.id = 'gmaps-script';
    script.src = `https://maps.googleapis.com/maps/api/js?key=${MAPS_API_KEY}&libraries=places`;
    script.async = true;
    script.onload = () => setMapLoaded(true);
    document.head.appendChild(script);
  }, []);

  useEffect(() => {
    navigator.geolocation?.getCurrentPosition(pos => {
      setUserLoc({ lat: pos.coords.latitude, lng: pos.coords.longitude });
    });
  }, []);

  useEffect(() => {
    if (!mapLoaded || !mapRef.current || !window.google) return;
    const center = userLoc ?? { lat: 38.9, lng: -77.0 };
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    new (window.google as any).maps.Map(mapRef.current, {
      center,
      zoom: 13,
      styles: [
        { elementType: 'geometry', stylers: [{ color: '#212121' }] },
        { elementType: 'labels.text.fill', stylers: [{ color: '#757575' }] },
        { elementType: 'labels.text.stroke', stylers: [{ color: '#212121' }] },
        { featureType: 'road', elementType: 'geometry', stylers: [{ color: '#383838' }] },
        { featureType: 'water', stylers: [{ color: '#1a1a2e' }] },
        { featureType: 'poi', stylers: [{ visibility: 'off' }] },
      ],
      disableDefaultUI: true,
      zoomControl: true,
    });
  }, [mapLoaded, userLoc]);

  const categories = mode === 'free' ? freeLocationCategories : discountCategories;

  return (
    <div className="map-page">
      <div className="map-controls">
        <div className="map-mode-toggle">
          <button
            className={`map-mode-btn${mode === 'free' ? ' active' : ''}`}
            onClick={() => setMode('free')}
          >
            Free Locations
          </button>
          <button
            className={`map-mode-btn${mode === 'discount' ? ' active' : ''}`}
            onClick={() => setMode('discount')}
          >
            Discount Locations
          </button>
        </div>
        <div className="map-cats">
          {categories.map(c => (
            <button
              key={c.id}
              className={`map-cat-btn${selectedCat === c.id ? ' active' : ''}`}
              onClick={() => setSelectedCat(selectedCat === c.id ? null : c.id)}
            >
              {c.icon} {c.name}
            </button>
          ))}
        </div>
      </div>

      {MAPS_API_KEY ? (
        <div ref={mapRef} className="map-container" />
      ) : (
        <div className="map-placeholder">
          <div className="map-placeholder__icon">🗺️</div>
          <p className="map-placeholder__title">Google Maps</p>
          <p className="map-placeholder__text">
            Add your Google Maps API key as<br /><code>VITE_GOOGLE_MAPS_KEY</code> in <code>.env</code>
          </p>
          {!selectedCat && (
            <p className="map-placeholder__hint">Select a category above to see nearby places</p>
          )}
          {selectedCat && (
            <p className="map-placeholder__selected">
              Showing: {categories.find(c => c.id === selectedCat)?.icon}{' '}
              {categories.find(c => c.id === selectedCat)?.name}
            </p>
          )}
        </div>
      )}
    </div>
  );
}
