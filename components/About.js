import Head from "next/head";
import Image from "next/image";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const About = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="text-white bg-slate-900 bg-opacity-[96%]">
      <div
        data-aos="fade-zoom-in"
        data-aos-easing="ease-in-back"
        data-aos-delay="900"
        data-aos-offset="0"
        className="max-w-6xl px-2 mx-auto pt-11 md:pt-20"
      >
        <h1 className="max-w-lg pb-[2px] text-4xl font-semibold md:text-5xl md:pb-1 ">
          About Me
        </h1>
        <p className="max-w-xl mt-6 text-lg leading-8 w-[95%] sm:w-full text-gray-300">
          {`I am a self-learned and creative REACT developer having 0 experience
          in my field and a passionate Software Engineering student, who's
          always dedicated to his work. I can help you with all the sides of
          your project, verifying good UI/UX design and back-end. I can help you
          grow/manage your business and ideas.`}
        </p>
        <h1
          data-aos="fade-zoom-in"
          data-aos-easing="ease-in-back"
          data-aos-delay="200"
          data-aos-offset="0"
          className="max-w-lg pb-[2px] text-4xl font-semibold md:text-5xl md:pb-1 mt-14 "
        >
          Technologies
        </h1>
        <p
          data-aos="fade-zoom-in"
          data-aos-easing="ease-in-back"
          data-aos-delay="200"
          data-aos-offset="0"
          className="max-w-xl mt-6 text-lg leading-8 w-[95%] sm:w-full text-gray-300"
        >
          {`I've  worked with a range a technologies in the web development world. From Front-end to Back-end (Firebase). `}
        </p>
        {/* Two card's here */}
        <div
          data-aos="fade-up"
          data-aos-delay="300"
          data-aos-duration="1000"
          className="flex space-x-4"
        >
          <div className="mt-6 text-white bg-slate-900 p-3 flex-grow max-w-[200px] rounded-md hover:shadow-lg cursor-pointer flex  flex-col items-start pl-4">
            <div className="relative h-12 w-14">
              <Image src="/react.png" objectFit="contain" layout="fill" />
            </div>
            <h2 className="text-2xl font-roboto">Front-End</h2>
            <p className="text-gray-200 max-w-[120px] ">
              Experience with React js
            </p>
          </div>

          <div className="mt-6 text-white bg-slate-900 p-3 flex-grow max-w-[200px] rounded-md hover:shadow-lg cursor-pointer flex  flex-col items-start pl-4">
            <div className="relative w-12 h-10">
              <Image src="/firebase.png" objectFit="contain" layout="fill" />
            </div>
            <h2 className="mt-1 text-2xl font-roboto">Back-End</h2>
            <p className="text-gray-200 max-w-[120px] ">
              Experience with Firebase
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
