import ProjectCardStack from "./ProjectCardStack";

const projectCardData = [
  {
    name: "Accesible",
    description: "Accesible is a accesbility chrome extension. It is intended to be a one-stop shop for all accesbility needs when using chrome ",
    image: "/images/IMG_4126.png",
    liveLink: "https://github.com/Lucas-Roberts",
    sourceCodeLink:"https://github.com/Lucas-Roberts",
  },
  {
    name: "React Native App",
    description: "React Native App",
    image: "/images/IMG_4126.png",
    liveLink: "https://github.com/Lucas-Roberts",
    sourceCodeLink:"https://github.com/Lucas-Roberts",
  },
];


const Projects = () => {
  return (
    <div className="flex flex-row justify-center h-full items-center">

    <ProjectCardStack projectCardData={projectCardData}/>


    </div>
  );
};

export default Projects;