import jwt from 'jsonwebtoken'
import userModel from '../../DB/model/User.model.js'

const admin = async (req,res,next)=>{

    const {authorization} = req.headers
    if(authorization.startsWith(process.env.BEARERKEY)){
        const token = authorization.split(process.env.BEARERKEY)[1];
        const decoded = jwt.verify(token,process.env.LOGING_GIFTOPIA)
        const adminUser = await userModel.findById(decoded.id)
        if(adminUser.role == 'admin'){
            next()
        }else{
            return res.json({message : 'There are no permissions'})
        }
        
        // next(dd(req,res));
    }
    else{
        return res.json({message : 'invalid authorization'})
    }
}
export default admin;