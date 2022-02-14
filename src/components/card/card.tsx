import "./card.css";
import { ICard } from "../../classes/card";

const Card = (props: {
  cardData: ICard;
  isSelected: boolean;
  selectCard: Function;
  isDisabled: boolean;
}): JSX.Element => {
  return (
    <div
      className={`cardRoot ${props.isSelected ? "cardSelected" : ""}`}
      onClick={() => !props.isDisabled && props.selectCard(props.cardData.id)}
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
