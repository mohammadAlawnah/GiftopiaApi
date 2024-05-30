import AiProductModel from '../../../DB/model/Aiproduct.js'
export const getDataValantine = async(req,res)=>{
    const valantineProduct = await AiProductModel.find({ocr:'valentine'});
    return res.json({message :valantineProduct })
}

export const getDataBirthday = async(req,res)=>{
    
    const valantineProduct = await AiProductModel.find({ocr:'birthday'});
    return res.json({message :valantineProduct })

}
