import { Link } from "react-router-dom";
import "./Footer.css";
import { FaTwitter, FaFacebookF, FaInstagram } from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer bg-[#3b4b44] text-[#4c5a46] py-10 px-4 md:px-8 lg:px-16">
      
      <div className="footer-container flex flex-col md:flex-row justify-between items-center md:items-start gap-8">

        {/* Logo */}
        <div className="footer-logo text-center md:text-left">
          <h1 className="text-2xl md:text-3xl font-bold">POVEDA</h1>
        </div>

        {/* Links */}
        <div className="footer-links flex flex-col md:flex-row gap-3 md:gap-6 text-center">
          <Link to="/about" className="hover:underline">About us</Link>
          <Link to="/visit" className="hover:underline">Visit</Link>
          <Link to="/pricing" className="hover:underline">Pricing</Link>
          <Link to="/contact" className="hover:underline">Contact</Link>
        </div>

        {/* Contact */}
        <div className="footer-contact text-center md:text-right">
          <p className="mb-1">khansher5498@gmail.com</p>
          <p className="mb-3">123-456-7890</p>

          <div className="social-icons flex justify-center md:justify-end gap-4 text-lg">
  
  <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" >
    <FaTwitter style={{ color: "#4c5a46" }}   className="cursor-pointer hover:scale-110 transition" />
  </a>

  <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" >
    <FaFacebookF style={{ color: "#4c5a46" }}  className="cursor-pointer hover:scale-110 transition" />
  </a>

  <a href="https://instagram.com" target="_blan" rel="noopener noreferrer" >
    <FaInstagram style={{ color: "#4c5a46" }}  className="cursor-pointer hover:scale-110 transition" />
  </a>

</div>

        </div>

      </div>

    </footer>
  );
}

export default Footer;