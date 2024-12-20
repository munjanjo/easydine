import Navbar from "./navbar.jsx";
import restaurant1 from "./assets/lucica.webp";
import restaurant2 from "./assets/mandrach.webp";
import restaurant3 from "./assets/dolis.jpeg";
import "../styles/home.css";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();
  return (
    <>
      <Navbar />
      <h1>Restaurants</h1>
      <div className="RestaurantContainer">
        <div className="container-image">
          <p>Restoran Lucica</p>
          <img
            src={restaurant1}
            className="image"
            onClick={() => navigate("/form")}
          />
        </div>
        <div className="container-image">
          <p>Restoran Mandrach</p>
          <img
            src={restaurant2}
            className="image"
            onClick={() => navigate("/form")}
          />
        </div>
        <div className="container-image">
          <p>Restoran Dolis</p>
          <img
            src={restaurant3}
            className="image"
            onClick={() => navigate("/form")}
          />
        </div>
        <div className="container-image">
          <p>Restoran Dolis</p>
          <img
            src={restaurant3}
            className="image"
            onClick={() => navigate("/form")}
          />
        </div>
        <div className="container-image">
          <p>Restoran Dolis</p>
          <img
            src={restaurant3}
            className="image"
            onClick={() => navigate("/form")}
          />
        </div>
        <div className="container-image">
          <p>Restoran Dolis</p>
          <img
            src={restaurant3}
            className="image"
            onClick={() => navigate("/form")}
          />
        </div>
        <div className="container-image">
          <p>Restoran Dolis</p>
          <img
            src={restaurant3}
            className="image"
            onClick={() => navigate("/form")}
          />
        </div>
        <div className="container-image">
          <p>Restoran Dolis</p>
          <img
            src={restaurant3}
            className="image"
            onClick={() => navigate("/form")}
          />
        </div>
      </div>
    </>
  );
}
