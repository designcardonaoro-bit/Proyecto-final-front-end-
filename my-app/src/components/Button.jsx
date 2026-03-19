import React from "react";
import "./JSX/CSS/Button.css"; // Estilos específicos para el botón
import Swal from "sweetalert2"; // Librería para mostrar alertas

const Button = () => {
  const phoneNumber = "573104742852"; // Número de teléfono de WhatsApp
  const message = "Hola, quiero más información."; // Mensaje predeterminado
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`; // URL de WhatsApp con el mensaje codificado

  const handleClick = (e) => {
    e.preventDefault(); // Evita que el enlace se abra inmediatamente
    Swal.fire({
      title: "Enviar mensaje", // Título de la alerta
      icon: "success", // Icono de éxito
      draggable: true // Permite arrastrar la alerta
    }).then(() => {
      window.open(whatsappUrl, "_blank", "noopener,noreferrer"); // Abre el enlace de WhatsApp en una nueva pestaña
    });
  };

  return (
    <a
      href={whatsappUrl} // Enlace a WhatsApp
      className="whatsapp-button" // Clase para estilos del botón
      target="_blank" // Abre el enlace en una nueva pestaña
      rel="noopener noreferrer" // Mejora la seguridad del enlace
      aria-label="Contactar por WhatsApp" // Etiqueta accesible para lectores de pantalla
      onClick={handleClick} // Maneja el clic en el botón
    >
      <i className="fa-brands fa-whatsapp whatsapp-button__icon"></i> {/* Icono de WhatsApp */}
      <span>¡Hola!</span> {/* Texto del botón */}
    </a>
  );
};

export default Button;