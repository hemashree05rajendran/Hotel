import React, { useState } from "react";
import Header from "./Header";   // ✅ Import your existing Header
import Footer from "./Footer";   // ✅ Import your existing Footer
import "./Feedback.css";         // ✅ Add styles

export default function FeedbackPage() {
  const [feedbackList, setFeedbackList] = useState([]);
  const [formData, setFormData] = useState({ name: "", feedback: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name.trim() && formData.feedback.trim()) {
      setFeedbackList([...feedbackList, formData]);
      setFormData({ name: "", feedback: "" });
      window.scrollTo({ top: 0, behavior: "smooth" }); // ✅ Scrolls back up after submit
    }
  };

  return (
    <div className="feedback-page">
      {/* ✅ Common Header */}
      <Header />

      {/* ✅ Feedback Section */}
      <main className="feedback-section">
        <h2>We Value Your Feedback</h2>
        <form className="feedback-form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <textarea
            name="feedback"
            placeholder="Write your feedback..."
            value={formData.feedback}
            onChange={handleChange}
            required
          />
          <button type="submit">Submit Feedback</button>
        </form>

        <div className="feedback-list">
          <h3>Previous Feedback</h3>
          {feedbackList.length === 0 ? (
            <p>No feedback yet. Be the first!</p>
          ) : (
            <ul>
              {feedbackList.map((f, index) => (
                <li key={index}>
                  <strong>{f.name}:</strong> {f.feedback}
                </li>
              ))}
            </ul>
          )}
        </div>
      </main>

      {/* ✅ Common Footer */}
      <Footer />
    </div>
  );
}
