import React from 'react';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';

const Portfolio = () => {
    return (
    <>

    <div className="bg-sky-700 w-[1513px] h-[3000px]">
        <img className="filter brightness-[0.4] fixed" src="https://res.cloudinary.com/dncasxk1e/image/upload/v1740231324/portfolio/jxt3prhqt1pogrp1ux0z.jpg" alt="image" />
    
        <div className="bg-black w-[550px] h-[600px] border-4 border-yellow-500 rounded-[30px] left-[900px] top-[120px] absolute filter opacity-[0.7]">
            <h1 className="text-white text-[30px] ml-[25px] translate-y-[10px]">Background:</h1>
            <img className="w-[170px] h-[80px] absolute right-[400px] top-[70px]" src="https://res.cloudinary.com/dncasxk1e/image/upload/v1740303525/java_dlxqby.png" alt="java" />
        </div>

        <h1 className="w-[750px] h-[200px] top-[120px] text-[25px] left-[50px] text-white absolute">Java - 1st year college Computer Programming course I studied Java as my main language in my 1st year college journey using GUI.</h1>

        <h1 className="w-[750px] h-[200px] top-[230px] text-[25px] left-[50px] text-white absolute">Python - Way back senior high school I studied Python connecting to MySQL database.</h1>

        <h1 className="w-[750px] h-[200px] top-[340px] text-[25px] left-[50px] text-white absolute">HTML/CSS/Javascript- 2nd year college in Database Management System I use these three as the Full-Stack Developer in our group using PHP as well for our server side language.</h1>

        <h1 className="w-[750px] h-[200px] top-[490px] text-[25px] left-[50px] text-white absolute">C#/Unity 3D - 2nd year college we use C# using Unity game engine in Computer Graphics Programming course.</h1>

        <h1 className="w-[750px] h-[200px] top-[600px] text-[25px] left-[50px] text-white absolute">React/Node JS- Throughout in my college I self learn React and Node JS pursuing computer programming</h1>


        <NavBar />
    </div>

    <Footer />


  
    </>
    
    )
}


export default Portfolio;