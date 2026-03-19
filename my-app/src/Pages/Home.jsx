import React from "react";
import Footer from "../components/JSX/footer";
import Navbar from "../components/JSX/Navbar";
import Button from "../components/Button";
import "../Styles/Home.css";
import cercasiBansky from "../assets/cercasi_Bansky.png";
import gabriel from "../assets/gabrielAlzate.jpg";
import natalia from "../assets/nataliaGaviria.png";
import edwin from "../assets/edwinGomez.png";
import apolo from "../assets/apolo.png";
import futuroSalva from "../assets/futuroSalvaje.png";
import tercera from "../assets/terceraObra.png";
import reporte from "../assets/reporte.png";
import Swal from "sweetalert2";

const Home = () => {
  const handleReportButtonClick = (e) => {
    e.preventDefault(); // Prevent default link behavior
    Swal.fire({
      title: "Dale click al botón para redirigirte a nuestra pagina principal",
      icon: "success",
      draggable: true
    }).then(() => {
      // Redirect to the desired link after the alert
      window.location.href = "#"; // Replace '#' with your desired link
    });
  };

  return (
    <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
      <Navbar />
      <main style={{ flex: 1 }}>
        <div className="banner">
          <div className="content-banner">
            <p>Artesanias</p>
            <h2>Arte y diseño <br /> Galería de obras</h2>
            <a href="#" className="btn btn-primary">Eventos</a>
          </div>
        </div>

        {/* Nueva sección: Galería de obras */}
        <section className="blog-section">
          <div className="blog-container">
            <h2 className="section-title">Galería de obras</h2>

            <div className="blogs-grid">
              {/* Obra 1 */}
              <article className="blog-card">
                <div className="card-media">
                  <img src={cercasiBansky} alt="Imagen blog 1" /> 
                </div>
                <div className="card-body">
                  <h3 className="card-title">Galería</h3>
                  <p className="card-date">1503 - 1506</p>
                  <p className="card-excerpt">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum ad quod, libero molestias rerum quos. Dicta, magni dolore. Quae omnis itaque ullam nihil, quaerat ipsam accusamus? Cumque doloribus quaerat architecto.
                  </p>
                  <a className="card-btn" href="#">COMPRAR</a>
                </div>
              </article>

              {/* Obra 2 */}
              <article className="blog-card">
                <div className="card-media">
                  <img src={futuroSalva} alt="Imagen blog 2" />
                </div>
                <div className="card-body">
                  <h3 className="card-title">Galería</h3>
                  <p className="card-date">1495 - 1498</p>
                  <p className="card-excerpt">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eveniet corporis commodi ipsa ab culpa molestiae illum eligendi reiciendis sunt maxime soluta, nobis dignissimos quisquam quia magni accusamus veniam. Repudiandae, id.
                  </p>
                  <a className="card-btn" href="#">COMPRAR</a>
                </div>
              </article>

              {/* Obra 3 */}
              <article className="blog-card">
                <div className="card-media">
                  <img src={tercera} alt="Imagen blog 3" />
                </div>
                <div className="card-body">
                  <h3 className="card-title">Galería</h3>
                  <p className="card-date">1890 - 1895</p>
                  <p className="card-excerpt">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sapiente, itaque ipsa? Laudantium porro voluptatum doloremque impedit officiis eligendi laboriosam dolorem culpa repudiandae, possimus atque cupiditate, vel at fugit autem accusantium.
                  </p>
                  <a className="card-btn" href="#">COMPRAR</a>
                </div>
              </article>
            </div>
          </div>
        </section>

        {/* Nueva sección: Artistas */}
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
              <a href="https://zehn.com.co/" className="report-button" onClick={handleReportButtonClick}>DESCUBRE MÁS</a>
            </div>
            <div className="report-image">
              <img src={reporte} alt="Informe de gestión" />
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <Button />
    </div>
  );
};

export default Home;