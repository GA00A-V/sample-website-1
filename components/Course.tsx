interface propTypes{
    title:string,
    author:string,
    image:string
}
export default function Course({title, author, image}:propTypes){
    return(
        <div className="max-w-xs pb-6 mx-auto overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-700">
            <img className="object-cover w-full h-56"
                 src={image}
                 alt="avatar"/>

            <div className="py-5 px-2">
                <a href="#" className="block text-xl font-bold text-gray-800 dark:text-white">{title}</a>
                <div className="flex mt-1 item-center">
                    <svg className="w-5 h-5 text-gray-700 fill-current dark:text-gray-300" viewBox="0 0 24 24">
                        <path
                            d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z"/>
                    </svg>

                    <svg className="w-5 h-5 text-gray-700 fill-current dark:text-gray-300" viewBox="0 0 24 24">
                        <path
                            d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z"/>
                    </svg>

                    <svg className="w-5 h-5 text-gray-700 fill-current dark:text-gray-300" viewBox="0 0 24 24">
                        <path
                            d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z"/>
                    </svg>

                    <svg className="w-5 h-5 text-gray-500 fill-current" viewBox="0 0 24 24">
                        <path
                            d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z"/>
                    </svg>

                    <svg className="w-5 h-5 text-gray-500 fill-current" viewBox="0 0 24 24">
                        <path
                            d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z"/>
                    </svg>
                </div>

                <span className="text-sm text-gray-700 dark:text-gray-200">{author}</span>
            </div>
            <div className={'text-center'}>
                <button
                    className="px-4 py-2 my-4 text font-medium text-white uppercase transition-colors duration-200 transform bg-indigo-600 rounded-md lg:w-auto hover:bg-indigo-500 focus:outline-none focus:bg-indigo-500">
                    ENROLL
                </button>
            </div>
        </div>
    )
}


