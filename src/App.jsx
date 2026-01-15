import React, { useEffect } from 'react';
import { Routes, Route, useParams, Navigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Main from './components/Main';
import Pricing from './components/Pricing';
import Process from './components/Process';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import SEO from './components/SEO';
import PixelSnow from './components/PixelSnow';
import './App.css';

function Home() {
  const { lang } = useParams();
  const { i18n } = useTranslation();

  useEffect(() => {
    const validLangs = ['uz', 'ru', 'en'];
    const currentLang = lang && validLangs.includes(lang) ? lang : 'uz';
    
    if (i18n.language !== currentLang) {
      i18n.changeLanguage(currentLang);
      localStorage.setItem('language', currentLang);
    }
  }, [lang, i18n]);

  return (
    <>
      <PixelSnow 
        style={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', zIndex: -1, backgroundColor: '#0F172A' }}
        flakeSize={0.005}
        pixelResolution={500}
        speed={2.7}
        depthFade={20}
        farPlane={5}
        brightness={0.7}
        density={0.4}
        variant="round"
        direction={185}
        color="#38BDF8"
      />
      <SEO />
      <Main />
      <Pricing />
      <Process />
      <FAQ />
      <Contact />
    </>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/:lang?" element={<Home />} />
      <Route path="*" element={<Navigate to="/uz" replace />} />
    </Routes>
  );
}

export default App;
