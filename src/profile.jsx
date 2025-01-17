import Navbar from "./navbar";
import "../styles/Profile.css";
import axios from "axios";
import { useEffect, useState } from "react";

export default function Profile() {
  const [reservations, setReservations] = useState([]);

  useEffect(() => {
    const userEmail = localStorage.getItem("activeEmail");
    axios
      .get(`http://localhost:8081/reservations?email=${userEmail}`)
      .then((res) => {
        setReservations(res.data.result);
      })
      .catch((err) => console.log(err));
  }, []);

  const handleUpdate = (id, updatedInformation) => {
    axios
      .put(`http://localhost:8081/information/${id}`, updatedInformation)
      .then((res) => {
        console.log("Updated successfully:", res.data);
        // Refresh the reservations list
        setReservations((prev) =>
          prev.map((res) =>
            res.id === id ? { ...res, ...updatedInformation } : res
          )
        );
      })
      .catch((err) => console.error("Update error:", err.message));
  };

  return (
    <>
      <Navbar />
      <h1>Profile</h1>
      {reservations.map((res) => (
        <div className="profile-container" key={res.id}>
          <p>Change your information</p>
          <input
            className="profileInput"
            type="text"
            defaultValue={res.name}
            onChange={(e) => (res.name = e.target.value)}
          />
          <input
            className="profileInput"
            type="text"
            defaultValue={res.surname}
            onChange={(e) => (res.surname = e.target.value)}
          />
          <input
            className="profileInput"
            type="text"
            defaultValue={res.phone_number}
            onChange={(e) => (res.phone_number = e.target.value)}
          />
          <input
            className="profileInput"
            type="password"
            placeholder="New password"
            onChange={(e) => (res.newPassword = e.target.value)}
          />
          <input
            className="profileInput"
            type="password"
            placeholder="Confirm new password"
            onChange={(e) => (res.confirmPassword = e.target.value)}
          />
          <button
            className="confirm"
            onClick={() => {
              if (res.newPassword === res.confirmPassword) {
                handleUpdate(res.id, {
                  name: res.name,
                  surname: res.surname,
                  phone_number: res.phone_number,
                  password: res.newPassword,
                });
                alert("information updated successfully");
              } else {
                alert("passwords do not match");
              }
            }}
          >
            Confirm
          </button>
        </div>
      ))}
    </>
  );
}
