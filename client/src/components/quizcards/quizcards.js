'use client'
import Link from "next/link";
const Quizcards=()=>{
    return(
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 lg:gap-6">
             
            <div className="flex flex-col bg-white  shadow  rounded-xl  border-b-4  border-b-indigo-500 dark:bg-gray-800 dark:border-gray-700 dark:shadow-slate-700/[.7] dark:border">
              <div className="p-4 md:p-5 text-center">
                <h3 className="text-lg lg:text-xl font-bold text-gray-800 dark:text-white">
                Quiz Zone
                </h3>
            
                <Link className="mt-3 py-2 px-3 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-indigo-500 text-white hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800" href="/quiz-play/categories">
                 Start Now
                </Link>
              </div>
            </div>
           
       </div>
    )
}
export default Quizcards;