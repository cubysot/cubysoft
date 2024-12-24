import React from 'react';
import HeaderHome from './pages/HeaderHome'
import SpaceContent from './content/spacecontent';
import Space from './content/space'
import ServiceHome from './pages/ServicesHome';
import Slider from './pages/SliderHome';
import ConsoleMsg from './dist/ConsoleMsg';
import Screenshots from './pages/Screenshots.js';
const Home = () => {
    return (
        <div>
            <Space/>
            <HeaderHome/>
            <SpaceContent/>
            <ServiceHome/>
            <Space/>
            <Slider/>
            <Space/>
            <Screenshots/>
            <ConsoleMsg/>
        </div>
    );
};

export default Home;
