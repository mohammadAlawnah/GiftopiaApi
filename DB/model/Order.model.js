import mongoose, { Types, model } from "mongoose";

const {Schema} = mongoose;

const OrderSchwma = new Schema({
    userId  : {
        type : Types.ObjectId,
        ref:'User',
    },
    productId  : [{
        type : Types.ObjectId,
        ref : 'User'
    }],

    totalPrice:{
        type : Boolean,
        default : false

    },


},{
    timestamps : true
})

const userModel = model('User',UserSchwma)

export default userModel;