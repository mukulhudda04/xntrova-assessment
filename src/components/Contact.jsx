import { useState } from "react";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    setSubmitted(true);

    setFormData({
      name: "",
      email: "",
      company: "",
      message: "",
    });
  };

  return (
    <section className="contact-section" id="contact">
      <div className="contact-container">

        <div className="contact-heading">
          <div className="section-label">
            <span></span>
            GET IN TOUCH
          </div>

          <h2>
            Let's start a
            <br />
            <span>conversation.</span>
          </h2>

          <p>
            Tell us a little about your project and what you're looking
            to achieve. We'll take it from there.
          </p>

          <div className="contact-info">
            <div>
              <span>EMAIL</span>
              <a href="mailto:hello@xntrova.com">
                hello@xntrova.com
              </a>
            </div>

            <div>
              <span>AVAILABILITY</span>
              <strong>Open for new projects</strong>
            </div>
          </div>
        </div>

        <div className="contact-form-wrapper">

          {submitted ? (
            <div className="form-success">
              <div className="success-icon">✓</div>

              <h3>Thanks for reaching out!</h3>

              <p>
                Your enquiry has been received. Our team will get
                back to you soon.
              </p>

              <button
                type="button"
                onClick={() => setSubmitted(false)}
              >
                Send another enquiry
                <span>↗</span>
              </button>
            </div>
          ) : (
            <form className="contact-form" onSubmit={handleSubmit}>

              <div className="form-row">
                <div className="form-field">
                  <label htmlFor="name">Your Name</label>

                  <input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Enter your name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-field">
                  <label htmlFor="email">Email Address</label>

                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="you@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className="form-field">
                <label htmlFor="company">Company / Brand</label>

                <input
                  id="company"
                  name="company"
                  type="text"
                  placeholder="Your company name"
                  value={formData.company}
                  onChange={handleChange}
                />
              </div>

              <div className="form-field">
                <label htmlFor="message">Tell us about your project</label>

                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  placeholder="What would you like to build or improve?"
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>

              <button type="submit" className="contact-submit">
                Send Enquiry
                <span>↗</span>
              </button>

              <p className="form-note">
                By submitting this form, you agree to be contacted
                regarding your enquiry.
              </p>

            </form>
          )}

        </div>
      </div>
    </section>
  );
}

export default Contact;