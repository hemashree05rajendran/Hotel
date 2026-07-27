import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import "./About.css";

export default function About() {
  const [contactData, setContactData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setContactData({ ...contactData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thank you, ${contactData.name}! Your message has been received.`);
    setContactData({ name: "", email: "", message: "" });
  };

  return (
    <div className="about-page">
      <Header />

      {/* Hero Section */}
      <div className="about-hero">
        <h2>About HotelMaster</h2>
        <p>Your comfort, our commitment.</p>
      </div>

      {/* Mission, Vision, Team Cards */}
      <div className="about-cards">
        <div className="card">
          <h3>Our Mission</h3>
          <p>
            To provide a seamless and enjoyable hotel booking experience,
            ensuring every guest feels valued and comfortable.
          </p>
        </div>

        <div className="card">
          <h3>Our Vision</h3>
          <p>
            To be the most trusted platform for hotel reservations,
            combining convenience, transparency, and excellence.
          </p>
        </div>

        <div className="card">
          <h3>Our Team</h3>
          <p>
            A passionate team of hospitality and tech enthusiasts,
            committed to making your stay memorable.
          </p>
        </div>
      </div>

      {/* Contact Form Section */}
      <div className="contact-form-section">
        <h3>Contact Us</h3>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={contactData.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={contactData.email}
            onChange={handleChange}
            required
          />
          <textarea
            name="message"
            placeholder="Your Message"
            value={contactData.message}
            onChange={handleChange}
            required
          />
          <button type="submit">Send Message</button>
        </form>
      </div>

      <Footer />
    </div>
  );
}
