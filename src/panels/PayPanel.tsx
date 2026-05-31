import { useState } from 'react';
import { PAY_GRADES, getTotalPay } from '../data/payTables';
import './PayPanel.css';

const YOS_OPTIONS = [0,2,3,4,6,8,10,12,14,16,18,20];

export default function PayPanel() {
  const [grade, setGrade] = useState('E-5');
  const [yos, setYos] = useState(4);
  const [dependents, setDependents] = useState(false);

  const pay = getTotalPay(grade, yos, dependents);

  return (
    <div className="pay-panel">
      <div className="pay-panel__form">
        <div className="pay-field">
          <label className="pay-label">Pay Grade</label>
          <select value={grade} onChange={e => setGrade(e.target.value)}>
            {PAY_GRADES.map(g => <option key={g} value={g}>{g}</option>)}
          </select>
        </div>
        <div className="pay-field">
          <label className="pay-label">Years of Service</label>
          <select value={yos} onChange={e => setYos(Number(e.target.value))}>
            {YOS_OPTIONS.map(y => <option key={y} value={y}>{y === 0 ? '< 2' : y}+ years</option>)}
          </select>
        </div>
        <div className="pay-field pay-field--toggle">
          <label className="pay-label">Has Dependents</label>
          <button
            className={`toggle-btn${dependents ? ' on' : ''}`}
            onClick={() => setDependents(d => !d)}
          >
            {dependents ? 'Yes' : 'No'}
          </button>
        </div>
      </div>

      <div className="pay-results">
        <div className="pay-row">
          <span className="pay-row__label">Base Pay</span>
          <span className="pay-row__value money">${pay.base.toLocaleString()}/mo</span>
        </div>
        <div className="pay-row">
          <span className="pay-row__label">BAH (avg)</span>
          <span className="pay-row__value money">${pay.bah.toLocaleString()}/mo</span>
        </div>
        <div className="pay-row">
          <span className="pay-row__label">BAS</span>
          <span className="pay-row__value money">${pay.bas.toFixed(2)}/mo</span>
        </div>
        <div className="pay-row pay-row--total">
          <span className="pay-row__label">Total Compensation</span>
          <span className="pay-row__value money">${pay.total.toLocaleString()}/mo</span>
        </div>
        <div className="pay-row">
          <span className="pay-row__label">Annual Total</span>
          <span className="pay-row__value money">${(pay.total * 12).toLocaleString()}/yr</span>
        </div>
      </div>

      <div className="pay-note">
        💡 BAH rates shown are national averages. Your actual BAH depends on your duty station zip code and can be significantly higher in high cost-of-living areas.
      </div>
      <div className="pay-note">
        💡 These figures are for 2026. Base pay is taxable; BAH and BAS are tax-free, increasing your effective take-home significantly.
      </div>
    </div>
  );
}
