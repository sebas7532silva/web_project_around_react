import { useState, useContext } from "react";
import CurrentUserContext from "../../contexts/CurrentUserContext";

export default function EditProfile() {
  const userContext = useContext(CurrentUserContext);
  const { currentUser, handleUpdateUser } = userContext;

  const [name, setName] = useState(currentUser.name);
  const [description, setDescription] = useState(currentUser.about);

  const handleNameChange = (event) => {
    setName(event.target.value); // Actualiza name cuando cambie la entrada
  };

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value); // Actualiza description cuando cambie la entrada
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    handleUpdateUser({ name, about: description }); // Actualiza el usuario con los nuevos valores
  };


    return (
      <form 
      className="form" 
      id="form-author" 
      noValidate
      onSubmit={handleSubmit}>
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
            value={name}
            onChange={handleNameChange}
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
            value={description}
            onChange={handleDescriptionChange}
          />
          <span className="form__input-error" id="about-input-error"></span>
        </label>
        <button type="submit" className="form__save">
          Guardar
        </button>
      </form>
    );
  }
  