import React from 'react';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';


const About = () => {
    return (
        <>
        <NavBar />
        <div className="flex justify-center filter brightness-[0.5] bg-blue-500 translate-y-[5em]">
            <img className="h-[1523px w-[1995px] translate-y-[em]" src="https://res.cloudinary.com/dncasxk1e/image/upload/v1740231324/portfolio/jxt3prhqt1pogrp1ux0z.jpg" alt="background" ></img>
        </div>
        <Footer />
        
        </>
    )
}

export default About;