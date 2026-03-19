import React from "react";
import Navbar from "../components/JSX/Navbar";
import Footer from "../components/JSX/footer";
import Button from "../components/Button";
import "./../Styles/Events.css";

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
      <Navbar />
      <main className="events-container" style={{ flex: 1 }}>
        <h2 className="events-title">FEBRERO 2025</h2>
        <div className="events-list">
          {events.map((event, index) => (
            <div className="event-card" key={index}>
              <img src={event.image} alt={event.title} className="event-image" />
              <div className="event-details">
                <p className="event-date">
                  <i className="fa-regular fa-calendar"></i> {event.date}
                </p>
                <h3 className="event-title">{event.title}</h3>
                <p className="event-location">
                  <i className="fa-solid fa-location-dot"></i> {event.location}
                </p>
              </div>
            </div>
          ))}
        </div>
      </main>
      <Footer />
      <Button />
    </div>
  );
};

export default Events;