const Contact = () => {
  
  
  
  return (
    <div className="flex flex-row justify-center h-[35dvh] w-full p-9">

      <div className="flex h-full w-full   rounded-lg bg-white/13 border border-gray-200/25 backdrop-blur-sm shadow-lg ">


        <div className="flex h-full w-[65%] font-bold text-5xl items-center justify-center">
          <h2 className="text-white">Lucas Roberts.</h2>
        </div>

        <div className="flex flex-col h-full w-[15%] items-center justify-center">
          <h4 className="text-white font-medium text-lg">Explore</h4>

          <button className="text-white">Home</button>
          <button className="text-white">About</button>
          <button className="text-white">Projects</button>
          <button className="text-white">Contact</button>
          

        </div>

        <div className="flex flex-col h-full w-[15%] items-center justify-center">
          <h4 className="text-white font-medium text-lg">Let's Connect</h4>

          <button className="text-white">Linkedin</button>
          <button className="text-white">Youtube</button>
          <button className="text-white">Instagram</button>
          <button className="text-white">Github</button>

        
        </div>

        

      
      
      
      
      
      
      
      </div>


        


    </div>
  );
};

export default Contact;