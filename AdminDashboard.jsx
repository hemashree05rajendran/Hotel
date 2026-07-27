import React from "react";
import { useNavigate } from "react-router-dom";
import "./AdminDashboard.css";

export default function AdminDashboard() {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/login");
  };

  return (
    <div className="admin-dashboard">
      {/* Sidebar */}
      <aside className="sidebar">
        <h2>👑 Admin Panel</h2>
        <ul>
          <li>🏠 Home</li>
          <li>👥 Manage Users</li>
          <li>🏨 Manage Rooms</li>
          <li>📊 Reports</li>
        </ul>
      </aside>

      {/* Main content */}
      <main className="main-content">
        <header className="topbar">
          <h1>Welcome, Admin!</h1>
          <button onClick={handleLogout} className="logout-btn">Logout</button>
        </header>

        <section className="dashboard-content">
          <div className="card">📌 Total Users: 120</div>
          <div className="card">🏨 Bookings: 85</div>
          <div className="card">💰 Revenue: ₹1,25,000</div>
        </section>
      </main>
    </div>
  );
}
