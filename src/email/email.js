
import nodemailer from 'nodemailer'
import { EmailHtml } from './email.html.js';
import jwt from 'jsonwebtoken'
export const sendEmails = async (email) => {


  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: "miss.ayaahmed77@gmail.com",
      pass: "yvquehpozavxjjkl",
    },
  });

  jwt.sign({ email }, 'ayosha',async (err, token) => {
    const info = await transporter.sendMail({
      from: '"ayosh mail 😍" <miss.ayaahmed77@gmail.com>', // sender address
      to: email, // list of receivers
      subject: "Hello ✔", // Subject line

      html: EmailHtml(token)
    });

    console.log("Message sent: %s", info.messageId);
  })

}