function CTA() {
  return (
    <section className="cta-section" id="cta">
      <div className="cta-container">
        <div className="cta-label">
          <span></span>
          HAVE A PROJECT IN MIND?
        </div>

        <div className="cta-content">
          <h2>
            Let's build something
            <span> meaningful.</span>
          </h2>

          <p>
            Have an idea, a challenge or a growth goal?
            Let's talk about how we can turn it into a digital experience
            that delivers real value.
          </p>

          <a href="#contact" className="cta-button">
            Start a Project
            <span>↗</span>
          </a>
        </div>

        <div className="cta-decoration">
          <div className="cta-circle cta-circle-one"></div>
          <div className="cta-circle cta-circle-two"></div>
          <div className="cta-circle cta-circle-three"></div>

          <div className="cta-center">
            <span>XN</span>
            <small>LET'S<br />CREATE</small>
          </div>
        </div>

        <div className="cta-bottom">
          <span>READY WHEN YOU ARE</span>
          <span>↘</span>
        </div>
      </div>
    </section>
  );
}

export default CTA;