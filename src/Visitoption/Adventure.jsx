import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "./Adventure.css"; 
import { ScrollTop } from 'primereact/scrolltop';
import AdventureForm from './AdventureForm';

function AdventurePage() { // Maine naam badal kar AdventurePage kar diya hai taaki conflict na ho
  return (
    <>
    <div>
    <div className="main-wrapper">
      <section className="hero-banner">
        <div className="container h-100">
          <div className="row h-100 align-items-center">
            <div className="col-md-8 text-white hero-text-box">
              <h4 className="sub-heading">IT'S TIME FOR</h4>
              <h1 className="main-heading">ACTION</h1>
            </div>
          </div>
        </div>
      </section>
         {/* select 2 */}
      <section className="info-section">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 text-center">
              <h2 className="section-title">EXPERIENCE HEAVEN</h2>
              <p className="section-desc">
                If you want to find as many adventures as you can find, Bali is the place for you. 
                Hop on a scooter, surf the waves or explore the beautiful nature full of 
                exciting wildlife - wherever you go, the island will offer a lot of exciting 
                opportunities for your adventurous heart.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
    {/* // select 3 */}
 <div className="adventure-details">
  {/* Section 1: Roads Full of Sights */}
  <section className="row g-0 align-items-center bg-dark-green">
    <div className="col-md-6 p-0">
      <img src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=612,h=576,fit=crop/poveda6u7yb/img-AMqPLbaVX5U8Ry2L.png" alt="Bike" className="img-fluid w-100 h-100 object-fit-cover" />
    </div>
    <div className="col-md-6 content-padding text-white">
      <h2 className="grid-title">ROADS FULL <br/> OF SIGHTS</h2>
      <p className="grid-text">
        Bali is a place full of things to experience - ancient architecture, beautiful beaches and amazing nature. 
        Whether you have limited time or love the wind in your hair, there is a way to see it all. 
        A scooter will definitely become one of your best friends during your stay in the picturesque Bali.
      </p>
    </div>
  </section>

  {/* Section 2: Playful Waves */}
   {/* Section 4: */}
  <section className="row g-0 align-items-center bg-light-gray flex-row-reverse">
    <div className="col-md-6 p-0">
      <img src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=612,h=576,fit=crop/poveda6u7yb/img-Y4LaNVOoNbuE9Jp3.png" alt="Surfing" className="img-fluid w-100 h-100 object-fit-cover" />
    </div>
    <div className="col-md-6 content-padding text-dark">
      <h2 className="grid-title">PLAYFUL <br/> WAVES</h2>
      <p className="grid-text">
        Bali is located between the Indian and Pacific Oceans, meaning there are plenty of waves 
        to be conquered by the brave ones. Surfing, scuba-diving, relaxing on a yacht - you name it! 
        Tons of water sports await the people who are interested in an active leisure time by the sea.
      </p>
    </div>
  </section>
</div>
<div className="adventure-grid-container">
  {/* Section 5: Impressive Nature (Image Left, Text Right) */}
  <section className="row g-0 align-items-center bg-grey-green">
    <div className="col-md-6 p-0">
      <div className="grid-image-box">
        <img 
          src="https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1920&q=80" 
          alt="Nature" 
          className="img-fluid w-100 h-100" 
        />
      </div>
    </div>
    <div className="col-md-6 content-padding text-dark">
      <h2 className="grid-title">IMPRESSIVE <br/> NATURE</h2>
      <p className="grid-text">
        There’s a reason Bali is on the bucket list of many. Bali's 
        common mountains include several peaks over 2000 
        meters and active volcanoes for lovers of heights. The 
        island is full of beautiful beaches, which are surrounded 
        by the coral reefs as well as lush forests, if you are in 
        search of breathtaking views – you got it!
      </p>
    </div>
  </section>

  {/* Section 6: Friendly Wildlife (Text Left, Image Right) */}
  <section className="row g-0 align-items-center bg-deep-green flex-row-reverse">
    <div className="col-md-6 p-0">
      <div className="grid-image-box">
        <img 
          src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=612,h=576,fit=crop/poveda6u7yb/img-Y4LaNVOonjsJxyvg.png" 
          alt="Wildlife" 
          className="img-fluid w-100 h-100" 
        />
      </div>
    </div>
    <div className="col-md-6 content-padding text-white">
      <div className="text-wrapper text-md-end">
        <h2 className="grid-title">FRIENDLY <br/> WILDLIFE</h2>
        <p className="grid-text ms-md-auto">
          Have you ever given a fist bump to a monkey? If not, it is 
          time to do it - there is plenty of friendly monkeys ready to 
          socialize for a treat. Bali is full of amazing wildlife, which 
          can be explored by people in love with nature.
        </p>
      </div>
    </div>
  </section>
</div>
{/* section 7 */}
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
 
  );
}

export default AdventurePage;