// src/pages/bookings.js

// Save a new booking
export function saveBooking(booking) {
  const current = JSON.parse(localStorage.getItem("bookings") || "[]");
  current.push(booking);
  localStorage.setItem("bookings", JSON.stringify(current));
}

// Get all bookings
export function getBookings() {
  return JSON.parse(localStorage.getItem("bookings") || "[]");
}

// Update booking status
export function updateBookingStatus(id, status) {
  const current = JSON.parse(localStorage.getItem("bookings") || "[]");
  const index = current.findIndex(b => b.id === id);
  if (index !== -1) {
    current[index].status = status;
    localStorage.setItem("bookings", JSON.stringify(current));
  }
}
