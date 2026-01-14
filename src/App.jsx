import React, { useState } from 'react';
import Main from './components/Main';
import Pricing from './components/Pricing';
import Process from './components/Process';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import SEO from './components/SEO';
import PixelSnow from './components/PixelSnow';
import './App.css';

function App() {
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

export default App;
