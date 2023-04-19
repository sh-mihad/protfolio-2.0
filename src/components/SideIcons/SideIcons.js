import React from 'react';
import { FiGithub,FiInstagram,FiLinkedin,FiFacebook,FiCodepen } from "react-icons/fi";

const SideIcons = () => {
    
    return (
        <div className="fixed bottom-0 left-10 text-[23px] flex flex-col gap-7 text-[#ccd6f6] items-center justify-center">
            <div  className="hover:-translate-y-1 hover:scale-110 hover:text-[#5ff3d1] duration-300 "   ><a href="https://github.com/sh-mihad"><FiGithub/></a></div>
            <div className="hover:-translate-y-1 hover:scale-110 hover:text-[#5ff3d1] duration-300 "><a href="https://www.instagram.com/sabbirhossenmihad/"><FiInstagram/></a></div>
            <div className="hover:-translate-y-1 hover:scale-110 hover:text-[#5ff3d1] duration-300 "><a href="https://www.linkedin.com/in/sabbir-hosen-mihad/"><FiLinkedin/></a></div>
            <div className="hover:-translate-y-1 hover:scale-110 hover:text-[#5ff3d1] duration-300 "><a href="https://www.facebook.com/sabbir.hossan.5243/"><FiFacebook/></a></div>
            <div className="hover:-translate-y-1 hover:scale-110 hover:text-[#5ff3d1] duration-300 "><a href="https://codepen.io/sh-mihad"><FiCodepen/></a></div>
            <div className="w-[1px] h-20 bg-white"></div>
        </div>
    );
};

export default SideIcons;