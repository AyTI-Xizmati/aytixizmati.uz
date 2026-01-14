import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { FaBars, FaTimes, FaGlobe } from 'react-icons/fa';
import './Main.css';

const Main = () => {
  const { t, i18n } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isHeaderHidden, setIsHeaderHidden] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
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
    setShowLangDropdown(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Agar pastga siljiga bo'lsa headerisini yashir
      if (currentScrollY > lastScrollY && currentScrollY > 80) {
        setIsHeaderHidden(true);
      } 
      // Agar tepaga siljiga bo'lsa headerisini ko'rsat
      else if (currentScrollY < lastScrollY) {
        setIsHeaderHidden(false);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <section className="main-section" id="asosiy">
      
      <nav className={`navbar ${isHeaderHidden ? 'navbar-hidden' : ''}`}>
        <div className="nav-container">
          <div className="logo-container">
            <h1 className="logo">AyTi Xizmati</h1>
            <a href="tel:+998773009928" className="phone-link">
              +998 77-300-99-28
            </a>
            
            <div className="lang-selector-wrapper">
              <button 
                className="lang-toggle-btn"
                onClick={() => setShowLangDropdown(!showLangDropdown)}
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
            <div className="menu-icon" onClick={toggleMenu}>
              {isMenuOpen ? <FaTimes /> : <FaBars />}
            </div>
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
        <h1 className="main-title">
          {t('hero.title')}
        </h1>
        <div className="main-buttons">
          <a href="#aloqa" className="btn btn-primary">{t('hero.cta1')}</a>
          <a href="https://t.me/ayti_xizmatibot" target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
            {t('hero.cta2')}
          </a>
        </div>
      </div>
    </section>
  );
};

export default Main;
