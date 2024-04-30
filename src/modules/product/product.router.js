import { Router } from "express"
import * as productControllar from './product.controllar.js'
import admin from "../../middleware/admin.middleware.js"

const router = Router();

router.post('/addProduct', admin, productControllar.addProduct)
router.delete('/deleteProduct', admin, productControllar.deleteProduct)
router.put('/editProduct', admin, productControllar.editProduct)

export default router