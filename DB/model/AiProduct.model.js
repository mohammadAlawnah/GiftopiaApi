import mongoose, { Types, model } from "mongoose";
const {Schema} = mongoose;
const ProductSchwma = new Schema({

    userId  : {
        type : Types.ObjectId,
        ref:'User',
    },
    title : {
        type : String,
        require : true,
    },
    description : {
        type : String,
        require : true,
    },
    price :{
        type : Number,
        require : true,
    },

    occasion : {
        type : String,
        require : true,
    },
    imageUrl  : {
        type : String,
        require : true,
    },
    sourceUrl : {
        type : String,
        require : true,
    },
},{
    timestamps : true
})

const productModel = model('Product',ProductSchwma)

export default productModel;