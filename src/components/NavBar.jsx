import React from 'react';
import { useNavigate } from 'react-router-dom';

const NavBar = () => {

    const navigate = useNavigate();

    return (
        <>
        <div className="fixed flex bg-navbar w-full h-[5em] justify-start ">

            {/*menu */}
            <div className="flex w-[5em] ml-[2em] mt-[0.5em] mr-[2em] h-[4em] cursor-pointer">
                <img src="https://res.cloudinary.com/dncasxk1e/image/upload/v1740231322/portfolio/c0wrlflqfri1eo7hmmfi.png" alt="menu"></img>
            </div>

            {/*girlyver logo */}
            <div className="flex text-white ml-[2em] mr-[2em] text-[3em]">
                <h1>GIRLYVER</h1>
            </div>

            {/*Home Portfolio About buttons*/}
            <div className="flex text-white gap-[2em] w-full justify-end group">
                <button onClick={() => {navigate('/')}} className="mt-[1.5em] h-[1.5em] group-hover:block">Home</button>
                <button onClick={() => {navigate('/portfolio')}} className="mt-[1.5em] h-[1.5em]">Portfolio</button>
                <button onClick={() => {navigate('/about')}} className="mr-[2em] mt-[1.5em] h-[1.5em]">About</button>

                

                <div className="absolute bg-blue-500 w-[3em] h-[0.2em] translate-x-[-12.3rem] hidden translate-y-[3em]"></div>
            </div>

        </div>
        </>
    )
}

export default NavBar;