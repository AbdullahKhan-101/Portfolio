import Image from "next/image";
import React from "react";

const Skills = () => {
  return (
    <div className="text-white bg-slate-900 bg-opacity-[96%]">
      <div className="max-w-6xl mx-auto pt-11 md:pt-24">
        <h1 className="max-w-xl px-2 text-3xl font-semibold md:text-5xl ">
          Take a look at my skills
        </h1>
        <div className="grid grid-cols-2 mt-6 space-x-2 sm:px-2 md:grid-cols-3 lg:grid-cols-4">
          <div className="mt-6  text-white bg-slate-900 p-7 flex-grow max-w-[200px] rounded-md hover:shadow-lg cursor-pointer flex  flex-col items-center  pl-4">
            <div className="relative w-12 h-12 ">
              <Image src="/html.png" objectFit="contain" layout="fill" />
            </div>
            <h2 className="mt-1 text-2xl font-roboto">HTML</h2>
          </div>
          <div className="mt-6 text-white bg-slate-900 p-7 flex-grow max-w-[200px] rounded-md hover:shadow-lg cursor-pointer flex  flex-col items-center pl-4">
            <div className="relative w-16 h-12">
              <Image src="/css.png" objectFit="contain" layout="fill" />
            </div>
            <h2 className="mt-1 text-2xl font-roboto">CSS</h2>
          </div>
          <div className="mt-6 text-white bg-slate-900 p-7 flex-grow max-w-[200px] rounded-md hover:shadow-lg cursor-pointer flex  flex-col items-center pl-4">
            <div className="relative w-16 h-12">
              <Image src="/js.png" objectFit="contain" layout="fill" />
            </div>
            <h2 className="mt-1 text-2xl font-roboto">Javascript</h2>
          </div>
          <div className="mt-6 text-white bg-slate-900 p-7 flex-grow max-w-[200px] rounded-md hover:shadow-lg cursor-pointer flex  flex-col items-center pl-4">
            <div className="relative w-16 h-12">
              <Image src="/react.png" objectFit="contain" layout="fill" />
            </div>
            <h2 className="mt-1 text-2xl font-roboto">React</h2>
          </div>
          <div className="mt-6 text-white bg-slate-900 p-7 flex-grow max-w-[200px] rounded-md hover:shadow-lg cursor-pointer flex  flex-col items-center pl-4">
            <div className="relative w-24 h-12">
              <Image src="/n4.png" objectFit="contain" layout="fill" />
            </div>
            <h2 className="mt-1 text-2xl font-roboto">Next js</h2>
          </div>
          <div className="mt-6 text-white bg-slate-900 p-7 flex-grow max-w-[200px] rounded-md hover:shadow-lg cursor-pointer flex  flex-col items-center pl-4">
            <div className="relative w-12 h-12">
              <Image src="/redux.png" objectFit="contain" layout="fill" />
            </div>
            <h2 className="mt-1 text-2xl font-roboto">Redux</h2>
          </div>
          <div className="mt-6 text-white bg-slate-900 p-7 flex-grow max-w-[200px] rounded-md hover:shadow-lg cursor-pointer flex  flex-col items-center pl-4">
            <div className="relative w-12 h-12">
              <Image src="/firebase.png" objectFit="contain" layout="fill" />
            </div>
            <h2 className="mt-1 text-2xl font-roboto">Firebase</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
