import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "./Header"; 
  
import "./Roombook.css";
import s1 from "../images/s1.png";
import s2 from "../images/s2.png";
import s3 from "../images/s3.png";
import s4 from "../images/s4.png";
import p1 from "../images/p1.png";
import p2 from "../images/p2.png";
import p3 from "../images/p3.png";
import p4 from "../images/p4.png";
import d1 from "../images/d1.png";
import d2 from "../images/d2.png";
import d3 from "../images/d3.png";
import d4 from "../images/d4.png";

const rooms = [
  {
    id: 1,
    type: "Single Room",
    bed: "Single Bed",
    occupancy: 1,
    size: "200 sq ft",
    pricePerNight: 400,
    discount: 0,
    // images: [
    //    "D:/hotel-project/hotel/src/images/s1.png",
    //    "D:/hotel-project/hotel/src/images/s1.png",
    //    "D:/hotel-project/hotel/src/images/s1.png",
    //    "D:/hotel-project/hotel/src/images/s1.png",
    // ],
    images: [s1, s2, s3, s4],
  },
  {
    id: 2,
    type: "Standard Room",
    bed: "Double Bed",
    occupancy: 2,
    size: "250 sq ft",
    pricePerNight: 1500,
    discount: 5,
     images: [p1, p2, p3, p4],
  },
  {
    id: 3,
    type: "Deluxe Room",
    bed: "King Bed",
    occupancy: 2,
    size: "350 sq ft",
    pricePerNight: 2000,
    discount: 10,
    images: [d1, d2, d3, d4],
  },
  {
    id: 4,
    type: "Family Room",
    bed: "2 Queen Beds",
    occupancy: 4,
    size: "400 sq ft",
    pricePerNight: 3000,
    discount: 10,
    images: [
      "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/alexander-design-contemporary-family-room-1555952765.jpg",
      "https://tse2.mm.bing.net/th/id/OIP.KhO8kjYWrxHUDjZS1JAp3QHaE8?w=990&h=660&rs=1&pid=ImgDetMain&o=7&rm=3",
      "https://tse3.mm.bing.net/th/id/OIP.1ntTpUV2kYiZCERwVZJebAHaE8?rs=1&pid=ImgDetMain&o=7&rm=3",
      "https://media.istockphoto.com/photos/family-moving-into-a-new-apartment-picture-id1322994003?k=20&m=1322994003&s=612x612&w=0&h=D2QAsc0UM1j1h8oAqDqBA_lhGfhVHwNKEIQUTJ6lYPM=",
    ],
  },
  {
    id: 5,
    type: "Suite",
    bed: "Queen Bed",
    occupancy: 4,
    size: "500 sq ft",
    pricePerNight: 4000,
    discount: 15,
    images: [
      "https://th.bing.com/th/id/OIP.EHkOkOQcMloWfrd2qDWn9wHaE8?w=282&h=188&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
      "https://tse2.mm.bing.net/th/id/OIP.gkAZvIZazW5kIfDVg3FBnQHaE7?rs=1&pid=ImgDetMain&o=7&rm=3",
      "https://www.dorsetthotels.com/images/dorsett-kai-tak/stay/executive-balcony-suite/executivesuite-list-S360-desktop.webp",
      "https://tse1.mm.bing.net/th/id/OIP.pBR4kqeTH8TxlsVshaOjxAHaEH?rs=1&pid=ImgDetMain&o=7&rm=3",
    ],
  },
];

rooms.sort((a, b) => a.pricePerNight - b.pricePerNight);

export default function RoomBookingPage() {
  const navigate = useNavigate();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalRoomImages, setModalRoomImages] = useState([]);
  const [modalImageIndex, setModalImageIndex] = useState(0);

  const calculateTotal = (price, discount) =>
    price - (price * discount) / 100;

  const openModal = (images) => {
    setModalRoomImages(images);
    setModalImageIndex(0);
    setIsModalOpen(true);
  };

  const closeModal = () => setIsModalOpen(false);

  const prevImage = () => {
    setModalImageIndex((prev) =>
      prev === 0 ? modalRoomImages.length - 1 : prev - 1
    );
  };

  const nextImage = () => {
    setModalImageIndex((prev) =>
      prev === modalRoomImages.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <div className="room-booking-page">
      {/* ✅ Common Navbar */}
      <Header />

      <div className="room-booking-container">
        <h2 className="page-title">Available Rooms</h2>
        <div className="rooms-grid">
          {rooms.map((room) => (
            <div key={room.id} className="room-card">
              <img
                src={room.images[0]}
                alt={room.type}
                style={{ cursor: "pointer" }}
                onClick={() => openModal(room.images)}
              />
              <h3>{room.type}</h3>
              <p>Bed: {room.bed}</p>
              <p>Occupancy: {room.occupancy} person(s)</p>
              <p>Size: {room.size}</p>
              <p>Price per Night: ₹{room.pricePerNight}</p>
              <p>Discount: {room.discount}%</p>
              <p>
                <strong>
                  Total Price: ₹{calculateTotal(room.pricePerNight, room.discount)}
                </strong>
              </p>
              <button
                onClick={() => {
                  localStorage.setItem("selectedRoom", JSON.stringify(room));
                  navigate("/customer-details", { state: { room } });
                }}
              >
                Book Now
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* ✅ Modal for image slider */}
      {isModalOpen && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={closeModal}>
              ×
            </button>
            <button className="modal-prev" onClick={prevImage}>
              ‹
            </button>
            <img
              src={modalRoomImages[modalImageIndex]}
              alt="Room view"
              className="modal-image"
            />
            <button className="modal-next" onClick={nextImage}>
              ›
            </button>
            <p>
              {modalImageIndex + 1} / {modalRoomImages.length}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
