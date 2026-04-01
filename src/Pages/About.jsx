import {useEffect,useState,useRef} from 'react'
import "./About.css";
import { ScrollTop } from 'primereact/scrolltop';
import AdventureForm from '../Visitoption/AdventureForm';
import "bootstrap/dist/css/bootstrap.min.css";
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

function About() {
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
   <div
className={` khan-hero ${scrollY > 50 ? "pricing-scroll" : ""}`}
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
      IT, TIME TO
      <br />
    CHOOSE 
      <br />
      BALI,
    </p>
  </div>
        </main>
      </div>
      {/* fast page  */}
      <div>
      <section className="offer-section text-center">
<div className="container">

<h1 className="offer-title">IN LOVE WITH BALI</h1>

<p className="offer-text">
We are a couple of nomads who used to explore the globe. The day we stepped our foot on Balinese ground one
 thing was clear - we fell in love. We kept coming back every few months and understood that this is a love affair for
  a lifetime. We fully moved here in 2018 and been exploring the island ever since. We’re excited to share what we’ve
   found and show you this beautiful corner of the world.
</p>

</div>
</section>
{/* SECTION 2 */}
  <section className="row g-0 align-items-center bg-dark-green">
    <div className="col-md-6 p-0">
      <img src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=612,h=576,fit=crop/poveda6u7yb/jesse-A0xQ7r9PNWfLVwrB.png" alt="colore full" className="img-fluid w-100 h-100 object-fit-cover" />
    </div>
    <div className="col-md-6 content-padding text-white">
      <h2 className="grid-title">JESSIE <br/> RUSSELL</h2>
      <p className="grid-text">
    “I’ve been traveling my whole life. My parents had a
     burning passion for exploring which I have inherited. It's 
     no surprise that I was destined to meet Miller on my
      vacation on Hawaii. Since then we’ve been sight-seeing
       together up until we’ve fell in love with Bali.”
      </p>
    </div>
  </section>

  {/* Section 3:  */}
  
  <section className="row g-0 align-items-center bg-light-gray flex-row-reverse">
    <div className="col-md-6 p-0">
      <img src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=612,h=576,fit=crop/poveda6u7yb/miller-AwvGpPaw6JioGO4m.png" alt="Surfing" className="img-fluid w-100 h-100 object-fit-cover" />
    </div>
    <div className="col-md-6 content-padding text-dark">
      <h2 className="grid-title">MILLER  <br/> DONOVAN</h2>
      <p className="grid-text">
 “I am inspired by nature and diversity of planet Earth. I'm a
  photographer and take pictures wherever I go - same goes for my
   beloved Bali. I am lucky to share my time with amazing Jessie, who is
    the best companion to explore this island with. Together, we've turned
     every stone in this place and are ready to share our finding with you.”
      </p>
    </div>
  </section>

  {/* SECTION 4 */}
     <section className="row g- align-items-center bg-dark-green text-white text-center pb-5 offer-section">
<div className="container text-center">

<h1 className="offer-title text-white  pb-5 ">IN LOVE WITH BALI</h1>

<p className=" text-center pb-5">
We are a couple of nomads who used to explore the globe. The day we stepped our foot on Balinese ground one
 thing was clear - we fell in love. We kept coming back every few months and understood that this is a love affair for
  a lifetime. We fully moved here in 2018 and been exploring the island ever since. We’re excited to share what we’ve
   found and show you this beautiful corner of the world.
</p>

</div>
</section>
{/* section 5 */}
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
     <ScrollTop />
</div>

   </>
  )
}

export default About