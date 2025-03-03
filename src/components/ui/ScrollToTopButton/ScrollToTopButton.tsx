import { useState, useEffect } from "react";
import "./ScrollToTopButton.css";

export default function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.scrollY > 800) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const controller = new AbortController();
    window.addEventListener("scroll", toggleVisibility, {signal: controller.signal});
    return () => {
     controller.abort()
    };
  }, []);

  return (
    <div className="scrollToTop">
      <button
        onClick={scrollToTop}
        className={`scrollButton ${isVisible ? "show" : ""}`}
        title="Scroll to top">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="22"
          height="22"
          viewBox="0 0 24 24">
          <path
            fill="currentColor"
            d="M2 20v2h20v-2h-9V5.83l5.5 5.5l1.42-1.41L12 2L4.08 9.92l1.42 1.41l5.5-5.5V20z"
          />
        </svg>
      </button>
    </div>
  );
}
