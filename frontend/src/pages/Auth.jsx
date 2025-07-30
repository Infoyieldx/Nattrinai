import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
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

  const toggleForm = () => {
    setIsLogin((prev) => !prev);
    setEmail("");
    setPassword("");
    setName("");
    setOtpSent(false);
    setOtp("");
    setMessage("");
  };

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
      setMessage(err.response?.data?.message || "Error sending OTP");
    }
  };

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
      setMessage(err.response?.data?.message || "Login error");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#f6f7f2] px-4">
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

        <input
          type="password"
          placeholder="Password"
          className="w-full mb-6 px-4 py-2 border rounded-lg"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        {!isLogin && !otpSent && (
          <button
            type="button"
            className="w-full bg-[#4A5A2A] text-white py-2 rounded-lg hover:bg-[#3D3F24] mb-4"
            onClick={sendOtp}
          >
            Send OTP
          </button>
        )}

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

        {isLogin && (
          <button
            type="submit"
            className="w-full bg-[#4A5A2A] text-white py-2 rounded-lg hover:bg-[#3D3F24]"
          >
            Login
          </button>
        )}

        {isLogin && message.toLowerCase().includes("wrong password") && (
          <p className="text-sm text-center mt-2 text-blue-600">
            Forgot password? (Feature coming soon)
          </p>
        )}

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
