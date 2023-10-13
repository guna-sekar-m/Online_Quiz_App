import express from "express";
import { quiztestinit,quiztestresultsave } from "../controllers/quiztestinit.controller.js";
import userAuthenticateJWT from "../services/token/usertoken.service.js";
const quiztestRouter=express.Router();
//admin
quiztestRouter.post('/apiquiztestinit',userAuthenticateJWT(['User']),quiztestinit);
quiztestRouter.get('/apiquiztestinit',userAuthenticateJWT(['User']),quiztestinit);
quiztestRouter.post('/apiquiztestresultsave',userAuthenticateJWT(['User']),quiztestresultsave);
export default quiztestRouter;