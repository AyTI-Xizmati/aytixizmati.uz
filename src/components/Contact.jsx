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
    "https://script.google.com/macros/s/AKfycbzY4dcLVdK9fgpazoCmgbX8ZHmdEaWwd17E-mOTbwBUSFSMmU9O9e9dy5MIUeee2RkVFw/exec";

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

      if (cleaned.length === 0) updatedValue = '+998 ';
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

  const handlePhoneFocus = () => {
    if (!formData.phone) {
      setFormData(prev => ({
        ...prev,
        phone: '+998 '
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Client-side validation
    if (formData.name.trim().length < 2) {
      setToast({
        message: t('contact.error'),
        type: "error",
        visible: true
      });
      setTimeout(() => setToast(prev => ({ ...prev, visible: false })), 3000);
      return;
    }

    if (formData.phone.replace(/\D/g, '').length !== 12) {
      setToast({
        message: t('contact.error'),
        type: "error",
        visible: true
      });
      setTimeout(() => setToast(prev => ({ ...prev, visible: false })), 3000);
      return;
    }

    setLoading(true);

    try {
      // Extract digits only (without +998) for Google Sheets
      const phoneDigitsOnly = formData.phone.replace(/\D/g, '').slice(3); // Remove +998
      // Full phone with country code for Telegram bot (no spaces)
      const phoneFullFormat = formData.phone.replace(/\s/g, ''); // +998338880133

      const body = new URLSearchParams({
        name: formData.name,
        phone: phoneDigitsOnly, // Google Sheets: 338880133
        phoneDisplay: phoneFullFormat, // Telegram bot: +998338880133
        username: formData.username,
        message: formData.message
      }).toString();

      // Add timeout to fetch request
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 10000); // 10 second timeout

      await fetch(SCRIPT_URL, {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded"
        },
        body,
        signal: controller.signal
      });

      clearTimeout(timeoutId);

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
        setToast(prev => ({ ...prev, visible: false }));
      }, 4000);

    } catch (error) {
      setToast({
        message: t('contact.error'),
        type: "error",
        visible: true
      });

      setTimeout(() => {
        setToast(prev => ({ ...prev, visible: false }));
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
                <label htmlFor="contact-name">{t('contact.form.name')}</label>
                <input
                  type="text"
                  id="contact-name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  aria-required="true"
                />
              </div>

              <div className="form-group">
                <label htmlFor="contact-phone">{t('contact.form.phone')}</label>
                <input
                  type="tel"
                  id="contact-phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  onFocus={handlePhoneFocus}
                  required
                  aria-required="true"
                  placeholder="+998 XX XXX XX XX"
                />
              </div>

              <div className="form-group">
                <label htmlFor="contact-username">{t('contact.form.username')}</label>
                <input
                  type="text"
                  id="contact-username"
                  name="username"
                  value={formData.username}
                  onChange={handleChange}
                  placeholder="@username"
                />
              </div>

              <div className="form-group">
                <label htmlFor="contact-message">{t('contact.form.message')}</label>
                <textarea
                  id="contact-message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="4"
                  required
                  aria-required="true"
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
