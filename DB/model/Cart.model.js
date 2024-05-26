import mongoose, { Schema, Types, model } from "mongoose";

//this code written by muawiya ismail-->
const cartSchema = new Schema({
    userId : {
        type:Types.ObjectId,
        ref : 'User',
        required : true,
    },
    products : [{
        productId :{type:Types.ObjectId,ref:'Product',required : true},
        quantity:{type:Number,default:1},
    }],

});

    

const CartModel = model('Cart',cartSchema);

export default CartModel;//<--
