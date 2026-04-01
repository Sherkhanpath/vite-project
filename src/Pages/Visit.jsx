import React, { useState, useEffect, useRef } from "react";
import "./Visit.css";
import "bootstrap/dist/css/bootstrap.min.css";

/* Custom Hook for Scroll Animation */
function useIsVisible(ref) {
  const [isIntersecting, setIntersecting] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIntersecting(entry.isIntersecting),
      { rootMargin: "0px 0px -100px 0px" }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [ref]);
  return isIntersecting;
}
const VISIT = () => {
  const [parallaxOffset, setParallaxOffset] = useState(0);
  const heroRef = useRef(null);
  const isVisible = useIsVisible(heroRef);

  useEffect(() => {
    const handleScroll = () => setParallaxOffset(window.scrollY * 0.3);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const sections = [
    {
      title: "ADVENTURE",
      desc: "Explore the wild side of Bali with trekking and water sports.",
      bg: "#f4f9f1",
      textColor: "#666",
      imgPlaceholder:
        "https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "CULTURE",
      desc: "Experience ancient traditions and local Balinese festivals.",
      bg: "#5c6854",
      textColor: "white",
      imgPlaceholder:
        "https://images.unsplash.com/photo-1537953773345-d172ccf13cf1?auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "RELAX",
      desc: "Unwind at the most premium spas and quiet beaches.",
      bg: "#e6e8e5",
      textColor: "#4a4f45",
      imgPlaceholder:
        "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80"
    }
  ];

  return (
    <div className="visit-wrapper">

      {/* HERO SECTION */}
      <div
        className="visit-hero"
        style={{ backgroundPositionY: `calc(50% + ${parallaxOffset}px)` }}
      >
        <div
          ref={heroRef}
          className={`hero-content ${isVisible ? "visible" : ""}`}
        >
          <h2 className="visit-subtitle">Discover Your</h2>
          <h1 className="visit-title">BALI JOURNEY</h1>
        </div>
      </div>

      {/* SECTIONS */}
      {sections.map((item, index) => (
        <section
          key={index}
          className="visit-section"
          style={{ backgroundColor: item.bg, color: item.textColor }}
        >
          <div className="container">
            <div
              className={`row align-items-center ${
                index % 2 !== 0 ? "flex-row-reverse" : ""
              }`}
            >
              {/* Text */}
              <div className="col-md-6 p-5">
                <h2 className="section-label">{item.title}</h2>
                <p className="section-desc">{item.desc}</p>
                <button
                  className="visit-btn"
                  style={{
                    borderColor: item.textColor,
                    color: item.textColor
                  }}
                >
                  EXPLORE MORE
                </button>
              </div>

              {/* Image */}
              <div className="col-md-6">
                <div className="image-box">
                  <img
                    src={item.imgPlaceholder}
                    alt={item.title}
                    className="img-fluid"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}
    </div>
  );
};

export default VISIT;