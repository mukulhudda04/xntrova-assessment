function Process() {
  const steps = [
    {
      number: "01",
      title: "Discover",
      description:
        "We understand your business, audience, goals and the challenges standing between you and growth.",
    },
    {
      number: "02",
      title: "Plan",
      description:
        "We turn insights into a clear strategy, defining priorities, creative direction and measurable objectives.",
    },
    {
      number: "03",
      title: "Create",
      description:
        "Our team brings the strategy to life through thoughtful design, content, technology and digital experiences.",
    },
    {
      number: "04",
      title: "Optimize",
      description:
        "We measure performance, learn from the data and continuously improve what we build.",
    },
  ];

  return (
    <section className="process-section" id="process">
      <div className="process-container">

        {/* Heading */}
        <div className="process-heading">
          <div>
            <div className="section-label">
              <span></span>
              OUR PROCESS
            </div>

            <h2>
              From idea
              <br />
              to <span>impact.</span>
            </h2>
          </div>

          <p>
            A simple, transparent process designed to turn ideas into
            meaningful digital outcomes.
          </p>
        </div>

        {/* Process Steps */}
        <div className="process-grid">
          {steps.map((step, index) => (
            <article className="process-card" key={step.number}>

              <div className="process-card-top">
                <span>{step.number}</span>

                {index < steps.length - 1 && (
                  <div className="process-line"></div>
                )}
              </div>

              <div className="process-icon">
                {index === 0 && "⌕"}
                {index === 1 && "⌁"}
                {index === 2 && "✦"}
                {index === 3 && "↗"}
              </div>

              <h3>{step.title}</h3>

              <p>{step.description}</p>

              <span className="process-step">
                STEP {step.number}
              </span>

            </article>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="process-cta">
          <div>
            <span>READY TO START?</span>
            <strong>Let's turn your idea into impact.</strong>
          </div>

          <a href="#contact">
            Start a conversation
            <span>↗</span>
          </a>
        </div>

      </div>
    </section>
  );
}

export default Process;