import { useState, useContext, useRef } from "react";
import CurrentUserContext from "../../contexts/CurrentUserContext";

export default function NewCard({ onAddPlaceSubmit }) {

  const { handleAddPlaceSubmit } = useContext(CurrentUserContext);
  const titleInputRef = useRef();
  const urlInputRef = useRef();

  const handleSubmit = (event) => {
    event.preventDefault();
    handleAddPlaceSubmit({
      name: titleInputRef.current.value,
      link: urlInputRef.current.value,
    });
  }

    return (
      <form className="form" id="form-places" noValidate onSubmit={handleSubmit}>
        <h2 className="form__title">Nuevo lugar</h2>
        <label className="form__field">
          <input
            type="text"
            id="title-input"
            name="titulo"
            className="form__input"
            placeholder="Título"
            minLength="2"
            maxLength="30"
            required
            ref={titleInputRef}
          />
          <span className="form__input-error" id="title-input-error"></span>
        </label>
        <label className="form__field">
          <input
            type="url"
            id="url-input"
            name="url"
            className="form__input"
            placeholder="Enlace a la imagen"
            required
            ref={urlInputRef}
          />
          <span className="form__input-error" id="url-input-error"></span>
        </label>
        <button type="submit" className="form__save">
          Guardar
        </button>
      </form>
    );
  }
  