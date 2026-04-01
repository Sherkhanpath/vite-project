import React from 'react'
import {useEffect,useState,useRef} from 'react'
import { ScrollTop } from 'primereact/scrolltop';
import AdventureForm from '../Visitoption/AdventureForm';
import "bootstrap/dist/css/bootstrap.min.css";
import "./Contact.css";
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
function Contact() {
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
<div>
 <div
className={` contact-hero ${scrollY > 50 ? "pricing-scroll" : ""}`}
style={backgroundStyle}
>
<main className="pricing-section">
  <div
    ref={textRef}
    className={`pricing-text ${isVisible ? "pricing-visible" : ""}`}
  >
  

    <h1 className="pricing-desc fs-1">
      It’s TIME TO
      <br />
    CHOOSE 
    Contact us
    </h1>
  </div>
        </main>
      </div>
         {/* fast page  */}
      <section className="offer-section text-center">
<div className="container">

<h1 className="offer-title">COME VISIT</h1>

<p className="offer-text">
We’ve been obsessed with exploring this island for several years – let us show you
 the best spots we’ve found! From breathtaking locations to colorful culture and 
 relaxing mood, we can help you organize a memorable stay in one of the most
  magical places on the planet.
</p>

</div>
</section>
{/* SECTION 2 */}
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
{/* SECTION 3  */}
<section className="instagram-section text-center">
  <div className="container">

    <h2 className="insta-title">FOLLOW US ON INSTAGRAM</h2>

    <div className="row justify-content-center insta-gallery">

      <div className="col-10 col-sm-6 col-md-4 col-lg-3">
        <div className="insta-img">
          <img src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=328,h=308,fit=crop/poveda6u7yb/img-m5K7ZbQOz3I7Mg2q.png" className="img-fluid" />
        </div>
      </div>

      <div className="col-10 col-sm-6 col-md-4 col-lg-3">
        <div className="insta-img">
          <img src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=328,h=308,fit=crop/poveda6u7yb/img-YyvGO7KaeBh36NGq.png" className="img-fluid" />
        </div>
      </div>

      <div className="col-10 col-sm-6 col-md-4 col-lg-3">
        <div className="insta-img">
          <img src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=328,h=308,fit=crop/poveda6u7yb/img-mp8029KB1bhWOerv.png" className="img-fluid" />
        </div>
      </div>

    </div>

    <button className="insta-btn">@POVEDA_TRAVEL</button>

  </div>
</section>
    <ScrollTop />
</div>
    </>
  
  )
}

export default Contact