
import { FaLinkedin } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { CiLocationOn } from "react-icons/ci";
import IconStack from "./IconStack";

const iconData = [
  {
    icon: <FaGithub size={32} key="github" />,
    text: "",
    isLink: true,
    link: "https://github.com/Lucas-Roberts",
  },
  {
    icon: <FaYoutube size={32} key="youtube" />,
    text: "",
    isLink: false,
    link: "",
  },
  {
    icon: <FaLinkedin size={32} key="linkedin" />,
    text: "",
    isLink: false,
    link: "",
  },
  {
    icon: <CiLocationOn size={32} key="location" />,
    text: "Farnborough, Hampshire",
    isLink: false,
    link: "",
  },
];


const Hero = () => {
  return (
    <div className="flex flex-row h-full items-center justify-evenly border-1 border-b-white">
      <div className="flex flex-col -translate-x-2/5 -translate-y-1/8 w-2xl text-[#FFFDF6]">
        <h1 className="text-5xl font-bold py-4 text-left">
          Hi, I'm Lucas Roberts | Software Engineer
        </h1>

        <IconStack iconData={iconData} />
        
        <div className="flex items-center opacity-75 w-100 my-6">
          <p className="text-lg leading-6 font-medium text-left">
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
