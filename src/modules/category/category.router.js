import { Router } from "express";
import * as categoryControllar from './category.controllar.js'
import fileUpload, {fileType } from "../../utils/multer.js";
import auth from "../../middleware/auth.middleware.js";

const router = Router();

router.post('/',auth,fileUpload(fileType.image).single('image'),categoryControllar.create)

export default router;
