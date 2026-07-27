import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

export default function PaymentConfirmation() {
  const location = useLocation();
  const navigate = useNavigate();

  const bookingId = location.state?.bookingId;

  if (!bookingId) {
    // No booking ID passed — redirect back to dashboard
    navigate("/dashboard");
    return null;
  }

  return (
    <div className="confirmation-page" style={{ padding: "40px", textAlign: "center" }}>
      <h1>Payment Successful!</h1>
      <p>Your payment for booking ID <strong>{bookingId}</strong> has been completed.</p>
      <button onClick={() => navigate("/my-bookings")}>Back to My Bookings</button>
    </div>
  );
}
