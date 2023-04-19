import React from 'react';

const Contact = () => {
    return (
        <div className="text-center mt-10 mx-5 lg:m-32 ">
             <p className="text-[#5ff3d1] text-xl text-center mono-font"><span className="px-2 text-[#5ff3d1]">04.</span> What’s Next?    </p>


             <h1 className="font-extrabold text-2xl lg:text-6xl text-[#ccd6f6]">Get In Touch</h1>
             <p className="text-xl text-center w-7/12 mt-5 mx-auto  text-[#cbd4f0]">Although I’m not currently looking for any new opportunities, my inbox is always open. Whether you have a question or just want to say hi, I’ll try my best to get back to you! </p>
             <button className="btn mt-7 hover:bg-[#133040] duration-300 text-[#5ff3d1]  border-2 border-[#5ff3d1] rounded-md px-6 py-2"><a href="#about">Contact</a></button>

            
        </div>
    );
};

export default Contact;