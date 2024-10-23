import React from 'react';
import { Link } from 'react-router-dom';
import '../style/Header.css';
import LogoCubysoft from '../../assets/Logo_Cubysoft.png';

const Header = () => {
    return (
        <header className="header">
            <div className="header-background-blur"></div>
            <nav className="nav">
                <div className="nav-column logo-column">
                    <Link to="/">
                        <img className="LogoIcon" src={LogoCubysoft} alt="Logo Cubysoft" />
                    </Link>
                    <span className="logo-text">Cubysoft</span>
                </div>
                <div className="nav-column nav-links">
                    <Link to="#" className="nav-link">Explorar</Link>
                    <Link to="#" className="nav-link">Acerca de</Link>
                    <Link to="#" className="nav-link">Contacto</Link>
                </div>
                <div className="nav-column">
                    <button className="connect-wallet">Contactar</button>
                </div>
            </nav>
        </header>
    );
};

export default Header;
