import React from 'react';
import '../style/footer.css';
import { FaInstagram } from 'react-icons/fa';
import { LuFacebook } from "react-icons/lu";
import { HiOutlineMailOpen } from "react-icons/hi";
import { FaThreads } from "react-icons/fa6";
import { AiOutlineWhatsApp } from "react-icons/ai";
import { LuLinkedin } from "react-icons/lu";
import { RxDiscordLogo } from "react-icons/rx";
import LogoCubysoft from '../../assets/Logo_Cubysoft.png';
import { Link } from 'react-router-dom';

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
                <Link to="/facebook" title="Facebook">
                    <LuFacebook aria-label="Facebook" />
                </Link>
                <Link to="/threads" title="Threads">
                    <FaThreads aria-label="Threads" />
                </Link>
                <Link to="/instagram" title="Instagram">
                    <FaInstagram aria-label="Instagram" />
                </Link>
                <Link to="/email" title="Email">
                    <HiOutlineMailOpen aria-label="Email" />
                </Link>
                <Link to="/whatsapp" title="WhatsApp">
                    <AiOutlineWhatsApp aria-label="WhatsApp" />
                </Link>
                <Link to="/linkedin" title="LinkedIn">
                    <LuLinkedin aria-label="LinkedIn" />
                </Link>
                <Link to="/discord" title="Discord">
                    <RxDiscordLogo aria-label="Discord" />
                </Link>
            </div>
        </footer>
    );
};

export default Footer;
