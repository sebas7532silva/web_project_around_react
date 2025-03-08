import { useState } from "react";
import EditAvatar from "../Forms/EditAvatar";
import EditProfile from "../Forms/EditProfile"; // Import the author form component
import Popup from "../Popup/Popup"; // Import the Popup component
import NewCard from "../Forms/NewCard";

function Header({ isAuthorFormOpen, setAuthorFormOpen, setPlacesFormOpen, setEditImageOpen }) {
  const [isEditImageOpen, setIsEditImageOpen] = useState(false); // Add state for edit image form
  const [isPlacesFormOpen, setIsPlacesFormOpen] = useState(false); // Add state for places form

  return (
    <header className="header">
      <div className="header__logo-container">
        <img src="../images/logo.svg" className="header__logo" alt="Logo de Around the U.S" />
      </div>

      {/* Lógica para mostrar el popup de edición de avatar */}
      {isEditImageOpen && (
        <Popup>
          <button
            onClick={() => setIsEditImageOpen(false)} 
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

      {/* Lógica para mostrar el popup de edición de autor */}
      {isAuthorFormOpen && (
        <Popup>
          <button
            onClick={() => setAuthorFormOpen(false)} 
            className="popup__close"
          >
            <img
              src="../images/close_icon.svg"
              className="popup__close-icon"
              alt="Cerrar"
            />
          </button>
          <EditProfile />
        </Popup>
      )}

      {/* Lógica para mostrar el popup de edición de lugares */}
      {isPlacesFormOpen && (
        <Popup>
          <button
            onClick={() => setIsPlacesFormOpen(false)} 
            className="popup__close"
          >
            <img
              src="../images/close_icon.svg"
              className="popup__close-icon"
              alt="Cerrar"
            />
          </button>
          <NewCard />
        </Popup>
      )}

      <div className="header__content">
        <div className="header__image-container">
          <img
            src="../images/Explorer.jpg"
            className="header__image"
            alt="Foto del explorador"
          />
          {/* Botón para abrir el formulario de edición de imagen */}
          <button onClick={() => setIsEditImageOpen(true)} className="header__image-edit">
            <img
              src="../images/author_pen_edit.svg"
              className="header__pen-edit-icon"
              alt="Editar"
            />
          </button>
        </div>
        <div className="header__author-information">
          <h1 className="header__author-name">Jacques Cousteau</h1>
          <h2 className="header__author-about">Explorador</h2>
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
        <button onClick={() => setIsPlacesFormOpen(true)} className="header__button">
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