import { useState } from 'react';

const FAQ = ({ faq }) => {
  const [activeId, setActiveId] = useState(null);

  return (
    <section className="faq" id="faq">
      <div className="container faq-container">
        <h2 className="section-title">{faq.title}</h2>
        <div className="faq-list">
          {faq.items.map((item, index) => (
            <div className="faq-item" key={index}>
              <button
                className={`faq-question ${activeId === index ? 'active' : ''}`}
                onClick={() => setActiveId(activeId === index ? null : index)}
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
