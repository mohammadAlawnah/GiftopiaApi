import e from "express";
import userModel from "../../../DB/model/User.model.js";
import friendModel from "../../../DB/model/Friend.model.js";

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


export const displayGeneralUser = async (req, res) => {
    try {
        const users = await userModel.find({ role: 'generalUser' });
        res.status(200).json({ message: 'sucsess', users });
    }
    catch (error) {
        console.log(error);
        res.status(500).json({ message: "Somthing went wrong" });
    };
};


// export const displayGeneralUserById = async (req, res) => {
//     try {
//         const users = await userModel.findById(req.params.id);
//         if (users) {
//             res.status(200).json({ message: 'sucsess', users });
//         }
//         else {
//             res.status(404).json({ message: "Not Found" });
//         }
//     }
//     catch {
//         console.log(error);
//         res.status(500).json({ message: "Somthing went wrong" });
//     }
// };


export const displayAdmin = async (req, res) => {
    try {
        const admin = await userModel.find({ role: 'admin' });
        res.status(200).json({ message: 'sucsess', admin });
    }
    catch (error) {
        console.log(error);
        res.status(500).json({ message: "Somthing went wrong" });
    };
};


// export const displayAdminById = async (req, res) => {
//     try {
//         const admin = await userModel.findById(req.params.id);
//         if (admin) {
//             res.status(200).json({ message: 'sucsess', admin });
//         }
//         else {
//             res.status(404).json({ message: "Not Found" });
//         }
//     }
//     catch {
//         console.log(error);
//         res.status(500).json({ message: "Somthing went wrong" });
//     }
// };


export const updateUserById = async (req, res) => {
    try {
        const user = await userModel.findByIdAndUpdate(req.params.id, {
            $set: {
                userName: req.body.userName,
                email: req.body.email,
                confarmEmail: req.body.confarmEmail,
                password: req.body.password,
                age: req.body.age,
                phone: req.body.phone,
                status: req.body.status,
                gender: req.body.gender,
                role: req.body.role,
                image: req.body.image,
            }
        },
            {
                new: true,
            });
        
        res.status(200).json(user);
    }
    catch (error) {
        console.log(error);
        res.status(500).json({ message: "Somthing went wrong" });
    }
};


export const addFriend = async (req, res) => {
    try {
        const friend = new Friend({
            id: req.body.id,
            name: req.body.name,
        });
        const result = await friend.save();
        res.status(201).json(friend);
    }
    catch (error) {
        console.log(error);
        res.status(500).json({ message: "Somthing went wrong" });
    }
};


// export const updateFriendById = async (req, res) => {
//     try {
//         const friend = await Friend.findByIdAndUpdate(req.params.id, {
//             $set: {
//                 id: req.body.id,
//                 name: req.body.name,
//             }
//         },
//             {
//                 new: true,
//             });
        
//         res.status(200).json(friend);
//     }
//     catch (error) {
//         console.log(error);
//         res.status(500).json({ message: "Somthing went wrong" });
//     }
// };


export const displayFriend = async (req, res) => {
    try {
        const friendList = await Friend.find();
        res.status(200).json(friendList);
    }
    catch (error) {
        console.log(error);
        res.status(500).json({ message: "Somthing went wrong" });
    }
};


// export const displayFriendById = async (req, res) => {
//     try {
//         const friend = await Friend.findById(req.params.id);
//         if (friend) {
//             res.status(200).json(friend);
//         }
//         else {
//             res.status(404).json({ message: "Not Found" });
//         }
//     }
//     catch {
//         console.log(error);
//         res.status(500).json({ message: "Somthing went wrong" });
//     }
// };


export const deleteFriendById = async (req, res) => {
    try {
        const friend = await Friend.findById(req.params.id);
        if (friend) {
            await Friend.findByIdAndDelete(req.params.id);
            res.status(200).json({ message: "Friend deleted successfully" });
        }
        else {
            res.status(404).json({ message: "Friend not found" });
        }
    }
    catch (error) {
        console.log(error);
        res.status(500).json({ message: "Somthing went wrong" });
    }
};



