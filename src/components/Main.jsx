import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import logo from '../assets/logo.png';
import './Main.css';

const Main = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <section className="main-section" id="asosiy">
      <nav className="navbar">
        <div className="nav-container">
          <div className="logo-container">
            <img src={logo} alt="AyTi Xizmati" className="logo-img" />
            <h1 className="logo">AyTi Xizmati</h1>
          </div>
          
          <div className="menu-icon" onClick={toggleMenu}>
            {isMenuOpen ? <FaTimes /> : <FaBars />}
          </div>

          <ul className={isMenuOpen ? 'nav-menu active' : 'nav-menu'}>
            <li><a href="#asosiy" onClick={closeMenu}>Asosiy</a></li>
            <li><a href="#narxlar" onClick={closeMenu}>Tariflar</a></li>
            <li><a href="#jarayon" onClick={closeMenu}>Jarayon</a></li>
            <li><a href="#faq" onClick={closeMenu}>FAQ</a></li>
            <li><a href="#aloqa" onClick={closeMenu}>Aloqa</a></li>
          </ul>
        </div>
      </nav>
      
      <div className="main-content">
        <h1 className="main-title" >
          NATIJAGA yo'naltirilgan <br />
          SAYTLAR ishlab chiqamiz
        </h1>
        <div className="main-buttons">
          <a href="#aloqa" className="btn btn-primary">Buyurtma berish</a>
          <a href="https://t.me/AyTi_Xizmati" target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
            Telegram Kanalimiz
          </a>
        </div>
      </div>
    </section>
  );
};

export default Main;
