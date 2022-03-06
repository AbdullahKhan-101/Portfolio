import Image from "next/image";
import React, { useState } from "react";
import { Menu, MenuIcon, XIcon } from "@heroicons/react/outline";
import { IconButton } from "@mui/material";
import { Facebook, LinkedIn, WhatsApp, GitHub } from "@mui/icons-material";
import Link from "next/link";

const Header = () => {
  const [burgerStatus, setBurgerStatus] = useState(false);

  return (
    <div className="sticky top-0 z-20 shadow-xl bg-slate-900">
      <main className="flex items-center justify-between max-w-6xl px-1 mx-auto text-white md:py-2 ">
        <div className="relative h-16 cursor-pointer w-36 md:w-44">
          <Image
            src="https://www.pikpng.com/pngl/b/501-5014867_portfolio-logo-png-portfolio-png-clipart.png"
            alt="infoImg"
            layout="fill"
            objectFit="contain"
          />
        </div>

        <div
          className={`absolute top-0 right-0 flex-col rounded-tr-md z-50 rounded-bl-md justify-center p-6 text-gray-200 transition-all duration-200 ease-out mt-14 md:items-center md:flex-row md:space-x-6 md:static bg-slate-900 md:bg-transparent md:mt-0 md:p-0 md:inline-flex ${
            !burgerStatus ? "hidden" : "inline-flex"
          } ${!burgerStatus ? "-translate-x-10" : "translate-x-0"}
          `}
        >
          <p className="p-3 px-6 mt-1 text-xl font-semibold rounded-md cursor-pointer lg:px-8 lg:p-4 hover:bg-slate-700 md:mt-0">
            About
          </p>
          <p className="p-3 px-6 text-xl font-semibold rounded-md cursor-pointer lg:p-4 lg:px-8 hover:bg-slate-700 ">
            Portfolio
          </p>
          <p className="p-3 px-6 mb-3 text-xl font-semibold rounded-md cursor-pointer lg:p-4 lg:px-8 hover:bg-slate-700 md:mb-0">
            Contact
          </p>
        </div>

        <div className="flex items-center space-x-[2px] lg:space-x-3">
          <a href="https://wa.me/923323876075" target="_blank">
            <WhatsApp className="w-10 text-[#25D366] cursor-pointer h-7 md:hover:-translate-y-1 transition duration-200 ease-out" />
          </a>
          <a
            href="https://www.facebook.com/profile.php?id=100028841142122"
            target="_blank"
          >
            <Facebook className="w-10 text-[#008ad3] cursor-pointer h-6 md:h-7 md:hover:-translate-y-1 transition duration-200 ease-out hidden sm:inline-flex" />
          </a>
          <a href="" target="_blank">
            <LinkedIn className="w-10 text-[#00a0dc] cursor-pointer md:h-7 h-6 md:hover:-translate-y-1 transition duration-200 ease-out" />
          </a>
          <a target="_blank" href="https://github.com/abdullahkhan44">
            <GitHub className="w-10 text-[#fff]  cursor-pointer md:h-7 h-6 md:hover:-translate-y-1 transition duration-200 ease-out" />
          </a>

          <IconButton>
            <MenuIcon
              className={`-mr-1 -ml-2 sm:-ml-1 w-6 h-6 cursor-pointer md:hidden text-white transition duration-200 ease-out ${
                !burgerStatus ? "inline-flex" : "hidden"
              }`}
              onClick={() => setBurgerStatus(true)}
            />
          </IconButton>
          {burgerStatus && (
            <IconButton>
              <XIcon
                onClick={() => setBurgerStatus(false)}
                className="w-6 h-6 -ml-6 -mr-1 text-white transition duration-200 ease-out cursor-pointer md:hidden"
              />
            </IconButton>
          )}
        </div>
      </main>
    </div>
  );
};

export default Header;
