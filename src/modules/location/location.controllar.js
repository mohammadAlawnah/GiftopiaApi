import locationModel from "../../../DB/model/Location.model.js";

export const addlocation=async(req,res)=>{

    try {
        const { country, city, street } = req.body;
        const id = req.user_id;

        const addloc = await locationModel.create({ country, city, street, userId:id });

        if (addloc) {
            return res.json({ message: "Location added successfully", location: addloc });
        } else {
            return res.status(400).json({ error: "Failed to add location" });
        }
    } catch (error) {
        return res.status(500).json({ error: "Server error" });
    }
}

export const displayLocation = async(req,res)=>{

    try {
        const location = await locationModel.findOne({ userId: req.user._id });

        if (location) {
            return res.json({ message: "Location found", location });
        } else {
            return res.status(404).json({ message: "Location not found" });
        }
    } catch (error) {
        return res.status(500).json({ error: "Server error" });
    }
}

export const updateLocation = async(req,res)=>{

    try {
        const { country, city, street } = req.body;

        const uplocation = await locationModel.updateOne({userId:req.user._id},{ country, city, street})

        if (uplocation) {
            return res.json({ message: "Location updated successfully", location: uplocation });
        } else {
            return res.status(404).json({ message: "Location not found" });
        }
    } catch (error) {
        return res.status(500).json({ error: "Server error" });
    }
}
