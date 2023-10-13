import { questions } from "../models/questions.model.js";
import { quizzoneresult } from "../models/quizzoneresult.model.js";

const getlevelsbycategory=async(req,res,next)=>{
  try{  
    var resdata=await questions.aggregate([
        { $match: { Level: { $ne: "" },'Category':req.query.searchcategory,'Sub Category':req.query.searchsubcategory} }, // Filter out documents with empty "Level" values
        { $group: { _id: null, uniqueValues: { $addToSet: "$Level" } } },
        { $unwind: "$uniqueValues" }, // Unwind the array to sort the values
        { $sort: { "uniqueValues": 1 } }, // Sort in ascending order
        { $group: { _id: null, uniqueValues: { $push: "$uniqueValues" } } }, // Re-group the sorted values
        { $project: { _id: 0 } }
    ]);
    var getunlocklevels=await quizzoneresult.find({'Category':req.query.searchcategory,'Sub Category':req.query.searchsubcategory,userId:req.user.userId,Email:req.user.Email},{Level:1,_id:0}).sort({Level :-1}).limit(1);
    res.send({levelcategory:resdata,unlocklevels:getunlocklevels});
  }
  catch(err){
    console.log(err);
  }
}
const checklevels=async(req,res,next)=>{
  try{  
    var resdata=await quizzoneresult.findOne({...req.body,Email:req.user.Email,UserId:req.user.UserId}).lean();
    console.log(resdata)
    if(resdata){
      res.send({status:"Allowed"});
    }
    else{
    res.send({status:"Not Allowed"});
    }
  }
  catch(err){
    console.log(err);
  }
}

export {getlevelsbycategory,checklevels};