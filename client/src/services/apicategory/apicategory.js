import apiurl from "../apiendpoint/apiendpoint";
import axios from "axios";
const apigetcategories=async(data)=>{
    const res=await axios.get(`${apiurl()}/category/apigetcategories`,{params:data});
    return res.data;
} 
const apigetsubcategories=async(data)=>{
    const res=await axios.get(`${apiurl()}/category/apigetsubcategories`,{params:data});
    return res.data;
} 
export {apigetcategories,apigetsubcategories};