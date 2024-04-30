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
export const editPassword =async(req,res)=>{
    const {currentPassword,newPassword} = req.body;
    const User = await userModel.findOne({_id:user._id})
    const CheckPassword = await bcrypt.compare(currentPassword,User.password);
    if(CheckPassword){
        const hashPassword = await bcrypt.hash(password,parseInt(process.env.SALT_ROUND))
        const user =await userModel.updateOne({_id:req.user._id},{password:hashPassword})
        return res.json({message:'update password has been sucesed'})
    }
}

export const updateEmail =async(req,res)=>{
    const {Email} = req.body;
const user =await userModel.updateOne({_id:req.user._id},{Email})
return res.json({message:'update email has been sucesed'})
}

export const editInformation =async(req,res)=>{
    const {userName,age,phone,gender} = req.body;
const user =await userModel.updateOne({_id:req.user._id},{userName,age,phone,gender})
return res.json({message:'update email has been sucesed'})
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