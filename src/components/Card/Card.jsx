import { useState } from "react";
import ImagePopup from "../ImagePopup/ImagePopup.jsx";

export default function Card({ card, onCardLike, onCardDelete }) {
  const [isImagePopupOpen, setIsImagePopupOpen] = useState(false);

  // Determinamos la clase del botón "like" basado en isLiked
  const cardLikeButtonClassName = `places__card-button ${
    card.isLiked ? "places__card-button_is-active" : ""
  }`;

  // Determinamos la imagen del "like" según si está activo o no
  const likeImageSrc = card.isLiked ? "../images/like_active.svg" : "../images/like.svg";

  // Función para manejar el clic en el botón "like"
  function handleLikeClick() {
    onCardLike(card);  // Llamamos a onCardLike con la tarjeta
  }

  function handleDeleteClick() {
    onCardDelete(card);  // Llamamos a onCardDelete con la tarjeta
  }

  return (
    <>
      <div className="places__card">
      <button className="places__card-trash" onClick={handleDeleteClick}>
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
          <button className={cardLikeButtonClassName} onClick={handleLikeClick}>
          <img src={likeImageSrc} alt="Like" className="places__card-like" />
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


  