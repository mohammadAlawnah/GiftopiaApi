import { Router } from "express";
import * as userControllar from './user.controllar.js'
import { auth } from "../../middleware/auth.middleware.js";
import admin from "../../middleware/admin.middleware.js";
import { endPoint } from "./user.role.js";

const router = Router();

router.get('/displayGeneralUser', auth(endPoint.get), userControllar.displayGeneralUser);
//router.get('/displayGeneralUserById', auth(endPoint.get), userControllar.displayGeneralUserById);
router.get('/displayAdmin', auth(endPoint.get), userControllar.displayAdmin);
//router.get('/displayAdminById', auth(endPoint.get), userControllar.displayAdminById);
router.put('/updateUserById', auth(endPoint.update), userControllar.updateUserById);
router.delete('/deleteAdminById', auth(endPoint.destroy), userControllar.deleteAdminById);
router.delete('/deleteUserById', auth(endPoint.destroy), userControllar.deleteUserById);


router.post('/addFriend', auth(endPoint.add), userControllar.addFriend);
// router.put('/updateFriendById', auth(endPoint.update), userControllar.updateFriendById);
router.get('/displayFriend', auth(endPoint.get), userControllar.displayFriend);
router.delete('/deleteFriendById', auth(endPoint.destroy), userControllar.deleteFriendById);
router.get('/displayUserFreined', auth(endPoint.get), userControllar.displayUserFreined);


// router.delete('/deleteInactiveUsers', auth(endPoint.destroy), userControllar.deleteInactiveUsers);


router.post('/addAdmin',admin,userControllar.addAdmin)
router.post('/addStaff',userControllar.addStaf)

export default router

