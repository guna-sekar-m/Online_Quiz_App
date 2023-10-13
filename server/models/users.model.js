import mongoose from 'mongoose';
import con1 from '../db/db.js';
const adminSchema = new mongoose.Schema({
  name: String,
  email:String,
  password:String,
  role:String
 
},{timestamps:true});
const userSchema = new mongoose.Schema({
   userId:{
    type: String,
    default: () => new Date().getTime().toString()
  },
  'Full Name': String,
  'Date of Birth': String,
   Email:  String, 
  'Mobile Number': String,
   Role:{type: String,default:"User"},
   Status:{type: String,default:"Active"}
},{timestamps:true});

const users =con1.model("users",userSchema);
const admins =con1.model("admins",adminSchema);
export {users,admins}  