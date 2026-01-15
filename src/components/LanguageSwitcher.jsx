import React from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate, useParams } from 'react-router-dom';
import './LanguageSwitcher.css';

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  const navigate = useNavigate();
  const { lang } = useParams();

  const languages = [
    { code: 'uz', name: 'O\'z', flag: '🇺🇿' },
    { code: 'ru', name: 'Рус', flag: '🇷🇺' },
    { code: 'en', name: 'Eng', flag: '🇬🇧' }
  ];

  const handleLanguageChange = (lng) => {
    i18n.changeLanguage(lng);
    localStorage.setItem('language', lng);
    // Navigate to the new language route
    navigate(`/${lng}`);
  };

  return (
    <div className="language-switcher">
      {languages.map(lang => (
        <button
          key={lang.code}
          className={`lang-btn ${i18n.language === lang.code ? 'active' : ''}`}
          onClick={() => handleLanguageChange(lang.code)}
          title={lang.name}
        >
          {lang.flag} {lang.name}
        </button>
      ))}
    </div>
  );
};

export default LanguageSwitcher;
