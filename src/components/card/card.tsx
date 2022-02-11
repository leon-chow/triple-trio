import "./card.css";
import { ICard } from "../../classes/card";
import { useState } from "react";

const Card = (props: {
  cardData: ICard;
  isSelected: boolean;
  selectCard: Function;
}): JSX.Element => {
  return (
    <div
      className={`cardRoot ${props.isSelected ? "cardSelected" : ""}`}
      onClick={() => props.selectCard(props.cardData.id)}
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
