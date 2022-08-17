import Course from "./Course";

export default function Courses(){
    return (
        <div id={'courses'} className={'bg-gray-50 dark:bg-gray-800 py-8'}>
            <div className="flex flex-col items-center mb-4">
                <h1 className="text-3xl font-medium text-gray-800 capitalize lg:text-4xl dark:text-white">Our
                    Our Courses</h1>

                <div className="mt-1">
                    <span className="inline-block w-40 h-1 bg-indigo-500 rounded-full"></span>
                    <span className="inline-block w-3 h-1 mx-1 bg-indigo-500 rounded-full"></span>
                    <span className="inline-block w-1 h-1 bg-indigo-500 rounded-full"></span>
                </div>
            </div>
            <div className={'container mx-auto flex justify-items-center items-center flex-wrap items-center'}>
                <Course image={'https://images.unsplash.com/photo-1526379095098-d400fd0bf935?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80'} title={'The Complete Python Masterclass'} author={'Gaurav'}/>
                <Course image={'https://images.unsplash.com/photo-1579468118864-1b9ea3c0db4a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'} title={'The Ultimate JavaScript Course'} author={'Gaurav'}/>
                <Course image={'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1634&q=80'} title={'The complete computer networking course'} author={'Gaurav'}/>
                <Course image={'https://images.unsplash.com/photo-1583147247730-0ffa2ee86d72?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'} title={'Rust: The complete guide'} author={'Gaurav'}/>
                <Course image={'https://images.unsplash.com/photo-1628277613967-6abca504d0ac?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'} title={'App Development with Flutter'} author={'Gaurav'}/>
            </div>
        </div>

)
}