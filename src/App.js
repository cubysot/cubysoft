import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';

///////// Componentes /////////

import Header from './components/layouts/Header';
import Footer from './components/layouts/Footer';
import Home from './components/Home';
import About from './components/About';
import Helloworld from './components/Hello';
import Services from './components/Services';
import NotFound from './components/NotFound';

///////// Redirecciones /////////

import RedirectH from './components/src/RedirectH'
import RedirectFb from './socials/RedirectFb';
import RedirectTh from './socials/RedirectTh';
import RedirectIg from './socials/RedirectIg';
import RedirectEm from './socials/RedirectEm';
import RedirectWs from './socials/RedirectWs';
import RedirectLk from './socials/RedirectLk';
import RedirectDc from './socials/RedirectDc';

///////// DevTools /////////

import ConsoleMsg from './components/dist/ConsoleMsg';
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
        // <ConsoleMsg>
            <div className="App">
            {!hideHeaderFooter && <Header />}
            <main>
                <Routes>
                    {/* Rutas De Pagina */}
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/services" element={<Services />} />
                    <Route path='/helloworld' element={<Helloworld />} />
                    <Route path="*" element={<NotFound />} />

                    {/* Rutas De Redireccion  */}
                    <Route path='/hello-world' element={<RedirectH />} />
                    <Route path='/facebook' element={<RedirectFb />} />
                    <Route path='/threads' element={<RedirectTh />} />
                    <Route path='/instagram' element={<RedirectIg />} />
                    <Route path='/email' element={<RedirectEm />} />
                    <Route path='/whatsapp' element={<RedirectWs />} />
                    <Route path='/linkedin' element={<RedirectLk />} />
                    <Route path='/discord' element={<RedirectDc />} />

                </Routes>
            </main>
            {!hideHeaderFooter && <Footer />}
        </div>
        // </ConsoleMsg>
    );
};

export default App;
