import React from 'react';
import { useState } from 'react';
import js from "../../assests/skills/javascript--v1.webp"
import bootstrap from "../../assests/skills/bootstrap.webp"
import chakru from "../../assests/skills/chakra-ui.webp"
import css from "../../assests/skills/css3.webp"
import html from "../../assests/skills/html-5--v1.webp"
import mui from "../../assests/skills/material-ui.webp"
import react from "../../assests/skills/react--v1.webp"
import redux from "../../assests/skills/redux.webp"
import tailwind from "../../assests/skills/tailwindcss.webp"
import express from "../../assests/skills/backend/express-js.webp"
import mdb from "../../assests/skills/backend/external-mongodb-a-cross-platform-document-oriented-database-program-logo-color-tal-revivo.webp"
import node from "../../assests/skills/backend/node-js.webp"
import jwt from "../../assests/skills/backend/jwt-3.svg"
import netlify from "../../assests/skills/othres/external-netlify-a-cloud-computing-company-that-offers-hosting-and-serverless-backend-services-for-static-websites-logo-shadow-tal-revivo.webp"
import vercel from "../../assests/skills/othres/gd1ferzh1vbopo15yysy.svg"
import git from "../../assests/skills/othres/git.webp"
import github from "../../assests/skills/othres/github.webp"
import googling from "../../assests/skills/othres/google-logo.webp"
import wp from "../../assests/skills/othres/WordPress_blue_logo.svg.png"
import firebase from "../../assests/skills/othres/firebase.webp"
import Skill from './Skill';

const Skills = () => {

    const skills = [
        {
            id:1,
            name: 'Javascript',
            img: js,
            category: "frontend",
            bgColor : "#475569"
        },
        {
            id:2,
            name: 'Bootstrap',
            img: bootstrap,
            category: "frontend",
            bgColor : "#475569"
        },
        {
            id:3,
            name: 'Chakru',
            img: chakru,
            category: "frontend",
            bgColor : "#475569"
        },
        {
            id:4,
            name: 'CSS',
            img: css,
            category: "frontend",
            bgColor : "#475569"
        },
        {
            id:5,
            name: 'HTML',
            img: html,
            category: "frontend",
            bgColor : "#475569"
        },
        {
            id:6,
            name: 'MUI',
            img: mui,
            category: "frontend",
            bgColor : "#475569"
        },
        {
            id:7,
            name: 'React',
            img: react,
            category: "frontend",
            bgColor : "#475569"
        },
        {
            id:8,
            name: 'Tailwind',
            img: tailwind,
            category: "frontend",
            bgColor : "#475569"
        },
        {
            id:9,
            name: 'Redux',
            img: redux,
            category: "frontend",
            bgColor : "#475569"
        },
        {
            id:10,
            name: 'Node',
            img: node,
            category: "backend",
            bgColor : "#475569"
        },
        {
            id:11,
            name: 'Express Js',
            img: express,
            category: "backend",
            bgColor : "#475569"
        },
        {
            id:12,
            name: 'Mongo DB',
            img: mdb,
            category: "backend",
            bgColor : "#475569"
        },
        {
            id:13,
            name: 'Json Web Token',
            img: jwt,
            category: "backend",
            bgColor : "#475569"
        },
        {
            id:14,
            name: 'Netlify',
            img: netlify,
            category: "others",
            bgColor : "#475569"
        },
        {
            id:15,
            name: 'Vercel',
            img: vercel,
            category: "others",
            bgColor : "#475569"
        },
        {
            id:16,
            name: 'Git',
            img: git,
            category: "others",
            bgColor : "#475569"
        },
        {
            id:17,
            name: 'GitHub',
            img: github,
            category: "others",
            bgColor : "#475569"
        },
        {
            id:18,
            name: 'WordPress',
            img: wp,
            category: "others",
            bgColor : "#475569"
        },
        {
            id:19,
            name: 'Googling',
            img: googling,
            category: "others",
            bgColor : "#475569"
        },
        {
            id:20,
            name: 'Firebse',
            img: firebase,
            category: "others",
            bgColor : "#475569"
        },
    ]

    const [active, setActive] = useState("frontend")



    return (
        <div className="my-10 mx-5 lg:m-32 h-[700px] ">
            <h2 className='text-3xl my-8 text-center mono-font text-[#cbd4f0] font-semibold'><span className="px-2 text-[#5ff3d1]">03.</span>Tech Stack</h2>

            <div className="flex justify-center gap-2 w-1/3 px-3 mx-auto">
                <button onClick={() => setActive("frontend")} className={`btn text-center  ${active === "frontend" ? "bg-[#cbd2e92e] text-[#5ff3d1]" : "text-[#5ff3d1]"}  border-2 border-[#5ff3d1] rounded-md px-6 py-2`}>Frontend</button>

                <button onClick={() => setActive("backend")} className={`btn text-center  ${active === "backend" ? "bg-[#cbd2e92e] text-[#5ff3d1]" : "text-[#5ff3d1]"}  border-2 border-[#5ff3d1] rounded-md px-6 py-2`}>Backend</button>

                <button onClick={() => setActive("others")} className={`btn text-center  ${active === "tools" ? "bg-[#cbd2e92e] text-[#5ff3d1]" : "text-[#5ff3d1]"}  border-2 border-[#5ff3d1] rounded-md px-6 py-2`}>others</button>
            </div>

            <div className="grid  grid-cols-2 md:grid-cols-4 mt-16 place-items-stretch gap-10 text-white  w-9/12 mx-auto ">
              {
                  skills?.filter(skill=>skill.category ===active).map(skill=><Skill key={skill?.id} skill={skill}/>)
              }           
            </div>

        </div>
    );
};

export default Skills;