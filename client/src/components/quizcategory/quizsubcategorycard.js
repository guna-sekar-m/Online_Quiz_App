'use client'
const Quizsubcategorycard = (props) => {
   const { subcategoriesdata,openquizentryform } = props;
   return (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 lg:gap-6">
         {subcategoriesdata?.map((data, index) =>
            <a key={index}  className="flex flex-col bg-white  shadow  rounded-xl  border-b-4  border-b-indigo-500 dark:bg-gray-800 dark:border-gray-700 dark:shadow-slate-700/[.7] dark:border">
               <div className="p-4 md:p-5 text-center">
                  <h3 className="text-lg lg:text-xl font-bold text-gray-800 dark:text-white">
                      {data}
                  </h3>
                  <a onClick={()=>openquizentryform(data)} className="mt-3 py-2 px-3 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-green-500 text-white hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800" href="#">
                    <i className="fa-regular fa-circle-play"></i> Start Test
                 </a>
               </div>
            </a>
         )
         }
      

      </div>
   )
}
export default Quizsubcategorycard