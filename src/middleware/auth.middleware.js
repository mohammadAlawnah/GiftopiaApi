import jwt from 'jsonwebtoken'
import userModel from '../../DB/model/User.model.js'
const auth = async (req,res,next)=>{

    const {authorization} = req.headers
    if(authorization.startsWith(process.env.BEARERKEY)){
        const token = authorization.split(process.env.BEARERKEY)[1];
        const decoded = jwt.verify(token,process.env.LOGING_GIFTOPIA)
        const authUser = await userModel.findById(decoded.id)
        
        req.user =  authUser;
        // next(dd(req,res));
        next()
    }
    else{
        return res.json({message : 'invalid authorization'})
    }
}
export default auth;
