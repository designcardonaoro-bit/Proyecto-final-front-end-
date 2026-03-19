import React, { useState } from "react";
import { Link } from "react-router-dom"; // Importa Link de react-router-dom
import "./CSS/Navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="navbar">
      <div className="navbar__logo">
        <img src="/Logo-Zehn-4x.svg" alt="Logo Zehn" className="navbar__logo-image" />
      </div>
      <div className="navbar__menu-icon" onClick={toggleMenu}>
        <i className={menuOpen ? "fas fa-times" : "fas fa-bars"}></i>
      </div>
      <nav className={`navbar__nav ${menuOpen ? "active" : ""}`}>
        <ul className="navbar__list">
          <li className="navbar__item"><Link to="/">Inicio</Link></li>
          <li className="navbar__item"><Link to="/events">Eventos</Link></li>
          <li className="navbar__item"><Link to="/gallery">Galeria</Link></li>
          <li className="navbar__item navbar__cart">
            <i className="fas fa-shopping-cart"></i>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;