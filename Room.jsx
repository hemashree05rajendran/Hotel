import React from "react";
import { useNavigate } from "react-router-dom";
import "./Room.css";
import Services from "./Services";  // ✅ import your services component

export default function RoomPage() {
  const navigate = useNavigate();

  return (
    <div className="room-page">
      {/* Navbar */}
      <header className="page-header">
        <button className="back-home-btn" onClick={() => navigate("/dashboard")}>
          ← Back to Home
        </button>
        <h1 className="page-title">Room Booking & Services</h1>
      </header>

      {/* Services list below navbar */}
      <Services />
    </div>
  );
}
