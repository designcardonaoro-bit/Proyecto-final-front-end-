import "../Styles/Home.css"; // Estilos específicos para la página de inicio
import cercasiBansky from "../assets/cercasi_Bansky.png"; // Imagen de la obra 1
import gabriel from "../assets/gabrielAlzate.jpg"; // Imagen del artista Gabriel
import natalia from "../assets/nataliaGaviria.png"; // Imagen de la artista Natalia
import edwin from "../assets/edwinGomez.png"; // Imagen del artista Edwin
import apolo from "../assets/apolo.png"; // Imagen del artista Apolo
import futuroSalva from "../assets/futuroSalvaje.png"; // Imagen de la obra 2
import tercera from "../assets/terceraObra.png"; // Imagen de la obra 3
import reporte from "../assets/reporte.png"; // Imagen del informe de gestión
import Swal from "sweetalert2"; // Librería para mostrar alertas

const Home = () => {
  const handleReportButtonClick = (e) => {
    e.preventDefault(); 
    Swal.fire({
      title: "Te redireccionaremos a nuestra pagina principal",
      icon: "success",
      draggable: true
    }).then(() => {
      window.location.href = "https://zehn.com.co/";
    });
  };

  return (
    <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
      <main style={{ flex: 1 }}>
        <div className="banner"> 
          <div className="content-banner">
            <p>Artesanias</p>
            <h2>Arte y diseño <br /> Galería de obras</h2>
            <a href="/events" className="btn btn-primary">Eventos</a> 
          </div>
        </div>

        <section className="blog-section">
          <div className="blog-container">
            <h2 className="section-title">Galería de obras</h2>

            <div className="blogs-grid">
              <article className="blog-card">
                <div className="card-media">
                  <img src={cercasiBansky} alt="Imagen blog 1" /> 
                </div>
                <div className="card-body">
                  <h3 className="card-title">Cercasi Banksy Disperatamente</h3>
                  <p className="card-date">2026</p>
                  <p className="card-excerpt">
                    Una obra de aire urbano y provocador que juega con el lenguaje del arte callejero, la ironía y la crítica social. Su composición transmite rebeldía, búsqueda de identidad y una estética contemporánea que remite al grafiti, al stencil y a la cultura visual de la calle.
                  </p>
                  <a className="card-btn" href="/gallery">IR</a> 
                </div>
              </article>

              <article className="blog-card">
                <div className="card-media">
                  <img src={futuroSalva} alt="Imagen blog 2" />
                </div>
                <div className="card-body">
                  <h3 className="card-title">Futuro Salvaje</h3>
                  <p className="card-date">2026</p>
                  <p className="card-excerpt">
                    Una pieza contundente que mezcla lo elegante con lo salvaje, combinando trazos dorados, símbolos de poder y una estética casi ritual. La obra transmite tensión, misterio y transformación, como si anunciara un nuevo comienzo donde lo instintivo y lo contemporáneo conviven en equilibrio.
                  </p>
                  <a className="card-btn" href="/gallery">IR</a>
                </div>
              </article>

              <article className="blog-card">
                <div className="card-media">
                  <img src={tercera} alt="Imagen blog 3" /> 
                </div>
                <div className="card-body">
                  <h3 className="card-title">Urban Sketchers</h3>
                  <p className="card-date">2026</p>
                  <p className="card-excerpt">
                    Una obra inspirada en la observación directa de la ciudad, donde el dibujo funciona como memoria visual de recorridos, calles, rincones y momentos cotidianos. Tiene un espíritu espontáneo y documental, ideal para capturar la energía de Medellín con una mirada artística, cercana y personal.
                  </p>
                  <a className="card-btn" href="/gallery">IR</a> 
                </div>
              </article>
            </div>
          </div>
        </section>

        <section className="artists-section">
          <h2 className="artists-title">Así somos</h2>
          <p className="artists-description">
            Especialistas en crear contenidos. Investigadores de los lugares más recónditos de Google. Amantes de la gente que escribe guion sin tilde. Rápidos hasta donde la calidad no se deteriora. Eficaces en llevar a cabo un plan, tu plan. Y más allá de todo eso, tu equipo.
          </p>
          <div className="artists-grid">
            <div className="artist-card">
              <img src={gabriel} alt="Artista 1" className="artist-image" /> 
              <h3 className="artist-name">Gabriel Alzate Tobon</h3>
              <p className="artist-role">Artista AI | ejecutivo | diseñador | estratega digital</p>
              <div className="artist-socials">
                <a href="#" className="social-link">LinkedIn</a>
                <a href="#" className="social-link">Twitter</a>
                <a href="#" className="social-link">Instagram</a>
              </div>
            </div>
            <div className="artist-card">
              <img src={natalia} alt="Artista 2" className="artist-image" />
              <h3 className="artist-name">Natalia Gaviria Barreneche</h3>
              <p className="artist-role">Speaker en innovación | transformación digital | tendencias tecnologicas</p>
              <div className="artist-socials">
                <a href="#" className="social-link">LinkedIn</a>
                <a href="#" className="social-link">Twitter</a>
                <a href="#" className="social-link">Instagram</a>
              </div>
            </div>
            <div className="artist-card">
              <img src={edwin} alt="Artista 3" className="artist-image" /> 
              <h3 className="artist-name">Edwin Gómez</h3>
              <p className="artist-role">Pintor | dibujante | artista | muralista de medellín</p>
              <div className="artist-socials">
                <a href="#" className="social-link">LinkedIn</a>
                <a href="#" className="social-link">Twitter</a>
                <a href="#" className="social-link">Instagram</a>
              </div>
            </div>
            <div className="artist-card">
              <img src={apolo} alt="Artista 4" className="artist-image" /> 
              <h3 className="artist-name">Apolo</h3>
              <p className="artist-role">Artista | muralismo | ilustración | arte urbano | dibujante</p>
              <div className="artist-socials">
                <a href="#" className="social-link">LinkedIn</a>
                <a href="#" className="social-link">Twitter</a>
                <a href="#" className="social-link">Instagram</a>
              </div>
            </div>
          </div>
        </section>
        
        <section className="report-section">
          <div className="report-container">
            <div className="report-text">
              <h2>Conocenos</h2>
              <p>Incluye el Informe Periódico de Fin de Ejercicio 2024</p>
              <p>Recordamos un año impulsado por la confianza y el apoyo de todos nuestros aliados y comunidades.</p>
              <a href="#" className="report-button" onClick={handleReportButtonClick}>DESCUBRE MÁS</a> 
            </div>
            <div className="report-image">
              <img src={reporte} alt="Informe de gestión" />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Home;