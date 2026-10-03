function Testimonials() {
  const testimonials = [
    {
      quote:
        "The team understood our goals quickly and helped us bring a much clearer digital direction to the brand.",
      name: "Marketing Lead",
      role: "Growth-focused Business",
      initials: "ML",
    },
    {
      quote:
        "The experience was smooth from strategy to execution. The communication and attention to detail really stood out.",
      name: "Business Owner",
      role: "Digital Transformation Project",
      initials: "BO",
    },
    {
      quote:
        "We were looking for a team that could combine creativity with a strong business mindset, and that is exactly what we valued.",
      name: "Brand Manager",
      role: "Digital Growth Project",
      initials: "BM",
    },
  ];

  return (
    <section className="testimonials-section" id="testimonials">
      <div className="testimonials-container">

        <div className="testimonials-heading">
          <div>
            <div className="section-label">
              <span></span>
              CLIENT FEEDBACK
            </div>

            <h2>
              Trusted by people
              <br />
              who value <span>results.</span>
            </h2>
          </div>

          <p>
            Strong partnerships are built through clear communication,
            thoughtful execution and a shared focus on meaningful outcomes.
          </p>
        </div>

        <div className="testimonials-grid">
          {testimonials.map((testimonial, index) => (
            <article
              className={`testimonial-card ${
                index === 1 ? "testimonial-featured" : ""
              }`}
              key={testimonial.initials}
            >
              <div className="testimonial-top">
                <div className="quote-mark">“</div>

                <div className="testimonial-stars">
                  ★ ★ ★ ★ ★
                </div>
              </div>

              <p className="testimonial-quote">
                {testimonial.quote}
              </p>

              <div className="testimonial-author">
                <div className="author-avatar">
                  {testimonial.initials}
                </div>

                <div>
                  <strong>{testimonial.name}</strong>
                  <span>{testimonial.role}</span>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="testimonials-bottom">
          <span>BUILT ON TRUST</span>

          <div className="testimonial-line"></div>

          <strong>
            Strategy. Creativity. Results.
          </strong>
        </div>

      </div>
    </section>
  );
}

export default Testimonials;