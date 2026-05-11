import { useEffect, useState } from "react";
import "./../Styles/Events.css";
import eventosImg from "../assets/encabezados/eventos.png";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

function Events() {
  const [eventos, setEventos] = useState({
    abril: [],
    mayo: [],
  });
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    fetch("/database/eventos.json")
      .then((res) => res.json())
      .then((data) => {
       setEventos(data);
       setLoading(false);
      })
      .catch((err) => {
        setError("Error cargando datos");
        setLoading(false);
      });
  }, []);

  const [showForm, setShowForm] = useState(false);

  const [form, setForm] = useState({
    nombre: "",
    cedula: "",
    telefono: "",
    correo: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = () => {
    const { nombre, cedula, telefono, correo } = form;

    if (!nombre || !cedula || !telefono || !correo) {
      Swal.fire("Error", "Completa todos los campos", "error");
      return;
    }
    if (
      !/^\d+$/.test(cedula) ||
      !/^\d+$/.test(telefono) ||
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(correo)
    ) {
      Swal.fire(
        "Error",
        "Asegúrate que los datos ingresados correspondan a los solicitados.",
        "error",
      );
      return;
    }

    Swal.fire("Listo", "Inscripción enviada", "success");

    setForm({
      nombre: "",
      cedula: "",
      telefono: "",
      correo: "",
    });

    setShowForm(false);
  };

  const [direccion, setDireccion] = useState("Zehn Living Medellin");

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
        <img src={eventosImg} alt="banner" className="img-title" />
        <div className="banner-overlay">
          <Link to="/" className="volver">
            ← Volver
          </Link>
          <h2 className="eventos-title">Eventos</h2>
          <p className="eventos-description">
            Reserva tu lugar y sé parte de nuestros próximos encuentros
            artísticos.
          </p>
        </div>
      </div>

      <p className="instructions">
        Descubre espacios diseñados para inspirar, aprender y conectar a través
        del arte. Explora experiencias únicas que despiertan la creatividad y
        transforman tu manera de ver y vivir lo artístico.
      </p>

      <main className="events-container">
        <h2 className="events-title">ABRIL 2026</h2>
        <div className="events-list">
          {eventos.abril.map((eventabril, index) => (
            <div className="event-card" key={index}>
              <img
                src={eventabril.image}
                alt={eventabril.title}
                className="event-image"
              />
              <div className="event-details">
                <p className="event-date">
                  <i className="fa-regular fa-calendar"></i> {eventabril.date}
                </p>
                <h3 className="event-title">{eventabril.title}</h3>
                <button
                  className="event-location"
                  onClick={() => {
                    setDireccion(eventabril.location);
                    document.getElementById("mapa")?.scrollIntoView({
                      behavior: "smooth",
                    });
                  }}
                >
                  <i className="fa-solid fa-location-dot"></i>
                  {eventabril.location}
                </button>
                <button
                  className="zehn-register-button"
                  onClick={() => setShowForm(true)}
                  aria-label={`Inscribirse al evento ${eventabril.title}`}
                >
                  Inscribirse
                </button>
              </div>
            </div>
          ))}
        </div>

        <h2 className="events-title">MAYO 2026</h2>
        <div className="events-list">
          {eventos.mayo.map((eventmayo, index) => (
            <div className="event-card" key={index}>
              <img
                src={eventmayo.image}
                alt={eventmayo.title}
                className="event-image"
              />
              <div className="event-details">
                <p className="event-date">
                  <i className="fa-regular fa-calendar"></i> {eventmayo.date}
                </p>
                <h3 className="event-title">{eventmayo.title}</h3>
                <button
                  className="event-location"
                  onClick={() => {
                    setDireccion(eventmayo.location);
                    document.getElementById("mapa")?.scrollIntoView({
                      behavior: "smooth",
                    });
                  }}
                >
                  <i className="fa-solid fa-location-dot"></i>
                  {eventmayo.location}
                </button>
                <button
                  className="zehn-register-button"
                  onClick={() => setShowForm(true)}
                  aria-label={`Inscribirse al evento ${eventmayo.title}`}
                >
                  Inscribirse
                </button>
              </div>
            </div>
          ))}
        </div>

        {showForm && (
          <div className="zehn-modal" onClick={() => setShowForm(false)}>
            <div
              className="zehn-modal-content"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="zehn-close"
                onClick={() => setShowForm(false)}
                aria-label="Cerrar modal eventos"
              >
                &times;
              </button>
              <h2 className="text-modal">Formulario de inscripción</h2>
              <div className="form-group">
                <label htmlFor="nombre">Nombre completo</label>
                <input
                  type="text"
                  id="nombre"
                  name="nombre"
                  placeholder="Ingresa tu nombre"
                  value={form.nombre}
                  onChange={handleChange}
                />
                <label htmlFor="cedula">Número de cédula</label>
                <input
                  type="text"
                  name="cedula"
                  placeholder="Ingresa tu cédula"
                  value={form.cedula}
                  onChange={handleChange}
                />
                <label htmlFor="telefono">Número de teléfono</label>
                <input
                  type="text"
                  name="telefono"
                  placeholder="Ingresa tu teléfono"
                  value={form.telefono}
                  onChange={handleChange}
                />
                <label htmlFor="correo">Correo electrónico</label>
                <input
                  type="email"
                  name="correo"
                  placeholder="Ingresa tu correo electrónico"
                  value={form.correo}
                  onChange={handleChange}
                />
              </div>
              <button
                className="zehn-enviar-button"
                onClick={handleSubmit}
                aria-label="Incribirse a evento"
              >
                Enviar
              </button>
            </div>
          </div>
        )}

        <section className="location-section" id="mapa">
          <h2 className="location-title">¿Comó llegar a nuestros eventos?</h2>
          <div className="location-container">
            <iframe
              src={`https://www.google.com/maps?q=${direccion}&output=embed`}
              width="90%"
              height="400"
              title="Ubicación eventos"
            />
          </div>
        </section>
      </main>
    </div>
  );
}

export default Events;
