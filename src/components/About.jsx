const About = () => {
  return (
    <section className="about" id="about">
      <div className="about-container">
        <div className="about-image">
          <img src="/images/about-img.jpg" alt="Omolade Aboaba" />
        </div>

        <div className="about-content">
          <h2>About Me</h2>
          <p>
            I am <span>Omolade Aboaba</span>, a passionate and detail-oriented{" "}
            <strong>Software Engineering</strong> graduate with a Distinction in
            my Advanced Diploma. My journey so far has equipped me with strong
            skills in web development, testing, and problem-solving.
          </p>
          <p>
            I enjoy building scalable web applications, ensuring high-quality
            software through testing, and continuously learning new
            technologies. Beyond technical skills, I value creativity,
            collaboration, and a growth mindset—qualities that help me
            contribute effectively to any team or project I join.
          </p>

          <div className="about-highlights">
            <div className="highlight">
              <i className="fas fa-code"></i>
              <h4>Clean Code</h4>
              <p>Writing scalable & maintainable solutions</p>
            </div>
            <div className="highlight">
              <i className="fas fa-laptop-code"></i>
              <h4>Frontend Magic</h4>
              <p>Building responsive & eye-catching UIs</p>
            </div>
            <div className="highlight">
              <i className="fas fa-database"></i>
              <h4>Backend Power</h4>
              <p>APIs, databases, and smooth integrations</p>
            </div>
          </div>

          <div className="btn-group">
            <a href="/Omolade_Aboaba_CV.pdf" download>
              Download CV
            </a>
            <a href="#contact">Let’s Talk</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
