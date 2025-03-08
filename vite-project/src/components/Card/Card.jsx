export default function Card({ title, imageUrl }) {
    return (
      <li className="card">
        <img className="card__image" src={imageUrl} alt={title} />
        <button
          aria-label="Eliminar tarjeta"
          className="card__delete-button"
          type="button"
        >
          <img
            src="../images/delete_icon.svg"
            className="card__delete-icon"
            alt="Eliminar"
          />
        </button>
        <div className="card__description">
          <h2 className="card__title">{title}</h2>
          <button
            aria-label="Me gusta"
            type="button"
            className="card__like-button"
          >
            <img
              src="../images/like_icon.svg"
              className="card__like-icon"
              alt="Me gusta"
            />
          </button>
        </div>
      </li>
    );
  }
  