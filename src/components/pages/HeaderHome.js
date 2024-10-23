import React from 'react';
import '../style/HeaderHome.css';
import Placeholder from '../../assets/Logos.svg';

const HeaderHome = () => {
    return (
        <div className='section_content'>
            <div className='section_header'>
                <h1>
                    Soluciones de desarrollo web y software a medida
                </h1>
                <span>
                En Cubysoft, nos especializamos en crear soluciones digitales innovadoras que impulsan el crecimiento de tu negocio. Nuestro equipo de expertos desarrolladores combina creatividad y tecnología para ofrecer productos de alta calidad que superan tus expectativas.
                </span>
            </div>
            <div className='section_image'>
                <img src={Placeholder} alt='imagen no disponible' />
            </div>
        </div>
    );
};

export default HeaderHome;
