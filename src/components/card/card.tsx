import "./card.css";
import { ICard } from "../../classes/card";
import { useEffect, useState } from "react";

const Card = (props: { cardData: ICard }): JSX.Element => {
  const [selectedCard, setSelectedCard] = useState<number>();

  useEffect(() => {}, [selectedCard]);

  const selectCard = (cardId: number) => {
    console.log(cardId);
    setSelectedCard(cardId);
    console.log(`new selected card is ${selectedCard}`);
  };

  return (
    <div
      className={`cardRoot ${
        selectedCard === props.cardData.id ? "cardSelected" : ""
      }`}
      onClick={() => selectCard(props.cardData.id)}
    >
      <img
        className="cardImage"
        src={props.cardData.image}
        alt={props.cardData.name}
      />
    </div>
  );
};

export default Card;
