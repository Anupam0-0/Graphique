import { LoginForm } from "../../components/login-form"
import { Link } from 'react-router'
import { FaChevronLeft } from 'react-icons/fa'

export default function Page() {
  return (
    <div className="h-screen bg-[#F9F7EE] flex flex-col">
      <nav className="p-4 lg:px-16 flex flex-start" >
        <Link to='/' className="font-semibold flex text-lg  items-center "> <FaChevronLeft /> &nbsp; <span className="text-2xl">Back</span> </Link>
      </nav>
    <div className="flex flex-col  w-full items-center justify-center p-6  md:p-10">
      
      <div className="w-full max-w-sm">
        <LoginForm />
      </div>
    </div>
    </div>
  )
}