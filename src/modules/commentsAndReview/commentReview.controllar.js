import commentAndReviewModel from '../../../DB/model/ComentReview.model.js';

// Function to add comment and review (ReemaKusa)
export const addCommentAndReview = async (req, res) => {

    try {
        const { comment, review } = req.body;
        const id = req.user._id;
        const userName = req.userName;

        const addcomm = await commentAndReviewModel.create({ comment, review, userId: id, userName: userName });

        if (addcomm) {
            return res.json({ message: "Comment and review added successfully", commentReview: addcomm });
        } else {
            return res.status(400).json({ error: "Failed to add comment and review" });
        }
    } catch (error) {
        return res.status(500).json({ error: "Server error" });
    }
}

// Function to display comment and review (ReemaKusa)
export const displayCommentAndReview = async (req, res) => {

    try {
        const commentReview = await commentAndReviewModel.findOne({ userId: req.user._id, userName: req.userName });

        if (commentReview) {
            return res.json({ message: "Comment and review found", commentReview });
        } else {
            return res.status(404).json({ message: "Comment and review not found" });
        }
    } catch (error) {
        return res.status(500).json({ error: "Server error" });
    }

}

// Function to update comment and review (ReemaKusa)
export const updateCommentAndReview = async (req, res) => {

    try {
        const { comment, review } = req.body;
        const upcommentReview = await commentAndReviewModel.updateOne({ userId: req.user._id }, { comment, review })

        if (upcommentReview) {
            return res.json({ message: "Comment and review updated successfully", commentReview: upcommentReview });
        } else {
            return res.status(404).json({ message: "Comment and review not found" });
        }
    } catch (error) {
        return res.status(500).json({ error: "Server error" });
    }
}

// Function to delete comment and review (ReemaKusa)
export const deleteCommentAndReview = async (req, res) => {

    try {
        const { comment, review } = req.body;
        const id = req.user._id;
        //const id = req.user_id;

        const deleteCommentAndReview = await commentAndReviewModel.deleteOne({ userId: id });

        if (deleteCommentAndReview.deletedCount > 0) {
            return res.json({ message: "Comment and review deleted successfully" });
        } else {
            return res.status(404).json({ message: "Comment and review not found" });
        }
    } catch (error) {
        return res.status(500).json({ error: "Server error" });
    }
}