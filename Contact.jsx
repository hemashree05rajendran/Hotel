import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import "./Contact.css";

export default function ContactPage() {
  return (
    <div className="contact-page">
      {/* ✅ Common Header */}
      <Header />

      <main className="contact-content">
        <h2>Contact Us</h2>
        <p>
          Have questions or need help? Fill out the form below and our team will
          get back to you shortly.
        </p>

        <form className="contact-form">
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <textarea placeholder="Your Message" rows="5" required></textarea>
          <button type="submit">Send Message</button>
        </form>
      </main>

      {/* ✅ Common Footer */}
      <Footer />
    </div>
  );
}
