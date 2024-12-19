import { BrowserRouter, Form, Route, Routes } from "react-router-dom";
import Home from "./Home";
import FormPage from "./formPage";
import MenuPage from "./menuPage";
import LoginPage from "./Login";
import SignUpPage from "./signUp";
import ReservationsPage from "./reservationsPage";
import Contact from "./contact";
import About from "./about";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route index element={<LoginPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/home" element={<Home />} />
          <Route path="/form" element={<FormPage />} />
          <Route path="/reservations" element={<ReservationsPage />} />
          <Route path="/menu" element={<MenuPage />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
