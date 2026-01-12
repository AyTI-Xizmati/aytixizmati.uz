import React from 'react';
import './Pricing.css';

const Pricing = () => {
  const plans = [
    {
      id: 1,
      title: 'Minimal',
      price: '$100+',
      features: [
        '1 sahifali sayt',
        'Buyurtma tugmasi',
        'Domen + hosting',
        'Mobilga mos dizayn'
      ]
    },
    {
      id: 2,
      title: 'Standart',
      price: '$300+',
      features: [
        '3-5 sahifa',
        'Buyurtma formasi',
        'Domen + hosting',
        'Mobil qurilmalarga mos',
        'SEO (Google)',
        'Admin panel'
      ]
    },
    {
      id: 3,
      title: 'Biznes',
      price: '$600+',
      features: [
        '5-7 sahifa',
        'Xizmatlar bo\'limlari',
        'Buyurtma formasi',
        'Domen + hosting',
        'SEO (Google)',
        'Admin panel',
        'Analitika',
        'Individual dizayn'
      ]
    },
    {
      id: 4,
      title: 'Individual',
      price: '$1200+',
      features: [
        '7+ sahifa',
        'Individual yondashuv',
        'Kengaytiriladigan struktura',
        'Murojaat formasi',
        'Domen + hosting',
        'SEO (Google)',
        'Individual dizayn',
        'Admin panel',
        'Analitika'
      ]
    }
  ];

  return (
    <section className="pricing" id="narxlar">
      <div className="container">
        <h2 className="section-title">Xizmat tariflarimiz</h2>
        <p className="section-subtitle">
          Sizga mos keladigan tarifni tanlang
        </p>

        <div className="pricing-grid">
          {plans.map((plan) => (
            <div className="pricing-card" key={plan.id}>
              <h3>{plan.title}</h3>
              <ul className="pricing-features">
                {plan.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
              <div className="price-tag">{plan.price}</div>
            </div>
          ))}
        </div>

        <div className="pricing-cta-container">
          <a href="#aloqa" className="btn btn-pricing-main">
            Sayt buyurtma qilish
          </a>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
