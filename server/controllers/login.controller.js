
import { admins } from "../models/users.model.js";
import jwt from "jsonwebtoken";
const JWT_SECRET="Quiz_Secret_2023";
const adminlogin=async(req,res,next)=>{
    try{
        
        var resuser=await admins.findOne(req.body);
        if(resuser){
         const token = jwt.sign({ userId: resuser }, JWT_SECRET);
         res.status(200).json({message:"success",token:token});
        }
        else{
         res.status(200).json({message:"error"});
        }

     }
     catch(err){
         res.status(400).json({message:err});
     }
}
export {adminlogin};