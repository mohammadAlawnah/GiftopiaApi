import { Router } from "express";
import * as categoryControllar from './category.controllar.js'
import { auth } from "../../middleware/auth.middleware.js";
import { endPoints } from "./category.role.js";

//this code written by muawiya ismail-->
const router = Router();
router.get('/displayAllCategories',auth(endPoints.get),categoryControllar.displayAllCategories)
router.delete('/deleteCategory',auth(endPoints.create),categoryControllar.deleteCategory)
router.post('/addNewCategory',auth(endPoints.destroy),categoryControllar.addNewCategory)

export default router;//<--


