import React, { useState } from 'react';


const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className='flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white'>
      <h1 className='w-full text-3xl font-bold text-[#00df9a]'>REACT.</h1>
      <ul className='hidden md:flex'>


        <li > <button className='p-4 text-#537D5D'>Home</button></li>
        <li className='p-4'> <button>About</button></li>
        <li className='p-4'> <button>Projects</button></li>
        <li className='p-4'> <button>Contact</button></li>

      </ul>

    </div>
  );
};

export default Navbar;