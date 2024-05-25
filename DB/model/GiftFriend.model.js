import mongoose, { Types,model } from "mongoose";

const {Schema} = mongoose;

const GiftFriendSchwma = new Schema({
    userId  : {
        type : Types.ObjectId,
        ref:'User',
    },
    productId  : [{
        type : Types.ObjectId,
        ref : 'User'
    }],
    friendId : {
        type : Types.ObjectId,
        ref:'User',
    }
},{
    timestamps : true
})

const GiftFriendModel = model('GiftFriend',GiftFriendSchwma)

export default GiftFriendModel;
