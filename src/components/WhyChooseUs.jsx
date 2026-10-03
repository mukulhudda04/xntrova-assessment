function WhyChooseUs() {
  const benefits = [
    {
      number: "01",
      title: "Strategy First",
      description:
        "Every project starts with a clear understanding of your goals, audience and business challenges.",
    },
    {
      number: "02",
      title: "Creative Thinking",
      description:
        "We turn insights into meaningful digital experiences that help your brand stand apart.",
    },
    {
      number: "03",
      title: "Data Driven",
      description:
        "We use performance data and insights to make smarter decisions and continuously improve.",
    },
    {
      number: "04",
      title: "Built for Results",
      description:
        "Our work is focused on measurable outcomes that support sustainable business growth.",
    },
  ];

  return (
    <section className="why-section" id="why-us">
      <div className="why-container">

        {/* Heading */}
        <div className="why-heading">
          <div>
            <div className="section-label">
              <span></span>
              WHY XNTROVA
            </div>

            <h2>
              More than an agency.
              <br />
              <span>A growth partner.</span>
            </h2>
          </div>

          <p>
            We bring strategy, creativity, technology and data together to
            create digital solutions that move businesses forward.
          </p>
        </div>

        {/* Benefits */}
        <div className="benefits-list">
          {benefits.map((benefit) => (
            <article className="benefit-item" key={benefit.number}>

              <div className="benefit-number">
                {benefit.number}
              </div>

              <div className="benefit-main">
                <h3>{benefit.title}</h3>

                <p>{benefit.description}</p>
              </div>

              <div className="benefit-arrow">
                ↗
              </div>

            </article>
          ))}
        </div>

        {/* Bottom statement */}
        <div className="why-bottom">
          <div className="why-metric">
            <strong>01</strong>
            <span>Clear Strategy</span>
          </div>

          <div className="why-metric">
            <strong>02</strong>
            <span>Creative Execution</span>
          </div>

          <div className="why-metric">
            <strong>03</strong>
            <span>Continuous Improvement</span>
          </div>

          <div className="why-metric">
            <strong>04</strong>
            <span>Measurable Growth</span>
          </div>
        </div>

      </div>
    </section>
  );
}

export default WhyChooseUs;