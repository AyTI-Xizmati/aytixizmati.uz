import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useLocation } from 'react-router-dom';

const setMeta = (attr, key, value) => {
  let el = document.querySelector(`meta[${attr}="${key}"]`);
  if (!el) { el = document.createElement('meta'); el.setAttribute(attr, key); document.head.appendChild(el); }
  el.setAttribute('content', value);
};

const SEO = () => {
  const { t, i18n } = useTranslation();
  const location = useLocation();
  const currentLang = i18n.language || 'uz';

  useEffect(() => {
    const domainMap = { uz: 'https://aytixizmati.uz', ru: 'https://aytixizmati.uz/ru', en: 'https://aytixizmati.uz/en' };
    const currentUrl = `${domainMap[currentLang] || 'https://aytixizmati.uz'}${location.pathname}`;

    document.documentElement.lang = currentLang;
    document.title = t('seo.title');

    setMeta('name', 'description', t('seo.description'));
    setMeta('name', 'keywords', t('seo.keywords'));
    setMeta('property', 'og:title', t('seo.title'));
    setMeta('property', 'og:description', t('seo.description'));
    setMeta('property', 'og:url', currentUrl);

    let canonical = document.querySelector('link[rel="canonical"]');
    if (canonical) canonical.href = currentUrl;
  }, [currentLang, location.pathname, t]);

  return null;
};

export default SEO;
