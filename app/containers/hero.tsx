import React, { useState, useEffect } from "react";
import HeroImage from "../../public/assets/heroImage.png";

const HeroLayout = () => {
  return (
    <>
      <div className="bg-hero1 bg-cover bg-no-repeat bg-center">
        <div className="flex flex-col md:flex-row px-[25px] md:px-[75px] py-[30px] md:py-[80px] h-auto min-h-[95vh] overflow-hidden transition duration-300">
          <div className="flex flex-1 justify-center items-start flex-col md:mr-[20px]">
            <h4
              className="text-[16px] lg:text-[20px] text-[#4361EE] font-medium sm:mb-3"
              style={{ letterSpacing: "2px" }}
            >
              PRIME HOME PROPMART
            </h4>
            <h1 className="text-[36px] md:text-[46px] lg:text-[54px] leading-[1.1] md:leading-[1.25] font-extrabold text-black">
              We help Discover your Dream Home
            </h1>
            <p className="leading-[1.35] text-[16px] md:text-[16px] lg:text-[18px] text-[#161C2D] font-regular mt-[20px] mb-[32px]">
              At Prime Home Propmart, we&rsquo;re dedicated to helping you find the perfect place to call home. Explore our curated listings and discover your dream home with us, where quality, comfort, and your satisfaction are our top priorities.
            </p>

            <a
              href="#cta"
              className="relative p-0.5 inline-flex items-center justify-center font-bold overflow-hidden group rounded-md"
            >
              <span className="w-full h-full bg-gradient-to-br from-[#ff8a05] via-[#ff5478] to-[#ff00c6] group-hover:from-[#ff00c6] group-hover:via-[#ff5478] group-hover:to-[#ff8a05] absolute"></span>
              <span className="relative px-6 py-3 transition-all ease-out bg-gray-900 rounded-md group-hover:bg-opacity-0 duration-400">
                <span className="relative text-white">Get in Touch</span>
              </span>
            </a>
          </div>

          <div className="flex flex-1 items-center justify-center relative">
            <div className="flex items-center justify-center relative">
              <div id="scene">
                <img
                  src="/assets/heroImage.png"
                  alt="Banner"
                  data-depth="0.3"
                  className="h-auto w-[100%]"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroLayout;
