import { useEffect, useState } from "react";
import Card from "../Card/Card"; // Import the Card component

function Main({ cards, onCardLike, onCardDelete, onAddPlaceSubmit }) {
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
    </main>
  );
}

export default Main;

