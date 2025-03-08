export default function NewCard() {
    return (
      <form className="form" id="form-places" noValidate>
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
          />
          <span className="form__input-error" id="url-input-error"></span>
        </label>
        <button type="submit" className="form__save">
          Guardar
        </button>
      </form>
    );
  }
  