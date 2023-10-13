import { questions } from "../models/questions.model.js";
import { quizzoneresult } from "../models/quizzoneresult.model.js";
import { quizzoneresultcalculate } from "../services/resultcalculate/resultcalculate.js";
const quiztestinit=async(req,res,next)=>{
    try{
      const resquestions=await questions.find(req.body);
      res.send({questions:resquestions,status:"Test Started"})
    }
    catch(err){
        console.log(err);
    }
}
const quiztestresultsave=async(req,res,next)=>{
  try{
    var resquizresult=await new quizzoneresult(req.body).save();
    var allquestions=await questions.find({ Category:req.body.Category,'Sub Category':req.body['Sub Category'],Level:req.body.Level});
    var correctAnswerCount=quizzoneresultcalculate(resquizresult,allquestions);
    var response=await quizzoneresult.findOneAndUpdate({_id:resquizresult._id},{CorrectAnswerCount:correctAnswerCount,WrongAnswerCount:allquestions.length-correctAnswerCount},{returnOriginal:false});
    res.send({status:"Test Completed",datas:response})
  }
  catch(err){
    console.log(err);
  }
}
export {quiztestinit,quiztestresultsave}