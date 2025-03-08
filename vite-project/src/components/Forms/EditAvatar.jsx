export default function EditAvatar() {
    return (
      <form className="form" id="form-image" noValidate>
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
  