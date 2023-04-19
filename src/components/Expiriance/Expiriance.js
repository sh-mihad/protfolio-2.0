import React from 'react';

const Expiriance = () => {
    return (
        <div class="mt-10 mx-5 lg:m-32">
           <h2 className='text-3xl my-8 text-center mono-font text-[#cbd4f0] font-semibold'><span className="px-2 text-[#5ff3d1]">03.</span>Education</h2>
        <div
          class="flex flex-col md:grid grid-cols-9 mx-auto p-2 text-blue-50"
        >
          {/* <!-- left --> */}
          <div class="flex flex-row-reverse md:contents ">
            <div
              class="bg-[#112240] text-[#cbd4f0] p-5 col-start-1 col-end-5  rounded-xl my-4 ml-auto shadow-md"
            >
              <h3 class="font-semibold text-lg mb-1">Bachelor of Business Administration(B.B.A)</h3>
              <p class="leading-tight text-justify my-4">
              Raipura Government Collage 
              </p>
              <p class="leading-tight text-justify my-4">
              Year: 2022 - 20226 ( Running)
              </p>
              <p class="leading-tight text-justify my-4">
              Subject: Management 
              </p>
            </div>
            <div class="col-start-5 col-end-6 md:mx-auto relative mr-10">
              <div class="h-full w-6 flex items-center justify-center">
                <div class="h-full w-1 bg-[#112240] pointer-events-none"></div>
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
                <div class="h-full w-1 bg-[#112240] pointer-events-none"></div>
              </div>
              <div
                class="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-[#5ff3d1] shadow"
              ></div>
            </div>
            <div
              class="bg-[#112240] text-[#cbd4f0] col-start-6 col-end-10 p-5 rounded-xl my-4 mr-auto shadow-md"
            >
              <h3 class="font-semibold text-lg mb-1">Higher Secondary School Certificate (H.S.C)</h3>
              <p class="leading-tight text-justify my-4">
              Narsingdi Government Collage  
              </p>
              <p class="leading-tight text-justify my-4">
              Year: 2018 – 2019 
              </p>
              <p class="leading-tight text-justify my-4">
              Board: Dhaka 
              </p>
              <p class="leading-tight text-justify my-4">
              GPA: 3.79  
              </p>
            </div>
          </div>
          {/* <!-- left --> */}
          <div class="flex flex-row-reverse md:contents">
            <div
              class="bg-[#112240] text-[#cbd4f0] col-start-1 col-end-5 p-5 pr-14 rounded-xl my-4 ml-auto shadow-md"
            >
              <h3 class="font-semibold text-lg mb-1">Secondary School Certificate (S.S.C)</h3>
              <p class="leading-tight text-justify my-4">
              Baghata Nur Aftab Adursha Bidda Pith   
              </p>
              <p class="leading-tight text-justify my-4">
              Year: 2016 – 2017
              </p>
              <p class="leading-tight text-justify my-4">
              Board: Dhaka 
              </p>
              <p class="leading-tight text-justify my-4">
              GPA: 4.06 
              </p>
            </div>
            <div class="col-start-5 col-end-6 md:mx-auto relative mr-10">
              <div class="h-full w-6 flex items-center justify-center">
                <div class="h-full w-1 bg-[#112240] pointer-events-none"></div>
              </div>
              <div
                class="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-[#5ff3d1] shadow"
              ></div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Expiriance;