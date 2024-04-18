
import nodemailer from 'nodemailer';
export const sendMail = async(email,title="Email from food app",body)=>{
    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: process.env.mailer_mail,
          pass: process.env.mailer_pass
        }
      });
      var mailOptions = {
        from: 'kanishka.gour.mat20@itbhu.ac.in',
        to: email,
        subject: title,
        html: body
      };
      transporter.sendMail(mailOptions, function(error, info){
        if (error) {
          console.log(error);
        } else {
          console.log('Email sent: ' + info.response);
        }
      });
}