'use client'
import Quizcards from "@/components/quizcards/quizcards";
const Quiz=()=>{
    return(
        <section className="py-6 lg:py-10 mb-auto">
            <div className="max-w-[85rem] w-full mx-auto px-4 sm:px-6 lg:px-8">
              <Quizcards/>
            </div>
        </section>
    )
}
export default Quiz;