import React from 'react';
import HeaderHome from './pages/HeaderHome'
import SpaceContent from './content/spacecontent';
import Space from './content/space'
import ServiceHome from './pages/ServicesHome';
import Slider from './pages/SliderHome';

const Home = () => {
    return (
        <div>
            <Space/>
            <HeaderHome/>
            <SpaceContent/>
            <ServiceHome/>
            <Space/>
            <Slider/>
        </div>
    );
};

export default Home;
