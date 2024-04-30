import mongoose, { model } from "mongoose";

const {Schema} = mongoose;

const CartSchema = new Schema({
    userId  : {
        type : String,
        require : true,
    },
    products : [{
        productId : { 
        type : String,
        require : true,
        unique : true,
    },
    quantity :{
        type : Number,
        require : true,
    }}],
    totalPrice  : {
        type : Number,
        require : true,
    },

},{
    timestamps : true
})

const cartModel = model('Cart',CartSchema)

export default cartModel;