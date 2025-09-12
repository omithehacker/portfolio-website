import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import "./styles/global.css";

function App() {
  return (
    <>
      <Navbar />
      <section id="hero"><Hero /></section>
      <About />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
