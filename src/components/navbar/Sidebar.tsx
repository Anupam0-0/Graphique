import { Link } from "react-router";
import { FaGithub } from "react-icons/fa";
import { GoChevronDown } from "react-icons/go";

interface SidebarProps {
  isNavOpen: boolean;
  setIsNavOpen: (isOpen: boolean) => void;
}

export function Sidebar({ isNavOpen, setIsNavOpen }: SidebarProps) {
  return (
    <div
      className={`fixed inset-y-0 right-0 z-30 w-64 bg-slate-950 text-white transform transition-transform duration-300 ease-in-out ${
        isNavOpen ? "translate-x-0" : "translate-x-full"
      }`}
    >
      <div className="flex flex-col h-full">
        <div className="p-4">
          <button
            onClick={() => setIsNavOpen(false)}
            className="text-white hover:text-gray-300"
            aria-label="Close menu"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <nav className="flex-grow">
          <ul className="space-y-2 p-4">
            <li>
              <Link to="/" className="block py-2 hover:text-gray-300" onClick={() => setIsNavOpen(false)}>
                Home
              </Link>
            </li>
            <li>
              <button className="flex items-center w-full py-2 hover:text-gray-300">
                Features <GoChevronDown className="ml-1" />
              </button>
            </li>
            <li>
              <Link to="/main" className="block py-2 hover:text-gray-300" onClick={() => setIsNavOpen(false)}>
                Main
              </Link>
            </li>
          </ul>
        </nav>
        <div className="p-4 space-y-2">
          <Link
            to="/#"
            className="flex items-center justify-center w-full py-2 px-4 bg-slate-800 hover:bg-slate-700 rounded-md"
            onClick={() => setIsNavOpen(false)}
          >
            <FaGithub className="mr-2" /> Github
          </Link>
          <Link
            to="/auth/login"
            className="flex items-center justify-center w-full py-2 px-4 bg-slate-800 hover:bg-slate-700 rounded-md"
            onClick={() => setIsNavOpen(false)}
          >
            Log in
          </Link>
        </div>
      </div>
    </div>
  );
}

