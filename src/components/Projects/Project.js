import React from 'react';
import { GoMarkGithub,GoLinkExternal} from "react-icons/go";
const Project = ({project}) => {
    const {style,name,tech,des,liveLink,gitLink,id} = project
    return (
        <div className={`flex  relative w-10/12 mx-auto  items-center my-28 ${id % 2 === 0 && "flex-row-reverse"}`}>

        {/* porject image part  */}
        <div
            class={`${style}`}>
            <div class="w-full h-full flex  justify-center items-center  backdrop-brightness-50 hover:backdrop-brightness-100">

            </div>
        </div>

        <div className={`absolute ${id % 2 === 0 ? "left-1 ":"right-1 text-end"}`}>
            <p className={`text-[#5ff3d1] text-lg    my-2 mono-font`}>Featured Project</p>
            <h2 className='text-3xl   mono-font text-[#cbd4f0] hover:text-[#5ff3d1] font-semibold'>{name}</h2>
            <div className=" w-[460px] lg:w-[500px] z-50 bg-[#112240] text-[#cbd4f0] my-5 p-5 rounded-md rop-shadow-lg">
                <p>{des}.</p>
            </div>

            <div className={`text-[#ccd6f6] text-xs lg:flex lg:gap-7   my-2 lg:text-sm mono-font ${id % 2 !== 0 && "justify-end"}`}>
             
                {
                    tech?.map(tech=><p class="hover:text-[#5ff3d1]" href="#home">{tech}</p>)
                }
            </div>
            <div className={`flex  gap-2 mt-5 text-2xl text-[#cbd4f0] ${id % 2 !== 0 && "justify-end"}`}>
               <a href={gitLink} className="hover:text-[#5ff3d1]"> <GoMarkGithub/></a>
               <a href={liveLink} className="hover:text-[#5ff3d1]"> <GoLinkExternal/></a>
              
            </div>
        </div>

    </div>
    );
};

export default Project;