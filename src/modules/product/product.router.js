import { Router } from "express";
import * as productControllar from './product.controllar.js'
import {auth} from "../../middleware/auth.middleware.js";
const router = Router();

// router.post('/addProduct',auth,locationControllar.addProduct)
// router.get('/editProduct',auth,locationControllar.editProduct)

export default router