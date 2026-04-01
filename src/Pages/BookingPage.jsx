
import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { ScrollTop } from 'primereact/scrolltop';
import "./BookingPage.css";
import "bootstrap/dist/css/bootstrap.min.css";
// import "./Booking"
import Booking from "./Booking";

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
function BookingPage() {
  
  const navigate = useNavigate();

      const [parallaxOffset, setParallaxOffset] = useState(0);
      const heroRef = useRef(null);
      const isVisible = useIsVisible(heroRef);
    
      useEffect(() => {
        const handleScroll = () => setParallaxOffset(window.scrollY * 0.3);
        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
      }, []);
    
  return (
    <>
    <div>
        <div
        className="booking-hero"
        style={{ backgroundPositionY: `calc(50% + ${parallaxOffset}px)` }}
      >
        <div
          ref={heroRef}
          className={`hero-content ${isVisible ? "visible" : ""}`}
        >
            <h2 className="visit-subtitle">BALI JOURNEY</h2>
  <h1 className="visit-title">BOOKING NOW</h1>

  <div className="circle-wrapper">
  <div className="circle-btn" onClick={() => navigate("/bookingnow")}>
    {/* <span>BOOK NOW</span> */}
  </div>
</div>

        </div>
      </div>
      

      {/* section 2 */}
      {/* <div className="col-md-12">
  <Booking/>
</div> */}
   {/* section 3  */}
      <section className="offer-section text-center">
<div className="container">
<h1 className="offer-title">CARI SURF CAMP </h1>
</div>
</section>
   {/* section 4 */}
     <section className="row g-0 align-items-center bg-dark-green">
    <div className="col-md-6 p-0">
      <img src="https://images.unsplash.com/photo-1549294413-26f195200c16?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8aG90ZWx8ZW58MHx8MHx8fDA%3D" alt="Bike" className="img-fluid w-100 h-100 object-fit-cover" />
    </div>
    <div className="col-md-6 content-padding text-white">
      <h2 className="grid-title">CARI  <br/> THE Search</h2>
      <p className="grid-text">
       wallcome to CARI SURF CAMP -Unlocking the Best Surf Experience in Padang Padang, Bali . 
      Derived from the Indonesian word meaning 'search,'
       CARI embodies our mission to help you find the ultimate surf adventure whether your are a
        beginner surfer or you are looking for advanced and intensive surf coaching. With personalized surf guiding,
         private accommodations, and a prime location near Bingin Beach, Uluwatu and bustling Padang Padang,
          embark with us on a transformative journey like no other.
       Join us at CARI Surf Camp and let your search for the perfect wave begin.
      </p>
    </div>
  </section>

  

 <ScrollTop />
</div>
    </>
  )
}

export default BookingPage
