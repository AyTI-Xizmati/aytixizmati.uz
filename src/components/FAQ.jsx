import React, { useState } from 'react';
import './FAQ.css';

const FAQ = () => {
  const [active1, setActive1] = useState(false);
  const [active2, setActive2] = useState(false);
  const [active3, setActive3] = useState(false);
  const [active4, setActive4] = useState(false);
  const [active5, setActive5] = useState(false);

  return (
    <section className="faq" id="faq">
      <div className="container faq-container">
        <h2 className="section-title">Ko'p beriladigan savollar</h2>
        <p className="section-subtitle">
          Barcha savollaringizga shu yerda javob topishingiz mumkin
        </p>

        <div className="faq-list">
          
          <div className="faq-item">
            <button 
              className={`faq-question ${active1 ? 'active' : ''}`}
              onClick={() => setActive1(!active1)}
            >
              Sayt qancha muddatda tayyor bo'ladi?
              <span className={`faq-icon ${active1 ? 'active' : ''}`}>+</span>
            </button>
            <div className={`faq-answer ${active1 ? 'active' : ''}`}>
              <p>Sayt tayyorlanish muddati tanlangan tarif va loyiha hajmiga bog'liq. O'rtacha hisobda 5 kundan 30 kungacha bo'lgan muddatda loyiha yakunlanadi.</p>
            </div>
          </div>

          <div className="faq-item">
            <button 
              className={`faq-question ${active2 ? 'active' : ''}`}
              onClick={() => setActive2(!active2)}
            >
              Sayt narxi nimaga bog'liq?
              <span className={`faq-icon ${active2 ? 'active' : ''}`}>+</span>
            </button>
            <div className={`faq-answer ${active2 ? 'active' : ''}`}>
              <p>Sayt narxi tanlangan tarif, sahifalar soni va saytda joylashtiriladigan ma'lumotlar hajmiga qarab belgilanadi.</p>
            </div>
          </div>

          <div className="faq-item">
            <button 
              className={`faq-question ${active3 ? 'active' : ''}`}
              onClick={() => setActive3(!active3)}
            >
              Domen va hostingni o'zim olishim kerakmi?
              <span className={`faq-icon ${active3 ? 'active' : ''}`}>+</span>
            </button>
            <div className={`faq-answer ${active3 ? 'active' : ''}`}>
              <p>Yo'q. Domen va hosting biz tomonimizdan taqdim etiladi va loyiha doirasida to'liq sozlab beriladi.</p>
            </div>
          </div>

          <div className="faq-item">
            <button 
              className={`faq-question ${active4 ? 'active' : ''}`}
              onClick={() => setActive4(!active4)}
            >
              Buyurtma berilgandan keyin jarayon qanday bo'ladi?
              <span className={`faq-icon ${active4 ? 'active' : ''}`}>+</span>
            </button>
            <div className={`faq-answer ${active4 ? 'active' : ''}`}>
              <p>Avvalo loyiha uchun muammoga yechim beruvchi struktura ishlab chiqiladi va siz bilan tasdiqlanadi. Shundan so'ng ish boshlanadi va sayt belgilangan muddatda to'liq ishlaydigan holatda topshiriladi.</p>
            </div>
          </div>

          <div className="faq-item">
            <button 
              className={`faq-question ${active5 ? 'active' : ''}`}
              onClick={() => setActive5(!active5)}
            >
              Sayt topshirilgandan keyin texnik yordam bo'ladimi?
              <span className={`faq-icon ${active5 ? 'active' : ''}`}>+</span>
            </button>
            <div className={`faq-answer ${active5 ? 'active' : ''}`}>
              <p>Ha. Sayt topshirilgandan so'ng tanlangan tarifga qarab 1 oydan 3 oygacha bepul texnik yordam ko'rsatiladi.</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default FAQ;
