'use client'
import Image from "next/image"

const Quizquestionsform=(props)=>{
    const {formRef,questions,formattedTime,currentQuestionIndex,
         handleindexClick,
        handleNextClick,selectedoption,selectedOption,changeHandler,handlequizsubmit}=props;
   return(
    <div c>
       <div className="flex flex-col bg-white  shadow rounded-xl dark:bg-gray-800 dark:border-gray-700 dark:shadow-slate-700/[.7]">
        <div className="bg-blue-500 border-b text-white rounded-t-xl py-3 px-4 md:py-4 md:px-5 dark:bg-gray-800 dark:border-gray-700">
             <div className="flex justify-between flex-wrap">
                <p>Question {currentQuestionIndex+1} of {questions?.length}</p>
                <p className="mt-1 text-lg">
                <i className="fa-solid fa-stopwatch text-lg"></i> {formattedTime}
                </p>
            </div>
        </div>
        <div className="p-4 md:p-5">
            <h3 className="text-sm font-semibold text-gray-600 dark:text-white">
            {currentQuestionIndex+1}.{questions[currentQuestionIndex]?.Question}
            </h3>
           {questions[currentQuestionIndex]?.['Image for Question']? <Image src={`${process.env.IMAGE_PATH}/${questions[currentQuestionIndex]?.['Image for Question']?questions[currentQuestionIndex]['Image for Question']:null}`}  className="flex-shrink-0  w-[20rem] rounded-md" width={400} height={400} alt="" />:null}
            <form ref={formRef} onSubmit={currentQuestionIndex ==questions.length - 1?handlequizsubmit:handleNextClick}>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 my-3">
                <label htmlFor={"hs-radio-in-form1"} className="flex p-3  w-full bg-white border border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400">
                    <input type="radio"  name={'Q'+(currentQuestionIndex+1)} checked={selectedOption['Q'+(currentQuestionIndex+1)] === questions[currentQuestionIndex]?.['Option A']}  value={questions[currentQuestionIndex]?.['Option A'] || ''} onChange={(e)=>{changeHandler(e);selectedoption(e)}} className="shrink-0 mt-0.5 border-gray-200 rounded-full text-blue-600 pointer-events-none focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800" id={"hs-radio-in-form1"} required/>
                    <span className="text-sm text-gray-500 ml-3 dark:text-gray-400">{questions[currentQuestionIndex]?.['Option A']}</span>
                </label>

                <label htmlFor={"hs-radio-in-form2"} className="flex p-3  w-full bg-white border border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400">
                    <input type="radio"  name={'Q'+(currentQuestionIndex+1)} checked={selectedOption['Q'+(currentQuestionIndex+1)] === questions[currentQuestionIndex]?.['Option B']}  value={questions[currentQuestionIndex]?.['Option B'] || ''} onChange={(e)=>{changeHandler(e);selectedoption(e)}} className="shrink-0 mt-0.5 border-gray-200 rounded-full text-blue-600 pointer-events-none focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800" id={"hs-radio-in-form2"} required/>
                    <span className="text-sm text-gray-500 ml-3 dark:text-gray-400">{questions[currentQuestionIndex]?.['Option B']}</span>
                </label>
                <label htmlFor={"hs-radio-in-form3"} className="flex p-3  w-full bg-white border border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400">
                    <input type="radio"  name={'Q'+(currentQuestionIndex+1)} checked={selectedOption['Q'+(currentQuestionIndex+1)] === questions[currentQuestionIndex]?.['Option C']}  value={questions[currentQuestionIndex]?.['Option C'] || ''} onChange={(e)=>{changeHandler(e);selectedoption(e)}} className="shrink-0 mt-0.5 border-gray-200 rounded-full text-blue-600 pointer-events-none focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800" id={"hs-radio-in-form3"} required/>
                    <span className="text-sm text-gray-500 ml-3 dark:text-gray-400">{questions[currentQuestionIndex]?.['Option C']}</span>
                </label>
                <label htmlFor={"hs-radio-in-form4"} className="flex p-3  w-full bg-white border border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400">
                    <input type="radio"  name={'Q'+(currentQuestionIndex+1)} checked={selectedOption['Q'+(currentQuestionIndex+1)] === questions[currentQuestionIndex]?.['Option D']}  value={questions[currentQuestionIndex]?.['Option D'] || ''} onChange={(e)=>{changeHandler(e);selectedoption(e)}} className="shrink-0 mt-0.5 border-gray-200 rounded-full text-blue-600 pointer-events-none focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800" id={"hs-radio-in-form4"} required/>
                    <span className="text-sm text-gray-500 ml-3 dark:text-gray-400">{questions[currentQuestionIndex]?.['Option D']}</span>
                </label>
            </div>
         
            <button type="submit" className="py-1 px-4 inline-flex justify-start items-center gap-2 rounded-md border border-transparent font-semibold bg-green-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all  ">
                {currentQuestionIndex ==questions.length - 1?'Submit Test':'Next'} <i className="fa-solid fa-arrow-right"></i>
            </button>
            </form>
          
          
        </div>
        
     </div>
    </div>
   )
}
export default Quizquestionsform;