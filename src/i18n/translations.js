import uz from './uz.json';
import ru from './ru.json';
import en from './en.json';

const translations = { uz, ru, en };

export function t(lang, key) {
  const keys = key.split('.');
  let value = translations[lang];
  for (const k of keys) {
    if (value == null) return key;
    value = value[k];
  }
  return value ?? key;
}

export function getLangFromUrl(url) {
  const [, lang] = url.pathname.split('/');
  if (['ru', 'en'].includes(lang)) return lang;
  return 'uz';
}

export function getLocalizedPath(lang, hash = '') {
  const prefix = lang === 'uz' ? '' : `/${lang}`;
  return `${prefix}/${hash}`;
}

export { uz, ru, en, translations };
