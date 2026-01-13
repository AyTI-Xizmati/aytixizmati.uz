import React, { useState } from 'react';
import Main from './components/Main';
import Pricing from './components/Pricing';
import Process from './components/Process';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import SEO from './components/SEO';
import './App.css';

function App() {
  return (
    <>
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
