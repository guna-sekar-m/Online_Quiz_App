"use client"
import { useParams,useRouter} from "next/navigation";
import ProtectedRoute from "@/components/store/ProtectedRoute";
import {useEffect, useState,useRef } from "react";
import toast from "react-hot-toast";
import { apiquiztestinit,apiquiztestresultsave } from "@/services/apiquiz/apiquiztest";
import Quizquestionsform from "@/components/quizform/quizquestionsform";
import useAuthStore from "@/components/store/useAuthStore";
const Quizinstructions=()=>{
  const {decodeToken}=useAuthStore();
  const params=useParams();
  const router=useRouter();
  const [questions,setQuestions]=useState([]);
  const [selectedOption, setSelectedOption] = useState({});
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [Answers,setAnswers]=useState({});
  const [timer, setTimer] = useState(900); // 15 minutes in seconds 900
  const [formattedTime, setFormattedTime] = useState('00:15:00');
  
  const formRef = useRef(null);
  let isMounted=true;
  
  useEffect(() => {
    if (isMounted) {
    // Check if there are stored answers and a stored current question index
    const storedAnswers = localStorage.getItem('userAnswers');
    const storedCurrentIndex = localStorage.getItem('currentQuestionIndex');
    const storedTimer = localStorage.getItem('timer');
    if (storedAnswers && storedCurrentIndex) {
      setAnswers(JSON.parse(storedAnswers));
      setCurrentQuestionIndex(parseInt(storedCurrentIndex));
      setTimer(parseInt(storedTimer));
    }
  }
  return () => {
    isMounted = false;
  };
  }, []);
  
  useEffect(() => {
    // Save user answers and current question index to local storage
    localStorage.setItem('userAnswers', JSON.stringify(Answers));
    localStorage.setItem('currentQuestionIndex', currentQuestionIndex.toString());
    localStorage.setItem('timer', timer.toString());
  }, [Answers, currentQuestionIndex,timer]);
  useEffect(()=>{

   if(isMounted){
    getquestions();
   }
  return(()=>{
    isMounted=false;
  })
  },[])
  useEffect(() => {
    let timerInterval;

    if (timer === 0) {
      if (formRef.current) {
        handleautosubmittest();
      }
    } else {
      timerInterval = setInterval(() => {
        setTimer(prevTimer => {
          if (prevTimer <= 0) {
            clearInterval(timerInterval);
            return 0;
          }
          return prevTimer - 1;
        });
      }, 1000);
    }

    return () => {
      clearInterval(timerInterval);
    };
  }, [timer]);
  useEffect(() => {
    // Convert timer value to HH:MM:SS format
    const hours = Math.floor(timer / 3600);
    const minutes = Math.floor((timer % 3600) / 60);
    const seconds = timer % 60;

    const formattedHours = String(hours).padStart(2, '0');
    const formattedMinutes = String(minutes).padStart(2, '0');
    const formattedSeconds = String(seconds).padStart(2, '0');

    setFormattedTime(`${formattedHours}:${formattedMinutes}:${formattedSeconds}`);
  }, [timer]);
  const getquestions=async()=>{
    var res=await apiquiztestinit({Category:decodeURIComponent(params.category),'Sub Category':decodeURIComponent(params.subcategory),Level:decodeURIComponent(params.level)});
    setQuestions(res.questions)
  }
  const handleNextClick = (event) => {
    event.preventDefault();
    if (currentQuestionIndex < questions?.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
   
      alert("End of Quiz. You can submit your answers here.");
    }
  };
  const handleindexClick = (index) =>setCurrentQuestionIndex(index);

  const handleautosubmittest= async() => {
     localStorage.clear();
  }
  const selectedoption=e=>{

    setSelectedOption({...selectedOption,[e.target.name]:e.target.value});
  

    
  }
  const changeHandler = e => {

    setAnswers({...Answers,[e.target.name]:{Selected_Answer:e.target.value,Question_Id:questions[currentQuestionIndex]?._id}});
  }
  const handlequizsubmit=async(event)=>{
    event.preventDefault();
    var localanswer= JSON.parse(localStorage.getItem('userAnswers'));
    var res=await apiquiztestresultsave({Remaining_Time:formattedTime,Results:[localanswer?localanswer:Answers],userId:decodeToken().userId,'Full Name':decodeToken()['Full Name'],Email:decodeToken().Email,Category:decodeURIComponent(params.category),'Sub Category':decodeURIComponent(params.subcategory),Level:decodeURIComponent(params.level)});
    if(res.status=="Test Completed"){
      toast.success(res.status);
      const { Results, ...newObject } = res.datas;
      localStorage.setItem('Quiz_Certificate',JSON.stringify(newObject))
      router.push(`/quiz-play/download-certificate?certdata=${JSON.stringify(newObject)}`)
    }
    else{
      toast.error("Error occured,so resubmit a test")
    }
  }

  return(
    <ProtectedRoute allowedRoles={['User']}>
    <section className="py-6 mb-auto">
      <div className="max-w-[85rem] w-full mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="mb-5"><span className="font-semibold">{decodeURIComponent(params.subcategory)}</span> / Level {decodeURIComponent(params.level)}</h1>

        <Quizquestionsform formRef={formRef} questions={questions} formattedTime={formattedTime} 
        currentQuestionIndex={currentQuestionIndex} 
        handleindexClick={handleindexClick}
        handleNextClick={handleNextClick}
        selectedoption={selectedoption} selectedOption={selectedOption} changeHandler={changeHandler} handlequizsubmit={handlequizsubmit}/>
      </div>
    </section>
    </ProtectedRoute>
  )
}
export default Quizinstructions;
