'use client'
const Whyourquiz=()=>{
  return(
 <section className="py-6 lg:py-10">
    <div className="max-w-[85rem] w-full mx-auto px-4 sm:px-6 lg:px-8">
    <div className="grid grid-cols-12 gap-y-2 lg:gap-6">
      <div className="col-span-full mb-10">
         <h1 className="text-2xl lg:text-3xl text-center font-semibold">Why Choose Us Our Quiz</h1>
      </div>

      <div className="col-span-full lg:col-span-4">
       <div className="flex  bg-white  shadow rounded-xl p-4 md:p-5 justify-center items-center">
        <i className="fa-solid fa-hand-pointer mr-2 text-xl"></i> Easy to Use
       </div>
      </div>

      <div className="col-span-full lg:col-span-4">
       <div className="flex justify-center items-center bg-white  shadow rounded-xl p-4 md:p-5">
         <i className="fa-solid fa-list  mr-2 text-xl"></i> Many Quiz Zone
       </div>
      </div>

      <div className="col-span-full lg:col-span-4">
       <div className="flex justify-center items-centerl bg-white  shadow rounded-xl p-4 md:p-5">
       <i className="fa-solid fa-certificate mr-2 text-xl"></i> Free Certificate
       </div>
      </div>

    </div> 
    </div>
 </section>
  )
}
export default Whyourquiz;