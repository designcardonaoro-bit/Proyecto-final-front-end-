import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./Pages/Home";
import Events from "./Pages/Events";
import Gallery from "./Pages/Gallery";

import Navbar from "./components/JSX/Navbar";
import Footer from "./components/JSX/footer";
import Button from "./components/JSX/Button";

function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/events" element={<Events />} />
        <Route path="/gallery" element={<Gallery/>} />
      </Routes>
      <Footer />
      <Button />
    </BrowserRouter>
  );
}

export default App;
