import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import uz from '../locales/uz.json';
import ru from '../locales/ru.json';
import en from '../locales/en.json';

const resources = {
  uz: { translation: uz },
  ru: { translation: ru },
  en: { translation: en }
};

// Get initial language from URL or localStorage
const getInitialLanguage = () => {
  const path = window.location.pathname;
  const match = path.match(/^\/(en|ru|uz)/);
  if (match && ['en', 'ru', 'uz'].includes(match[1])) {
    return match[1];
  }
  return localStorage.getItem('language') || 'uz';
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: getInitialLanguage(),
    fallbackLng: 'uz',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
