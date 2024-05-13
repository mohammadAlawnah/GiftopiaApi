import { Router } from "express";
import * as categoryControllar from './category.controllar.js'
import auth from "../../middleware/auth.middleware.js";

const router = Router();
router.get('/displayAllCategories',auth,categoryControllar.displayAllCategories)
router.delete('/deleteCategory',auth,categoryControllar.deleteCategory)
router.post('/addNewCategory',auth,categoryControllar.addNewCategory)

export default router;
