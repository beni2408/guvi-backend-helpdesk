import nodemailer from "nodemailer";
const sendEmail = async (to, name, subject, message) => {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });
  console.log(to, subject, message);
  await transporter.sendMail({
    from: `Front Desk mail by Helpdesk <${process.env.EMAIL_USER}>`,
    to,
    subject: `Hello ${name}, ${subject}`,
    text: message,
  });
};

export default sendEmail;
