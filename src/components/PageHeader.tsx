import type { ReactNode } from 'react';
import './PageHeader.css';

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  left?: ReactNode;
  right?: ReactNode;
}

export default function PageHeader({ title, subtitle, left, right }: PageHeaderProps) {
  return (
    <header className="page-header">
      <div className="page-header__left">{left}</div>
      <div className="page-header__center">
        <h1 className="page-header__title">{title}</h1>
        {subtitle && <p className="page-header__subtitle">{subtitle}</p>}
      </div>
      <div className="page-header__right">{right}</div>
    </header>
  );
}
