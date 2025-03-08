export default function Popup({ children }) {
    return (
      <div className="popup">
        <div className="popup__container">
          <button className="popup__close" type="button">
            <img src="../images/close_icon.svg" className="popup__close-icon" alt="Cerrar" />
          </button>
          {children}
        </div>
      </div>
    );
  }
  