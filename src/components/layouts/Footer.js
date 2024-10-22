import React from 'react';
import '../style/footer.css';
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';
import LogoCubysoft from '../../assets/Logo_Cubysoft.png';

const Footer = () => {
  return (
    <footer className="enhanced-footer">
      <div className="footer-logo">
        <img className="logo-icon" src={LogoCubysoft} alt="Logo de Cubysoft" />
        <span className="logo-text">Cubysoft</span>
      </div>
      <div className="footer-text">
        <p>© 2024 Cubysoft. Reserva todos los derechos.</p>
      </div>
      <div className="social-icons">
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
          <FaFacebookF />
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          <FaTwitter />
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
          <FaInstagram />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
