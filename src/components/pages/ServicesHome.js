import React from 'react';
import { CiGlobe } from "react-icons/ci";
import { IoCode } from "react-icons/io5";
import { FiSmartphone } from "react-icons/fi";
import { CiStar } from "react-icons/ci";
import SpaceContent from '../content/spacecontent'
import '../style/ServiceHome.css';
import Placeholder from '../../assets/GroupCenter.svg'

const ServiceHome = () => {
    return (
        <div>
            <h1 className='Txt_center'>Nuestros Servicios</h1>
            <SpaceContent />
            <div className="service-container">
                <div className="service-card">
                    <CiGlobe />
                    <h2>Desarrollo Web</h2>
                    <p>Creamos sitios web responsivos y atractivos que impulsan tu presencia en línea.</p>
                </div>
                <div className="service-card">
                    <IoCode />
                    <h2>Desarrollo de Software</h2>
                    <p>Desarrollamos soluciones de software personalizadas para optimizar tus procesos de negocio.</p>
                </div>
                <div className="service-card">
                    <FiSmartphone />
                    <h2>Aplicaciones Móviles</h2>
                    <p>Diseñamos y desarrollamos aplicaciones móviles intuitivas para iOS y Android.</p>
                </div>
            </div>
            <SpaceContent />
            <h2 className='Txt_center'>Por qué elegirnos</h2>
            <SpaceContent />
            <div className="why-choose-container">
                <div className="why-choose-image">
                    <img src={Placeholder} alt='Imagen no disponible' />
                </div>
                <div className="why-choose-content">
                    <div className="why-choose-item">
                        <CiStar />
                        <p>Experiencia en múltiples industrias</p>
                    </div>
                    <div className="why-choose-item">
                        <CiStar />
                        <p>Equipo altamente calificado</p>
                    </div>
                    <div className="why-choose-item">
                        <CiStar />
                        <p>Enfoque en la innovación</p>
                    </div>
                    <div className="why-choose-item">
                        <CiStar />
                        <p>Compromiso con la calidad</p>
                    </div>
                    <div className="why-choose-item">
                        <CiStar />
                        <p>Soporte continuo</p>
                    </div>
                </div>
            </div>
            <SpaceContent />
        </div>
    );
};

export default ServiceHome;
