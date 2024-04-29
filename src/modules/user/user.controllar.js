import e from "express";
import userModel from "../../../DB/model/User.model.js";
export const addAdmin = async(req,res)=>{

    const {email} = req.body;

    const user = await userModel.findOne({email});

    if(!user){
        return res.json({message : 'user not found'})
    }


    if(user.role == 'admin'){
        return res.json({message:'the user role is alridy admin'})
    }

    
    const admin = await userModel.updateOne({_id:user._id},{role:"admin"})

    if(admin.modifiedCount > 0){
        const updateUser = await userModel.findOne({_id:user._id})
        return res.json({message : updateUser})
    }
    return res.json({message : 'error add admin user'})
        
}

export const addStaf = async(req,res)=>{
    const {email} = req.body;

    const user = await userModel.findOne({email});
    if(!user){
        return res.json({message : 'user not found'})
    }
    if(user.role == 'staff'){
        return res.json({message:'the user role is alridy staff'})
    }
    const staff = await userModel.updateOne({_id:user._id},{role:"staff"})

    if(staff.modifiedCount>0){
        const updateUser = await userModel.findOne({_id:user._id})
        return res.json({message : updateUser})
    }
}

// export const displayGeneralUser = async(req,res)=>{
//     const users = await userModel.find({role:'admin'});
//     res.json({message:'sucsess',users})
// }






// export const displayStaff = async(req,res)=>{


// }

// export const displayAdmin = async(req,res)=>{
    
// }

// export const forgetPassword = async(req,res)=>{

// }

// export const resetPassword = async(req,res)=>{

// }

// export const updatePassword = async(req,res)=>{

// }