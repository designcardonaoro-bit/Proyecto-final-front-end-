import React from "react";
import "./JSX/CSS/Button.css";
import Swal from "sweetalert2";

const Button = () => {
  const phoneNumber = "573104742852";
  const message = "Hola, quiero más información.";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  const handleClick = (e) => {
    e.preventDefault(); // Evita que el enlace se abra inmediatamente
    Swal.fire({
      title: "Enviar mensaje",
      icon: "success",
      draggable: true
    }).then(() => {
      window.open(whatsappUrl, "_blank", "noopener,noreferrer");
    });
  };

  return (
    <a
      href={whatsappUrl}
      className="whatsapp-button"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contactar por WhatsApp"
      onClick={handleClick}
    >
      <i className="fa-brands fa-whatsapp whatsapp-button__icon"></i>
      <span>¡Hola!</span>
    </a>
  );
};

export default Button;