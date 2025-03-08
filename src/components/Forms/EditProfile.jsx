export default function EditProfile() {
    return (
      <form className="form" id="form-author" noValidate>
        <h2 className="form__title">Editar perfil</h2>
        <label className="form__field">
          <input
            type="text"
            id="name-input"
            name="name"
            className="form__input"
            placeholder="Nombre"
            minLength="2"
            maxLength="40"
            required
          />
          <span className="form__input-error" id="name-input-error"></span>
        </label>
        <label className="form__field">
          <input
            type="text"
            id="about-input"
            name="about"
            className="form__input"
            placeholder="Acerca de mí"
            minLength="2"
            maxLength="200"
            required
          />
          <span className="form__input-error" id="about-input-error"></span>
        </label>
        <button type="submit" className="form__save">
          Guardar
        </button>
      </form>
    );
  }
  