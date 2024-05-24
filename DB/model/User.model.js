import mongoose, { model } from "mongoose";

const {Schema} = mongoose;

const UserSchwma = new Schema({
    userName : {
        type : String,
        require : true,
    },
    email : {
        type : String,
        require : true,
        unique : true,
    },
    confarmEmail:{
        type : Boolean,
        default : false

        
    },
    password : {
        type : String,
        require : true,
    },
    age : {
        type : Number
    },
    phone : {
        type : String,
    },
    status:{
        type :String,
        default : 'active',
        enum:['active','notActive']
    },
    gender : {
        type : String,
        enum : ['male','female'] // بنحصر الخيارات الي بختارها اليوزر 
    },
    role : {
        type : String,
        enum : ['admin','staff','GeneralUser'],
        default : 'GeneralUser'
    },
    image : {
        type : Object,
    },

},{
    timestamps : true
})

const userModel = model('User',UserSchwma)

export default userModel;