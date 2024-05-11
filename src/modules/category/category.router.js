import { Router } from "express";
import * as categoryControllar from './category.controllar.js'
import subcategoryRouter from '../subcategory/subcategory.router.js'
import fileUpload, {fileType } from "../../utils/multer.js";
import {auth} from "../../middleware/auth.middleware.js";
import { endPoint } from "./category.role.js";

const router = Router();

// id ----->category


router.use('/:id/subcategory',subcategoryRouter)
router.post('/',auth(endPoint.create),fileUpload(fileType.image).single('image'),categoryControllar.create)
router.get('/',auth(endPoint.get),categoryControllar.getAll)


export default router;