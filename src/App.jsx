import React from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Accueil from "./pages/Accueil";
import Contact from "./pages/Contact";
// import Services from "./pages/Services";
// import Contact from "./pages/Contact";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Accueil />} />
        <Route path="/contact" element={<Contact />} />
        {/* <Route path="/services" element={<Services />} /> */}
      </Routes>
      <Footer />
    </>
  );
}

export default App;
