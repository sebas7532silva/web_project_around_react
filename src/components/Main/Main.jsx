import { useEffect, useState } from "react";
import Card from "../Card/Card"; // Import the Card component
import Popup from "../Popup/Popup"; // Import the Popup component
import NewCard from "../Forms/NewCard";
import EditProfile from "../Forms/EditProfile"; // Import the author form component
import CurrentUserContext from "../../contexts/CurrentUserContext"; // Import the CurrentUserContext
import { useContext } from "react";

function Main({ cards, onCardLike, onCardDelete, onAddPlaceSubmit, isPlacesFormOpen, isAuthorFormOpen, handleClosePopup }) {

  // Importamos el CurrentUserContext
  const { currentUser } = useContext(CurrentUserContext);

  return (
    <main className="content">
      <ul className="places">
        {cards.map((card) => (
          <Card
            key={card._id}
            card={card}
            isLiked={false}
            onCardLike={onCardLike}
            onCardDelete={onCardDelete}
          />
        ))}
      </ul>

      {isAuthorFormOpen && (
        <Popup>
          <button
            onClick={() => handleClosePopup()} // Cerrar el popup
            className="popup__close"
          >
            <img
              src="../images/close_icon.svg"
              className="popup__close-icon"
              alt="Cerrar"
            />
          </button>
          <EditProfile />  {/* Aquí renderizas el formulario de edición de perfil */}
        </Popup>
      )}

      {isPlacesFormOpen && (
        <Popup>
          <button
            onClick={() => handleClosePopup()} // Cerrar el popup
            className="popup__close"
          >
            <img
              src="../images/close_icon.svg"
              className="popup__close-icon"
              alt="Cerrar"
            />
          </button>
          <NewCard onAddPlaceSubmit={onAddPlaceSubmit}/>
        </Popup>
      )}
    </main>
  );
}

export default Main;

