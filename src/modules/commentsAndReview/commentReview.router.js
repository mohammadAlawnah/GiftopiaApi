// This code is written by Reema Kusa
import { Router } from "express";
import * as CommentReviewController from './commentReview.controllar.js';
import { auth } from '../../middleware/auth.middleware.js';
import { endPoint } from './commentReview.role.js';

const router = Router();

router.post('/addCommentAndReview',auth(endPoint.add),CommentReviewController.addCommentAndReview);
router.get('/displayCommentAndReview/:commentAndReviewId',auth(endPoint.display),CommentReviewController.displayCommentAndReview);
router.put('/updateCommentAndReview/:commentAndReviewId',auth(endPoint.update),CommentReviewController.updateCommentAndReview);
router.delete('/deleteCommentAndReview/:commentAndReviewId',auth(endPoint.delete),CommentReviewController.deleteCommentAndReview);

export default router;