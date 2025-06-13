import React from "react";
import { FaLinkedin } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { CiLocationOn } from "react-icons/ci";

const Hero = () => {
  return (
    <div className="flex flex-row  h-full  pt-20  pr-130 justify-evenly border-1 border-b-white">
      <div className="flex flex-col  w-2xl text-[#FFFDF6]">
        <h1 className="text-5xl font-bold py-4 text-left">
          Hi, I'm Lucas Roberts | Software Engineer
        </h1>

        <div className="flex justify-between w-90">
          <FaLinkedin size={38} color="#0b79b5" />
          <FaGithub size={38} color="#5c6bbf" />
          <FaYoutube size={38} color="#ff0335" />
          <div className="flex items-center h-10 pr-2.5 opacity-70 border-2 rounded-full">
            <CiLocationOn size={32} /> Farnborough, Hampshire
          </div>
        </div>

        <div className="flex items-center opacity-75 w-100 my-6">
          <p className="text-md font-medium text-left">
            I am a Bournemouth University graduate and a full-stack web
            developer, I enjoy meeting new people, trying new things and always
            have a new hobby!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
