import { useEffect, useState } from "react";
import "../index.css";
import Header from "./Header/Header";
import Main from "./Main/Main";
import Footer from "./Footer/Footer";
import CurrentUserContext from "../contexts/CurrentUserContext";
import api from "../utils/api.js";

function App() {
  // Los estados para manejar la visibilidad de los formularios
  const [isEditImageOpen, setEditImageOpen] = useState(false); 
  const [isAuthorFormOpen, setAuthorFormOpen] = useState(false);
  const [isPlacesFormOpen, setPlacesFormOpen] = useState(false);
  const [isTrashConfirmationOpen, setTrashConfirmationOpen] = useState(false);

  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
  
    api
      .getUserInfo()
      .then((data) => {
        setCurrentUser(data);
      })
      .catch((err) => {
      });
  }, []);

  const handleUpdateUser = (data) => {
    (async () => {
      await api.postUserInfo(data).then((newData) => {
        setCurrentUser(newData);
        handleClosePopup();
      });
    })();
  };

  const handleUpdateAvatar = ({ avatarUrl }) => {
    // Llamar a updateProfilePicture para hacer la solicitud de actualización
    api.updateProfilePicture(avatarUrl)
      .then((updatedUserData) => {

        // Actualizar el avatar en el estado local
        setCurrentUser((prevUser) => ({
          ...prevUser,
          avatar: updatedUserData.avatar,  // Asegúrate de que "updatedUserData.avatar" es lo correcto
        }));
        handleClosePopup();
      })
      .catch((err) => {
        console.error("Error al actualizar avatar", err);
      });
  };

  const handleClosePopup = () => {
    setAuthorFormOpen(false);
    setEditImageOpen(false);
    setPlacesFormOpen(false);
    setTrashConfirmationOpen(false);
  };

  const [cards, setCards] = useState([]);

  useEffect(() => {
    api.getInitialCards().then((data) => {
      setCards(data);
    }).catch((err) => {
      console.error("Error al obtener las tarjetas:", err);
    });
  }, []);

  // Función para manejar el like de una tarjeta
  const handleCardLike = async (card) => {
    const isLiked = card.isLiked;
    try {
      const newCard = await api.changeLikeCardStatus(card._id, !isLiked);
      setCards((state) =>
        state.map((currentCard) =>
          currentCard._id === card._id ? newCard : currentCard
        )
      );
    } catch (error) {
      console.error(error);
    }
  };

  // Función para manejar la eliminación de una tarjeta
  const handleCardDelete = async (card) => {
    try {
      await api.deleteCard(card._id);
      setCards((state) => state.filter((currentCard) => currentCard._id !== card._id));
    } catch (error) {
      console.error(error);
    }
  };

  // Función para agregar una nueva tarjeta
  const handleAddPlaceSubmit = (data) => {
    (async () => {
      await api.postCard(data).then((newCard) => {
        setCards([newCard, ...cards]);
      }).catch((err) => {
        console.error("Error al agregar tarjeta", err);
      });
    })();
  };
  

  return (
    <CurrentUserContext.Provider value={{ currentUser, handleUpdateUser, handleUpdateAvatar, handleAddPlaceSubmit }}>
      <div className="page">
        <Header
          user={currentUser || {}}
          isAuthorFormOpen={isAuthorFormOpen}
          isEditImageOpen={isEditImageOpen}
          isPlacesFormOpen={isPlacesFormOpen}
          setAuthorFormOpen={setAuthorFormOpen}
          setPlacesFormOpen={setPlacesFormOpen}
          setEditImageOpen={setEditImageOpen}
          handleClosePopup={handleClosePopup}
          onAddPlaceSubmit={handleAddPlaceSubmit}
        />
        <Main
          cards={cards}
          onCardLike={handleCardLike}
          onCardDelete={handleCardDelete}
          
        />
          
        <Footer />
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
