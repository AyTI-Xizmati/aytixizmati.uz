import React, { useEffect } from 'react';
import { Routes, Route, useParams, Navigate, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Main from './components/Main';
import Pricing from './components/Pricing';
import Process from './components/Process';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import SEO from './components/SEO';
import PixelSnow from './components/PixelSnow';
import ClickSpark from './components/ClickSpark';
import Aksiya from './components/Aksiya';
import './App.css';

function Home() {
  const { lang, section } = useParams();
  const { i18n } = useTranslation();
  const location = useLocation();

  useEffect(() => {
    // Handle GitHub Pages 404 redirect - restore the original path
    if (sessionStorage.redirect) {
      const redirect = sessionStorage.redirect;
      delete sessionStorage.redirect;
      
      // Extract language and section from the redirect path
      const pathMatch = redirect.match(/^\/(en|ru|uz)(?:\/(.+))?/);
      const pathLang = pathMatch ? pathMatch[1] : lang;
      const pathSection = pathMatch ? pathMatch[2] : section;
      
      // Update window history to show correct path
      if (pathLang && pathLang !== 'uz') {
        const newPath = pathSection ? `/${pathLang}/${pathSection}` : `/${pathLang}`;
        window.history.replaceState(null, null, newPath);
      }
    }
  }, [lang, section]);

  useEffect(() => {
    const validLangs = ['uz', 'ru', 'en'];
    const currentLang = lang && validLangs.includes(lang) ? lang : 'uz';
    
    // Always update i18n language when lang param changes
    i18n.changeLanguage(currentLang);
    localStorage.setItem('language', currentLang);
    
    // Scroll to section if specified
    if (section) {
      setTimeout(() => {
        const element = document.getElementById(section);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  }, [lang, section, i18n]);

  return (
    <>
      <PixelSnow
        style={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', zIndex: -1 }}
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
      <ClickSpark />
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
      {/* Aksiya routes */}
      <Route path="/aksiya" element={<Aksiya />} />
      <Route path="/:lang/aksiya" element={<Aksiya />} />
      {/* Language + Section routes */}
      <Route path="/:lang/:section" element={<Home />} />
      {/* Language only routes */}
      <Route path="/:lang" element={<Home />} />
      {/* Direct section routes (no language prefix) */}
      <Route path="/:section" element={<Home />} />
      {/* Root */}
      <Route path="/" element={<Home />} />
      {/* Catch all - redirect to root */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

export default App;
