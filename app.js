// const express = require("express");
// const cors = require("cors");
// const bodyParser = require("body-parser");
// const nodemailer = require("nodemailer");

// const app = express();

// app.use(cors({origin:"*"}));
// app.use(bodyParser.json());

// app.listen(3000, () => console.log("server started"));

// app.get("/", (req, res) => {
//   console.log("hello");
//   res.send(
//     "<h1>hello</h1>"
//   );
// });

// app.post("/sendmail", (req, res) => {
//   console.log("ok");
//   let user = req.body;
//   sendMail(user,info => {
//     console.log("sent");
//     res.send(info);
//   })
// });
// async function sendMail(user,callback) {
//   let transporter = nodemailer.createTransport({
//     host: "smtp.gmail.com",
//     port: 587,
//     secure: false,
//     auth: {
//       user: "jayamenterprises2312@gmail.com",
//       pass: "mfwm jwfi efyg lrag",
//     },
//   });

  
//   const mailOptions = {
//     from: "me",
//     to: "jayamenterprises22@gmail.com",
//     subject: "Service Request Raised",
//     html: `<h1>Dear Jayam Enterprices</h1>
//     <h3>Service Request Raised for </h3><h2>`+user.catogory+`</h2><h4>Customer name :  </h4><h3>`+user.name+`</h3><h4>Customer Phone Number : </h4><h3>`+user.phoneNumber +`</h3>`,
//   };
//   let info = await transporter.sendMail(mailOptions);
//   callback(info);
 
// }
const express = require('express');
const app = express();

app.get('/your-backend-link', (req, res) => {
    res.redirect('https://www.delta.com/');
});

app.listen(4000, () => {
    console.log('Server is running on port 4000');
});
