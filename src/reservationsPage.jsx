import "../styles/formPage.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function ReservationsPage() {
  const [reservations, setReservations] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8081/reservations")
      .then((res) => {
        console.log(res.data);
        setReservations(res.data.result);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <div className="forma">
        {reservations.map((res) => (
          <div>
            {res.name} {res.surname}
          </div>
        ))}
      </div>
    </>
  );
}
