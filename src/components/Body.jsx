import React from 'react'
import { useNavigate } from 'react-router-dom';
import NavBar from './NavBar';
import Footer from './Footer';
import '../index.css'
const Body = () => {
    return (
        <>
        <div>
            <img className="fixed" src="https://res.cloudinary.com/dncasxk1e/image/upload/v1740231324/portfolio/jxt3prhqt1pogrp1ux0z.jpg" alt="girly" />
           <div className="w-full h-[900px] absolute">
            <h1 className="ml-[100px] translate-y-[130px] text-[60px] font-adamina absolute">Girlyver C. Jandayan</h1>
            <h1 className="text-white ml-[240px] translate-y-[220px] text-[30px] font-adamina absolute">Multimedia Student</h1>

           </div>
           <NavBar />    
        </div>

  
        
        </>

    )

    
}

export default Body;