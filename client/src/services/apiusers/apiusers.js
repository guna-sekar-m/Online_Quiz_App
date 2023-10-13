import apiurl from "../apiendpoint/apiendpoint";
import axios from "axios";

const apisaveentryform=async(data)=>{
    const res=await axios.post(`${apiurl()}/api/apisaveentryform`,data);
    return res.data;
} 
export {apisaveentryform};