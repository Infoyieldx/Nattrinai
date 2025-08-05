import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER, // Your email
    pass: process.env.EMAIL_PASS, // App password from Gmail
  },
});

/**
 * Send an OTP email
 * @param {string} to - Recipient's email address
 * @param {'signup'|'forgot'} type - Type of email to send
 * @param {string} otp - The OTP to send
 * @param {string} name - Recipient's name (optional)
 */
const sendEmail = async (to, type, otp, name = '') => {
  let subject = '';
  let text = '';

  if (type === 'signup') {
    subject = 'Verify your Email - OTP Inside';
    text = `Hi${name ? ` ${name}` : ''},\n\nThank you for registering.\nYour OTP for email verification is: ${otp}\n\nThis OTP is valid for 10 minutes.\n\n- InfoYieldX Team`;
  } else if (type === 'forgot') {
    subject = 'Reset Password - OTP Inside';
    text = `Hi${name ? ` ${name}` : ''},\n\nYou have requested to reset your password.\nYour OTP for password reset is: ${otp}\n\nThis OTP is valid for 10 minutes.\n\nIf you didn’t request this, please ignore this email.\n\n- InfoYieldX Team`;
  } else {
    throw new Error('Invalid email type');
  }

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to,
    subject,
    text,
  };

  await transporter.sendMail(mailOptions);
};

export default sendEmail;
