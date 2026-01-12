import React from 'react';
import Main from './components/Main';
import Pricing from './components/Pricing';
import Process from './components/Process';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import './App.css';

function App() {
  return (
    <div className="App">
      <Main />
      <Pricing />
      <Process />
      <FAQ />
      <Contact />
    </div>
  );
}

export default App;
