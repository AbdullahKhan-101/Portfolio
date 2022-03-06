import React from "react";
import Image from "next/image";

const Card = () => {
  return (
    <div className="flex flex-wrap mt-16 justify-evenly">
      <>
        <div className="border overflow-hidden rounded-lg max-w-[325px] flex-grow m-1 sm:m-2 mb-6 sm:mb-8 md:mb-12 border-slate-500 ">
          <div className="relative w-full h-48 transition duration-200 ease-out rounded-tr-md rounded-tl-md hover:scale-110 ">
            <Image src="/Amazon.png" objectFit="cover" layout="fill" />
          </div>
          <div className="p-2 py-3 overflow-hidden bg-slate-900">
            <h2 className="text-2xl font-semibold">Amazon clone</h2>
            <p className="mt-1 text-gray-300 line-clamp-2">
              Complete Ecommerce website with stripe integration.
            </p>
            <div className="flex mt-3">
              <p className="px-3 py-1 text-white bg-gray-700 rounded-full">
                Next js
              </p>
              <p className="px-3 py-1 ml-2 text-white bg-gray-700 rounded-full">
                Redux
              </p>
              <p className="px-3 py-1 ml-2 text-white bg-gray-700 rounded-full">
                Stripe{" "}
              </p>
            </div>
            <div className="flex justify-between mt-5">
              <a
                rel="noreferrer"
                href="https://amazon-clone-1-one.vercel.app/"
                target="_blank"
              >
                <button className="px-4 py-2 text-lg font-semibold bg-blue-500 rounded-lg hover:bg-blue-600">
                  Live Demo
                </button>
              </a>
              <a
                rel="noreferrer"
                href="https://github.com/abdullahkhan44/amazon-clone"
                target="_blank"
              >
                <button className="px-4 py-2 text-lg font-semibold bg-blue-500 rounded-lg hover:bg-blue-600">
                  View on Github
                </button>
              </a>
            </div>
          </div>
        </div>
      </>
      <>
        <div className="border overflow-hidden rounded-lg max-w-[325px] flex-grow m-1 sm:m-2 mb-6 sm:mb-8 md:mb-12 border-slate-500 ">
          <div className="relative w-full h-48 transition duration-200 ease-out rounded-tr-md rounded-tl-md hover:scale-110 ">
            <Image src="/twitter.jpg" objectFit="cover" layout="fill" />
          </div>
          <div className="p-2 py-3 overflow-hidden bg-slate-900">
            <h2 className="text-2xl font-semibold">Twitter clone</h2>
            <p className="mt-1 text-gray-300 line-clamp-2">
              Social media app where we add post with like and comment
              functionality.
            </p>
            <div className="flex mt-3">
              <p className="px-3 py-1 text-white bg-gray-700 rounded-full">
                Next js
              </p>
              <p className="px-3 py-1 ml-2 text-white bg-gray-700 rounded-full">
                Recoil
              </p>
              <p className="px-3 py-1 ml-2 text-white bg-gray-700 rounded-full">
                Firebase
              </p>
            </div>
            <div className="flex justify-between mt-5">
              <a
                rel="noreferrer"
                href="https://twitter-clone-1.vercel.app/"
                target="_blank"
              >
                <button className="px-4 py-2 text-lg font-semibold bg-blue-500 rounded-lg hover:bg-blue-600">
                  Live Demo
                </button>
              </a>
              <a
                rel="noreferrer"
                href="https://github.com/abdullahkhan44/twitter-clone"
                target="_blank"
              >
                <button className="px-4 py-2 text-lg font-semibold bg-blue-500 rounded-lg hover:bg-blue-600">
                  View on Github
                </button>
              </a>
            </div>
          </div>
        </div>
      </>
      <>
        <div className="border overflow-hidden rounded-lg max-w-[325px] flex-grow m-1 sm:m-2 mb-6 sm:mb-8 md:mb-12 border-slate-500 ">
          <div className="relative w-full h-48 transition duration-200 ease-out rounded-tr-md rounded-tl-md hover:scale-110 ">
            <Image src="/linkedin.png" objectFit="cover" layout="fill" />
          </div>
          <div className="p-2 py-3 overflow-hidden bg-slate-900">
            <h2 className="text-2xl font-semibold">Linkedin clone</h2>
            <p className="mt-1 text-gray-300 line-clamp-2">
              Social media app where we add post with Google Login
              authentication.
            </p>
            <div className="flex mt-3">
              <p className="px-3 py-1 text-white bg-gray-700 rounded-full">
                React
              </p>
              <p className="px-3 py-1 ml-2 text-white bg-gray-700 rounded-full">
                Redux
              </p>
              <p className="px-3 py-1 ml-2 text-white bg-gray-700 rounded-full">
                Firebase
              </p>
            </div>
            <div className="flex justify-between mt-5">
              <a
                rel="noreferrer"
                href="https://linkedin-clone-c45a2.web.app"
                target="_blank"
              >
                <button className="px-4 py-2 text-lg font-semibold bg-blue-500 rounded-lg hover:bg-blue-600">
                  Live Demo
                </button>
              </a>
              <a
                rel="noreferrer"
                href="https://github.com/abdullahkhan44/Linkedin-clone"
                target="_blank"
              >
                <button className="px-4 py-2 text-lg font-semibold bg-blue-500 rounded-lg hover:bg-blue-600">
                  View on Github
                </button>
              </a>
            </div>
          </div>
        </div>
      </>
      <>
        <div className="border overflow-hidden rounded-lg max-w-[325px] flex-grow m-1 sm:m-2 mb-6 sm:mb-8 md:mb-12 border-slate-500 ">
          <div className="relative w-full h-48 transition duration-200 ease-out rounded-tr-md rounded-tl-md hover:scale-110 ">
            <Image src="/airbnb.png" objectFit="cover" layout="fill" />
          </div>
          <div className="p-2 py-3 overflow-hidden bg-slate-900">
            <h2 className="text-2xl font-semibold">Airbnb clone</h2>
            <p className="mt-1 text-gray-300 line-clamp-2">
              Hotel Booking Web where we search location with date picker.
            </p>
            <div className="flex mt-3">
              <p className="px-3 py-1 text-white bg-gray-700 rounded-full">
                Next js
              </p>
              <p className="px-3 py-1 ml-2 text-white bg-gray-700 rounded-full">
                Tailwind css
              </p>
            </div>
            <div className="flex justify-between mt-5">
              <a
                rel="noreferrer"
                href="https://airbnb-clone-zeta-taupe.vercel.app/"
                target="_blank"
              >
                <button className="px-4 py-2 text-lg font-semibold bg-blue-500 rounded-lg hover:bg-blue-600">
                  Live Demo
                </button>
              </a>
              <a
                rel="noreferrer"
                href="https://github.com/abdullahkhan44/airbnb-clone"
                target="_blank"
              >
                <button className="px-4 py-2 text-lg font-semibold bg-blue-500 rounded-lg hover:bg-blue-600">
                  View on Github
                </button>
              </a>
            </div>
          </div>
        </div>
      </>
      <>
        <div className="border overflow-hidden rounded-lg max-w-[325px] flex-grow m-1 sm:m-2 mb-6 sm:mb-8 md:mb-12 border-slate-500 ">
          <div className="relative w-full h-48 transition duration-200 ease-out rounded-tr-md rounded-tl-md hover:scale-110 ">
            <Image src="/tesla.jpg" objectFit="cover" layout="fill" />
          </div>
          <div className="p-2 py-3 overflow-hidden bg-slate-900">
            <h2 className="text-2xl font-semibold">Tesla clone</h2>
            <p className="mt-1 text-gray-300 line-clamp-2">
              And this is just the beginning. With Tesla building its most
              affordable car yet,
            </p>
            <div className="flex mt-3">
              <p className="px-3 py-1 text-white bg-gray-700 rounded-full">
                React
              </p>
              <p className="px-3 py-1 ml-2 text-white bg-gray-700 rounded-full">
                Redux
              </p>
              <p className="hidden px-3 py-1 ml-2 text-white bg-gray-700 rounded-full sm:inline-flex">
                Styled-components
              </p>
            </div>
            <div className="flex justify-between mt-5">
              <a
                rel="noreferrer"
                href="https://tesla-clone2022.netlify.app/"
                target="_blank"
              >
                <button className="px-4 py-2 text-lg font-semibold bg-blue-500 rounded-lg hover:bg-blue-600">
                  Live Demo
                </button>
              </a>
              <a
                rel="noreferrer"
                href="https://github.com/abdullahkhan44/Tesla-clone"
                target="_blank"
              >
                <button className="px-4 py-2 text-lg font-semibold bg-blue-500 rounded-lg hover:bg-blue-600">
                  View on Github
                </button>
              </a>
            </div>
          </div>
        </div>
      </>
    </div>
  );
};

export default Card;
