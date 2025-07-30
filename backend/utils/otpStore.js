// utils/otpStore.js

const otpMap = new Map();

function saveOtp(email, otp, name, password) {
  otpMap.set(email, {
    otp,
    name,
    password,
    expiresAt: Date.now() + 5 * 60 * 1000, // expires in 5 min
  });
}

function getOtpData(email) {
  return otpMap.get(email);
}

function deleteOtp(email) {
  otpMap.delete(email);
}

module.exports = { saveOtp, getOtpData, deleteOtp };
