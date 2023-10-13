import express from "express";
import { getlevelsbycategory,checklevels } from "../controllers/levels.controller.js";
import userAuthenticateJWT from "../services/token/usertoken.service.js";
const levelsRouter=express.Router();
//admin
levelsRouter.get('/apigetlevelsbycategory',userAuthenticateJWT(['User']),getlevelsbycategory);
levelsRouter.post('/apichecklevels',userAuthenticateJWT(['User']),checklevels);
export default levelsRouter;