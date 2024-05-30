import { Router } from "express";
import * as subcategoryControllar from './subcategory.controllar.js'
import fileUpload, {fileType } from "../../utils/multer.js";
import {auth} from "../../middleware/auth.middleware.js";
import { endPoint } from "./subcategory.role.js";

const router = Router({mergeParams:true});

router.post('/',auth(endPoint.create),fileUpload(fileType.image).single('image'),subcategoryControllar.create)
router.get('/',auth(endPoint.get),subcategoryControllar.getAll)
router.get('/active',auth(endPoint.get),subcategoryControllar.getActive)
router.patch('/:id',auth(endPoint.create),fileUpload(fileType.image).single('image'),subcategoryControllar.updateCategory)
router.delete('/:id',auth(endPoint.destroy),subcategoryControllar.destroy)

















export default router;