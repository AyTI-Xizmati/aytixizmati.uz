import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate, Link } from 'react-router-dom';
import { FaGlobe, FaCode, FaUsers, FaClock } from 'react-icons/fa';
import './Main.css';

const Main = () => {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showLangDropdown, setShowLangDropdown] = useState(false);

  const languages = [
    { code: 'uz', name: 'O\'zbekcha', flag: '🇺🇿' },
    { code: 'ru', name: 'Русский', flag: '🇷🇺' },
    { code: 'en', name: 'English', flag: '🇬🇧' }
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    localStorage.setItem('language', lng);
    navigate(`/${lng}`);
    setShowLangDropdown(false);
  };

  return (
    <section className="main-section" id="asosiy">

      <nav className="navbar">
        <div className="nav-container">
          <div className="logo-container">
            <h1 className="logo">AyTi Xizmati</h1>
            <div className="lang-selector-wrapper">
              <button
                className="lang-toggle-btn"
                onClick={() => setShowLangDropdown(!showLangDropdown)}
                aria-label={t('nav.languageSelector')}
                aria-expanded={showLangDropdown}
                aria-haspopup="true"
              >
                <FaGlobe className="lang-icon" />
                <span className="lang-text">{i18n.language.toUpperCase()}</span>
              </button>

              {showLangDropdown && (
                <div className="lang-dropdown-menu">
                  {languages.map(lang => (
                    <button
                      key={lang.code}
                      className={`lang-dropdown-item ${i18n.language === lang.code ? 'active' : ''}`}
                      onClick={() => changeLanguage(lang.code)}
                    >
                      <span className="flag">{lang.flag}</span>
                      <span className="lang-name">{lang.name}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

          <div className="header-right">
            <button
              className={`menu-icon ${isMenuOpen ? 'open' : ''}`}
              onClick={toggleMenu}
              aria-label={isMenuOpen ? t('nav.closeMenu') : t('nav.openMenu')}
              aria-expanded={isMenuOpen}
            >
              <span className="hamburger-line"></span>
              <span className="hamburger-line"></span>
              <span className="hamburger-line"></span>
            </button>
          </div>

          <ul className={isMenuOpen ? 'nav-menu active' : 'nav-menu'}>
            <li><a href="#asosiy" onClick={closeMenu}>{t('nav.home')}</a></li>
            <li><a href="#narxlar" onClick={closeMenu}>{t('nav.services')}</a></li>
            <li><a href="#jarayon" onClick={closeMenu}>{t('nav.process')}</a></li>
            <li><a href="#faq" onClick={closeMenu}>{t('nav.faq')}</a></li>
            <li><a href="#aloqa" onClick={closeMenu}>{t('nav.contact')}</a></li>
          </ul>
        </div>
      </nav>
      
      <div className="main-content">
        <Link to={`/${i18n.language}/aksiya`} className="promo-banner">
          <span className="promo-banner-dot" />
          <span className="promo-banner-text">{t('banner.text')}</span>
          <span className="promo-banner-cta">{t('banner.cta')} →</span>
        </Link>
        <h1 className="main-title">
          {t('hero.title')}
        </h1>
        <p className="main-subtitle">{t('hero.subtitle')}</p>
        <div className="main-buttons">
          <a href="#aloqa" className="btn btn-primary">{t('hero.cta1')}</a>
          <a href="#narxlar" className="btn btn-secondary">
            {t('hero.cta2')}
          </a>
        </div>
        <div className="hero-stats">
          {t('hero.stats', { returnObjects: true }).map((stat, i) => {
            const icons = [<FaCode />, <FaUsers />, <FaClock />];
            return (
              <div key={i} className="hero-stat-item">
                <span className="hero-stat-icon">{icons[i]}</span>
                <div className="hero-stat-text">
                  <span className="hero-stat-number">{stat.number}</span>
                  <span className="hero-stat-label">{stat.label}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Main;
