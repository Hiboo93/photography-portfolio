import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Home from "../../pages/home/Home";
import About from "../../pages/about/About";
import Portfolio from "../../pages/portfolio/Portfolio";
import Contact from "../../pages/contact/Contact";
import { AnimatePresence } from "motion/react";

const AnimeRoutes = () => {
  const location = useLocation();
  return (
    <AnimatePresence initial={true} mode="wait">
      <Routes key={location.pathname} location={location}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </AnimatePresence>
  );
};

export default AnimeRoutes;
