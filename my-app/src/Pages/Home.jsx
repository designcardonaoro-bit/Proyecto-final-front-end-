import React from "react";
import Footer from "../components/JSX/footer";

const Home = () => {
	return (
		<div style={{ minHeight: "100vh", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
			<main style={{ flex: 1 }}>
				{/* Aquí puedes agregar el contenido principal de tu Home */}
				<h1 style={{ textAlign: "center", marginTop: 40 }}>Bienvenido a Zehn</h1>
			</main>
			<Footer />
		</div>
	);
};

export default Home;
