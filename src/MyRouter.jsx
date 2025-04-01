import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Portfolio from './pages/Portfolio';
import About from './pages/About';

const MyRouter = () => {
    return (
        <>
        <div>
            <Routes>
                <Route path="/" element={ <Home /> } />
                <Route path="/portfolio" element={ <Portfolio /> } />
                <Route path="/about" element={ <About /> } />
            </Routes>
        </div>
        </>
    )
}

export default MyRouter;