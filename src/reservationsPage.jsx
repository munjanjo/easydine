import "../styles/ReservationsPage.css";
import { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "./navbar";

export default function ReservationsPage() {
  const [reservations, setReservations] = useState([]);

  useEffect(() => {
    const userEmail = localStorage.getItem("activeEmail");
    console.log(userEmail);
    axios
      .get(`http://localhost:8081/reservations?email=${userEmail}`)
      .then((res) => {
        setReservations(res.data.result);
      })
      .catch((err) => console.log(err));
  }, []);

  const formatDateTime = (isoString) => {
    if (!isoString) return "Date not specified";

    const dateObj = new Date(isoString);
    const formattedDate = dateObj.toISOString().split("T")[0];
    const formattedTime = dateObj.toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    });
    return `${formattedDate} at ${formattedTime}`;
  };
  const cancelReservation = (id) => {
    axios
      .delete(`http://localhost:8081/reservations/${id}`)
      .then((res) => {
        alert("Reservation cancelled successfully");
        setReservations((prev) =>
          prev.filter((reservation) => reservation.id !== id)
        );
      })
      .catch((err) => {
        console.error("Error cancelling reservation:", err.message);
        alert("Failed to cancel reservation. Please try again.");
      });
  };

  return (
    <>
      <Navbar />
      <div className="ReservationsContainer">
        <h1 id="h1">Your Reservations</h1>
        <div className="reservation-list">
          {reservations.map((res, index) => (
            <div className="reservation-card" key={index}>
              <p>
                <strong>Restaurant:</strong> {res.restaurant}
              </p>
              <p>
                <strong>Name:</strong> {res.name}
              </p>
              <p>
                <strong>Surname:</strong> {res.surname}
              </p>
              <div className="reservation-datetime">
                <p>
                  <strong>Date:</strong> {formatDateTime(res.date)}
                </p>
              </div>
              <button
                className="cancelReservation"
                onClick={() => cancelReservation(res.id)}
              >
                Cancel
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
