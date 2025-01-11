import { useState } from "react";
import { Link } from "react-router";
import { FaGithub } from "react-icons/fa";
import { RiMenuFill } from "react-icons/ri";
import { IoMdClose } from "react-icons/io";
import { GoChevronDown } from "react-icons/go";
import { Sidebar } from "./Sidebar";

const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);

  return (
    <div>
      <div
        className="fixed w-full justify-between items-center h-20 flex z-20 bg-[#F9F7EE] 
             bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]
     text-neutral-950 hover:text-neutral-800 px-4 md:px-8 lg:px-16 opacity-100"
      >
        <Link to="/" className="text-3xl font-bold">
          Graphique
        </Link>

        <div className="flex-row items-center gap-6 hidden lg:flex">
          <div className="flex-row items-center flex gap-4 text-lg">
            <Link to="/" className="p-3">
              Home
            </Link>
            <div className="relative">
              <button
                onClick={toggleDropdown}
                className="p-3 flex items-center"
                aria-haspopup="true"
                aria-expanded={isDropdownOpen}
              >
                Docs <GoChevronDown className={`ml-1 transition-transform duration-200 ${isDropdownOpen ? 'rotate-180' : ''}`} />
              </button>
              {isDropdownOpen && <FeaturesDropdown />}
            </div>
            <Link to="/main" className="p-3">
              Pricing
            </Link>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <Link to={'/#'} className="h-9 w-9 hidden lg:flex sm:w-fit font-medium sm:scale-100 sm:py-5 sm:px-2.5 justify-center items-center rounded-3xl bg-slate-50 border hover:bg-slate-950 hover:text-slate-50">
            <FaGithub /> &nbsp; <span className="hidden sm:block">Github</span>
          </Link>
          <Link to={'/auth/login'} className="h-9 w-9 hidden lg:flex sm:w-fit font-medium sm:scale-100 sm:py-5 sm:px-2.5 justify-center items-center rounded-3xl bg-slate-50 border hover:bg-slate-950 hover:text-slate-50">
            &nbsp; <span className="hidden sm:block">Log in</span>
          </Link>
          <button
            className="text-3xl block lg:hidden hover:opacity-90"
            onClick={() => setIsNavOpen(!isNavOpen)}
            aria-label={isNavOpen ? "Close menu" : "Open menu"}
          >
            {isNavOpen ? <IoMdClose /> : <RiMenuFill />}
          </button>
        </div>
      </div>

      <Sidebar isNavOpen={isNavOpen} setIsNavOpen={setIsNavOpen} />
    </div>
  );
};

export default Navbar;

const FeaturesDropdown = () => {
  return (
    <div className="absolute top-full   w-40 bg-white border border-gray-200 rounded-md shadow-lg">
      <ul className=" text-center  py-2 px-2 gap-2  w-full">
        <li>
          <Link to="/feature1" className="block px-4  py-2  text-sm text-gray-700 rounded hover:bg-gray-100">
            Documentation
          </Link>
        </li>
        <li>
          <Link to="/feature2" className="block px-4 py-2 text-sm text-gray-700 rounded hover:bg-gray-100">
            Source Code
          </Link>
        </li>
        <li>
          <Link to="/feature3" className="block px-4 py-2 text-sm text-gray-700 rounded hover:bg-gray-100">
            Examples
          </Link>
        </li>
      </ul>
    </div>
  );
};

