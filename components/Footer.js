import { Facebook, GitHub, LinkedIn, WhatsApp } from "@mui/icons-material";
import React from "react";

const Footer = () => {
  return (
    <div className=" text-white bg-slate-900 bg-opacity-[96%]">
      <div className="max-w-6xl px-2 mx-auto pt-11 md:pt-24">
        <hr className="w-[100%]  mx-1  py-3 border-t border-x-blue-500 border-y-gray-500" />
        <div className="grid grid-cols-1 mt-10 sm:grid-cols-2 max-w-[350px]">
          <div className="  max-w-[140px] flex-grow ">
            <p className="text-gray-300">Call</p>
            <p className="mt-1 font-semibold sm:mt-3">0332-3876075</p>
          </div>
          <div className=" max-w-[140px] flex-grow sm:ml-4 md:ml-20 mt-5 sm:mt-0">
            <p className="text-gray-300">Email</p>
            <p className="mt-1 font-semibold sm:mt-3">
              shamsabdullah318@gmail.com
            </p>
          </div>
        </div>
        <div className="flex justify-between pb-4 mt-12">
          <p className="hidden sm:inline-flex">
            Passionate about learning new technologies.
          </p>
          <p>
            <div className="flex items-center space-x-[2px] lg:space-x-3">
              <a rel='noreferrer' href="https://wa.me/923323876075" target="_blank">
                <WhatsApp className="w-10 text-[#25D366] cursor-pointer h-7 md:hover:-translate-y-1 transition duration-200 ease-out" />
              </a>
              <a
                rel='noreferrer' href="https://www.facebook.com/profile.php?id=100028841142122"
                target="_blank"
              >
                <Facebook className="w-10 text-[#008ad3] cursor-pointer h-6 sm:h-7 md:hover:-translate-y-1 transition duration-200 ease-out " />
              </a>
              <a rel='noreferrer' href="" target="_blank">
                <LinkedIn className="w-10 text-[#00a0dc] cursor-pointer md:h-7 h-6 md:hover:-translate-y-1 transition duration-200 ease-out" />
              </a>
              <a target="_blank" rel='noreferrer' href="https://github.com/abdullahkhan44">
                <GitHub className="w-10 text-[#fff]  cursor-pointer md:h-7 h-6 md:hover:-translate-y-1 transition duration-200 ease-out" />
              </a>
            </div>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
