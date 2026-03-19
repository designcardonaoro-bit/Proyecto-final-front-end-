import React from "react";
import Footer from "../components/JSX/footer";
import Navbar from "../components/JSX/Navbar";
import Button from "../components/Button";
import "../Styles/Home.css";

const Home = () => {
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
                  <img src="https://zehn.com.co/wp-content/uploads/2024/04/zehn.16.jpg" alt="Imagen blog 1" />
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
                  <img src="https://zehn.com.co/wp-content/uploads/2024/04/zehn.16.jpg" alt="Imagen blog 2" />
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
                  <img src="https://zehn.com.co/wp-content/uploads/2024/04/zehn.16.jpg" alt="Imagen blog 3" />
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
      </main>
      <Footer />
      <Button />
    </div>
  );
};

export default Home;