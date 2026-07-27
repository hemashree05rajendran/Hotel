import React from "react";
import { useNavigate } from "react-router-dom";
import "./Header.css";

export default function Header() {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/login"); 
  };

  return (
    <header className="header">
      {/* Logo */}
      <h1 className="logo">HotelMaster</h1>

      {/* Navigation Menu */}
      <nav className="nav-links">
        <button onClick={() => navigate("/dashboard")}>Home</button>
        <button onClick={() => navigate("/about")}>About</button>
        <button onClick={() => navigate("/rooms")}>Rooms</button>
        <button onClick={() => navigate("/my-bookings")}>My Bookings</button>
        <button onClick={() => navigate("/services")}>Services</button>
        <button onClick={() => navigate("/contact")}>Contact</button>
        <button onClick={() => navigate("/feedback")}>Feedback</button>
        <button className="logout-btn" onClick={handleLogout}>
          Logout
        </button>
      </nav>
    </header>
  );
}
