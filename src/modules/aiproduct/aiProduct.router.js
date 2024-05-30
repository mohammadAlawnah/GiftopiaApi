// This code is written by Reema Kusa
import { Router } from "express"
import * as aiProductControllar from './aiProduct.controllar.js'
//import admin from "../../middleware/admin.middleware.js"
import { endPoint } from "./aiProduct.role.js";
import fileUpload, { fileType } from "../../utils/multer.js";
import { auth } from "../../middleware/auth.middleware.js";

const router = Router({ mergeParams: true });

router.post('/addProduct', auth(endPoint.create), fileUpload(fileType.image).single('image'), aiProductControllar.addProduct);
router.delete('/deleteProduct/:productId', auth(endPoint.delete), aiProductControllar.deleteProduct);
router.put('/editProduct/:productId', auth(endPoint.update), fileUpload(fileType.image).single('image'), aiProductControllar.editProduct);

export default router;