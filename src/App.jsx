import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Accueil from "./pages/Accueil";
import Contact from "./pages/Contact";
import QSN from "./pages/QSN";
import Services from "./pages/Services";
import Devis from "./pages/Devis";
import "./styles/index.css";


function App() {

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Accueil />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/qsn" element={<QSN />} />
        <Route path="/services" element={<Services />} />
        <Route path="/devis" element={<Devis />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
