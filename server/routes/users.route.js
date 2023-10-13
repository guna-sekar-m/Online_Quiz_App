import express from "express";
import authenticateJWT from "../services/token/token.service.js";
import { getfullusers,updateusers,getactivitybyuser,getdetailedactivityresult } from "../controllers/users.controller.js";
const usersRouter=express.Router();
usersRouter.get('/apigetfullusers',authenticateJWT(['admin']),getfullusers);
usersRouter.put('/apiupdateusers',authenticateJWT(['admin']),updateusers);
usersRouter.get('/apigetactivitybyuser',authenticateJWT(['admin']),getactivitybyuser);
usersRouter.get('/apigetdetailedactivityresult',authenticateJWT(['admin']),getdetailedactivityresult);
export default usersRouter;