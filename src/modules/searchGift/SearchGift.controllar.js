import 'dotenv/config';
import OpenAI from 'openai';
import slugify from 'slugify';
import cors from 'cors'
import { spawn } from 'child_process';
import path from 'path';
import { fileURLToPath } from 'url';
import RecommendationProductModel from '../../../DB/model/RecommendationProduct.js';


const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY, // 
  });


  let giftName = '';
  let storedData = "My son Ahmed, 16 years old, is addicted to video games. What is the best precious gifts I can give him for his birthday?";


  async function main(req) {
    let giftName = ''
    let giftName2 = ''; 
    const stream = await openai.chat.completions.create({
        model: 'gpt-3.5-turbo',
        messages: [{ role: 'user', content: `Give me the names of 1 gift It can be purchased online each gift  in a one line without mentioning the specifications of the gift, just the type of gift and the amount of gifts I would buy with these specifications ${req} Give me without any symbols or letters before it in english Returns a value from one, two, or three words only` }],
        stream: true,
    });
    for await (const chunk of stream) {
         giftName = chunk.choices[0]?.delta?.content || '';
         giftName2 +=giftName;


    }

    return giftName2; 
}




let id;
export const sendData = async(req,res)=>{
    id = req.user._id;

    const __filename = fileURLToPath(import.meta.url);
    const __dirname = path.dirname(__filename);

    const ocr = 'Ai';
    const scriptPath = path.join( 'src', 'modules', 'scrept2.py');
    console.log(`Script path: ${scriptPath}`); // طباعة المسار للتحقق


    const { userReq } = req.body;
    console.time("generateContentTim"); // بدء المؤقت
    const giftName = await main(userReq);
    // const expectedAge = await main2(userReq);
    console.timeEnd("generateContentTim")



    const slugGiftName = slugify(giftName,'+')
    const urlGift = `https://www.amazon.com/s?k=${slugGiftName}`

    const pythonProcess = spawn('python', [scriptPath,urlGift,ocr]);

    // call func web scrabing

    res.json({ giftName: pythonProcess});
}

export const resData = async(req,res)=>{

    const UserProduct = await RecommendationProductModel.findOne({userId : id});

    if(UserProduct){
        await RecommendationProductModel.deleteMany({ userId: id });
    }

    let data = req.body;

    let productArray = [];

    for (let i = 0; i < data.data.length; i++) {
        let productObject = {
            URL: data.data[i]['URL'],
            Title: data.data[i]['Title'],
            ImageURL: data.data[i]['Image URL'],
            Rating: data.data[i]['Rating'],
            Price: data.data[i]['Price'] + 10,
            ReviewCount: data.data[i]['Review Count'],
            PriceCategory: data.data[i]['Price Category']
        };
        productArray.push(productObject);
    }






    const newEntry = await RecommendationProductModel.create({
        userId: id,
        product: productArray
    });


    console.log(data)
    // for (let i = 0; i < data.data.length; i++) {
    // await RecommendationProductModel.create({
    //     userId: id,
    //         product: [{
    //             URL: data.data[i]['URL'],
    //             Title: data.data[i]['Title'],
    //             ImageURL: data.data[i]['Image URL'],
    //             Rating: data.data[i]['Rating'],
    //             Price: data.data[i]['Price'] + 10,
    //             ReviewCount: data.data[i]['Review Count'],
    //             PriceCategory: data.data[i]['Price Category']
    //         }]
    //     });
    // }


     res.json("message success")

   



    //  for (let i = 0; i < data.length; i++) {
    //     console.log(data[i]);
    //     let product = await RecommendationProductModel.create({
    //         userId: id,
    //         URL: data[i]['URL'],
    //         Title: data[i]['Title'],
    //         ImageURL: data[i]['Image URL'], // Changed 'ImageURL' to 'Image URL'
    //         Rating: data[i]['Rating'],
    //         Price: data[i]['Price'] + 10,
    //         ReviewCount: data[i]['Review Count'],
    //         PriceCategory: data[i]['Price Category']
    //     });
    // }

    

    

   
    
}

export const displayProduct = async(req,res)=>{

    const products = await RecommendationProductModel.findOne({userId : req.user._id}).select('product')
    return res.json({products: products})

}

