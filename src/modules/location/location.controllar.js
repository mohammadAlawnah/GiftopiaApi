import locationModel from "../../../DB/model/Location.model.js";


export const addlocation=async(req,res)=>{

    const { country, city, street } = req.body;
    const id = req.user._id;

    const addloc = await locationModel.create({ country, city, street, userId:id})
    return res.json({message: addloc})
}

export const displayLocation = async(req,res)=>{
    const location = await locationModel.findone({userId:req.user._id})
    return res.json({message:location});
}

export const updateLocation = async(req,res)=>{
    const { country, city, street } = req.body;

    const location = await locationModel.updateOne({userId:req.user._id},{ country, city, street})
    return res.json({message:location});
}
