import express from "express";
import { getcategories,getsubcategories } from "../controllers/categories.controller.js";
const categoryRouter=express.Router();
//admin
categoryRouter.get('/apigetcategories',getcategories);
categoryRouter.get('/apigetsubcategories',getsubcategories);
export default categoryRouter;