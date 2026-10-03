function Services() {
  const services = [
    {
      number: "01",
      title: "Digital Marketing",
      description:
        "Build visibility, reach the right audience and turn digital attention into measurable business growth.",
      tags: ["Strategy", "Growth", "Performance"],
    },
    {
      number: "02",
      title: "SEO",
      description:
        "Improve search visibility and attract high-intent customers through sustainable organic growth strategies.",
      tags: ["SEO", "Content", "Analytics"],
    },
    {
      number: "03",
      title: "Web Development",
      description:
        "Create fast, responsive and conversion-focused digital experiences designed around your business goals.",
      tags: ["Web", "UI/UX", "Development"],
    },
    {
      number: "04",
      title: "Content & Social",
      description:
        "Create meaningful content and social experiences that strengthen your brand and engage your audience.",
      tags: ["Content", "Social", "Brand"],
    },
  ];

  return (
    <section className="services-section" id="services">
      <div className="services-container">

        {/* Section Heading */}
        <div className="section-heading">
          <div className="section-label">
            <span></span>
            WHAT WE DO
          </div>

          <div className="services-heading-row">
            <h2>
              Digital solutions
              <br />
              built for <span>growth.</span>
            </h2>

            <p>
              From strategy to execution, we combine creativity, technology
              and data to help businesses build stronger digital experiences.
            </p>
          </div>
        </div>

        {/* Service Cards */}
        <div className="services-grid">
          {services.map((service) => (
            <article className="service-card" key={service.number}>

              <div className="service-top">
                <span className="service-number">
                  {service.number}
                </span>

                <span className="service-arrow">↗</span>
              </div>

              <div className="service-content">
                <h3>{service.title}</h3>

                <p>{service.description}</p>
              </div>

              <div className="service-tags">
                {service.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>

              <div className="service-bottom">
                <span>Explore service</span>
                <span>→</span>
              </div>

            </article>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="services-bottom">
          <p>
            Looking for something specific?
          </p>

          <a href="#contact">
            Let's discuss your project <span>↗</span>
          </a>
        </div>

      </div>
    </section>
  );
}

export default Services;