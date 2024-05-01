import auth from '../../middleware/auth.middleware.js';
import * as CommentReviewController from './commentReview.controllar.js'
import { Router } from "express";

const router = Router();

router.post('/addCommentAndReview',auth,CommentReviewController.addCommentAndReview)
router.get('/displatCommentAndReview',auth,CommentReviewController.displayCommentAndReview)
router.put('/updateCommentAndReview',auth,CommentReviewController.updateCommentAndReview)
router.delete('/deleteCommentAndReview', auth, CommentReviewController.deleteCommentAndReview)

export default router;