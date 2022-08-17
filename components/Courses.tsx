import Course from "./Course";

export default function Courses(){
    return (
        <div className={'bg-gray-50 dark:bg-gray-800 py-8'}>
            <div className="flex flex-col items-center mb-4">
                <h1 className="text-3xl font-medium text-gray-800 capitalize lg:text-4xl dark:text-white">Our
                    Our Courses</h1>

                <div className="mt-1">
                    <span className="inline-block w-40 h-1 bg-indigo-500 rounded-full"></span>
                    <span className="inline-block w-3 h-1 mx-1 bg-indigo-500 rounded-full"></span>
                    <span className="inline-block w-1 h-1 bg-indigo-500 rounded-full"></span>
                </div>
            </div>
            <div className={'grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 items-center gap-4'}>
                <Course image={'https://images.unsplash.com/photo-1542156822-6924d1a71ace?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"'} title={'The Complete Python Masterclass'} author={'Gaurav'}/>
                <Course image={'https://images.unsplash.com/photo-1542156822-6924d1a71ace?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"'} title={'The Complete Networking Course'} author={'Gaurav'}/>
                <Course image={'https://images.unsplash.com/photo-1542156822-6924d1a71ace?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"'} title={'Ultimate JavaScript Course'} author={'Gaurav'}/>
            </div>
        </div>

)
}