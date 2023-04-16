import React from 'react';

const Expiriance = () => {
    return (
        <div class="container">
           <h2 className='text-3xl my-8 text-center mono-font text-[#cbd4f0] font-semibold'><span className="px-2 text-[#5ff3d1]">03.</span>Education</h2>
        <div
          class="flex flex-col md:grid grid-cols-9 mx-auto p-2 text-blue-50"
        >
          {/* <!-- left --> */}
          <div class="flex flex-row-reverse md:contents">
            <div
              class="bg-[#5ff3d1] col-start-1 col-end-5 p-4 rounded-xl my-4 ml-auto shadow-md"
            >
              <h3 class="font-semibold text-lg mb-1">Lorem ipsum</h3>
              <p class="leading-tight text-justify">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi,
                quaerat?
              </p>
            </div>
            <div class="col-start-5 col-end-6 md:mx-auto relative mr-10">
              <div class="h-full w-6 flex items-center justify-center">
                <div class="h-full w-1 bg-[#5ff3d1] pointer-events-none"></div>
              </div>
              <div
                class="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-[#5ff3d1] shadow"
              ></div>
            </div>
          </div>
          {/* <!-- right --> */}
          <div class="flex md:contents">
            <div class="col-start-5 col-end-6 mr-10 md:mx-auto relative">
              <div class="h-full w-6 flex items-center justify-center">
                <div class="h-full w-1 bg-[#5ff3d1] pointer-events-none"></div>
              </div>
              <div
                class="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-[#5ff3d1] shadow"
              ></div>
            </div>
            <div
              class="bg-[#5ff3d1] col-start-6 col-end-10 p-4 rounded-xl my-4 mr-auto shadow-md"
            >
              <h3 class="font-semibold text-lg mb-1">Lorem ipsum</h3>
              <p class="leading-tight text-justify">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Vitae, facilis.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Expiriance;