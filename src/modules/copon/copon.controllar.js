import CoponModel from "../../../DB/model/Copon.model.js";

export const updateCopon = async (req, res) => {
    const { name,value } = req.body;
    const Copon = await CoponModel.updateOne({ name}, { name,value })
    return res.json({ message: Copon })
}

export const createCopon = async (req, res) => {
    req.body.name = req.body.name.toLowerCase()
    const { name, value } = req.body;
    if (await CoponModel.findOne({ name })) {
        return res.json({ message: "copon is already exist" })
    }
    else {
        const copon = await CoponModel.create({ name, value })
        return res.json({ message: copon })
    }
}

export const getCopon = async (req, res) => {
    const { name, value } = req.body;
    const Copon = await CoponModel.findOne({ name }, { name, value })
    return res.json({ Copon })
}

export const getAllCopon = async (req, res) => {
    const { name, value } = req.body;
    const Copon = await CoponModel.find({}, { name, value })
    return res.json({ message: Copon })
}

export const deleteCopon = async (req, res) => {
    const { name, value } = req.body;
    const Copon = await CoponModel.findOne({ name }, { name, value })
    if (!Copon) {
        return res.json({ message: 'copon is not found' })
    }
    else {
        CoponModel.deleteOne({ name })
        return res.json({ message: 'copon is deleted' })
    }
}
