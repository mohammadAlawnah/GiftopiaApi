import { Router } from "express"
import * as aiProductControllar from './aiProduct.controllar.js'
import admin from "../../middleware/admin.middleware.js"

const router = Router();

router.post('/addProduct', admin, aiProductControllar.addProduct)
router.delete('/deleteProduct', admin, aiProductControllar.deleteProduct)
router.put('/editProduct', admin, aiProductControllar.editProduct)

export default router;