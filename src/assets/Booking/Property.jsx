import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Property = () => {
  const images = [
    "https://images.unsplash.com/photo-1540541338287-41700207dee6",
    "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
    "https://images.unsplash.com/photo-1566073771259-6a8506099945",
    "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b",
  ];

  return (
    <div style={{ backgroundColor: "#fff", minHeight: "100vh" }}>
      
      {/* HEADER */}
      <div className="container py-4">
        <h1 className="fw-bold text-dark">Property Information</h1>
      </div>

      {/* IMAGE SECTION */}
      <div className="container">
        <div className="row g-4">
          {images.map((img, index) => (
            <div className="col-lg-3 col-md-6" key={index}>
              <div className="card border-0 shadow rounded-4 overflow-hidden h-100">
                <img
                  src={`${img}?auto=format&fit=crop&w=800&q=80`}
                  alt="Bali Property"
                  style={{
                    height: "230px",
                    width: "100%",
                    objectFit: "cover",
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* DESCRIPTION FULL WIDTH */}
      <div
        className="mt-5 py-5"
        style={{
          backgroundColor: "#111",
          color: "white",
        }}
      >
        <div className="container">
          <p style={{ lineHeight: "1.8", fontSize: "16px" }}>
            Our surf camp is located in Padang Padang, Uluwatu in the south of Bali,
            surrounded by some of the best waves on the planet. You can reach famous
            surf spots like Padang Padang, Uluwatu, Impossibles and Bingin in just a
            couple of minutes.
          </p>

          <p style={{ lineHeight: "1.8", fontSize: "16px" }}>
            The highlight of the resort is the beautiful pool and sun loungers,
            ideal for relaxing and soaking up the sun. The fast Wi-Fi ensures you
            stay connected while enjoying your stay.
          </p>

          <p style={{ lineHeight: "1.8", fontSize: "16px" }}>
            Private parking and outdoor showers are also available for your comfort
            after a swim or surf session.
          </p>
        </div>
      </div>

    </div>
  );
};

export default Property;