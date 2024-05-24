import mongoose, { model } from "mongoose";

const {Schema} = mongoose;

const BrandSchema = new Schema({
    name  : {
        type : String,
        uniaqe:true,
    },
    image : {
        type:Object,
    },
    value  : {
        type : Number,
    },
    })

const BrandModel = model('Brand',BrandSchema)

export default BrandModel;