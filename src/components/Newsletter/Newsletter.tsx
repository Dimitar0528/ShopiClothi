import "./Newsletter.css";
import { Link } from "react-router";
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
              type="email"
              placeholder="Enter your email"
              className="newsletter-input"
              required
              pattern="^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$"
              title="Please enter a valid email address."
            />
            <button type="submit" className="newsletter-button">
              Subscribe
            </button>
          </div>

          <div className="newsletter-policy">
            We care about your data in our{" "}
            <Link to="/privacy-policy" className="newsletter-link">
              privacy policy
            </Link>
            .
          </div>
        </div>
      </div>
    </div>
  );
};

