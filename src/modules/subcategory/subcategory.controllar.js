import categoryModel from "../../../DB/model/category.model.js";
import subcategoryModel from "../../../DB/model/subcategory.js";
import cloudinary from "../../utils/clodinary.js";
import slugify from "slugify";

export const create = async(req,res)=>{


    const {categorieId} = req.body

    const categorie = await categoryModel.findById(categorieId)

    if(!categorie){
        return res.status(404).json({message:"category not finde"});
    }




    req.body.name = req.body.name.toLowerCase();

    const {name} = req.body;

    console.log(name)

    if(await categoryModel.findOne({name})){
        return res.status(409).json({message:"category already exists"})
    }


    const {secure_url,public_id} = await cloudinary.uploader.upload(req.file.path,{
        folder : `${process.env.APPNAME}/subcategories`
    })

    req.body.image = {secure_url,public_id}



    const slug = slugify(name)

   const subcategoriy= await subcategoryModel.create({name,slug,image:{secure_url,public_id},categoryId:categorieId,createdBy:req.user._id,updateBy:req.user._id})

   return res.json({message : subcategoriy}) 
}
