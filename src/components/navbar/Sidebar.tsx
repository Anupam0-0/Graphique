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
      className={`fixed inset-y-0 right-0 z-30 w-96 bg-[#F9F7EE] border-b text-slate-900 transform transition-transform duration-300 ease-in-out shadow-2xl ${
        isNavOpen ? "translate-x-0" : "translate-x-full"
      }`}
    >
      <div className="flex flex-col h-full">
        <div className="p-3 border-b-2">
          <button
            onClick={() => setIsNavOpen(false)}
            className="text-slate-950 flex w-full justify-end hover:text-gray-800 "
            aria-label="Close menu"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <nav className="flex-grow">
          <ul className="space-y-2 p-6 px-8">
            <li>
              <Link to="/" className="block py-2 hover:text-gray-800 text-4xl" onClick={() => setIsNavOpen(false)}>
                Home
              </Link>
            </li>
            <li>
              <button className="flex items-center w-full py-2 hover:text-gray-800 text-4xl">
                Features <GoChevronDown className="ml-1" />
              </button>
            </li>
            <div className="pl-4">
              <li className="text-2xl hover:text-slate-500" >Feature 1</li>
              <li className="text-2xl hover:text-slate-500" >Feature 2</li>
              <li className="text-2xl hover:text-slate-500" >Feature 3</li>
            </div>
            <li>
              <Link to="/main" className="block py-2 hover:text-gray-800 text-4xl" onClick={() => setIsNavOpen(false)}>
                Main
              </Link>
            </li>
          </ul>
        </nav>
        <div className="p-4 space-y-2">
          <Link
            to="/#"
            className="flex items-center justify-center w-full py-2 px-4 bg-slate-100 hover:bg-slate-200 rounded-md"
            onClick={() => setIsNavOpen(false)}
          >
            <FaGithub className="mr-2" /> Github
          </Link>
          <Link
            to="/auth/login"
            className="flex items-center justify-center w-full py-2 px-4 bg-slate-100 hover:bg-slate-200 rounded-md"
            onClick={() => setIsNavOpen(false)}
          >
            Log in
          </Link>
        </div>
      </div>
    </div>
  );
}

