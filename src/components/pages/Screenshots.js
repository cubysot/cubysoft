import React from 'react';
import './Screenshots.css';

const Screenshots = () => {
    return (
        <div className="screenshots-container">
            {/* Left section */}
            <div className="screenshot-section left">
                <div className="image-container">
                    <img src="https://www.hackmetrix.com/assets/images/pages/iso-27001/certifications/assessment.svg" alt="Company screenshot 1" />
                </div>
                <div className="text-content">
                    <h2>Our Modern Workplace</h2>
                    <p>Experience our state-of-the-art facilities where innovation meets comfort. Our workspace is designed to foster creativity and collaboration.</p>
                </div>
            </div>

            {/* Right section */}
            <div className="screenshot-section right">
                <div className="text-content">
                    <h2>Latest Technology</h2>
                    <p>We use cutting-edge technology to deliver the best solutions for our clients. Our team works with modern tools and frameworks.</p>
                </div>
                <div className="image-container">
                    <img src="https://www.hackmetrix.com/assets/images/pages/home/certification/docs.svg" alt="Company screenshot 2" />
                </div>
            </div>

            {/* Add more sections as needed */}
        </div>
    );
};

export default Screenshots;