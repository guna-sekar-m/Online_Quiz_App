'use client'

import Link from "next/link";
import Image from "next/image";
const Herosection=()=>{
  return(
 <section className="py-6 lg:py-10">

    <div className="max-w-[85rem] w-full mx-auto px-4 sm:px-6 lg:px-8 ">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 py-6 lg:py-20 bg-indigo-500  shadow rounded-xl text-white">
      <div className="flex items-center justify-center">
        <Image src="hero1.svg" className="max-w-full h-[200px] md:h-[300px] text-center" height={500} width={500} alt=""/>
      </div>
   
      <div className="flex items-center justify-center">
        <div>
            <h3 className="text-3xl lg:text-5xl font-semibold">Be Ready</h3>
            <p className="mb-4 text-lg">No one can stop you.</p>
            <div className="text-center md:text-start">
              <Link href={'/quiz'} className="px-4 py-2 rounded text-white bg-blue-500 hover:bg-blue-600 shadow ">Lets Play <i className="fa-solid fa-arrow-right"></i></Link>
            </div>
        </div>
   
      </div>
    </div> 
    </div>
 </section>
  )
}
export default Herosection;