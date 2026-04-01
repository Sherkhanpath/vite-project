import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import "./Navbar.css";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.nav 
      className="navbar navbar-expand-lg custom-navbar navbar fixed-top custom-navbar "
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container">
        
        <h2 className="logo">POVEDA</h2>

        {/* ✅ Menu Toggle (sirf ek baar) */}
        <div className="menu-toggle" onClick={() => setIsOpen(!isOpen)}>
          ☰
        </div>

        {/* ✅ Nav Links (yahi main container hai) */}
        <div className={`nav-links ${isOpen ? "active" : ""}`}>

          <motion.div whileHover={{ scale: 1.1 }}>
            <Link to="/">HOME</Link>
          </motion.div>

          <motion.div whileHover={{ scale: 1.1 }}>
            <Link to="/pricing">PRICING</Link>
          </motion.div>

          {/* Dropdown */}
          <div
            className="dropdown-wrapper"
            onMouseEnter={() => setIsOpen(true)}
            onMouseLeave={() => setIsOpen(false)}
          >
            <motion.div whileHover={{ scale: 1.1 }}>
              <Link to="/visit">
                VISIT <span className="arrow">{isOpen ? "▲" : "▼"}</span>
              </Link>
            </motion.div>

            {isOpen && (
              <motion.div
                className="dropdown-box"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
              >
                <Link to="/Visit/ADVENTURE">ADVENTURE</Link>
                <Link to="/Visit/Culture">CULTURE</Link>
                <Link to="/Visit/Relax">RELAX</Link>
              </motion.div>
            )}
          </div>

          <motion.div whileHover={{ scale: 1.1 }}>
            <Link to="/about">ABOUT US</Link>
          </motion.div>

          <motion.div whileHover={{ scale: 1.1 }}>
            <Link to="/contact">CONTACT</Link>
          </motion.div>
{/* 
          <motion.div whileHover={{ scale: 1.1 }}>
            <Link to="/Booking">BOOKINGForm</Link>
          </motion.div> */}

          <motion.div whileHover={{ scale: 1.1 }}>
            <Link to="/BookingPage">BOOKING</Link>
          </motion.div>

        </div>
      </div>
    </motion.nav>
  );
}

export default Navbar;