import React, { useState ,useRef } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js"; // ⚠️ important
import "primeicons/primeicons.css";
import "./BookingNow.css";
import BookingForm from './BookingForm';

// import { Button } from 'primereact/button';
import { Toast } from 'primereact/toast';



function BookingNow() {

  // ✅ State add ki
  const [lang, setLang] = useState("EN");

   const toast = useRef(null);
   const showSuccess = () => {
        toast.current.show({severity:'success',
         summary: 'Booking Success',
          detail:'Message Content', 
          life: 3000});
    }
  return (
<>
{/* NAVBAR */}
<Toast ref={toast} />
<nav

  className="d-flex justify-content-between align-items-center px-4"
  style={{
    backgroundColor: "#B4613F",
    height: "80px",
  }}
>
  {/* Left */}
  <div className="d-flex align-items-center gap-3">
    <img
      src='https://h-img1.cloudbeds.com/uploads/295292/dsc02624_gallery~~6982ec755a084.jpg'
      alt="logo"
      style={{
        width: "60px",
        height: "60px",
        borderRadius: "12px",
        objectFit: "cover"
      }}
    />

    <h4 className="text-white m-0 fw-bold">
      CARI Surf Camp
    </h4>
  </div>
  
  {/* Right */}
  <div className="d-flex align-items-center gap-3 text-white">

    {/* 🌍 Dropdown */}
    <div className="dropdown">
      <button
        className="btn text-white dropdown-toggle"
        type="button"
        data-bs-toggle="dropdown"
        style={{ background: "transparent", border: "none" }}
      >
        🌍 {lang}
      </button>

      <ul className="dropdown-menu">
        <li>
          <button className="dropdown-item" onClick={() => setLang("EN")}>
            English
          </button>
        </li>
        <li>
          <button className="dropdown-item" onClick={() => setLang("HI")}>
            Hindi
          </button>
        </li>
        <li>
          <button className="dropdown-item" onClick={() => setLang("FR")}>
            French
          </button>
        </li>
      </ul>
    </div>

    <span className="fw-semibold">EUR</span>
        </div>
      </nav>

    <section className="booking-hero d-flex align-items-center justify-content-center">

  <div className="booking-form bg-white shadow p-4 rounded">
    
    <div className="d-flex flex-column flex-md-row gap-3">

      <div>
        <label className="fw-bold">Check in</label>
        <input type="date" className="form-control" />
      </div>

      <div>
        <label className="fw-bold">Check out</label>
        <input type="date" className="form-control" />
      </div>

      <div>
        <label className="fw-bold">Guests</label>
        <select className="form-control">
          <option>1 Guest</option>
          <option>2 Guests</option>
          <option>3 Guests</option>
        </select>
      </div>

      <div className="d-flex align-items-end">
        <button 
          className="btn btn-dark px-4"
          onClick={showSuccess}
        >
          Check Availability
        </button>
      </div>

    </div>

  </div>

</section>

  <div className="col-md-12">
    <BookingForm/>
  </div>


    </>
  )
}

export default BookingNow;