import { users } from "../models/users.model.js";
import jwt from "jsonwebtoken";
const JWT_SECRET="Quiz_Test_2023";
const saveentryform=async(req,res,next)=>{
  try{
     var checkuser=await users.find({Email:req.body.Email});
     if(checkuser.length==0){
       await new users(req.body).save();
      }
 
      var resuser=await users.findOne({Email:req.body.Email}).lean();
      
      if(resuser){
        const token = jwt.sign(resuser, JWT_SECRET, { expiresIn: '1h' });
        res.status(200).json({status:"success",token:token});
       }
       else{
        res.status(200).json({status:"error"});
       }
  }
  catch(err){
    console.log(err)
  }
}
export {saveentryform};