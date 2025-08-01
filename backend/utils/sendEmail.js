import nodemailer from 'nodemailer';

const sendEmail = async (email, otp) => {
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'yourEmail@gmail.com',
      pass: 'yourEmailPassword',
    },
  });

  const mailOptions = {
    from: 'yourEmail@gmail.com',
    to: email,
    subject: 'Your OTP Code',
    text: `Your OTP is: ${otp}`,
  };

  await transporter.sendMail(mailOptions);
};

export default sendEmail;
