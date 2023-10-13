"use client"
import { useParams,useRouter} from "next/navigation";
import ProtectedRoute from "@/components/store/ProtectedRoute";
import {useState } from "react";

import Quizinstructioncard from "@/components/quizcards/quizinstructioncard";
const Quizinstructions=()=>{
  const params=useParams();
  const router=useRouter();
  const [loading,setLoading]=useState(false);

  const inittest=async()=>{
    setLoading(true)
    router.push(`/quiz-play/start-quiz/${params.category}/${params.subcategory}/${params.level}/start`)
    setLoading(false)
  }
  return(
    <ProtectedRoute allowedRoles={['User']}>
    <section className="py-6 mb-auto">
      <div className="max-w-[85rem] w-full mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="mb-5"><span className="font-semibold">{decodeURIComponent(params.subcategory)}</span> / Level {decodeURIComponent(params.level)}</h1>
         <Quizinstructioncard inittest={inittest} loading={loading} />
      </div>
    </section>
    </ProtectedRoute>
  )
}
export default Quizinstructions;
