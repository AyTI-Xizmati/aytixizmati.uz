import React from 'react';
import { useTranslation } from 'react-i18next';
import './Pricing.css';

const Pricing = () => {
  const { t } = useTranslation();
  
  // JSON fayllarda 'pricing.plans' endi array([]) ekanligiga ishonch hosil qiling
  const plans = t('pricing.plans', { returnObjects: true }) || [];

  return (
    <section className="pricing" id="narxlar">
      <div className="container">
        <h2 className="section-title">{t('pricing.title')}</h2>

        <div className="pricing-grid">
          {Array.isArray(plans) && plans.map((plan, index) => (
            <div className="pricing-card" key={index}>
              <h3>{plan.name}</h3>
              <ul className="pricing-features">
                {plan.features && plan.features.map((feature, idx) => (
                  <li key={idx}>{feature}</li>
                ))}
              </ul>
              <div className="price-tag">{plan.price}</div>
            </div>
          ))}
        </div>

        <div className="pricing-cta-container">
          <a href="#aloqa" className="btn btn-pricing-main">
            {t('pricing.cta')}
          </a>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
