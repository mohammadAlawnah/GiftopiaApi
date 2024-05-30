import { Router } from "express";
import * as SearchGiftControllar from './SearchGift.controllar.js'
import { endPoint } from "./SearshGift.role.js";
import { auth } from "../../middleware/auth.middleware.js";

const router =Router();

router.post('/sendData',auth(endPoint.create),SearchGiftControllar.sendData)
router.post('/resData',SearchGiftControllar.resData)
router.get('/getData',auth(endPoint.get),SearchGiftControllar.displayProduct)


export default router