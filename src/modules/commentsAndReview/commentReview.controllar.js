import commentAndReviewModel from '../../../DB/model/ComentReview.model.js';

export const addCommentAndReview=async(req,res)=>{

    const { comment, review } = req.body;
    const id = req.user._id;
    const userName = req.userName;

    const addcomm = await commentAndReviewModel.create({ comment, review, userId:id, userName:userName})
    return res.json({message: addcomm})
}

export const displayCommentAndReview = async(req,res)=>{

    const commentReview = await commentAndReviewModel.findone({userId:req.user._id, userName:req.userName})
    return res.json({message:commentReview});

}

export const updateCommentAndReview = async(req,res)=>{
    const { comment, review } = req.body;

    const commentReview = await commentAndReviewModel.updateOne({userId:req.user._id},{ comment, review})
    return res.json({message:commentReview});
}

export const deleteCommentAndReview =async(req,res)=>{

    const { comment, review } = req.body;
    const id = req.user._id;

    const deleteCommentAndReview = await commentAndReviewModel.deleteOne({ userId: id });
    return res.json({ message: "Comment and review deleted successfully" });

}