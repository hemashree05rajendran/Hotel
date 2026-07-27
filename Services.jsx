import React, { useState } from "react";
import "./Services.css";
import Header from "../pages/Header"; // import reusable header

const serviceImages = {
  "24/7 Room Service": [
    "https://tse4.mm.bing.net/th/id/OIP.oRoFktb3XdElWFGO8NbrpQHaE8?rs=1&pid=ImgDetMain&o=7&rm=3",
    "https://th.bing.com/th/id/OIP.MFwpaTsgAcjqDADCjWAdogHaEK?w=285&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
  ],
  Laundry: [
    "https://i.pinimg.com/originals/59/dd/a2/59dda2187029b11dd4c5db7ac4c92962.jpg",
    "https://5.imimg.com/data5/XV/DW/NS/SELLER-59138772/laundry-services-500x500.jpg",
  ],
  "In-room Dining": [
    "https://shunshelter.com/images/resources/are-there-any-additional-fees-or-charges-associated-with-using-in-room-dining-services-in-hotels_20240114095123.webp",
    "https://anaintercontinental-tokyo.jp/wp-content/uploads/2018/08/ird_image.jpg",
  ],
  "Pool Access": [
    "https://tse4.mm.bing.net/th/id/OIP.NLB34CdXn_PYiodZP_DeCwHaEO?rs=1&pid=ImgDetMain&o=7&rm=3",
    "https://tse2.mm.bing.net/th/id/OIP.3gwIxHRJIwo3-1Ksew-ACwHaEQ?w=1000&h=575&rs=1&pid=ImgDetMain&o=7&rm=3",
  ],
  "Spa & Wellness": [
    "https://tse1.explicit.bing.net/th/id/OIP.sWT5xZyjrWGmd_tbRil3WQHaE7?rs=1&pid=ImgDetMain&o=7&rm=3",
    "https://2.bp.blogspot.com/-lSnHcuHJJWM/WD9pG-bIVeI/AAAAAAAAAOg/pxlMGhQi10gXxG0qKBNuU8vw5_jRIKteACLcB/s1600/first.jpg",
  ],
  Gym: [
    "https://puttonmillfitness.co.uk/wp-content/uploads/2024/03/AdobeStock_644633742-1024x683.webp",
    "https://tse3.mm.bing.net/th/id/OIP.F3o1erfDe_RYBvsyDgwV6wHaE8?rs=1&pid=ImgDetMain&o=7&rm=3",
  ],
};

export default function Services() {
  const [selectedService, setSelectedService] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleServiceClick = (service) => {
    setSelectedService(service);
    setCurrentIndex(0);
  };

  const closeModal = () => setSelectedService(null);

  const nextImage = () =>
    setCurrentIndex(
      (prev) => (prev + 1) % serviceImages[selectedService].length
    );

  const prevImage = () =>
    setCurrentIndex((prev) =>
      prev === 0
        ? serviceImages[selectedService].length - 1
        : prev - 1
    );

  return (
    <div className="services-page">
      {/* ✅ Reusable header */}
      <Header title="Hotel Services" />

      <main className="services-container">
        <ul>
          {Object.keys(serviceImages).map((service) => (
            <li
              key={service}
              onClick={() => handleServiceClick(service)}
              style={{ cursor: "pointer" }}
            >
              {getIcon(service)} {service}
            </li>
          ))}
        </ul>
      </main>

      {selectedService && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <h2>{selectedService}</h2>
            <img
              src={serviceImages[selectedService][currentIndex]}
              alt={`${selectedService} ${currentIndex + 1}`}
              className="service-image"
            />
            <div className="modal-controls">
              <button onClick={prevImage}>⟨ Prev</button>
              <button onClick={nextImage}>Next ⟩</button>
            </div>
            <button className="close-btn" onClick={closeModal}>
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

const getIcon = (service) => {
  if (service.includes("Room Service")) return "🛏️";
  if (service.includes("Laundry")) return "🧺";
  if (service.includes("Dining")) return "🍽️";
  if (service.includes("Airport")) return "🚗";
  if (service.includes("Pool")) return "🏊";
  if (service.includes("Spa")) return "💆";
  if (service.includes("Gym")) return "💪";
  return "🛎️";
};
