"use client"
import { useEffect, useRef } from "react";
import {useSearchParams , useRouter } from "next/navigation";
import dynamic from 'next/dynamic';
import { useState } from "react";
const Pdfdownload = dynamic(() => import('../../../components/pdf/pdfdownload'));
import toast from "react-hot-toast";
const Buildpdf=()=>{
    const router=useRouter();
    const query=useSearchParams();
    const pdfTemplateRef = useRef(null);
    const [certdata,setCertdata]=useState(typeof window !== 'undefined'?JSON.parse(localStorage.getItem('Quiz_Certificate')):null)
    useEffect(()=>{
      localStorage.clear('userAnswers');
      localStorage.clear('currentQuestionIndex');
      localStorage.clear('timer');
    },[])
    const handleGeneratePdf =async() => {
        const html2pdf = (await import('html2pdf.js/dist/html2pdf')).default;
        const element = pdfTemplateRef.current;
        const options = {
          filename: `${new Date().getTime()}.pdf`,
          html2canvas: { scale: 2 },
          jsPDF: {unit: 'pt', format: 'a4', orientation: 'l'},
        };
        html2pdf().set(options).from(element).save();
        localStorage.clear();
        router.push('/');
        toast.success('Certificate Sucessfully Downloded')
    };
    return(
        <section className="py-5 mb-auto">
          <div className="max-w-[85rem] w-full mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1">
              <div className=" bg-white border shadow-sm rounded-xl p-4 md:p-5">
                <div className="text-center mx-auto mb-3">
                   <button className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-xl" onClick={handleGeneratePdf}><i className="fa-solid fa-certificate"></i> Download Certificate</button>
                </div>
                 <div ref={pdfTemplateRef}>
                    <Pdfdownload certdata={certdata?certdata:JSON.parse(query.get('certdata'))}/>
                 </div>
    
                </div>
            </div>
          </div>
        </section>
    )
}
export default Buildpdf;