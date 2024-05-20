import cartModel from "../../../DB/model/Cart.model.js";

//this function is implemented by Muawiya ismail
export const get =async(req,res)=>{
    const cart = await cartModel.findOne({userId:req.user._id});

    return res.json({message : 'succses' , product : cart.products})
}

//this function is implemented by Muawiya ismail
export const create = async(req,res)=>{

    const {productId} = req.body;

    const cart = await cartModel.findOne({userId:req.user._id});

    if(!cart){
        const newCart = await cartModel.create({
            userId : req.user._id,
            products : {productId}
        })

        return res.json({message : 'success',cart:newCart})
    }
    
    for(let i=0;i<cart.products.length;i++){
        if(cart.products[i].productId == productId){
            
            return res.json({message : "product already exists"})
        }
    }

    cart.products.push({productId})
    await cart.save();
    return res.json({message : 'success',cart});
}

//this function is implemented by Muawiya ismail
export const remove = async(req,res)=>{

    const {productId} = req.params;
    if(!productId){
        return res.json({message:'productId is undefine'})
    }

   const cart =  await cartModel.findOneAndUpdate(
    { userId: req.user._id },
    {
        $pull: {
            products: { productId: productId }
        }
    },
    { new: true }
);

    return res.json({message:'success',cart})
}

//this function is implemented by Muawiya ismail
export const updateQuantity = async(req,res)=>{

    const {quantity,operator} = req.body;

    const inc = (operator == '+')? quantity:-quantity

    const cart = await cartModel.findOne({userId:req.user._id});

    if (!cart) {
        return res.status(404).json({ message: "Cart not found" });
    }

    const product = cart.products.find(p => p.productId == req.params.productId);
    if (!product) {
        return res.status(404).json({ message: "Product not found in cart" });
    }
    const newQuantity = product.quantity + Number(inc);

    if (newQuantity > 0) {
        const updatedCart = await cartModel.findOneAndUpdate(
            { userId:req.user._id, "products.productId": req.params.productId },
            { $set: { "products.$.quantity": newQuantity } },
            { new: true }
        );
        return res.json({ message: "success", cart: updatedCart });
    } else {
        const updatedCart = await cartModel.findOneAndUpdate(
            { userId: req.user._id },
            {
                $pull: {
                    products: { productId: req.params.productId }
                }
            },
            { new: true }
        );
        return res.json({ message: "product removed", cart: updatedCart });
    }
}

//this function is implemented by Muawiya ismail
export const clearCart = async(req,res)=>{
    const cart  = await cartModel.findOneAndUpdate({
        userId:req.user._id,

},{
    products:[],
},{
    new : true
}
)
return res.json({message : 'done'})
}
