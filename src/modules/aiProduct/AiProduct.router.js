import { Router } from "express";
import * as aiProductControllar from './AiProduct.controllar.js'
import {auth} from "../../middleware/auth.middleware.js";
const router = Router();

router.get('/getDataValantine',aiProductControllar.getDataValantine)
router.get('/getDataBirthday',aiProductControllar.getDataBirthday)


export default router