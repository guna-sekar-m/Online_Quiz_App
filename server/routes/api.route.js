import express from "express";
import { adminlogin } from "../controllers/login.controller.js";
import { saveentryform } from "../controllers/usersinit.controller.js";
const apiRouter=express.Router();
//admin
apiRouter.post('/apiadminlogin',adminlogin);
apiRouter.post('/apisaveentryform',saveentryform);
export default apiRouter;