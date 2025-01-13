import Navbar from "./navbar";
import "../styles/Profile.css";
export default function Profile() {
  return (
    <>
      <Navbar />
      <h1>Profile</h1>
      <div className="profile-container">
        <input type="text" placeholder="Name" />
        <input type="text" placeholder="Phone" />
        <input type="password" placeholder="Password" />
      </div>
    </>
  );
}
