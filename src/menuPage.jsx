import "../styles/menuPage.css";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "./navbar";
import backArrow from "./assets/backArrow.png";

export default function MenuPage() {
  const navigate = useNavigate();
  return (
    <>
      <Navbar />
      <img
        src={backArrow}
        className="backArrow"
        onClick={() => navigate("/home")}
      />
      <h1>Menu:</h1>
      <div className="menu">
        <h3>Predjela</h3>
        <ul>
          <li>Bruskete 10€</li>
          <li>Grcka salata 10€</li>
          <li>Bucina juha 10€</li>
        </ul>
        <h3>Glavna jela</h3>
        <ul>
          <li>Mjesano meso 10€</li>
          <li>Dnevna riba 10€</li>
          <li>Cevapi 10€</li>
        </ul>
        <h3>Deserti</h3>
        <ul>
          <li>Tiramisu 10€</li>
          <li>Madarica 10€</li>
          <li>Krempita 10€</li>
        </ul>
        <button className="book" onClick={() => navigate("/form")}>
          Book a table!
        </button>
      </div>
    </>
  );
}
