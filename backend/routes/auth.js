const express = require("express");
const nodemailer = require("nodemailer");
const bcrypt = require("bcrypt");
const User = require("../models/User");
require("dotenv").config();

const router = express.Router();

// ✅ Temporary OTP store (for development use only)
const otpStore = {};

// ✅ Email setup
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

// ✅ Send OTP during registration (DO NOT save user yet)
router.post("/send-otp", async (req, res) => {
  const { email, name, password } = req.body;
  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ success: false, message: "Account already exists." });
    }

    const otp = Math.floor(100000 + Math.random() * 900000).toString();
    const otpExpiry = Date.now() + 10 * 60 * 1000;

    otpStore[email] = {
      name,
      password,
      otp,
      otpExpiry,
    };

    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: email,
      subject: "Your OTP for Signup",
      html: `<h3>Your OTP is: <strong>${otp}</strong></h3>`,
    });

    res.json({ success: true, message: "OTP sent successfully" });
  } catch (err) {
    console.error("Send OTP Error:", err);
    res.status(500).json({ success: false, message: "Error sending OTP" });
  }
});

// ✅ Verify OTP & now save the user to DB
router.post("/verify-otp", async (req, res) => {
  const { email, otp } = req.body;

  try {
    const userInDB = await User.findOne({ email });
    if (userInDB) {
      return res.status(400).json({ success: false, message: "User already exists" });
    }

    const otpData = otpStore[email];
    if (!otpData) {
      return res.status(400).json({ success: false, message: "No OTP request found" });
    }

    if (otp !== otpData.otp) {
      return res.status(400).json({ success: false, message: "Invalid OTP" });
    }

    if (Date.now() > otpData.otpExpiry) {
      return res.status(400).json({ success: false, message: "OTP expired" });
    }

    const hashedPassword = await bcrypt.hash(otpData.password, 10);

    const newUser = await User.create({
      name: otpData.name,
      email,
      password: hashedPassword,
      verified: true,
    });

    delete otpStore[email]; // Clean up after verification

    res.json({ success: true, user: { name: newUser.name, email: newUser.email } });
  } catch (err) {
    console.error("Verify OTP Error:", err);
    res.status(500).json({ success: false, message: "OTP verification failed" });
  }
});

// ✅ Login
router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user) return res.status(404).json({ success: false, message: "Account not found." });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(401).json({ success: false, message: "Wrong password" });

    if (!user.verified) {
      return res.status(403).json({ success: false, message: "Please verify your email via OTP" });
    }

    res.json({ success: true, user: { name: user.name, email: user.email } });
  } catch (err) {
    console.error("Login Error:", err);
    res.status(500).json({ success: false, message: "Login failed" });
  }
});

// ✅ FORGOT PASSWORD: Send OTP
router.post("/forgot-password", async (req, res) => {
  const { email } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user) return res.status(404).json({ success: false, message: "User not found" });

    const otp = Math.floor(100000 + Math.random() * 900000).toString();
    const otpExpiry = Date.now() + 10 * 60 * 1000;

    user.otp = otp;
    user.otpExpiry = otpExpiry;
    await user.save();

    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: email,
      subject: "OTP to Reset Your Password",
      html: `<h3>Your OTP for password reset is: <strong>${otp}</strong></h3>`,
    });

    res.json({ success: true, message: "OTP sent to email for password reset" });
  } catch (err) {
    console.error("Forgot Password Error:", err);
    res.status(500).json({ success: false, message: "Failed to send OTP" });
  }
});

// ✅ RESET PASSWORD using OTP
router.post("/reset-password", async (req, res) => {
  const { email, otp, newPassword } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user) return res.status(404).json({ success: false, message: "User not found" });

    if (user.otp !== otp) return res.status(400).json({ success: false, message: "Invalid OTP" });
    if (Date.now() > user.otpExpiry) return res.status(400).json({ success: false, message: "OTP expired" });

    const hashed = await bcrypt.hash(newPassword, 10);
    user.password = hashed;
    user.otp = null;
    user.otpExpiry = null;
    await user.save();

    res.json({ success: true, message: "Password reset successfully" });
  } catch (err) {
    console.error("Reset Password Error:", err);
    res.status(500).json({ success: false, message: "Failed to reset password" });
  }
});

module.exports = router; 
   