const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const nodemailer = require('nodemailer');

dotenv.config();

const app = express();

app.use(cors());

const PORT = process.env.PORT || 4000;

var transporter = nodemailer.createTransport({
    service: process.env.service,
    auth: {
      user: process.env.user,
      pass: process.env.pass
    }
})

app.get('/',(req,res)=>{
    res.send("Muhammad Iqbal Portfolio");
})

app.post('/sendmail',(req,res)=>{

   const {email,subject,phone,message} = req.body;

   console.log(email,subject,phone,message);
   

    // var mailOptions = {
    //     from: ' "PrivateChatApp" <iqbalraju123@gmail.com>',
    //     to: email,
    //     subject: 'Activate your PrivateChatApp account',
    //     html: `<p>Hi ${name},<br> Thank you for signing up for PrivateChatApp.<br> Best,<br> The PrivateChatApp Team. </p>`
    // }

    // transporter.sendMail(mailOptions, function (error, info) {
    //     if (error) {
    //       //console.log(error);
    //       console.log("Invalid email");
    //       //res.json("Invalid email");
          
    //     } else {
    
    //       //res.json({ message: "send email successfully" });
    //       console.log("send email successfully");
    
    //     }
    // });

})

app.listen(PORT, (error)=>{
    if(error){
        console.log("server error");
    }else{
        console.log("server success");
    }
})