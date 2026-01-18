import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import { useLocation } from 'react-router-dom';

const SEO = () => {
    const { t, i18n } = useTranslation();
    const location = useLocation();
    
    // Get current language
    const currentLang = i18n.language || 'uz';
    
    // Get domain based on language
    const domainMap = {
        uz: 'https://aytixizmati.uz',
        ru: 'https://aytixizmati.uz/ru',
        en: 'https://aytixizmati.uz/en'
    };
    
    const currentDomain = domainMap[currentLang] || 'https://aytixizmati.uz';
    const currentUrl = `${currentDomain}${location.pathname}`;

    useEffect(() => {
        // Update HTML lang attribute
        document.documentElement.lang = currentLang;
    }, [currentLang]);

    return (
        <Helmet>
            {/* Title and Meta Description */}
            <title>{t('seo.title')}</title>
            <meta name="description" content={t('seo.description')} />
            <meta name="keywords" content={t('seo.keywords')} />
            
            {/* Basic Meta Tags */}
            <meta charSet="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <meta name="robots" content="index, follow" />
            <meta name="author" content="AyTi Xizmati" />
            <meta name="language" content={currentLang} />
            
            {/* Open Graph Tags */}
            <meta property="og:type" content="website" />
            <meta property="og:title" content={t('seo.title')} />
            <meta property="og:description" content={t('seo.description')} />
            <meta property="og:url" content={currentUrl} />
            <meta property="og:image" content="https://aytixizmati.uz/og-image.png" />
            <meta property="og:site_name" content="AyTi Xizmati" />
            <meta property="og:locale" content={currentLang === 'uz' ? 'uz_UZ' : currentLang === 'ru' ? 'ru_RU' : 'en_US'} />
            <meta property="og:locale:alternate" content="uz_UZ" />
            <meta property="og:locale:alternate" content="ru_RU" />
            <meta property="og:locale:alternate" content="en_US" />
            
            {/* Twitter Card Tags */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={t('seo.title')} />
            <meta name="twitter:description" content={t('seo.description')} />
            <meta name="twitter:image" content="https://aytixizmati.uz/og-image.png" />
            
            {/* Canonical Link */}
            <link rel="canonical" href={currentUrl} />
            
            {/* Language Alternates */}
            <link rel="alternate" hrefLang="uz" href="https://aytixizmati.uz" />
            <link rel="alternate" hrefLang="ru" href="https://aytixizmati.uz/ru" />
            <link rel="alternate" hrefLang="en" href="https://aytixizmati.uz/en" />
            <link rel="alternate" hrefLang="x-default" href="https://aytixizmati.uz" />
            
            {/* Favicon */}
            <link rel="icon" type="image/x-icon" href="/favicon.ico" />
            
            {/* Additional SEO */}
            <meta name="theme-color" content="#0F172A" />
            <meta name="msapplication-TileColor" content="#0F172A" />
        </Helmet>
    );
};

export default SEO;
