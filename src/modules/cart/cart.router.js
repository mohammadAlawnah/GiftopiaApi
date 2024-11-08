
//this code is implemented by Muawiya ismail -->
import { Router } from "express";
import * as cartControllar from './cart.controllar.js'
import { auth, roles } from "../../middleware/auth.middleware.js";
import { endPoints } from "./cart.role.js";

const router = Router({caseSensitive:true});

router.get('/',auth(endPoints.create),cartControllar.get)
router.post('/',auth(endPoints.create),cartControllar.create);
router.put('/clear',auth(endPoints.delete),cartControllar.clearCart);
router.put('/updateQuantity/:productId',auth(endPoints.create),cartControllar.updateQuantity)
router.put('/:productId',auth(endPoints.delete),cartControllar.remove);
//--> until this line is implemented by muawiya 


export default router;