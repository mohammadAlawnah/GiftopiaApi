import nodemailer from "nodemailer";


export async function sendEmail(to,subject,html) {

    const transporter = nodemailer.createTransport({

        service:"gmail",
        auth: {
          user: process.env.emailsender,
          pass: process.env.passwordsender,
        },
      });

    // send mail with defined transport object
    const info = await transporter.sendMail({
      from: 'Giftopia', // sender address
      to, // list of receivers
      subject, // Subject line
      text: "Hello world?", // plain text body
      html, // html body
    });
    console.log("Message sent: %s", info.messageId);
}
