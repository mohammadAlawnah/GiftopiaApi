import CartModel from "../../../DB/model/Cart.model.js";
import couponModel from "../../../DB/model/coupon.model.js"
//Rajaa Ayyash
export const create = async(req,res)=>{

    const cart = await CartModel.findOne({userId:req.user._id});

    if(!cart){
        return res.json({message : 'cart is empty'});
    }
    if(req.body.couponId){
        const coipon = await couponModel.findOne({_id:req.body.couponId});

        if(!coipon){
            return res.json({message:'coupon not found'});
        }

        if(coipon.expireDate < new Date()){
            return res.json({message : 'coupon expired'});
        }

        if(coipon.usedBy.includes(req.user._id)){
            return res.json({message : 'coupon alredy used'})
        }

        req.body.coupon = coipon;
    }

    return res.json(cart)
}