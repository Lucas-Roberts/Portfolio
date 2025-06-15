import ProjectCardStack from "./ProjectCardStack";

const Project = [
  "Accesible",
  "React Native App"
]

const ProjectDesc = [
  "Accesible",
  "React Native App"
]


const Projects = () => {
  return (
    <div className="flex flex-row justify-center h-full items-center">

    <ProjectCardStack Project={Project} ProjectDesc={ProjectDesc} />


    </div>
  );
};

export default Projects;