const Projects = () => {
  return (
    <div className="flex flex-row justify-center">
      <div className="h-vh text-center mx-2 w-110 text-[#FFFDF6] pr-11 pb-15 flex flex-col justify-center border-4 border-green-300">
        <h1 className="text-4xl font-bold md:py-6">
          Lucas Roberts
        </h1>

        <div className="flex justify-center items-center ">
          <p className="text-xl font-bold ">
            Full-stack web developer
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

export default Projects;