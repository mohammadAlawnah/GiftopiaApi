import mongoose, { Types, model } from "mongoose";

const {Schema} = mongoose;

const LocationSchwma = new Schema({
    userId : {
        type : Types.ObjectId,
        ref : 'User',
    },
    contry : {
        type : String,
        require : true,
    },
    city:{
        type : String,
        require : true,
    },
    street  : {
        type : String,
        require : true,
    },
},{
    timestamps : true
})

const locationModel = model('Location',LocationSchwma)

export default locationModel;