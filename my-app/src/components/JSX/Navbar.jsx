import React from "react";
import { Link } from "react-router-dom"; // Importa Link de react-router-dom
import "./CSS/Navbar.css";

const Navbar = () => {
  return (
    <header className="navbar">
      <div className="navbar__logo">
        <img src="/Logo-Zehn-4x.svg" alt="Logo Zehn" className="navbar__logo-image" />
      </div>
      <nav className="navbar__nav">
        <ul className="navbar__list">
          <li className="navbar__item"><Link to="/">Inicio</Link></li>
          <li className="navbar__item"><Link to="/events">Eventos</Link></li>
          <li className="navbar__item"><Link to="/gallery">Galeria</Link></li>
        </ul>
      </nav>
      <div className="navbar__cart">
        <i className="fas fa-shopping-cart"></i>
      </div>
    </header>
  );
};

export default Navbar;