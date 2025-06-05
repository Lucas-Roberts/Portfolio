import React from "react";


const Hero = () => {
  return (
    <div className="flex flex-row justify-center">
      <div className="h-screen text-center mx-10 flex flex-col justify-center border-4 border-green-300">
        <h1 className="text-4xl font-bold md:py-6">
          Lucas Roberts
        </h1>

        <div className="flex justify-center items-center ">
          <p className="text-xl font-bold py-3">
            Full-stack web developer
          </p>
 
        </div>


        
      </div>
      <div className="border-8 border-amber-300 mx-10">
        hello
     </div>

    </div>
  );
};

export default Hero;
