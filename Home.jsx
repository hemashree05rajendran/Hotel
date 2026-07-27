import { Link } from "react-router-dom";
import "./Home.css";

export default function Home() {
  return (
    <div className="hero">
      <div className="overlay">
        <h1 className="title">HotelMaster</h1>
        <p className="subtitle">Your Comfort, Our Priority</p>
        <div className="buttons">
          <Link to="/login" className="btn login">Login</Link>
          <Link to="/register" className="btn register">Register</Link>
        </div>
      </div>
    </div>
  );
}

