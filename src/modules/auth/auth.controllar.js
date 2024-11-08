import userModel from "../../../DB/model/User.model.js";
import bcrypt from 'bcryptjs' // تشفير
import jwt from 'jsonwebtoken' // توكين 
import { sendEmail } from "../../utils/sendEmail.js";
export const signUp = async(req,res)=>{


    const {userName,email,password,age,phone,gender} = req.body;

    const user = await userModel.findOne({email});

    if(user){
       return res.status(409).json({message : "the user alridy exsist"});
    }
    const hashPassword = await bcrypt.hash(password,parseInt(process.env.SALT_ROUND))
    const newUser = await userModel.create({userName,email,password:hashPassword,age,phone,gender})

    if(!newUser){
        return res.status(500).json({message : 'error creating user'})
    }

    const token = await jwt.sign({email:email},process.env.EmailTokin,{expiresIn:'1h'})// 1 hour
    // return res.json({message : token})

    // return res.status(201).json({message:"success",newUser})

    
//     const welcomHtml =  `
//     <!DOCTYPE html>
// <html xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office" lang="en">

// <head>
// <title></title>
// <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
// <meta name="viewport" content="width=device-width, initial-scale=1.0"><!--[if mso]><xml><o:OfficeDocumentSettings><o:PixelsPerInch>96</o:PixelsPerInch><o:AllowPNG/></o:OfficeDocumentSettings></xml><![endif]-->
// <style>
//     * {
//         box-sizing: border-box;
//     }

//     body {
//         margin: 0;
//         padding: 0;
//     }

//     a[x-apple-data-detectors] {
//         color: inherit !important;
//         text-decoration: inherit !important;
//     }

//     #MessageViewBody a {
//         color: inherit;
//         text-decoration: none;
//     }

//     p {
//         line-height: inherit
//     }

//     .desktop_hide,
//     .desktop_hide table {
//         mso-hide: all;
//         display: none;
//         max-height: 0px;
//         overflow: hidden;
//     }

//     .image_block img+div {
//         display: none;
//     }

//     .menu_block.desktop_hide .menu-links span {
//         mso-hide: all;
//     }

//     @media (max-width:700px) {
//         .desktop_hide table.icons-outer {
//             display: inline-table !important;
//         }

//         .desktop_hide table.icons-inner,
//         .row-3 .column-1 .block-3.button_block .alignment a,
//         .row-3 .column-1 .block-3.button_block .alignment div,
//         .social_block.desktop_hide .social-table {
//             display: inline-block !important;
//         }

//         .icons-inner {
//             text-align: center;
//         }

//         .icons-inner td {
//             margin: 0 auto;
//         }

//         .image_block div.fullWidth {
//             max-width: 100% !important;
//         }

//         .mobile_hide {
//             display: none;
//         }

//         .row-content {
//             width: 100% !important;
//         }

//         .stack .column {
//             width: 100%;
//             display: block;
//         }

//         .mobile_hide {
//             min-height: 0;
//             max-height: 0;
//             max-width: 0;
//             overflow: hidden;
//             font-size: 0px;
//         }

//         .desktop_hide,
//         .desktop_hide table {
//             display: table !important;
//             max-height: none !important;
//         }

//         .row-1 .column-1 .block-1.paragraph_block td.pad>div {
//             text-align: center !important;
//             font-size: 18px !important;
//         }

//         .row-3 .column-1 .block-1.heading_block h1,
//         .row-3 .column-1 .block-3.button_block .alignment {
//             text-align: left !important;
//         }

//         .row-3 .column-1 .block-1.heading_block h1 {
//             font-size: 20px !important;
//         }

//         .row-3 .column-1 .block-3.button_block a,
//         .row-3 .column-1 .block-3.button_block div,
//         .row-3 .column-1 .block-3.button_block span {
//             font-size: 14px !important;
//             line-height: 28px !important;
//         }

//         .row-3 .column-1 .block-2.paragraph_block td.pad>div {
//             text-align: left !important;
//             font-size: 14px !important;
//         }

//         .row-3 .column-1 .block-4.paragraph_block td.pad>div {
//             text-align: justify !important;
//             font-size: 10px !important;
//         }

//         .row-4 .column-1 .block-1.icons_block .pad,
//         .row-6 .column-1 .block-2.menu_block .alignment {
//             text-align: center !important;
//         }

//         .row-4 .column-1 .block-1.icons_block td.pad {
//             padding: 10px 24px !important;
//         }

//         .row-4 .column-2 .block-1.paragraph_block td.pad>div {
//             text-align: left !important;
//             font-size: 16px !important;
//         }

//         .row-6 .column-1 .block-1.paragraph_block td.pad {
//             padding: 0 0 16px !important;
//         }

//         .row-6 .column-1 .block-2.menu_block td.pad {
//             padding: 8px !important;
//         }

//         .row-6 .column-1 .block-2.menu_block .menu-links a,
//         .row-6 .column-1 .block-2.menu_block .menu-links span {
//             font-size: 14px !important;
//         }

//         .row-3 .column-1 {
//             padding: 0 24px 48px !important;
//         }

//         .row-4 .column-1 {
//             padding: 16px 16px 8px !important;
//         }

//         .row-4 .column-2 {
//             padding: 0 24px 16px !important;
//         }

//         .row-6 .column-1 {
//             padding: 32px 16px 48px !important;
//         }
//     }
// </style>
// </head>

// <body style="background-color: #f8f6ff; margin: 0; padding: 0; -webkit-text-size-adjust: none; text-size-adjust: none;">
// <table class="nl-container" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #f8f6ff; background-image: none; background-position: top left; background-size: auto; background-repeat: no-repeat;">
//     <tbody>
//         <tr>
//             <td>
//                 <table class="row row-1" align="center" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
//                     <tbody>
//                         <tr>
//                             <td>
//                                 <table class="row-content stack" align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #a797ff; color: #000000; width: 680px; margin: 0 auto;" width="680">
//                                     <tbody>
//                                         <tr>
//                                             <td class="column column-1" width="100%" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; padding-bottom: 32px; padding-left: 48px; padding-right: 48px; padding-top: 32px; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;">
//                                                 <table class="paragraph_block block-1" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;">
//                                                     <tr>
//                                                         <td class="pad">
//                                                             <div style="color:#ffffff;direction:ltr;font-family:Helvetica Neue, Helvetica, Arial, sans-serif;font-size:24px;font-weight:700;letter-spacing:0px;line-height:120%;text-align:left;mso-line-height-alt:28.799999999999997px;">
//                                                                 <p style="margin: 0;">YOUR LOGO</p>
//                                                             </div>
//                                                         </td>
//                                                     </tr>
//                                                 </table>
//                                             </td>
//                                         </tr>
//                                     </tbody>
//                                 </table>
//                             </td>
//                         </tr>
//                     </tbody>
//                 </table>
//                 <table class="row row-2" align="center" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
//                     <tbody>
//                         <tr>
//                             <td>
//                                 <table class="row-content stack" align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #a797ff; border-radius: 0; color: #000000; width: 680px; margin: 0 auto;" width="680">
//                                     <tbody>
//                                         <tr>
//                                             <td class="column column-1" width="100%" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;">
//                                                 <table class="image_block block-1" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
//                                                     <tr>
//                                                         <td class="pad" style="width:100%;padding-right:0px;padding-left:0px;">
//                                                             <div class="alignment" align="center" style="line-height:10px">
//                                                                 <div class="fullWidth" style="max-width: 639.2px;"><img src="https://d1oco4z2z1fhwp.cloudfront.net/templates/default/8171/Email-Illustration.png" style="display: block; height: auto; border: 0; width: 100%;" width="639.2" alt="An open email illustration" title="An open email illustration" height="auto"></div>
//                                                             </div>
//                                                         </td>
//                                                     </tr>
//                                                 </table>
//                                             </td>
//                                         </tr>
//                                     </tbody>
//                                 </table>
//                             </td>
//                         </tr>
//                     </tbody>
//                 </table>
//                 <table class="row row-3" align="center" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
//                     <tbody>
//                         <tr>
//                             <td>
//                                 <table class="row-content stack" align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #ffffff; border-radius: 0; color: #000000; width: 680px; margin: 0 auto;" width="680">
//                                     <tbody>
//                                         <tr>
//                                             <td class="column column-1" width="100%" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; padding-bottom: 48px; padding-left: 48px; padding-right: 48px; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;">
//                                                 <table class="heading_block block-1" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
//                                                     <tr>
//                                                         <td class="pad" style="padding-top:12px;text-align:center;width:100%;">
//                                                             <h1 style="margin: 0; color: #292929; direction: ltr; font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; font-size: 32px; font-weight: 700; letter-spacing: normal; line-height: 120%; text-align: left; margin-top: 0; margin-bottom: 0; mso-line-height-alt: 38.4px;"><span class="tinyMce-placeholder">Confirm your subscription!</span></h1>
//                                                         </td>
//                                                     </tr>
//                                                 </table>
//                                                 <table class="paragraph_block block-2" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;">
//                                                     <tr>
//                                                         <td class="pad" style="padding-bottom:10px;padding-top:10px;">
//                                                             <div style="color:#101112;direction:ltr;font-family:'Helvetica Neue', Helvetica, Arial, sans-serif;font-size:16px;font-weight:400;letter-spacing:0px;line-height:120%;text-align:left;mso-line-height-alt:19.2px;">
//                                                                 <p style="margin: 0;">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.&nbsp;<br><br>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.&nbsp;</p>
//                                                             </div>
//                                                         </td>
//                                                     </tr>
//                                                 </table>
//                                                 <table class="button_block block-3" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
//                                                     <tr>
//                                                         <td class="pad" style="padding-top:24px;text-align:left;">
//                                                             <div class="alignment" align="left"><!--[if mso]>
// <v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" xmlns:w="urn:schemas-microsoft-com:office:word" href="http://www.example.com/" style="height:48px;width:181px;v-text-anchor:middle;" arcsize="17%" stroke="false" fillcolor="#7259ff">
// <w:anchorlock/>
// <v:textbox inset="0px,0px,0px,0px">
// <center style="color:#ffffff; font-family:Arial, sans-serif; font-size:16px">
// <![endif]--><a href="http://localhost:4000/auth/confirmEmail/${token}" target="_blank" style="text-decoration:none;display:inline-block;color:#ffffff;background-color:#7259ff;border-radius:8px;width:auto;border-top:0px solid transparent;font-weight:400;border-right:0px solid transparent;border-bottom:0px solid transparent;border-left:0px solid transparent;padding-top:8px;padding-bottom:8px;font-family:Helvetica Neue, Helvetica, Arial, sans-serif;font-size:16px;text-align:center;mso-border-alt:none;word-break:keep-all;"><span style="padding-left:16px;padding-right:16px;font-size:16px;display:inline-block;letter-spacing:normal;"><span style="word-break: break-word; line-height: 32px;">Confirm subscription</span></span></a><!--[if mso]></center></v:textbox></v:roundrect><![endif]--></div>
//                                                         </td>
//                                                     </tr>
//                                                 </table>
//                                                 <table class="paragraph_block block-4" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;">
//                                                     <tr>
//                                                         <td class="pad" style="padding-top:16px;">
//                                                             <div style="color:#666666;direction:ltr;font-family:'Helvetica Neue', Helvetica, Arial, sans-serif;font-size:12px;font-weight:400;letter-spacing:0px;line-height:120%;text-align:left;mso-line-height-alt:14.399999999999999px;">
//                                                                 <p style="margin: 0;">By confirming your subscription, you'll be joining a community of like-minded individuals who are passionate about [your newsletter's topic]. Get ready to stay informed and inspired!</p>
//                                                             </div>
//                                                         </td>
//                                                     </tr>
//                                                 </table>
//                                             </td>
//                                         </tr>
//                                     </tbody>
//                                 </table>
//                             </td>
//                         </tr>
//                     </tbody>
//                 </table>
//                 <table class="row row-4" align="center" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
//                     <tbody>
//                         <tr>
//                             <td>
//                                 <table class="row-content stack" align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #e8e4ff; border-left: 20px solid #FFFFFF; border-radius: 0; border-right: 20px solid #FFFFFF; color: #000000; width: 680px; margin: 0 auto;" width="680">
//                                     <tbody>
//                                         <tr>
//                                             <td class="column column-1" width="16.666666666666668%" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; padding-bottom: 24px; padding-left: 8px; padding-right: 8px; padding-top: 24px; vertical-align: middle; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;">
//                                                 <table class="icons_block block-1" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; text-align: center;">
//                                                     <tr>
//                                                         <td class="pad" style="vertical-align: middle; color: #000000; font-family: inherit; font-size: 14px; font-weight: 400; text-align: center;">
//                                                             <table class="icons-outer" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; display: inline-table;">
//                                                                 <tr>
//                                                                     <td style="vertical-align: middle; text-align: center; padding-top: 0px; padding-bottom: 0px; padding-left: 0px; padding-right: 0px;"><img class="icon" src="https://d1oco4z2z1fhwp.cloudfront.net/templates/default/8171/Gift-Emoji.png" height="auto" width="34" align="center" style="display: block; height: auto; margin: 0 auto; border: 0;"></td>
//                                                                 </tr>
//                                                             </table>
//                                                         </td>
//                                                     </tr>
//                                                 </table>
//                                             </td>
//                                             <td class="column column-2" width="83.33333333333333%" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; padding-bottom: 5px; padding-right: 48px; padding-top: 5px; vertical-align: middle; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;">
//                                                 <table class="paragraph_block block-1" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;">
//                                                     <tr>
//                                                         <td class="pad">
//                                                             <div style="color:#7860ff;direction:ltr;font-family:Helvetica Neue, Helvetica, Arial, sans-serif;font-size:16px;font-weight:400;letter-spacing:0px;line-height:150%;text-align:left;mso-line-height-alt:24px;">
//                                                                 <p style="margin: 0;">Invite your friends to our community and earn credits to win gifts <br><strong><a href="http://www.exemple.com" target="_blank" style="text-decoration: underline; color: #3e2d9c;" rel="noopener">Share with Friends</a></strong></p>
//                                                             </div>
//                                                         </td>
//                                                     </tr>
//                                                 </table>
//                                             </td>
//                                         </tr>
//                                     </tbody>
//                                 </table>
//                             </td>
//                         </tr>
//                     </tbody>
//                 </table>
//                 <table class="row row-5" align="center" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
//                     <tbody>
//                         <tr>
//                             <td>
//                                 <table class="row-content stack" align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #ffffff; border-radius: 0; color: #000000; width: 680px; margin: 0 auto;" width="680">
//                                     <tbody>
//                                         <tr>
//                                             <td class="column column-1" width="100%" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;">
//                                                 <div class="spacer_block block-1" style="height:56px;line-height:56px;font-size:1px;">&#8202;</div>
//                                             </td>
//                                         </tr>
//                                     </tbody>
//                                 </table>
//                             </td>
//                         </tr>
//                     </tbody>
//                 </table>
//                 <table class="row row-6" align="center" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
//                     <tbody>
//                         <tr>
//                             <td>
//                                 <table class="row-content stack" align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #a797ff; border-radius: 0; color: #000000; width: 680px; margin: 0 auto;" width="680">
//                                     <tbody>
//                                         <tr>
//                                             <td class="column column-1" width="100%" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; padding-bottom: 48px; padding-top: 32px; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;">
//                                                 <table class="paragraph_block block-1" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;">
//                                                     <tr>
//                                                         <td class="pad" style="padding-bottom:32px;">
//                                                             <div style="color:#ffffff;direction:ltr;font-family:Helvetica Neue, Helvetica, Arial, sans-serif;font-size:24px;font-weight:700;letter-spacing:0px;line-height:120%;text-align:center;mso-line-height-alt:28.799999999999997px;">
//                                                                 <p style="margin: 0;">YOUR LOGO</p>
//                                                             </div>
//                                                         </td>
//                                                     </tr>
//                                                 </table>
//                                                 <table class="menu_block block-2" width="100%" border="0" cellpadding="8" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
//                                                     <tr>
//                                                         <td class="pad">
//                                                             <table width="100%" cellpadding="0" cellspacing="0" border="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
//                                                                 <tr>
//                                                                     <td class="alignment" style="text-align:center;font-size:0px;">
//                                                                     </td>
//                                                                 </tr>
//                                                             </table>
//                                                         </td>
//                                                     </tr>
//                                                 </table>
//                                                 <table class="social_block block-3" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
//                                                     <tr>
//                                                         <td class="pad" style="padding-bottom:32px;padding-top:24px;text-align:center;padding-right:0px;padding-left:0px;">
//                                                             <div class="alignment" align="center">
//                                                                 <table class="social-table" width="184px" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; display: inline-block;">
//                                                                     <tr>
//                                                                         <td style="padding:0 7px 0 7px;"><a href="https://www.facebook.com/" target="_blank"><img src="https://app-rsrc.getbee.io/public/resources/social-networks-icon-sets/t-circle-white/facebook@2x.png" width="32" height="auto" alt="Facebook" title="facebook" style="display: block; height: auto; border: 0;"></a></td>
//                                                                         <td style="padding:0 7px 0 7px;"><a href="https://www.twitter.com/" target="_blank"><img src="https://app-rsrc.getbee.io/public/resources/social-networks-icon-sets/t-circle-white/twitter@2x.png" width="32" height="auto" alt="Twitter" title="twitter" style="display: block; height: auto; border: 0;"></a></td>
//                                                                         <td style="padding:0 7px 0 7px;"><a href="https://www.linkedin.com/" target="_blank"><img src="https://app-rsrc.getbee.io/public/resources/social-networks-icon-sets/t-circle-white/linkedin@2x.png" width="32" height="auto" alt="Linkedin" title="linkedin" style="display: block; height: auto; border: 0;"></a></td>
//                                                                         <td style="padding:0 7px 0 7px;"><a href="https://www.instagram.com/" target="_blank"><img src="https://app-rsrc.getbee.io/public/resources/social-networks-icon-sets/t-circle-white/instagram@2x.png" width="32" height="auto" alt="Instagram" title="instagram" style="display: block; height: auto; border: 0;"></a></td>
//                                                                     </tr>
//                                                                 </table>
//                                                             </div>
//                                                         </td>
//                                                     </tr>
//                                                 </table>
//                                                 <table class="divider_block block-4" width="100%" border="0" cellpadding="10" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
//                                                     <tr>
//                                                         <td class="pad">
//                                                             <div class="alignment" align="center">
//                                                                 <table border="0" cellpadding="0" cellspacing="0" role="presentation" width="85%" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
//                                                                     <tr>
//                                                                         <td class="divider_inner" style="font-size: 1px; line-height: 1px; border-top: 1px solid #9583FF;"><span>&#8202;</span></td>
//                                                                     </tr>
//                                                                 </table>
//                                                             </div>
//                                                         </td>
//                                                     </tr>
//                                                 </table>
//                                                 <table class="paragraph_block block-5" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;">
//                                                     <tr>
//                                                         <td class="pad" style="padding-top:16px;">
//                                                             <div style="color:#443888;direction:ltr;font-family:'Helvetica Neue', Helvetica, Arial, sans-serif;font-size:12px;font-weight:400;letter-spacing:0px;line-height:120%;text-align:center;mso-line-height-alt:14.399999999999999px;">
//                                                                 <p style="margin: 0;">You have received this email because you are a subscriber of <a href="http://example.com/" target="_blank" style="text-decoration: underline; color: #3e2d9c;" rel="noopener">this site</a></p>
//                                                             </div>
//                                                         </td>
//                                                     </tr>
//                                                 </table>
//                                                 <table class="paragraph_block block-6" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;">
//                                                     <tr>
//                                                         <td class="pad" style="padding-top:16px;">
//                                                             <div style="color:#443888;direction:ltr;font-family:'Helvetica Neue', Helvetica, Arial, sans-serif;font-size:12px;font-weight:400;letter-spacing:0px;line-height:120%;text-align:center;mso-line-height-alt:14.399999999999999px;">
//                                                                 <p style="margin: 0;">if you feel you received it by mistake or wish to unsubscribe, <a href="http://example.com/unsubcribe" target="_blank" style="text-decoration: underline; color: #3e2d9c;" rel="noopener">click here</a>.</p>
//                                                             </div>
//                                                         </td>
//                                                     </tr>
//                                                 </table>
//                                             </td>
//                                         </tr>
//                                     </tbody>
//                                 </table>
//                             </td>
//                         </tr>
//                     </tbody>
//                 </table>
//                 <table class="row row-7" align="center" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #ffffff;">
//                     <tbody>
//                         <tr>
//                             <td>
//                                 <table class="row-content stack" align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #ffffff; color: #000000; width: 680px; margin: 0 auto;" width="680">
//                                     <tbody>
//                                         <tr>
//                                             <td class="column column-1" width="100%" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; padding-bottom: 5px; padding-top: 5px; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;">
//                                                 <table class="icons_block block-1" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; text-align: center;">
//                                                     <tr>
//                                                         <td class="pad" style="vertical-align: middle; color: #1e0e4b; font-family: 'Inter', sans-serif; font-size: 15px; padding-bottom: 5px; padding-top: 5px; text-align: center;">
//                                                             <table width="100%" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
//                                                                 <tr>
//                                                                     <td class="alignment" style="vertical-align: middle; text-align: center;"><!--[if vml]><table align="center" cellpadding="0" cellspacing="0" role="presentation" style="display:inline-block;padding-left:0px;padding-right:0px;mso-table-lspace: 0pt;mso-table-rspace: 0pt;"><![endif]-->
//                                                                         <!--[if !vml]><!-->
//                                                                         <table class="icons-inner" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; display: inline-block; margin-right: -4px; padding-left: 0px; padding-right: 0px;" cellpadding="0" cellspacing="0" role="presentation"><!--<![endif]-->
//                                                                             <tr>
//                                                                                 <td style="vertical-align: middle; text-align: center; padding-top: 5px; padding-bottom: 5px; padding-left: 5px; padding-right: 6px;"><a href="http://designedwithbeefree.com/" target="_blank" style="text-decoration: none;"><img class="icon" alt="Beefree Logo" src="https://d1oco4z2z1fhwp.cloudfront.net/assets/Beefree-logo.png" height="auto" width="34" align="center" style="display: block; height: auto; margin: 0 auto; border: 0;"></a></td>
//                                                                                 <td style="font-family: 'Inter', sans-serif; font-size: 15px; font-weight: undefined; color: #1e0e4b; vertical-align: middle; letter-spacing: undefined; text-align: center;"><a href="http://designedwithbeefree.com/" target="_blank" style="color: #1e0e4b; text-decoration: none;">Designed with Beefree</a></td>
//                                                                             </tr>
//                                                                         </table>
//                                                                     </td>
//                                                                 </tr>
//                                                             </table>
//                                                         </td>
//                                                     </tr>
//                                                 </table>
//                                             </td>
//                                         </tr>
//                                     </tbody>
//                                 </table>
//                             </td>
//                         </tr>
//                     </tbody>
//                 </table>
//             </td>
//         </tr>
//     </tbody>
// </table><!-- End -->
// </body>

// </html>
    
//     `

    const ff = `



    <h1>Giftopia<h1>
    <h2>confirmEmail<h2>

    <a href="http://localhost:3300/auth/co/${token}" target="_blank" style="text-decoration:none;display:inline-block;color:#ffffff;background-color:#7259ff;border-radius:8px;width:auto;border-top:0px solid transparent;font-weight:400;border-right:0px solid transparent;border-bottom:0px solid transparent;border-left:0px solid transparent;padding-top:8px;padding-bottom:8px;font-family:Helvetica Neue, Helvetica, Arial, sans-serif;font-size:16px;text-align:center;mso-border-alt:none;word-break:keep-all;"><span style="padding-left:16px;padding-right:16px;font-size:16px;display:inline-block;letter-spacing:normal;"><span style="word-break: break-word; line-height: 32px;">Confirm subscription</span></span></a>


    `


    await sendEmail(email,`Giftopia`,ff)
    return res.status(201).json({message : 'success', newUser})
}

export const  signIn= async(req,res)=>{

    const {email,password} = req.body;
    const user = await userModel.findOne({email});

    if(user){
        if(!user.confarmEmail){
            return res.status(403).json({message : "please confirm your email"})
        }

        const CheckPassword = await bcrypt.compare(password,user.password);

        if(CheckPassword){
            const token = jwt.sign({id:user._id,email:user.email},process.env.LOGING_GIFTOPIA)

            return res.status(200).json({message : "seccess", token,role:user.role})
        }
        return res.status(401).json('Invalid password')
    }
    
    return res.status(404).json('Invalid user')
}


export const confarmEmail = async(req,res)=>{
    const {token} = req.params

    const decoded = jwt.verify(token,process.env.EmailTokin)

    const user = await userModel.findOneAndUpdate({email:decoded.email},{confarmEmail:true},{new:true})

    if(user.modifiedCount>0){
        return res.redirect("https://www.facebook.com")
    }
    return res.json({message:"success",user})

}


export const dd = async(req,res)=>{
    res.json({message : 'dafor'})
}
