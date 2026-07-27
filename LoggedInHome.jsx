import React from "react";
import { useNavigate } from "react-router-dom";
import "./LoggedInHome.css";
import Header from "./Header";
import Footer from "./Footer"; 

export default function LoggedInHome() {
  const navigate = useNavigate();

  const goToRoomBooking = () => {
    navigate("/rooms");
  };

  const goToMyBookings = () => {
    navigate("/my-bookings"); // make sure this route exists in your App.js
  };

  const goToServices = () => {
    navigate("/services");
  };

  return (
    <div className="loggedin-home">
      {/* ✅ Use common header */}
      <Header />

      <header className="hero-section">
        <h2>Welcome to HotelMaster</h2>
        <p>Your comfort is our priority</p>
        <div className="quote">
          <em>"A hotel is a home away from home."</em>
        </div>
      </header>

      <section className="features">
        <div
          className="feature-card"
          onClick={goToRoomBooking}
          style={{ cursor: "pointer" }}
        >
          <h3>Rooms</h3>
          <p>Check room availability and details.</p>
        </div>

        <div
          className="feature-card"
          onClick={goToMyBookings}
          style={{ cursor: "pointer" }}
        >
          <h3>My Bookings</h3>
          <p>Manage your reservations efficiently.</p>
        </div>

        <div
          className="feature-card"
          onClick={goToServices}
          style={{ cursor: "pointer" }}
        >
          <h3>Services</h3>
          <p>Explore hotel services and amenities.</p>
        </div>

          
      </section>
       {/* ✅ Add Footer here */}
      <Footer />
    </div>
  );
}
