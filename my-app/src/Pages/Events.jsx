import React from "react";
import Navbar from "../components/JSX/Navbar"; // Componente de la barra de navegación
import Footer from "../components/JSX/footer"; // Componente del pie de página
import Button from "../components/Button"; // Componente de botón adicional
import "./../Styles/Events.css"; // Estilos específicos para la página de eventos

// Lista de eventos con sus detalles
const events = [
  {
    date: "Feb 15 2025 - Mar 31 2025",
    title: "OPENING: UMBRALES CONTEMPORÁNEOS",
    location: "Zehn Living",
    image: "https://zehn.com.co/wp-content/uploads/2025/02/UMBRALES-CONTEMPORANEOS.jpeg",
  },
  {
    date: "Feb 15 2025",
    title: "PLANOS IMAGINARIOS. TALLER DE PINTURA PARA NIÑOS",
    location: "Zehn Living",
    image: "https://zehn.com.co/wp-content/uploads/2025/02/taller.jpeg",
  },
  {
    date: "Feb 15 2025",
    title: "CONVERSATORIO: DARLE RIENDA SUELTA A LOS ALTER EGO",
    location: "Zehn Living",
    image: "https://zehn.com.co/wp-content/uploads/2024/11/EVENTO-1.jpg",
  },
];

const Events = () => {
  return (
    <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
      <Navbar /> {/* Barra de navegación */}
      <main className="events-container" style={{ flex: 1 }}>
        <h2 className="events-title">FEBRERO 2025</h2> {/* Título de la sección */}
        <div className="events-list"> {/* Contenedor de la lista de eventos */}
          {events.map((event, index) => (
            <div className="event-card" key={index}> {/* Tarjeta de cada evento */}
              <img src={event.image} alt={event.title} className="event-image" /> {/* Imagen del evento */}
              <div className="event-details"> {/* Detalles del evento */}
                <p className="event-date">
                  <i className="fa-regular fa-calendar"></i> {event.date} {/* Fecha del evento */}
                </p>
                <h3 className="event-title">{event.title}</h3> {/* Título del evento */}
                <p className="event-location">
                  <i className="fa-solid fa-location-dot"></i> {event.location} {/* Ubicación del evento */}
                </p>
              </div>
            </div>
          ))}
        </div>
      </main>
      <Footer /> {/* Pie de página */}
      <Button /> {/* Botón adicional */}
    </div>
  );
};

export default Events;