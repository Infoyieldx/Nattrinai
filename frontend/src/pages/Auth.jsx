import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

import axios from "axios";

const Auth = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [otpSent, setOtpSent] = useState(false);
  const [otp, setOtp] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  /* ─────────────────────────────
     Password strength checks
  ───────────────────────────── */
  const passwordChecks = {
    length: password.length >= 8,
    uppercase: /[A-Z]/.test(password),
    lowercase: /[a-z]/.test(password),
    number: /[0-9]/.test(password),
    special: /[!@#$%^&*(),.?":{}|<>]/.test(password),
  };

  const allValid =
    passwordChecks.length &&
    passwordChecks.uppercase &&
    passwordChecks.lowercase &&
    passwordChecks.number &&
    passwordChecks.special;

  /* ─────────────────────────────
     Form helpers
  ───────────────────────────── */
  const toggleForm = () => {
    setIsLogin((prev) => !prev);
    setEmail("");
    setPassword("");
    setName("");
    setOtpSent(false);
    setOtp("");
    setMessage("");
  };

  /* ─────────────────────────────
     Signup – Send OTP
  ───────────────────────────── */
  const sendOtp = async () => {
    if (!email || !name || !password) {
      return alert("Fill name, email, and password before sending OTP");
    }
    try {
      const res = await axios.post("http://localhost:5000/api/auth/send-otp", {
        email,
        name,
        password,
      });
      if (res.data.success) {
        setOtpSent(true);
        setMessage("OTP sent to your email.");
      } else {
        setMessage(res.data.message || "OTP sending failed");
      }
    } catch (err) {
      const msg = err.response?.data?.message;
      if (msg?.toLowerCase().includes("exists")) {
        setMessage("Account already exists with this email.");
      } else {
        setMessage(msg || "Error sending OTP");
      }
    }
  };

  /* ─────────────────────────────
     Signup – Verify OTP
  ───────────────────────────── */
  const verifyOtpAndSignup = async () => {
    try {
      const res = await axios.post("http://localhost:5000/api/auth/verify-otp", {
        email,
        otp,
      });
      if (res.data.success) {
        localStorage.setItem("user", JSON.stringify(res.data.user));
        navigate("/profile");
      } else {
        alert(res.data.message || "Invalid OTP");
      }
    } catch (err) {
      alert(err.response?.data?.message || "OTP verification failed");
    }
  };

  /* ─────────────────────────────
     Login
  ───────────────────────────── */
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:5000/api/auth/login", {
        email,
        password,
      });
      if (res.data.success) {
        localStorage.setItem("user", JSON.stringify(res.data.user));
        navigate("/profile");
      } else {
        setMessage(res.data.message || "Login failed");
      }
    } catch (err) {
      const msg = err.response?.data?.message?.toLowerCase();
      if (msg?.includes("wrong password")) {
        setMessage("Wrong password");
      } else if (msg?.includes("not found")) {
        setMessage("Account not found");
      } else {
        setMessage("Login error");
      }
    }
  };

  /* ─────────────────────────────
     JSX
  ───────────────────────────── */
  return (
    <div className=" my-190px sm:my-[140px]  flex items-center justify-center px-4">
      <form
        onSubmit={isLogin ? handleLogin : (e) => e.preventDefault()}
        className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md"
      >
        <h2 className="text-2xl font-bold mb-6 text-center text-[#4A5A2A]">
          {isLogin ? "Login" : "Signup with OTP"}
        </h2>

        {message && (
          <p className="text-sm mb-4 text-center text-red-500">{message}</p>
        )}

        {!isLogin && (
          <input
            type="text"
            placeholder="Full Name"
            className="w-full mb-4 px-4 py-2 border rounded-lg"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        )}

        <input
          type="email"
          placeholder="Email"
          className="w-full mb-4 px-4 py-2 border rounded-lg"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        {/* Password field */}
        <input
          type="password"
          placeholder="Password"
          className="w-full mb-2 px-4 py-2 border rounded-lg"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        {/* Password rules (signup only) */}
        {!isLogin && (
          <div className="mb-4 text-sm text-gray-700 space-y-1">
            <p className={passwordChecks.length ? "text-green-600" : "text-red-500"}>
              • At least 8 characters
            </p>
            <p className={passwordChecks.uppercase ? "text-green-600" : "text-red-500"}>
              • One uppercase letter
            </p>
            <p className={passwordChecks.lowercase ? "text-green-600" : "text-red-500"}>
              • One lowercase letter
            </p>
            <p className={passwordChecks.number ? "text-green-600" : "text-red-500"}>
              • One number
            </p>
            <p className={passwordChecks.special ? "text-green-600" : "text-red-500"}>
              • One special character
            </p>
          </div>
        )}

        {/* Signup – Send OTP */}
        {!isLogin && !otpSent && (
          <button
            type="button"
            className={`w-full text-white py-2 rounded-lg mb-4 ${
              allValid
                ? "bg-[#4A5A2A] hover:bg-[#3D3F24]"
                : "bg-gray-400 cursor-not-allowed"
            }`}
            onClick={sendOtp}
            disabled={!allValid}
          >
            Send OTP
          </button>
        )}

        {/* Signup – Verify OTP */}
        {!isLogin && otpSent && (
          <>
            <input
              type="text"
              placeholder="Enter OTP"
              className="w-full mb-4 px-4 py-2 border rounded-lg"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              required
            />
            <button
              type="button"
              className="w-full bg-[#4A5A2A] text-white py-2 rounded-lg hover:bg-[#3D3F24]"
              onClick={verifyOtpAndSignup}
            >
              Verify OTP & Signup
            </button>
          </>
        )}

        {/* Login button */}
        {isLogin && (
          <button
            type="submit"
            className="w-full bg-[#4A5A2A] text-white py-2 rounded-lg hover:bg-[#3D3F24]"
          >
            Login
          </button>
        )}

        {/* Wrong password hint */}
       {isLogin && message.toLowerCase().includes("wrong password") && (
  <p className="text-sm text-center mt-2 text-blue-600">
    Forgot password?{" "}
    <Link to="/forgot-password" className="underline">
      Click here
    </Link>
  </p>
)}

        {/* Toggle link */}
        <p className="text-sm mt-4 text-center">
          {isLogin ? "Don't have an account?" : "Already have an account?"}{" "}
          <button
            type="button"
            onClick={toggleForm}
            className="text-[#4A5A2A] font-semibold"
          >
            {isLogin ? "Signup" : "Login"}
          </button>
        </p>
      </form>
    </div>
  );
};

export default Auth;
