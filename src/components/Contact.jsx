import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import './Contact.css';

const Contact = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    username: '',
    message: ''
  });

  const [loading, setLoading] = useState(false);
  const [toast, setToast] = useState({
    message: '',
    type: '',
    visible: false
  });

  const SCRIPT_URL =
    "https://script.google.com/macros/s/AKfycbyY4-suZ8m7wu24Lj02Th51ACWr56xCaykOIS_OezigkApGwpZ1CNPC5fllZCStiR3Usw/exec";

  const handleChange = (e) => {
    const { name, value } = e.target;
    let updatedValue = value;

    if (name === 'name' && value.length > 0) {
      updatedValue = value.charAt(0).toUpperCase() + value.slice(1);
    }

    if (name === 'phone') {
      const digits = value.replace(/\D/g, '');
      let cleaned = digits.startsWith('998') ? digits.slice(3) : digits;
      cleaned = cleaned.slice(0, 9);

      if (!cleaned) updatedValue = '+998 ';
      else if (cleaned.length <= 2) updatedValue = `+998 ${cleaned}`;
      else if (cleaned.length <= 5) updatedValue = `+998 ${cleaned.slice(0, 2)} ${cleaned.slice(2)}`;
      else if (cleaned.length <= 7) updatedValue = `+998 ${cleaned.slice(0, 2)} ${cleaned.slice(2, 5)} ${cleaned.slice(5)}`;
      else updatedValue = `+998 ${cleaned.slice(0, 2)} ${cleaned.slice(2, 5)} ${cleaned.slice(5, 7)} ${cleaned.slice(7)}`;
    }

    if (name === 'username') {
      const cleaned = value.replace(/@/g, '');
      updatedValue = cleaned ? `@${cleaned}` : '@';
    }

    setFormData(prev => ({
      ...prev,
      [name]: updatedValue
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const body = new URLSearchParams({
        name: formData.name,
        phone: formData.phone,
        username: formData.username,
        message: formData.message
      }).toString();

      await fetch(SCRIPT_URL, {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded"
        },
        body
      });

      setToast({
        message: t('contact.success'),
        type: "success",
        visible: true
      });

      setFormData({
        name: '',
        phone: '',
        username: '',
        message: ''
      });

      setTimeout(() => {
        setToast(t => ({ ...t, visible: false }));
      }, 4000);

    } catch (error) {
      setToast({
        message: t('contact.error'),
        type: "error",
        visible: true
      });

      setTimeout(() => {
        setToast(t => ({ ...t, visible: false }));
      }, 3000);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {toast.visible && (
        <div className={`toast-notification toast-${toast.type}`}>
          {toast.message}
        </div>
      )}

      <section className="contact" id="aloqa">
        <div className="container">
          <h2 className="section-title">
            {t('contact.title')}
          </h2>

          <div className="contact-form-container">
            <form className="contact-form" onSubmit={handleSubmit}>

              <div className="form-group">
                <label>{t('contact.form.name')}</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label>{t('contact.form.phone')}</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label>{t('contact.form.username')}</label>
                <input
                  type="text"
                  name="username"
                  value={formData.username}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group">
                <label>{t('contact.form.message')}</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="1"
                  required
                />
              </div>

              <button type="submit" className="submit-btn" disabled={loading}>
                {loading ? t('contact.form.submitting') : t('contact.form.submit')}
              </button>

            </form>
          </div>
        </div>
        <footer className="footer">
          <div className="footer-contacts">
            <div className="footer-links">
              <a href="https://t.me/AyTi_Xizmati" target="_blank" rel="noopener noreferrer">
                {t('footer.telegram')}
              </a>
              <a href="https://www.instagram.com/ayti_xizmati" target="_blank" rel="noopener noreferrer">
                {t('footer.instagram')}
              </a>
              <a href="https://t.me/AyTi_xizmatibot" target="_blank" rel="noopener noreferrer">
                {t('footer.bot')}
              </a>
              <a href="tel:+998773009928">
                +998 77 300 99 28
              </a>
              <span className="contact-location">
                {t('footer.address')}
              </span>
            </div>
          </div>
          <p className="copyright">{t('footer.copyright')}</p>
        </footer>
      </section>
    </>
  );
};

export default Contact;
