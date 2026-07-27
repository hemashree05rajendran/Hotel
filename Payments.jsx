import React, { useEffect, useState } from "react";
import { getBookings, updateBookingStatus } from "./booking";
import { useNavigate } from "react-router-dom";
import "./Payment.css";

export default function Payments() {
  const navigate = useNavigate();
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    let data = getBookings();

    // TEST ONLY: Force first booking status to Pending for button visibility
    if (data.length > 0) {
      data[0].status = "Pending";
    }

    setBookings(data);
  }, []);

  const handlePay = (id) => {
    updateBookingStatus(id, "Completed");
    const updated = getBookings();
    setBookings(updated);
    alert("Payment Successful!");
  };

  return (
    <div className="payment-page">
      <nav className="navbar">
        <h1 className="logo">HotelMaster</h1>
        <button className="back-home-btn" onClick={() => navigate("/dashboard")}>Back</button>
      </nav>

      <div className="payment-container">
        <div className="payment-card">
          <h2>Payments</h2>
          {bookings.length === 0 ? (
            <p>No bookings yet.</p>
          ) : (
            <table className="bookings-table">
              <thead>
                <tr>
                  <th>Booking ID</th>
                  <th>Room Type</th>
                  <th>Date</th>
                  <th>Total</th>
                  <th>Status</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {bookings.map((b) => {
                  console.log("Booking status:", b.status);
                  const status = b.status.trim().toLowerCase();
                  return (
                    <tr key={b.id}>
                      <td>{b.id}</td>
                      <td>{b.roomType}</td>
                      <td>{b.date}</td>
                      <td>₹{b.totalAmount}</td>
                      <td className={status}>{b.status}</td>
                      <td>
                        {status === "pending" ? (
                          <button className="pay-now-btn" onClick={() => handlePay(b.id)}>Pay</button>
                        ) : (
                          <span>Paid</span>
                        )}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </div>
  );
}
