import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "./CustomerDetails.css";

export default function CustomerDetails() {
  const navigate = useNavigate();
  const location = useLocation();
  const { room } = location.state || {};

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    members: 1,
    days: 1,
    checkIn: "",
    checkOut: "",
  });

  const [paymentDone, setPaymentDone] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // calculate checkout date
  const calculateCheckoutDate = () => {
    if (!formData.checkIn || !formData.days) return "";
    const checkInDate = new Date(formData.checkIn);
    checkInDate.setDate(checkInDate.getDate() + Number(formData.days));
    return checkInDate.toISOString().split("T")[0];
  };

  const checkoutDate = calculateCheckoutDate();

  const totalAmount = room ? room.pricePerNight * formData.days : 0;

  const handlePayment = (e) => {
    e.preventDefault();
    if (!room) {
      alert("Room info missing!");
      return;
    }

    alert(`Payment of ₹${totalAmount} Successful!`);
    setPaymentDone(true);

    // Save booking in localStorage
    const booking = {
      id: Date.now(),
      room,
      customer: formData,
      checkIn: formData.checkIn,
      checkOut: checkoutDate,
      days: formData.days,
      totalAmount,
      status: "Confirmed",
    };

    const existingBookings = JSON.parse(localStorage.getItem("bookings") || "[]");
    localStorage.setItem("bookings", JSON.stringify([...existingBookings, booking]));

    // Save current logged-in user (by email) 👇
    localStorage.setItem("currentUser", formData.email);
  };

  return (
    <div className="my-bookings-page">
      <nav className="navbar">
        <h1 className="logo">HotelMaster</h1>
        <button className="back-home-btn" onClick={() => navigate("/dashboard")}>
          ← Back to Home
        </button>
      </nav>

      <main className="bookings-container">
        {!paymentDone ? (
          <form className="booking-form" onSubmit={handlePayment}>
            <h2>Fill Your Details</h2>

            {room && (
              <p>
                Booking Room: <strong>{room.type}</strong> - ₹{room.pricePerNight} per night
              </p>
            )}

            <label>Name:</label>
            <input type="text" name="name" value={formData.name} onChange={handleChange} required />

            <label>Email:</label>
            <input type="email" name="email" value={formData.email} onChange={handleChange} required />

            <label>Phone:</label>
            <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required />

            <label>Address:</label>
            <textarea name="address" value={formData.address} onChange={handleChange} />

            <label>Members:</label>
            <input type="number" name="members" min="1" value={formData.members} onChange={handleChange} required />

            <label>Days:</label>
            <input type="number" name="days" min="1" value={formData.days} onChange={handleChange} required />

            <label>Check-in Date:</label>
            <input type="date" name="checkIn" value={formData.checkIn} onChange={handleChange} required />

            <label>Check-out Date:</label>
            <input type="date" name="checkOut" value={formData.checkOut} onChange={handleChange} required />

            <p>Total Amount: ₹{totalAmount}</p>

            <button type="submit" className="submit-btn">
              Pay Now
            </button>
          </form>
        ) : (
          <div className="confirmation">
            <h2>Booking Confirmed!</h2>
            <p>Room: {room.type}</p>
            <p>Total Amount Paid: ₹{totalAmount}</p>
            <p>Name: {formData.name}</p>
            <p>Check-in Date: {formData.checkIn}</p>
            <p>Check-out Date: {checkoutDate}</p>
            <button onClick={() => navigate("/dashboard")}>Back to Home</button>
          </div>
        )}
      </main>
    </div>
  );
}
