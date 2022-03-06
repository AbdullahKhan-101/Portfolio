import Image from "next/image";
import React from "react";
import Particles from "react-tsparticles";
import Banimation from "./Banimation";

const Hero = () => {
  return (
    <div className=" text-white bg-slate-900 bg-opacity-[96%]">
      <Banimation />
      <div className="max-w-6xl px-2 mx-auto pt-11 md:pt-24">
        <h1 className="max-w-lg pb-[2px] text-4xl font-semibold md:text-5xl md:pb-1 ">
          Welcome To
        </h1>
        <h1 className="max-w-lg text-3xl font-bold md:text-5xl">
          My Personal Portfolio
        </h1>
        <p className="max-w-xl mt-6 text-lg leading-8 w-[95%] sm:w-full text-gray-300">
          Hi, I'm UsamaMK, I'm a full stack Web Developer. Besides developing
          simple to complex React web apps, I provide modern solutions to web
          application.
        </p>
        <button className="px-8 py-2 my-4 mb-5 text-xl font-semibold transition duration-1000 ease-out rounded-full bg-gradient-to-tr hover:from-blue-500 sm:text-2xl hover:to-purple-500 from-purple-500 to-blue-500">
          Download Resume
        </button>
        <hr className="w-[60%]  mx-1 sm:w-[30%] py-3 border-t border-x-blue-500 border-y-purple-400" />
      </div>
    </div>
  );
};

export default Hero;
