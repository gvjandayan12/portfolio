import React from 'react'
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
const About = () => {
    return (
        <>
        <img className="filter brightness-[0.4] fixed" src="https://res.cloudinary.com/dncasxk1e/image/upload/v1740231324/portfolio/jxt3prhqt1pogrp1ux0z.jpg" alt="girlyAbout" />
        <img className="w-[300px] h-[400px] left-[50px] top-[200px] rounded-[20px] border-4 border-yellow-500 fixed" src="https://res.cloudinary.com/dncasxk1e/image/upload/v1740231324/portfolio/fferrzgyc2g1tvzyg3kv.jpg" alt="girlyAbout" />

        <div className="w-full h-[1500px] top-[0px] absolute">
            <h1 className="text-white ml-[500px] text-[45px] translate-y-[100px]">Girlyver C. Jandayan</h1>
            <h1 className="w-[1000px] h-[50px] text-white ml-[500px] translate-y-[120px]">Hi I am Girlyver C. Jandayan Bachelor of Science in Entertainment & Multimedia Computing student from Xavier University Ateneo de Cagayan, aspiring Multimedia Artist to be capable of doing things like Computer Programming, Sound Engineering, Music & Arts. <br></br> <br></br>
            I aim to be the best version of myself, to achieved on what other people can’t do as I write my own journey through hardship and difficult times. Allow me to introduce myself to have the ability to do different types of fields in multimedia and I believe in the “Trust the process.” and eventually you’ll become what you see. <br></br> <br></br>
            Be part of my journey as I walk alone in a distant empty void place and be the people who’ll help me to become more better in my future career. Collaborate with me and feel free to be in touch with me and I am willing to help you, to give you service that I can do, Thank You.</h1>        
            <div className="bg-black filter text-white text-[25px] opacity-60 rounded-[30px] border-4 border-yellow-400 w-[1000px] h-[500px] ml-[500px] translate-y-[500px]">
                <p className="ml-[50px]">Birthday: January 9, 2005</p>
                <p className="ml-[50px]">Age: 20</p>
                <p className="ml-[50px]">Socials: Facebook, Instagram, GitHub</p>
                <p className="ml-[50px]">City: Cagayan de Oro City, Philippines</p>
                <p className="ml-[50px]">Email: girlyverjandayan@gmail.com</p>
                <p className="ml-[50px]">Website: Coming Soon</p>
                <p className="ml-[50px]">Degree: Next Life</p>
                <p className="ml-[50px]">Contact: 09700349822</p>
                <p className="ml-[50px]">Occupation: Student</p>
                <p className="ml-[50px]">Company: Tindahan Ni Girly</p>
                <p className="ml-[50px]">Dream: 5 Things In Life T^T</p>
            
            </div>




        </div>
        

        <NavBar />

        <div className="bg-sky-500 w-full h-[1500px]">
        </div>
        <Footer />
        </>
    )
}

export default About;