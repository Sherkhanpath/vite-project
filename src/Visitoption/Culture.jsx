import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { ScrollTop } from 'primereact/scrolltop';
import "./Culture.css"
import "../Visitoption/AdventureForm"
import AdventureForm from '../Visitoption/AdventureForm';

function Culture() { 
  return (
    <>
    <div>
    <div className="main-wrapper">
      <section className="lion-banner">
        <div className="container h-100">
          <div className="row h-100 align-items-center">
            <div className="col-md-8 text-white hero-text-box">
              <h4 className="sub-heading">IT,S TIME TO</h4>
              <h1 className="main-heading">FEEL</h1>
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
              <h2 className="section-title">DIVE INTO A LIFESTYLE</h2>
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
      <img src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=1080,h=1031,fit=crop/poveda6u7yb/img-m5K76vexLXf2r18a.png" alt="colore full" className="img-fluid w-100 h-100 object-fit-cover" />
    </div>
    <div className="col-md-6 content-padding text-white">
      <h2 className="grid-title">COLOREFUL <br/> CULTURE</h2>
      <p className="grid-text">
       The culture of Bali is as colourful as it can be.
        Various celebrations, bright clothes, ancient
         stories and a diverse local lifestyle is 
         something you can experience during your stay.
          Immerse yourself with the life of Bali and
           its residents.
      </p>
    </div>
  </section>

  {/* Section 2: Playful Waves */}
   {/* Section 4: */}
  <section className="row g-0 align-items-center bg-light-gray flex-row-reverse">
    <div className="col-md-6 p-0">
      <img src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=1080,h=1031,fit=crop/poveda6u7yb/img-AzGnprkrMbC28Nb1.png" alt="Surfing" className="img-fluid w-100 h-100 object-fit-cover" />
    </div>
    <div className="col-md-6 content-padding text-dark">
      <h2 className="grid-title">ANCCIENT <br/> MONUMENT</h2>
      <p className="grid-text">
   Bali is full of ancient monuments that will take
    your breath away. Gazebos on the beaches
     and mystical temples in the forests are just a
      few of the places to visit for the people thristy
       of seeing inspiring architecture with deep 
       history.
      </p>
    </div>
  </section>
</div>
<div className="adventure-grid-container">
  {/* Section 5: Impressive Nature (Image Left, Text Right) */}
   <section className="row g-0 align-items-center bg-light-gray flex-row">
    <div className="col-md-6 p-0">
      <img src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=1080,h=1031,fit=crop/poveda6u7yb/img-mjEWp2L1LpuO4Wqb.png" alt="colore full" className="img-fluid w-100 h-100 object-fit-cover" />
    </div>
    <div className="col-md-6 content-padding text-dark">
      <h2 className="grid-title">EXOTIC FOOD</h2>
      <p className="grid-text">
      Hungry for something new? Your search is 
      over. The fresh and exciting cuisine of Bali will 
      make your taste buds happy for weeks to
       come. Be it street food or fancy local 
       restaurants, we are sure you will find 
       something new to drool over after your stay is
        over.
      </p>
    </div>
  </section>


</div>
{/* section 6 */}
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

<span className="from">price</span>
<span className="price">$514</span>


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

export default Culture;