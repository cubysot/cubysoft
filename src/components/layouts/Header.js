import React from 'react';
import { Link } from 'react-router-dom';
import '../style/Header.css';
import LogoCubysoft from '../../assets/Logo_Cubysoft.png';

const Header = () => {
    return (
        <header className="header">
            <nav className="nav">
                <div className="nav-column logo-column">
                    <img className='LogoIcon' src={LogoCubysoft} alt='Logo Cubysoft' />
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
