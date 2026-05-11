import "./CSS/FichaTecnica.css";

function FichaTecnica({ obra, onClose }) {
  return (
    <div className="ficha-overlay" onClick={onClose}>
      <div className="ficha-page" onClick={(e) => e.stopPropagation()}>
        <div className="ficha-header">
          {obra.titulo}
          <button
            className="ficha-close"
            onClick={onClose}
            aria-label="Cerrar ficha técnica"
          >
            &times;
          </button>
        </div>

        <div className="ficha-body">
          <div className="ficha-content">
            <div className="ficha-info">
              <div className="ficha-info-row">
                <p className="ficha-label">Autor:</p>
                <p className="ficha-value">{obra.autor}</p>
              </div>
              <div className="ficha-info-row">
                <p className="ficha-label">Título de la obra:</p>
                <p className="ficha-value">{obra.titulo}</p>
              </div>
              <div className="ficha-info-row">
                <p className="ficha-label">Año de creación:</p>
                <p className="ficha-value">{obra.año}</p>
              </div>
              <div className="ficha-info-row">
                <p className="ficha-label">Técnica y materiales:</p>
                <p className="ficha-value">{obra.tecnica}</p>
              </div>
              <div className="ficha-info-row">
                <p className="ficha-label">Dimensiones:</p>
                <p className="ficha-value">{obra.dimensiones}</p>
              </div>
              <div className="ficha-info-row">
                <p className="ficha-label">Estado de la obra:</p>
                <p className="ficha-value">{obra.estado}</p>
              </div>
            </div>

            <div className="ficha-image-col">
              <div className="ficha-image-frame">
                <img src={obra.imagen} alt={obra.titulo} />
              </div>
              <button className="ficha-buy-button">Comprar</button>
            </div>
          </div>

          <hr className="ficha-divider" />

          <p className="ficha-desc">{obra.descripcion}</p>
          <p className="ficha-desc">{obra.historia}</p>

          <div className="ficha-footer">
            <span className="ficha-logo">zehn.</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FichaTecnica;
