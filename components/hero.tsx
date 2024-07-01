import React from "react";
import { Button } from "./ui/button";

const Hero = () => {
  return (
    <div className="flex h-screen justify-between  pt-28  px-12 md:px-6 lg:px-8 mx-auto bg-[#FFEDD7] gap-20"> {/* Adjust padding as needed */}
      <div>
        <h1 className="text-5xl ">Hi, I'm Henok.</h1>
        <p className="text-2xl w-5/6">
          With a passion for creating seamless digital experiences, I specialize
          in crafting innovative and robust web solutions. From front-end design
          to back-end development, I bring your ideas to life with cutting-edge
          technologies and a keen eye for detail. Let's collaborate to build the
          next big thing on the web.
        </p>
        <Button  size={"lg"} className="mt-10">See projects</Button>
      </div>
      <div>
        <img src="/images/21.png" alt="" width={700} height={700}/>
      </div>
    </div>
  );
};

export default Hero;
