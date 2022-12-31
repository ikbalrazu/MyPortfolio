const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const nodemailer = require('nodemailer');

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

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

    //console.log(process.env.user);

    var mailOptions = {
        from: ` "MuhammadIqbal" ${email}`,
        to: "puretutorial123@gmail.com",
        subject: subject,
        html: `<p>Email: ${email}</p>
        <br></br>
        <p>Subject: ${subject}</p>
        <br></br>
        <p>Phone Number: ${phone}</p>
        <br></br>
        <p>Message: ${message}</p>
        `
    }

    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
          console.log(error);
          console.log("Invalid email");
          res.json("Invalid email");
          
        } else {
    
          res.json({ message: "send email successfully" });
          console.log("send email successfully");
    
        }
    });

})

app.listen(PORT, (error)=>{
    if(error){
        console.log("server error");
    }else{
        console.log("server success");
    }
})