"use client"
import { useEffect, useState,Suspense} from "react";
import { useParams,useRouter } from "next/navigation";
import dynamic from 'next/dynamic';
const Categorysearch = dynamic(() => import('../../../../components/searchform/categorysearch'));
const Quizsubcategorycard = dynamic(() => import('../../../../components/quizcategory/quizsubcategorycard'));
const Quizentryform = dynamic(() => import('../../../../components/quizform/quizentryform'));
import { apigetsubcategories } from "@/services/apicategory/apicategory";
import { apisaveentryform } from "@/services/apiusers/apiusers";
import useAuthStore from "@/components/store/useAuthStore";
const Subcategory=()=>{
  const params = useParams();
  const router=useRouter();
  const [subcategoriesdata,setSubcategoriesdata]=useState();
  const [searchcategory,setSearchcategory]=useState('');
  const [quizentryformdata,setquizentryformdata]=useState({});
  const [quizentryDialog,setquizentryDialog]=useState(false);
  const {login}=useAuthStore();
  const getsubcategories =async()=>{
    var res=await apigetsubcategories({searchcategory:searchcategory,category:decodeURIComponent(params.category)});
    setSubcategoriesdata(res[0]?.uniqueValues);
  }
  useEffect(()=>{
    getsubcategories();
  },[searchcategory])
  const Changehandler=(e)=>{
    setquizentryformdata({...quizentryformdata,[e.target.name]:e.target.value})
  }

  const openquizentryform=(data)=>{
    setquizentryformdata({subcat:data});
    setquizentryDialog(true);
  }
  const hidequizentryform=()=>{
    setquizentryformdata({});
    setquizentryDialog(false);
  }
  const savequizentryform=async(event)=>{
    event.preventDefault();
    var res=await apisaveentryform(quizentryformdata);
   if(res.status=="success"){
    login(res.token)
    router.push(`/quiz-play/start-quiz/${params.category}/${quizentryformdata.subcat}/levels`)
   }
   else{
    toast.error("Try again later")
   }
  }
  return(
    <section className="py-6 mb-auto">
      <div className="max-w-[85rem] w-full mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="mb-5">List of Subcategories in <span className="font-semibold">{decodeURIComponent(params.category)}</span></h1>
        <Categorysearch setSearchcategory={setSearchcategory} placeholder="Search Subcategory"/>
         <div className="mt-5">
            <Suspense fallback={<p>Loading Subcategories...</p>}>
              <Quizsubcategorycard subcategoriesdata={subcategoriesdata} openquizentryform={openquizentryform}/>
            </Suspense>
          </div>
      </div>
      <Quizentryform quizentryDialog={quizentryDialog} hidequizentryform={hidequizentryform} quizentryformdata={quizentryformdata} Changehandler={Changehandler} savequizentryform={savequizentryform}/>
    </section>
  )
}
export default Subcategory;
