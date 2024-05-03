import { Router } from "express";
import * as userControllar from './user.controllar.js'
import auth from "../../middleware/auth.middleware.js";
import admin from "../../middleware/admin.middleware.js";

const router = Router();

router.get('/displayGeneralUser', admin, userControllar.displayGeneralUser);
router.get('/displayAdmin', admin, userControllar.displayAdmin);
router.put('/updateUserById', admin, userControllar.updateUserById);


router.post('/addFriend', userControllar.addFriend);
// router.put('/updateFriendById', admin, userControllar.updateFriendById);
router.get('/displayFriend', userControllar.displayFriend);
router.delete('/deleteFriendById', userControllar.deleteFriendById);


router.post('/addAdmin',admin,userControllar.addAdmin)
router.post('/addStaff',userControllar.addStaf)

export default router