import React from "react";
import { Button } from "../ui/button";

const Hero = () => {
  return (
    <div
      className="flex flex-col md:flex-row h-screen justify-between pb-28 pt-12 px-4 sm:px-6 md:px-8 lg:px-12 mx-auto bg-[#FFEDD7] gap-10 md:gap-20"
      id="hero"
    >
      <div className="flex flex-col justify-center w-full md:w-1/2">
        <h1 className="text-4xl md:text-5xl">Hi, I'm Henok.</h1>
        <p className="text-xl md:text-2xl w-full md:w-5/6 mt-4 md:mt-0">
          With a passion for creating seamless digital experiences, I specialize
          in crafting innovative and robust web solutions. From front-end design
          to back-end development, I bring your ideas to life with cutting-edge
          technologies and a keen eye for detail. Let's collaborate to build the
          next big thing on the web.
        </p>
        <Button size={"lg"} className="mt-6 md:mt-10">
          See projects
        </Button>
      </div>
      <div className="relative w-full md:w-1/2 mt-4 md:mt-0 flex justify-center items-center">
        <img
          src="/p-1.png"
          alt="Hero Image"
          className="w-1/4 md:w-full h-auto"
        />
      </div>
    </div>
  );
};

export default Hero;
