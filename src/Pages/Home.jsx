import React, { useState, useEffect, useRef } from 'react';
import './Home.css';

import { ScrollTop } from 'primereact/scrolltop';
import 'bootstrap/dist/css/bootstrap.min.css';

/**
 * Custom hook to detect if an element is in the viewport
 */
function useIsVisible(ref) {
  const [isIntersecting, setIntersecting] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIntersecting(entry.isIntersecting);
      },
      {
        rootMargin: '0px 0px -100px 0px',
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }
    return () => {
      observer.disconnect();
    };
  }, [ref]);

  return isIntersecting;
}

const HOME = () => {
  const [scrollY, setScrollY] = useState(0);
  const textRef = useRef();
  const isVisible = useIsVisible(textRef);
  const [parallaxOffset, setParallaxOffset] = useState(0);

  // Categories data ko yahan rakha hai taaki component ise access kar sake
const categories = [
  { 
    title: "ADVENTURE", 
    btnText: "EXPLORE BALI", 
    // HD Adventure: Bali Gate with motorbike/traveler theme
img : "https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?auto=format&fit=crop&w=1600&q=80"  },
 
{ 
  title: "CULTURE", 
  btnText: "UNDERSTAND BALI", 
  img: "https://images.unsplash.com/photo-1539367628448-4bc5c9d171c8?auto=format&fit=crop&w=1000&q=80" 
},
  { 
    title: "RELAXATION", 
    btnText: "RELAX IN BALI", 
    // HD Relaxation: Infinity pool/luxury resort view
     img: "https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg?auto=compress&cs=tinysrgb&w=800"
  },
];

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrollY(currentScrollY);
      setParallaxOffset(currentScrollY * 0.2); 
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const backgroundStyle = {
    backgroundPositionY: `calc(30% + ${parallaxOffset}px)`,
  };

  return (
    <> 
    <div>
      <div 
        className={`home-container ${scrollY > 50 ? 'scrolled' : ''}`}
        style={backgroundStyle}
      >
        <main className="hero-section">
          <div 
            ref={textRef} 
            className={`hero-text-block ${isVisible ? 'is-visible' : ''}`}
          >
            <h2 className="time-to">It’s Time To</h2>
            <h1 className="visit-bali">Visit Bali</h1>
            <p className="hero-description">
              Crave new adventures, mystical experiences and relaxing<br />
              beaches? You need to visit Bali. We make sure that you’ll get an<br />
              experience you’ll never forget.
            </p>
            <a href="#offers" className="offers-btn">Our Offers</a>
          </div>
        </main>
      </div>

      {/* SECTION 2: CATEGORIES (Bootstrap) */}
     <section className="bali-section  text-white py-5 px-4 md:px-8 lg:px-16">
  <div className="container text-center">
    <h2 className="main-title mb-5 text-2xl md:text-3xl lg:text-4xl font-bold">
      LICENCE TO LIVE
    </h2>

    <div className="row g-4 flex flex-col md:flex-row flex-wrap justify-center">
      {categories.map((item, index) => (
        <div
          className="col-md-4 w-full md:w-1/2 lg:w-1/3 px-2"
          key={index}
        >
          <div className="category-card p-4 rounded-xl shadow-md hover:shadow-xl transition duration-300 bg-[#4c5a46]">
            
            <div className="img-container mb-3 overflow-hidden rounded-lg">
              <img
                src={item.img}
                alt={item.title}
                className="img-fluid custom-img w-full h-56 md:h-64 object-cover hover:scale-105 transition duration-300"
              />
            </div>

            <h4 className="category-title text-lg md:text-xl font-semibold">
              {item.title}
            </h4>

            <button className="btn btn-outline-dark text-white rounded-pill px-4 mt-3 text-sm md:text-base">
              {item.btnText}
            </button>

          </div>
        </div>
      ))}
    </div>
  </div>
</section>
<>
  {/* SECTION 2: A PLACE TO BE */}
  <section className="bali-split-light py-5 px-4 md:px-8 lg:px-16">
  <div className="container">
    <div className="row align-items-center flex flex-col md:flex-row">
      
      <div className="col-md-6 text-center w-full md:w-1/2 mb-4 md:mb-0">
        {/* Is div ko CSS mein .img-1 se image milegi */}
        <div className="img-vertical img-1 w-full h-64 md:h-80 lg:h-96 rounded-xl overflow-hidden"></div>
      </div>

      <div className="col-md-6 px-lg-5 w-full md:w-1/2 text-center md:text-left">
        <h3 className="split-title text-2xl md:text-3xl lg:text-4xl font-bold mb-3">
          A PLACE TO BE
        </h3>

        <p className="split-text text-sm md:text-base lg:text-lg mb-4">
          Bali is more than just an island; it's a tropical state of mind. 
          Experience the lush jungles and serene temples.
        </p>

        <button className="btn-pill px-6 py-2 md:px-8 md:py-3 text-sm md:text-base">
          LEARN MORE
        </button>
      </div>

    </div>
  </div>
</section>

  {/* SECTION 3: IN LOVE WITH BALI */}
 <section className="bali-split-dark py-5 text-white px-4 md:px-8 lg:px-16">
  <div className="container">
    <div className="row align-items-center flex-md-row-reverse">
      
      <div className="col-md-6 text-center w-full md:w-1/2 mb-4 md:mb-0">
        {/* Is div ko CSS mein .img-2 se image milegi */}
        <div className="img-vertical img-2 w-full h-64 md:h-80 lg:h-96 rounded-xl overflow-hidden"></div>
      </div>

      <div className="col-md-6 px-lg-5 text-md-end w-full md:w-1/2 text-center md:text-right">
        
        <h3 className="split-title text-white text-2xl md:text-3xl lg:text-4xl font-bold mb-3">
          IN LOVE WITH BALI
        </h3>

        <p className="split-text text-sm md:text-base lg:text-lg mb-4">
          We fell in love with this place and we want you to see why. 
          From waterfalls to hidden gems.
        </p>

        <button className="btn-pill white-border px-6 py-2 md:px-8 md:py-3 text-sm md:text-base">
          MORE ABOUT US
        </button>

      </div>

    </div>
  </div>
</section>
</>     
{/* last page  */}
<div className="instagram-section px-4 md:px-8 lg:px-16 py-8">
  
  <h2 className="insta-title text-center text-2xl md:text-3xl lg:text-4xl font-bold mb-6">
    FOLLOW US ON INSTAGRAM
  </h2>

 <div className="container px-4 md:px-6 lg:px-8">
  <div className="row justify-content-center g-4">

    <div className="col-6 col-md-4 col-lg-3">
      <div className="insta-img-wrapper overflow-hidden rounded-xl">
        <img
          src="https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?q=80&w=2070&auto=format&fit=crop"
          alt="Bali Jungle"
          className="img-fluid w-full h-40 md:h-52 lg:h-60 object-cover transition duration-300 hover:scale-105"
        />
      </div>
    </div>

    <div className="col-6 col-md-4 col-lg-3">
      <div className="insta-img-wrapper overflow-hidden rounded-xl">
        <img
          src="https://images.unsplash.com/photo-1540573133985-87b6da6d54a9?q=80&w=2076&auto=format&fit=crop"
          alt="Monkey"
          className="img-fluid w-full h-40 md:h-52 lg:h-60 object-cover transition duration-300 hover:scale-105"
        />
      </div>
    </div>

    <div className="col-6 col-md-4 col-lg-3">
      <div className="insta-img-wrapper overflow-hidden rounded-xl">
        <img
          src="https://images.unsplash.com/photo-1431794062232-2a99a5431c6c?q=80&w=2070&auto=format&fit=crop"
          alt="Waterfall"
          className="img-fluid w-full h-40 md:h-52 lg:h-60 object-cover transition duration-300 hover:scale-105"
        />
      </div>
    </div>

  </div>
</div>
</div>
<section className="subscribe-section py-10 px-4 md:px-8 lg:px-16">
  <div className="container">

    <div className="subscribe-content flex flex-col md:flex-row items-center justify-between gap-6">

      <div className="subscribe-text text-center md:text-left md:w-1/2">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-3">
          SUBSCRIBE
        </h2>
        <p className="text-sm md:text-base lg:text-lg">
          Subscribe to our newsletter to always be
          the first to hear about recent news, offers
          and adventures in Bali.
        </p>
      </div>

      <div className="subscribe-form w-full md:w-1/2 flex flex-col gap-3">
        <label className="text-sm md:text-base">
          Email address
        </label>

        <input
          type="text"
          placeholder=" your email address"
          className="w-full px-4 py-2 md:py-3 border rounded-lg outline-none focus:ring-2 focus:ring-black"
        />

        <button className="w-full md:w-fit px-6 py-2 md:py-3 bg-[#3b4b44] text-[#3b4b44] rounded-lg hover:bg-gray-800 transition">
          SUBMIT
        </button>
      </div>

    </div>

  </div>
</section>
  <ScrollTop />
</div>
 

    </>
  );
};

export default HOME;