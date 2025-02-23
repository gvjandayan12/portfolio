import React from 'react';
import { useNavigate } from 'react-router-dom';

const NavBar = () => {
    const navigate = useNavigate();
   return (
    <>
    <div className="bg-navBar w-full h-[70px] cursor-pointer fixed">
        <h1 onClick={() => {navigate('/')}} className="text-white text-[45px] left-[150px] fixed">GIRLYVER</h1>

        <div className="h-[40px] w-[80px] top-[20px] left-[1105px] group fixed">
            <div className="bg-sky-400 w-[0px] h-[5px] top-[53px] left-[1115px] group-hover:w-[65px]  group-hover:scale-[1.2] transition duration-1000 fixed"></div>
            <button onClick={() => {navigate('/')}} className="text-white text-[23px] left-[1115px] top-[20px] fixed">Home</button>
        </div>

        <div className="w-[090px] h-[40px] fixed left-[1400px] group">
            <div className="bg-sky-400 w-[0px] h-[5px] fixed left-[1255px] top-[53px] group-hover:w-[80px] group-hover:scale-[1.2] transition duration-1000"></div>
            <button onClick={() => {navigate('/portfolio')}} className="text-white text-[23px] fixed left-[1250px] top-[20px]">Portfolio</button>
        </div>

        <div className="w-[090px] h-[40px] fixed left-[1400px] group">
            <div className="bg-sky-400 w-[0px] h-[5px] fixed left-[1400px] top-[53px] group-hover:w-[80px] group-hover:scale-[1.2] transition duration-1000"></div>
            <button onClick={() => {navigate('/about')}} className="text-white text-[23px] fixed left-[1410px] top-[20px]">About</button>
        </div>

        <img className="w-[40px] h-[50px] top-[10px] left-[25px] cursor-pointer fixed" src="https://res.cloudinary.com/dncasxk1e/image/upload/v1740231322/portfolio/c0wrlflqfri1eo7hmmfi.png" alt="logo" />

    </div>
    </>
   )
}

export default NavBar;