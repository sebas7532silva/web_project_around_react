import { useState } from "react";
import ImagePopup from "../ImagePopup/ImagePopup.jsx";

export default function Card({ card }) {
  const [isImagePopupOpen, setIsImagePopupOpen] = useState(false);

  return (
    <>
      <div className="places__card">
        <button className="places__card-trash">
          <img className="places__card-trash-icon" src="../images/trash.svg" alt="Trash" />
        </button>
        <img
          className="places__card-image"
          src={card.link}
          alt={card.name}
          onClick={() => setIsImagePopupOpen(true)}
        />
        <div className="places__card-info">
          <p className="places__card-title">{card.name}</p>
          <button className="places__card-button">
            <img src="../images/like.svg" alt="Like" className="places__card-like" />
          </button>
        </div>
      </div>
      {isImagePopupOpen && (
        <ImagePopup
          card={card}
          onClose={() => setIsImagePopupOpen(false)}
        />
      )}
    </>
  );
}
  