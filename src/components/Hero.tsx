import React from "react";
import { FaLinkedin } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";


const Hero = () => {
  return (
    <div className="flex flex-row justify-evenly border-2 border-amber-950">
      <div className="flex flex-col w-2xl text-[#FFFDF6]  border-2 border-amber-100 ">
        <h1 className="text-6xl font-bold py-2 text-left">
          Hi, I'm Lucas Roberts | Software Engineer
        </h1>

        <div className="flex justify-between w-28 border-2  border-amber-200">
          <FaLinkedin size={32} color="#0b79b5" />
          <FaGithub size={32} color="#5c6bbf"/>
          <FaYoutube size={32} color="#ff0335"/>
        </div>

        

        <div className="flex items-center my-6">
          <p className="text-lg font-medium text-left">
            Full-stack Developer
          </p>
 
        </div>


        
      </div>


    </div>
  );
};

export default Hero;
