import "../styles/ReservationsPage.css";
import { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "./navbar";

export default function ReservationsPage() {
  const [reservations, setReservations] = useState([]);

  useEffect(() => {
    const userEmail = localStorage.getItem("activeEmail");
    if (!userEmail) {
      console.error("No active email found in localStorage");
      return;
    }

    axios
      .get(`http://localhost:8081/reservations?email=${userEmail}`)
      .then((res) => {
        if (res.data && res.data.result) {
          setReservations(res.data.result);
        } else {
          console.warn("No reservations found for this email");
        }
      })
      .catch((err) => {
        console.error("Error fetching reservations:", err.message);
      });
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
    if (!id) {
      alert("Reservation ID is missing!");
      return;
    }

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
          {reservations.length === 0 ? (
            <p>No reservations available</p>
          ) : (
            reservations.map((res, index) => (
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
            ))
          )}
        </div>
      </div>
    </>
  );
}
