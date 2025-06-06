import { useState } from "react";

const Navbar = () => {
  return (
    <div className="flex justify-center items-center h-24 w-vw">
      <div className="border-4 border-amber-950 bg-[#FFFDF6] rounded-4xl ">
        <ul className="flex">
          <li>
            {" "}
            <button className="p-4 text-black font-bold">Home</button>
          </li>
          <li>
            {" "}
            <button className="p-4 text-black font-bold">About</button>
          </li>
          <li>
            {" "}
            <button className="p-4 text-black">Projects</button>
          </li>
          <li>
            {" "}
            <button className="p-4 text-black">Contact</button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
