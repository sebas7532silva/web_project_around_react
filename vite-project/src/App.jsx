import { useState } from "react";
import "./App.css";

function App() {
  const [isEditImageOpen, setEditImageOpen] = useState(false);
  const [isAuthorFormOpen, setAuthorFormOpen] = useState(false);
  const [isPlacesFormOpen, setPlacesFormOpen] = useState(false);
  const [isTrashConfirmationOpen, setTrashConfirmationOpen] = useState(false);

  return (
    <div className="page">
      <header className="header">
        <div className="header__logo-container">
          <img src="../images/logo.svg" className="header__logo" alt="Logo de Around the U.S" />
        </div>

        {isEditImageOpen && (
          <div className="popup">
            <div className="popup__container">
              <button onClick={() => setEditImageOpen(false)} className="popup__close">
                <img src="../images/close_icon.svg" className="popup__close-icon" alt="Close" />
              </button>
              <form className="form" noValidate>
                <h2 className="form__title">Cambiar foto de perfil</h2>
                <label className="form__field">
                  <input type="url" className="form__input" placeholder="Enlace a la imagen" required />
                </label>
                <button type="submit" className="form__save">Guardar</button>
              </form>
            </div>
          </div>
        )}

        <div className="header__content">
          <div className="header__image-container">
            <img src="../images/Explorer.jpg" className="header__image" alt="Foto del explorador" />
            <button onClick={() => setEditImageOpen(true)} className="header__image-edit">
              <img src="../images/author_pen_edit.svg" className="header__pen-edit-icon" alt="Editar" />
            </button>
          </div>
          <div className="header__author-information">
            <h1 className="header__author-name">Jacques Cousteau</h1>
            <h2 className="header__author-about">Explorador</h2>
            <button onClick={() => setAuthorFormOpen(true)} className="header__author-edit">
              <img src="../images/pen_edit.png" className="header__author-edit-icon" alt="Editar" />
            </button>
          </div>
          <button onClick={() => setPlacesFormOpen(true)} className="header__button">
            <img src="../images/logo_plus.svg" className="header__button-symbol" alt="Añadir" />
          </button>
        </div>
      </header>

      <main className="content">
        {isAuthorFormOpen && (
          <div className="popup">
            <div className="popup__container">
              <button onClick={() => setAuthorFormOpen(false)} className="popup__close">
                <img src="../images/close_icon.svg" className="popup__close-icon" alt="Close" />
              </button>
              <form className="form" noValidate>
                <h2 className="form__title">Editar perfil</h2>
                <label className="form__field">
                  <input type="text" className="form__input" placeholder="Nombre" minLength="2" maxLength="40" required />
                </label>
                <label className="form__field">
                  <input type="text" className="form__input" placeholder="Acerca de mí" minLength="2" maxLength="200" required />
                </label>
                <button type="submit" className="form__save">Guardar</button>
              </form>
            </div>
          </div>
        )}
      </main>

      <footer className="footer">
        <p className="footer__copyright">© 2024 Around The U.S.</p>
      </footer>
    </div>
  );
}

export default App;
