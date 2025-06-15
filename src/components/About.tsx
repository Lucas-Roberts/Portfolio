import { FaReact, FaCss3Alt, FaHtml5, FaPython } from "react-icons/fa";
import { SiTypescript, SiFlask } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";

import IconStack from "./IconStack";

const icons = [
  <FaReact size={32} key="react" />,
  <SiTypescript size={32} key="ts" />,
  <SiFlask size={32} key="flask" />,
  <FaCss3Alt size={32} key="css" />,
  <FaHtml5 size={32} key="html" />,
  <FaPython size={32} key="python" />,
  <RiTailwindCssFill size={32} key="tailwind" />,
];

const iconText = [
  "react",
  "Typescript",
  "Flask",
  "CSS",
  "HTML",
  "Python",
  "Tailwind",
];

const About = () => {
  return (
    <div className="flex w-full h-full items-center justify-evenly ">
  



  
      <div className="flex flex-col justify-evenly h-full w-130  p-10">
        
        <div>
          <h2 className="text-white font-bold text-3xl mb-5 ">About Me</h2>
          <p className="text-white text-lg">
            {" "}
            I enjoy building projects that focus on usability, repsonsivness and
            attention to detail. All of the projects that you will see are fully
            deployed, I hope by looking at my projects you get a feel for who I
            am; an inquistive programmer that loves to solve problems!
          </p>
        </div>
        <div>
          <h2 className="text-white font-bold text-3xl mb-5">Skills</h2>

          <IconStack icons={icons} iconText={iconText}></IconStack>
          </div>
        </div>

        <div className="w-110 ">
          <img
            className="w-full rounded-3xl shadow-2xl"
            src="/images/IMG_4126.png"
            alt="Profile"
          />
        </div>
  
    </div>
  );
};

export default About;
