import ProjectCardStack from "./ProjectCardStack";

const Project = [
  "Accesible",
  "React Native App"
]

const ProjectDesc = [
  "Accesible",
  "React Native App"
]

const ProjectImg = [
  "/images/IMG_4126.png",
  "/images/IMG_4126.png",

]


const Projects = () => {
  return (
    <div className="flex flex-row justify-center h-full items-center">

    <ProjectCardStack Project={Project} ProjectDesc={ProjectDesc} ProjectImg={ProjectImg} />


    </div>
  );
};

export default Projects;