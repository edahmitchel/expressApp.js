const nodemailer = require("nodemailer");
// Define your mailer configuration
const mailerConfig = {
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: "edahmitchel@gmail.com",
    pass: "prqllbayrlobkqhk",
  },
};
const transporter = nodemailer.createTransport(mailerConfig);

// Reusable function to send emails
const sendEmail = (to, subject, text) => {
  const mailOptions = {
    from: "edahmitchel@gmail.com",
    to,
    subject,
    text,
  };

  return transporter.sendMail(mailOptions);
};

module.exports = { sendEmail };
