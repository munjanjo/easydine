import "../styles/navbar.css";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();
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
        </div>
      </div>
    </>
  );
}
