'use client'
import { useEffect, useState,Suspense} from "react";
import dynamic from "next/dynamic";
const Categorysearch= dynamic(() => import('../../../components/searchform/categorysearch'));
const Quizcategorycard= dynamic(() => import('../../../components/quizcategory/quizcategorycard'),{ loading: () => <p>Loading...</p>,loadableGenerated:true});
import { apigetcategories } from "@/services/apicategory/apicategory"; 
const Categories=()=>{
    const [categoriesdata,setCategoriesdata]=useState();
    const [searchcategory,setSearchcategory]=useState('');
    const getcategories =async()=>{
      var res=await apigetcategories({searchcategory:searchcategory});
      setCategoriesdata(res[0]?.uniqueValues);
    }
    useEffect(()=>{
        getcategories();

    },[searchcategory])
  
    return(
        <section className="py-6 mb-auto">
          <div className="max-w-[85rem] w-full mx-auto px-4 sm:px-6 lg:px-8">
             <h1 className="mb-5">List of categories</h1>
             <Categorysearch setSearchcategory={setSearchcategory} placeholder="Search category"/>
             <div className="mt-5">
              <Suspense fallback={<p>Loading Categories...</p>}>
                 <Quizcategorycard categoriesdata={categoriesdata}/>
              </Suspense>
             </div>
            
          </div>
        </section>
    )
}
export default Categories;