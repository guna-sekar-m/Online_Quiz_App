'use client'
import {useState,useEffect} from 'react';
import { useParams,useRouter} from "next/navigation";
import Quizlevel from "@/components/quizcategory/quizlevel";
import { apigetlevelsbycategory,apichecklevels } from "@/services/apicategory/apilevels";
import toast from 'react-hot-toast';
import ProtectedRoute from '@/components/store/ProtectedRoute';
const Levels=()=>{
const params = useParams();
const router=useRouter();
const [quizleveldata,setquizleveldata]=useState();
const [unlocklevels,setUnlocklevels]=useState();
const getquizlevels =async()=>{
  var res=await apigetlevelsbycategory({searchcategory:decodeURIComponent(params.category),searchsubcategory:decodeURIComponent(params.subcategory)});
  setquizleveldata(res.levelcategory[0]?.uniqueValues);
  setUnlocklevels(res.unlocklevels)
}
  useEffect(()=>{
     getquizlevels();
  },[])

  const checklevels=async(data)=>{
   if(data==1){
    router.push(`/quiz-play/start-quiz/${params.category}/${params.subcategory}/${data}`)
   }
   else{
    var res=await apichecklevels({Level:data - 1 });
     if(res.status=="Allowed"){
       router.push(`/quiz-play/start-quiz/${params.category}/${params.subcategory}/${data}`)
     }
     else if(res.status=="Not Allowed"){
      toast.error("Kindly complete a previous level to access this area")
     }
   }
  }

 return(
  <ProtectedRoute allowedRoles={['User']}>
    <section className="py-6 mb-auto">
      <div className="max-w-[85rem] w-full mx-auto px-4 sm:px-6 lg:px-8">
         <h1 className="mb-5"><span className="font-semibold">{decodeURIComponent(params.subcategory)}</span> / Your Levels</h1>
         <div className="mt-5">
          <Quizlevel quizleveldata={quizleveldata} unlocklevels={unlocklevels} params1={params.category} params2={params.subcategory} checklevels={checklevels}/>
         </div>
      </div>
    </section>
  </ProtectedRoute>
 )
}
export default Levels;