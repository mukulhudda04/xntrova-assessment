function About() {
  return (
    <section className="about-section" id="about">
      <div className="about-container">

        {/* Left Side */}
        <div className="about-intro">
          <div className="section-label">
            <span></span>
            ABOUT XNTROVA
          </div>

          <h2>
            Ideas that create
            <span> real impact.</span>
          </h2>

          <p>
            We believe great digital experiences start with understanding
            people, business goals and what truly matters.
          </p>

          <a href="#contact" className="about-link">
            Let's grow together
            <span>↗</span>
          </a>
        </div>

        {/* Right Side */}
        <div className="about-content">

          <p className="about-main-text">
            Xntrova brings together creativity, strategy and technology to
            help businesses build meaningful digital experiences. Our approach
            is rooted in fresh ideas, clear planning and a strong focus on
            measurable outcomes.
          </p>

          <p className="about-secondary-text">
            From improving visibility to generating quality leads, we focus on
            creating digital solutions that connect with audiences, strengthen
            brands and support long-term business growth.
          </p>

          <div className="about-features">

            <div className="about-feature">
              <div className="feature-icon">✦</div>

              <div>
                <h3>Creative Thinking</h3>
                <p>
                  Fresh ideas that make brands more meaningful.
                </p>
              </div>
            </div>

            <div className="about-feature">
              <div className="feature-icon">◉</div>

              <div>
                <h3>Strategic Planning</h3>
                <p>
                  Clear strategies built around business goals.
                </p>
              </div>
            </div>

            <div className="about-feature">
              <div className="feature-icon">↗</div>

              <div>
                <h3>Data-Driven Decisions</h3>
                <p>
                  Decisions supported by insights and performance data.
                </p>
              </div>
            </div>

            <div className="about-feature">
              <div className="feature-icon">⌁</div>

              <div>
                <h3>Measurable Results</h3>
                <p>
                  Focus on outcomes that create lasting value.
                </p>
              </div>
            </div>

          </div>

        </div>

      </div>

      {/* Bottom Statement */}
      <div className="about-statement">
        <span>OUR APPROACH</span>

        <strong>
          Creativity meets data.
          <em> Strategy meets execution.</em>
        </strong>
      </div>

    </section>
  );
}

export default About;