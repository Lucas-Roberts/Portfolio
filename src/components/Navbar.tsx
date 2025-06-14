import { useState } from "react";

const Navbar = () => {
  const [active, setActive] = useState("Home");

  const navItems = ["Home", "About", "Projects", "Contact"];

  return (
    <div
      className="fixed top-6 left-1/2 -translate-x-1/2 z-50 px-1 flex items-center 
                    bg-white/13 backdrop-blur-sm border h-13 border-gray-200/25 
                    rounded-full shadow-lg"
    >
      <ul className="flex ">
        {navItems.map((item) => (
          <li key={item}>
            <button
              className={`px-5 py-2 rounded-full text-white transition-all duration-300 ${
                active === item
                  ? "bg-amber-400 text-white shadow-lg"
                  : "hover:text-amber-400"
              }`}
              onClick={() => setActive(item)}
            >
              {item}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Navbar;
