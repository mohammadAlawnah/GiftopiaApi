import { Schema,Types,model } from "mongoose";

const categorySchema = new Schema({
    name : {
        type:String,
        unique:true,
        require : true,    
    },
    slug:{
        type : String,
        
    },
    image : {
        type:Object,
        
    },
    status : {
        type : String,
        default : 'Active',
        enum : ['Active','NotActive'],
    },
    createdBy :{
        type : Types.ObjectId,
        ref : 'User',
    },
    updateBy:{
        type:Types.ObjectId,
        ref:'User',
    }
})

const categoryModel = model('category',categorySchema);

export default categoryModel;