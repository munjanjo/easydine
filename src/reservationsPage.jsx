import "../styles/formPage.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function ReservationsPage() {
  const [reservations, setReservations] = useState([]);

  useEffect(() => {
    const userEmail = localStorage.getItem("activeEmail"); // Ovo bi dolazilo iz korisničkog profila
    console.log(userEmail);
    axios
      .get(`http://localhost:8081/reservations?email=${userEmail}`)
      .then((res) => {
        setReservations(res.data.result);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <div className="forma">
        {reservations.map((res) => (
          <div>
            {res.name} {res.surname} {res.date}
          </div>
        ))}
      </div>
    </>
  );
}
