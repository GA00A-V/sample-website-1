import {useState} from "react";

export default function Header(){
    let [open, setOpen] = useState(false);
    return (
    <header>
        {(open)?(
            <div className={'backdrop fixed w-full h-[100vh] z-10'}>
            <div
                className='flex fixed z-10 flex-col w-72 h-screen py-8 bg-white border-r dark:bg-gray-800 dark:border-gray-600 opacity-100 md:hidden'>
                <div className={'flex justify-items-end pl-60'}>
                <span onClick={() => {
                    setOpen(!open)
                }}>
                    <svg className="dark:text-white text-gray-700" xmlns="http://www.w3.org/2000/svg" width='30'
                         height='30' viewBox="0 0 512 512"><title>Close</title>
                        <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"
                              strokeWidth="32"
                              d="M368 368L144 144M368 144L144 368"/>
                    </svg>
                </span>
                </div>
                <div className="flex flex-col justify-between flex-1 mt-6">
                    <nav>
                        <a className="flex items-center px-4 py-2 text-gray-700 bg-gray-200 dark:bg-gray-700 dark:text-gray-200"
                           href="/">
                            <svg className="w-5 h-5 font-bold" viewBox="0 0 24 24" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M19 11H5M19 11C20.1046 11 21 11.8954 21 13V19C21 20.1046 20.1046 21 19 21H5C3.89543 21 3 20.1046 3 19V13C3 11.8954 3.89543 11 5 11M19 11V9C19 7.89543 18.1046 7 17 7M5 11V9C5 7.89543 5.89543 7 7 7M7 7V5C7 3.89543 7.89543 3 9 3H15C16.1046 3 17 3.89543 17 5V7M7 7H17"
                                    stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>

                            <span className="mx-4 font-medium">Home</span>
                        </a>

                        <a className="flex items-center px-4 py-2 mt-5 text-gray-600 transition-colors duration-200 transform dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700 dark:hover:text-gray-200 hover:text-gray-700"
                           href="/#about">
                            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M16 7C16 9.20914 14.2091 11 12 11C9.79086 11 8 9.20914 8 7C8 4.79086 9.79086 3 12 3C14.2091 3 16 4.79086 16 7Z"
                                    stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M12 14C8.13401 14 5 17.134 5 21H19C19 17.134 15.866 14 12 14Z"
                                      stroke="currentColor"
                                      strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>

                            <span className="mx-4 font-medium">About</span>
                        </a>

                        <a className="flex items-center px-4 py-2 mt-5 text-gray-600 transition-colors duration-200 transform dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700 dark:hover:text-gray-200 hover:text-gray-700"
                           href="/#courses">
                            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M15 5V7M15 11V13M15 17V19M5 5C3.89543 5 3 5.89543 3 7V10C4.10457 10 5 10.8954 5 12C5 13.1046 4.10457 14 3 14V17C3 18.1046 3.89543 19 5 19H19C20.1046 19 21 18.1046 21 17V14C19.8954 14 19 13.1046 19 12C19 10.8954 19.8954 10 21 10V7C21 5.89543 20.1046 5 19 5H5Z"
                                    stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>

                            <span className="mx-4 font-medium">Courses</span>
                        </a>

                        <a className="flex items-center px-4 py-2 mt-5 text-gray-600 transition-colors duration-200 transform dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700 dark:hover:text-gray-200 hover:text-gray-700"
                           href="/#pricing">
                            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M10.3246 4.31731C10.751 2.5609 13.249 2.5609 13.6754 4.31731C13.9508 5.45193 15.2507 5.99038 16.2478 5.38285C17.7913 4.44239 19.5576 6.2087 18.6172 7.75218C18.0096 8.74925 18.5481 10.0492 19.6827 10.3246C21.4391 10.751 21.4391 13.249 19.6827 13.6754C18.5481 13.9508 18.0096 15.2507 18.6172 16.2478C19.5576 17.7913 17.7913 19.5576 16.2478 18.6172C15.2507 18.0096 13.9508 18.5481 13.6754 19.6827C13.249 21.4391 10.751 21.4391 10.3246 19.6827C10.0492 18.5481 8.74926 18.0096 7.75219 18.6172C6.2087 19.5576 4.44239 17.7913 5.38285 16.2478C5.99038 15.2507 5.45193 13.9508 4.31731 13.6754C2.5609 13.249 2.5609 10.751 4.31731 10.3246C5.45193 10.0492 5.99037 8.74926 5.38285 7.75218C4.44239 6.2087 6.2087 4.44239 7.75219 5.38285C8.74926 5.99037 10.0492 5.45193 10.3246 4.31731Z"
                                    stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                <path
                                    d="M15 12C15 13.6569 13.6569 15 12 15C10.3431 15 9 13.6569 9 12C9 10.3431 10.3431 9 12 9C13.6569 9 15 10.3431 15 12Z"
                                    stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>

                            <span className="mx-4 font-medium">Pricing</span>
                        </a>
                    </nav>
                </div>
            </div></div>):''
        }
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

                <div className="items-center md:flex text-center hidden">
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
    </header>
    )
}