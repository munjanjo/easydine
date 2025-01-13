import "../styles/navbar.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import user_icon from "./assets/user_icon.png";

export default function Navbar() {
  const navigate = useNavigate();
  const userEmail = localStorage.getItem("activeEmail");

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  const menuItems = [
    { label: "Profile", action: () => navigate("/profile") },
    {
      label: "Logout",
      action: () => {
        localStorage.removeItem("activeEmail");
        navigate("/login");
      },
    },
  ];

  return (
    <>
      <div className="navbar">
        <div className="navbar-logo">EasyDine</div>
        <div className="navbar-links">
          <div className="navbar-link" onClick={() => navigate("/home")}>
            Home
          </div>
          <div
            className="navbar-link"
            onClick={() => navigate("/reservations")}
          >
            Reservations
          </div>
          <div className="navbar-link" onClick={() => navigate("/contact")}>
            Contact
          </div>
          <div className="navbar-link" onClick={() => navigate("/about")}>
            About
          </div>

          {/* User icon with dropdown */}
          <div className="navbar-link" onClick={toggleMenu}>
            <img id="logo" src={user_icon} alt="" /> {userEmail}
          </div>
          {isOpen && (
            <div className="dropdown-menu">
              {menuItems.map((item, index) => (
                <div
                  key={index}
                  className={`dropdown-item ${
                    index < menuItems.length - 1 ? "dropdown-item-border" : ""
                  }`}
                  onClick={item.action}
                >
                  {item.label}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
}
