import React, { useState } from "react";
import { Link } from "react-router-dom"; // Importa Link para navegación entre rutas
import "./CSS/Navbar.css"; // Estilos específicos para la barra de navegación

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false); // Estado para controlar el menú desplegable

  const toggleMenu = () => {
    setMenuOpen(!menuOpen); // Alterna el estado del menú
  };

  return (
    <header className="navbar"> {/* Contenedor principal de la barra de navegación */}
      <div className="navbar__logo"> {/* Logo de la barra de navegación */}
        <img src="/Logo-Zehn-4x.svg" alt="Logo Zehn" className="navbar__logo-image" />
      </div>
      <div className="navbar__menu-icon" onClick={toggleMenu}> {/* Icono para abrir/cerrar el menú */}
        <i className={menuOpen ? "fas fa-times" : "fas fa-bars"}></i>
      </div>
      <nav className={`navbar__nav ${menuOpen ? "active" : ""}`}> {/* Menú de navegación */}
        <ul className="navbar__list"> {/* Lista de enlaces */}
          <li className="navbar__item"><Link to="/">Inicio</Link></li> {/* Enlace a la página principal */}
          <li className="navbar__item"><Link to="/events">Eventos</Link></li> {/* Enlace a la página de eventos */}
          <li className="navbar__item"><Link to="/gallery">Galeria</Link></li> {/* Enlace a la galería */}
          <li className="navbar__item navbar__cart"> {/* Icono del carrito de compras */}
            <i className="fas fa-shopping-cart"></i>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;