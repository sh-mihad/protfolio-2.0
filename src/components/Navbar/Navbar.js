import React from 'react';
import logo from "../../assests/sabbir hossen.png"

const Navbar = () => {
    return (

        <div class="bg-[#0a192f] h-8 flex justify-between px-2 lg:px-10 py-6">
            <div>
                <img src={logo}  className="lg:h-12 lg:w-12  h-7 w-7" alt="" />
            </div>

            <div className="text-[#ccd6f6] text-xs lg:flex lg:gap-7  my-2 lg:text-sm mono-font  ">
                <a class="hover:text-[#5ff3d1]" href="#home"><span className="mx-0 lg:mx-1 text-[#5ff3d1]">01.</span> About</a>
                <a class="hover:text-[#5ff3d1]" href="#project"><span className="lg:mx-1 text-[#5ff3d1]">02.</span> Projects</a>
                <a class="hover:text-[#5ff3d1]" href="#expirince"><span className="lg:mx-1 text-[#5ff3d1]">03.</span> Experience</a>
                <a class="hover:text-[#5ff3d1]" href="#contact"><span className="lg:mx-1 text-[#5ff3d1]">04.</span> Contact </a>
              
            </div>
            
        </div>

    );
};

export default Navbar;