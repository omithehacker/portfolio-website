import React from "react";

const Contact = () => {
  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const data = new FormData(form);

    const response = await fetch("https://formspree.io/f/xvgbyayp", {
      method: "POST",
      body: data,
      headers: { Accept: "application/json" },
    });

    if (response.ok) {
      alert("✅ Thank you! Your message has been sent.");
      form.reset();
    } else {
      alert("❌ Oops! Something went wrong. Please try again.");
    }
  };

  return (
    <section id="contact" className="contact">
      <h2>Contact Me</h2>
      <p className="contact-intro">
        Have an idea, a project, or just want to say hi? I’d love to hear from
        you! 🚀
      </p>

      <div className="contact-card">
        <form id="contactForm" className="contact-form" onSubmit={handleSubmit}>
          <input type="text" name="name" placeholder="Your Name" required />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea name="message" placeholder="Your Message" required></textarea>
          <button type="submit">Send Message</button>
        </form>
      </div>

      <div className="social-links">
        <a
          href="https://github.com/omithehacker"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-github"></i>
        </a>
        <a
          href="https://www.linkedin.com/in/omolade-aboaba-15a359273/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-linkedin"></i>
        </a>
      </div>
    </section>
  );
};

export default Contact;
