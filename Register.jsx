import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Register.css";  // or Auth.css if using shared css

function Register() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [success, setSuccess] = useState("");

  const handleRegister = (e) => {
    e.preventDefault();

    // 🗂 Get existing users
    const users = JSON.parse(localStorage.getItem("users")) || [];

    // ❌ Prevent duplicate email
    if (users.find((u) => u.email === email)) {
      alert("Email already registered. Please login.");
      return;
    }

    // ✅ Save new user (with username + phone)
    users.push({ username, phone, email, password });
    localStorage.setItem("users", JSON.stringify(users));

    setSuccess("Registration successful! Redirecting to login...");
    setTimeout(() => navigate("/"), 2000); // go back to login page
  };

  return (
    <div className="register-page">
      <div className="form-container">
        <h2>Register</h2>
        <form onSubmit={handleRegister}>
          <input
            type="text"
            placeholder="Username"
            required
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="tel"
            placeholder="Phone Number"
            required
            pattern="[0-9]{10}" // ensure 10-digit phone
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
          <input
            type="email"
            placeholder="Email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit">Register</button>
        </form>
        {success && <p style={{ color: "green" }}>{success}</p>}
      </div>
    </div>
  );
}

export default Register;
