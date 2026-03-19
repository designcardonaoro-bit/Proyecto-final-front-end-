import React, { useState } from "react";
import Navbar from "../components/JSX/Navbar"; // Componente de la barra de navegación
import Footer from "../components/JSX/footer"; // Componente del pie de página
import Button from "../components/Button"; // Componente de botón adicional
import "../Styles/Gallery.css"; // Estilos específicos para la galería
import Swal from "sweetalert2"; // Librería para mostrar alertas

// Lista de obras de arte con sus detalles
const obras = [
  {
    titulo: "Luz y Sombra",
    descripcion: "Paisaje nocturno de montaña con contrastes profundos y atmósfera serena.",
    precio: "$1,200 USD",
    imagen: "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=600&q=80",
  },
  {
    titulo: "Geometría Azul",
    descripcion: "Valle en tonos azules con composición equilibrada y sensación de calma.",
    precio: "$950 USD",
    imagen: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80",
  },
  {
    titulo: "Horizonte Rojo",
    descripcion: "Escena minimalista frente al mar con tonos cálidos y estilo contemporáneo.",
    precio: "$1,500 USD",
    imagen: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=600&q=80",
  },
  {
    titulo: "Verde Esencial",
    descripcion: "Cielo estrellado sobre paisaje natural que transmite profundidad y silencio.",
    precio: "$800 USD",
    imagen: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=600&q=80",
  },
  {
    titulo: "Niebla de Terracota",
    descripcion: "Montañas cubiertas de neblina con tonos cálidos y estética elegante.",
    precio: "$1,050 USD",
    imagen: "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=600&q=80",
  },
  {
    titulo: "Marea Silente",
    descripcion: "Horizonte marino minimalista con luz suave y composición limpia.",
    precio: "$1,250 USD",
    imagen: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=600&q=80",
  },
  {
    titulo: "Constelación Interior",
    descripcion: "Texturas celestes y estrellas que evocan contemplación y espacio.",
    precio: "$900 USD",
    imagen: "https://images.unsplash.com/photo-1444703686981-a3abbc4d4fe3?auto=format&fit=crop&w=600&q=80",
  },
  {
    titulo: "Eco de Alba",
    descripcion: "Amanecer suave en tonos rosados y azules con estilo moderno.",
    precio: "$1,100 USD",
    imagen: "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?auto=format&fit=crop&w=600&q=80",
  },
];

function Gallery() {
  // Estado para controlar si el modal está abierto y qué obra se está mostrando
  const [modalOpen, setModalOpen] = useState(false);
  const [obraActual, setObraActual] = useState(null);

  // Función para abrir el modal con los detalles de una obra
  const openModal = (obra) => {
    setObraActual(obra);
    setModalOpen(true);
  };

  // Función para cerrar el modal
  const closeModal = () => {
    setModalOpen(false);
    setObraActual(null);
  };

  // Función para manejar el clic en el botón "Comprar"
  const handleBuyClick = () => {
    Swal.fire({
      title: "Dale click al botón para redirigirte a nuestra pagina principal",
      icon: "success",
      draggable: true
    }).then(() => {
      window.location.href = "https://zehn.com.co/"; // Redirige a la página principal
    });
  };

  return (
    <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
      <Navbar /> {/* Barra de navegación */}
      <main className="zehn-main" style={{ flex: 1 }}>
        <section className="zehn-gallery"> {/* Sección de galería */}
          {obras.map((obra, idx) => (
            <div
              className="zehn-gallery-item"
              key={idx}
              onClick={() => openModal(obra)} // Abre el modal al hacer clic en una obra
            >
              <img src={obra.imagen} alt={obra.titulo} /> {/* Imagen de la obra */}
              <div className="zehn-title">{obra.titulo}</div> {/* Título de la obra */}
              <div className="zehn-price">{obra.precio}</div> {/* Precio de la obra */}
            </div>
          ))}
        </section>
        {modalOpen && ( // Modal para mostrar detalles de la obra */

          <div className="zehn-modal" onClick={closeModal}>
            <div
              className="zehn-modal-content"
              onClick={(e) => e.stopPropagation()} // Evita cerrar el modal al hacer clic dentro de él
            >
              <span className="zehn-close" onClick={closeModal}>
                &times; {/* Botón para cerrar el modal */}
              </span>
              <img src={obraActual.imagen} alt={obraActual.titulo} /> {/* Imagen de la obra en el modal */}
              <div className="zehn-modal-info">
                <h2>{obraActual.titulo}</h2> {/* Título de la obra */}
                <p>{obraActual.descripcion}</p> {/* Descripción de la obra */}
                <p className="zehn-price">{obraActual.precio}</p> {/* Precio de la obra */}
                <button className="zehn-buy-button" onClick={handleBuyClick}>Comprar</button> {/* Botón para comprar */}
              </div>
            </div>
          </div>
        )}
      </main>
      <Footer /> {/* Pie de página */}
      <Button /> {/* Botón adicional */}
    </div>
  );
}

export default Gallery;