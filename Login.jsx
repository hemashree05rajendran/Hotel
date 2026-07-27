import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "./Login.css";

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    // 🔑 Admin login
    if (email === "admin@gmail.com" && password === "admin") {
      navigate("/admin-dashboard");
      return;
    }

    // 🗂 Check registered users
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const user = users.find(
      (u) => u.email === email && u.password === password
    );

    if (user) {
      navigate("/dashboard");
    } else {
      setError("Invalid email or password. Please register first.");
    }
  };

  return (
    <div className="login-page">
      <div className="form-container">
        <h2>Login</h2>
        <form onSubmit={handleLogin}>
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
          <button type="submit">Login</button>
          {error && <p style={{ color: "red" }}>{error}</p>}
        </form>

        {/* 🔗 Register link */}
        <p>
          Don’t have an account?{" "}
          <Link to="/register">Register here</Link>
        </p>
      </div>
    </div>
  );
}

export default Login;
