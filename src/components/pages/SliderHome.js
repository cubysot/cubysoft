import React from 'react';
import './Marquee.css'; // Asegúrate de crear este archivo para estilos
import { FaFacebook, FaDiscord, FaGithub, FaTwitter, FaInstagram } from 'react-icons/fa'; // Importa los iconos que necesites

const companies = [
    { id: 1, name: 'Facebook', icon: <FaFacebook /> },
    { id: 2, name: 'Discord', icon: <FaDiscord /> },
    { id: 3, name: 'GitHub', icon: <FaGithub /> },
    { id: 4, name: 'Twitter', icon: <FaTwitter /> },
    { id: 5, name: 'Instagram', icon: <FaInstagram /> },
];

const Marquee = () => {
    return (
        <div className="marquee">
            <div className="marquee-content">
                {companies.map(company => (
                    <div className="marquee-item" key={company.id} title={company.name}>
                        {company.icon}
                    </div>
                ))}
                {companies.map(company => (
                    <div className="marquee-item" key={company.id + 100}>
                        {company.icon}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Marquee;
