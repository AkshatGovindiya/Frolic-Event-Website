// const express = require('express');
// const nodemailer = require('nodemailer');
// const bodyParser = require('body-parser');

// const app = express();
// const port = 3001; // Choose a suitable port

// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(bodyParser.json());

// // Configure nodemailer with your email service provider's settings
// const transporter = nodemailer.createTransport({
//   service: 'gmail',
//   auth: {
//     user: 'akgajjar2004@gmail.com',
//     pass: 'Ak_gajjar@21',
//   },
// });

// app.post('/sendConfirmationEmail', (req, res) => {
//   const { to, subject, text } = req.body;

//   const mailOptions = {
//     from: 'akgajjar2004@gmail.com',
//     to,
//     subject,
//     text,
//   };

//   transporter.sendMail(mailOptions, (error, info) => {
//     if (error) {
//       return res.status(500).send(error.toString());
//     }
//     res.status(200).send('Email sent: ' + info.response);
//   });
// });

// app.listen(port, () => {
//   console.log(`Server is running on port ${port}`);
// });
