import React, { useEffect } from "react";

export default function ImagePopup({ card, onClose }) {
  useEffect(() => {
    function handleEscClose(event) {
      if (event.key === "Escape") {
        onClose();
      }
    }

    document.addEventListener("keydown", handleEscClose);
    return () => {
      document.removeEventListener("keydown", handleEscClose);
    };
  }, [onClose]);

  return (
    <div className="places__hidden-popup">
      <div className="places__hidden-container">
        <button className="places__card-closure" onClick={onClose}>
          <img src="../images/logo_plus.svg" alt="Simbolo +" className="places__card-closure-icon" />
        </button>
        <img src={card.link} alt={card.name} className="places__hidden-image" />
        <p className="places__hidden-description">{card.name}</p>
      </div>
    </div>
  );
}
