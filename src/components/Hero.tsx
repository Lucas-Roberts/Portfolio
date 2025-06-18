import { FaLinkedin } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { CiLocationOn } from "react-icons/ci";
import IconStack from "./IconStack";

const iconData = [
  {
    icon: (
      <FaGithub
        size={32}
        key="github"
        className="text-white transition duration-200 transform hover:scale-105 hover:text-purple-500"
      />
    ),
    text: "",
    isLink: true,
    link: "https://github.com/Lucas-Roberts",
    hoverColor: "blue",
  },
  {
    icon: (
      <FaYoutube
        size={32}
        key="github"
        className="text-white transition duration-200 transform hover:scale-105 hover:text-red-600"
      />
    ),
    text: "",
    isLink: false,
    link: "",
    hoverColor: "blue",
  },
  {
    icon: (
      <FaLinkedin
        size={32}
        key="github"
        className="text-white transition duration-200 transform hover:scale-105 hover:text-blue-500"
      />
    ),
    text: "",
    isLink: true,
    link: "https://www.linkedin.com/feed/",
    hoverColor: "blue",
  },
  {
    icon: (
      <CiLocationOn
        size={32}
        key="github"
        className="text-white transition duration-200 transform hover:scale-105 hover:text-white"
      />
    ),
    text: "Farnborough, Hampshire",
    isLink: true,
    link: "https://www.google.com/maps/place/Farnborough/@51.2944539,-0.8518445,12z/data=!3m1!4b1!4m6!3m5!1s0x48742ac28424763b:0x8deb0ce49313925d!8m2!3d51.2868939!4d-0.752615!16zL20vMDFodDFj?entry=ttu&g_ep=EgoyMDI1MDYxMS4wIKXMDSoASAFQAw%3D%3D",
    hoverColor: "blue",
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
