import React from 'react';
import HeaderHome from './pages/HeaderHome'
import SpaceContent from './content/spacecontent';
import Space from './content/space'
import ServiceHome from './pages/ServicesHome';

const Home = () => {
    return (
        <div>
            <Space/>
            <HeaderHome/>
            <SpaceContent/>
            <ServiceHome/>
            <Space/>
        </div>
    );
};

export default Home;
