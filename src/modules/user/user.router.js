import { Router } from "express";
import * as userControllar from './user.controllar.js'
import auth from "../../middleware/auth.middleware.js";
import admin from "../../middleware/admin.middleware.js";

const router = Router();


// router.get('/displayGeneralUser',admin,userControllar.displayGeneralUser)



 router.get('/displayStaff',admin,userControllar.displayStaff)
// router.get('/displayAdmin',admin,userControllar.displayAdmin)


router.post('/addAdmin',admin,userControllar.addAdmin)
router.post('/addStaff',admin,userControllar.addStaf)
router.post('/addUser',userControllar.addUser)

// router.post('/forgetPassword',userControllar.forgetPassword)
// router.post('/resetPassword',userControllar.resetPassword)
 router.put('/updatePassword',auth,userControllar.updatePassword)


export default router