function Hero() {
  return (
    <section className="hero" id="hero">
      <div className="hero-glow hero-glow-one"></div>
      <div className="hero-glow hero-glow-two"></div>

      <div className="hero-container">

        <div className="hero-content">

          <div className="hero-badge">
            <span className="badge-dot"></span>
            Digital Growth Partner
          </div>

          <h1>
            We Build Digital
            <span> Experiences </span>
            That Drive Growth.
          </h1>

          <p className="hero-description">
            Xntrova combines strategy, technology and creativity to help
            ambitious businesses build stronger digital brands and achieve
            measurable growth.
          </p>

          <div className="hero-actions">
            <a href="#contact" className="primary-btn">
              Start a Project
              <span>↗</span>
            </a>

            <a href="#work" className="secondary-btn">
              Explore Our Work
              <span>↓</span>
            </a>
          </div>

          <div className="hero-trust">
            <div className="trust-avatars">
              <span>1</span>
              <span>2</span>
              <span>3</span>
            </div>

            <div>
              <strong>500+ Happy Clients</strong>
              <p>Trusted by growing businesses</p>
            </div>
          </div>

        </div>

        <div className="hero-visual">
          <div className="hero-orbit orbit-one"></div>
          <div className="hero-orbit orbit-two"></div>
          <div className="hero-orbit orbit-three"></div>

          <div className="hero-center">
            <span>XN</span>
            <small>
              DRIVEN BY
              <br />
              RESULTS
            </small>
          </div>

          <div className="floating-card card-one">
            <div className="card-icon">↗</div>

            <div>
              <strong>+120%</strong>
              <span>Growth</span>
            </div>
          </div>

          <div className="floating-card card-two">
            <div className="card-icon">◉</div>

            <div>
              <strong>500+</strong>
              <span>Clients</span>
            </div>
          </div>

          <div className="floating-card card-three">
            <div className="card-icon">✦</div>

            <div>
              <strong>120+</strong>
              <span>Projects</span>
            </div>
          </div>
        </div>

      </div>

      <div className="hero-stats">

        <div className="hero-stat">
          <strong>120+</strong>
          <span>Projects Delivered</span>
        </div>

        <div className="hero-stat">
          <strong>500+</strong>
          <span>Happy Clients</span>
        </div>

        <div className="hero-stat">
          <strong>10+</strong>
          <span>Years of Experience</span>
        </div>

        <div className="hero-stat">
          <strong>24/7</strong>
          <span>Support & Strategy</span>
        </div>

      </div>
    </section>
  );
}

export default Hero;