import "./Newsletter.css";

export default function Newsletter(){
  return (
    <div className="newsletter-container">
      <div className="newsletter-inner">
        <div className="newsletter-left">
          <div className="newsletter-heading">Join our newsletter</div>
          <div className="newsletter-subheading">
            Stay updated with everything about our website and products.
          </div>
        </div>

        <div className="newsletter-right">
          <div className="newsletter-form">
            <input
              type="text"
              placeholder="Enter your email"
              className="newsletter-input"
            />
            <button type="submit" className="newsletter-button">
              Subscribe
            </button>
          </div>

          <div className="newsletter-policy">
            We care about your data in our{" "}
            <u
              style={{ textUnderlineOffset: ".3rem" }}
              className="newsletter-link">
              privacy policy
            </u>
            .
          </div>
        </div>
      </div>
    </div>
  );
};

