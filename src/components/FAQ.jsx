import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import './FAQ.css';

const FAQ = () => {
  const { t } = useTranslation();
  const [activeId, setActiveId] = useState(null);
  const faqItems = t('faq.items', { returnObjects: true }) || [];

  const toggleFAQ = (id) => {
    setActiveId(activeId === id ? null : id);
  };

  return (
    <section className="faq" id="faq">
      <div className="container faq-container">
        <h2 className="section-title">{t('faq.title')}</h2>

        <div className="faq-list">
          {Array.isArray(faqItems) && faqItems.map((item, index) => (
            <div className="faq-item" key={index}>
              <button 
                className={`faq-question ${activeId === index ? 'active' : ''}`}
                onClick={() => toggleFAQ(index)}
              >
                {item.question}
                <span className={`faq-icon ${activeId === index ? 'active' : ''}`}>+</span>
              </button>
              <div className={`faq-answer ${activeId === index ? 'active' : ''}`}>
                <p>{item.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
