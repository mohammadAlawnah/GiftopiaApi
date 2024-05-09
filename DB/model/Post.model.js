import mongoose, { Types,model } from "mongoose";

const {Schema} = mongoose;

const PostSchema = new Schema({
    userId  : {
        type : Types.ObjectId,
        ref : 'User',
        require : true,
    },
    title: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true,
    },
    image:{
        type:String,
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
},{
    timestamps : true
})

const postModel = model('Post',PostSchema)

export default postModel;
