import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    username: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const text = `
Yangi buyurtma
Ism: ${formData.name}
Telefon: ${formData.phone}
Telegram: ${formData.username}
Izoh: ${formData.message}
    `.trim();

    const encodedText = encodeURIComponent(text);
    
    // Telegramga yo'naltirish
    window.open(`https://t.me/AyTi_xizmatibot?text=${encodedText}`, '_blank');
    
    setFormData({ name: '', phone: '', username: '', message: '' });
  };

  return (
    <section className="contact" id="aloqa">
      <div className="container">
        <h2 className="section-title">Biz bilan aloqa</h2>
        <p className="section-subtitle">
          Formani to'ldirish orqali biz bilan bog'laning
        </p>
        
        <div className="contact-form-container">
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Ism</label>
              <input 
                type="text" 
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Ismingizni yozing" 
                required 
              />
            </div>
            
            <div className="form-group">
              <label>Telefon raqam</label>
              <input 
                type="tel" 
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Aloqa uchun raqamingiz" 
                required 
              />
            </div>
            
            <div className="form-group">
              <label>Telegram username</label>
              <input 
                type="text" 
                name="username"
                value={formData.username}
                onChange={handleChange}
                placeholder="Masalan: @AyTi_xizmati" 
              />
            </div>
            
            <div className="form-group">
              <label>Izoh</label>
              <textarea 
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Murojaatingiz bo'yicha qisqa izoh" 
                rows="2"
              ></textarea>
            </div>

            <button type="submit" className="submit-btn">
              Yuborish
            </button>
          </form>
        </div>
        
        <footer className="footer">
          <div className="footer-contacts">
            <div className="footer-links">
              <a href="https://t.me/AyTi_Xizmati" target="_blank" rel="noopener noreferrer">
                Telegram
              </a>
              <a href="https://www.instagram.com/ayti_xizmati" target="_blank" rel="noopener noreferrer">
                Instagram
              </a>
              <a href="https://t.me/AyTi_xizmatibot" target="_blank" rel="noopener noreferrer">
                Telegram bot
              </a>
              <a href="tel:+998773009928">
                +998 77 300 99 28
              </a>
              <span className="contact-location">
                Toshkent shahar, Olmazor tumani
              </span>
            </div>
          </div>
          <p className="copyright">&copy; 2026 AyTi Xizmati. Barcha huquqlar himoyalangan.</p>
        </footer>
      </div>
    </section>
  );
};

export default Contact;
