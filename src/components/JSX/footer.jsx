import React from "react";
import "./CSS/footer.css"; // Estilos específicos para el pie de página

const Footer = () => {
	return (
		<footer className="footer-container"> {/* Contenedor principal del pie de página */}
			<div className="footer-section logo-section"> {/* Sección del logo y contacto */}
				<div className="footer-logo">zehn.</div> {/* Logo */}
				<div className="footer-contact"> {/* Información de contacto */}
					<p><span className="footer-bold">Phone:</span> +57 316 7988856</p>
					<p><span className="footer-bold">Address:</span> Complex Llanogrande,</p>
					<p>Rionegro Ant. Local 061</p>
				</div>
				<div className="footer-payments"> {/* Métodos de pago aceptados */}
					<p>Aceptamos:</p>
					<div className="footer-icons"> {/* Iconos de métodos de pago */}
						<img src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/mastercard.svg" alt="Mastercard" />
						<img src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/visa.svg" alt="Visa" />
						<img src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/paypal.svg" alt="Paypal" />
						<img src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/amazon.svg" alt="Amazon" />
						<img src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/jcb.svg" alt="JCB" />
					</div>
				</div>
			</div>
			<div className="footer-section"> {/* Sección sobre nosotros */}
				<h3>Sobre nosotros</h3>
				<ul>
					<li>Nosotros</li>
					<li>Contacto</li>
					<li>Nuestra Promesa</li>
					<li>Blog</li>
				</ul>
			</div>
			<div className="footer-section"> {/* Sección de programas */}
				<h3>Programas ZEHN</h3>
				<ul>
					<li>Membresía Visitantes</li>
					<li>Alianzas Comerciales</li>
					<li>ZEHN Creators</li>
				</ul>
			</div>
			<div className="footer-section"> {/* Sección de ayuda */}
				<h3>Ayuda</h3>
				<ul>
					<li>Soporte creadores</li>
					<li>Política de envíos</li>
					<li>Tratamiento de datos personales</li>
					<li>Términos y condiciones</li>
					<li>Política de garantía, devoluciones y reembolsos</li>
					<li>FAQs</li>
				</ul>
			</div>
		</footer>
	);
};

export default Footer;
