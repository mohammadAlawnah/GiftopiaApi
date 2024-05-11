import categoryModel from "../../../DB/model/category.model.js";
import cloudinary from "../../utils/clodinary.js";
import slugify from "slugify";

export const create = async(req,res)=>{
    req.body.name = req.body.name.toLowerCase();
    const {name} = req.body;

    if(await categoryModel.findOne({name})){
        return res.status(409).json({message:"category already exists"})
    }

    const {secure_url,public_id} = await cloudinary.uploader.upload(req.file.path,{
        folder : `${process.env.APPNAME}/categories`
    })

    const slug = slugify(name)

    const category = await categoryModel.create({name,slug,image:{secure_url,public_id},createdBy:req.user._id,updateBy:req.user._id})

    req.body.image = {secure_url,public_id}

    return res.json({message:category})

}
