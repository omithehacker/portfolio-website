import React from "react";

const Hero = () => {
  return (
    <section className="hero">
      <img
        src="/images/my-image.jpg"
        alt="Omolade Aboaba"
        className="hero-image"
      />

      <h1 className="hero-title">Omolade Aboaba</h1>
      <h2 className="hero-subtitle">Software Engineer | Web Developer | QA Tester</h2>

   <p className="hero-description">
  Experienced and passionate about building scalable, high-performing web applications with a focus on clean code, efficiency, and reliable testing.
   </p>

      <div className="btn-group">
        <a href="#projects" className="btn primary">View My Work</a>
      </div>
    </section>
  );
};

export default Hero;
