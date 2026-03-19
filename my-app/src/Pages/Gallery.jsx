import React, { useState } from "react";
import Navbar from "../components/JSX/Navbar";
import Footer from "../components/JSX/footer";
import Button from "../components/Button";
import "../Styles/Gallery.css";
import Swal from "sweetalert2";

const obras = [
  {
    titulo: "Luz y Sombra",
    descripcion: "Una exploración minimalista de la luz en el espacio.",
    precio: "$1,200 USD",
    imagen: "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=600&q=80",
  },
  {
    titulo: "Geometría Azul",
    descripcion: "Formas geométricas en tonos azules evocando calma.",
    precio: "$950 USD",
    imagen: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80",
  },
  {
    titulo: "Horizonte Rojo",
    descripcion: "Un horizonte abstracto en tonos cálidos y vibrantes.",
    precio: "$1,500 USD",
    imagen: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=600&q=80",
  },
  {
    titulo: "Verde Esencial",
    descripcion: "La esencia de la naturaleza en un solo trazo.",
    precio: "$800 USD",
    imagen: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=600&q=80",
  },
    {
    titulo: "Verde Esencial",
    descripcion: "La esencia de la naturaleza en un solo trazo.",
    precio: "$800 USD",
    imagen: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=600&q=80",
  },
    {
    titulo: "Verde Esencial",
    descripcion: "La esencia de la naturaleza en un solo trazo.",
    precio: "$800 USD",
    imagen: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=600&q=80",
  },
    {
    titulo: "Verde Esencial",
    descripcion: "La esencia de la naturaleza en un solo trazo.",
    precio: "$800 USD",
    imagen: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=600&q=80",
  },
    {
    titulo: "Verde Esencial",
    descripcion: "La esencia de la naturaleza en un solo trazo.",
    precio: "$800 USD",
    imagen: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=600&q=80",
  },
];

function Gallery() {
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

  const handleBuyClick = () => {
    Swal.fire({
      title: "Dale click al botón para redirigirte a nuestra pagina principal",
      icon: "success",
      draggable: true
    }).then(() => {
      window.location.href = "#";
    });
  };

  return (
    <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
      <Navbar />
      <main className="zehn-main" style={{ flex: 1 }}>
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
                <button className="zehn-buy-button" onClick={handleBuyClick}>Comprar</button>
              </div>
            </div>
          </div>
        )}
      </main>
      <Footer />
      <Button />
    </div>
  );
}

export default Gallery;
