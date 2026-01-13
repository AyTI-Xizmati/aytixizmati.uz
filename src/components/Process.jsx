import React from 'react';
import { useTranslation } from 'react-i18next';
import './Process.css';

const Process = () => {
  const { t } = useTranslation();
  const steps = t('process.steps', { returnObjects: true }) || [];

  return (
    <section className="process" id="jarayon">
      <div className="container">
        <h2 className="section-title">{t('process.title')}</h2>
      
        <div className="process-timeline">
          {Array.isArray(steps) && steps.map((step, index) => (
            <div key={index} className="process-step">
              <div className="step-number">{step.number}</div>
              <div className="step-content">
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
