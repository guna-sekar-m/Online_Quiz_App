import apiurl from "../apiendpoint/apiendpoint";
import axios from "axios";
const token=process.env.SECRET_TOKEN;
const apiquiztestinit=async(data)=>{
    const res=await axios.post(`${apiurl()}/quiztest/apiquiztestinit`,data, {headers: {Authorization: `Bearer ${JSON.parse(localStorage.getItem(token))}`}});
    return res.data;
} 
const apiquiztestresultsave=async(data)=>{
    const res=await axios.post(`${apiurl()}/quiztest/apiquiztestresultsave`,data, {headers: {Authorization: `Bearer ${JSON.parse(localStorage.getItem(token))}`}});
    return res.data;
} 


export {apiquiztestinit,apiquiztestresultsave};
