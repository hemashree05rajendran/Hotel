import React from "react";
import { useNavigate } from "react-router-dom";
import "./RoomBooking.css";

const rooms = [
  { id: 1, type: "Single Room", bed: "Single Bed", occupancy: 1, size: "200 sq ft", pricePerNight: 2000, discount: 0, image: "https://wallpaperaccess.com/full/2690578.jpg" },
  { id: 2, type: "Standard Room", bed: "Double Bed", occupancy: 2, size: "250 sq ft", pricePerNight: 3500, discount: 5, image: "https://wallpaperaccess.com/full/2690578.jpg" },
  { id: 3, type: "Deluxe Room", bed: "King Bed", occupancy: 2, size: "350 sq ft", pricePerNight: 5000, discount: 10, image: "https://wallpaperaccess.com/full/2690578.jpg" },
  { id: 4, type: "Family Room", bed: "2 Queen Beds", occupancy: 4, size: "400 sq ft", pricePerNight: 7000, discount: 10, image: "https://wallpaperaccess.com/full/2690578.jpg" },
  { id: 5, type: "Suite", bed: "Queen Bed", occupancy: 4, size: "500 sq ft", pricePerNight: 8000, discount: 15, image: "https://wallpaperaccess.com/full/2690578.jpg" },
];

rooms.sort((a, b) => a.pricePerNight - b.pricePerNight);

export default function RoomBooking() {
  const navigate = useNavigate();

  const calculateTotal = (price, discount) => price - (price * discount) / 100;

  const goHome = () => navigate("/dashboard");
  const handleLogout = () => navigate("/login");

  return (
    <div className="room-booking-page">
      {/* Navbar */}
      <nav className="navbar">
        <h1 className="logo">HotelMaster</h1>
        <div className="nav-links">
          <button className="logout-btn" onClick={handleLogout}>Logout</button>
        </div>
      </nav>

      {/* Header with title + Back to Home */}
      <header className="page-header">
        <button className="back-home-btn" onClick={goHome}>← Back to Home</button>
        <h2>Room Booking</h2>
      </header>

      {/* Room Cards */}
      <div className="room-booking-container">
        <div className="rooms-grid">
          {rooms.map((room) => (
            <div key={room.id} className="room-card">
              <img src={room.image} alt={room.type} />
              <h3>{room.type}</h3>
              <p>Bed: {room.bed}</p>
              <p>Occupancy: {room.occupancy} person(s)</p>
              <p>Size: {room.size}</p>
              <p>Price per Night: ₹{room.pricePerNight}</p>
              <p>Discount: {room.discount}%</p>
              <p><strong>Total Price: ₹{calculateTotal(room.pricePerNight, room.discount)}</strong></p>
              <button>Book Now</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
