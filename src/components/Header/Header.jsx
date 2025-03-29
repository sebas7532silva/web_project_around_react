import React, { useState, useEffect, useContext } from "react";
import EditAvatar from "../Forms/EditAvatar";
import Popup from "../Popup/Popup"; // Import the Popup component

function Header({ setPlacesFormOpen, setAuthorFormOpen, isEditImageOpen, setEditImageOpen, handleClosePopup, user}) {

  useEffect(() => {
    const handleEscKey = (e) => {
      if (e.key === "Escape") {
        handleClosePopup();
      }
    };

    // Agregar el listener
    window.addEventListener("keydown", handleEscKey);

    // Limpiar el listener cuando el componente se desmonte
    return () => {
      window.removeEventListener("keydown", handleEscKey);
    };
  }, [isEditImageOpen]);

  return (
    <header className="header">
      <div className="header__logo-container">
        <img src="../images/logo.svg" className="header__logo" alt="Logo de Around the U.S" />
      </div>

      {/* Lógica para mostrar el popup de edición de avatar */}
      {isEditImageOpen && (
        <Popup>
          <button
            onClick={() => handleClosePopup()} // Cerrar el popup
            className="popup__close"
          >
            <img
              src="../images/close_icon.svg"
              className="popup__close-icon"
              alt="Cerrar"
            />
          </button>
          <EditAvatar />
        </Popup>
      )}

      <div className="header__content">
        <div className="header__image-container">
          <img
            src={user.avatar}
            className="header__image"
            alt={user.name}
          />
          {/* Botón para abrir el formulario de edición de imagen */}
          <button onClick={() => setEditImageOpen(true)} className="header__image-edit">
            <img
              src="../images/author_pen_edit.svg"
              className="header__pen-edit-icon"
              alt="Editar"
            />
          </button>
        </div>
        <div className="header__author-information">
          <h1 className="header__author-name">{user.name}</h1>
          <h2 className="header__author-about">{user.about}</h2>
          <button
            onClick={() => setAuthorFormOpen(true)} // Update state to open author form
            className="header__author-edit"
          >
            <img
              src="../images/pen_edit.png"
              className="header__author-edit-icon"
              alt="Editar"
            />
          </button>
        </div>
        <button onClick={() => setPlacesFormOpen(true)} className="header__button">
          <img
            src="../images/logo_plus.svg"
            className="header__button-symbol"
            alt="Añadir"
          />
        </button>
      </div>
    </header>
  );
}

export default Header;