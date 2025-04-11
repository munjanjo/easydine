import "../styles/Login.css";
import email_icon from "./assets/email.png";
import password_icon from "./assets/password.png";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

export default function LoginPage() {
  const navigate = useNavigate();
  const [values, setValues] = useState({
    email: "",
    password: "",
  });
  const [successMessage, setSuccessMessage] = useState(""); // State for success message

  function login(event) {
    event.preventDefault();

    if (!values.email || !values.password) {
      alert("Please enter both email and password.");
      return;
    }

    axios
      .post("http://localhost:8081/login", values)
      .then((res) => {
        console.log("Response received:", res.data);

        if (res.data.Status === "Success") {
          console.log("Login successful, navigating to /home...");
          localStorage.setItem("activeEmail", res.data.email);
          setSuccessMessage("Logged in successfully!"); // Set success message
          setTimeout(() => {
            navigate("/home"); // Navigate after a short delay
          }, 1500); // Optional delay to allow the user to see the message
        } else {
          console.error("Unexpected response format:", res.data);
          alert(res.data.Error || "An unknown error occurred.");
        }
      })
      .catch((err) => {
        if (err.response) {
          console.error("Error response data:", err.response.data);
          if (err.response.status === 404) {
            alert("Email not found. Please sign up.");
          } else if (err.response.status === 401) {
            alert("Incorrect password. Please try again.");
          } else {
            alert(
              err.response.data?.Error || "An error occurred on the server."
            );
          }
        } else if (err.request) {
          console.error("No response received:", err.request);
          alert("Unable to reach the server. Please check your connection.");
        } else {
          console.error("Error message:", err.message);
          alert("An unexpected error occurred. Please try again later.");
        }
      });
  }

  return (
    <>
      <div className="LoginContainer">
        <div className="header">
          <div className="text">Login</div>
        </div>
        <form onSubmit={login}>
          <div className="inputs">
            <div className="input">
              <img src={email_icon} alt="" />
              <input
                type="email"
                placeholder="Email"
                onChange={(e) =>
                  setValues({ ...values, email: e.target.value })
                }
              />
            </div>
            <div className="input">
              <img src={password_icon} alt="" />
              <input
                type="password"
                placeholder="Password"
                onChange={(e) =>
                  setValues({ ...values, password: e.target.value })
                }
              />
            </div>
            <div className="changeForm">
              No account?
              <span onClick={() => navigate("/signup")}> create one!</span>
            </div>
          </div>
          <div className="submit-container">
            <button type="submit" className="submit">
              Login
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
