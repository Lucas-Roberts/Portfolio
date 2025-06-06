import { useState } from "react";

const Navbar = () => {

  const [section, setSection] = useState("Home")
  
  

  return (
    <div className="flex justify-center items-center h-22 w-vw">
      <div className="border-2 border-gray-400 border-opacity-90 h-12 flex items-center bg-[#FFFDF6] rounded-4xl ">
        <ul className="flex">
          <li>
            <button className="p-4 text-black font-bold">Home</button>
          </li>
          <li>
            <button className="p-4 text-black font-bold">About</button>
          </li>
          <li>
            <button className="p-4 text-black font-bold">Projects</button>
          </li>
          <li>
            <button className="p-4 text-black font-bold">Contact</button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
