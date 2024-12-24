import React from 'react';
import { GiDialPadlock } from "react-icons/gi";
import { CiStar } from "react-icons/ci";
import { GiLongLeggedSpider } from "react-icons/gi";
import { GiFallingBomb } from "react-icons/gi";
import { GiChewedSkull } from "react-icons/gi";
import SpaceContent from '../content/spacecontent'
import '../style/ServiceHome.css';
import Placeholder from '../../assets/GroupCenter.svg'

const ServiceHome = () => {
    return (
        <div>
            <h1 className='Txt_center'>Nuestros Servicios de Ciberseguridad</h1>
            <SpaceContent />
            <div className="service-container">
                <div className="service-card">
                    <GiDialPadlock />
                    <h2>Auditoría de Seguridad</h2>
                    <p>Realizamos auditorías exhaustivas para identificar vulnerabilidades en tus sistemas.</p>
                </div>
                <div className="service-card">
                    <GiLongLeggedSpider />
                    <h2>Consultoría en Ciberseguridad</h2>
                    <p>Ofrecemos asesoramiento experto para mejorar la seguridad de tu infraestructura.</p>
                </div>
                <div className="service-card">
                    <GiChewedSkull />
                    <h2>Monitoreo de Seguridad</h2>
                    <p>Proveemos servicios de monitoreo continuo para detectar y responder a amenazas en tiempo real.</p>
                </div>
                <div className='service-card'>
                    <GiFallingBomb />
                    <h2>Capacitación en Seguridad</h2>
                    <p>Capacitamos a tu equipo en las mejores prácticas de ciberseguridad.</p>
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
