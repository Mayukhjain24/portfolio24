const express = require("express");
const app = express();
require('dotenv').config();
const PORT = process.env.PORT || 5000;
const nodemailer = require('nodemailer');

app.use(express.json());

app.get("/test",(req,res)=>{
    res.send("Testing")
  })


app.post('/mailsender',  (req, res) => {
    console.log("DATA :", req.body)
    // res.send("Done")
      try {
          const {subject,message}=req.body;
          let mail=process.env.MAIL_ID;
          let password= process.env.MAIL_PASSWORD;
          let sendmail="mayukhj2407@gmail.com";
          var transporter = nodemailer.createTransport({
              service: 'gmail',
              auth: {
                user: mail,
                pass: password
              }
            });
            var mailOptions = {
              from: mail,
              to: sendmail,
              subject: subject,
              text: message
            };
            transporter.sendMail(mailOptions, function(error, info){
              if (error) {
                  res.status(500).send(error);
              } else {
                  // res.status(200).send('Email sent: ' + info.response);
                  res.status(200).send('Email sent Successfully');
              }
            });
      } catch (error) {
          res.status(500).send({"error":error});
        }
  });
  

  app.use((req, res, next) => {
      const clientIp = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
      // console.log(req.headers['x-forwarded-for'], " : ",req.connection.remoteAddress," , ",`User IP: ${clientIp}`)
      // const clientIp = req.ip; // Get the user's IP address from the request
      console.log(`User IP: ${clientIp}`);
      next(); // Call the next middleware in the chain
    });
    
app.listen(PORT, () => {
    console.log(`Server started on port: ${PORT}`);
});

const path=require("path");

  app.use(express.static('build'));
   app.get('*', (req, res) => {
          res.sendFile(path.resolve('build','index.html'));
  });
  