import { Router } from "express";
import * as categoryControllar from './category.controllar.js'
import fileUpload, {fileType } from "../../utils/multer.js";
import {auth} from "../../middleware/auth.middleware.js";
import { endPoint } from "./category.role.js";

const router = Router();

router.post('/',auth(endPoint.create),fileUpload(fileType.image).single('image'),categoryControllar.create)


export default router;