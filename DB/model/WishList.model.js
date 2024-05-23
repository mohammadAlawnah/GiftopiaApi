// Mohammad Shawahni
import mongoose, { Types, model } from "mongoose";

const {Schema} = mongoose;

const wishList = new Schema({
    userId  : {
        type : Types.ObjectId,
        ref : 'User',
    },
    productId:{
        type : Types.ObjectId,
        ref:'Product',
    }

},{
    timestamps : true
})

const wishListModel = model("WishList",wishList)

export default wishListModel;