import { FaReact, FaCss3Alt, FaHtml5, FaPython } from "react-icons/fa";
import { SiTypescript, SiFlask } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";

import IconStack from "./IconStack";

const iconData = [
  {
    icon: <FaReact size={32} />,
    text: "React",
    isLink: false,
    link: "",
  },
  {
    icon: <SiTypescript size={32} />,
    text: "TypeScript",
    isLink: false,
    link: "",
  },
  {
    icon: <SiFlask size={32} />,
    text: "Flask",
    isLink: false,
    link: "",
  },
  {
    icon: <FaCss3Alt size={32} />,
    text: "CSS",
    isLink: false,
    link: "",
  },
  {
    icon: <FaHtml5 size={32} />,
    text: "HTML",
    isLink: false,
    link: "",
  },
  {
    icon: <FaPython size={32} />,
    text: "Python",
    isLink: false,
    link: "",
  },
  {
    icon: <RiTailwindCssFill size={32} />,
    text: "Tailwind",
    isLink: false,
    link: "",
  },
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

          <IconStack iconData={iconData} ></IconStack>
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
