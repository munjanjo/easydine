import Navbar from "./navbar";
import "../styles/ReservationsPage.css";

export default function About() {
  return (
    <>
      <Navbar />
      <div className="container">
        <h1>About</h1>
      </div>
      <div className="about-card">
        EasyDine is a web application that allows users to easily reserve a
        table and pre-order food. Through an intuitive interface, guests can
        quickly find available time slots and select dishes from the menu. For
        restaurants, the application simplifies managing reservations and
        orders, reducing administrative costs and improving the customer
        experience.
      </div>
    </>
  );
}
