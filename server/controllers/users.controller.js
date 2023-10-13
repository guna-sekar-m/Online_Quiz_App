import { users } from "../models/users.model.js";
import { quizzoneresult } from "../models/quizzoneresult.model.js";
import { filterformat } from "../services/filter/globalfilter.js";
import { questions } from "../models/questions.model.js";
const getfullusers=async(req,res,next)=>{
    try{
      var { first, rows, globalFilter } = req.query;
      const fieldArray = Object.keys(users.schema.obj);
      const filter = {$or: fieldArray.filter((field1)=>field1!='_id').map(field => ({ [field]: { $regex: globalFilter, $options: 'i' } }))};
      globalFilter=globalFilter!=""?filter:{};
      var resdata=await users.find(globalFilter).skip(first).limit(rows);
      var totallength=await users.countDocuments(globalFilter);
      res.send({datas:resdata,totallength:totallength});
    }
    catch(err){
        console.log(err)
    }
}
const updateusers=async(req,res,next)=>{
  try{
    var resdata=await users.findOneAndUpdate({_id:req.body._id},{Status:req.body.Status},{returnOriginal:false});
    res.send(resdata);
  }
  catch(err){
    console.log(err);
  }
}
const getactivitybyuser=async(req,res,next)=>{
  try{
    var { userId,first, rows, globalFilter } = req.query;
    const fieldArray = Object.keys(quizzoneresult.schema.obj);
    const filtervalue=filterformat(fieldArray,globalFilter);
    var resdata=await quizzoneresult.find({...filtervalue,userId:userId},{Results:0}).skip(first).limit(rows);
    var totallength=await quizzoneresult.countDocuments({...filtervalue,userId:userId});
    res.send({datas:resdata,totallength:totallength});
  }
  catch(err){
    console.log(err);
  }
}
const getdetailedactivityresult=async(req,res,next)=>{
  try{
    const {_id}=req.query;
    var resdata=await quizzoneresult.findOne({_id:_id},{Results:1}).lean();
    const questionIds = [];
    // Iterate through the Results array and extract Question_Id values
    for (const result of resdata.Results) {
      for (const key in result) {
        if (result.hasOwnProperty(key)) {
          questionIds.push({[key]:result[key]});
        }
      }
    }
    const ids=questionIds.map((d,i)=>d[`Q${i+1}`]?.Question_Id);
    var resdata1=await questions.find({_id:{$in:ids}}).lean();
    var combinedArray = questionIds.map((item1,i) => {
      var matchingItem2 = resdata1.find(item2 => item2._id.toString()===item1[`Q${i+1}`]?.Question_Id);
      return { ...matchingItem2,Selected_Answer:item1[`Q${i+1}`]?.Selected_Answer };
    });
    res.send(combinedArray);
  }
  catch(err){
    console.log(err);
  }
}
export {getfullusers,updateusers,getactivitybyuser,getdetailedactivityresult}