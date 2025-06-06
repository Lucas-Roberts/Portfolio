import React from "react";
import { FaLinkedin } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";


const Hero = () => {
  return (
    <div className="flex flex-row justify-center t">
      <div className="h-vh text-center mx-2 w-110 text-[#FFFDF6] pr-11 pb-15 flex flex-col justify-center border-4 border-green-300">
        <h1 className="text-4xl font-bold py-8 text-left">
          Hi, I'm Lucas Roberts | Software Engineer
        </h1>

        <div>
          <FaLinkedin />
          <FaGithub />
          <FaYoutube/>
        </div>

        

        <div className="flex justify-center items-center ">
          <p className="text-m font-medium text-left">
            Im a Bournemouth University Gradute based in Surrey, England. I enjoy problem-solving, meeting new people and trying new things
          </p>
 
        </div>


        
      </div>
      <div className="border-8 w-110 border-amber-300 mx-2  ">
        <img className="w-full rounded-3xl shadow-2xl" src="/images/IMG_4126.png">
        </img>
     </div>

    </div>
  );
};

export default Hero;
