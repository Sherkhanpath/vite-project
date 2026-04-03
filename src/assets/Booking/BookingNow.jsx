import React, { useState ,useRef } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js"; // ⚠️ important
import "primeicons/primeicons.css";
import "./Booking.css";
import "../../Pages/BookingForm"


// import { Button } from 'primereact/button';
import { Toast } from 'primereact/toast';
import Booking from '../../Pages/BookingForm';

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

      {/* BANNER */}
      <section className="lion-banner position-relative">
        <div className="container h-100">
          <div className="row h-100 align-items-center"></div>
        </div>

        {/* FORM */}
        <div
          className="position-absolute start-50 translate-middle-x bg-white shadow p-4 rounded d-flex gap-4"
          style={{
            bottom: "30px",
            zIndex: 10
          }}
        >
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

          <div className="d-flex align-items-end" 
         >
            <button className="btn btn-dark px-4"  label="Success"
          severity = "success" onClick={showSuccess}>
              Check Availability
            </button>
          </div>
        </div>
      </section>

      {/* <div style={{ height: "100px" }}></div> */}

<div className="col-md-12">
  <Booking/>
</div>

    </>
  )
}

export default BookingNow;