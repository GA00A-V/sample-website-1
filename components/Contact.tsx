export default function Contact(){
    return (
        <section id={'contact'} className="dark:text-gray-400 bg-gray-800 text-gray-600 body-font relative">
            <div className="absolute inset-0 bg-gray-300 opacity-40 dark:bg-gray-900">
                <iframe width="100%" height="100%" title="map"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d112173.18329337331!2d77.13894531219519!3d28.527334237472804!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd5b347eb62d%3A0x52c2b7494e204dce!2sNew%20Delhi%2C%20Delhi!5e0!3m2!1sen!2sin!4v1660739557628!5m2!1sen!2sin"
                        ></iframe>
            </div>
            <div className="container px-5 py-24 mx-auto flex">
                <div
                    className="dark:bg-gray-900 lg:w-1/3 md:w-1/2 bg-white rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 relative z-10 shadow-md">
                    <h2 className="dark:text-white text-gray-900 text-lg mb-1 font-medium title-font">Contact Us</h2>
                    <p className="leading-relaxed mb-5 text-gray-600 dark:text-gray-400">Enter your email and message to get started.</p>
                    <div className="relative mb-4">
                        <label htmlFor="email" className="leading-7 text-sm text-gray-600 dark:text-gray-400">Email</label>
                        <input type="email" id="email" name="email"
                               className="dark:bg-gray-800 w-full bg-white rounded border dark:border-gray-700 border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
                    </div>
                    <div className="relative mb-4">
                        <label htmlFor="message" className="leading-7 text-sm dark:text-gray-400 text-gray-600">Message</label>
                        <textarea id="message" name="message"
                                  className="w-full dark:border-gray-700 dark:focus:border-indigo-500 bg-white dark:bg-gray-800 rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
                    </div>
                    <button
                        className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Submit
                    </button>
                </div>
            </div>
        </section>
    )
}