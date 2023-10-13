'use client'
const Quizlevel=(props)=>{
 const {quizleveldata,unlocklevels,checklevels}=props;
 const unlockchecktemplate=(data1)=>{
   return(
      <>
      {
       unlocklevels.map((data,index)=>{
      return (data?.Level>=data1 || (data?.Level * 1)+1==data1?<i className="fa-solid fa-lock-open text-green-500"></i>:<i className="fa-solid fa-lock text-red-500"></i>)
      
      }
      )
      }
     </>
   )
 }
 return(
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {quizleveldata?.map((data,index)=>
        <a key={index} onClick={()=>checklevels(data)} href="#" className="flex flex-col bg-white  items-center  shadow rounded-xl p-4 md:p-5 dark:bg-gray-800 dark:border-gray-700 dark:shadow-slate-700/[.7] dark:text-gray-400">
         <h1 className="text-xl">{data=="1"?<i className="fa-solid fa-lock-open text-green-500"></i>:unlocklevels.length!=0?unlockchecktemplate(data):<i className="fa-solid fa-lock text-red-500"></i>} Level {data}</h1>
        </a>
        )}
       
    </div>
 )
}
export default Quizlevel;