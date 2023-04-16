import React from 'react';
import project1 from "../../assests/projects/courseArena.png"
import { GoMarkGithub,GoLinkExternal} from "react-icons/go";

const Projects = () => {
    return (
        <div className="mx-5 lg:m-32">
            <h2 className='text-3xl my-8 text-center mono-font text-[#cbd4f0] font-semibold'><span className="px-2 text-[#5ff3d1]">03.</span>Some Things I’ve Built</h2>



            <div className="flex relative w-10/12 mx-auto  items-center mt-20">
                <div
                    class="w-[550px] h-[350px] bg-[url('/public/projects/courseArena.png')] bg-cover bg-center z-0 rounded-md">
                    <div class="w-full h-full flex  justify-center items-center  backdrop-brightness-50 hover:backdrop-brightness-100">

                    </div>
                </div>

                <div className="absolute right-1">
                    <p className="text-[#5ff3d1] text-lg text-end my-2 mono-font">Featured Project</p>
                    <h2 className='text-3xl  text-end mono-font text-[#cbd4f0] hover:text-[#5ff3d1] font-semibold'>Tech Stack</h2>
                    <div className="text-end w-[460px] z-50 bg-[#112240] text-[#cbd4f0] my-5 p-5 rounded-md rop-shadow-lg">
                        <p>A minimal, dark blue theme for VS Code, Sublime Text, Atom, iTerm, and more. Available on Visual Studio Marketplace, Package Control, Atom Package Manager, and npm.</p>
                    </div>

                    <div className="text-[#ccd6f6] text-xs lg:flex lg:gap-7  my-2 lg:text-sm mono-font justify-end">
                        <p class="hover:text-[#5ff3d1]" href="#home">Github</p>
                        <p class="hover:text-[#5ff3d1]" href="#home">Github</p>
                        <p class="hover:text-[#5ff3d1]" href="#home">Github</p>
                        <p class="hover:text-[#5ff3d1]" href="#home">Github</p>
                    </div>
                    <div className="flex justify-end gap-3 mt-5 text-2xl text-[#cbd4f0]">
                       <a href="/" className="hover:text-[#5ff3d1]"> <GoMarkGithub/></a>
                       <a href="/" className="hover:text-[#5ff3d1]"> <GoLinkExternal/></a>
                      
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Projects;