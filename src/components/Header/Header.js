import React from 'react';
import Typewriter from 'typewriter-effect';
import avatar from "../../assests/sabbir-hossen.png"
import mui from "../../assests/skills/material-ui.webp"
import html from "../../assests/skills/html-5--v1.webp"
import chakru from "../../assests/skills/chakra-ui.webp"
import redux from "../../assests/skills/redux.webp"




const Header = () => {
    return (
        <div className="mt-10 mx-5 lg:m-32 min-h-[360px] block  md:flex items-center relative">
            <div>
                <p className="text-[#5ff3d1] text-xl mono-font">Hi, my name is </p>
                <h1 className="font-extrabold text-2xl lg:text-6xl text-[#ccd6f6]">Sabbir Hossen.</h1>
                {/* <h1 className="title">Code that Brings Your Ideas to Life.</h1> */}
                <h4 className="flex my-3 gap-2 text-xl  text-[#5ff3d1] lg:text-3xl font-bold">I am a
                    <span className="text-[#ccd6f6]">
                        <Typewriter
                            options={{
                                strings: ['MERN Stack Developer', 'Front-End Developer', 'React-Developer'],
                                autoStart: true,
                                loop: true,
                            }}
                        />
                    </span>
                </h4>

                <p className="mt-6 text-[#ccd6f6] w-full md:w-3/4">
                    Web Development is my passion I never tierd for this, I have 2 years of expiriance on this fild. I can make lots of porject using MERN Technologis. I am expert in HTML, CSS , Javascript , React , Tailwind , Node js ,and other tacnologis
                </p>
                <button className="btn mt-7 text-[#5ff3d1]  border-2 border-[#5ff3d1] rounded-md px-6 py-2"><a href="#about">About Me</a></button>
            </div>

            <div className='md:w-3/6 mt-12 lg:mt-0'>
                <div className="bg-[#ccd6f6] rounded-full w-20 h-20 flex justify-center items-center absolute lg:-top-7 lg:right-72">
                    <img src={mui} className="w-14 h-14 " alt="" />
                </div>
                <div className="bg-[#ccd6f6] rounded-full w-16 h-16 lg:flex justify-center hidden items-center absolute top-2 -right-12">
                    <img src={html} className="w-12 h-12 " alt="" />
                </div>
                <div className="bg-[#ccd6f6] rounded-full w-14 h-14 lg:flex justify-center items-center hidden lg:absolute top-40 -right-16">
                    <img src={redux} className="w-11 h-11 " alt="" />
                </div>
                <div className="bg-[#ccd6f6] rounded-full w-14 h-14 flex justify-center items-center  absolute -bottom-5 right-12">
                    <img src={chakru} className="w-10 h-10 " alt="" />
                </div>

                <img src={avatar} width="" alt="" className='w-full  rounded-full' />
            </div>


        </div>
    );
};

export default Header;