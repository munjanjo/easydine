import { Link, NavLink } from "react-router-dom";
import email_icon from "./assets/email.png";
import password_icon from "./assets/password.png";
import "../styles/login.css";
import { useNavigate } from "react-router-dom";

export default function LoginPage() {
  const navigate = useNavigate();
  return (
    <>
      <div className="container">
        <div className="header">
          <div className="text">Login</div>
        </div>
        <div className="inputs">
          <div className="input">
            <img src={email_icon} alt="" />
            <input type="email" placeholder="Email" />
          </div>
          <div className="input">
            <img src={password_icon} alt="" />
            <input type="password" placeholder="Password" />
          </div>
          <div className="changeForm">
            No account?
            <span onClick={() => navigate("/signup")}> create one!</span>
          </div>
        </div>
        <div className="sumbit-conteiner">
          <button type="submit" className="submit">
            Login
          </button>
        </div>
      </div>
    </>
  );
}
