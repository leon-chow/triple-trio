import "./tile.css";
import { ICard } from "../../classes/card";

const Tile = (props: { number: number; card: ICard | null }) => {
  const placeCard = (selectedCard: ICard | null): void => {
    console.log(selectedCard?.id);
  };

  return (
    <div className="tile" onClick={() => placeCard}>
      {props.number}
      {props.card ? <div> {props.card.name}</div> : ""}
    </div>
  );
};

export default Tile;
