export default function Newsletter(){
    return(
        <section className="bg-gray-50 dark:bg-gray-800">
            <div className="container px-4 py-16 mx-auto lg:flex lg:items-center lg:justify-between">
                <h2 className="text-3xl font-semibold tracking-tight text-gray-800 xl:text-4xl dark:text-white">
                    Join us and get the update from anywhere
                </h2>

                <div className="mt-8 lg:mt-0">
                    <div className="flex flex-col space-y-3 sm:space-y-0 sm:flex-row sm:-mx-2">
                        <input id="email" type="text"
                               className="px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-md sm:mx-2 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-indigo-400 dark:focus:border-indigo-400 focus:ring-indigo-300 focus:outline-none focus:ring focus:ring-opacity-40"
                               placeholder="Email Address"/>

                            <button
                                className="px-4 py-2 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-200 transform bg-indigo-700 rounded-md focus:ring focus:ring-indigo-300 focus:ring-opacity-80 fo sm:mx-2 hover:bg-indigo-600 focus:outline-none focus:bg-indigo-600">
                                Get Started
                            </button>
                    </div>

                    <p className="mt-3 text-sm text-gray-500 dark:text-gray-300">Attention! Offer expires in 30 days.
                        Make sure not to miss this opportunity</p>
                </div>
            </div>
        </section>
    )
}