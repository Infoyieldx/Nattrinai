const express = require("express");
const nodemailer = require("nodemailer");
const { saveOtp, getOtpData, deleteOtp } = require("../utils/otpStore");
const router = express.Router();
require("dotenv").config();

const users = new Map(); // 🧠 Mock user database

// ✅ Email setup
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

// ✅ Send OTP for registration
router.post("/send-otp", async (req, res) => {
  const { email, name, password } = req.body;

  if (users.has(email)) {
    return res.status(400).json({ success: false, message: "Account already exists." });
  }

  const otp = Math.floor(100000 + Math.random() * 900000).toString();
  saveOtp(email, otp, name, password);

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: email,
    subject: "Your OTP for Signup",
    html: `<h3>Your OTP is: <strong>${otp}</strong></h3>`,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.json({ success: true, message: "OTP sent successfully" });
  } catch (error) {
    res.status(500).json({ success: false, message: "Failed to send OTP" });
  }
});

// ✅ Verify OTP & Register
router.post("/verify-otp", (req, res) => {
  const { email, otp } = req.body;
  const record = getOtpData(email);

  if (!record) {
    return res.status(400).json({ success: false, message: "OTP not found" });
  }

  if (Date.now() > record.expiresAt) {
    return res.status(400).json({ success: false, message: "OTP expired" });
  }

  if (otp !== record.otp) {
    return res.status(400).json({ success: false, message: "Invalid OTP" });
  }

  users.set(email, {
    email,
    name: record.name,
    password: record.password,
  });

  deleteOtp(email);

  res.json({ success: true, user: { email, name: record.name } });
});

// ✅ Login
router.post("/login", (req, res) => {
  const { email, password } = req.body;
  const user = users.get(email);

  if (!user) {
    return res.status(404).json({ success: false, message: "Account not found." });
  }

  if (user.password !== password) {
    return res.status(401).json({
      success: false,
      message: "Wrong password. Forgot password?",
    });
  }

  res.json({ success: true, user: { email: user.email, name: user.name } });
});

module.exports = router;
