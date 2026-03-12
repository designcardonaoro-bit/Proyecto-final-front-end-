import React, { useState } from "react";
import "./ZehnGallery.css";

const obras = [
  {
    titulo: "Luz y Sombra",
    descripcion: "Una exploración minimalista de la luz en el espacio.",
    precio: "$1,200 USD",
    imagen: "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=600&q=80"
  },
  {
    titulo: "Geometría Azul",
    descripcion: "Formas geométricas en tonos azules evocando calma.",
    precio: "$950 USD",
    imagen: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80"
  },
  {
    titulo: "Horizonte Rojo",
    descripcion: "Un horizonte abstracto en tonos cálidos y vibrantes.",
    precio: "$1,500 USD",
    imagen: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=600&q=80"
  },
  {
    titulo: "Verde Esencial",
    descripcion: "La esencia de la naturaleza en un solo trazo.",
    precio: "$800 USD",
    imagen: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=600&q=80"
  }
];

function ZehnGallery() {
  const [modalOpen, setModalOpen] = useState(false);
  const [obraActual, setObraActual] = useState(null);

  const openModal = (obra) => {
    setObraActual(obra);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setObraActual(null);
  };

  return (
    <div className="zehn-root">
      <header className="zehn-header">
        <h1>Zehn</h1>
      </header>
      <main className="zehn-main">
        <section className="zehn-gallery">
          {obras.map((obra, idx) => (
            <div
              className="zehn-gallery-item"
              key={idx}
              onClick={() => openModal(obra)}
            >
              <img src={obra.imagen} alt={obra.titulo} />
              <div className="zehn-title">{obra.titulo}</div>
              <div className="zehn-price">{obra.precio}</div>
            </div>
          ))}
        </section>
        {modalOpen && (
          <div className="zehn-modal" onClick={closeModal}>
            <div
              className="zehn-modal-content"
              onClick={(e) => e.stopPropagation()}
            >
              <span className="zehn-close" onClick={closeModal}>
                &times;
              </span>
              <img src={obraActual.imagen} alt={obraActual.titulo} />
              <div className="zehn-modal-info">
                <h2>{obraActual.titulo}</h2>
                <p>{obraActual.descripcion}</p>
                <p className="zehn-price">{obraActual.precio}</p>
              </div>
            </div>
          </div>
        )}
      </main>
      <footer className="zehn-footer">
        <p>&copy; 2026 Zehn. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
}

export default ZehnGallery;
