import { Router } from "express";
import * as productControllar from './product.controllar.js';
import fileUpload ,{fileType} from "../../utils/multer.js";
import { endPoint } from "./product.role.js";
import { auth } from "../../middleware/auth.middleware.js";

const router = Router();

router.post('/',auth(endPoint.create),fileUpload(fileType.image).fields([
    {name:'mainImage',maxCount:1},
    {name:'subImages',maxCount:5},
]),productControllar.create);


router.get('/displayTopProduct',productControllar.displayTopProduct)
router.get('/searchProduct',productControllar.searchProduct)
router.post('/BuyingForFriend',productControllar.BuyingForFriend)
export default router
