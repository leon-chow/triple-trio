import Card from "../card/card";
import { Tiles } from "../../utils/constants";
import Tile from "../tile/tile";

import "./board.css";
import { getRandomHand } from "../../services/card.service";

const Board = (): JSX.Element => {
  const tileComponents = Tiles.map((num: number) => {
    return <Tile number={num} />;
  });

  return (
    <div className="gameRoot">
      <div className="playerHand">
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
      <div className="boardRoot">
        <h2 className="title"> Triple Trio </h2>
        <div className="gridRoot"> {tileComponents} </div>
      </div>
      <div className="playerHand">
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
};

export default Board;
