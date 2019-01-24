var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'thevab98@gmail.com',
    pass: 'theva1234'
  }
});

var mailOptions = {
  from: 'thevab98@gmail.com',
  to: ' info@uki.life',
  subject: 'Testing my nodemailer module',
  text: 'This was easy!'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});
