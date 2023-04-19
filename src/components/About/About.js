import React from 'react';

const About = () => {
    return (
        <div id="about"  className='my-10 mx-5 lg:m-32'>
            <h2 className='text-3xl mono-font text-[#ccd6f6] font-semibold'><span className="px-2 text-[#5ff3d1]">01.</span>About Me</h2>

            <p className='flex gap-4 mt-6 pr-10 text-[#ccd6f6]'> <hr className='w-20  font-bold mt-3' /> I have 2 years of experience in HTML, CSS, and WordPress and then some of the period I work as a
                freelancer on Fiverr and freelancer.com. In that period when was, I worked on my client projects with
                WordPress and I can’t build my own logic then I feel I need to learn a programing language to build my own
                logic. Then last year I did a course learning web development from Programming Hero and I learn
                Javascript, Tailwind CSS, React Js, Firebase, Git-hub, Node js, Express Js, and more React components
                Libraries and React Plugin. Now I focus on Provelem solving with js and learning Redex. Also, I have job
                experience. I was a computer operator at Masco Export Limited. At that time I was great promotion for my
                sincerity, ability, and my time management</p>
                <button className="btn mt-7 hover:bg-[#133040] duration-300 text-[#0a192f]mx-6 text-[#5ff3d1]  border-2 border-[#5ff3d1] rounded-md px-6 py-2"><a href="#about">Reumse</a></button>
        </div>
    );
};

export default About;