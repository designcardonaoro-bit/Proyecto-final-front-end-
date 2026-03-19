import React from "react";
import ReactDOM from "react-dom/client"; // ReactDOM para renderizar la aplicación en el DOM
import { BrowserRouter, Routes, Route } from "react-router-dom"; // Herramientas para manejar rutas
import Home from "./Pages/Home"; // Página principal
import Events from "./Pages/Events"; // Página de eventos
import Gallery from "./Pages/Gallery"; // Página de galería

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter> {/* Envolvemos la aplicación con BrowserRouter para habilitar las rutas */}
    <Routes> {/* Contenedor de las rutas */}
      <Route path="/" element={<Home />} /> {/* Ruta para la página principal */}
      <Route path="/events" element={<Events />} /> {/* Ruta para la página de eventos */}
      <Route path="/gallery" element={<Gallery />} /> {/* Ruta para la página de galería */}
    </Routes>
  </BrowserRouter>
);