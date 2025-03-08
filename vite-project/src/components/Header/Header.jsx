import { useState } from "react";
import EditAvatar from "../Forms/EditAvatar";

function Header({ setAuthorFormOpen, setPlacesFormOpen, setEditImageOpen }) {
  return (
    <header className="header">
      <div className="header__logo-container">
        <img src="../images/logo.svg" className="header__logo" alt="Logo de Around the U.S" />
      </div>

      {/* Lógica para mostrar el popup de edición de avatar */}
      {setEditImageOpen && (
        <div className="popup">
          <div className="popup__container">
            {/* Botón para cerrar el popup */}
            <button
              onClick={() => setEditImageOpen(false)} 
              className="popup__close"
            >
              <img
                src="../images/close_icon.svg"
                className="popup__close-icon"
                alt="Cerrar"
              />
            </button>
            {/* Aquí se renderiza el formulario EditAvatar */}
            <EditAvatar />
          </div>
        </div>
      )}

      <div className="header__content">
        <div className="header__image-container">
          <img
            src="../images/Explorer.jpg"
            className="header__image"
            alt="Foto del explorador"
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
          <h1 className="header__author-name">Jacques Cousteau</h1>
          <h2 className="header__author-about">Explorador</h2>
          <button
            onClick={() => setAuthorFormOpen(true)}
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
