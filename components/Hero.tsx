export default function Hero(){
    return (
        <div>
            <div className="w-full bg-center bg-cover h-[100vh]"
                 style={{backgroundImage: "url(https://images.unsplash.com/photo-1504384308090-c894fdcc538d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80);"}}>
                <div className="flex items-center justify-center w-full h-full bg-gray-900 bg-opacity-50">
                    <div className="text-center">
                        <h1 className="text-4xl font-semibold text-white uppercase lg:text-5xl">Learn In Demand Skills <div
                            className="text-indigo-400 mt-2">Build Your Career.</div></h1>
                        <p className="mt-6 font-light text-zinc-100 md:text-xl">The most efficient and supportive way for you to learn in-demand skills, get hired, and advance your career.</p>
                        <button
                            className="px-4 py-2 mt-4 text font-medium text-white uppercase transition-colors duration-200 transform bg-indigo-600 rounded-md lg:w-auto hover:bg-indigo-500 focus:outline-none focus:bg-indigo-500">
                            GET STARTED
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}