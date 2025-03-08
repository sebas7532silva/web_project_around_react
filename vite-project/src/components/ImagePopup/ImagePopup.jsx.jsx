import { useState } from 'react';

export default function ImagePopup({ imageUrl, isOpen, onClose }) {
  if (!isOpen) return null;  // No mostrar el modal si no está abierto

  return (
    <div className="popup">
      <div className="popup__content">
        <img src={imageUrl} alt="Imagen ampliada" className="popup__image" />
        <button
          aria-label="Cerrar"
          className="popup__close-button"
          onClick={onClose}
        >
          X
        </button>
      </div>
    </div>
  );
}
