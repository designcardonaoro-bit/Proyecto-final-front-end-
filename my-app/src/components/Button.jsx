import React from "react";
import "./JSX/CSS/Button.css";

const Button = () => {
  const phoneNumber = "573104742852";
  const message = "Hola, quiero más información.";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappUrl}
      className="whatsapp-button"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contactar por WhatsApp"
    >
      <i className="fa-brands fa-whatsapp whatsapp-button__icon"></i>
      <span>¡Hola!</span>
    </a>
  );
};

export default Button;