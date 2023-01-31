const nodeMailer = require("nodemailer");

const bodyparser = require("body-parser");

const sendEmail = async (options) => {
  const transporter = nodeMailer.createTransport({
    host:'smtp.gmail.com',
    port:465,
    secure:true,
    requireTLS:true,
    auth: {
      user: 'jilaniproject11@gmail.com',
      pass:'vrbpirasmetdobsw'
    }
  });

  const mailOptions = {
    from: 'jilaniproject11@gmail.com',
    to: options.email,
    subject: options.subject,
    text: options.message
  };
  

  await transporter.sendMail(mailOptions);
};
module.exports = sendEmail;
