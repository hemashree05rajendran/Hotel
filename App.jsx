import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import LoggedInHome from "./pages/LoggedInHome"; // dashboard
import Newbook from "./pages/Newbook";
import CustomerDetails from "./pages/CustomerDetails";
import MyBookings from "./pages/MyBookings"; 
import Services from "./pages/Services"; 
import AdminDashboard from "./pages/AdminDashboard";
import AdminHome from "./pages/AdminHome";
import About from "./pages/About";
import Footer from "./pages/Footer";
import Feedback from "./pages/Feedback";
import Contact from "./pages/Contact";
// import Payments from "./pages/Payments"; 
// import PaymentConfirmation from "./pages/PaymentConfirmation";
// import Roombook from "./pages/Roombook"; 
import "./App.css";
 



function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />        
      <Route path="/login" element={<Login />} />  
      <Route path="/register" element={<Register />} /> 
      <Route path="/dashboard" element={<LoggedInHome />} /> 
      <Route path="/rooms" element={<Newbook />} /> 
      <Route path="/customer-details" element={<CustomerDetails />} />
      <Route path="/my-bookings" element={<MyBookings />} />
      <Route path="/services" element={<Services/>} />
       <Route path="/admin-dashboard" element={<AdminDashboard />} />
       <Route path="/admin-dashboard" element={<AdminHome />} /> 
       <Route path="/about" element={<About />} /> 
       <Route path="/footer" element={<Footer />} /> 
       <Route path="/feedback" element={<Feedback />} /> 
       <Route path="/contact" element={<Contact />} /> 
       {/* <Route path="/payments" element={<Payments />} />
       <Route path="/payment-confirmation" element={<PaymentConfirmation />} /> 
         <Route path="/room-book" element={<Roombook />} /> */}
    </Routes>
  );
}

export default App;


