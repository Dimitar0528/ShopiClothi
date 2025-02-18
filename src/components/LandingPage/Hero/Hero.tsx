import { Link } from "react-router";
import "./Hero.css";

export default function Hero() {
  return (
    <>
      <div className="hero">
        <div className="hero-content">
          <div className="hero-content-inner">
            <div className="heading">
              <h1>Year-Round Sustainable Style</h1>
            </div>
            <p>
              <span>ShopiClothi</span> makes it easy to find great
              second-hand clothes to update your look. Curated to match your
              unique style while keeping the planet in mind.
            </p>
            <Link to='/' className="btn">
              <span>Start dressing well</span>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};
