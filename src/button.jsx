import { Link } from "react-router-dom";
import "../styles/button.css";

function Button() {
  return (
    <Link to="/form">
      <button className="button">Book a table!</button>
    </Link>
  );
}
export default Button;
