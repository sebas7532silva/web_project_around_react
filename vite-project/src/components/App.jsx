import { useState } from "react";
import "../index.css";
import Header from "./Header/Header";
import Main from "./Main/Main";
import Footer from "./Footer/Footer";

function App() {
  // Los estados para manejar la visibilidad de los formularios
  const [isEditImageOpen, setEditImageOpen] = useState(false); // Agregado para manejar el estado del avatar
  const [isAuthorFormOpen, setAuthorFormOpen] = useState(false);
  const [isPlacesFormOpen, setPlacesFormOpen] = useState(false);
  const [isTrashConfirmationOpen, setTrashConfirmationOpen] = useState(false);

  return (
    <div className="page">
      {/* Pasamos setEditImageOpen para manejar el formulario de avatar */}
      <Header
        setAuthorFormOpen={setAuthorFormOpen}
        setPlacesFormOpen={setPlacesFormOpen}
        setEditImageOpen={setEditImageOpen} // Pasamos esta función aquí
      />
      <Main />
      <Footer />
    </div>
  );
}

export default App;

