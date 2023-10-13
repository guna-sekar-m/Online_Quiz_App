'use client'
import { useParams } from "next/navigation"
const Quizinstructioncard=({inittest,loading})=>{
    const params=useParams();
 return(

        <div className="flex flex-col bg-white border shadow-sm rounded-xl dark:bg-gray-800 dark:border-gray-700 dark:shadow-slate-700/[.7]">
          <div className="bg-blue-100 border-b rounded-t-xl py-3 px-4 md:py-4 md:px-5 dark:bg-gray-800 dark:border-gray-700">
            <p className="mt-1 text-sm text-gray-600 dark:text-gray-500">
             Instructions
            </p>
          </div>
          <div className="p-4 md:p-5">
              <ul className="space-y-3 text-sm mb-5">
              <li className="flex space-x-3">
                <span className="text-gray-800 dark:text-gray-400">
                <i className="fa-solid fa-check  text-blue-600"></i>  This is a FREE online test. Beware of scammers who ask for money to attend this test.
                </span>
              </li>
              <li className="flex space-x-3">
                <span className="text-gray-800 dark:text-gray-400">
                <i className="fa-solid fa-check  text-blue-600"></i>  Time allotted: 15 minutes.
                </span>
              </li>
              <li className="flex space-x-3">
                <span className="text-gray-800 dark:text-gray-400">
                <i className="fa-solid fa-check  text-blue-600"></i>  Each question carries 1 mark; there are no negative marks.
                </span>
              </li>
              <li className="flex space-x-3">
                <span className="text-gray-800 dark:text-gray-400">
                <i className="fa-solid fa-check  text-blue-600"></i>  DO NOT close the window.
                </span>
              </li>
              <li className="flex space-x-3">
                <span className="text-gray-800 dark:text-gray-400">
                <i className="fa-solid fa-check  text-blue-600"></i> All the best!
                </span>
              </li>
            </ul>
            <div className="flex justify-center"> 
              <button onClick={inittest} type="button" className="py-2 px-3 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-indigo-500 text-white hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800">
                {loading?<div class="animate-spin inline-block w-4 h-4 border-[3px] border-current border-t-transparent text-white rounded-full" role="status" aria-label="loading">
                  <span class="sr-only">Loading...</span>
                </div>:null}  Start Now
            </button>
           </div>
          </div>
        </div>

 )
}
export default Quizinstructioncard