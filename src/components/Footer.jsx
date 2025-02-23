import React from 'react';

const Footer = () => {
    return (
        <div className="bg-color-footer text-white w-[1513px] top-[1000px] h-[200px] relative">
            <h1 className="flex justify-center translate-y-[170px] relative">@2025 Girly. All Right Reserved.</h1>
        
            <h1 className="flex justify-center translate-y-[-20px]">Follow me:</h1>

            <a href="https://www.facebook.com/gvjandayan12" target="_blank">
                <img className="cursor-pointer w-[40px] h-[40px] translate-y-[-10px] translate-x-[660px]" src="https://res.cloudinary.com/dncasxk1e/image/upload/v1740231322/portfolio/vmq14lcjmgntz10hrnao.png" alt="facebook" />
            </a>

            <a href="https://www.instagram.com/girlyver_/" target="_blank">
                <img className="cursor-pointer w-[60px] h-[40px] translate-x-[725px] translate-y-[-48px]" src="https://res.cloudinary.com/dncasxk1e/image/upload/v1740231323/portfolio/w19kmmz7jrfkc37oq2cw.png" alt="instagram" />
            </a>

            <a href="https://github.com/gvjandayan12" target="_blank">
                <img className="cursor-pointer w-[90px] h-[50px] translate-x-[780px] translate-y-[-90px]" src="https://res.cloudinary.com/dncasxk1e/image/upload/v1740231322/portfolio/bmsditgm9jgzpllzwyme.png" alt="github" />
            </a>


            <h1 className="translate-x-[450px] text-[25px] w-[150px] translate-y-[-170px]">Contact:</h1>
            <h1 className="translate-x-[435px] text-[25px] w-[150px]  translate-y-[-170px]">09700349822</h1>
            
            <h1 className="translate-x-[1050px] text-[25px] w-[150px]  translate-y-[-250px]">Email:</h1>
            <h1 className="translate-x-[940px] text-[25px] w-[150px]  translate-y-[-250px]">girlyverjandayan@gmail.com</h1>

        </div>
    )
}

export default Footer;