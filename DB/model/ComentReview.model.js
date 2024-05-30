// This code is written by Reema Kusa
import mongoose, { Types, model } from "mongoose";

const {Schema} = mongoose;

const CommentsAndReviewSchema = new Schema({

    userId : {
        type : Types.ObjectId,
        ref : 'User',
    },

    commentAndReviewId : {
        type : Types.ObjectId,
        ref : 'Comment',
    },

    userName : {
        type : String,
        require : true,
    },

    comment  : {
        type : String,
        require : true,
    },

    review:{
        type : Number,
        required: true,
        min: 1,
        max: 5
    }
  
},{
    timestamps : true
})

const CommentsAndReviewModel = model('Comment',CommentsAndReviewSchema)

export default CommentsAndReviewModel