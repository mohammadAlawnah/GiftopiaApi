import locationModel from "../../../DB/model/Location.model.js";
//import userModel from "../../../DB/model/User.model";


export const addlocation=async(req,res)=>{

    const { country, city, street } = req.body;
    const id = req.user_id;

    const addloc = await locationModel.create({ country, city, street, userId:id})
    res.json({message: addloc})
}

export const displayLocation = async(req,res)=>{
    const location = await locationModel.findone({userId:req.user_id})
    return res.json({message:location});
}

export const updateLocation = async(req,res)=>{
    const { country, city, street } = req.body;

    const location = await locationModel.updateOne({userId:req.user_id},{ country, city, street})
    return res.json({message:location});
}