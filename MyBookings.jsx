import React, { useState, useEffect } from "react";
import Header from "./Header";
import "./MyBookings.css";

export default function MyBookings() {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("bookings") || "[]");
    const currentUser = localStorage.getItem("currentUser");

    // filter only current user's bookings
    const myBookings = data.filter((b) => b.customer?.email === currentUser);
    setBookings(myBookings);
  }, []);

  const handlePay = (id) => {
    const updatedBookings = bookings.map((b) =>
      b.id === id ? { ...b, status: "Completed" } : b
    );

    setBookings(updatedBookings);

    // update all bookings in localStorage
    const allBookings = JSON.parse(localStorage.getItem("bookings") || "[]").map((b) =>
      b.id === id ? { ...b, status: "Completed" } : b
    );
    localStorage.setItem("bookings", JSON.stringify(allBookings));

    alert("Payment Successful!");
  };

  return (
    <div className="my-bookings-page">
      <Header />

      <header className="page-header">
        <h1>My Bookings</h1>
      </header>

      <main className="bookings-container">
        {bookings.length === 0 ? (
          <p>No bookings yet.</p>
        ) : (
          <table className="bookings-table">
            <thead>
              <tr>
                <th>Booking ID</th>
                <th>Room Type</th>
                <th>Name</th>
                <th>Check-in</th>
                <th>Check-out</th>
                <th>Days</th>
                <th>Total Amount</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {bookings.map((b) => (
                <tr key={b.id}>
                  <td>{b.id}</td>
                  <td>{b.room?.type}</td>
                  <td>{b.customer?.name}</td>
                  <td>{b.checkIn}</td>
                  <td>{b.checkOut}</td>
                  <td>{b.days}</td>
                  <td>₹{b.totalAmount}</td>
                  <td>{b.status}</td>
                  <td>
                    {b.status === "Confirmed" ? (
                      <button className="pay-now-btn" onClick={() => handlePay(b.id)}>
                        Pay
                      </button>
                    ) : (
                      <span>Paid</span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </main>
    </div>
  );
}
