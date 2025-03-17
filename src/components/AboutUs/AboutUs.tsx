import { useEffect, useRef } from "react";
import "./AboutUs.css";

export default function AboutUs() {
  const sectionRefs = useRef<(HTMLElement | null)[]>([]);
  const timelineRefs = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
    const sections = sectionRefs.current;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-in");
          }
        });
      },
      { threshold: 0.2 }
    );

    sections.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => {
      sections.forEach((section) => {
        if (section) observer.unobserve(section);
      });
    };
  }, []);

  useEffect(() => {
    const timelineItems = timelineRefs.current;

    const timelineObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, index) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add("visible");
            }, index * 150); // Stagger effect (each appears 150ms after the last)
          }
        });
      },
      { threshold: 0.2 }
    );

    timelineItems.forEach((item) => {
      if (item) timelineObserver.observe(item);
    });

    return () => {
      timelineItems.forEach((item) => {
        if (item) timelineObserver.unobserve(item);
      });
    };
  }, []);

  return (
    <div className="about-us-container">
      <section
        className="about-section"
        ref={(el) => {
          sectionRefs.current[0] = el;
        }}>
        <div className="about-content">
          <h1>About ShopiClothi</h1>
          <p className="tagline">Sustainable Style for a Better Tomorrow</p>
        </div>
      </section>

      <section
        className="our-story-section"
        ref={(el) => {
          sectionRefs.current[1] = el;
        }}>
        <div className="section-content">
          <h2>Our Story</h2>
          <div className="story-grid">
            <div className="story-text">
              <p>
                ShopiClothi was born out of a passion for sustainable fashion
                and accessibility. We saw the waste created by fast fashion and
                knew there had to be a better way.
              </p>
              <p>
                Our platform connects fashion lovers with pre-loved,
                high-quality clothing at unbeatable prices, giving garments a
                second chance while reducing fashion waste.
              </p>
            </div>
            <div className="story-image">
              <div className="image-container">
                <div className="floating-shape shape-1"></div>
                <div className="floating-shape shape-2"></div>
                <div className="image-placeholder">
                  <span>Our Mission</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        className="values-section"
        ref={(el) => {
          sectionRefs.current[3] = el;
        }}>
        <div className="section-content">
          <h2>Our Values</h2>
          <div className="values-timeline">
            {[
              {
                title: "Giving Clothes a Second Life",
                text: "We believe that every piece of clothing has a story. By choosing second-hand fashion, you're not just shopping—you're giving pre-loved items a new chapter while reducing waste.",
              },
              {
                title: "Customer First",
                text: "We prioritize our customers' needs and feedback in everything we do, constantly improving our services based on what matters most to you.",
              },
              {
                title: "Authenticity & Transparency",
                text: "We ensure every item is carefully inspected for quality and authenticity. No hidden surprises—just honest, second-hand fashion that you can trust.",
              },
              {
                title: "Style for Everyone",
                text: "Fashion has no limits. We celebrate individuality, offering unique finds for every style, size, and preference—because second-hand shopping should be for everyone.",
              },
            ].map((item, index) => (
              <div
                key={index}
                ref={(el) => {
                  timelineRefs.current[index] = el;
                }}
                className="timeline-item">
                <div className="timeline-marker"></div>
                <div className="timeline-content">
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        className="stats-section"
        ref={(el) => {
          sectionRefs.current[5] = el;
        }}>
        <div className="section-content">
          <h2>ShopiClothi by the Numbers</h2>
          <div className="stats-grid">
            <div className="stat-card">
              <div className="stat-number">10K+</div>
              <div className="stat-label">Happy Customers</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">5K+</div>
              <div className="stat-label">Products Sold</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">10+</div>
              <div className="stat-label">Countries Served</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">98%</div>
              <div className="stat-label">Satisfaction Rate</div>
            </div>
          </div>
        </div>
      </section>
      
      <section
        className="join-us-section"
        ref={(el) => {
          sectionRefs.current[6] = el;
        }}>
        <div className="section-content">
          <h2>Join the ShopiClothi Movement</h2>
          <p>
            Shop smarter, shop greener. Find your next favorite outfit today or
            start selling your pre-loved clothes.
          </p>
          <div className="cta-buttons">
            <a href="/sign-up" className="cta-button primary">
              Start Shopping
            </a>
            <a href="/sell" className="cta-button secondary">
              Become a Seller
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
