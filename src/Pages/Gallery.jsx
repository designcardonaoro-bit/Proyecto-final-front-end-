import { useEffect, useState, useRef } from "react";
import "../Styles/Gallery.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { Keyboard } from "swiper/modules";
import obrasImg from "../assets/encabezados/obras.png";
import { Link } from "react-router-dom";
import FichaTecnica from "../components/JSX/FichaTecnica";

function Gallery() {
  const [obras, setObras] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/database/obras.json")
      .then((res) => res.json())
      .then((data) => {
        setObras(data);
        setLoading(false);
      })
      .catch((err) => {
        setError("Error cargando datos");
        setLoading(false);
      });
  }, []);

  const [obraActual, setObraActual] = useState(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [filtro, setFiltro] = useState("todas");
  const [fichaOpen, setFichaOpen] = useState(false);

  const swiperRef = useRef(null);

  const openFicha = (obra) => {
    setObraActual(obra);
    setFichaOpen(true);
  };

  const closeFicha = () => {
    setFichaOpen(false);
    setObraActual(null);
  };

  const irAGaleria = (obra) => {
    const index = obras.findIndex((o) => o.titulo === obra.titulo);

    if (index !== -1 && swiperRef.current) {
      swiperRef.current.slideToLoop(index);

      document
        .getElementById("galeria")
        ?.scrollIntoView({ behavior: "smooth" });

      setTimeout(() => {
        openFicha(obra);
      }, 1400);
    }
  };

  const obrasFiltradas = obras.filter((obra) => {
    if (filtro === "todas") return true;
    return obra.categoria === filtro;
  });
  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <div className="banner-title">
        <img src={obrasImg} alt="banner" className="img-title" />
        <div className="banner-overlay">
          <Link to="/" className="volver">
            ← Volver
          </Link>
          <h2 className="obras-title">Galería de Arte</h2>
          <p className="obras-description">
            Explora nuestras obras disponibles.
          </p>
        </div>
      </div>

      <p className="instructions" id="galeria">
        Explora nuestra colección de obras cuidadosamente seleccionadas, donde
        cada pieza refleja estilo, creatividad y emoción. Desliza el carrusel
        para descubrir las diferentes obras y selecciona la imagen central para
        ver más detalles.
      </p>

      <main className="zehn-main">
        <section className="zehn-gallery">
          {obras.length > 0 && (
            <Swiper
              key={obras.length}
              modules={[EffectCoverflow, Pagination, Keyboard]}
              keyboard={{ enabled: true }}
              onSwiper={(swiper) => (swiperRef.current = swiper)}
              effect={"coverflow"}
              centeredSlides={true}
              slidesPerView={3}
              loop={true}
              pagination={{ clickable: true }}
              onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
            >
              {obras.map((obra, index) => (
                <SwiperSlide key={index}>
                  <div
                    onClick={() => {
                      if (index === activeIndex) openFicha(obra);
                    }}
                  >
                    <img src={obra.imagen} alt={obra.titulo} />
                    <h3>{obra.titulo}</h3>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          )}
        </section>

        <h2 className="historias-title">Historias detrás de las obras</h2>

        <p className="historias-description">
          Detrás de cada obra hay una intención, una emoción y un momento único.
          Aquí descubrirás las historias que dieron vida a cada creación.
        </p>

        <div className="filtros">
          <button
            className={filtro === "todas" ? "active" : ""}
            onClick={() => setFiltro("todas")}
          >
            Todas
          </button>
          <button
            className={filtro === "pintura" ? "active" : ""}
            onClick={() => setFiltro("pintura")}
          >
            Pintura
          </button>
          <button
            className={filtro === "fotografia" ? "active" : ""}
            onClick={() => setFiltro("fotografia")}
          >
            Fotografía
          </button>
          <button
            className={filtro === "digital" ? "active" : ""}
            onClick={() => setFiltro("digital")}
          >
            Digital
          </button>
                    <button
            className={filtro === "precio" ? "active" : ""}
            onClick={() => setFiltro("precio")}
          >
            Precio
          </button>
        </div>

        <section className="historia">
          {obrasFiltradas.map((obra, index) => (
            <div key={index} className="historia-card">
              <img src={obra.imagen} alt={obra.titulo} />

              <div className="historia-texto">
                <h2>{obra.titulo}</h2>
                <p>{obra.autor}</p>
                <p className="elemento-description">{obra.historia}</p>

                <button onClick={() => irAGaleria(obra)}>
                  Comprar en galería
                </button>
              </div>
            </div>
          ))}
        </section>

        {fichaOpen && obraActual && (
          <FichaTecnica obra={obraActual} onClose={closeFicha} />
        )}
      </main>
    </div>
  );
}

export default Gallery;
