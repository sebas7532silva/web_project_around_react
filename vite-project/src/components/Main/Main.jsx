import { useState } from "react";
import Card from "../Card/Card"; // Import the Card component

const cards = [
  {
    isLiked: false,
    _id: '5d1f0611d321eb4bdcd707dd',
    name: 'Yosemite Valley',
    link: 'https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_yosemite.jpg',
    owner: '5d1f0611d321eb4bdcd707dd',
    createdAt: '2019-07-05T08:10:57.741Z',
  },
  {
    isLiked: false,
    _id: '5d1f064ed321eb4bdcd707de',
    name: 'Lake Louise',
    link: 'https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_lake-louise.jpg',
    owner: '5d1f0611d321eb4bdcd707dd',
    createdAt: '2019-07-05T08:11:58.324Z',
  },
];

function Main() {
  const [isAuthorFormOpen, setAuthorFormOpen] = useState(false);

  return (
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
      <ul className="places">
        {cards.map(card => (
          <Card key={card._id} card={card} />
        ))}
      </ul>
    </main>
  );
}

export default Main;
