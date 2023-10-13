'use client'
import Link from "next/link";
const Quizcategorycard = (props) => {
   const { categoriesdata } = props;
   return (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 lg:gap-6">
         {categoriesdata?.map((data, index) =>
            <Link key={index} href={`/quiz-play/categories/${data}`} className="flex flex-col bg-white  shadow  rounded-xl  border-b-4  border-b-indigo-500 dark:bg-gray-800 dark:border-gray-700 dark:shadow-slate-700/[.7] dark:border">
               <div className="p-4 md:p-5 text-center">
                  <h3 className="text-lg lg:text-xl font-bold text-gray-800 dark:text-white">
                     <i className="fa-solid fa-list-check"></i> {data}
                  </h3>
               </div>
            </Link>
         )
         }
      

      </div>
   )
}
export default Quizcategorycard