import React, { useState, useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { useParams, useNavigate } from 'react-router-dom';
import { FaTelegramPlane } from 'react-icons/fa';
import { HiOutlineCalendar } from 'react-icons/hi';
import './Aksiya.css';

const DEADLINE = new Date('2026-03-15T23:59:59');
const SPOTS_TAKEN = 6;
const TOTAL_SPOTS = 10;

const SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycbzY4dcLVdK9fgpazoCmgbX8ZHmdEaWwd17E-mOTbwBUSFSMmU9O9e9dy5MIUeee2RkVFw/exec";

function getTimeLeft() {
  const diff = DEADLINE - new Date();
  if (diff <= 0) return null;
  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60)
  };
}

const Aksiya = () => {
  const { t, i18n } = useTranslation();
  const { lang } = useParams();
  const navigate = useNavigate();
  const [timeLeft, setTimeLeft] = useState(getTimeLeft());

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    username: '',
    message: ''
  });
  const [loading, setLoading] = useState(false);
  const [toast, setToast] = useState({ message: '', type: '', visible: false });

  useEffect(() => {
    const languages = ['uz', 'ru', 'en'];
    if (lang && languages.includes(lang) && i18n.language !== lang) {
      i18n.changeLanguage(lang);
      localStorage.setItem('language', lang);
    }
  }, [lang, i18n]);

  useEffect(() => {
    const interval = setInterval(() => setTimeLeft(getTimeLeft()), 1000);
    return () => clearInterval(interval);
  }, []);

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    localStorage.setItem('language', lng);
    navigate(`/${lng}/aksiya`);
  };

  const scrollToForm = () => {
    document.getElementById('aksiya-form')?.scrollIntoView({ behavior: 'smooth' });
  };

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

    setFormData(prev => ({ ...prev, [name]: updatedValue }));
  };

  const handlePhoneFocus = () => {
    if (!formData.phone) {
      setFormData(prev => ({ ...prev, phone: '+998 ' }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.name.trim().length < 2) {
      setToast({ message: t('aksiya.form.error'), type: 'error', visible: true });
      setTimeout(() => setToast(prev => ({ ...prev, visible: false })), 3000);
      return;
    }

    if (formData.phone.replace(/\D/g, '').length !== 12) {
      setToast({ message: t('aksiya.form.error'), type: 'error', visible: true });
      setTimeout(() => setToast(prev => ({ ...prev, visible: false })), 3000);
      return;
    }

    setLoading(true);
    try {
      const phoneDigitsOnly = formData.phone.replace(/\D/g, '').slice(3);
      const phoneFullFormat = formData.phone.replace(/\s/g, '');

      const body = new URLSearchParams({
        name: formData.name,
        phone: phoneDigitsOnly,
        phoneDisplay: phoneFullFormat,
        username: formData.username,
        message: `[AKSIYA $87] ${formData.message}`
      }).toString();

      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 10000);

      await fetch(SCRIPT_URL, {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body,
        signal: controller.signal
      });

      clearTimeout(timeoutId);
      setToast({ message: t('aksiya.form.success'), type: 'success', visible: true });
      setFormData({ name: '', phone: '', username: '', message: '' });
      setTimeout(() => setToast(prev => ({ ...prev, visible: false })), 4000);
    } catch {
      setToast({ message: t('aksiya.form.error'), type: 'error', visible: true });
      setTimeout(() => setToast(prev => ({ ...prev, visible: false })), 3000);
    } finally {
      setLoading(false);
    }
  };

  const pageRef = useRef(null);

  useEffect(() => {
    const els = pageRef.current?.querySelectorAll('.ak-reveal');
    if (!els?.length) return;
    const observer = new IntersectionObserver(
      (entries) => entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); observer.unobserve(e.target); } }),
      { threshold: 0.15 }
    );
    els.forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const offerFeatures = t('aksiya.offer.features', { returnObjects: true });
  const processSteps = t('aksiya.process.steps', { returnObjects: true });
  const problemItems = t('aksiya.problem.items', { returnObjects: true });
  const audienceItems = t('aksiya.audience.items', { returnObjects: true });

  return (
    <div className="ak-page" ref={pageRef}>
      {toast.visible && (
        <div className={`ak-toast ak-toast-${toast.type}`}>{toast.message}</div>
      )}

      {/* Lang Switcher */}
      <div className="ak-lang">
        {['uz', 'ru', 'en'].map(lng => (
          <button
            key={lng}
            className={`ak-lang-btn ${i18n.language === lng ? 'active' : ''}`}
            onClick={() => changeLanguage(lng)}
          >
            {lng.toUpperCase()}
          </button>
        ))}
      </div>

      {/* 1. HERO */}
      <section className="ak-hero">
        <div className="ak-aurora">
          <div className="ak-aurora-beam ak-aurora-beam-1" />
          <div className="ak-aurora-beam ak-aurora-beam-2" />
          <div className="ak-aurora-beam ak-aurora-beam-3" />
        </div>
        <div className="ak-wrap">
          <span className="ak-badge">{t('aksiya.hero.badge')}</span>
          <div className="ak-hero-price">
            <span className="ak-hero-price-old">$175</span> $87
          </div>
          <h1 className="ak-hero-title">{t('aksiya.hero.title')}</h1>
          <p className="ak-hero-sub">{t('aksiya.hero.subtitle')}</p>

          <div className="ak-hero-buttons">
            <button className="ak-btn" onClick={scrollToForm}>
              <HiOutlineCalendar className="ak-btn-icon" />
              {t('aksiya.hero.cta')}
            </button>
            <a className="ak-btn ak-btn-outline" href="https://t.me/AyTi_xizmatibot" target="_blank" rel="noopener noreferrer">
              <FaTelegramPlane className="ak-btn-icon" />
              {t('aksiya.hero.cta2')}
            </a>
          </div>
        </div>
      </section>

      {/* WHY $87 */}
      <section className="ak-section ak-reveal">
        <div className="ak-wrap">
          <div className="ak-why-top">
            <h2 className="ak-why-title">{t('aksiya.hero.why.title')}</h2>
            <p className="ak-why-intro">{t('aksiya.hero.why.intro')}</p>
            <p className="ak-why-text">{t('aksiya.hero.why.reason')}</p>
          </div>
          <p className="ak-why-highlight">{t('aksiya.hero.why.price_note')}</p>
          <div className="ak-why-benefits">
            {(t('aksiya.hero.why.benefits', { returnObjects: true }) || []).map((b, i) => (
              <div key={i} className="ak-why-benefit">
                <span className="ak-check">&#10003;</span>
                <span>{b}</span>
              </div>
            ))}
          </div>
          <p className="ak-why-closing">{t('aksiya.hero.why.closing')}</p>
        </div>
      </section>

      {/* 2. PROBLEM */}
      <section className="ak-section ak-reveal">
        <div className="ak-wrap">
          <h2 className="ak-section-title">{t('aksiya.problem.title')}</h2>
          <div className="ak-list">
            {Array.isArray(problemItems) && problemItems.map((item, i) => (
              <div key={i} className="ak-item ak-item-problem">
                <div className="ak-item-content">
                  <p className="ak-item-title">{item.title}</p>
                  <p className="ak-item-desc">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
          <button className="ak-btn" onClick={scrollToForm}>
            {t('aksiya.problem.cta')}
          </button>
        </div>
      </section>

      {/* 3. OFFER */}
      <section className="ak-section ak-section-alt ak-reveal">
        <div className="ak-wrap">
          <h2 className="ak-section-title">{t('aksiya.offer.title')}</h2>
          <div className="ak-offer-price">{t('aksiya.offer.price')}</div>
          <div className="ak-list">
            {Array.isArray(offerFeatures) && offerFeatures.map((f, i) => (
              <div key={i} className="ak-item">
                <span className="ak-item-check">&#10003;</span>
                <span>{f}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. PROCESS */}
      <section className="ak-section ak-reveal">
        <div className="ak-wrap">
          <h2 className="ak-section-title">{t('aksiya.process.title')}</h2>
          <div className="ak-steps">
            {Array.isArray(processSteps) && processSteps.map((step, i) => (
              <div key={i} className="ak-step">
                <span className="ak-step-num">{String(i + 1).padStart(2, '0')}</span>
                <p>{step}</p>
              </div>
            ))}
          </div>
          <button className="ak-btn" onClick={scrollToForm}>
            {t('aksiya.process.cta')}
          </button>
        </div>
      </section>

      {/* 5. AUDIENCE */}
      <section className="ak-section ak-section-alt ak-reveal">
        <div className="ak-wrap">
          <h2 className="ak-section-title">{t('aksiya.audience.title')}</h2>
          <div className="ak-list">
            {Array.isArray(audienceItems) && audienceItems.map((item, i) => (
              <div key={i} className="ak-item">
                <span className="ak-item-dot" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. FORM */}
      <section className="ak-section ak-reveal" id="aksiya-form">
        <div className="ak-wrap">
          <h2 className="ak-section-title">{t('aksiya.form.title')}</h2>
          <p className="ak-form-sub">{t('aksiya.form.subtitle')}</p>

          <form className="ak-form" onSubmit={handleSubmit}>
            <div className="ak-field">
              <label htmlFor="ak-name">{t('aksiya.form.name')}</label>
              <input
                type="text" id="ak-name" name="name"
                value={formData.name} onChange={handleChange}
                required
              />
            </div>
            <div className="ak-field">
              <label htmlFor="ak-phone">{t('aksiya.form.phone')}</label>
              <input
                type="tel" id="ak-phone" name="phone"
                value={formData.phone} onChange={handleChange}
                onFocus={handlePhoneFocus}
                required placeholder="+998 XX XXX XX XX"
              />
            </div>
            <div className="ak-field">
              <label htmlFor="ak-username">{t('aksiya.form.username')}</label>
              <input
                type="text" id="ak-username" name="username"
                value={formData.username} onChange={handleChange}
                placeholder="@username"
              />
            </div>
            <div className="ak-field">
              <label htmlFor="ak-message">{t('aksiya.form.message')}</label>
              <textarea
                id="ak-message" name="message"
                value={formData.message} onChange={handleChange}
                rows="3" placeholder={t('aksiya.form.messagePlaceholder')}
              />
            </div>
            <button type="submit" className="ak-btn ak-btn-full" disabled={loading}>
              {loading ? t('aksiya.form.submitting') : t('aksiya.form.submit')}
            </button>
          </form>
        </div>
      </section>

      {/* 9. FOOTER */}
      <footer className="ak-footer">
        <div className="ak-footer-links">
          <a href="https://t.me/AyTi_Xizmati" target="_blank" rel="noopener noreferrer">Telegram</a>
          <a href="https://www.instagram.com/ayti_xizmati" target="_blank" rel="noopener noreferrer">Instagram</a>
          <a href="tel:+998773009928">+998 77 300 99 28</a>
        </div>
        <p className="ak-footer-copy">{t('aksiya.footer.copyright')}</p>
      </footer>
    </div>
  );
};

export default Aksiya;
