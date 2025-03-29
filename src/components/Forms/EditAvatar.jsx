import { useState, useContext, useRef } from "react";
import CurrentUserContext from "../../contexts/CurrentUserContext";

export default function EditAvatar() {
  const { handleUpdateAvatar } = useContext(CurrentUserContext);
  const avatarInputRef = useRef();

  function handleSubmit(event) {
    event.preventDefault();
    // Llamar a onUpdateAvatar con el valor del avatar
    handleUpdateAvatar({
      avatarUrl: avatarInputRef.current.value,  // Aquí usamos el valor del input
    });
  }
    return (
      <form className="form" id="form-image" noValidate onSubmit={handleSubmit}>
        <h2 className="form__title">Editar imagen</h2>
        <label className="form__field">
          <input
            type="url"
            id="url-input"
            name="url"
            className="form__input"
            placeholder="Enlace a la imagen"
            required
            ref={avatarInputRef}
          />
          <span className="form__input-error" id="url-input-error"></span>
        </label>
        <button type="submit" className="form__save">
          Guardar
        </button>
      </form>
    );
  }
  