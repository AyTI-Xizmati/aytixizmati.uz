import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';

const SEO = () => {
    const { t } = useTranslation();

    return (
        <Helmet>
            <title>{t('seo.title')}</title>
            <meta name="description" content={t('seo.description')} />
            <meta name="keywords" content={t('seo.keywords')} />
            <meta charset="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        </Helmet>
    );
};

export default SEO;
