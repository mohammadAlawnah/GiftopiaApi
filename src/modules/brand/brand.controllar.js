// import BrandModel from "../../../DB/model/Brand.model";
import BrandModel from "../../../DB/model/Brand.model.js";

export const addBrand = async (req, res) => {
    req.body.name = req.body.name.toLowerCase()
    const { name } = req.body;
    if (await BrandModel.findOne({ name })) {
        return res.json({ message: "Brand already is exist" })
    }
    const brand = await BrandModel.create({ name })
    return res.json({ message: brand })
}

export const displayBrand = async (req, res) => {
    const { name } = req.body;
    const brand = await BrandModel.findOne({ name })
    return res.json({ message: name })
}

export const editBrand = async (req, res) => {
    const { name, newName } = req.body;
    const brand = await BrandModel.findOne({ name })

    if (!brand) {
        return res.json({ message: "Brand is  not exist" })
    }
    const newBrand = await BrandModel.updateOne({ name }, { name })
    return res.json({ message: brand })
}

export const deleteBrand = async (req, res) => {
    const { name } = req.body;
    const brand = await BrandModel.findOne({ name })
    if (!brand) {
        return res.json({ message: 'Brand is not found' })
    }
    else {
        BrandModel.deleteOne({ name })
        return res.json({ message: 'Brand is deleted' })
    }
}



