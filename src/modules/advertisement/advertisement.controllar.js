import advertisementModel from "../../../DB/model/Advertisement.model.js";

export const addAdvertisement = async (req, res) => {
    try {
        const advertisement = new advertisementModel({
            id: req.body.id,
            publisher_name: req.body.publisher_name,
            type: req.body.type,
            display_date: req.body.display_date,
            budget: req.body.budget,
            cost_per_click: req.body.cost_per_click,
            cost_per_impression: req.body.cost_per_impression,
            geographic_location: req.body.geographic_location,
        });
        const result = await advertisement.save();
        res.status(201).json(advertisement);
    }
    catch (error) {
        console.log(error);
        res.status(500).json({ message: "Somthing went wrong" });
    }
};


export const updateAdvertisementById = async (req, res) => {
    try {
        const advertisement = await advertisementModel.findByIdAndUpdate(req.params.id, {
            $set: {
                id: req.body.id,
                publisher_name: req.body.publisher_name,
                type: req.body.type,
                display_date: req.body.display_date,
                budget: req.body.budget,
                cost_per_click: req.body.cost_per_click,
                cost_per_impression: req.body.cost_per_impression,
                geographic_location: req.body.geographic_location,
            }
        },
            {
                new: true,
            });
        
        res.status(200).json(advertisement);
    }
    catch (error) {
        console.log(error);
        res.status(500).json({ message: "Somthing went wrong" });
    }
};


export const displayAdvertisement = async (req, res) => {
    try {
        const advertisementList = await advertisementModel.find();
        res.status(200).json(advertisementList);
    }
    catch (error) {
        console.log(error);
        res.status(500).json({ message: "Somthing went wrong" });
    }
};


export const displayAdvertisementById = async (req, res) => {
    try {
        const advertisement = await advertisementModel.findById(req.params.id);
        if (advertisement) {
            res.status(200).json(advertisement);
        }
        else {
            res.status(404).json({ message: "Not Found" });
        }
    }
    catch {
        console.log(error);
        res.status(500).json({ message: "Somthing went wrong" });
    }
};

