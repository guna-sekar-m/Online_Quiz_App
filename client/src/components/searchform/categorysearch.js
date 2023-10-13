'use client'
const Categorysearch = (props) => {
   const { setSearchcategory,placeholder } = props;
   return (
    <div className="sm:col-span-1">
        <label htmlFor="hs-as-table-product-review-search" className="sr-only">Search</label>
        <div className="relative">
        <input onChange={(e)=>setSearchcategory(e.target.value)} type="text" id="hs-as-table-product-review-search" name="hs-as-table-product-review-search" className="py-2 px-3 pl-11 block w-full border-gray-200 shadow rounded-md text-sm focus:z-10 focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400" placeholder={placeholder}/>
        <div className="absolute inset-y-0 left-0 flex items-center pointer-events-none pl-4">
            <i className="fa-solid fa-magnifying-glass h-4 w-4 text-gray-400"></i>
        </div>
        </div>
    </div>
   )
}
export default Categorysearch;