import mongoose, { model } from "mongoose";

const {Schema} = mongoose;

const CartSchwma = new Schema({
    userId  : {
        type : String,
        require : true,
    },
    productId : [{
        type : String,
        require : true,
        unique : true,
    }],
    quantity :{
        type : Number,
        require : true,

    },
    totalPrice  : {
        type : Number,
        require : true,
    },

},{
    timestamps : true
})

const cartModel = model('User',CartSchwma)

export default cartModel;