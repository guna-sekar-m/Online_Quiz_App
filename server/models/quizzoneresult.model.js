import mongoose from 'mongoose';
import con1 from '../db/db.js';
import moment from 'moment-timezone';
const quizzoneresultSchema = new mongoose.Schema({
    userId:String,
    'Full Name':String,
    Email:String,
    Category:String,
    'Sub Category':String,
    Level:String,
    Level_Status:{type:String,default:"Completed"},
    Remaining_Time:String,
    Results:Array,
    Test_Date:{type:String,default:moment().format('YYYY-MM-DD')},
    CorrectAnswerCount:{type:String,default:"0"},
    WrongAnswerCount:{type:String,default:"0"}
   
},{timestamps:true});
const quizzoneresult =con1.model("quizzoneresults",quizzoneresultSchema);
export {quizzoneresult}  