import { questions } from "../models/questions.model.js";

const getcategories=async(req,res,next)=>{
  try{  
    var resdata=await questions.aggregate([
        {$match:{Category: { $regex: req.query.searchcategory, $options: 'i' }}},
        {$group: {_id: null, uniqueValues: {$addToSet: "$Category"}}},
        { $project: { _id: 0 }},
    ]);
    res.send(resdata);
  }
  catch(err){
    console.log(err);
  }
}
const getsubcategories=async(req,res,next)=>{
    try{  
        console.log(req.query)
      var resdata=await questions.aggregate([
        {$match:{Category:req.query.category,"Sub Category": { $regex: req.query.searchcategory, $options: 'i' }}},
        {$group: {_id: null, uniqueValues: {$addToSet: "$Sub Category"}}},
        { $project: { _id: 0 }},
      ]);
      res.send(resdata);
    }
    catch(err){
      console.log(err);
    }
}
export {getcategories,getsubcategories}