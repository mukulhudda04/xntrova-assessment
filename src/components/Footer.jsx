function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        <div className="footer-main">

          <div className="footer-brand">
            <a href="#home" className="footer-logo">
              XNTROVA<span>.</span>
            </a>

            <p>
              Strategy, creativity and technology working together
              to build better digital experiences.
            </p>

            <a href="#contact" className="footer-cta">
              Start a Project
              <span>↗</span>
            </a>
          </div>

          <div className="footer-links">
            <div className="footer-column">
              <h4>Explore</h4>

              <a href="#home">Home</a>
              <a href="#services">Services</a>
              <a href="#about">About</a>
              <a href="#work">Work</a>
            </div>

            <div className="footer-column">
              <h4>Company</h4>

              <a href="#why-us">Why Xntrova</a>
              <a href="#process">Process</a>
              <a href="#testimonials">Testimonials</a>
              <a href="#contact">Contact</a>
            </div>

            <div className="footer-column">
              <h4>Services</h4>

              <a href="#services">Digital Marketing</a>
              <a href="#services">SEO</a>
              <a href="#services">Web Development</a>
              <a href="#services">Content & Social</a>
            </div>
          </div>

        </div>

        <div className="footer-contact-strip">
          <span>HAVE A PROJECT IN MIND?</span>

          <a href="mailto:hello@xntrova.com">
            hello@xntrova.com
            <span>↗</span>
          </a>
        </div>

        <div className="footer-bottom">
          <p>
            © {new Date().getFullYear()} Xntrova Technologies. All rights
            reserved.
          </p>

          <div className="footer-bottom-links">
            <a href="#home">Privacy</a>
            <a href="#home">Terms</a>
          </div>

          <a href="#home" className="back-to-top">
            Back to top
            <span>↑</span>
          </a>
        </div>

      </div>
    </footer>
  );
}

export default Footer;