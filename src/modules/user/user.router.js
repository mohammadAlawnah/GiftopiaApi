import { Router } from "express";
import * as userControllar from './user.controllar.js'
import auth from "../../middleware/auth.middleware.js";
import admin from "../../middleware/admin.middleware.js";

const router = Router();


// router.get('/displayGeneralUser',admin,userControllar.displayGeneralUser)



// router.get('/displayStaff',admin,userControllar.displayStaff)
// router.get('/displayAdmin',admin,userControllar.displayAdmin)


router.post('/addAdmin',admin,userControllar.addAdmin)
router.post('/addStaff',userControllar.addStaf)

router.put('/editPassword',auth,userControllar.editPassword)
router.put('/editInformation',auth,userControllar.editInformation)
router.put('/updateEmail',auth,userControllar.updateEmail)

// router.post('/forgetPassword',userControllar.forgetPassword)
// router.post('/resetPassword',userControllar.resetPassword)
// router.put('/updatePassword',userControllar.updatePassword)


export default router