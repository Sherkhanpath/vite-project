import React, { useState, useEffect, useRef } from "react";
import "./Pricing.css";
// import "./PricingForm"
import { ScrollTop } from 'primereact/scrolltop';
import "bootstrap/dist/css/bootstrap.min.css";
// import PricingForm from "./PricingForm";
import AdventureForm from "../Visitoption/AdventureForm";

/* Custom Hook */
function useIsVisible(ref) {
  const [isIntersecting, setIntersecting] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIntersecting(entry.isIntersecting);
      },
      {
        rootMargin: "0px 0px -100px 0px",
      }
    );

    if (ref.current) {

      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [ref]);

  return isIntersecting;
}

/* Component */
const PRICING = () => {
  const [scrollY, setScrollY] = useState(0);
  const textRef = useRef(null);
  const isVisible = useIsVisible(textRef);
  const [parallaxOffset, setParallaxOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrollY(currentScrollY);
      setParallaxOffset(currentScrollY * 0.2);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const backgroundStyle = {
    backgroundPositionY: `calc(30% + ${parallaxOffset}px)`,
  };

  return (
    <>
{/* HERO SECTION */}
<div>
<div
className={` pricing-hero ${scrollY > 50 ? "pricing-scroll" : ""}`}
style={backgroundStyle}
>
<main className="pricing-section">
  <div
    ref={textRef}
    className={`pricing-text ${isVisible ? "pricing-visible" : ""}`}
  >
    <h2 className="pricing-subtittle">It’s Time To</h2>
    <h1 className="pricing-tittle">Visit Bali</h1>

    <p className="pricing-desc">
      IT,S TIME TO
      <br />
    CHOOSE 
      <br />
      BALI,
    </p>

   
  </div>
        </main>
      </div>

      {/* fast page  */}
<section className="offer-section text-center">
<div className="container">

<h1 className="offer-title">WHAT WE CAN OFFER</h1>

<p className="offer-text">
Need a place to get away? There is no better corner in the world to hide
from the dull everyday than the magical Bali. Relax on the picturesque
beaches, visit numerous spas and reside in the breathtaking resorts
this location has to offer – and forget all of your worries.
</p>

</div>
</section>


{/* secound page*/}

<section className="relax-section">
<div className="container">

<div className="row align-items-center">

<div className="col-md-6">

<h2 className="relax-title">RELAX IN BALI</h2>

<p className="relax-text">
Amazing, all-inclusive resorts, beautiful beaches and mindfulness
sessions – these are just a few of the things that will help you
relax and enjoy your holiday.
</p>

<button className="btn learn-btn">LEARN MORE</button>

</div>



<div className="col-md-6 text-md-end text-center price-box">

<span className="from">FROM</span>
<span className="price">$420</span>

</div>

</div>

</div>
</section>

{/* thede page  */}

<section className="change-section">
<div className="container">

<h1 className="relax-title">ADVENTURE IN BALI</h1>

<p className="relax-text">
Explore the tropical nature, hop on a scooter to drive around the island or choose
 other activities, such as water sports, to make your holiday memorable.
</p>
<button className="btn learn-btn">LEARN MORE</button>
<div className="col-md-6 text-md-end text-center price-box">

<span className="city">FROM</span>
<span className="number">$569</span>

</div>
</div>
</section>

{/* for page  */}
<section className="relax-section">
<div className="container">

<div className="row align-items-center">

<div className="col-md-6">

<h2 className="relax-title">FEEL THE CULTURE </h2>

<p className="relax-text">
The Balinese culture is ready for the curious – ancient monuments, local festivals and
 exotic food make you leave the island with deeper knowledge of its lifestyle.
</p>

<button className="btn learn-btn">LEARN MORE</button>

</div>


<div className="col-md-6 text-md-end text-center price-box">

<span className="from">FROM</span>
<span className="price">$514</span>


</div>
</div>

</div>
</section>

{/* five page  */}

<section className="contact-section">
<div className="container">
<div className="row align-items-center">


<div className="col-md-6 text-white">

<h2 className="contact-title">CONTACT US</h2>

<p className="contact-text">
Bali is an amazing place to find exactly what you are looking for,
be it relief from stress, an exciting adventure or an immersive culture.
Contact us so we can help you organize a memorable stay at one of
the most magical places on the planet.
</p>

</div>

<div className="col-md-6">
  <AdventureForm/>
</div>

</div>

</div>
</section>
{/* SIX PAGE  */}

   <section className="offer-section text-center">
<div className="container">

<h1 className="offer-title">WHAT THEY SAY ABOUT US</h1>

<p className="offer-text">
How can I begin to describe my time with Poveda... It was simply life-changing! 
I always imagined that Bali would be a breathtaking destination, but thanks to
 Poveda, I was able to not just experience the culture, but have once-in-a-lifetime
  memories. I got so much more than I ever anticipated from my holiday.
</p>

</div>
</section>
 <ScrollTop />
</div>




  
    </>
  );
};



export default PRICING;