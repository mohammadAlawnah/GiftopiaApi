import categoryModel from "../../../DB/model/category.model.js";
import subcategoryModel from "../../../DB/model/subcategory.js";
import productModel from "../../../DB/model/Product.model.js";
import userModel from "../../../DB/model/User.model.js";
import friendModel from "../../../DB/model/Friend.model.js";
import GiftFriendModel from "../../../DB/model/GiftFriend.model.js";
import slugify from "slugify";
import cloudinary from "../../utils/clodinary.js";


export const create = async(req,res)=>{
    const {name,categoryId,subcategoryId,price,discount} = req.body;

    const chaeckCatgory = await categoryModel.findById(categoryId);

    if(!chaeckCatgory){
        return res.status(404).json({message : 'category not finde'})
    }

    const cheackSubCategory = await subcategoryModel.findById(subcategoryId);

    if(!cheackSubCategory){
        return res.status.json({message : 'sub category not finde'})
    }

    if(cheackSubCategory.categoryId != categoryId){
        return res.json('The subCategory belongs to the second category')
    }

    req.body.slug = slugify(name)
    
    // req.body.finalPrice = price - (( price * (discount || 0)) / 100)

    let finalPrice = 0;

    if(discount == null){
        finalPrice = price
    }
    else{
        finalPrice = price - ((price * discount)/100);
    }

    req.body.finalPrice = finalPrice;

    const {secure_url,public_id}= await cloudinary.uploader.upload(req.files.mainImage[0].path,{
        folder :`${process.env.APPNAME}/${name}`
    })

    req.body.mainImage = {secure_url,public_id};

    req.body.subImages = [];

    for (const file of req.files.subImages){

        const {secure_url,public_id}= await cloudinary.uploader.upload(req.files.mainImage[0].path,{
            folder :`${process.env.APPNAME}/${name}/subImages`
        })

        req.body.subImages.push({secure_url,public_id});
    }

    const product = await productModel.create(req.body)

    return res.status(201).json({message : 'success',product})
}

export const displayTopProduct = async(req,res)=>{
    const {name} = req.body

    const product = await productModel.findOne({name});
    if(product) {
        if(product.rate >= 3){
            return res.json({message: name})
        }
        return res.json({message: 'product rating less than 3'})
    }else{
        return res.json({message:'product not found'})
    }

}

export const searchProduct = async(req,res)=>{

    const {name} = req.body

    const found = await productModel.findOne({name})
    if(found){
        return res.json({message: 'the producte found'})
    }else{
        return res.json({message: 'the producte not found'})
    }

}

export const BuyingForFriend = async(req,res)=>{
    const {UserName} = req.body;
    const {FriendName} = req.body;
    const {ProductName} = req.body;
    const userSearch = await userModel.findOne({userName: UserName});
    const FriendSearch = await friendModel.findOne({name: FriendName});
    const ProductSearch = await productModel.findOne({name: ProductName});
    if(!userSearch){
        return res.json({message: 'the user not found'})
    }
    
    if(!FriendSearch){
        return res.json({message: 'the friend not found'})
    }

    if(!ProductSearch){
        return res.json({message: 'the Product not found'})
    }

    console.log("userSearch._id= "+ userSearch._id);
    console.log("FriendSearch._id= "+ FriendSearch._id);
    console.log("ProductSearch._id= "+ ProductSearch._id);
    await GiftFriendModel.create({userId: userSearch._id,productId: FriendSearch._id,friendId: ProductSearch._id})
    return res.json({message: 'done'})
}





    // const userId = searchFriend._id;
    // res.json({message: searchFriend._id})


    // const productId = searchProduct._id;
    // res.json({message: productId._id})

    //return res.json({message: 'done'}) 
