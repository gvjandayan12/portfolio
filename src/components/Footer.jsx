import React from 'react';

const Footer = () => {
    return (
        <>
        <div className="flex justify-center">
            <div className="flex flow-row text-white justify-center bg-navbar w-[252em] h-[10em]">
                <h1 className="h-[2em] translate-x-[27em]">Follow me : </h1>
                <div className="flex justify-center gap-[2em]  w-[50em] mt-[2em] h-[7em]">
                    <img className="cursor-pointer w-[3em] h-[3em] rounded-[2em] translate-x-[10rem]" src="https://res.cloudinary.com/dncasxk1e/image/upload/v1740231322/portfolio/vmq14lcjmgntz10hrnao.png" alt="facebook" ></img>
                    <img className="cursor-pointer w-[3em] h-[3em] rounded-[2em] translate-x-[10rem]" src="https://res.cloudinary.com/dncasxk1e/image/upload/v1740918259/gt_qngwlt.png" alt="github" ></img>
                    <img className="cursor-pointer w-[3em] h-[3em] rounded-[2em] translate-x-[10rem]" src="https://res.cloudinary.com/dncasxk1e/image/upload/v1740231323/portfolio/w19kmmz7jrfkc37oq2cw.png" alt="instagram" ></img>
                
                    <div className="flex  h-[3em] translate-y-[4rem] translate-x-[-7rem] flex-col justify-center">
                        <h1 className="">Email : girlyverjandayan@gmail.com</h1>
                        <h1 className="">Contact : 09700349822</h1>
                        <h1>@2025 Girly. All right reserved.</h1>
                    </div>
                
                </div>
    
            </div>
        </div>
     
        </>
    )
}

export default Footer;