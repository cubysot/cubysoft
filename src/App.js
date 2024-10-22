import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/layouts/Header';
import Footer from './components/layouts/Footer';
import Home from './components/Home';
import About from './components/About';
import Helloworld from './components/Hello';
import Services from './components/Services';
import NotFound from './components/NotFound';
import './App.css'

function App() {
    return (
        <Router>
            <Layout />
        </Router>
    );
}

const Layout = () => {
    const location = useLocation();

    const hideHeaderFooter = location.pathname === '/hello-world';

    return (
        <div className="App">
            {!hideHeaderFooter && <Header />}
            <main>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/services" element={<Services />} />
                    <Route path='/hello-world' element={<Helloworld />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </main>
            {!hideHeaderFooter && <Footer />}
        </div>
    );
};

export default App;
