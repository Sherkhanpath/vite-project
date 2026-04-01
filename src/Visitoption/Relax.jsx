import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "./Relax.css"
import "../Visitoption/AdventureForm"
import { ScrollTop } from 'primereact/scrolltop';
import AdventureForm from '../Visitoption/AdventureForm';

function Relax() { 
  return (
    <>
    <div>
    <div className="main-wrapper">
      <section className="last-banner">
        <div className="container h-100">
          <div className="row h-100 align-items-center">
            <div className="col-md-8 text-white hero-text-box">
              <h4 className="sub-heading">IT,S TIME TO</h4>
              <h1 className="main-heading">RELAX IN</h1>
              <h1 className="main-heading">BALI</h1>
            </div>
          </div>
        </div>
      </section>
         {/* select 2 */}
      <section className="info-section">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 text-center">
              <h2 className="section-title">FORGET YOUR <br /> WORRIES</h2>
              <p className="section-desc">
               Need a place to get away? There is no better
                corner in the world to hide from the dull
                 everyday than the magical Bali. Relax on the
                  picturesque beaches, visit numerous spas
                   and reside in the breathtaking resorts this
                    location has to offer – and forget all of your 
                    worries..
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
      <img src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=1080,h=1031,fit=crop/poveda6u7yb/img-m5K76vyVL1CRPjJO.png" alt="colore full" className="img-fluid w-100 h-100 object-fit-cover" />
    </div>
    <div className="col-md-6 content-padding text-white">
      <h2 className="grid-title">BEAUTIFUL <br/> RESORTS</h2>
      <p className="grid-text">
     Do you want to wake up with the view of
      perfect sandy beaches just 5 minutes away
       from having your feet washed by the clear
        waves of the blue sea? There is plenty of
         marvelous resorts to choose from. 
      </p>
    </div>
  </section>

  {/* Section 2: Playful Waves */}
   {/* Section 4: */}
  <section className="row g-0 align-items-center bg-light-gray flex-row-reverse">
    <div className="col-md-6 p-0">
      <img src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=1080,h=1031,fit=crop/poveda6u7yb/img-A3QWqpnJLnUEBDeM.png" alt="Surfing" className="img-fluid w-100 h-100 object-fit-cover" />
    </div>
    <div className="col-md-6 content-padding text-dark">
      <h2 className="grid-title">AMAZING BEACHES</h2>
      <p className="grid-text">
  One of the things Bali is known for are its
   amazing sandy beaches, where every view is
    worthy of a picture. So sit back, relax on the
     beach or inflatable boat and soak in all the 
     sunshine this land has been blessed with.
      </p>
    </div>
  </section>
</div>
<div className="adventure-grid-container">
  {/* Section 5: Impressive Nature (Image Left, Text Right) */}
   <section className="row g-0 align-items-center bg-light-gray flex-row">
    <div className="col-md-6 p-0">
      <img src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=1080,h=1031,fit=crop/poveda6u7yb/img-YanjRa9L6JuKeo1b.png" alt="colore full" className="img-fluid w-100 h-100 object-fit-cover" />
    </div>
    <div className="col-md-6 content-padding text-dark">
      <h2 className="grid-title">MINDEFULNESS <br /> PRACTICE</h2>
      <p className="grid-text">
     The inspiring nature of Bali and the magical
      essence of its culture creates a unique
       environment for everyone who wants to 
       practice being mindful and open their hearts 
       up for the colorful experiences this life has to 
       offer. 
      </p>
    </div>
  </section>


</div>
{/* section 6 */}
<section className="relax-section">
<div className="container">

<div className="row align-items-center">

<div className="col-md-6">

<h2 className="relax-title">RELAX IN BALI </h2>

<p className="relax-text">
Amazing, all-inclusive resorts, beautiful
 beaches and mindfulness sessions - these
  are just a few of the things that will help you
   relax and enjoy your holiday.
</p>

<button className="btn learn-btn">PRICING</button>

</div>


<div className="col-md-6 text-md-end text-center price-box">

<span className="from">FROM</span>
<span className="price">$420</span>


</div>
</div>

</div>
</section>


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

export default Relax;