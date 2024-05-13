import categoryModel from "../../../DB/model/category.model.js";

export const displayAllCategories = async(req,res)=>{
    const allCategories = await categoryModel.find();
        
    if (!allCategories || allCategories.length === 0){
        return res.status(404).send('Categories not found');
    }else{
        return res.status(200).json(allCategories);
    }
}


export const deleteCategory= async(req,res)=>{
    const categoryToDelete = await categoryModel.findOne({name:req.body.name});
        
    if (!categoryToDelete){
        return res.status(404).send('Category not found');
    }else{
        await categoryModel.deleteOne({name:req.body.name});
        return res.status(200).json('Category successfully deleted');
    }
}

export const addNewCategory = async(req,res)=>{
    const categoryToAdd = await categoryModel.findOne({name:req.body.name.toLowerCase()});
    if(categoryToAdd){
        return res.status(404).send('Category already exists');
    }else{
        await categoryModel.create({name:req.body.name.toLowerCase(),createdBy:req.user._id,updateBy:req.user._id})
        return res.status(200).json('Category successfully added');       
    }
};
