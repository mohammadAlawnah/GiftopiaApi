import mongoose, { model } from "mongoose";

const {Schema} = mongoose;

const CoponSchema = new Schema({
    name  : {
        type : String,
    },
    value  : {
        type : Number,
    },
    })

const CoponModel = model('Copon',CoponSchema)

export default CoponModel;