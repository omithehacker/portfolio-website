import React, { useState } from "react";

const projects = [
  {
    name: "Coffee Website",
    desc: "A sleek coffee shop website with stylish landing page and smooth navigation.",
    images: ["/images/coffee1.png", "/images/coffee2.png", "/images/coffee3.png"],
    demo: "https://de-cafe.vercel.app/"
  },
  {
    name: "Carvan Website",
    desc: "An online car marketplace for brands, models, and pre-owned cars.",
    images: ["/images/carvan1.png", "/images/carvan2.png", "/images/carvan3.png"],
    demo: "https://carvan-seven.vercel.app/"
  }
];

export default function Projects() {
  const [lightboxImg, setLightboxImg] = useState(null);

  return (
    <section id="projects" className="projects">
      <h2>Projects</h2>
      <div className="project-grid">
        {projects.map((project, i) => (
          <div className="project-card" key={i}>
            <h3>{project.name}</h3>
            <p>{project.desc}</p>

            <div className="image-grid">
              {project.images.map((img, index) => (
                <img
                  key={index}
                  src={img}
                  alt={`${project.name} screenshot ${index + 1}`}
                  onClick={() => setLightboxImg(img)}
                />
              ))}
            </div>

            <a href={project.demo} target="_blank" rel="noopener noreferrer" className="demo-btn">
              Live Demo →
            </a>
          </div>
        ))}
      </div>

      {lightboxImg && (
        <div className="lightbox" onClick={() => setLightboxImg(null)}>
          <img src={lightboxImg} alt="Project Preview" />
        </div>
      )}
    </section>
  );
}
