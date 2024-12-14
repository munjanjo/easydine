import { Link, NavLink } from "react-router-dom";
import user_icon from "./assets/person.png";
import email_icon from "./assets/email.png";
import password_icon from "./assets/password.png";
import "../styles/login.css";
import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function SignUpPage() {
  const navigate = useNavigate();
  return (
    <>
      <div className="container">
        <form className="sign-up-form">
          <div className="header">
            <div className="text">Sign up</div>
          </div>
          <div className="inputs">
            <div className="input">
              <img src={user_icon} alt="" />
              <input type="text" placeholder="Name" />
            </div>
            <div className="input">
              <img src={email_icon} alt="" />
              <input type="email" placeholder="Email" />
            </div>
            <div className="input">
              <img src={password_icon} alt="" />
              <input type="password" placeholder="Password" />
            </div>
            <div className="changeForm">
              Already have an account?
              <span onClick={() => navigate("/login")}> Login!</span>
            </div>
          </div>
          <div className="sumbit-conteiner">
            <button type="submit" className="submit">
              Sign up
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
