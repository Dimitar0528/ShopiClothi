import { useState} from "react";
import "./ContactUs.css";

export default function ContactUs() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    message: "",
  });
  const [formErrors, setFormErrors] = useState({
    fullName: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);


  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Clear error when user starts typing
    if (formErrors[name as keyof typeof formErrors]) {
      setFormErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const validateForm = () => {
    let isValid = true;
    const errors = {
      fullName: "",
      email: "",
      message: "",
    };

    // Validate full name
    if (!formData.fullName.trim()) {
      errors.fullName = "Full name is required";
      isValid = false;
    }

    // Validate email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      errors.email = "Email is required";
      isValid = false;
    } else if (!emailRegex.test(formData.email)) {
      errors.email = "Please enter a valid email address";
      isValid = false;
    }

    // Validate message
    if (!formData.message.trim()) {
      errors.message = "Message is required";
      isValid = false;
    } else if (formData.message.trim().length < 10) {
      errors.message = "Message must be at least 10 characters";
      isValid = false;
    }

    setFormErrors(errors);
    return isValid;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (validateForm()) {
      setIsSubmitting(true);

      // Simulate API call
      setTimeout(() => {
        setIsSubmitting(false);
        setIsSubmitted(true);
        setFormData({
          fullName: "",
          email: "",
          message: "",
        });

        // Reset submission status after 5 seconds
        setTimeout(() => {
          setIsSubmitted(false);
        }, 5000);
      }, 1500);
    }
  };

  return (
    <div className="contact-us-container">
      <section
        className="contact-hero">
        <div className="contact-hero-content">
          <h1>Get in Touch</h1>
          <p>
            We'd love to hear from you! Send us a message and we'll respond as
            soon as possible.
          </p>
        </div>
      </section>

      <section
        className="contact-info-section">
        <div className="section-content">
          <div className="contact-grid">
            <div className="contact-form-container">
              <h2>Send Us a Message</h2>

              {isSubmitted ? (
                <div className="success-message">
                  <div className="success-icon">
                    <i className="fa fa-check-circle" aria-hidden="true"></i>
                  </div>
                  <h3>Thank You!</h3>
                  <p>
                    Your message has been sent successfully. We'll get back to
                    you soon.
                  </p>
                </div>
              ) : (
                <form className="contact-form" onSubmit={handleSubmit}>
                  <div className="form-group">
                    <label htmlFor="fullName">Full Name</label>
                    <input
                      type="text"
                      id="fullName"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      placeholder="Your full name"
                      className={formErrors.fullName ? "error" : ""}
                    />
                    {formErrors.fullName && (
                      <span className="error-message">
                        {formErrors.fullName}
                      </span>
                    )}
                  </div>

                  <div className="form-group">
                    <label htmlFor="email">Email Address</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Your email address"
                      className={formErrors.email ? "error" : ""}
                    />
                    {formErrors.email && (
                      <span className="error-message">{formErrors.email}</span>
                    )}
                  </div>

                  <div className="form-group">
                    <label htmlFor="message">Message</label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Your message"
                      rows={5}
                      className={formErrors.message ? "error" : ""}></textarea>
                    {formErrors.message && (
                      <span className="error-message">
                        {formErrors.message}
                      </span>
                    )}
                  </div>

                  <button
                    type="submit"
                    className="submit-button"
                    disabled={isSubmitting}>
                    {isSubmitting ? (
                      <>
                        <span className="spinner"></span>
                        Sending...
                      </>
                    ) : (
                      "Send Message"
                    )}
                  </button>
                </form>
              )}
            </div>

            <div className="contact-details">
              <div className="contact-card">
                <div className="contact-icon">
                  <i className="fa fa-envelope" aria-hidden="true"></i>
                </div>
                <h3>Email Us</h3>
                <a
                  style={{
                    textDecoration: "underline",
                    textUnderlineOffset: "6px",
                  }}
                  href="mailto:shopi.clothi@gmail.com">
                  shopi.clothi@gmail.com
                </a>
              </div>
              <div className="contact-card">
                <div className="contact-icon">
                  <i className="fa fa-map-marker" aria-hidden="true"></i>
                </div>
                <h3>Our Location</h3>
                <p>Cherni Vrah 88, Sofia, Bulgaria</p>
                <div className="map-container">
                  <iframe
                    title="ShopiClothi Location"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2934.6804549297686!2d23.31769107602708!3d42.65941027119319!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40aa857b4b9b5bff%3A0x7c8c7d2f5a5f3b59!2sCherni%20Vrah%2088%2C%20Sofia%2C%20Bulgaria!5e0!3m2!1sen!2sbg!4v1700000000000"
                    height="270"
                    style={{
                      border: 0,
                      marginTop: "10px",
                      borderRadius: "8px",
                    }}
                    allowFullScreen
                    loading="lazy"></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
