import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { validateAuthForm } from "../utils/validation";
import "./AuthPopup.css";

function AuthPopup({ mode, setMode, closePopup }) {
  const isLogin = mode === "login";
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    fullName: "",
    emailOrPhone: "",
    password: "",
    confirmPassword: "",
  });

  const [error, setError] = useState("");

  const handleInput = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

    setError("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const errorMessage = validateAuthForm(formData, isLogin);

    if (errorMessage) {
      setError(errorMessage);
      return;
    }

    try {
      if (isLogin) {
        const response = await axios.post(
          "http://localhost:5000/api/auth/login",
          {
            email: formData.emailOrPhone,
            password: formData.password,
          }
        );

        localStorage.setItem("token", response.data.token);

        localStorage.setItem(
          "user",
          JSON.stringify(response.data.user)
        );

        closePopup();

        navigate("/profile");
      } else {
        await axios.post(
          "http://localhost:5000/api/auth/signup",
          {
            fullName: formData.fullName,
            email: formData.emailOrPhone,
            password: formData.password,
          }
        );

        alert("Account created successfully!");

        setFormData({
          fullName: "",
          emailOrPhone: "",
          password: "",
          confirmPassword: "",
        });

        setMode("login");
      }
    } catch (error) {
      setError(
        error.response?.data?.message ||
          "Something went wrong"
      );
    }
  };

  return (
    <div className="auth-overlay">
      <div className="auth-popup">

        <button className="close-btn" onClick={closePopup}>
          ✕
        </button>

        <div className="auth-header">
          <h1>SkillDo</h1>
          <p>Learn. | Build. | Grow.</p>
        </div>

        <h2>{isLogin ? "Login Now" : "Sign Up Now"}</h2>

        <form className="auth-form" onSubmit={handleSubmit}>

          {!isLogin && (
            <input
              type="text"
              name="fullName"
              placeholder="Enter Full Name"
              value={formData.fullName}
              onChange={handleInput}
            />
          )}

          <input
            type="text"
            name="emailOrPhone"
            placeholder="Enter Email"
            value={formData.emailOrPhone}
            onChange={handleInput}
          />

          <input
            type="password"
            name="password"
            placeholder="Enter Password"
            value={formData.password}
            onChange={handleInput}
          />

          {!isLogin && (
            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirm Password"
              value={formData.confirmPassword}
              onChange={handleInput}
            />
          )}

          {isLogin && (
            <p className="forgot-password">
              Forgot Password?
            </p>
          )}

          {error && (
            <p className="error-message">
              {error}
            </p>
          )}

          <button className="auth-btn" type="submit">
            {isLogin ? "Login" : "Sign Up"}
          </button>

          <p className="switch-text">
            {isLogin ? (
              <>
                Don't have an account?{" "}
                <span
                  className="switch-link"
                  onClick={() => setMode("signup")}
                >
                  Sign Up
                </span>
              </>
            ) : (
              <>
                Already have an account?{" "}
                <span
                  className="switch-link"
                  onClick={() => setMode("login")}
                >
                  Login
                </span>
              </>
            )}
          </p>

          <div className="divider">
            <span>or</span>
          </div>

          <button type="button" className="google-btn">
            Continue with Google
          </button>

          <button type="button" className="apple-btn">
            Continue with Apple
          </button>

          <p className="terms">
            By continuing, you agree to our Terms of Service
            and Privacy Policy.
          </p>

        </form>
      </div>
    </div>
  );
}

export default AuthPopup;

