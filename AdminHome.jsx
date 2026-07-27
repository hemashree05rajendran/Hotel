import React from "react";
import "./AdminHome.css";

export default function AdminHome() {
  return (
    <div className="admin-home">
      <nav className="navbar">
        <h1 className="logo">👑 Admin Dashboard</h1>
        <button
          className="logout-btn"
          onClick={() => {
            window.location.href = "/login";
          }}
        >
          Logout
        </button>
      </nav>

      <header className="admin-header">
        <h2>Welcome Admin!</h2>
        <p>You have full control here.</p>
      </header>

      <main className="admin-content">
        <div className="card">📊 Manage Users</div>
        <div className="card">🏨 Manage Bookings</div>
        <div className="card">💰 Manage Payments</div>
      </main>
    </div>
  );
}
