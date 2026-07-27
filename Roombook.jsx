import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Roombook.css";

const rooms = [
  {
    id: 1,
    type: "Single Room",
    bed: "Single Bed",
    occupancy: 1,
    size: "200 sq ft",
    pricePerNight: 2000,
    discount: 0,
    images: [
      "https://i.pinimg.com/736x/b8/dd/bb/b8ddbb720728d4a64e6c098dc78aca07.jpg",
       "https://tse1.mm.bing.net/th/id/OIP.Hwbwy_XNfix_uj0OuPFVPgHaEH?w=600&h=333&rs=1&pid=ImgDetMain&o=7&rm=3",
      "https://tse2.mm.bing.net/th/id/OIP.DVKu3YQakjFlxKf2s3Y1CwHaFj?rs=1&pid=ImgDetMain&o=7&rm=3",
      "https://thumbs.dreamstime.com/b/old-bathroom-normal-apartment-interior-133853711.jpg",
    ],
  },
  {
    id: 2,
    type: "Standard Room",
    bed: "Double Bed",
    occupancy: 2,
    size: "250 sq ft",
    pricePerNight: 3500,
    discount: 5,
    images: [
      "https://hotelvilnia.lt/wp-content/uploads/2018/06/DSC07003-HDR-Edit-Edit-1.jpg",
      "https://www.shutterstock.com/image-photo/empty-stylish-old-style-hotel-260nw-2200866607.jpg",
      "https://tse1.mm.bing.net/th/id/OIP.VOdpgnv6Fo6lnVISZlwSbAHaE8?rs=1&pid=ImgDetMain&o=7&rm=3",
      "https://th.bing.com/th/id/OIP.6Le96Bv4EDx0DemRPWf_fAHaFj?w=263&h=197&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
    ],
  },
  {
    id: 3,
    type: "Deluxe Room",
    bed: "King Bed",
    occupancy: 2,
    size: "350 sq ft",
    pricePerNight: 5000,
    discount: 10,
    images: [
      "https://www.itchotels.com/content/dam/itchotels/in/umbrella/welcomHotel/hotels/welcomhotelkatra-katra/gallery/accommodaton/deluxe-room.jpg",
      "https://d3gq2merok8n5r.cloudfront.net/abhinav/ond-1634120396-Obfdc/ond-2022-1664872805-f0ijv/wr-1664873436-cbkRF/221-1666890986-XOTyx.jpg",
      "https://tse1.mm.bing.net/th/id/OIP.z-z5foVbTvuE_9ZHKXLliQHaFC?rs=1&pid=ImgDetMain&o=7&rm=3",
      "https://th.bing.com/th/id/OIP.bpCKJhdmvQrd-8qDTiDM3QHaFA?w=226&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
    ],
  },
  {
    id: 4,
    type: "Family Room",
    bed: "2 Queen Beds",
    occupancy: 4,
    size: "400 sq ft",
    pricePerNight: 7000,
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
    pricePerNight: 8000,
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

  // Modal state
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalRoomImages, setModalRoomImages] = useState([]);
  const [modalImageIndex, setModalImageIndex] = useState(0);

  const calculateTotal = (price, discount) =>
    price - (price * discount) / 100;

  const goHome = () => navigate("/dashboard");
  const handleLogout = () => navigate("/login");

  // Open modal with images for clicked room
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
      {/* Navbar */}
      <nav className="navbar">
        <h1 className="logo">HotelMaster</h1>
        <button className="logout-btn" onClick={handleLogout}>
          Logout
        </button>
      </nav>

      {/* Header */}
      <header className="page-header">
        <button className="back-home-btn" onClick={goHome}>
          ← Back to Home
        </button>
        <h2 className="page-title">Room Booking</h2>
      </header>

      {/* Room Cards */}
      <div className="room-booking-container">
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

      {/* Modal for image slider */}
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

