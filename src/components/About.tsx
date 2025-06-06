import { FaReact } from "react-icons/fa";
import { SiTypescript } from "react-icons/si";
import { FaCss3Alt } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { SiFlask } from "react-icons/si";
import { FaPython } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";

const About = () => {
  return (
    <div className="flex flex-row  ">
      <div className="border-8 w-110 border-amber-300">
        <img
          className="w-full rounded-3xl shadow-2xl"
          src="/images/IMG_4126.png"
        ></img>
      </div>

      <div className="w-2xl border-2 ">
        <p>My skills</p>
      </div>
    </div>
  );
};

export default About;
