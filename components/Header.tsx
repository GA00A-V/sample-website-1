import {useState} from "react";
import Sidebar from "./Sidebar";

export default function Header(){
    let [open, setOpen] = useState(false);
    return (
    <header>
        <nav className="bg-transparent absolute w-full">
            <div className="container px-6 py-4 mx-auto md:flex md:justify-between md:items-center">
                <div className="flex items-center justify-between">
                    <div>
                        {/* eslint-disable-next-line @next/next/no-html-link-for-pages */}
                        <a className="text-2xl font-bold transition-colors duration-200 transform text-white lg:text-3xl hover:text-gray-700 hover:text-gray-300"
                           href="/">Brand</a>
                    </div>

                    <div className="flex md:hidden">
                        <button type="button"
                                onClick={()=>{setOpen(!open)}}
                                className="text-gray-200 hover:text-gray-400 focus:outline-none focus:text-gray-400"
                                aria-label="toggle menu">
                            <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current">
                                <path fillRule="evenodd"
                                      d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"></path>
                            </svg>
                        </button>
                    </div>
                </div>

                <div className={(open)?"items-center md:flex text-center":"items-center md:flex text-center hidden"}>
                    <div className="flex md:items-center bg-white md:bg-transparent justify-items-center flex-col md:flex-row md:mx-6">
                        {/* eslint-disable-next-line @next/next/no-html-link-for-pages */}
                        <a className="my-1 font-bold text font-medium transition-colors duration-200 transform text-black md:text-gray-200 hover:text-indigo-400 md:mx-4 md:my-0"
                           href="/">Home</a>
                        {/* eslint-disable-next-line @next/next/no-html-link-for-pages */}
                        <a className="my-1 font-bold text font-medium transition-colors duration-200 transform text-black md:text-gray-200 hover:text-indigo-400 md:mx-4 md:my-0"
                           href="/#about">About</a>
                        {/* eslint-disable-next-line @next/next/no-html-link-for-pages */}
                        <a className="my-1 font-bold text font-medium transition-colors duration-200 transform text-black md:text-gray-200 hover:text-indigo-400 md:mx-4 md:my-0"
                           href="/#courses">Courses</a>
                        {/* eslint-disable-next-line @next/next/no-html-link-for-pages */}
                        <a className="my-1 font-bold text font-medium transition-colors duration-200 transform text-black md:text-gray-200 hover:text-indigo-400 md:mx-4 md:my-0"
                           href="/#pricing">Pricing</a>
                        {/* eslint-disable-next-line @next/next/no-html-link-for-pages */}
                        <a className="px-4 font-bold py-2 font-medium tracking-wide text-white capitalize transition-colors duration-200 transform bg-indigo-600 w-40 md:w-auto mx-auto rounded-md hover:bg-indigo-500 focus:outline-none focus:ring focus:ring-indigo-300 focus:ring-opacity-80"
                            href="/#contact">Contact</a>
                    </div>
                </div>
            </div>
        </nav>
        <Sidebar/>
    </header>
    )
}