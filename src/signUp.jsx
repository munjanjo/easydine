import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "../styles/Login.css";
import user_icon from "./assets/person.png";
import email_icon from "./assets/email.png";
import password_icon from "./assets/password.png";

export default function SignUpPage() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [successMessage, setSuccessMessage] = useState(""); // State for success message

  function register(event) {
    event.preventDefault();
    console.log("Registering:", { name, email, password });

    axios
      .post("http://localhost:8081/signup", { name, email, password })
      .then((res) => {
        console.log("Response:", res.data);

        if (res.data.email) {
          localStorage.setItem("activeEmail", res.data.email);
          console.log(localStorage.getItem("activeEmail"));
          setSuccessMessage("Signed up successfully!");
          setTimeout(() => {
            setSuccessMessage(""); // Clear message before navigating
            navigate("/home");
          }, 1500); // 2-second delay for user to see the message
        } else {
          console.error("Unexpected response:", res.data);
          alert("Signup failed. Please try again.");
        }
      })
      .catch((err) => {
        console.error("Error during signup:", err);
        alert("Error during signup. Please try again.");
      });
  }

  return (
    <>
      <div className="LoginContainer">
        <form className="sign-up-form" onSubmit={register}>
          <div className="header">
            <div className="text">Sign up</div>
          </div>
          <div className="inputs">
            <div className="input">
              <img src={user_icon} alt="User Icon" />
              <input
                type="text"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="input">
              <img src={email_icon} alt="Email Icon" />
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="input">
              <img src={password_icon} alt="Password Icon" />
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="changeForm">
              Already have an account?
              <span onClick={() => navigate("/login")}> Login!</span>
            </div>
          </div>
          <div className="submit-container">
            <button type="submit" className="submit">
              Sign up
            </button>
          </div>
        </form>
        {successMessage && (
          <div className="success-message">{successMessage}</div>
        )}
      </div>
    </>
  );
}
