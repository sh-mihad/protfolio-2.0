import React from 'react';
import Project from './Project';


const projects = [
    {   
        id : 1,
        name : "PH-Resale Mart",
        tech : ["React","Tailwind CSS","Firebase","Express","Mongo Db"],
        des : "This is an online buying and selling website.A user can create two types of accounts a buyer account and a seller account.There is have admin fetures.A admin can delete any products & any user and admin can promote a user as a buyer form seller or as a admin.",
        gitLink : "https://github.com/sh-mihad/ph-resale-mart.git",
        liveLink : "https://assignmnet-12.web.app/",
        style : "w-7/12 h-[350px] bg-[url('/public/projects/ph-resale.JPG')] bg-cover bg-center z-0 rounded-md"
    },
    {   
        id : 2,
        name : "Doc-Hourse",
        tech : ["React","Tailwind CSS","Firebase","Express","Mongo Db"],
        des : "This is an online buying and selling website.A user can create two types of accounts a buyer account and a seller account.There is have admin fetures.A admin can delete any products & any user and admin can promote a user as a buyer form seller or as a admin.",
        gitLink : "https://github.com/sh-mihad/ph-resale-mart.git",
        liveLink : "https://assignmnet-12.web.app/",
        style : "w-7/12 h-[350px] bg-[url('/public/projects/doc-hourse.JPG')] bg-cover bg-center z-0 rounded-md"
    },
    {   
        id : 3,
        name : "Doc-Hourse",
        tech : ["React","Tailwind CSS","Firebase","Express","Mongo Db"],
        des : "This is an online buying and selling website.A user can create two types of accounts a buyer account and a seller account.There is have admin fetures.A admin can delete any products & any user and admin can promote a user as a buyer form seller or as a admin.",
        gitLink : "https://github.com/sh-mihad/ph-resale-mart.git",
        liveLink : "https://assignmnet-12.web.app/",
        style : "w-7/12 h-[350px] bg-[url('/public/projects/courseArena.png')] bg-cover bg-center z-0 rounded-md"
    },
]

const Projects = () => {
 
    return (
        <div className="mx-5 lg:m-32">
            <h2 className='text-3xl my-8 text-center mono-font text-[#cbd4f0] font-semibold'><span className="px-2 text-[#5ff3d1]">03.</span>Some Things I’ve Built</h2>
            {
                projects?.map(project=><Project key={project.id} project={project}/>)
            }
        </div>
    );
};

export default Projects;