import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "../styles/login.css";
import { Link } from "react-router-dom";


const Login = () => {
  const navigate = useNavigate();

  //---------- adding notes -------------

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      email: e.target.email.value,
      password: e.target.password.value,
    };

    try {
      const response = await axios.post(
        "http://localhost:3000/user/login",
        data
      );
      if (response.status === 200) {
        alert(response.data.message);
        navigate("/");
        localStorage.setItem("user", response.data.data);
      }
    } catch (error) {
      alert(error.response.data.message);
    }
  };

  //----------------------------------------------

  return (
    <div className="login-container">
      <div className="login-image">

      </div>
      <div className="login-wrapper">

      <div className="login-head" >
        <h2>Login</h2>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="email-input">
          <input placeholder="Email" type="email" name="email" autoComplete="off" />
        </div>
        <div className="password-input">
          <input placeholder="Password" type="password" name="password" autoComplete="off"/>
        </div>
        <div className="login-btn">
          <button type="submit">Login</button>
        </div>
        <div className="signin">
                <span>
                  Create  an account? <Link to="/register">Signup here</Link>
                </span>
              </div>
      </form>
      </div>
    </div>
  );
};

export default Login;
