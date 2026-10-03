function Portfolio() {
  const projects = [
    {
      number: "01",
      category: "Digital Growth",
      title: "Brand Growth Campaign",
      description:
        "A performance-focused digital strategy designed to increase visibility, engagement and qualified leads.",
      type: "growth",
    },
    {
      number: "02",
      category: "Web Experience",
      title: "Modern Digital Experience",
      description:
        "A conversion-focused website experience built around clear messaging, intuitive navigation and strong visual identity.",
      type: "web",
    },
    {
      number: "03",
      category: "SEO & Content",
      title: "Organic Growth Strategy",
      description:
        "A data-led SEO and content approach focused on improving discoverability and reaching high-intent audiences.",
      type: "seo",
    },
  ];

  return (
    <section className="portfolio-section" id="work">
      <div className="portfolio-container">

        {/* Heading */}
        <div className="portfolio-heading">
          <div>
            <div className="section-label">
              <span></span>
              SELECTED WORK
            </div>

            <h2>
              Work that makes
              <br />
              an <span>impact.</span>
            </h2>
          </div>

          <div className="portfolio-heading-right">
            <p>
              A selection of digital experiences, strategies and growth
              initiatives built to solve real business challenges.
            </p>

            <a href="#contact">
              Discuss your project <span>↗</span>
            </a>
          </div>
        </div>

        {/* Projects */}
        <div className="portfolio-grid">
          {projects.map((project) => (
            <article
              className={`portfolio-card portfolio-${project.type}`}
              key={project.number}
            >
              <div className="portfolio-visual">

                <div className="portfolio-pattern">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>

                <div className="portfolio-project-number">
                  {project.number}
                </div>

                <div className="portfolio-visual-center">
                  {project.type === "growth" && (
                    <>
                      <div className="growth-chart">
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                      </div>
                      <small>GROWTH</small>
                    </>
                  )}

                  {project.type === "web" && (
                    <>
                      <div className="browser-window">
                        <i></i>
                        <i></i>
                        <i></i>
                        <div></div>
                      </div>
                      <small>EXPERIENCE</small>
                    </>
                  )}

                  {project.type === "seo" && (
                    <>
                      <div className="seo-ring">
                        <strong>SEO</strong>
                      </div>
                      <small>DISCOVERABILITY</small>
                    </>
                  )}
                </div>

                <div className="portfolio-arrow">↗</div>
              </div>

              <div className="portfolio-info">
                <span>{project.category}</span>

                <h3>{project.title}</h3>

                <p>{project.description}</p>

                <a href="#contact">
                  View case study <span>→</span>
                </a>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Portfolio;