import { useEffect, useState } from 'react';
import type { ReactNode } from 'react';
import './SlidePanel.css';

interface SlidePanelProps {
  open: boolean;
  onClose: () => void;
  title: string;
  badge?: string;
  children: ReactNode;
}

export default function SlidePanel({ open, onClose, title, badge, children }: SlidePanelProps) {
  const [hasOpened, setHasOpened] = useState(open);
  if (open && !hasOpened) {
    setHasOpened(true);
  }

  useEffect(() => {
    if (open) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  return (
    <div className={`slide-panel${open ? ' open' : ''}`} aria-hidden={!open}>
      <div className="slide-panel__header">
        <button className="slide-panel__back" onClick={onClose} aria-label="Go back">
          ‹
        </button>
        <div className="slide-panel__title-row">
          <span className="slide-panel__title">{title}</span>
          {badge && <span className="slide-panel__badge">{badge}</span>}
        </div>
        <div style={{ width: 40 }} />
      </div>
      <div className="slide-panel__body">
        {hasOpened ? children : null}
      </div>
    </div>
  );
}
