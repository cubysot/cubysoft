import React from 'react';
import '../style/footer.css';
import { FaInstagram } from 'react-icons/fa';
import { RiFacebookLine } from "react-icons/ri";
import { HiOutlineMail } from "react-icons/hi";
import { FaThreads } from "react-icons/fa6";
import { AiOutlineWhatsApp } from "react-icons/ai";
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
        <a href="https://www.facebook.com/cubysof.uk" target="_blank" rel="noopener noreferrer">
          <RiFacebookLine />
        </a>
        <a href="https://www.threads.net/@cubysoft.uk" target="_blank" rel="noopener noreferrer">
          <FaThreads />
        </a>
        <a href="https://instagram.com/cubysoft.uk" target="_blank" rel="noopener noreferrer">
          <FaInstagram />
        </a>
        <a href="mailto:hola@cubysoft.uk" target="_blank" rel="noopener noreferrer">
          <HiOutlineMail />
        </a>
        <a href="https://wa.me/+573158602911" target="_blank" rel="noopener noreferrer">
          <AiOutlineWhatsApp />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
