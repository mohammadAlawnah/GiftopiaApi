import mongoose, { model } from "mongoose";

const {Schema} = mongoose;

const EventSchwma = new Schema({
    name  : {
        type : String,
        require : true,
    },
    description  : {
        type : String,
        require : true,
    },
    confarmEmail:{
        type : Boolean,
        default : false
    },
  
},{
    timestamps : true
})

const EventModel = model('User',EventSchwma)

export default EventModel;