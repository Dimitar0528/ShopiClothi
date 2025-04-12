import "./Hero.css";
import NetworkAnimation from "./NetworkAnimation";

export default function Hero() {
  return (
    <>
      <section className="hero">
        <NetworkAnimation />
        <div className="hero-content">
          <div className="hero-content-inner">
            <header className="heading">
              <h1>Year-Round Sustainable Style</h1>
            </header>
            <p>
              <span>ShopiClothi</span> makes it easy to find great second-hand
              clothes to update your look. Curated to match your unique style
              while keeping the planet in mind.
            </p>
            <a href="#featured" className="btn">
              <span>Start dressing well</span>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
