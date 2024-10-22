import React from 'react';
import { Link } from 'react-router-dom';
import './style/NotFound.css';

export default function NotFound() {
    return (
        <div className="not-found-container">

            <main className="main-content">
                <div className="content-center">
                    <h1 className="error-code">404</h1>
                    <h2 className="error-message">PAGINA NO ENCONTRADA</h2>
                    <p className="error-description">Ups! la pagina que estas buscando se ha movido o se ha eliminado.</p>
                    <div className="button-group">
                        <Link to="/" className="return-home">Volver a casa</Link>
                        <Link to="/explore" className="explore">Explorar opciones</Link>
                    </div>
                </div>
            </main>
        </div>
    );
}
