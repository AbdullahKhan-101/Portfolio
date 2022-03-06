import React from "react";
import Card from "./Card";
import img1 from "../public/Amazon.png";

const Portfolio = () => {
  return (
    <div className="text-white bg-slate-900 bg-opacity-[96%]">
      <div className="max-w-6xl px-2 mx-auto pt-11 md:pt-20">
        <div className="max-w-xl mx-auto">
          <h1 className="max-w-xl text-center pb-[2px]  text-4xl font-semibold md:text-5xl md:pb-1 mt-1 ">
            These are my Projects
          </h1>
          <p className="max-w-xl mt-6 text-lg leading-8 text-center text-gray-300 md:text-left sm:w-full">
            These are some of the Fictional projects that I worked on. I have
            created some projects that help me understand more of the technology
            that I use.
          </p>
        </div>

        {/* <Card img="https://d2908q01vomqb2.cloudfront.net/7b52009b64fd0a2a49e6d8a939753077792b0554/2021/10/14/2021-aws-hands-on-labs-2.png" /> */}
        {/* <Card img={require("/Amazon.png")} /> */}
        <Card />
      </div>
    </div>
  );
};

export default Portfolio;
